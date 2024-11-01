import React from "react";
import MessengerContainerComponent from "./MessengerContainer";
import { customMount } from "../../../cypress/support/mount";
import Chat from "../../components/ChatFeature/Chat/Chat";
import PeopleTab from "../../components/ChatFeature/PeopleTab/PeopleTab";

beforeEach(() => {
    localStorage.setItem(
        "token",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJvYkBleGFtcGxlLmNvbSIsImlhdCI6MTcyOTg4MTMwMiwiZXhwIjoxNzMwMDU0MTAyfQ.3LCbfXARqa8QkdU0uAYKlDZPobMlaY6buiAMEdrw-r0",
    );
});

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

describe("<MessengerContainerComponent />", () => {
    it("Renders header", () => {
        cy.viewport(1280, 900);

        customMount(
            <MessengerContainerComponent>
                <PeopleTab onUserChange={handleUserChange}></PeopleTab>
                <Chat person={defaultUser}></Chat>
            </MessengerContainerComponent>,
        );

        cy.contains("Select a user").should("be.visible");

        cy.get(".chat-header .contact").should("contain.text", "Select a user");
    });
});
