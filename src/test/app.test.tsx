import App from "../components/App";
import { screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { renderWithProviders } from "../utils/testUtils.";

describe("App", () => {
  it("render MovieDetails correctly when clicking movie and magnifier button", async () => {
    user.setup();
    renderWithProviders(<App />);

    const movieCard = await screen.findByAltText("La La Land");
    expect(movieCard).toBeInTheDocument();
  });
});
