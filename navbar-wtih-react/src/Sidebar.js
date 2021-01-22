import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


function Sidebar({ listItems }) {
  return (
    <List disablePadding dense>
      { listItems.map(({ label, name }) => (
        <ListItem key={ name } button={ name }>
          <ListItemText>{ label }</ListItemText>
        </ListItem>
      ))}
    </List>
  )
}

export default Sidebar;