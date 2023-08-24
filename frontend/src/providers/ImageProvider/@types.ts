
export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IImage {
  id: string;
  imgGalery: string;
  carId: number;
}

export type TImageRequest = Omit<IImage, "id">;

export type TListImages = IImage[]


export interface IImageUpdate{
	imgGalery: string;
}
