import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const style = {
  maxWidth: "200px",
  border: "1px solid rgba(0, 0, 0, 0.1)",
};

function SidebarItems({ label, listItems, depthStep = 10, depth = 0, ...rest}) {
  return (
    <div>
      <ListItem button dense {...rest}>
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
              {...items}
            />
          ))}
        </List>
      ) : null }
    </div>
  );
}
function Sidebar({ listItems, depthStep, depth }) {
  return (
    <div style={ style }>
      <List disablePadding dense>
        {listItems.map(( item, index ) => (
          <SidebarItems
            key={ `${item}${index}`}
            depthStep={ depthStep }
            depth={ depth }
            { ...item }
          />
        ))}
      </List>
    </div>
  )
}

export default Sidebar;