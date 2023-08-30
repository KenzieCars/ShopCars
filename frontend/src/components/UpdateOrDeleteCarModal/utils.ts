import { z } from "zod";

const carSchema = z.object({
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

export const verifyIfIsUrl = (string: string) => {
    try {
        const url = new URL(string);
        console.log(url)
        return url;
    } catch (error) {
        console.log('Não é url');
        return null
    }
};

export const handleValue = (event: React.FormEvent<HTMLInputElement>) => {
    const character = event.currentTarget

    character.value = valueMask(character.value)
}

function valueMask(value: string) {
    if (!value) return ''

    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{0})(\d)/, "$1R$ $2")
    value = value.replace(/(\d)(\d{7})$/, "$1.$2")
    value = value.replace(/(\d)(\d{4})$/, "$1.$2")
    value = value.replace(/(\d)(\d{1})$/, "$1,$2")

    return value
}

export const handleKm = (event: React.FormEvent<HTMLInputElement>) => {
    const character = event.currentTarget

    character.value = kmMask(character.value)
}

function kmMask(value: string) {
    if (!value) return ''

    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{0})(\d)/, "$1Km $2")
    value = value.replace(/(\d)(\d{5})$/, "$1.$2")
    value = value.replace(/(\d)(\d{2})$/, "$1.$2")

    return value
}