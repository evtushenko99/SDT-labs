describe('test', function() {
    it('test', function() {
      cy.visit('http://localhost:9000')
  
      cy.get('#number').clear().type(2)
      cy.get('#power').clear().type(3)
      cy.get('#result').should('have.text', '8')
    })

    it('error', function() {
      cy.visit('http://localhost:9000')
      cy.get('#number').clear().type(2)
      cy.get('#power').clear().type('-')
      cy.get('#result').should('have.text', 'Степень введена с ошибкой')
    })

    it('nan', function() {
      cy.visit('http://localhost:9000')
      cy.get('#number').clear().type(123)
      cy.get('#power').clear().type(1234567)
      cy.get('#result').should('have.text', 'Infinity')
    })
  })