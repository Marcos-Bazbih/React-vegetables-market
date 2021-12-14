import './App.css';
import Logo from './components/Logo/logo';
import AddVegetable from './components/AddVegetable/addVegetable';
import AddFruit from './components/AddFruit/addFruit';
import AddSpice from './components/AddSpice/addSpice';
import AddPreserves from './components/AddPreserves/addPreserves';


function App() {
  return (
    <div className="App">
      <Logo />
      <AddVegetable />
      <AddFruit />
      <AddSpice />
      <AddPreserves />
    </div>
  );
}

export default App;
