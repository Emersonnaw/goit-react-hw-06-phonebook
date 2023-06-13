import { FormAddContacts } from "./FormAddContacts";
import { FilterContacts } from './FilterContacts';
import { RenderContactList } from './RenderContactList';
import { Div, Title, ContactsTitle } from './App.styled';
import {ToastContainer} from 'react-toastify';
import { useSelector, useDispatch } from "react-redux";
import {  deleteContacts } from '../redux/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filterList = useSelector(state => state.filter);
  
  const deleteContact = remove => {
    dispatch(deleteContacts(remove));

 }

  return (
      <Div>
        <Title> Phonebook</Title>
        <FormAddContacts  />
        <ContactsTitle>Contacts</ContactsTitle>

        {contacts.length !== 0 && <FilterContacts />}
      
        <RenderContactList
          contactList={contacts.filter(contact => contact.name.toLowerCase().includes(filterList.toLowerCase()))}
          onDeleteContact={deleteContact}
        />  
      
        <ToastContainer/>
      </Div>
  );
}
