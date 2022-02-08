import { render, screen } from '@testing-library/react';
import App from './App';

test('check presence of some text', () => {
  render(<App />);
  const hasSomeUserName = screen.getByText(/He Chaitanya/i);
  expect(hasSomeUserName).toBeInTheDocument();
});

test('check presence of some other text', () => {
  render(<App />);
  const hasSomeUserName = screen.getByText(/102 Laxmi nagar/i);
  expect(hasSomeUserName).toBeInTheDocument();
});


