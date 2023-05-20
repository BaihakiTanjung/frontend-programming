const Alert = ({ children }) => {
  const stylesAlert = {
    color: "red",
  };
  return <span style={stylesAlert}>{children}</span>;
};

export default Alert;
