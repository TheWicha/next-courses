import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import WelcomeBanner from "@/components/ui/WelcomeBanner";

test("renders welcome banner", () => {
  render(<WelcomeBanner />);

  const headingElement = screen.getByText(/Welcome to our academy!/i);
  expect(headingElement).toBeInTheDocument();

  const subheadingElement = screen.getByText(
    /Lorem ipsum dolor, sit amet elit./i
  );
  expect(subheadingElement).toBeInTheDocument();

  const imageElement = screen.getByAltText(/welcome banner/i);
  expect(imageElement).toBeInTheDocument();
});
