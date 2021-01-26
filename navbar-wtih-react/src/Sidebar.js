import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from "@material-ui/core/Divider";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Collapse } from '@material-ui/core';

const style = {
  maxWidth: "200px",
  border: "1px solid rgba(0, 0, 0, 0.1)",
};

function SidebarItems({ depthStep = 20, depth = 0, menuItem, ...rest }) {
  const [collapsed, setCollapsed] = React.useState(true);
  const { label, menuItems, Icon } = menuItem;

  function toggleCollapse() {
    setCollapsed(prevValue => !prevValue)
  }

  function onClick(e) {
    if (Array.isArray(menuItems)) {
      toggleCollapse();
    }
  }

  let expandIcon;

  if (Array.isArray(menuItems) && menuItems.length) {
    expandIcon = !collapsed ? (
      <ExpandLessIcon
        className={
          "sidebar-item-expand-arrow" + " sidebar-item-expand-arrow-expanded"
        }
      />
    ) : (
      <ExpandMoreIcon className="sidebar-item-expand-arrow" />
    );
  }

  return (
    <div>
      <ListItem
        className="sidebar-item"
        onClick={onClick}
        button
        dense
        {...rest}
      >
        <div
          style={{ paddingLeft: depth * depthStep }}
          className="sidebar-item-content"
        >
          {Icon && <Icon className="sidebar-item-icon" fontSize="small" />}
          <div className="sidebar-item-text">{label}</div>
        </div>
        {expandIcon}
      </ListItem>
      <Collapse in={!collapsed} timeout="auto" unmountOnExit>
        {Array.isArray(menuItems) ? (
          <List disablePadding dense>
            {menuItems.map((items, index) => (
              <React.Fragment key={`${items.name}${index}`}>
                {items === "divider" ? (
                  <Divider style={{ margin: "6px 0" }} />
                ) : (
                  <SidebarItems
                    key={items.name}
                    depth={depth + 1}
                    depthStep={depthStep}
                    menuItem={items}
                  />
                )}
              </React.Fragment>
            ))}
          </List>
        ) : null}
      </Collapse>
    </div>
  );
};

function Sidebar({ menuItems, depthStep, depth }) {

  return (
    <div style={ style }>
      <List disablePadding dense>
        {menuItems.map(( items, index ) => (
          <React.Fragment key={ `${items.name}${index}` }>
          {items === "divider" ? (
            <Divider style={{ margin: "6px 0" }} />
          ) : (
            <SidebarItems
              depthStep={ depthStep }
              depth={ depth }
              menuItem={ items }
            />
          )}
          </React.Fragment>
        ))}
      </List>
    </div>
  )
}

export default Sidebar;

