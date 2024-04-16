import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Methods from "../services/authService";
import { ExampleContext } from "../context/ExampleContext";

function LoginPage() {
  const example = useContext(ExampleContext);
  const navigate = useNavigate();

  const { handleSubmit, errors, register } = useForm();
  const submitForm = async (data) => {
    try {
      console.log(data);
      const res = await Methods.login(data);
      example.login();
      navigate("/home");
      console.log(res);
    } catch (error) {
      console.log(res);
    }
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Login
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(submitForm)}>
          <div className="mb-5">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              username
            </label>
            <div className="mb-5">
              <input
                id="username"
                type="text"
                placeholder="username"
                {...register("username", { required: "username is required" })}
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm"
              />
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              password
            </label>
            <div className="mb-5">
              <input
                id="password"
                type="password"
                placeholder=""
                {...register("password", { required: "password is required" })}
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
