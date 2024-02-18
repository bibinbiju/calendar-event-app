import { useState } from "react";
import CalendarGrid from "./CalendarGrid";
import Header from "./Header";
import PropTypes from "prop-types";

export default function Calendar({ onSelect, selectedDate = new Date() }) {
  const [currentCalendarDate, setCurrentCalendarDate] = useState(new Date());
  return (
    <div>
      <Header
        date={currentCalendarDate}
        onChange={(dt) => {
          setCurrentCalendarDate(dt);
        }}
      />
      <CalendarGrid
        year={currentCalendarDate.getFullYear()}
        month={currentCalendarDate.getMonth()}
        selectedDate={selectedDate}
        onSelect={onSelect}
      />
    </div>
  );
}
Calendar.propTypes = {
  selectedDate: PropTypes.object,
  onSelect: PropTypes.func,
};
