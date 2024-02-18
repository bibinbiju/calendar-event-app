import PropTypes from "prop-types";
export default function CalendarGrid({
  year,
  month,
  onSelect,
  selectedDate = new Date(),
}) {
  const renderCell = (cellDate) => {
    let newCellDate = new Date(cellDate);
    const rowCells = [];
    while (newCellDate.getMonth() === month) {
      let cols = [];
      for (let i = 0; i < 7; i++) {
        const day = newCellDate.getDay();
        const currentDate = new Date(newCellDate);
        cols.push(
          day === i && newCellDate.getMonth() === month ? (
            <td
              className={`p-2 border  ${
                selectedDate?.toDateString?.() === newCellDate?.toDateString?.()
                  ? "border-white text-white"
                  : "border-slate-500"
              } `}
              onClick={() => {
                onSelect(new Date(currentDate));
              }}
              key={i}
            >
              {newCellDate.getDate()}
            </td>
          ) : (
            <td className="p-2 border border-slate-500" key={i}></td>
          )
        );
        if (day === i && newCellDate.getMonth() === month)
          newCellDate.setDate(newCellDate.getDate() + 1);
      }
      rowCells.push(
        <tr
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          key={`${month}-${newCellDate.getDate()}`}
        >
          {cols}
        </tr>
      );
    }
    return rowCells;
  };
  return (
    <table className="table-fixed w-full  text-center  border-collapse border border-slate-500 rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <td className="px-2 py-1 border border-slate-500">Sun</td>
          <td className="px-2 py-1 border border-slate-500">Mon</td>
          <td className="px-2 py-1 border border-slate-500">Tue</td>
          <td className="px-2 py-1 border border-slate-500">Wed</td>
          <td className="px-2 py-1 border border-slate-500">Thu</td>
          <td className="px-2 py-1 border border-slate-500">Fri</td>
          <td className="px-2 py-1 border border-slate-500">Sat</td>
        </tr>
      </thead>
      <tbody>{renderCell(new Date(year, month, 1))}</tbody>
    </table>
  );
}
CalendarGrid.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  selectedDate: PropTypes.object.isRequired,
  onSelect: PropTypes.func,
};
