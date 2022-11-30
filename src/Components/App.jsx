import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import Logo from "./Header/Title/Logo/Logo";
import Line from "./Line/Line";

function App() {
  return (
    <div className="App">
      <Header />
      <Line />
      <Main />
      <Footer>
        <Logo>
          <b>netflix</b>roulete
        </Logo>
      </Footer>
    </div>
  );
}

export default App;
