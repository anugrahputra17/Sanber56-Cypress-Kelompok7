describe('Choose Product And Update Cart', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html?product_list_mode=list')
    })

    //1. Positive - Success Add Products and Update Cart
    it('Success Choose Products', () => {
        cy.get('.swatch-opt-1396 > .size > .swatch-attribute-options > #option-label-size-143-item-168').should('be.visible').click({ force: true })
        cy.get('.swatch-opt-1396 > .swatch-attribute.color > .swatch-attribute-options > #option-label-color-93-item-49').should('be.visible').click()
        cy.get(':nth-child(1) > .product-item-info > .details > .product-item-inner > .actions > .actions-primary > form > .action').should('be.visible').click()
        cy.get('.message-success > div').should('contain.text', 'You added Olivia 1/4 Zip Light Jacket to your shopping cart.')
        cy.get('.showcart').click()
    })

    //2. Negative - Size empty
    it('Failed to Add Products - Empty Size Jacket', () => {
        cy.get('.swatch-opt-1396 > .swatch-attribute.color > .swatch-attribute-options > #option-label-color-93-item-49').should('be.visible').click()
        cy.get(':nth-child(1) > .product-item-info > .details > .product-item-inner > .actions > .actions-primary > form > .action').should('be.visible').click()
        cy.get('.message-error > div').should('contain.text', 'You need to choose options for your item.')
        cy.get('.showcart').click()
        })

    //3. Negative - Color empty
    it('Failed to Add Products - Empty Color Jacket', () => {
        cy.get('.swatch-opt-1396 > .size > .swatch-attribute-options > #option-label-size-143-item-168').should('be.visible').click({ force: true })
        cy.get(':nth-child(1) > .product-item-info > .details > .product-item-inner > .actions > .actions-primary > form > .action').should('be.visible').click()
        cy.get('.message-success > div').should('contain.text', 'You need to choose options for your item.')
        cy.get('.showcart').click()
    })

    //4. Negative - All field requirement is empty
    it('Failed to Add Products - All Require Empty', () => {
        cy.get(':nth-child(1) > .product-item-info > .details > .product-item-inner > .actions > .actions-primary > form > .action').should('be.visible').click()
        cy.get('.message-success > div').should('contain.text', 'You need to choose options for your item.')
        cy.get('.showcart').click()
    })
})