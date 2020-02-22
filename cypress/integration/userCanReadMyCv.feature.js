describe('User can read my CV', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.get('#cv-tab').click()
    });

    it('Header is visible', () => {
        cy.get('#cv-header').should('contain', 'My CV')
    });

    it('displays personal skills', () => {
        cy.get('.column-header').should('contain', 'Personal Skills')
        cy.get('li').should('contain', 'Great team player')
    })

    it('displays competence', () => {
        cy.get('.column-header').should('contain', 'Competence')
        cy.get('li').should('contain', 'HTML')
    })

    it('displays title of first experience in the cv', () => {
        cy.get('.vertical-timeline-element-title').should('contain', 'Student at Craft Academy')
    });

    it('displays location of the second experience', () => {
        cy.get('.vertical-timeline-element-subtitle').should('contain', 'Västerås, Sweden')
    });

    it('displays the description of the third experience', () => {
        cy.get('.experience-description').should('contain', 'Working as a bartender and barmanager full time at one of Västerås most popular restaurants')
    });
});