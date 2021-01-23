import { amber } from '@material-ui/core/colors';
import logo from './logo.svg';
import Sidebar from './Sidebar';

const listItems = [
  { name: 'home', label: 'Home' },
  { name: 'menu',
    label: 'Menu',
    listItems: [
      { name: 'orders', label: 'Orders'},
      { name: 'recent purchases', label: 'Recent Purchases'},
      { name: 'cart',
        label: 'Cart',
        listItems: [
          { name: 'recently added', label: 'Recently Added' },
          { name: 'go to cart', label: 'Go To Cart' }
        ]
    }
    ]
  },
  { name: 'account',
    label: 'Account',
    listItems: [
      { name: 'information', label: 'Information' },
      { name: 'payments', label: 'Payments' },
      { name: 'settings', label: 'Settings' }
    ]
  }
];


const App = () => {
  return (
    <Sidebar listItems={ listItems } />
  )
}

export default App;
