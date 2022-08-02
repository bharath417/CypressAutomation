/// <reference types ="cypress"/>
describe ('My First Test suite', function(){

    it('First test case', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('abcd')
        
    }
    )

}
)