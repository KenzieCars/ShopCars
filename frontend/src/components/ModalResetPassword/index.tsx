import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider/UserContext";

import {
  DivContainerModal,
  FieldsetModal,
  FormModalContainer,
  ModalButtonContainer,
  TitleModal,
} from "./style";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ResetPasswordData,
  ResetPasswordProps,
  ResetPasswordSchema,
} from "./@types";

const ResetPasswordForm = ({ token }: ResetPasswordProps) => {
  const { resetPassword } = useContext(UserContext);
  const { register, handleSubmit } = useForm<ResetPasswordData>({
    resolver: zodResolver(ResetPasswordSchema),
  });

  const onFormSubmit = (formData: ResetPasswordData) => {
    console.log(formData);
    console.log(token);
    resetPassword(formData, token);
  };
  return (
    <DivContainerModal>
      <FormModalContainer onSubmit={handleSubmit(onFormSubmit)}>
        <TitleModal>
          <h2>Recuperação de Senha</h2>
        </TitleModal>
        <FieldsetModal>
          <label htmlFor="password">Digite a Nova Senha</label>
          <input
            type="password"
            className="passwordForgotten"
            id="passwordForgotten"
            placeholder="Nova senha"
            {...register("password")}
          />
        </FieldsetModal>
        <FieldsetModal>
          <label htmlFor="passwordConfirm">Nova Senha</label>
          <input
            type="password"
            className="passwordConfirm"
            id="passwordConfirm"
            placeholder="Confirme a senha"
            {...register("passwordConfirm")}
          />
        </FieldsetModal>
        <ModalButtonContainer>
          <button type="submit">Redefinir senha</button>
        </ModalButtonContainer>
      </FormModalContainer>
    </DivContainerModal>
  );
};

export default ResetPasswordForm;
