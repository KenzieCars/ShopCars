import { ResetPasswordData } from "../../components/ModalResetPassword/@types";
import { ResetEmailData } from "../../components/ModalSendEmail/@types";
import { ICreateUser } from "../../components/RegisterForm/@types";
import {
  ICar,
  TDataCarResponse,
  TUserCarsResponse,
} from "../CarProvider/@types";

export interface IUserContext {
  user: IUser | null;
  loading: boolean;
  listCarsUser: [] | ICar[];
  userIdCars: TUserCarsResponse | null;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setListCarsUser: React.Dispatch<React.SetStateAction<[] | ICar[]>>;
  setUserIdCars: React.Dispatch<React.SetStateAction<TUserCarsResponse | null>>;
  modalForgottenOpen: boolean;
  setModalForgottenOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userLogin: (formData: ILogin) => Promise<void>;
  userRegister: (formData: ICreateUser) => Promise<void>;
  logout: () => void;
  addressEditModal: boolean
  setAddressEditModal: React.Dispatch<React.SetStateAction<boolean>>
  sendEmail: (sendEmailData: ResetEmailData) => void;
  resetPassword: (resetPasswordData: ResetPasswordData, token: string) => void;
  updateUser: (formData: Partial<IUser>) => Promise<void>;
  profileEditModal: boolean;
  setProfileEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  deleteUser: () => Promise<void>;
  allcarsUserPerPage: [] | TDataCarResponse[];
  currentPageprofile: number;
  setCurrentPageprofile: React.Dispatch<React.SetStateAction<number>>;
  allcarsUser: [] | TDataCarResponse[];
  cardModal: boolean;
  setCardModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  seller: boolean;
  cellPhone: string;
  cpf: string;
  dateOfBirth: string;
  description: string;
  city: string;
  state: string;
  street: string;
  number: string | number | any;
  complement: string;
  cep: string;
  isAdmin: boolean;
}

export interface IRegister extends Omit<IUser, "id"> {}

export interface ILogin {
  email: string;
  password: string;
}
