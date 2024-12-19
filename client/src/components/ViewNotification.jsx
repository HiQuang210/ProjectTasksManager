import React from 'react';
import ModalWrapper from './ModalWrapper';
import Button from "./Button";
import { Dialog } from "@headlessui/react";

const ViewNotification = ({ open, setOpen, el }) => {
    return (
        <>
            <ModalWrapper open={open} setOpen={setOpen}>
                <div classname='py-4 w-full flex flex-col gap-4 items-center justify-center'>
                    <Dialog.Title as='h3' classname='font-semibold text-lg'>
                        {el?.task?.title}
                    </Dialog.Title>

                    <p classname='text-start text-gray-500'>{el?.text}</p>

                    <Button
                        type = 'button'
                        classname = 'bg-white px-8 mt-3 text-sm font-semibold text-gray-900 sm:w-auto border-blue-200'
                        onClick={() => setOpen(false)}
                        label='Ok'
                    />
                </div>
            </ModalWrapper>
        </>
    );
};

export default ViewNotification;