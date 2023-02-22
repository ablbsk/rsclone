import { render } from "@testing-library/react";
import ErrorMessage from ".";

test("ErrorMessage component", () => {
  const container = render(<ErrorMessage />);
  expect(container).toMatchSnapshot();
});
