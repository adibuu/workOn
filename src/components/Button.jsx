/* eslint-disable react/prop-types */
const Button = ({ isActive, onClick, children }) => (
  <button
    style={{ backgroundColor: isActive ? "red" : undefined }}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
