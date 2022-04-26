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
  var popover = new bootstrap.Popover(
    document.querySelector(".example-popover"),
    {
      container: "body",
    }
  );
  return (
    <div>
      <button
        type="button"
        className="btn btn-lg btn-danger"
        data-bs-toggle="popover"
        title="Popover title"
        data-bs-content="And here's some amazing content. It's very engaging. Right?"
      >
        Click to toggle popover
      </button>
      <SearchBar doSearch={doSearch} />
      <ul className="list-group">{listContacts}</ul>
    </div>
  );
}

export default SideBar;
