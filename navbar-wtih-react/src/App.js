import logo from './logo.svg';
import Sidebar from './Sidebar';

const listItems = [
  { name: 'home', label: 'Home' },
  { name: 'something', label: 'Something' },
  { name: 'something else', label: 'Something Else' }
];


const App = () => {
  const style = {
    maxWidth: "200px",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    color: "blue"
  };
  return (
    <Sidebar listItems={ listItems } style={{ color: "red"}}  />
  )
}

export default App;
