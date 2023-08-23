import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  ICarSeller,
  IDefaultProviderProps,
  ILogin,
  IUser,
  IUserContext,
  IUserSeller,
} from "./@types";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { ICreateUser } from "../../components/RegisterForm/@types";
import {
  ICar,
  TDataCarResponse,
  TUserCarsResponse,
} from "../CarProvider/@types";
import { ResetEmailData } from "../../components/ModalSendEmail/@types";
import { ResetPasswordData } from "../../components/ModalResetPassword/@types";
import { CarContext } from "../CarProvider/CarContext";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [listCarsUser, setListCarsUser] = useState<ICar[] | []>([]);
  const [userIdCars, setUserIdCars] = useState<TUserCarsResponse | null>(null);
  const [modalForgottenOpen, setModalForgottenOpen] = useState<boolean>(false);
  const [profileEditModal, setProfileEditModal] = useState(false);
  const [addressEditModal, setAddressEditModal] = useState(false);
  const [allcarsUser, setAllcarsUser] = useState<ICarSeller[] | []>([]);
  const [allcarsUserPerPage, setAllcarsUserPerPage] = useState<
    ICarSeller[] | []
  >([]);
  const [cardModal, setCardModal] = useState(false);

  const [currentPageprofile, setCurrentPageprofile] = useState(1);

  const [currentPageprofileComum, setCurrentPageprofileComum] = useState(1);
  const [allcarsComumProfile, setAllCarsComumProfile] = useState<
    TDataCarResponse[] | []
  >([]);
  const [allcarsComumProfilePerPage, setAllCarsComumProfilePerPage] = useState<
    TDataCarResponse[] | []
  >([]);
  const { allcars } = useContext(CarContext);

  const userLogin = async (formData: ILogin) => {
    try {
      setLoading(true);
      const res = await api.post("/login", formData);

      setUser(res.data);

      setUserIdCars(res.data);

      localStorage.setItem("@userToken", res.data.token);
      localStorage.setItem("@userId", res.data.id);
      setCurrentPageprofile(1);
      setCurrentPageprofileComum(1);

      toast.success("Logged in!");

      if (!res.data.seller) {
        navigate("/userPage");
      } else {
        navigate("/profile");
      }
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

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
          } else {
            navigate("/profile");
          }
        } catch (error) {
          console.log(error);
        }
      };
      userLogged();
    }
  }, [allcarsUserPerPage, allcars]);

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
    setCurrentPageprofile(2);
    setCurrentPageprofileComum(2);
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
          Authorization: `Bearer ${token}`,
        },
      });

      setUserIdCars((previousUser) => ({
        ...previousUser,
        ...res.data,
      }));

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

  const itemsPerPage = 12;

  const carUserSeller = async () => {
    const token = localStorage.getItem("@userToken");
    const id = localStorage.getItem("@userId");

    try {
      const response = await api.get<IUserSeller[]>(`/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const carsUser2 = response.data.filter((user) => user.id == id);

      const carsUser = carsUser2[0].cars;

      setAllcarsUser(carsUser);

      const startIndex = (currentPageprofile - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      setAllcarsUser(carsUser);

      const listpagination = carsUser.slice(startIndex, endIndex);

      setAllcarsUserPerPage(listpagination);
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado :(");
    }
  };

  useEffect(() => {
    carUserSeller();
  }, []);

  useEffect(() => {
    carUserSeller();
  }, [currentPageprofile]);

  const carUser = async () => {
    try {
      const response = await api.get<TDataCarResponse[]>("/cars");

      const carsUser = response.data;

      setAllCarsComumProfile(carsUser);

      const startIndex = (currentPageprofileComum - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      setAllCarsComumProfile(carsUser);

      const listpagination = carsUser.slice(startIndex, endIndex);

      setAllCarsComumProfilePerPage(listpagination);
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado :(");
    }
  };

  useEffect(() => {
    carUser();
  }, []);

  useEffect(() => {
    carUser();
  }, [currentPageprofileComum]);

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
        setAddressEditModal,
        allcarsUserPerPage,
        currentPageprofile,
        setCurrentPageprofile,
        allcarsUser,
        cardModal,
        setCardModal,
        allcarsComumProfilePerPage,
        currentPageprofileComum,
        setCurrentPageprofileComum,
        allcarsComumProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
