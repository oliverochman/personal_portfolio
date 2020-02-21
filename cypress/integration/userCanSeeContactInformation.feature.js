describe('User can see contact information', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.get('#contact-tab').click()
    });

    it('displays image on the page', () => {
        cy.get(('#contact-pic')).should('exist')
    });

    it('displays slideshow', () => {
        cy.get('.each-slide').should('contain', 'thalen.emma@gmail.com')
    })

    it('displays second slide', () => {
        cy.get('.each-slide').wait(5000)
        cy.get('.each-slide').should('contain', '+46(0)76-105 8101')
    })

    it('displays third slide', () => {
        cy.get('.each-slide').wait(5000)
        cy.get('.each-slide').should('contain', '@emthalen')
    })

    it('displays forth slide', () => {
        cy.get('.each-slide').wait(5000)
        cy.get('.each-slide').should('contain', 'Emma-Maria Thalen')
    })
})