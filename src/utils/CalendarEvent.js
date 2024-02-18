import { getUniqueId } from "./identifier";
import { STORAGE_KEYS, Storage } from "./storage";

export const CalendarEvent = {
  add: (data, date = new Date()) => {
    const _id = getUniqueId();
    const newEvent = { ...data, _id, date: new Date(date).toISOString() };
    const esistingData = Storage.getItem(STORAGE_KEYS.EVENTS_DB);
    let eventsDb = {};
    if (esistingData && Object.keys(esistingData)?.length > 0) {
      eventsDb = { ...esistingData, [_id]: newEvent };
    } else {
      eventsDb = { [_id]: newEvent };
    }
    Storage.setItem(STORAGE_KEYS.EVENTS_DB, eventsDb);
    return _id;
  },
  get: (id) => {
    let db = Storage.getItem(STORAGE_KEYS.EVENTS_DB) || {};
    if (!db?.[id]) throw Error("No event with provided id found.");
    return db[id] || {};
  },
  edit: (id, updatingData) => {
    const db = Storage.getItem(STORAGE_KEYS.EVENTS_DB);
    if (!db?.[id]) throw Error("No event with provided id found.");
    const updatedEventsDb = {
      ...db,
      [id]: { ...db[id], ...updatingData, _id: id },
    };
    Storage.setItem(STORAGE_KEYS.EVENTS_DB, updatedEventsDb);
  },
  remove: (id) => {
    let db = Storage.getItem(STORAGE_KEYS.EVENTS_DB);
    if (!db?.[id]) throw Error("No event with provided id found.");
    delete db[id];
    Storage.setItem(STORAGE_KEYS.EVENTS_DB, db);
  },
  getAll: () => {
    let db = Storage.getItem(STORAGE_KEYS.EVENTS_DB) || {};
    // Sort by date in ascending order
    return Object.values(db).sort((a, b) => a - b) || [];
  },
};

export default CalendarEvent;
