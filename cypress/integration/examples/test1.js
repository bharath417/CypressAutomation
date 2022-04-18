/// <reference types="cypress" />
describe('My First Test', () =>{
    it('Does not do much!', () =>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //test comment
        //cy.get('.product-action > button').click()
        //expect(true).to.equal(true)
        cy.get('.product').should('have.length',5)
        cy.get('.product:visible').should('have.length',4)
        //parent child css selctor path to get the visible product
        cy.get('.products').find('.product').should('have.length',4)
        cy.get('.products').find('.product').find('.product-name').contains('Carrot').click()
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($el, index, $list)=> {
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews'))
            {
                cy.wrap(($el)).find('button').click()
            }
        })
    })
})