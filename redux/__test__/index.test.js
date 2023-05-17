import { render, screen } from '@testing-library/react';
import Contact from '../../pages/contact.js';
import Features from '../../pages/features.js';
import Home from '../../pages/index.js';
import About from '../../pages/about.js'
import Getstarted from '../../pages/getstarted.js'
import Blog from '../../pages/blog.js'

describe('Home', () => {
  test('renders correctly', () => {
    render(<Contact />);
    render(<Features />);
    render(<Home/>);
    render(<About />);
    render(<Getstarted/>);
    render(<Blog/>)
    // Check if the title element is present
    const titleElement = screen.getByText('Proxima');
    expect(titleElement).toBeInTheDocument();
  });

  // Add more test cases for specific functionality or scenarios
});


describe('Getstarted', () => {
  test('renders name and email fields', () => {
    render(<Getstarted />);
    
    // Check if the name input field is present
    const nameInput = screen.getByLabelText('Name:');
    expect(nameInput).toBeInTheDocument();

    // Check if the email input field is present
    const emailInput = screen.getByLabelText('Email:');
    expect(emailInput).toBeInTheDocument();
  });

  test('allows input in name and email fields', () => {
    render(<Getstarted />);
    
    // Simulate user input in the name field
    const nameInput = screen.getByLabelText('Name:');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput.value).toBe('John Doe');

    // Simulate user input in the email field
    const emailInput = screen.getByLabelText('Email:');
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    expect(emailInput.value).toBe('john@example.com');
  });
});
