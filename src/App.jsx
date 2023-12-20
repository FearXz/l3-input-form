import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.min.css";
import "./App.css";
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
import MyMain from "./components/MyMain";

function App() {
  return (
    <>
      <MyHeader />
      <MyMain />
      <MyFooter />
    </>
  );
}

export default App;
