import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ButtonContainer,
  ButtonToRegister,
  FieldsetLogin,
  ForgotMyPassword,
  FormLoginContainer,
  MainContainerLogin,
  TitleLogin,
  Error,
} from "./style";
import { ILogin } from "../../providers/UserProvider/@types";
import { SubmitHandler, useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserProvider/UserContext";
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'

const LoginForm = () => {
  const { userLogin } = useContext(UserContext);
  const [showPass, setShowPass] = useState<'text' | 'password'>('password');

  const schema = z.object({
    email: z.string().email("Deve ser um e-mail"),
    password: z.string().nonempty("Senha é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: zodResolver(schema),
  });

  const submit: SubmitHandler<ILogin> = async (data: ILogin) => {
    await userLogin(data);
  };

  const togglePassVisibility = (): void => {
    if (showPass === 'password') {
      setShowPass('text')
    } else {
      setShowPass('password')
    }
  }

  return (
    <MainContainerLogin>
      <FormLoginContainer onSubmit={handleSubmit(submit)}>
        <TitleLogin>
          <h3>Login</h3>
        </TitleLogin>
        <FieldsetLogin>
          <label>Email</label>
          <input
            type="email"
            placeholder="johndoe@mail.com"
            {...register("email")}
          />
          {errors.email?.message ? (
            <Error>{errors.email.message} *</Error>
          ) : null}
        </FieldsetLogin>
        <FieldsetLogin>
          <label>Password</label>
          <input
            type={showPass}
            placeholder="Your password"
            {...register("password")}
          />
          {errors.password?.message ? (
            <Error>{errors.password.message} *</Error>
          ) : null}
          {showPass === 'password' ?
            <BsEyeFill onClick={() => togglePassVisibility()} /> :
            <BsEyeSlashFill onClick={() => togglePassVisibility()} />}
        </FieldsetLogin>
        <ForgotMyPassword>
          <span>Esqueci minha senha</span>
        </ForgotMyPassword>
        <ButtonContainer>
          <button type="submit">Entrar</button>
          <ButtonToRegister to="/register">
            Ainda não possui conta?
          </ButtonToRegister>
          <ButtonToRegister type="button" to='/register'>Cadastrar</ButtonToRegister>
        </ButtonContainer>
      </FormLoginContainer>
    </MainContainerLogin>
  );
};

export default LoginForm;
