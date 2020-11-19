// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { SideMenu } from "@Components";
// #endregion Local Imports

describe("SideMenu", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<SideMenu />);
        expect(wrapper).toMatchSnapshot();
    });
});
