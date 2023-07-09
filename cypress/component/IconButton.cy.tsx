import { HiHeart } from 'react-icons/hi2';
import { IconButton, IconButtonProps } from '@ui/icon-button';

describe('IconButton Component', () => {
  const defaultProps: IconButtonProps = {
    className: 'custom-class',
    onClick: () => {},
    rounded: true,
    size: 'sm',
    variants: 'primary',
  };

  beforeEach(() => {
    cy.mount(
      <IconButton {...defaultProps}>
        <HiHeart />
      </IconButton>
    );
  });

  it('renders the component', () => {
    cy.get('button').should('exist');
  });

  it('applies the default styles and classes', () => {
    cy.get('button')
      .should('have.class', 'inline-block')
      .should('have.class', 'border')
      .should('have.class', 'border-transparent')
      .should('have.class', 'text-center')
      .should('have.class', 'font-medium')
      .should('have.class', 'transition-all')
      .should('have.class', 'duration-100')
      .should('have.class', 'rounded-full')
      .should('have.class', 'p-1')
      .should('have.class', 'text-gray-700')
      .should('have.class', 'bg-gray-100');
  });

  it('applies additional styles and classes when provided', () => {
    cy.get('button')
      .should('have.class', 'custom-class')
      .should('have.class', 'hover:opacity-70');
  });

  it('invokes onClick callback when clicked', () => {
    const onClickStub = cy.stub().as('onClickStub');
    cy.mount(
      <IconButton {...defaultProps} onClick={onClickStub}>
        <HiHeart />
      </IconButton>
    );

    cy.get('button').click();
    cy.get('@onClickStub').should('have.been.calledOnce');
  });
});
