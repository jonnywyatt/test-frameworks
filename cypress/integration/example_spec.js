describe('My account tests', function () {
  it('should update position label when edited', function () {
    cy.visit('https://www.ft.com');
		cy.setCookie("FTSession", Cypress.env('FTSESSION'),
			{ domain: ".ft.com", path: '/' });
		cy.visit('https://myaccount.ft.com');
		cy.get('#password').type('password');
    cy.get('#authentication-submit').click();
    cy.get('#viewUserDetails-Button').should('be.visible').click();
    cy.get('#position').select('PO');
    cy.get('#btn-saveUserDetails').click();
		cy.get('#position-section').should('contain', 'Politician/Government Minister')
  });
});
