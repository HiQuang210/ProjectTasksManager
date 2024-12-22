import React from 'react';
import ModalWrapper from './ModalWrapper';
import { Dialog } from "@headlessui/react";

const ViewNotification = ({ open, setOpen, el }) => {
    return (
        <>
            <ModalWrapper open={open} setOpen={setOpen}>
                <div classname='py-4 w-full flex flex-col gap-4 items-center justify-center'>
                <Dialog.Title 
                        as='h3' 
                        className='font-bold text-xl text-center mb-2'
                    >
                        {el?.task?.title}
                    </Dialog.Title>

                    <p className='text-center text-gray-500'>{el?.text}</p>

                    <div className="flex justify-center mt-4">
                        <button
                            type="button"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium"
                            onClick={() => setOpen(false)}>
                            OK
                        </button>
                    </div>
                </div>
            </ModalWrapper>
        </>
    );
};

export default ViewNotification;