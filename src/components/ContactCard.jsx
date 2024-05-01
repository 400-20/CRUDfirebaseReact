import { deleteDoc, doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import db from "../config/firebase";
import AddAndUpdate from "./AddAndUpdate";
import useDisclouse from "../hooks/useDisclouse";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const ContactCard = ({ contact }) => {
  const { onClose, onOpen, isOpen } = useDisclouse();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.warn("Contact deleted successfully!");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        key={contact.id}
        className="bg-yellow flex justify-between items-center p-2 rounded-lg"
      >
        <div className="flex gap-1">
          <HiOutlineUserCircle className="text-orange text-4xl" />
          <div className="">
            <h2 className="font-medium">{contact.name}</h2>
            <p className=" text-sm ">{contact.email}</p>
          </div>
        </div>
        <div className="flex text-3xl items-center justify-center">
          <RiEditCircleLine
            onClick={onOpen}
            className="text-2xl cursor-pointer "
          />
          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className="text-orange cursor-pointer"
          />
        </div>
      </div>
      <AddAndUpdate 
      contact = {contact}
      isUpdate 
      onClose={onClose} 
      isOpen={isOpen} />
    </>
  );
};

export default ContactCard;
