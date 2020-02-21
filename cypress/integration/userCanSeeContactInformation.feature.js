describe('User can see contact information', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.get('#contact-tab').click()
    });

    it('displays image on the page', () => {
        cy.get(('.image').should('exist'))
    });

    it('displays slideshow', () => {
        cy.get()
    })
})