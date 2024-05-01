import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return(
    <>
      {isOpen && (
        <>
          <div className="m-auto z-50 relative min-h-[200px] max-w-[80%] bg-white p-4 rounded-2xl">
            <div className="flex ">
              <AiOutlineClose
                onClick={onClose}
                className="text-2xl justify-end "
              />
            </div>
            {children}
          </div>
          <div
            onClick={onClose}
            className=" absolute top-0 z-40 h-screen w-screen backdrop-blur "
          ></div>
        </>
      )}
    </>
  );
};

export default Modal;
