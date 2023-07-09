import React from 'react';
import { HomeCard } from '@ui/home-card';

describe('HomeCard Component', () => {
  const props = {
    addToFavorite: () => {
      props.isFavorite = true;
    },
    cost: '$100',
    date: '2023-07-09',
    host: 'John Doe',
    href: 'https://example.com',
    id: '123',
    images: [
      {
        imageAlt: "Front of men's Basic Tee in black.",
        imageSrc:
          'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1730&q=80',
      },
      {
        imageAlt: "Front of men's Basic Tee in black.",
        imageSrc:
          'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      },
      {
        imageAlt: "Front of men's Basic Tee in black.",
        imageSrc:
          'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      },
    ],
    isFavorite: false,
    name: 'Example Home',
    rating: '4.5',
  };

  beforeEach(() => {
    cy.mount(<HomeCard {...props} />);
  });

  it('renders the component', () => {
    cy.get('[data-test="home-card"]').should('exist');
  });

  it('contains the correct data', () => {
    cy.get('[data-test="home-card-name-link"]').should('contain', props.name);
    cy.get('[data-test="home-card-host"]').should('contain', props.host);
    cy.get('[data-test="home-card-date"]').should('contain', props.date);
    cy.get('[data-test="home-card-cost"]').should('contain', props.cost);
  });
});
