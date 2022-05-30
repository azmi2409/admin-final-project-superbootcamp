import React from "react";

import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";

import { SidebarNav } from "./SidebarNav";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

// sidebar nav config
import navigation from "../utils/_nav";

const Sidebar = () => {
  const [unfoldable, setUnfoldable] = React.useState(false);
  const [sidebarShow = true, setSidebarShow] = React.useState(true);

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => setSidebarShow(visible)}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <h2 className="sidebar-brand-full">Admin Panel</h2>
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <SidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => {
          setUnfoldable(!unfoldable);
        }}
      />
    </CSidebar>
  );
};

export default React.memo(Sidebar);
