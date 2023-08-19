import { z } from 'zod'
import { registerCarSchema } from './utils'

export interface IModalProps {
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

export type TRegisterCarForm = z.infer<typeof registerCarSchema>