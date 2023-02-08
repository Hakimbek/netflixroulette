import { renderWithProviders } from "../../utils/testUtils.";
import { screen } from "@testing-library/react";
import MovieCards from "../../components/Body/MovieCrads/MovieCards";

describe("Movies", () => {
  it("renders MovieCards correctly", async () => {
    renderWithProviders(<MovieCards />);
    expect(await screen.findByAltText("La La Land")).toBeInTheDocument();
    expect(await screen.findByText("La La Land")).toBeInTheDocument();
    expect(await screen.findByText("2016")).toBeInTheDocument();
    expect(await screen.findByText("Comedy")).toBeInTheDocument();
    expect(await screen.findByText("Drama")).toBeInTheDocument();
    expect(await screen.findByText("Romance")).toBeInTheDocument();
  });
});
