import Button from "../buttons/Button";
import PropTypes from "prop-types";

export default function Header({ onChange, date = new Date() }) {
  const onPrevBtnClick = () => {
    return onChange(new Date(date.getFullYear(), date.getMonth() - 1));
  };
  const onNextBtnClick = () => {
    return onChange(new Date(date.getFullYear(), date.getMonth() + 1));
  };
  const onClickToday = () => {
    let currentDate = new Date();
    currentDate.setDate(1);
    return onChange(currentDate);
  };
  return (
    <div className="flex gap-2 items-center">
      <Button onClick={onClickToday}>Today</Button>

      <div className=" flex-1 flex justify-center gap-2 items-center">
        <Button onClick={onPrevBtnClick}>&lt;</Button>
        <h1 className="text-xl font-bold">
          {date.toLocaleString("default", { month: "long" })}{" "}
          {date.getFullYear()}
        </h1>
        <Button onClick={onNextBtnClick}>&gt;</Button>
      </div>
    </div>
  );
}
Header.propTypes = {
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};
