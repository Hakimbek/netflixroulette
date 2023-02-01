import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer/Footer";

describe("Footer", () => {
  it("render Footer correctly", () => {
    render(<Footer />);
    expect(screen.getByText(/netflix/i)).toBeInTheDocument();
    expect(screen.getByText(/roulette/i)).toBeInTheDocument();
  });
});
