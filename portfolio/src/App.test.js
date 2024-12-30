import { render, screen } from '@testing-library/react';
import App from './App';

test('renders About link', () => {
  render(<App />);
  const linkElement = screen.getByText(/about/i); // Change "learn react" to "about"
  expect(linkElement).toBeInTheDocument();
});
