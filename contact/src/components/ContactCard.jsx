import React from 'react'
import { IoMdContact } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';
import AddAndUpdateContact from './AddAndUpdateContact';
import useDisclose from '../hooks/useDisclose';

const ContactCard = ({contacts}) => {
 

const {isOpen, onClose, onOpen} =  useDisclose();

const deleteContact = async (id) => {
  try {
   await deleteDoc(doc(db,"contacts",id))
  } catch (error) {
    console.log(error);
  }
}

  
    return (
      <div>
          {contacts.map((contact) => (
              <div
                  key={contact.id}
                  className="flex items-center justify-between mt-4 bg-[#FFEAAE] rounded-tl-xl rounded-br-xl p-2"
              >
                  {/* Contact Info */}
                  <div className="flex items-center justify-between gap-4">
                      <IoMdContact className="text-orange-400 text-5xl" />
                      <div className="text-black">
                          <h1 className="font-semibold">{contact.name}</h1>
                          <h2 className="font-light">{contact.email}</h2>
                      </div>
                  </div>

                  {/* Edit/Delete Icons */}
                  <div className="flex gap-3">
                      <FaUserEdit
                          onClick={() => onOpen(contact)} // Pass the current contact to the onOpen function
                          className="text-blue-700 text-3xl"
                      />
                      <MdDelete
                          className="text-red-600 text-3xl"
                          onClick={() => deleteContact(contact.id)}
                      />
                      <div>
                          <AddAndUpdateContact 
                              contact={contact}
                              isUpdate
                              isOpen={isOpen}
                              onClose={onClose}
                               // Pass the selected contact to the modal
                          />
                      </div>
                  </div>
              </div>
          ))}
      </div>
  );
  
}

export default ContactCard;
