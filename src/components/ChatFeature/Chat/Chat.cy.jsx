import React from "react";
import Chat from "./Chat";
import { customMount } from "../../../../cypress/support/mount";

const defaultUser = {
    firstName: "Select a user",
    lastName: "",
    email: "",
};

describe("<Chat />", () => {
    it("renders", () => {
        cy.viewport(1900, 1200);

        customMount(<Chat person={defaultUser} />);
    });
});
