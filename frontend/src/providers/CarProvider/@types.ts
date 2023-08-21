import { AxiosResponse } from "axios";
import { IUser } from "../UserProvider/@types";
export interface ICarContext {
  images: IImage[] | [];
  car: ICar | null;
  allcars: [] | TDataCarResponse[];
  setImages: React.Dispatch<React.SetStateAction<IImage[] | []>>;
  setCar: React.Dispatch<React.SetStateAction<ICar | null>>;
  setAllCars: React.Dispatch<React.SetStateAction<[] | TDataCarResponse[]>>;
  carRegister: (formData: TCarRequest) => Promise<"" | AxiosResponse<ICar>>;
  editeCar: (formData: TCarUpdate, carId: string) => Promise<void>;
  deleteCar: (carId: string) => Promise<void>;
  registerCarImage: (payload: IImageRequest) => Promise<void>;
}
export interface IDefaultProviderProps {
  children: React.ReactNode;
}
export interface ICar {
  id: string;
  brand: string;
  model: string;
  year: string;
  km: number;
  color: string;
  status?: boolean;
  fuel: string;
  price: number;
  description: string;
  imgCover: string;
  "bestPrice?": boolean;
  userId: number;
}
export type TCarRequest = Omit<ICar, "id" | "userId">;
export interface TUserCarsResponse extends IUser {
  cars: ICar[] | [];
}
export interface IImage {
  id: string;
  imgGalery: string;
  carId: string;
}
export type IImageRequest = Omit<IImage, "id">;
export interface IComment {
  id: string;
  description: string;
  createdAt: string;
  carId: string;
  userId: string;
}
export type TCarUpdate = Partial<TCarRequest>;
export interface TDataCarResponse extends ICar {
  images: IImage[] | [];
  comments: IComment[] | [];
  user: IUser;
}
export interface TListPaginationCars {
  nextPage: number | null;
  prevPage: number | null;
  totalPages: number | null;
  totalCars: number | null;
  cars: TDataCarResponse[] | [];
}
export interface TCarUserResponse extends ICar {
  user: IUser;
}
