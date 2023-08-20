import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IDefaultProviderProps, ILogin, IUser, IUserContext } from "./@types";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { ICreateUser } from "../../components/RegisterForm/@types";
import { ICar, TUserCarsResponse } from "../CarProvider/@types";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [listCarsUser, setListCarsUser] = useState<ICar[] | []>([]);
  const [userIdCars, setUserIdCars] = useState<TUserCarsResponse | null>(null);
  const [profileEditModal, setProfileEditModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@userToken");
    const userId = localStorage.getItem("@userId");

    if (token) {
      const userLogged = async () => {
        try {
          const response = await api.get<TUserCarsResponse>(
            `/users/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setUserIdCars(response.data);

          setUser(response.data);

          setListCarsUser(response.data.cars);

          if (!response.data.seller) {
            navigate("/userPage");
          }
          else {
            navigate("/profile")
          }

        } catch (error) {
          console.log(error);
        }
      };
      userLogged();
    }
  }, []);

  const userLogin = async (formData: ILogin) => {
    try {
      setLoading(true);
      const res = await api.post("/login", formData);

      setUser(res.data);

      localStorage.setItem("@userToken", res.data.token);
      localStorage.setItem("@userId", res.data.id);
      localStorage.setItem("@seller", res.data.seller);

      toast.success("Logged in!");

      if (!res.data.seller) {
        navigate("/userPage");
      }
      else {
        navigate("/profile")
      }

    } catch (error) {
      console.log(error);

      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (formData: ICreateUser) => {
    try {
      setLoading(true);
      const res = await api.post("/users", formData);

      console.log(res);

      setUser(res.data);

      toast.success("User registered!");

      navigate("/login");
    } catch (error) {
      console.log(error);

      toast.error("Email already exists.");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);

    localStorage.clear();

    navigate("/login");
  };

  const updateUser = async (formData: Partial<IUser>) => {
    const token = localStorage.getItem("@userToken");
    const id = localStorage.getItem("@userId");

    try {
      const res = await api.patch(`/users/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setUser(previousUser => ({
        ...previousUser,
        ...res.data
      }))

      toast.success('Usuário atualizado')
    } catch (error) {
      console.log(error)
      toast.error('Falha ao atualizar usuário')
    }
  };

  const deleteUser = async () => {
    const token = localStorage.getItem("@userToken");
    const id = localStorage.getItem("@userId");

    try {
      await api.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setUser(null)
      localStorage.clear()

      toast.success('Conta deletada')

      navigate('/login')
    } catch (error) {
      console.log(error)
      toast.error('Algo deu errado :(')
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        setLoading,
        userLogin,
        userRegister,
        logout,
        listCarsUser,
        userIdCars,
        setListCarsUser,
        setUserIdCars,
        updateUser,
        profileEditModal,
        setProfileEditModal,
        deleteUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
