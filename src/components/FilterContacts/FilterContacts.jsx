
// import PropTypes from 'prop-types';
import { P, Input } from './FilterContacts.styled'
// {filter,onChange}
import {useDispatch } from 'react-redux';
import { filterContact } from 'components/store/contacts/actions';
export const FilterContacts = () => {
  const dispatch = useDispatch();
  
  const handleChange = evt => {
   
    dispatch(filterContact(evt.currentTarget.value.toLowerCase()));
  }
  
    
    return (
      <>
        <P>Find contacts by name</P>
        <Input
          // value={filter}
          type="text"
          name="filter"
          onChange={handleChange}
        />
      </>
    );
 
}

// FilterContacts.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onChange:PropTypes.func.isRequired,
// }  