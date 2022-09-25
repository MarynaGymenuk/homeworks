/// <reference types="cypress"/>

const testWithParams = ({value, expectedValue}) =>
function(){
    cy.get('#inputFirstName').clear().type(value[0]);
    cy.get('#inputFirstName').should('contain.value', expectedValue[0]);

    cy.get('#inputLastName').clear().type(value[1]);
    cy.get('#inputLastName').should('contain.value', expectedValue[1]);

    cy.get('#inputEmail').clear().type(value[2]);
    cy.get('#inputEmail').should('contain.value', expectedValue[2]);

    cy.get('#inputWebsite').clear().type(value[3]);
    cy.get('#inputWebsite').should('contain.value', expectedValue[3]);
}

let marina = ['Marina', 'Humeniuk', 'gymenuk93@gmail.com', 'https://www.youtube.com/'];
let iryna = ['Iryna', 'Khmurova', 'khmur@gmail.com', 'https://www.google.com.ua/'];
let liza = ['Liza', 'Khmurova', 'lizakhmur93@gmail.com', 'https://www.facebook.com/'];

before(() => {
    cy.visit("https://sanitarskyi-ngx-admin.herokuapp.com/");

    cy.get('[alt="Dark Theme"]').click();
    cy.get('[title="Forms"]').click();
    cy.get('[title="Form Layouts"]').click();
});

it('Filling Block Form 1', testWithParams({value: marina, expectedValue: marina}));

it('Filling Block Form 2', testWithParams({value: iryna, expectedValue: iryna}));

it('Filling Block Form 3', testWithParams({value: liza, expectedValue: liza}));
