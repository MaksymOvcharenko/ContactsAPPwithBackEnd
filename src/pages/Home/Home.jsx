import ContactAddForm from "../../components/ContactAddForm/ContactAddForm.jsx";
import { ContactList } from "../../components/ContactList/ContactList.jsx";
import { ContactSearchForm } from "../../components/ContactSearchForm/ContactSearchForm.jsx";
import s from "./Home.module.css";
export const Home = () => {
  return (
    <>
      <div className={s.cont}>
        <ContactSearchForm />
        <ContactAddForm />
        <ContactList />
      </div>
    </>
  );
};
