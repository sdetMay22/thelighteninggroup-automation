/// <reference types="cypress" />

import objectRepo from '../support/object-repository.json';

describe('Founder and Lightning - Contact Us Form', () => {

  beforeEach(() => {
    cy.visit('/');   
	cy.get(objectRepo.contactPage.getInTouch).first().click();
  });

  it('Should load the contact form correctly', () => {
	cy.getIframeBody('#hs-form-iframe-0').within(() => {
		cy.get(objectRepo.contactPage.fullName).should('exist');
		cy.get(objectRepo.contactPage.lastName).should('exist');
		cy.get(objectRepo.contactPage.email).should('exist');
		cy.get(objectRepo.contactPage.phone).should('exist');
		cy.get(objectRepo.contactPage.message).should('exist');
		cy.get(objectRepo.contactPage.submitBtn).should('exist');
	});
  });

  it('Should show validation errors for empty submission', () => {
	cy.getIframeBody('#hs-form-iframe-0').within(() => {
		cy.get(objectRepo.contactPage.submitBtn).click();
		cy.get(objectRepo.contactPage.errorFullName).should('exist');
		cy.get(objectRepo.contactPage.errorEmptyEmail).should('exist');
		cy.get(objectRepo.contactPage.errorMessage).should('exist');
	});
    
  });

  it('Should show error for invalid email format', () => {
	cy.getIframeBody('#hs-form-iframe-0').within(() => {
		cy.get(objectRepo.contactPage.email).type('invalidemail');
		cy.get(objectRepo.contactPage.submitBtn).click();
		cy.get(objectRepo.contactPage.errorEmail).should('exist');
	});
    
  });

  it('Should allow form submission with valid data', () => {
		//cy.intercept('POST', '**/submissions/v3/public/submit/formsnext/multipart/**', {
		//	statusCode: 200,
		//	body: {
		//	inlineMessage: "Thanks for submitting!"
		//	}
		//}).as('formSubmit');
	  
		cy.getIframeBody('#hs-form-iframe-0').within(() => {
			cy.get(objectRepo.contactPage.fullName).type('John');
			cy.get(objectRepo.contactPage.lastName).type('Doe');
			cy.get(objectRepo.contactPage.email).type('john@gmail.com');
			cy.get(objectRepo.contactPage.phone).type('9999999999');
			cy.get(objectRepo.contactPage.message).type('This is a test message.');
			cy.get(objectRepo.contactPage.submitBtn).click();
		});
		
		// cy.wait('@formSubmit', { timeout: 5000 });



		cy.getIframeBody('#hs-form-iframe-0')
		  .contains('Failed to validate Captcha. Please try again.') 
		  .should('exist');
	
	
	});

});
