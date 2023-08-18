import { useParams } from "react-router-dom";
import ResetPasswordForm from "../../components/ModalResetPassword";
import ResetPasswordFooter from "../../components/ResetPasswordFooter";
import ResetPasswordHeader from "../../components/ResetPasswordHeader";

const ResetPasswordPage = () => {
  const { token } = useParams();
  return (
    <>
      <ResetPasswordHeader />
      <ResetPasswordForm token={token as string} />
      <ResetPasswordFooter />
    </>
  );
};

export default ResetPasswordPage;
