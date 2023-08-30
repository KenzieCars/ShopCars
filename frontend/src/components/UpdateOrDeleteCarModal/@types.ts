import { z } from "zod";
import { TDataCarResponse } from "../../providers/CarProvider/@types";
import { updateCarSchema } from "./utils";

export interface IUpdateModalProps {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    car: TDataCarResponse | null;

}

export interface IDeleteModalProps {
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    carId?: string | undefined
    // updateModalOutClick: React.Dispatch<React.SetStateAction<React.MutableRefObject<HTMLElement | null> | null>>
}


export type TUpdateSchema = z.infer<typeof updateCarSchema>;

export interface IChangeStyles {
    background?: string | undefined;
    textDecorationLine?: string | undefined;
}