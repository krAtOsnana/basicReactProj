import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import {collection, getDocs } from 'firebase/firestore'
import { db } from './config/firebase';
import ContactCard from './components/ContactCard';
import AddAndUpdateContact from './components/AddAndUpdateContact';
import useDisclose from './hooks/useDisclose';


function App() {
  
  const [contacts, setContacts] = useState([]);

  const {isOpen, onClose, onOpen} =  useDisclose();
    
  useEffect(() => {
    const  getData = async () => {
      try {
        const contactsRef =  collection( db , "contacts" );
        const contactsSnapShot = await getDocs (contactsRef)
        const contactsList = contactsSnapShot.docs.map((doc)=> {
          return {
            id: doc.id,
            ...doc.data()
          }
        }
        )
        setContacts(contactsList);
      } catch (error) {
        console.log(error);
      }
}
getData();
  }, []);





  return (
    <div className='max-w-[420px] mx-auto   ' >
      <Navbar onOpen={onOpen}  />
      <ContactCard contacts={contacts} setContacts={setContacts} />
      <AddAndUpdateContact isOpen={isOpen} onClose={onClose}   />
      
      
    </div>
  )
}

export default App
