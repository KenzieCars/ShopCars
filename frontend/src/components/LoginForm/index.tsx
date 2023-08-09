import { ButtonContainer, ButtonToRegister, FieldsetLogin, ForgotMyPassword, FormLoginContainer, MainContainerLogin, TitleLogin } from "./style"

const LoginForm = () => {

  return (
    <MainContainerLogin>
      <FormLoginContainer>
        <TitleLogin>
          <h3>Login</h3>
        </TitleLogin>
        <FieldsetLogin>
          <label>Email</label>
          <input type="email" placeholder='johndoe@mail.com' /> 
          {/* {errors.email?.message ? <Error>{errors.email.message} *</Error> : null}   --NO INPUT: {...register('email')} */}
        </FieldsetLogin>
        <FieldsetLogin>
          <label>Password</label>
          <input type="password" placeholder='Your password' />
          {/* {errors.password?.message ? <Error>{errors.password.message} *</Error> : null}   --NO INPUT: {...register('password')} */}
        </FieldsetLogin>
        <ForgotMyPassword>
          <span>Esqueci minha senha</span>
        </ForgotMyPassword>
        <ButtonContainer>
          <button>Entrar</button>
          <ButtonToRegister to='/register'>Ainda não possui conta?</ButtonToRegister>
          <button>Cadastrar</button>
        </ButtonContainer>
      </FormLoginContainer>
    </MainContainerLogin>
  )
}

export default LoginForm