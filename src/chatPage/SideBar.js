import { useState } from "react";
import SearchBar from "./SearchBar";
import User from "../dataBase/User";

function SideBar(props) {
  const contacts = props.contacts;
  const [contactList, setContactList] = useState(contacts);
  const nullUser = new User("", "", "");
  const [activeContact, setActiveContact] = useState(nullUser);
  const doSearch = function (query) {
    setContactList(
      contacts.filter((contact) => contact.getName().includes(query))
    );
  };
  const listContacts = contactList.map((contact, index) => {
    const changeActive = function (contact) {
      setActiveContact(contact);
    };
    return (
      <li
        className={
          contact === activeContact
            ? "list-group-item active"
            : "list-group-item"
        }
        aria-current={contact === activeContact ? "true" : "false"}
        onClick={() => changeActive(contact)}
        key={index}
      >
        {contact.getName()}
      </li>
    );
  });
  return (
    <div>
      <SearchBar doSearch={doSearch} />
      <ul className="list-group">{listContacts}</ul>
    </div>
  );
}

export default SideBar;
