import PropTypes from "prop-types";

export default function List({ data = [], onSelect = () => {} }) {
  return (
    <div className="w-100 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {Array.isArray(data) && data.length > 0 ? (
        data?.map?.((d, index) => (
          <button
            key={d?._id || index}
            type="button"
            onClick={() => onSelect(d._id)}
            className="relative inline-flex items-center text-start gap-1   w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          >
            <div className="basis-32">
              {d?.date ? new Date(d.date).toLocaleDateString() : "N/A"}
            </div>
            <div className="flex-1">{d?.eventName || ""}</div>
            <div className="flex-shrink">
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
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </button>
        ))
      ) : (
        <div className="p-3 flex justify-center items-center">No Events</div>
      )}
    </div>
  );
}
List.propTypes = {
  data: PropTypes.array,
  onSelect: PropTypes.func,
};
