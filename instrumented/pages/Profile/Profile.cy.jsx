import React from "react";
import ProfileComponent from "./Profile";
import { customMount } from "../../../cypress/support/mount";

describe("<ProfileComponent />", () => {
    it("renders", () => {
        customMount(<ProfileComponent />);
    });

    it("Toggle theme", () => {
        customMount(<ProfileComponent />);

        cy.window().then((win) => {
            win.localStorage.setItem("theme", "darkTheme");
        });

        // Ensure the default theme is light
        cy.window().then((win) => {
            const theme = win.localStorage.getItem("theme");
            expect(theme).to.equal("darkTheme"); // Assuming lightTheme is the default
        });

        cy.get(".toggle-theme-btn").click();

        // Ensure the theme has changed
        cy.window().then((win) => {
            const theme = win.localStorage.getItem("theme");
            expect(theme).to.equal("lightTheme");
        });

        cy.get(".toggle-theme-btn").click();

        cy.window().then((win) => {
            const theme = win.localStorage.getItem("theme");
            expect(theme).to.equal("darkTheme");
        });
    });
});
