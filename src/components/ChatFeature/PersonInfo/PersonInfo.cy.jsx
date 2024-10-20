import React from "react";
import PersonInfo from "./PersonInfo";

describe("<PersonInfo />", () => {
    it("renders", () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(
            <PersonInfo
                person={{
                    firstName: "Tom",
                    lastName: "Jackson",
                    email: "bob@example.com",
                    lastMessage: "Hello",
                }}
            />,
        );
    });
});
