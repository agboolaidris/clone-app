export const tabs = [
  {
    name: 'Tower',
    slug: 'tower',
  },
  { name: 'Room', slug: 'room' },
  {
    name: 'Iconic cities',
    slug: 'iconic-cities',
  },
  {
    name: 'Cycladic homes',
    slug: 'cycladic-homes',
  },
  {
    name: 'Amazing pools',
    slug: 'amazing-pools',
  },
  {
    name: 'Trending',
    slug: 'trending',
  },
  {
    name: 'Amazing views',
    slug: 'amazing-views',
  },
  {
    name: 'Boats',
    slug: 'boats',
  },
  {
    name: 'Chef kitchens',
    slug: 'Chef-kitchens',
  },
  { name: 'Arctic', slug: 'arctic' },
  {
    name: 'Countryside',
    slug: 'countryside',
  },
  {
    name: 'National parks',
    slug: 'national-parks',
  },
];

const href = '/';

describe('FilterTabs E2E Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.viewport(1200, 800);
  });

  it('renders the component and interacts with tabs', () => {
    cy.get('[data-test="filter-tabs"]').should('exist');

    // Verify the number of tabs rendered
    cy.get('[data-test="tab"]').should('have.length', tabs.length);

    // Click on each tab and verify the active and inactive styles
    tabs.forEach((tab, index) => {
      const tabElement = cy.get(`[data-test="tab"]:nth-child(${index + 1})`);

      // Verify the tab name
      tabElement.find('[data-test="tab-link"]').should('contain', tab.name);

      // Verify the initial inactive style
      tabElement
        .should('have.class', 'border-transparent')
        .should('have.class', 'text-gray-500')
        .should('have.class', 'hover:border-gray-300')
        .should('have.class', 'hover:text-gray-700');

      // Click on the tab
      tabElement.click();

      // Verify the active style
      tabElement
        .should('have.class', 'border-gray-800')
        .should('have.class', 'text-gray-800');

      // Verify the inactive styles of other tabs
      tabs.forEach((otherTab, otherIndex) => {
        if (index !== otherIndex) {
          cy.get(`[data-test="tab"]:nth-child(${otherIndex + 1})`)
            .find('[data-test="tab-link"]')
            .should('have.class', 'border-transparent')
            .should('have.class', 'text-gray-500')
            .should('have.class', 'hover:border-gray-300')
            .should('have.class', 'hover:text-gray-700');
        }
      });
    });

    // // Verify the rendered href value of each tab
    tabs.forEach((tab, index) => {
      const hrefValue = href + `?tab=${tab.slug}`;
      cy.get(`[data-test="tab"]:nth-child(${index + 1})`)
        .find('[data-test="tab-link"]')
        .should('have.attr', 'href', hrefValue);
    });

    // Verify the existence of left and right buttons
    cy.get('[data-test="button-prev"]').should('exist');
    cy.get('[data-test="button-next"]').should('exist');
  });
});
