const STORAGE_KEY_PREFFIX = "calendar-event-app:";
export const STORAGE_KEYS = {
  EVENTS_DB: "EVENTS_DB",
};
const MAP_KEYS_NAMES = {
  [STORAGE_KEYS.EVENTS_DB]: `${STORAGE_KEY_PREFFIX}events-db`,
};
export const REQUIRED_STORAGE_KEYS = [];
export const Storage = {
  setItem: (key, value) =>
    localStorage.setItem(MAP_KEYS_NAMES[key], JSON.stringify(value ?? null)),
  getItem: (key) => {
    const newValue =
      localStorage.getItem(MAP_KEYS_NAMES[key]) !== "undefined"
        ? localStorage.getItem(MAP_KEYS_NAMES[key])
        : null;
    return JSON.parse(newValue ?? null);
  },
  removeItem: (key) => localStorage.removeItem(MAP_KEYS_NAMES[key]),
  clear: () => {
    for (const storageKey in localStorage) {
      if (storageKey(STORAGE_KEY_PREFFIX) !== -1)
        localStorage.removeItem(storageKey);
    }
  },
};
