import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { LOGIN_FORM } from "../data";
import { ILoginFormInput } from "../components/utils/types";
import { useSelector } from "react-redux";
import { AppDispatch, RootState, useAppDispatch } from "../redux/store";
import { userLogin } from "../redux/features/login.slice";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInput>({});

  const { loading } = useSelector((state: RootState) => state.login);
  const dispatch = useAppDispatch();

  // Start handlers ----------------------------------------------------------------------
  const onSubmit: SubmitHandler<ILoginFormInput> = async (data) => {
    console.log(data);
    dispatch(userLogin(data));
  };

  // Start renders ----------------------------------------------------------------------
  const renderInputs = LOGIN_FORM.map((input) => (
    <div key={input.name}>
      {/* we can use default validation  by :  {...register(input.name,input.validation)} */}
      <Input
        placeholder={input.placeholder}
        {...register(input.name)}
        type={input.type}
      />
      {/* <InputErrorMessage msg={errors[input.name]?.message} /> */}
    </div>
  ));

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-center mb-4 text-3xl font-semibold">
        Login to get access!
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {renderInputs}

        <Button fullWidth isLoading={loading} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
