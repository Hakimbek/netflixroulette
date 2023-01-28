import reducer, {
  seeMovieDetails,
  InitialStateType,
} from "../redux/movieSlice";

const movie = {
  id: 1,
  poster_path: "https://image.png",
  title: "Title",
  tagline: "Tagline",
  vote_average: 5,
  vote_count: 100,
  genres: ["Crime"],
  release_date: "2002",
  runtime: 120,
  overview: "Overview",
  budget: 100,
  revenue: 200,
};

describe("Test movieSlice reducer", () => {
  it("Action payload is null", () => {
    expect(reducer({ movie }, seeMovieDetails(null))).toEqual({ movie: null });
  });

  it("Action payload is movie", () => {
    expect(reducer({ movie: null }, seeMovieDetails(movie))).toEqual({ movie });
  });
});
