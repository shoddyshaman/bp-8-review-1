import './App.css';
import MyButton from './components/MyButton';
import Profile from './components/Profile';
import ProductList from './components/ProductList';
import { useState } from 'react';

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  return (
    <>
    <div className="App">
      <h2>Welcome to React</h2>
      <MyButton setLogin={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
      {isLoggedIn ? <Profile /> : <h2>not logged in </h2>}
    </div>
    <ProductList />
    </>
  );
}

export default App;
