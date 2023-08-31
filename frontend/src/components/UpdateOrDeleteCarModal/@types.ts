import { z } from "zod";
// import { TDataCarResponse } from "../../providers/CarProvider/@types";
import { updateCarSchema } from "./utils";
import { ICarSeller } from "../../providers/UserProvider/@types";

export interface IUpdateModalProps {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    car: ICarSeller | null;

}

export interface IDeleteModalProps {
    setDeleteCarModal: React.Dispatch<React.SetStateAction<boolean>>
    setUpdateModal: React.Dispatch<React.SetStateAction<boolean>>
    carId?: string | undefined
    // updateModalOutClick: React.Dispatch<React.SetStateAction<React.MutableRefObject<HTMLElement | null> | null>>
}


export type TUpdateSchema = z.infer<typeof updateCarSchema>;

export interface IChangeStyles {
    background?: string | undefined;
    textDecorationLine?: string | undefined;
}