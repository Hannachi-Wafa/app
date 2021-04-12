import React from "react";
import ProfilPhoto from "./component/Profile/ProfilPhoto";
import FullName from "./component/Profile/FullName";
import Address from "./component/Profile/Address";
import './App.css';

const App = () => (
<div className="app">
  <ProfilPhoto />
  <FullName/>
  <Address/>
</div>
);
export default App;