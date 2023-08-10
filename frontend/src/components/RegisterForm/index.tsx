import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ButtonToLogin, FieldsetRegister, FormRegisterContainer, MainContainerRegister, RegisterButtonContainer, TitleRegister, TitleOptions, DualFields } from './style'
import { Error } from '../../components/LoginForm/style'
import { IRegister } from '../../providers/@types'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useContext } from 'react'
import { UserContext } from '../../providers/UserContext'

const RegisteForm = () => {
    const { userRegister } = useContext(UserContext)

    const registerSchema = z.object({
        name: z.string().nonempty('Nome é obrigatório'),
        email: z.string().email('Deve ser um e-mail'),
        cpf: z.string().nonempty('CPF é obrigatório'),
        cellPhone: z.string().nonempty('Celular é obrigatório'),
        dateOfBirth: z.string().nonempty('Data de nascimento é obrigatório'),
        description: z.string().nonempty('Descrição é obrigatória'),
        cep: z.string().nonempty('CEP é obrigatório'),
        state: z.string().nonempty('Estado é obrigatório'),
        city: z.string().nonempty('Cidade é obrigatória'),
        street: z.string().nonempty('Rua é obrigatória'),
        number: z.string().nonempty('Número é obrigatório'),
        complement: z.string().optional(),
        seller: z.boolean(),
        password: z.string().nonempty('Senha é obrigatória')
            .regex(/[a-z]/, 'Necessário ao menos uma letra minúscula')
            .regex(/(\d)/, 'Necessário ao menos um número')
            .regex(/[A-Z]/, 'Necessário ao menos uma letra maiúscula')
            .regex(/(\W|_)/, 'Necessário ao menos um caracter especial')
            .regex(/.{8,}/, 'Necessário ao menos oito caracteres'),
        confirmPassword: z.string().nonempty('Confirmação é obrigatória')

    }).refine((payload) => payload.password === payload.confirmPassword, {
        message: 'Deve corresponder à senha',
        path: ['confirmPassword']
    })

    type tRegister = z.infer<typeof registerSchema>

    const { register, handleSubmit, formState: { errors } } = useForm<tRegister>({
        resolver: zodResolver(registerSchema)
    })

    const registerSubmit: SubmitHandler<tRegister> = async (data: tRegister) => {
        console.log(data)
        // await userRegister(data)
    }

    return (
        <MainContainerRegister>
            <FormRegisterContainer>
                <TitleRegister>
                    <h3>Cadastro</h3>
                </TitleRegister>
                <TitleOptions>
                    <h4>Informações Pessoais</h4>
                </TitleOptions>
                <FieldsetRegister>
                    <label>Nome</label>
                    <input type='text' placeholder='Ex: José Martins' {...register('name')} />
                    {errors.name?.message ? <Error>{errors.name.message} *</Error> : null}
                </FieldsetRegister>
                <FieldsetRegister>
                    <label>Email</label>
                    <input type='text' placeholder='Ex: jose@shopcars.com.br' {...register('email')} />
                    {errors.email?.message ? <Error>{errors.email.message} *</Error> : null}
                </FieldsetRegister>
                <FieldsetRegister>
                    <label>CPF</label>
                    <input type='text' placeholder='000.000.000-00' {...register('cpf')} />
                    {errors.cpf?.message ? <Error>{errors.cpf.message} *</Error> : null}
                </FieldsetRegister>
                <FieldsetRegister>
                    <label>Celular</label>
                    <input type='text' placeholder='(DDD) 90000-0000' {...register('cellPhone')} />
                    {errors.cellPhone?.message ? <Error>{errors.cellPhone.message} *</Error> : null}
                </FieldsetRegister>
                <FieldsetRegister>
                    <label>Data de nascimento</label>
                    <input type='text' placeholder='00/00/00' {...register('dateOfBirth')} />
                    {errors.dateOfBirth?.message ? <Error>{errors.dateOfBirth.message} *</Error> : null}
                </FieldsetRegister>
                <FieldsetRegister>
                    <label>Descrição</label>
                    <textarea placeholder='Digitar descrição' {...register('description')} />
                    {errors.description?.message ? <Error>{errors.description.message} *</Error> : null}
                </FieldsetRegister>
                <TitleOptions>
                    <h4>Informações de endereço</h4>
                </TitleOptions>
                <FieldsetRegister>
                    <label>CEP</label>
                    <textarea placeholder='00000-000' {...register('cep')} />
                    {errors.cep?.message ? <Error>{errors.cep.message} *</Error> : null}
                </FieldsetRegister>
                <DualFields>
                    <FieldsetRegister>
                        <label>CEP</label>
                        <textarea placeholder='00000-000' {...register('cep')} />
                        {errors.cep?.message ? <Error>{errors.cep.message} *</Error> : null}
                    </FieldsetRegister>
                    <FieldsetRegister>
                        <label>CEP</label>
                        <textarea placeholder='00000-000' {...register('cep')} />
                        {errors.cep?.message ? <Error>{errors.cep.message} *</Error> : null}
                    </FieldsetRegister>
                </DualFields>

            </FormRegisterContainer>
        </MainContainerRegister>
    )
}

export default RegisteForm