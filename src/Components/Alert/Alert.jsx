function Alert({ additionalClassName, text }) {
  return (
    <div className={`alert ${additionalClassName}`} role="alert">
      {text}
    </div>
  );
}
export default Alert;
