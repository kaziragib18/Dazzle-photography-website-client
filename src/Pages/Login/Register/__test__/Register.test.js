import React from 'react';
import { render, screen } from '@testing-library/react';
import { ReactDOM } from 'react-dom';
import Register from '../Register';


test('renders learn react link', () => {
  render(<Register />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
