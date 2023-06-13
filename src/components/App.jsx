import { FormAddContacts } from "./FormAddContacts";
import { FilterContacts } from './FilterContacts';
import { RenderContactList } from './RenderContactList';
import { Div, Title, ContactsTitle } from './App.styled';
import {ToastContainer} from 'react-toastify';
import { useSelector} from "react-redux";


export const App = () => {
  
  const contacts = useSelector(state => state.contacts.contacts);

  
 

  return (
      <Div>
        <Title> Phonebook</Title>
        <FormAddContacts  />
        <ContactsTitle>Contacts</ContactsTitle>

        {contacts.length !== 0 && <FilterContacts />}
      
        <RenderContactList
          // contactList={contacts.filter(contact => contact.name.toLowerCase().includes(filterList.toLowerCase()))}
        />  
      
        <ToastContainer/>
      </Div>
  );
}
