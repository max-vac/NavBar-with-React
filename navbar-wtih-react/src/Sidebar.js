import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from "@material-ui/core/Divider";

const style = {
  maxWidth: "200px",
  border: "1px solid rgba(0, 0, 0, 0.1)",
};

function SidebarItems({ depthStep = 20, depth = 0, expanded, menuItems, ...rest }) {
  const [collapsed, setCollapsed] = React.useState(true);
  const { label, listItems, Icon } = menuItems;
  return (
    <div>
      <ListItem button dense >
        <ListItemText style={{ paddingLeft: depth * depthStep }}>
          <span>{label}</span>
        </ListItemText>
      </ListItem>
      {Array.isArray(listItems) ? (
        <List disablePadding dense>
          { listItems.map((items) => (
            <SidebarItems
              key={ items.name }
              depth={ depth + 1}
              depthStep={ depthStep }
              menuItems={ items }
              />
          ))}
        </List>
      ) : null }
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
              key={ `${items.name}${index}`}
              depthStep={ depthStep }
              depth={ depth }
              menuItems={ items }
            />
          )}
          </React.Fragment>
        ))}
      </List>
    </div>
  )
}

export default Sidebar;

