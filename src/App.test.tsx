import { render, screen } from '@testing-library/react';
import App from './App';

test.skip('renders Hello Word! text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello Word!/i);
  expect(linkElement).toBeInTheDocument();
});
