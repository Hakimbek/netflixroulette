import PropTypes from "prop-types";
import "./movieCard.css";

function MovieCard(props) {
  return (
    <div className="movie_card__wrapper">
      <img className="movie_card__image" src={props.imageUrl} alt="movie" />
      <div className="movie_card__name_year">
        <p className="movie_card__name">{props.name}</p>
        <p className="movie_card__year">{props.year}</p>
      </div>
      <p className="movie_card__genre">{props.genre}</p>
    </div>
  );
}

MovieCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default MovieCard;
