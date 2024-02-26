import App from "./App";
import { render } from "@testing-library/react-native";

describe("App", () => {
  it("renders buttons", () => {
    render(<App />);
  });
});
