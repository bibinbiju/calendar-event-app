import PropTypes from "prop-types";
import { createPortal } from "react-dom";

export default function Modal({ children, show = false }) {
  if (!show) return null;
  return createPortal(
    <div
      id="crud-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="backdrop-blur-[1px] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-start w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative mt-20 p-4 w-full max-w-md max-h-full">
        <div className="relative p-5 bg-white rounded-lg shadow ">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
Modal.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
