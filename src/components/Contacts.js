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
    <ModalContacts title={title} isOpen={showContacts} isLoading={loading}>
      {!isErrors && (
        <CustomScrollbars
          onReachedBottom={onReachedToBottom}
          style={{ height: 350 }}
        >
          {contactsData.map((contact, id) => (
            <div
              key={id}
              className="d-flex"
              onClick={() => selectedContactActive(contact)}
            >
              <p className="mr-3">{contact.id}</p>
              <p className="mr-3">
                <strong>
                  {contact.first_name} {contact.last_name}
                </strong>
              </p>
              <p className="mr-3">{contact.email}</p>
              <p>{contact.phone_number}</p>
            </div>
          ))}
        </CustomScrollbars>
      )}
      {isErrors && "Error!"}
    </ModalContacts>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
