import { z } from "zod";

const carSchema = z.object({
    brand: z.string(),
    model: z.string(),
    year: z.string(),
    km: z.string(),
    color: z.string(),
    price: z.string(),
    description: z.string(),
    status: z.string(),
    imgCover: z.string().url('Deve ser uma fonte url da imagem *'),
    imgs: z.string().url('Deve ser uma fonte url da imagem *').array()
});

export const updateCarSchema = carSchema.partial();