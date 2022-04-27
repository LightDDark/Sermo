import { useState } from "react";
import SearchBar from "./SearchBar";
import logs from "../dataBase/LogData";

function SideBar(props) {
  const contacts = props.contacts;
  const currentUser = props.self;
  const [activeContact, setActiveContact] = props.active;
  const [contactList, setContactList] = useState(contacts);

  const doSearch = function (query) {
    setContactList(
      contacts.filter((contact) => contact.getName().includes(query))
    );
  };
  const listContacts = contactList.map((contact, index) => {
    const changeActive = function (contact) {
      setActiveContact([contact, logs.getLog(contact,currentUser)]);
    };
    return (
      <li
        className={
          contact === activeContact[0]
            ? "list-group-item active"
            : "list-group-item"
        }
        aria-current={contact === activeContact[0] ? "true" : "false"}
        onClick={() => changeActive(contact)}
        key={index}
      >
        {contact.getNickName()}
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
