import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Moodle', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Moodle/i);
  expect(linkElement).toBeInTheDocument();
});

test('WordPress', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/WordPress/i);
  expect(linkElement).toBeInTheDocument();
});