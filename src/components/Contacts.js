import React from "react";
import ModalContacts from "./ModalContacts";

const Contacts = ({ title, showContacts }) => {
  return <ModalContacts title={title} isOpen={showContacts}></ModalContacts>;
};
export default Contacts;
