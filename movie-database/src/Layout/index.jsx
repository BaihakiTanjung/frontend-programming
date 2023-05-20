import Container from "../components/Container";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
