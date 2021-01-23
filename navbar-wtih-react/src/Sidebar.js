import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const style = {
  maxWidth: "200px",
  border: "1px solid rgba(0, 0, 0, 0.1)",
};

function Sidebar({ listItems }) {
  return (
    <List style={ style } disablePadding dense>
      { listItems.map(({ label, name }) => (
        <ListItem key={ name } button={ name }>
          <ListItemText>{ label }</ListItemText>
        </ListItem>
      ))}
    </List>
  )
}

export default Sidebar;