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
import { UserContext } from "../context/";
// sidebar nav config
import navigation from "../utils/_nav";

const Sidebar = () => {
  const { show, dispatchShow } = React.useContext(UserContext);

  return (
    <CSidebar
      position="fixed"
      unfoldable={show?.sidebarUnfoldable}
      visible={show?.sidebarShow}
      onVisibleChange={(visible) => {
        dispatchShow({ type: "set", sidebarShow: visible });
      }}
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
        onClick={() =>
          dispatchShow({
            type: "set",
            sidebarUnfoldable: !show?.sidebarUnfoldable,
          })
        }
      />
    </CSidebar>
  );
};

export default React.memo(Sidebar);
