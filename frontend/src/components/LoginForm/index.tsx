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
import { ILogin } from "../../providers/@types";
import { SubmitHandler, useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

const LoginForm = () => {
  const { userLogin } = useContext(UserContext);
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
            type="password"
            placeholder="Your password"
            {...register("password")}
          />
          {errors.password?.message ? (
            <Error>{errors.password.message} *</Error>
          ) : null}
        </FieldsetLogin>
        <ForgotMyPassword>
          <span>Esqueci minha senha</span>
        </ForgotMyPassword>
        <ButtonContainer>
          <button type="submit">Entrar</button>
          <ButtonToRegister to="/register">
            Ainda não possui conta?
          </ButtonToRegister>
          <button type="button">Cadastrar</button>
        </ButtonContainer>
      </FormLoginContainer>
    </MainContainerLogin>
  );
};

export default LoginForm;
