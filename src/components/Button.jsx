/* eslint-disable react/prop-types */
import "../css/Button.css";

const Button = ({ text, className = "" }) => {
  return (
    <button
      className={
        className +
        " uppercase button border-none px-4 py-3 text-white bg-violet-600 relative cursor-pointer"
      }
    >
      {text}
    </button>
  );
};

export default Button;
