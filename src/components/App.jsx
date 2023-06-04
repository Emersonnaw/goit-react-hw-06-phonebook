import { useEffect  } from "react";
import { FormAddContacts } from "./FormAddContacts";
import { FilterContacts } from './FilterContacts';
import { RenderContactList } from './RenderContactList';
import {ToastContainer, toast} from 'react-toastify';
// import { nanoid } from 'nanoid';
import { Div, Title, ContactsTitle } from './App.styled';
import { useSelector, useDispatch } from 'react-redux';

import { contactsList, filterList } from 'components/store/contacts/selectors';
import { delContact } from 'components/store/contacts/actions';
export const App = () => {

  const contacts = useSelector(contactsList);
  const filter = useSelector(filterList);
const dispatch = useDispatch();



  // const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts')) ?? []);
  // const [filter, setFilter] = useState('');

  useEffect(() => {
  window.localStorage.setItem('contacts',JSON.stringify(contacts))
},[contacts])

  // add contacts on contacts:[]
// const onFormData = (value) => {

//   const checkExistContact = contacts.find(contact => contact.name.toLowerCase() === (value.name));
//   if (!checkExistContact) {

//   dispatch(addFormValues(value));

//     // setContacts(prevState => [{ ...value, id: nanoid() }, ...prevState]);
//        } else {
//      toast.error(`"${value.name.toUpperCase()} "is already in contacts`, {
//                     position: "top-right",
//                     autoClose: 3000,
//                     theme: "colored",
//                 });   
//     }
    
//   };
 



//push contact with filter list
// const  onChangeFilter = evt => {
//   setFilter(evt.currentTarget.value.toLowerCase());
//   // dispatch();
//    };

   //delete contact with
const  deleteContact = remove => {
  // setContacts(prevState => prevState.filter(contact =>  contact.id !== remove));
  dispatch(delContact(remove));
 }

  return (
     <Div>
      <Title> Phonebook</Title>
      {/* onFormData={onFormData} */}
      <FormAddContacts  />
        
      <ContactsTitle>Contacts</ContactsTitle>

     {contacts.length !== 0 &&  <FilterContacts
        // filter={filter}
        // onChange={onChangeFilter}
      />}
      
     <RenderContactList
        contactList={contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))}
        //  contactList={contacts}
          onDeleteContact={deleteContact}
       />  
      <ToastContainer/>
     </Div>

  );
}
