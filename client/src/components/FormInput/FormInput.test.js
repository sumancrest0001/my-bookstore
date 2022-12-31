import React from 'react';
import FormInput from './FormInput';
import {screen, render, fireEvent} from '@testing-library/react';


describe('FormInput', () => {
     const mockedFunc = jest.fn();
    it('should render the input field properly', () => {
       render(<FormInput name={'email'} placeholder={'email field'} onChange={mockedFunc} label={'Email'} type="email" value="sum"/>)
       const inputField = screen.getByPlaceholderText('email field');
       const label = screen.getByText('Email');
       fireEvent.change(inputField, { target: { value: 'test' } });
       expect(mockedFunc).toBeCalled();
       expect(mockedFunc).toHaveBeenCalledTimes(1);
       expect(label).toBeInTheDocument();
    });

    it('should not render label when no label is provided as props', () => {
        render(<FormInput name={'email'} placeholder={'email field'} onChange={mockedFunc} type="email"/>)
        const label = screen.queryByText('Email');
        expect(label).not.toBeInTheDocument();
    });

    it('should not have shrink class when there is no value', () => {
        render(<FormInput value="" label="Email" placeholder={'email field'} onChange={mockedFunc} type="email"/>)
        const label = screen.getByText('Email');
       expect(label.classList.contains('Shrink')).toBeFalsy();
    });
})