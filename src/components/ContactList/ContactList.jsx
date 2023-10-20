import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'store/contact/actions';

const ContactList = () => {
  const { items, filteredItems } = useSelector(store => store.contacts);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchContactsThunk())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      {items && (
        <ul className={css.list_group}>
          {(filteredItems ?? items).map(el => (
            <Contact contact={el} key={el.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
