import React from "react"
import './App.css';
import Feed from './Feed'
import Header from "./Header";
import Sidebar from "./Sidebar";
import Widgets from './Widgets'
import Login from './Login'
import { useStateValue } from "./StateProvider";
// {/* lowcase a to place h1 in centre, Capital A to align left */}


function App() {
  const[{user }, dispatch ] = useStateValue()


  // const user = null; // null to login page, string to show fb
  return (
    // ? BEM naming convention 
    <div className="app">
      {!user ? (
        <Login />
      ) : (
          <>
            <Header />

            <div className='app__body'>
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </>
        )}
    </div>

  );
}

export default App;