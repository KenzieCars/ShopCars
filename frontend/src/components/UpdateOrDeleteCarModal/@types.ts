import { z } from "zod";
import { TDataCarResponse } from "../../providers/CarProvider/@types";
import { updateCarSchema } from "./utils";

export interface IUpdateModalProps {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    car: TDataCarResponse | null;
}

export type TUpdateSchema = z.infer<typeof updateCarSchema>;

export interface IChangeStyles {
    background?: string | undefined
}