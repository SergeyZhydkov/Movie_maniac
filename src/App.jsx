import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import Fire from "./assets/fire.png";
import Party from "./assets/partying-face.png";
import Star from "./assets/glowing-star.png";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <MovieList type="popular" title="Popular" emoji={Fire} />
      <MovieList type="top_rated" title="Top Rated" emoji={Star} />
      <MovieList type="upcoming" title="Upcoming" emoji={Party} />
    </div>
  );
};
export default App;
