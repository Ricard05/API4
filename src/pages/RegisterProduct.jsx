import React from "react";
import { useForm } from "react-hook-form";
import * as Methods from "../services/authService";

function RegisterPage() {
  const { handleSubmit, errors, register } = useForm();
  const submitForm = async (data) => {
    console.log(data);
    const res = await Methods.addProduct(data);
    console.log(res);
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Registrar Producto
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(submitForm)}>
          <div className="mb-5">
            <label
              htmlFor="code"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              code
            </label>
            <div className="mb-5">
              <input
                id="code"
                type="text"
                placeholder="code"
                {...register("code", { required: "code is required" })}
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm"
              />
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              name
            </label>
            <div className="mb-5">
              <input
                id="name"
                type="text"
                placeholder=""
                {...register("name", { required: "name is required" })}
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm"
              />
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="description"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              description
            </label>
            <div className="mb-5">
              <input
                id="description"
                type="text"
                placeholder="aEJR02"
                {...register("description", {
                  required: "description is required",
                })}
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm"
              />
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="createdAt"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              createdAt
            </label>
            <div className="mb-5">
              <input
                id="createdAt"
                type="date"
                placeholder=""
                {...register("createdAt", {
                  required: "createdAt is required",
                })}
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm"
              />
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="firstname"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              idProvider
            </label>
            <div className="mb-5">
              <input
                id="idProvider"
                type="text"
                placeholder="idProvider"
                {...register("idProvider", {
                  required: "idProvider is required",
                })}
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
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
