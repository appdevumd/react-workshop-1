import logo from './logo.svg';
import './App.css';
import Counter from './components/counter.js';
import ProductList from './components/ProductList';

/*
    Our App Component, this would be 'the whole page' and you can see the
    image is declared here alongside our components
*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <ProductList />
      </header>
    </div>
  );
}

export default App;
