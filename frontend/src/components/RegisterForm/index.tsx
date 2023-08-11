import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    FieldsetRegister, FormRegisterContainer, MainContainerRegister,
    RegisterButtonContainer, TitleRegister, TitleOptions, DualFields, AccountTypeField
} from './style'
import { Error } from '../../components/LoginForm/style'
import { useForm } from 'react-hook-form'
import { ICreateUser } from './@types';
import { useContext, useState } from 'react'
import { UserContext } from '../../providers/UserContext'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'

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
    seller: z.string({ invalid_type_error: 'Tipo de conta é obrigatório' }),
    password: z.string().nonempty('Senha é obrigatória')
        .regex(/[a-z]/, 'Necessário ao menos uma letra minúscula')
        .regex(/(\d)/, 'Necessário ao menos um número')
        .regex(/[A-Z]/, 'Necessário ao menos uma letra maiúscula')
        .regex(/(\W|_)/, 'Necessário ao menos um caracter especial')
        .regex(/.{8,}/, 'Necessário ao menos oito caracteres'),
    confirmPassword: z.string().nonempty('Confirmação é obrigatória'),

}).refine((payload) => payload.password == payload.confirmPassword, {
    message: 'Confirmação deve ser idêntica à senha',
    path: ['confirmPassword'],
})

const RegisteForm = () => {
    const { userRegister } = useContext(UserContext)

    const [isSeller, setIsSeller] = useState<'seller' | 'buyer' | null>(null)
    const [showPass, setShowPass] = useState<'text' | 'password'>('password')
    const [showConfirm, setShowConfirm] = useState<'text' | 'password'>('password')

    const { register, handleSubmit, formState: { errors } } = useForm<ICreateUser>({
        resolver: zodResolver(registerSchema)
    })

    const registerSubmit = async (data: ICreateUser) => {
        // eslint-disable-next-line prefer-const
        let rectifyData: ICreateUser = data

        if (data.seller === 'true') {
            rectifyData.seller = true
        } else {
            rectifyData.seller = false
        }

        rectifyData.number = Number(data.number);

        await userRegister(rectifyData)
    }

    const changeBuyerButtonStyle = () => {
        if (isSeller === 'buyer') {
            return { background: 'var(--black)' }
        } else {
            return {}
        }
    }

    const changeSellerButtonStyle = () => {
        if (isSeller === 'seller') {
            return { background: 'var(--black)' }
        } else {
            return {}
        }
    }

    const togglePassVisibility = () => {
        if (showPass === 'password') {
            setShowPass('text')
        } else {
            setShowPass('password')
        }
    }

    const toggleConfirmVisibility = () => {
        if (showConfirm === 'password') {
            setShowConfirm('text')
        } else {
            setShowConfirm('password')
        }
    }

    return (
        <MainContainerRegister>
            <FormRegisterContainer onSubmit={handleSubmit(registerSubmit)}>
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
                    <textarea className='textarea' placeholder='Digitar descrição' {...register('description')} />
                    {errors.description?.message ? <Error>{errors.description.message} *</Error> : null}
                </FieldsetRegister>
                <TitleOptions>
                    <h4>Informações de endereço</h4>
                </TitleOptions>
                <FieldsetRegister>
                    <label>CEP</label>
                    <input type='text' placeholder='00000-000' {...register('cep')} />
                    {errors.cep?.message ? <Error>{errors.cep.message} *</Error> : null}
                </FieldsetRegister>
                <DualFields>
                    <fieldset>
                        <label>Estado</label>
                        <input type='text' placeholder='Digitar estado' {...register('state')} />
                        {errors.state?.message ? <Error>{errors.state.message} *</Error> : null}
                    </fieldset>
                    <fieldset>
                        <label>Cidade</label>
                        <input type='text' placeholder='Digitar cidade' {...register('city')} />
                        {errors.city?.message ? <Error>{errors.city.message} *</Error> : null}
                    </fieldset>
                </DualFields>
                <FieldsetRegister>
                    <label>Rua</label>
                    <input type='text' placeholder='Digitar rua' {...register('street')} />
                    {errors.street?.message ? <Error>{errors.street.message} *</Error> : null}
                </FieldsetRegister>
                <DualFields>
                    <fieldset>
                        <label>Número</label>
                        <input type='text' placeholder='Digitar número' {...register('number')} />
                        {errors.number?.message ? <Error>{errors.number.message} *</Error> : null}
                    </fieldset>
                    <fieldset>
                        <label>Complemento</label>
                        <input type='text' placeholder='Digitar cidade' {...register('complement')} />
                        {errors.complement?.message ? <Error>{errors.complement.message} *</Error> : null}
                    </fieldset>
                </DualFields>
                <TitleOptions>
                    <h4>Tipo de conta</h4>
                </TitleOptions>
                <AccountTypeField>
                    <input {...register("seller")} type="radio" value='false' id='buyer' onClick={() => setIsSeller('buyer')} />
                    <label style={changeBuyerButtonStyle()} htmlFor='buyer'>Comprador</label>
                    <input {...register("seller")} type="radio" value='true' id='seller' onClick={() => setIsSeller('seller')} />
                    <label style={changeSellerButtonStyle()} htmlFor='seller'>Anunciante</label>
                </AccountTypeField>
                {errors.seller?.message ? <Error>{errors.seller.message} *</Error> : null}
                <FieldsetRegister>
                    <label>Senha</label>
                    <input type={showPass} placeholder='Digitar senha' {...register('password')} />
                    {errors.password?.message ? <Error>{errors.password.message} *</Error> : null}
                    {showPass === 'password' ?
                        <BsEyeFill onClick={() => togglePassVisibility()} /> :
                        <BsEyeSlashFill onClick={() => togglePassVisibility()} />}
                </FieldsetRegister>
                <FieldsetRegister>
                    <label>Confirmar senha</label>
                    <input type={showConfirm} placeholder='Confirme a senha' {...register('confirmPassword')} />
                    {errors.confirmPassword?.message ? <Error>{errors.confirmPassword.message} *</Error> : null}
                    {showConfirm === 'password' ?
                        <BsEyeFill onClick={() => toggleConfirmVisibility()} /> :
                        <BsEyeSlashFill onClick={() => toggleConfirmVisibility()} />}
                </FieldsetRegister>
                <RegisterButtonContainer>
                    <button type='submit'>Finalizar cadastro</button>
                </RegisterButtonContainer>
            </FormRegisterContainer>
        </MainContainerRegister>
    )
}

export default RegisteForm