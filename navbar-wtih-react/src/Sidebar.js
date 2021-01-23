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
    <div className="sidebar">
      <List style={ style } disablePadding dense>
        { listItems.map(({ label, name, listItems }) => (
          <React.Fragment key={ name }>
          <ListItem key={ name } button={ name } style={{ paddingLeft: 20}}>
            <ListItemText>{ label }</ListItemText>
          </ListItem>
            {Array.isArray(listItems) ? (
              <List disablePadding>
                {listItems.map((items) => (
                  <ListItem key={items.name} button>
                    <ListItemText className="side-bar-text">
                      { items.label }
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            ) : null }
          </React.Fragment>
        ))}
      </List>
    </div>
  )
}

export default Sidebar;