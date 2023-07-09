import { Button } from '@ui/buttons';

describe('Button component', () => {
  it('renders with default props', () => {
    cy.mount(<Button>Hello</Button>);

    cy.get('button')
      .should('have.class', 'rounded-md')
      .and('have.class', 'text-center')
      .and('have.class', 'font-medium')
      .and('have.class', 'px-8')
      .and('have.class', 'py-3')
      .and('have.class', 'bg-gray-800')
      .and('have.class', 'hover:bg-gray-700')
      .and('have.class', 'text-white');
  });

  it('renders with custom props', () => {
    cy.mount(
      <Button rounded size="sm" variants="secondary">
        Click me
      </Button>
    );

    cy.get('button')
      .should('have.class', '!rounded-full')
      .and('have.class', 'text-center')
      .and('have.class', 'font-medium')
      .and('have.class', 'py-2')
      .and('have.class', 'px-4')
      .and('have.class', 'text-sm')
      .and('have.class', 'text-gray-900')
      .and('have.class', 'hover:bg-gray-100')
      .should('have.text', 'Click me');
  });
});
