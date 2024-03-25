describe('RPS Log Test', () => {
  it('Gets, types, selects and asserts', () => {
    const name = 'Paul'

    cy.visit('http://127.0.0.1:5500/index.html')

    cy.get('#username').type(name)

    cy.get('#start-game-button').click()

    cy.get('#user-selection').select('paper')

    cy.get('#go-button').click()

    // I have no idea what you mean by "contains the right number of tries :)"
    cy.get('#game-history').contains(name)
  })
})