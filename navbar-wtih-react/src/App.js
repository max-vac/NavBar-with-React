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

const listItems = [
  { name: 'home', label: 'Home', Icon: HomeIcon },
  { name: 'menu',
    label: 'Menu',
    icon: MenuIcon,
    listItems: [
      { name: 'orders', label: 'Orders', icon: StoreIcon},
      { name: 'recent purchases', label: 'Recent Purchases', icon: AddIcon},
      { name: 'cart',
        label: 'Cart',
        icon: AddShoppingCartIcon,
        listItems: [
          { name: 'recently added', label: 'Recently Added', icon: AddIcon },
          { name: 'go to cart', label: 'Go To Cart', icon: ShoppingCartIcon }
        ]
    }
    ]
  },
  "divider",
  { name: 'account',
    label: 'Account',
    icon: AccountBoxIcon,
    listItems: [
      { name: 'information', label: 'Information', icon: InfoIcon },
      { name: 'payments', label: 'Payments', icon: PaymentIcon },
      { name: 'settings', label: 'Settings', icon: SettingsIcon }
    ]
  }
];


const App = () => {
  return (
    <Sidebar menuItems={ listItems } />
  )
}

export default App;
