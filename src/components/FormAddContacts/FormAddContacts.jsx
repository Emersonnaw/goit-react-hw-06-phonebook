
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Container,  FormCastom, LabelCastom, InputCastom,Button } from './FormAddContacts.styled';
import 'react-toastify/dist/ReactToastify.css';
import { toast} from 'react-toastify';
import { useSelector, useDispatch } from "react-redux";
import { addFormValue } from '../../redux/contactsSlice';
let userSchema = yup.object().shape({
  name: yup.string().required(),
});
const initialValues = {
  name: '',
  number: '',
};

export const FormAddContacts = () => {
 const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleSubmit = (values, { resetForm }) => {
   
    const checkExistContact = contacts.find(contact => contact.name.toLowerCase() === (values.name));
    if (!checkExistContact) {
      
      dispatch(addFormValue(values));
    } else {
     toast.error(`"${values.name.toUpperCase()} "is already in contacts`, {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "colored",
                });   
    }
    resetForm();
  }

  
  return (
    <Container>
    <Formik initialValues={initialValues}  validationSchema={userSchema} onSubmit={handleSubmit}>
    <FormCastom>
      <LabelCastom>
        Name
        <InputCastom
        type="text"
        name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
            />
          <ErrorMessage name="name" />
        </LabelCastom>
        <LabelCastom>
          Number
          <InputCastom
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            />
          <ErrorMessage name="number" />
        </LabelCastom>
       <Button  type="submit"> Add contact </Button>
    </FormCastom>
    </Formik>
  </Container>
  );
  
};
