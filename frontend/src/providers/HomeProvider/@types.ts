import { ICreateUser } from "../../components/RegisterForm/@types";
import { ICar, TUserCarsResponse } from "../CarProvider/@types";

export interface IUserContext {
  user: IUser | null;
  loading: boolean;
  listCarsUser: [] | ICar[];
  userIdCars: TUserCarsResponse | null;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setListCarsUser: React.Dispatch<React.SetStateAction<[] | ICar[]>>;
  setUserIdCars: React.Dispatch<React.SetStateAction<TUserCarsResponse | null>>;
  userLogin: (formData: ILogin) => Promise<void>;
  userRegister: (formData: ICreateUser) => Promise<void>;
  logout: () => void;
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
  number: number;
  complement: string;
  isAdmin: boolean;
}

export interface IRegister extends Omit<IUser, "id"> {}

export interface ILogin {
  email: string;
  password: string;
}
