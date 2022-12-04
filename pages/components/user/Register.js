import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../context/AuthContext";
// import { AiOutlineGithub } from "react-icons/ai";
// import { FaFacebook } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import ReactDOM from "react-dom";
// import { RadioGroup, Radio } from "react-radio-group";
// import { RadioGroup, RadioButton } from 'react-radio-buttons';

const validationSchema = Yup.object().shape({
  // firstName: Yup.string().required(),
  // lastName: Yup.string().required(),
  // dateOfBirth: Yup.date().required(),
  // gender: Yup.string().min(4).max(11),
  // phoneNo: Yup.number().required(),
  // address: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(32).required(),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const Register = () => {
  const [loading, setLoading] = useState(false);
  const { user, signup } = useAuth();
  let codeMessage = null;
  // validation logic
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // This is onSubmit function
  const onSubmit = async (data) => {
    signup(data.email, data.password);
    // setLoading(true);
    const body = {
      firstName: data.firstName,
      lastName: data.lastName,
      dateOfBirth: data.dateOfBirth,
      gender: data.gender,
      phoneNo: data.phoneNo,
      address: data.address,
      eMail: data.eMail,
      email: data.email,
      user_name: data.email,
      password: data.password,
    };
    console.log(body);
  };

  return (
    <div className="flex items-center justify-center p-3 mt-5 ">
      <div className="flex flex-col items-center">
        {/* <button className="text-[#000000] font-semibold border-[#D2C1B9] bg-white py-3 px-5 rounded-md w-5/6 mt-2 border-[1px] p-1 flex items-center">
          <FcGoogle className="h-8 w-8 mb-1 mr-10" />
          Sign Up with Google
        </button>

        <button className="font-semibold bg-white text-[#000000] border-[#D2C1B9] py-3 px-5 rounded-md w-5/6 mt-2 border-[1px] p-2 flex items-center">
          <AiOutlineGithub className="h-8 w-8 mb-1 mr-10" />
          Sign Up with Github
        </button>
        <button className="font-semibold bg-white text-[#000000] border-[#D2C1B9] py-3 px-5 rounded-md w-5/6 mt-2 border-[1px] p-2 flex items-center">
          <FaFacebook className="h-8 w-8 mb-1 mr-10" />
          Sign Up with Facebook
        </button> */}

        <hr className="bg-[#D2C1B9] border-0 h-px my-8" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap">
          <div className="w-full">
            <label
              htmlFor="firstName"
              className={`w-full p-2 font-bold text-sm mb-2 ${
                errors && errors.firstName ? "text-[#EC6276]" : "text-[#3d4f7]"
              }`}
            >
              First Name{" "}
            </label>

            <input
              name="firstName"
              id="firstName"
              type="text"
              placeholder="First Name"
              {...register("firstName")}
              className={`w-full text-base mb-3 border-[#D2C1B9] py-3 px-6 rounded-md mt-2 border-[1px] p-2`}
            />

            <div className="mb-3 text-normal text-red-500 ">
              <p>{errors.firstName?.message}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full">
            <label
              htmlFor="lastName"
              className={`w-full p-2 font-bold text-sm mb-2 ${
                errors && errors.lastName ? "text-[#EC6276]" : "text-[#3d4f7]"
              }`}
            >
              Last Name{" "}
            </label>

            <input
              name="lastName"
              id="lastName"
              type="text"
              placeholder="Last Name"
              {...register("lastName")}
              className={`w-full text-base mb-3 border-[#D2C1B9] py-3 px-6 rounded-md mt-2 border-[1px] p-2`}
            />

            <div className="mb-3 text-normal text-red-500 ">
              <p>{errors.lastName?.message}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full">
            <label
              htmlFor="dateOfBirth"
              className={`w-full p-2 font-bold text-sm mb-2 ${
                errors && errors.dateOfBirth
                  ? "text-[#EC6276]"
                  : "text-[#3d4f7]"
              }`}
            >
              DateOfBirth{" "}
            </label>

            <input
              name="dateOfBirth"
              id="dateOfBirth"
              type="Date"
              placeholder="BateOfBirth"
              {...register("dateOfBirth")}
              className={`w-full text-base mb-3 border-[#D2C1B9] py-3 px-6 rounded-md mt-2 border-[1px] p-2`}
            />

            <div className="mb-3 text-normal text-red-500 ">
              <p>{errors.dateOfBirth?.message}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full">
            <label
              htmlFor="gender"
              className={`w-full p-2 font-bold text-sm mb-2 ${
                errors && errors.gender ? "text-[#EC6276]" : "text-[#3d4f7]"
              }`}
            >
              Gender{" "}
            </label>

            <input
              name="gender"
              id="gender"
              type="text"
              placeholder="Gender"
              {...register("gender")}
              className={`w-full text-base mb-3 border-[#D2C1B9] py-3 px-6 rounded-md mt-2 border-[1px] p-2`}
            />

            <div className="mb-3 text-normal text-red-500 ">
              <p>{errors.gender?.message}</p>
            </div>
          </div>
        </div>
        {/* <RadioGroup vertical>
          <Radio value="Male" />
          Male
          <Radio value="Female" />
          Female
          <Radio value="Transgender" />
          Transgender
        </RadioGroup>
        <Radio value="" />
        Prefer Not To Say */}
        <div className="flex flex-wrap">
          <div className="w-full">
            <label
              htmlFor="phoneNo"
              className={`w-full p-2 font-bold text-sm mb-2 ${
                errors && errors.phoneNo ? "text-[#EC6276]" : "text-[#3d4f7]"
              }`}
            >
              Phone No{" "}
            </label>

            <input
              name="phoneNo"
              id="phoneNo"
              type="number"
              placeholder="Phone No"
              {...register("phoneNo")}
              className={`w-full text-base mb-3 border-[#D2C1B9] py-3 px-6 rounded-md mt-2 border-[1px] p-2`}
            />

            <div className="mb-3 text-normal text-red-500 ">
              <p>{errors.phoneNo?.message}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full">
            <label
              htmlFor="email"
              className={`w-full p-2 font-bold text-sm mb-2 ${
                errors && errors.address ? "text-[#EC6276]" : "text-[#3d4f7]"
              }`}
            >
              Address{" "}
            </label>

            <input
              name="address"
              id="address"
              type="text"
              placeholder="Address"
              {...register("address")}
              className={`w-full text-base mb-3 border-[#D2C1B9] py-3 px-6 rounded-md mt-2 border-[1px] p-2`}
            />

            <div className="mb-3 text-normal text-red-500 ">
              <p>{errors.address?.message}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full">
            <label
              htmlFor="email"
              className={`w-full p-2 font-bold text-sm mb-2 ${
                errors && errors.email ? "text-[#EC6276]" : "text-[#3d4f7]"
              }`}
            >
              E-mail{" "}
            </label>

            <input
              name="email"
              id="email"
              type="text"
              placeholder="E-mail"
              {...register("email")}
              className={`w-full text-base mb-3 border-[#D2C1B9] py-3 px-6 rounded-md mt-2 border-[1px] p-2`}
            />

            <div className="mb-3 text-normal text-red-500 ">
              <p>{errors.email?.message}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full">
            <label
              htmlFor="password"
              className={`w-full p-2 font-bold text-sm mb-2 ${
                errors && errors.password ? "text-red-400" : "text-[#3d4f7]"
              }`}
            >
              Password{" "}
            </label>

            <input
              type="password"
              name="password"
              id="password"
              // value={"test123456"}
              {...register("password")}
              placeholder="Password"
              className={`w-full text-base mb-3 border-[#D2C1B9] py-3 px-6 rounded-md mt-2 border-[1px] p-2`}
            />
            <div className="mb-3 text-normal text-red-500 ">
              {errors.password?.message}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full">
            <label
              htmlFor="confirmPassword"
              className={`w-full p-2 font-bold text-sm mb-2 ${
                errors && errors.confirmPassword
                  ? "text-red-400"
                  : "text-[#3d4f7]"
              }`}
            >
              Confirm Password{" "}
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              // value={"test123456"}
              {...register("confirmPassword")}
              placeholder="Confirm Password"
              className={`w-full text-base mb-3 border-[#D2C1B9] py-3 px-6 rounded-md mt-2 border-[1px] p-2`}
            />
            <div className="mb-3 text-normal text-red-500 ">
              {errors.confirmPassword?.message}
            </div>
          </div>

          <button
            type="submit"
            className="flex flex-col justify-center items-center w-full text-base mb-3 font-semibold text-white border-[#D2C1B9] py-3 px-6 rounded-md mt-2 border-[1px] p-2 bg-sky-500"
          >
            Submit {loading ? <Loader /> : "SIGN UP"}
          </button>
        </div>
      </form>
      {codeMessage && (
        <div className="form-group">
          <div className={successful ? "text-green-500" : "text-red-500"}>
            {codeMessage}
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
