import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';


function App() {
  return (
    <div >
     <Router>
       <Switch>
         <Route>
           <Home></Home>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
