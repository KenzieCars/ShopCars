import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IDefaultProviderProps, ILogin, IUser, IUserContext } from "./@types";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { ICreateUser } from "../../components/RegisterForm/@types";
import { ICar, TUserCarsResponse } from "../CarProvider/@types";
import { ResetEmailData } from "../../components/ModalSendEmail/@types";
import { ResetPasswordData } from "../../components/ModalResetPassword/@types";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [listCarsUser, setListCarsUser] = useState<ICar[] | []>([]);
  const [userIdCars, setUserIdCars] = useState<TUserCarsResponse | null>(null);
  const [modalForgottenOpen, setModalForgottenOpen] = useState<boolean>(false);

  const userLogin = async (formData: ILogin) => {
    try {
      setLoading(true);
      const res = await api.post("/login", formData);

      setUser(res.data);

      localStorage.setItem("@userToken", res.data.token);
      localStorage.setItem("@userId", res.data.id);

      toast.success("Logged in!");

      navigate("/profile");
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  const [profileEditModal, setProfileEditModal] = useState(false);
  const [addressEditModal, setAddressEditModal] = useState(false);

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
          console.log(response.data);
          setUserIdCars(response.data);

          setUser(response.data);

          setListCarsUser(response.data.cars);

          if (!response.data.seller) {
            navigate("/userPage");
          } else {
            navigate("/profile");
          }
        } catch (error) {
          console.log(error);
        }
      };
      userLogged();
    }
  }, []);

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

  const sendEmail = async (sendEmailData: ResetEmailData) => {
    try {
      await api.post("/users/resetPassword", sendEmailData);

      toast.success("Email successfully sent");
    } catch (error) {
      console.log(error);

      toast.error("Error send email");
    }
  };

  const resetPassword = async (
    resetPasswordData: ResetPasswordData,
    token: string
  ) => {
    const passres = { password: resetPasswordData.password };
    console.log(passres);
    console.log(token);
    console.log(resetPasswordData);
    try {
      await api.patch(`/users/resetPassword/${token}`, passres);

      toast.success("Password changed successfully");

      navigate("/login");
    } catch (error) {
      console.log(error);

      toast.error("Password reset error, please try again");
    }
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
    
      setUserIdCars(previousUser => ({
        ...previousUser,
        ...res.data
      }))

      setUser(previousUser => ({
        ...previousUser,
        ...res.data
      }))

      setUser((previousUser) => ({
        ...previousUser,
        ...res.data,
      }));

      toast.success("Usuário atualizado");
    } catch (error) {
      console.log(error);
      toast.error("Falha ao atualizar usuário");
    }
  };

  const deleteUser = async () => {
    const token = localStorage.getItem("@userToken");
    const id = localStorage.getItem("@userId");

    try {
      await api.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(null);
      localStorage.clear();

      toast.success("Conta deletada");

      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado :(");
    }
  };

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
        modalForgottenOpen,
        setModalForgottenOpen,
        sendEmail,
        resetPassword,
        updateUser,
        profileEditModal,
        setProfileEditModal,
        deleteUser,
        addressEditModal,
        setAddressEditModal
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
