import { render, screen, fireEvent } from '@testing-library/react';
import Promotion from './Promotion';

test('renders name, title & button elements', () => {
  render(<Promotion />);
  const nameElement = screen.getByText(/name/i);
  const titleElement = screen.getByText(/designation/i);
  const promotionBtn = screen.getByText(/promotion/i);

  expect(nameElement).toBeInTheDocument();
  expect(titleElement).toBeInTheDocument();
  expect(promotionBtn).toBeInTheDocument();
});

test('click on promotion, promote to architect', () => {
  render(<Promotion />);
  const promotionBtn = screen.getByText(/promotion/i);

  fireEvent.click(promotionBtn)

  const promotedTo = screen.getByText(/architect/i);
  expect(promotedTo).toBeInTheDocument();
});
