import React from "react";
import { connect } from "react-redux";
import { fetchContacts } from "../actions/contactsAction";
import ModalContacts from "./ModalContacts";
const mapStateToProps = (state) => ({
  contactsData: state.contacts.data,
  loading: state.contacts.loading,
  isErrors: state.contacts.hasErrors,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (countryId) => dispatch(fetchContacts(countryId)),
});
const Contacts = ({ title, showContacts, loading }) => {
  return (
    <ModalContacts
      title={title}
      isOpen={showContacts}
      isLoading={loading}
    ></ModalContacts>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
