import { useState } from 'react';
import styles from './app.module.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ColBro from "./components/colbro/colbro";
import Register from "./components/register/register";
import Mypage from "./components/mypage/mypage";
import Detail from "./components/detatil/detail";
import List from "./components/list/list";

function App() {
  const [cars, setCars] = useState([{
    id:Date.now(),
    Date: Date.now(),
    CarNumber: "11가1111",
    Company: "한성자동차",
    CarName: "소나타",
    part:"Fender_FR",
    color:"A5J",
    description:"안녕하세요",
    colorMixData: {
      colorNumber1:"111",
      colorGram1: "112",
      colorNumber2:"111",
      colorGram2: "112",
      colorNumber3:"111",
      colorGram3: "112",
      colorNumber4:"111",
      colorGram4: "112",
      colorNumber5:"111",
      colorGram5: "112",
      colorNumber6:"111",
      colorGram6: "112",
      colorNumber7:"111",
      colorGram7: "112",
      colorNumber8:"111",
      colorGram8: "112",
      colorNumber9:"111",
      colorGram9: "112",
      colorNumber10:"111",
      colorGram10: "112",
    }
  }]);

  return (
    <div className={styles.app}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ColBro />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/mypage">
          <Mypage />
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>
        <Route path="/list">
          <List />
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  )
}

export default App;
