import { addDoc, collection } from 'firebase/firestore';
import Modal from './Modal'
import {Formik, Form, Field} from 'formik'
import { db } from '../config/firebase';


function AddAndUpdateContact({isOpen, onClose, isUpdate, contact}) {

const addContact = async (contact) => {

    try {
      const contactsRef =  collection( db , "contacts" );
      await addDoc(contactsRef, contact);
      onClose()
      

    } catch (error) {
      console.log(error);
    }
}

  return (
    <div>
      <Modal isOpen={isOpen} onClose = {onClose} >
        <Formik 
        initialValues={ isUpdate ? {
            name: contact.name,
            email: contact.email,
          } :{
          name:"",
          email:"",
        }}
        onSubmit={(values)=>{
          addContact(values);

        }}
        >
          <Form>
            <h1 className='text-white underline underline-offset-4 p-2 text-xl '>  Enter Details : </h1>
            <div className='flex flex-col p-2 gap-2'>
              <label 
              htmlFor="name"
              className='text-white'
              >Name :</label>
              <Field 
              name="name" 
              placeholder="enter your name"
              className="p-2 border border-black rounded-md bg-slate-100 "
              />
            </div>
            <div className='flex flex-col p-2 gap-2'>
              <label 
              htmlFor="email"
              className='text-white'
              >Email :</label>
              <Field 
              name="email" 
              placeholder="enter your email"
              className="p-2 border border-black rounded-md bg-slate-100 "
              />
            </div>
            <div className='flex justify-end pr-2'>
              <button 
              className='rounded-lg mb-4 mt-3  bg-yellow-500 p-2  border border-black font-black '>
                {isUpdate ? "Update" : "Add"} CONTACT</button>
            </div>
          </Form>
        </Formik>
      </Modal>
    </div>
  )
}

export default AddAndUpdateContact
