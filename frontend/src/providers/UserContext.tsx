import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IDefaultProviderProps, ILogin, IUserContext } from "./@types";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { ICreateUser } from '../components/RegisterForm/@types';
import { ICar, TUserCarsResponse } from "./CarProvider/@types";

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [listCarsUser, setListCarsUser] = useState<ICar[] | []>([]);
  const [userIdCars, setUserIdCars] = useState<TUserCarsResponse | null>(null);

  const userLogin = async (formData: ILogin) => {
    console.log(formData)
    try {
      setLoading(true)
      const res = await api.post('/login', formData)

      setUser(res.data)

      console.log(res.data)
      console.log(res)

      localStorage.setItem('@userToken', res.data.token)

      toast.success('Logged in!')

      navigate('/')

    } catch (error) {
      console.log(error)

      toast.error('Something went wrong!')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@userToken");
    const userId = localStorage.getItem("@userId");

    if (token) {
      const userLogged = async () => {
        try {
          const response = await api.get<TUserCarsResponse>(`/users/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setUserIdCars(response.data);

          setListCarsUser(response.data.cars);

          // navigate("/dashboard");
        } catch (error) {
          console.log(error);
        }
      };
      userLogged();
    }
  }, []);

  const userRegister = async (formData: ICreateUser) => {
    try {
      setLoading(true)
      const res = await api.post('/users', formData)

      console.log(res)

      setUser(res.data)

      toast.success('User registered!')

      navigate('/login')

    } catch (error) {
      console.log(error)

      toast.error('Email already exists.')
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    setUser(null)

    localStorage.clear()

    navigate('/login')
  }

  return (
    <UserContext.Provider value={{
      user, loading,
      setLoading, userLogin,
      userRegister, logout,
      listCarsUser, userIdCars,
      setListCarsUser, setUserIdCars,
    }}>
      {children}
    </UserContext.Provider>
  )
}