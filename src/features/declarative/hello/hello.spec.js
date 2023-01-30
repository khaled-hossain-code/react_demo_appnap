import { render, screen } from '@testing-library/react';
import Hello from './Hello';

test('renders hello world', () => {
  render(<Hello />);
  const welcomeElement = screen.getByText(/Hello/i);
  expect(welcomeElement).toBeInTheDocument();
});
