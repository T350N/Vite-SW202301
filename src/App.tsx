import './App.css';
import { useState } from 'react'
//import { Version } from './components/Version'  ESTE SI VA COMENTADO
import { Menu } from './components/Menu'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Version } from './pages/Version';

import MiComponente, { } from './components/MiComponente'
function App() {

  const [selectedMenu, setSelectedsMenu] = useState("Home");
  return (
    <div className="App">
      <Menu
        items={["Home", "Version", "About", "Login", "signIn"]}
        itemClickHandler={(newSelectedMenu: string): void => {
          setSelectedsMenu(newSelectedMenu);
        }}
        selectedItem={selectedMenu}
      />
      {selectedMenu === "Home" && <Home />}
      {selectedMenu === "Version" && <Version />}
      {selectedMenu === "About" && <About />}
      

    </div>

  )
}

export default App
