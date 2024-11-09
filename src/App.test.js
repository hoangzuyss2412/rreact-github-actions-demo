import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/React CI\/CD Demo/i);
  expect(titleElement).toBeInTheDocument();
});


test('renders deployment message', () => {
  render(<App />);
  const messageElement = screen.getByText(/This app was deployed using GitHub Actions!/i);
  expect(messageElement).toBeInTheDocument();
});

test('renders the main header', () => {
  render(<App />);
  const headerElement = screen.getByRole('heading', { level: 1 });
  expect(headerElement).toHaveTextContent("React CI/CD Demo");
});