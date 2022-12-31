import React from 'react';
import CustomButton from './CustomButton';
import {render, screen} from '@testing-library/react';

describe('CustomButton', () => {
   it('should render properly' , () => {
     const {debug} =  render(<CustomButton />);
      const button = screen.getByRole('button');

      expect(button).toBeInTheDocument();
   });

     it('should add proper className and button name based on props' , () => {
     const {debug} =  render(<CustomButton isGoogleSignIn={true}>Sign in</CustomButton>);
      const button = screen.getByRole('button', {
        name: 'Sign in'
      });

      expect(button).toBeInTheDocument();
      expect(button).toHaveClass("GoogleSignIn");
      expect(button.classList).toContain('CustomButton');
      expect(button.classList.contains('CustomButton')).toBe(true);
   })
})
