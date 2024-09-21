import { IoMdClose } from "react-icons/io";
import {createPortal} from 'react-dom'


const Modal = ({ isOpen, onClose, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          {/* Full-screen container with Flexbox centering */}
          <div className=" fixed inset-1 z-40 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-[420px] relative z-50 max-w-[420px] bg-stone-700 rounded-md p-4">
              <div className="flex justify-end p-2">
                <IoMdClose
                  className="text-3xl text-red-600 cursor-pointer"
                  onClick={onClose}
                />
              </div>
              {children}
            </div>
          </div>

          {/* Backdrop that covers the screen */}
          <div
            className="fixed inset-0 z-30 backdrop-blur"
            onClick={onClose}
          />
        </>
      )}
    </>,
    document.getElementById('modal-root')
  );
};

export default Modal
