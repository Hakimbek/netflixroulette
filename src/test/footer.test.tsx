import { render } from "@testing-library/react";
import Footer from "../components/Footer/Footer";

describe("Footer", () => {
  it("render Footer component", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
