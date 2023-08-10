export interface IUserContext {
  user: IUser | null
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  userLogin: (formData: ILogin) => Promise<void>
  userRegister: (formData: IRegister) => Promise<void>
  logout: () => void
}

export interface IDefaultProviderProps {
  children: React.ReactNode
}

export interface IUser {
  "id": string
  "name": string,
	"email": string,
	"password": string,
	"seller": boolean,
	"cellPhone": string,
	"cpf": string,
	"dateOfBirth": string,
	"description": string,
	"city": string,
	"state": string,
	"street": string,
	"number": number,
	"complement": string
}

export interface IRegister extends Omit<IUser, 'id'> {}

export interface ILogin {
  email: string
  password: string
}