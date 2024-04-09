// import necessary react testing library helpers here
// import the Counter component here
import { render, screen } from '@testing-library/react';
import Counter from '../components/Counter'; 
import { fireEvent } from '@testing-library/react'; //to simulate the +/- buttons


beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterScreen = screen.getByText(/counter/i); //look for something called counter
  expect(counterScreen).toBeInTheDocument(); //assert to see its actually there on screen
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const counterVal = screen.getByTestId('count'); // Correctly select the element by its test ID
  expect(counterVal).toHaveTextContent('0'); // Assert that the element's content is '0'

});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const plusButton = screen.getByText('+'); //look for button with the +
  fireEvent.click(plusButton); //simulate the click of the + button
  const counterVal = screen.getByTestId('count'); //get the value 
  expect(counterVal).toHaveTextContent('1'); //assert if it equals 1
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const plusButton = screen.getByText('-'); //look for button with the -
  fireEvent.click(plusButton); //simulate the click of the - button
  const counterVal = screen.getByTestId('count'); //get the value
  expect(counterVal).toHaveTextContent('-1'); //asert if it equals 0 
});
