import React from "react";
import MessengerContainerComponent from "./MessengerContainer";

describe("<MessengerContainerComponent />", () => {
    it("renders", () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<MessengerContainerComponent />);
    });
});
