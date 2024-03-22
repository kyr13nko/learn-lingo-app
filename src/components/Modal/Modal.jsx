/* eslint-disable react/prop-types */
const Modal = ({ title, text, children }) => {
  console.log("children", children);
  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
      <div>{children}</div>
    </div>
  );
};

export default Modal;
