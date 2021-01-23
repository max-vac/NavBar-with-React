import logo from './logo.svg';
import Sidebar from './Sidebar';

const listItems = [
  { name: 'home', label: 'Home' },
  { name: 'something', label: 'Something' },
  { name: 'something else', label: 'Something Else' }
];


const App = () => {
  return (
    <Sidebar listItems={ listItems } style={{ color: "red"}}  />
  )
}

export default App;
