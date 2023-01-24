import { render, screen } from "@testing-library/react";
import Logo from "../components/common/Logo/Logo";

describe("Logo", () => {
  it("renders Logo component", () => {
    render(<Logo />);
    expect(screen.getByText(/netflix/i)).toBeInTheDocument();
    expect(screen.getByText(/roulette/i)).toBeInTheDocument();
  });
});
