/// <reference types="cypress" />

declare namespace Cypress {
  /* eslint-disable-next-line*/
  interface Chainable {

    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.dataCy('greeting')
    */
    dataCy(value: string): Chainable<Element>;
    stubUserSession(): void;

  }
}