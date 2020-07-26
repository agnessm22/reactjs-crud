import React, { Component, useState } from 'react'
//import React, {useState} from 'react'
import NavbarComponent from './components/NavbarComponent'
//import JumbotronComponent from './components/JumbotronComponent'
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainerJadwalKegiatan from "./containers/HomeContainerJadwalKegiatan";
import CreateContainerJadwalKegiatan from "./containers/CreateContainerJadwalKegiatan";
import EditContainerJadwalKegiatan from "./containers/EditContainerJadwalKegiatan";
import DetailContainerJadwalKegiatan from "./containers/DetailContainerJadwalKegiatan";
import Galeri from './components/Fungsional/Galeri';
import { CartContext } from './CartContext';
import Renungan from './components/Fungsional/Renungan';
import Login from './components/Fungsional/Login';
import Header from './components/Fungsional/Header';
import HomePage from './components/Fungsional/HomePage';
import Register from './components/Fungsional/Register';
import DataAdmin from './components/Class/DataAdmin';
import EditAdmin from './components/Class/EditAdmin';


function App() {
  const [value, setValue] = useState(0)

    return (
      <div>
          <Header />
        <NavbarComponent />
        
        <BrowserRouter>
        <CartContext.Provider value = {{value, setValue}} >
        <Route path = "/" exact component={Login}/>

        <Route path = "/home" exact component={HomePage} />

        <Route path="/jadwalkegiatan" exact component={HomeContainerJadwalKegiatan} />
          
        <Route path="/createjadwalkegiatan" exact component={CreateContainerJadwalKegiatan} />
          
        <Route path="/edit/:id" exact component={EditContainerJadwalKegiatan} />
          
        <Route path="/detail/:id" exact component={DetailContainerJadwalKegiatan} />

        <Route path="/galeri"  exact component={Galeri} />

        <Route path="/renungan" exact component={Renungan} />

        <Route path="/tampiladmin" exact component={DataAdmin} />

        <Route path="/tampil/admin/edit" exact component={EditAdmin} />

        <Route path="/tampil/admin/tambah" exact component={Register} />

        <Route path="/logout" exact component={Login} />

      </CartContext.Provider>
        </BrowserRouter>
      </div>
    )
  }

  export default App;