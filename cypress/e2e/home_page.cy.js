const submitForm = () => {
  cy.visit('/')

  cy.get('input').type('Run')

  cy.get('form').submit()


}

const submitAndRemove = () => {
  submitForm()

  cy.get('ul li:first').click()

  cy.get('[id="secondList"] li').contains("Run")
}

describe('test specs', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })

  it('adds an input', () => {
    submitForm()

    cy.contains('Run')
  })

  it('removes an item ', () => {
    submitAndRemove()

  })

  it('successfully loads tasks page', () => {
    submitAndRemove()

    cy.get('[id="tasks"]').click()
  })

  it('successfully carries tasks over to tasks page', () => {
    submitAndRemove()

    cy.get('[id="tasks"]').click()

    cy.get('[id="secondList"] li').contains('Run')
  })

  it('clears tasks', () => {
    submitAndRemove()

    cy.get('input').type('Learn React')

    cy.get('form').submit()

    cy.get('[id="clear"]').click()

    cy.contains("Let's add something!" && "Nothing to see here...")
  })
})