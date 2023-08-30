import { z } from 'zod'
import { registerCarSchema } from './utils'

export interface IModalProps {
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

export type TRegisterCarForm = z.infer<typeof registerCarSchema>

export interface IFipeCars {
    id: string
    name: string
    brand: string
    year: string
    fuel: number
    value: number
}

export interface IUpdateCars {
    brand: string
    model: string
    year: string
    km: string | number
    color: string
    price: string | number
    description: string
    status: string | boolean
    imgCover: string | URL
    bestPrice?: boolean | undefined
    imgs?: string[] | URL[] | undefined
}