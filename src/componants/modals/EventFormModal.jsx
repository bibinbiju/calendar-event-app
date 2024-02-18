import { useState } from "react";
import Modal from "./Modal";
import EventForm from "../forms/EventForm";
import PropTypes from "prop-types";

export default function EventFormModal({
  show,
  onSave = () => {},
  onCancel = () => {},
  date = new Date(),
}) {
  useState();
  return (
    <Modal show={show}>
      <h3 className="text-xl font-bold text-gray-800">{`Create Event for ${date.toLocaleDateString()}`}</h3>
      <EventForm onSave={onSave} onCancel={onCancel} />
    </Modal>
  );
}
EventFormModal.propTypes = {
  show: PropTypes.bool,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  date: PropTypes.object,
};
