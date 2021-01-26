// import { amber } from '@material-ui/core/colors';
import Sidebar from './Sidebar';
import HomeIcon from '@material-ui/icons/Home';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import StoreIcon from '@material-ui/icons/Store';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SettingsIcon from '@material-ui/icons/Settings';
import PaymentIcon from '@material-ui/icons/Payment';
import InfoIcon from '@material-ui/icons/Info';
import AddIcon from '@material-ui/icons/Add';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';

function onClick(e, item) {
  window.alert(JSON.stringify(item, null, 2));
}

const menuItems = [
  { name: "home", label: "Home", Icon: HomeIcon },
  "divider",
  {
    name: "billing",
    label: "Billing",
    Icon: PaymentIcon,
    menuItems: [
      { name: "statements", label: "Statements", onClick },
      { name: "reports", label: "Reports", onClick }
    ]
  },
  "divider",
  {
    name: "settings",
    label: "Settings",
    Icon: SettingsIcon,
    menuItems: [
      { name: "profile", label: "Profile" },
      { name: "insurance", label: "Insurance", onClick },
      "divider",
      {
        name: "notifications",
        label: "Notifications",
        Icon: NotificationsIcon,
        menuItems: [
          { name: "email", label: "Email", onClick },
          {
            name: "desktop",
            label: "Desktop",
            Icon: AddShoppingCartIcon,
            menuItems: [
              { name: "schedule", label: "Schedule" },
              { name: "frequency", label: "Frequency" }
            ]
          },
          { name: "sms", label: "SMS" }
        ]
      }
    ]
  }
];


const App = () => {
  return (
    <Sidebar menuItems={ menuItems } />
  )
}

export default App;
