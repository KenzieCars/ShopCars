import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IDefaultProviderProps, ILogin, IRegister, IUserContext } from "./@types";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  const userLogin = async (formData: ILogin) => {
    console.log(formData)
    try {
      setLoading(true)
      const res = await api.post('/login', formData)

      setUser(res.data)

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

  const userRegister = async (formData: IRegister) => {
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
      userRegister, logout
    }}>
      { children }
    </UserContext.Provider>
  )
}