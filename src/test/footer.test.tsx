import { render } from "@testing-library/react";
import Footer from "../components/Footer/Footer";

describe("Footer", () => {
  it("renders Footer component", () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
