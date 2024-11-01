import React from "react";
import ProfileComponent from "./Profile";
import { customMount } from "../../../cypress/support/mount";
import { ThemeContext } from "../../ThemeContext";

describe("<ProfileComponent />", () => {
    const defaultContext = {
        theme: "lightTheme",
        toggleTheme: () => {}, // Stub function to replace in tests
    };

    beforeEach(() => {
        // Замінюємо toggleTheme на stub для перевірки викликів
        cy.stub(defaultContext, "toggleTheme").as("toggleTheme");

        // Монтуємо компонент з контекстом
        customMount(
            <ThemeContext.Provider value={defaultContext}>
                <ProfileComponent />
            </ThemeContext.Provider>,
        );
    });

    it("renders main elements", () => {
        cy.get(".grid-container").should("exist");
        cy.contains("First name").should("be.visible");
        cy.contains("Email address").should("be.visible");
        cy.contains("Theme").should("be.visible");
    });

    it("switches to edit mode and back to view mode", () => {
        cy.contains("Edit").click(); // Переходимо в режим редагування
        cy.get("input[name='firstName']").should("not.have.attr", "readonly"); // Перевірка поля введення

        cy.contains("Cancel").click(); // Повертаємося до режиму перегляду
        cy.get("input[name='firstName']").should("have.attr", "readonly");
    });

    it("toggles the theme when checkbox is clicked in edit mode", () => {
        cy.contains("Edit").click();
        cy.get(".toggle-theme-btn")
            .click()
            .then(() => {
                expect(localStorage.getItem("theme")).to.equal("darkTheme"); // Перевірка збереженої теми
            });

        cy.get("@toggleTheme").should("have.been.calledOnce"); // Перевірка виклику toggleTheme
    });

    it("changes and displays updated profile data in edit mode", () => {
        cy.contains("Edit").click();
        cy.get("input[name='firstName']").clear().type("Jane");
        cy.get("input[name='lastName']").clear().type("Smith");

        cy.get("input[name='firstName']").should("have.value", "Jane"); // Перевірка значення поля
        cy.get("input[name='lastName']").should("have.value", "Smith");
    });

    it("opens and closes the photo dialog", () => {
        cy.contains("Edit").click();
        cy.contains("Change photo").click();
        cy.get(".dialog").should("be.visible");
        cy.contains("Close").click();
        cy.get(".dialog").should("not.exist");
    });
});
