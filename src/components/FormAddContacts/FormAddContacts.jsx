
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Container,  FormCastom, LabelCastom, InputCastom,Button } from './FormAddContacts.styled';
// import PropTypes from 'prop-types';


import { contactsList } from 'components/store/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { addFormValues } from 'components/store/contacts/actions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let userSchema = yup.object().shape({
  name: yup.string().required(),
 
  
});
const initialValues = {
  name: '',
  number: '',
};

// { onFormData }
export const FormAddContacts = () => {
 
  const contacts = useSelector(contactsList);
  const dispatch = useDispatch();

  
  const handleSubmit = (values, { resetForm }) => {

      const checkExistContact = contacts.find(contact => contact.name.toLowerCase() === (values.name.toLowerCase()));
  if (!checkExistContact) {
  dispatch(addFormValues(values));
  } else {
     toast.error(`"${values.name.toUpperCase()} "is already in contacts`, {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "colored",
                });   
    }
    // onFormData(values);
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

// FormAddContacts.propTypes = {
//   onFormData: PropTypes.func.isRequired,
// }
