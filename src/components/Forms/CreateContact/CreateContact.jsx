import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createContactThunk } from 'store/contact/actions';
import css from './CreateContact.module.css';

const FormCreateContact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isValid, setIsValid] = useState(true);
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'name') setName(value);
    else setNumber(value);
  };

  const resetForm = () => {
    setName('');
    setNumber('');
    setIsValid(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !number) return setIsValid(false);
    const isAlreadyExist = contacts.find(el => el.name === name);
    if (isAlreadyExist) {
      resetForm();
      return alert(`${name} is already in contacts`);
    } else dispatch(createContactThunk({ name, number, isValid }));
    resetForm();
  };

  return (
    <form className={css.form_contact} onSubmit={handleSubmit}>
      <div className={css.input_contact}>
        <label htmlFor="inputName" className={css.form_label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className={`${css.form_control} ${!isValid && 'is-invalid'}`}
          id="inputName"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className={css.input_contact}>
        <label htmlFor="inputNumber" className={css.form_label}>
          Number
        </label>
        <input
          type="tel"
          name="number"
          onChange={handleChange}
          className={`${css.form_control} ${!isValid && 'is-invalid'}`}
          id="inputNumber"
          value={number}
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
};

export default FormCreateContact;
