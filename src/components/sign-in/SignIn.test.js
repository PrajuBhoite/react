import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { SignIn } from "./SignIn";

describe("<SignIn> component", () => {
    // beforeAll, beforeEach, afterAll, afterEach
    it("should render auth-container", () => {
        render(
          <Provider store={store}>
            <SignIn />
          </Provider>
        );
        const authContainer = screen.getByTestId("authContainer");
        expect(authContainer).toBeInTheDocument();
    })

    it('should render `sign in` button', () => {
        render(
          <Provider store={store}>
            <SignIn />
          </Provider>
        );
        const signInBtn = screen.getByTestId('signInBtn');
        expect(signInBtn).toBeInTheDocument();
    });

    it('should invoke `handleUserLogin` method', () => {
        render(
          <Provider store={store}>
            <SignIn />
          </Provider>
        );
        const mockFn = jest.fn();
        const signInForm = screen.getByTestId("signInForm");
        expect(signInForm).toBeInTheDocument();
        signInForm.onsubmit = mockFn;
        signInForm.dispatchEvent(new Event('submit', {preventDefault: () => {}}));
        expect(mockFn).toBeCalled();
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});