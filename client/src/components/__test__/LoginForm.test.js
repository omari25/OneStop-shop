import Login from '../Login';
import userEvent from '@testing-library/user-event'
import {render, screen} from "@testing-library/react"

it ('should have an email and a password field, also a submit button', () => {
  render(<Login/>)

  const emailField = screen.getByLabelText(/email/i);
  const passwordField = screen.getByLabelText(/password/i);
  const submitButton = screen.getByText(/submit/i);

  expect(emailField).toBeInTheDocument();
  expect(passwordField).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
})

it ('should allow the user to submit their credentials', () => {
  const submit = jest.fn();
  render(<Login submit={submit}/>)

  const emailField = screen.getByLabelText(/email/i);
  const passwordField = screen.getByLabelText(/password/i);
  const submitButton = screen.getByText(/submit/i);

  userEvent.type(emailField, "inno");
  userEvent.type(passwordField, "password");
  userEvent.click(submitButton);

  expect(submit).toHaveBeenCalledWith({
    username: "inno",
    password: "password"
  })

})