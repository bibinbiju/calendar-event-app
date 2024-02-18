import { useForm } from "../../hooks/useForm";
import { EVENT_TYPES } from "../../utils/constant";
const formObject = {
  eventName: "",
  eventType: "",
  description: "",
};
import PropTypes from "prop-types";

export default function EventForm({
  isEdit,
  data = formObject,
  onSave = () => {},
  onCancel = () => {},
  onDelete = () => {},
}) {
  const { formState, handleChange } = useForm({ ...formObject, ...data });
  return (
    <form>
      <div className="grid gap-2 mb-6 ">
        <div>
          <label
            htmlFor="eventName"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Event name
          </label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Tea break with team"
            onChange={handleChange}
            value={formState["eventName"]}
          />
        </div>
        <div>
          <label
            htmlFor="eventType"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Select an option
          </label>
          <select
            id="eventType"
            name="eventType"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
            value={formState["eventType"]}
          >
            <option>Choose a event type</option>
            {EVENT_TYPES.map((d) => (
              <option key={d.id} value={d.id}>
                {d.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
            onChange={handleChange}
            value={formState["description"]}
          />
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="flex-1">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => onSave(formState)}
          >
            Save
          </button>
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
        {isEdit && (
          <div>
            <button
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={onDelete}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </form>
  );
}

EventForm.propTypes = {
  isEdit: PropTypes.bool,
  data: PropTypes.object,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  onDelete: PropTypes.func,
};
