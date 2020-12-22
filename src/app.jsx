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
    Id:Date.now(),
    Date: Date.now(),
    CarNumber: "11가1111",
    Company: "한성자동차",
    CarName: "소나타",
    Part:"Fender_FR",
    Color:"A5J",
    Description:"안녕하세요",
    ColorMixData: {
      ColorNumber1:"111",
      ColorGram1: "112",
      ColorNumber2:"111",
      ColorGram2: "112",
      ColorNumber3:"111",
      ColorGram3: "112",
      ColorNumber4:"111",
      ColorGram4: "112",
      ColorNumber5:"111",
      ColorGram5: "112",
      ColorNumber6:"111",
      ColorGram6: "112",
      ColorNumber7:"111",
      ColorGram7: "112",
      ColorNumber8:"111",
      ColorGram8: "112",
      ColorNumber9:"111",
      ColorGram9: "112",
      ColorNumber10:"111",
      ColorGram10: "112",
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
        <Route exact path="/list">
          <List />
        </Route>
        <Route path="/list/detail">
          <Detail />
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  )
}

export default App;
