describe('User can read my CV', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.get('#cv-tab').click()
    });

    it('Header is visible', () => {
        cy.get('#cv-header').should('contain', 'This is my CV')
    });
})