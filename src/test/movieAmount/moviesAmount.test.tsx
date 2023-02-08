import { render, screen } from "@testing-library/react";
import MoviesAmount from "../../components/MoviesAmount/MoviesAmount";

describe("Movie Amount", () => {
  it("render Movie Amount component with number of movie", () => {
    render(<MoviesAmount moviesAmount={255} />);
    expect(screen.getByText(/255/i)).toBeInTheDocument();
  });
});
