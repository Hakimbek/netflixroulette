import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MoviesFilterBar from "./MoviesFilterBar/MoviesFilterBar";
import MovieCards from "./MovieCards/MovieCards";

function App() {
  return (
    <div className="App">
      <Header />
      <MoviesFilterBar />
      <MovieCards />
      <Footer />
    </div>
  );
}

export default App;
