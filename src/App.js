import React from 'react';
import "./App.css";
import { CSSTransition } from "react-transition-group";

// Components
import Container from './components/Container/Container';
import FormAddContactsContainer from "./components/FormAddContacts/FormAddContactsContainer";
import FilterContainer from "./components/Filter/FilterContainer";
import ContactListContainer from "./components/ContactList/ContactListContainer";

export default function App({ contacts,onIncrement,counterValue }) {
  return (
      <Container title="Phonebook">
        <CSSTransition in={true} appear={true} timeout={500} classNames="fade-logo" unmountOnExit>
          <h1 className="title">Phonebook</h1> 
        </CSSTransition>        
        <FormAddContactsContainer />
        <h2 className="title">Contacts</h2>
          <CSSTransition in={true} appear={true} timeout={500} classNames="fade-filter" unmountOnExit>
            <FilterContainer />
          </CSSTransition>
        <ContactListContainer />
      </Container>
    );
  }
