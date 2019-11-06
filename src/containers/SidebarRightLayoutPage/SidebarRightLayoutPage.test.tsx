import React from "react";
import { shallow, mount, ReactWrapper } from "enzyme";
import styles from './SidebarRightLayoutPage.module.scss';

import SidebarRightLayoutPage from "./SidebarRightLayoutPage";
import SidebarRightLayout from "../../components/Bootstrap/SidebarRightLayout";

it("renders without crashing", () => {
  shallow(<SidebarRightLayoutPage/>);
});

let sidebarWrapper: ReactWrapper;
let mainWrapper: ReactWrapper;

beforeEach(() => {
    const component = (
        <SidebarRightLayoutPage/>
    );

    const mountedComponent = mount(component);
    const sidebarRightLayout = mountedComponent.find(SidebarRightLayout);

    sidebarWrapper = sidebarRightLayout.find(`.${styles.sidebar}`).parent();
    mainWrapper = sidebarRightLayout.find(`.${styles.main}`).parent();
});

it("sidebar on second position at desktop, main on first", () => {
    expect(sidebarWrapper.hasClass('order-lg-2')).toEqual(true);
    expect(mainWrapper.hasClass('order-lg-1')).toEqual(true);
});

it("sidebar on first position at mobile, main on second", () => {
    expect(sidebarWrapper.hasClass('order-1')).toEqual(true);
    expect(mainWrapper.hasClass('order-2')).toEqual(true);
});
