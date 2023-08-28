// import { IUser } from "../UserProvider/@types";

export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface ICommentContext {
  allComments: [] | TListComments;
  commentsCarId: [] | TCommentUserResponse[]
  setAllComments: React.Dispatch<React.SetStateAction<[] | TListComments>>;
  setCommentsCarId: React.Dispatch<React.SetStateAction<[] | TCommentUserResponse[]>>
  registerComment: (formData: TCommentRequest) => Promise<void>;
  editeComment: (formData: ICommentUpdate, commentId: string) => Promise<void>;
  deleteComment: (commentId: string) => Promise<void>;
}

export interface IComment {
  id: string;
  description: string;
  createdAt: Date;
  carId: string;
  userId: string;
}

export type TCommentRequest = Omit<IComment, "id" | "createdAt" | "userId">;

export type TListComments = IComment[];

export interface IImage {
  id: string;
  imgGalery: string;
  carId: string;
}

export interface ICommentUpdate {
  description: string;
}

// export interface TCommentUserResponse extends IComment {
//   user: IUser
// }

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  seller: boolean;
  isAdm: boolean;
  cellPhone: string;
  cpf: string;
  dateOfBirth: string;
  description: string;
  city: string;
  state: string;
  street: string;
  number: number;
  complement: string;
  cep: string;
  reset_token: string | null;
}

export interface TCommentUserResponse {
  id: string;
  description: string;
  createdAt: string;
  carId: string;
  userId: string;
  user: User;
}

export interface IFormComment {
  description: string;
}
