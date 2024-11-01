import React from "react";
import ResetPasswordComponent from "./ResetPassword";
import { customMount } from "../../../cypress/support/mount";

describe("<ResetPasswordComponent />", () => {
    it("renders", () => {
        customMount(<ResetPasswordComponent isEmailPage={false} />);
    });

    it("renders", () => {
        customMount(<ResetPasswordComponent isEmailPage={true} />);
    });
});
