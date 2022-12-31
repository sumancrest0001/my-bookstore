import React from 'react';
import {render, screen, fireEvent, getByText} from '@testing-library/react';
import CrudButton from './CrudButtons';

describe('CrudButton', () => {
    let selectedBook; let history;
    const mockHistoryPush = jest.fn();

    beforeEach(() => {
         selectedBook = {
            id: '123'
         }
         history = {
            push: mockHistoryPush
         }
    })
    it('should render both edit and remove buttons', () => {
       render(<CrudButton selectedBook={selectedBook} history={history}/>)
       const editButton = screen.getByRole('button', {
        name: 'Edit'
       });
       const removeButton = screen.getByRole('button', {
        name: 'Remove'
       });
       const buttons = screen.getAllByRole('button'); 

       expect(editButton).toBeInTheDocument();
       expect(removeButton).toBeInTheDocument();
       expect(buttons.length).toBe(2);
    });

     it('Redirects to correct URL on edit button click', () => {
        const {getByText} = render(
            <CrudButton selectedBook={selectedBook}  history={history}/>
        );
    
        const editButton = getByText('Edit');
        fireEvent.click(editButton);
        expect(mockHistoryPush).toHaveBeenCalledWith('/auth/book/edit/123');
    });
})