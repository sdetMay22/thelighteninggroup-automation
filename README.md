# Cypress E2E Testing Project

This project contains end-to-end tests using Cypress.

## Project Structure

cypress/
│
├── integration/                - Contains all test files (specs)
│
├── support/
│   ├── commands.js             - Custom Cypress commands
│   ├── e2e.js                  - Global test configuration and exception handling
│   └── boject-repository.js   - Page objects or reusable selectors
│
├── fixtures/                   - Test data (currently empty)
├── downloads/                  - For files downloaded during tests (currently empty)

cypress.config.json             - Cypress configuration (e.g., baseUrl)
package.json                    - Project dependencies and scripts


## How to Run Tests

1. Install dependencies:
-- npm install
2. Run tests in headless mode:
-- npx cypress run
3. Run tests in headless mode:
-- npx cypress run --headed
4. Run tests in interactive mode (Cypress GUI):
-- npx cypress open


## File and Code Conventions

- Use kebab-case for filenames (e.g., `login-page.cy.js`)
- Use `.cy.js` as the extension for test spec files
- Use camelCase for variable and function names
- Use UPPER_SNAKE_CASE for constants
- Use `data-cy` or `data-testid` attributes in HTML for stable element selectors

## Notes

- Global exception handling is set up in `support/e2e.js` to prevent failures on known third-party script errors.
- You can define reusable selectors or element locators in `object-repository.js`.
- `commands.js` is used to extend Cypress with custom commands used across tests.

## Contribution

To contribute, please open an issue or submit a pull request.