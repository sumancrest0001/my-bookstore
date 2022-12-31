import React from 'react';
import {render, screen} from '@testing-library/react';
import CartButton from './CartButton';


describe('CartButton', () => {
    it('should render correctly', () => {
       render(<CartButton />)
       const buttonElement = screen.getByRole('button'); 
       expect(buttonElement).toBeInTheDocument();
       expect(buttonElement).toHaveTextContent('Add to cart');
    })
})