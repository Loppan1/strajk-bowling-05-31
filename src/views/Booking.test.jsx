import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Booking from './Booking';
import { describe, it, expect, afterAll } from 'vitest';
import { server } from '../mocks/setup';

describe('Booking', () => {

  beforeAll(() => {
    server.listen()
  });

  afterEach(() => {
    server.resetHandlers()
  });

  afterAll(() => {
    server.close()
  });

  it('should allow the user to book a date, time, number of players, and lanes', async () => {
    render(<Booking />);

    // Bestäm when, what, who
    const dateInput = document.querySelector('input[name="when"]');
    fireEvent.change(dateInput, { target: { value: '2024-06-02' } });
    
    const timeInput = document.querySelector('input[name="time"]');
    fireEvent.change(timeInput, { target: { value: '18:15' } });
    
    const peopleInput = document.querySelector('input[name="people"]');
    fireEvent.change(peopleInput, { target: { value: 4 } });
    
    const lanesInput = document.querySelector('input[name="lanes"]');
    fireEvent.change(lanesInput, { target: { value: 1 } });

    expect(dateInput).toHaveValue('2024-06-02');
    expect(timeInput).toHaveValue('18:15');
    expect(peopleInput).toHaveValue( 4 );
    expect(lanesInput).toHaveValue( 1 );
  });

  it('should let the user choose shoe sizes on all the players', async () => {
    render(<Booking />);

    // Lägg till och bestäm skor
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('+'));

    let shoeInputs = document.getElementsByClassName("shoes__input");

    fireEvent.change(shoeInputs[0], { target: { value: 42 } });
    fireEvent.change(shoeInputs[1], { target: { value: 40 } });
    fireEvent.change(shoeInputs[2], { target: { value: 39 } });
    fireEvent.change(shoeInputs[3], { target: { value: 39 } });

    expect(shoeInputs[0]).toHaveValue( '42' );
    expect(shoeInputs[1]).toHaveValue( '40' );
    expect(shoeInputs[2]).toHaveValue( '39' );
    expect(shoeInputs[3]).toHaveValue( '39' );

  });

  it('should let the user remove a pair of shoes', async () => {
    render(<Booking />);

    fireEvent.click(screen.getByText('+'));

    const shoesFormBefore = document.querySelector('.shoes__form')

    expect(shoesFormBefore).toBeInTheDocument();

    fireEvent.click(screen.getByText('-'));

    const shoesFormAfter = document.querySelector('.shoes__form')

    expect(shoesFormAfter).not.toBeInTheDocument(); 

  })

  async function createPageInfo(){
    const dateInput = document.querySelector('input[name="when"]');
    fireEvent.change(dateInput, { target: { value: '2024-06-02' } });
    
    const timeInput = document.querySelector('input[name="time"]');
    fireEvent.change(timeInput, { target: { value: '18:15' } });
    
    const peopleInput = document.querySelector('input[name="people"]');
    fireEvent.change(peopleInput, { target: { value: 1 } });
    
    const lanesInput = document.querySelector('input[name="lanes"]');
    fireEvent.change(lanesInput, { target: { value: 1 } });

    fireEvent.click(screen.getByText('+'));
    const shoeInputs = document.getElementsByClassName("shoes__input");
    fireEvent.change(shoeInputs[0], { target: { value: 42 } });
  }

  it('should make a reservation when the user clicks a button', async() => {
    render(<Booking />);

    await createPageInfo();

    expect(screen.getByText('strIIIIIike!')).toBeInTheDocument();
    fireEvent.click(screen.getByText('strIIIIIike!'))

    await waitFor(() => {
      const confirmationPriceElement = document.querySelector('.confirmation__price');
      expect(confirmationPriceElement).toBeInTheDocument();
      expect(confirmationPriceElement.textContent).toBe(String("Total:" + ((1 * 120) + (1 * 100)) + " sek"));
    });

  });

  it('should take the user back to the front page when button is clicked', async() => {
    render(<Booking />);

    createPageInfo();
  
    expect(screen.getByText('strIIIIIike!')).toBeInTheDocument();
    fireEvent.click(screen.getByText('strIIIIIike!'));
    
    await waitFor(() => {
      expect(screen.getByText(/Sweet/i)).toBeInTheDocument();
    });
  
    fireEvent.click(screen.getByText(/Sweet/i));
  
    await waitFor(() => {
      expect(screen.getByText('strIIIIIike!')).toBeInTheDocument();
    });
    
  })
  
});
