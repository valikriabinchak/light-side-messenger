import React from "react";
import OneMoreStepComponent from "./OneMoreStep";
import { customMount } from "../../../cypress/support/mount";

describe("OneMoreStepComponent", () => {
    beforeEach(() => {
        customMount(<OneMoreStepComponent />);
    });

    it("should display the title and email prompt", () => {
        // Check if the title is present
        cy.get(".title").should("contain", "One more step ...");

        // Check if the email prompt is displayed
        cy.get("label").should(
            "contain",
            "Enter your user account's verified email address and we will send you a password reset link.",
        );
    });

    it("should navigate to the sign-in page when the button is clicked", () => {
        // Click the button to go back to the sign-in page
        cy.get("button.back-btn").click();
    });
});
