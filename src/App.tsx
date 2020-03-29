import React from 'react'
import Navbar from "./components/Navbar";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import TodosPage from "./Pages/TodosPage";
import AboutPage from "./Pages/AboutPage";

declare var confirm: (question: string) => boolean;

const App: React.FC = () => {


  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">

        <Switch>
          <Route component={TodosPage} path="/" exact/>
          <Route component={AboutPage} path="/about"/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
