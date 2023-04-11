function Alert(props) {
  const { children } = props;

  return (
    <div className="alert">
      <span> {children} </span>
    </div>
  );
}

export default Alert;
