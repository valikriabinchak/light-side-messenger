import React from "react";
import MessengerContainerComponent from "./MessengerContainer";
import { customMount } from "../../../cypress/support/mount";
import Chat from "../../components/ChatFeature/Chat/Chat";
import PeopleTab from "../../components/ChatFeature/PeopleTab/PeopleTab";

describe("<MessengerContainerComponent />", () => {
    it("renders", () => {
        customMount(<MessengerContainerComponent />);
    });
});

const defaultUser = {
    firstName: "Select a user",
    lastName: "",
    email: "",
};

const handleUserChange = () => {};

describe("MessengerContainerComponent", () => {
    it("Renders header", () => {
        customMount(
            <MessengerContainerComponent>
                <PeopleTab onUserChange={handleUserChange}></PeopleTab>
                <Chat person={defaultUser}></Chat>
            </MessengerContainerComponent>,
        );

        cy.contains("Select a user").should("be.visible");

        cy.get(".chat-container").should("contain.text", "Select a user");
    });

    it("should update currentUser when a user is selected", () => {
        customMount(
            <MessengerContainerComponent>
                <PeopleTab onUserChange={handleUserChange}></PeopleTab>
                <Chat person={defaultUser}></Chat>
            </MessengerContainerComponent>,
        );

        cy.get(".user-select-button") // Replace with your actual selector
            .first() // Selecting the first user for example
            .click();

        // Now check if the currentUser is updated in the Chat component
        cy.get(".chat-username") // Replace with the actual selector for displaying username in the Chat
            .should("contain", "Expected User FirstName"); // Replace with the expected name
    });
});
