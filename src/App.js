import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { Route, Switch } from 'react-router';
import Photos from './pages/photos';
import Cart from "./pages/cart"
function App() {
  return (
    <div >
    <Header/>
    <Switch>
   <Route exact path="/">
     <Photos/>
     </Route>

   <Route exact path="/cart">
     <Cart/>
     </Route>
   
    </Switch>
    </div>
  );
}

export default App;
