import { TDataCarResponse } from "../../providers/CarProvider/@types";

export interface IUpdateModalProps {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    car: TDataCarResponse | null;
}