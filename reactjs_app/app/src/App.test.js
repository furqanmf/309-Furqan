import { render, screen } from '@testing-library/react';
import App from './App';

test('check presence of some text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hey Zack/i);
  expect(linkElement).toBeInTheDocument();
});

test('check the presence of some text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Secbad/i);
  expect(linkElement).toBeInTheDocument();
});