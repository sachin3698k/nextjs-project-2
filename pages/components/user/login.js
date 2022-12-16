import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as Yup from "yup";
// import firebase from "../../utils/firebase";
import Loader from "../Loader";
import { useAuth } from "../../../context/AuthContext";
// import { AccountContext } from "./accountContext";

const WRONG_CREDENTIALS = "auth/wrong-password";
const NOT_FOUND = "auth/user-not-found";
const LOGIN_BLOCKED = "auth/too-many-requests";

const printErrorMessage = (error) => {
  switch (error.code) {
    case WRONG_CREDENTIALS:
      return "Wrong credentials";
    case NOT_FOUND:
      return "User does not exist";
    case LOGIN_BLOCKED:
      return "User blocked. Restore password or try again later";
    default:
      return "Something went wrong. Try again";
  }
};

// form validation rules
const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(32).required(),
});

const Login = (props) => {
  // very important
  const { user, login } = useAuth();
  // console.log(user);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, data },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      login(data.email, data.password)
        .then((user) => {
          setLoading(false);
          // console.log(user);
          router.push("/dashboard");
        })
        .catch((error) => {
          // console.log(error);
          // toast.error(error.code);
          const errorMessage = error ? printErrorMessage(error) : null;
          toast.error(errorMessage);
          setLoading(false);
        });
    } catch (error) {
      toast(error.message);
    }

    // toast.error("Hello");

    // console.log(data);
    // login(data.email, data.password);
    // toast("Success");

    // setLoading(true);

    {
      /* We would uncomment as we setup firebase*/
    }

    // await firebase
    //   .auth()
    //   .signInWithEmailAndPassword(data.email, data.password)
    //   .then((user) => {
    //     console.log(user);
    //     router.push("/dashboard");
    //   })
    //   .catch((error) => {
    //     const errorMessage = error ? printErrorMessage(error) : null;
    //     toast.error(errorMessage);
    //     setLoading(false);
    //   });
  };

  {
    /* We would uncomment as we setup firebase*/
  }
  // const { switchToSignup, switchToResetPassword } = useContext(AccountContext);
  return (
    <div>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap">
          <div className="w-full">
            <label
              htmlFor="email"
              className={`w-full p-2 font-bold text-sm mb-2 relative block${
                errors && errors.email ? "text-[#EC6276]" : "text-[#3d4f7]"
              }`}
            >
              Email{" "}
              <input
                name="email"
                id="email"
                type="text"
                placeholder="email"
                {...register("email")}
                className={`w-full text-base  mb-3 border-[#D2C1B9] py-3 px-6 rounded-md mt-2 border-[1px] p-2`}
              />
            </label>
          </div>

          <div className="mb-3 text-normal text-[#EC6276] ">
            <p>{errors.email?.message}</p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full">
            <label
              htmlFor="password"
              className={`w-4/5 p-2 font-bold text-sm mb-2 ${
                errors && errors.password ? "text-[#EC6276]" : "text-[#3d4f7]"
              }`}
            >
              Password{" "}
            </label>
            <input
              type="password"
              name="password"
              {...register("password")}
              placeholder="Password"
              className={`w-full text-base  mb-3 border-[#D2C1B9] py-3 px-6 rounded-md mt-2 border-[1px] p-2`}
            />
            <div className="mb-3 text-normal text-[#EC6276] ">
              {errors.password?.message}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className=" flex flex-col justify-center items-center w-full text-base  mb-3 font-semibold text-white border-[#D2C1B9] bg-[#EC6276] py-3 px-6 rounded-md mt-2 border-[1px] p-2"
        >
          {loading ? <Loader /> : "SIGN IN"}
        </button>
        <a href="#">
          <div className="text-[#EC6276]">Reset Password</div>
        </a>
      </form>
    </div>
  );
};
export default Login;
