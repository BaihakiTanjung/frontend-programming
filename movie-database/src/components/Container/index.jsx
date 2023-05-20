const styleContainer = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const Container = ({ children }) => {
  return <div style={styleContainer}>{children}</div>;
};

export default Container;
