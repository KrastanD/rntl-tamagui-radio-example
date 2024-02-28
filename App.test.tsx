import {
  fireEvent,
  render,
  screen,
  userEvent,
} from "@testing-library/react-native";
import App from "./App";

jest.useFakeTimers();
describe("App", () => {
  it("renders buttons", () => {
    render(<App />);
    expect(screen.getByText("First value")).toBeVisible();
  });

  it("uses userEvent", async () => {
    render(<App />);
    const user = userEvent.setup();
    await user.press(screen.getAllByRole("radio")[0]);
    await user.press(screen.getByText("First value"));
    await user.press(screen.getAllByTestId("radio-group-item")[0]);
    expect(screen.getAllByRole("radio")[0]).toBeChecked();
  });

  it("uses fireEvent", async () => {
    render(<App />);
    fireEvent.press(screen.getByText("First value"));
    expect(screen.getAllByRole("radio")[0]).toBeChecked();
  });
});
