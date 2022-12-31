import React from 'react';
import {render, screen} from '@testing-library/react';
import CartItem from './CartItem';


describe('CartItem', () => {
    let item;
    beforeEach(() => {
         item = {
            tittle: 'cart item',
            quantity: 2,
            price: 30,
            url: 'google.com'
        };
    })
    it('should render correctly', () => {
       render(<CartItem item={item}/>)
       const cartItemTitle = screen.getByAltText('cart item'); 
       expect(cartItemTitle).toBeInTheDocument();
    })
    it('should render quantity and price', () => {
       render(<CartItem item={item}/>)
       const quantity = screen.getByText(/2/);
       const price = screen.getByText(/30/); 

       expect(quantity).toBeInTheDocument();
       expect(price).toBeInTheDocument();
    })
})