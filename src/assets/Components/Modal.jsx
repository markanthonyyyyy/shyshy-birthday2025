import { X } from 'lucide-react';
import React from 'react'

const Modal = ({ isOpen, onClose, children, title="sample title", width="md"}) => {

    if (!isOpen) return null;
    const widthClass = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
    }[width];


  return (
    <div className="modal-overlay p-3" style={{fontFamily: "Comic Relief, Aloja"}}>
      <div className={`${widthClass} modal-content bg-white w-full overflow-hidden border-2 border-pink-600 rounded-lg`} onClick={(e) => e.stopPropagation()}>
        <div className='flex justify-between px-3 py-2 bg-pink-200 border-b-2 border-pink-600'>
            <div className='text-sm'>
                {title}
            </div>
            <button onClick={onClose}><X className='w-5 h-5 text-pink-600'/></button>
        </div>
        <div className='p-5 text-sm md:text-base'>
            {children}
        </div>
      </div>
    </div>
  );
}

export default Modal