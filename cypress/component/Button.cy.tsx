import { Button } from '@ui/buttons';

describe('Testing', () => {
  beforeEach(() => {
    cy.mount(<Button>Submit</Button>);
  });

  it('playground', () => {
    cy.get('button').should('contain.text', 'Submit');
  });
});
