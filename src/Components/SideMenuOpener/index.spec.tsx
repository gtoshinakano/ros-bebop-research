// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { SideMenuOpener } from "@Components";
// #endregion Local Imports

describe("SideMenuOpener", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<SideMenuOpener />);
        expect(wrapper).toMatchSnapshot();
    });
});
