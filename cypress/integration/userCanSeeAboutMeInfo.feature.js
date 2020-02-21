describe('User can see information about me', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
        cy.get('#about-tab').click();
    });

    it('displays the header', () => {
        cy.get('#about-header').should('contain', "About Me")
    })

    it('displays picture', () => {
        cy.get(('.image')).should('exist')
    })

    it('displays information in popup', () => {
        cy.get('#popups').trigger('mouseover')
        cy.get('#popups').should('be.visible')
    })
})