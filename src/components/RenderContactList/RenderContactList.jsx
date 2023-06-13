import { Ul,Li, P, Button } from './RenderContactList.styled';
import { useSelector, useDispatch } from "react-redux";
import { deleteContacts } from 'redux/contactsSlice';

export const RenderContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filterList = useSelector(state => state.filter);

  return (
    <>
      <Ul>
        {contacts.filter(contact => contact.name.toLowerCase().includes(filterList.toLowerCase())).map(({ id, name, number }) => (
          <Li key={id}>
            <P>
             &#9742; &#160;{name}: {number}
            </P>
            <Button onClick={() =>  dispatch(deleteContacts(id))}>Delete</Button>
          </Li>
        ))}
      </Ul>
    </>
  );
};
