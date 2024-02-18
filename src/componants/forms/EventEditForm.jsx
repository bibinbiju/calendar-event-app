import PropTypes from "prop-types";
import EventForm from "./EventForm";
import CalendarEvent from "../../utils/CalendarEvent";

export default function EventEditForm({ id, onCancel, onDelete, onSave }) {
  const eventData = CalendarEvent.get(id);
  return (
    <div>
      <div className="flex items-center justify-between mb-4 gap-2">
        <div onClick={onCancel}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div className="flex-1 flex items-center">
          <div className="basis-32 font-bold">
            {eventData?.date
              ? new Date(eventData.date).toLocaleDateString()
              : "N/A"}
          </div>
          <div className="flex-1 font-bold">{eventData?.eventName || ""}</div>
        </div>
      </div>
      <EventForm
        isEdit
        data={eventData}
        onCancel={onCancel}
        onDelete={onDelete}
        onSave={onSave}
      />
    </div>
  );
}

EventEditForm.propTypes = {
  id: PropTypes.string,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  onDelete: PropTypes.func,
};
