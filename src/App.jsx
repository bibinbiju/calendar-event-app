import { useState } from "react";
import "./App.css";
import Calendar from "./componants/calendar";
import List from "./componants/list/List";
import EventFormModal from "./componants/modals/EventFormModal";
import CalendarEvent from "./utils/CalendarEvent";
import EventEditForm from "./componants/forms/EventEditForm";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const allEvents = CalendarEvent.getAll();
  return (
    <>
      <EventFormModal
        date={selectedDate}
        show={showCreateModal}
        onCancel={() => setShowCreateModal(false)}
        onSave={(data) => {
          CalendarEvent.add(data, selectedDate);
          setShowCreateModal(false);
        }}
      />
      <div className="container m-2 mx-auto h-full">
        <div className="grid gap-2 mb-6 lg:grid-cols-2">
          <div>
            <Calendar
              selectedDate={selectedDate}
              onSelect={(dt) => {
                setSelectedDate(dt);
                setShowCreateModal(true);
              }}
            />
          </div>
          <div>
            <div className="bg-white rounded shadow p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                My Calendar Items
              </h3>
              {selectedEvent ? (
                <EventEditForm
                  id={selectedEvent}
                  onCancel={() => setSelectedEvent(null)}
                  onSave={(data) => {
                    CalendarEvent.edit(selectedEvent, data);
                    setSelectedEvent(null);
                  }}
                  onDelete={() => {
                    CalendarEvent.remove(selectedEvent);
                    setSelectedEvent(null);
                  }}
                />
              ) : (
                <List
                  data={allEvents}
                  onSelect={(id) => {
                    setSelectedEvent(id);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
