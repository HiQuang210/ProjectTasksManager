import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ModalWrapper from "./ModalWrapper";
import { Dialog } from "@headlessui/react";
import Textbox from "./Textbox";
import Loading from "./Loader";
import Button from "./Button";
import { toast } from "react-toastify";
import { useRegisterMutation } from "../redux/slices/api/authApiSlice";
import { useUpdateUserMutation } from "../redux/slices/api/userApiSlice";
import { setCredentials } from "../redux/slices/authSlice";

const AddUser = ({ open, setOpen, userData }) => {
  let defaultValues = userData ?? {};
  const { user } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const dispatch = useDispatch()
  const [addNewUser, {isLoading}] = useRegisterMutation()
  const [updateUser, {isLoading: isUpdating}] = useUpdateUserMutation()
  const handleOnSubmit = async(data) => {
    try {
      if(userData) {
        const result = await updateUser(data).unwrap();
        toast.success(result?.message);
        if (userData?._id === user?._id) {
          dispatch(setCredentials({...result.user}));
        }
    }else{
      await addNewUser({
        ...data,
        password: data.email,
      }).unwrap();

      toast.success("New user added successfully!");
    }
    setTimeout(() => {
      setOpen(false);
    }, 1500)
  } catch(error) {
    console.log(error);
    toast.error("Something went wrong ...");
  }
  };

  return (
    <>
      <ModalWrapper open={open} setOpen={setOpen}>
        <form onSubmit={handleSubmit(handleOnSubmit)} className=''>
          <Dialog.Title
            as='h2'
            className='text-base font-bold leading-6 text-gray-900 mb-4'
          >
            {userData ? "UPDATE PROFILE" : "ADD NEW USER"}
          </Dialog.Title>
          <div className='mt-2 flex flex-col gap-6'>
            <Textbox
              placeholder='Full name'
              type='text'
              name='name'
              label='Full Name'
              className='w-full rounded'
              register={register("name", {
                required: "Full name is required!",
              })}
              error={errors.name ? errors.name.message : ""}
            />
            <Textbox
              placeholder='Title'
              type='text'
              name='title'
              label='Title'
              className='w-full rounded'
              register={register("title", {
                required: "Title is required!",
              })}
              error={errors.title ? errors.title.message : ""}
            />
            <Textbox
              placeholder='Email Address'
              type='email'
              name='email'
              label='Email Address'
              className='w-full rounded'
              register={register("email", {
                required: "Email Address is required!",
              })}
              error={errors.email ? errors.email.message : ""}
            />

            <div className="flex flex-col">
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Role
              </label>
              <select
                id="role"
                {...register("role", {
                  required: "User role is required!",
                })}
                className={`w-full rounded border ${
                  errors.role ? "border-red-500" : "border-gray-300"
                } px-3 py-2 focus:ring-blue-500 focus:border-blue-500`}
              >
                <option value="" disabled hidden>
                  Select a role
                </option>
                <option value="Developer">Developer</option>
                <option value="Analyst">Analyst</option>
                <option value="Designer">Designer</option>
                <option value="Manager">Manager</option>
              </select>
              {errors.role && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.role.message}
                </p>
              )}
            </div>
          </div>

          {isLoading || isUpdating ? (
            <div className='py-5'>
              <Loading />
            </div>
          ) : (
            <div className='py-3 mt-4 sm:flex sm:flex-row-reverse'>
              <Button
                type='submit'
                className='bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700  sm:w-auto'
                label='Submit'
              />

              <Button
                type='button'
                className='bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto'
                onClick={() => setOpen(false)}
                label='Cancel'
              />
            </div>
          )}
        </form>
      </ModalWrapper>
    </>
  );
};

export default AddUser;
