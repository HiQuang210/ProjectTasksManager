import React from "react";
import { Dialog } from "@headlessui/react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import Loading from "./Loader";
import ModalWrapper from "./ModalWrapper";
import Textbox from "./Textbox";
import { toast } from "react-toastify"
import { useChangePasswordMutation } from "../redux/slices/api/userApiSlice";

const ChangePassword = ({ open, setOpen }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [changeUserPassword, { isLoading }] = useChangePasswordMutation();
    const handleOnSubmit = async(data) => {
        if (data.password !== data.confirmpass) {
            toast.warning("Passwords do not match.");
            return;
        }
        try {
            const res = await changeUserPassword(data).unwrap();
            toast.success("Password changed successfully.");
            setTimeout(() => {
                setOpen(false);
            }, 1500);
        } catch (error) {
            console.log(error);
            toast.error(error?.data?.message || error.message);
        }
    };

    return (
        <ModalWrapper open = {open} setOpen={setOpen}>
            <form onSubmit = {handleSubmit(handleOnSubmit)} classname = ''>
                <Dialog.Title 
                    as = 'h2' 
                    className ='text-base font-bold leading-6 text-gray-900 mb-4'>
                    Change Password
                </Dialog.Title>
                <div className ='mt-2 flex flex-col gap-6'>
                    <Textbox
                        placeholder = 'New Password'
                        type = 'password'
                        name = 'password'
                        label = 'New Password'
                        className = 'w-full rounded'
                        register = {register("password", { 
                            required: "New password is required!",
                        })}
                        error={errors.password ? errors.password.message : ""}
                    />
                    <Textbox
                        placeholder = 'Confirm New Password'
                        type = 'password'
                        name = 'confirmpass'
                        label = 'Confirm New Password'
                        className = 'w-full rounded'
                        register={register("confirmpass", {
                            required: "Confirm password is required!",
                        })}
                        error = {errors.confirmpass ? errors.confirmpass.message : ""}
                    />
                </div>
                {isLoading? (
                    <div className='py-5'>
                        <Loading />
                    </div> 
                ) : (
                    <div className='py-3 mt-4 sm:flex sm:flex-row-reverse'>
                        <Button 
                            type = 'submit'
                            className = 'bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-200' 
                            label = 'Save'
                        />

                        <button
                            type = 'button'
                            className = 'bg-white px-8 text-sm font-semibold text-gray-900 sm:w-auto'
                            onClick = {() => setOpen(false)} >
                            Cancel
                        </button>
                    </div>
                )}
            </form>
        </ModalWrapper>
    );
};

export default ChangePassword;