import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Student from "./Student.jsx";
function App() {
  return (
    <>
      <Header />
      <Footer />
      <Food />
      <Card />
      <Button />
      <Student name="azid" age={23} isStudent={true} />
    </>
  );
}
export default App;
