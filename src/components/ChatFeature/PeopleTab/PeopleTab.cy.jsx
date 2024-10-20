import React from "react";
import PeopleTab from "./PeopleTab";

describe("<PeopleTab />", () => {
    it("renders", () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<PeopleTab />);
    });
});
