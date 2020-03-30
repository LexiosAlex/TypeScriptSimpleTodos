import React from 'react'
import Navbar from "./components/Navbar";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import TodosPage from "./pages/TodosPage";
import AboutPage from "./pages/AboutPage";
import {Provider} from "react-redux";
import {store} from "./store/mainStore";

declare var confirm: (question: string) => boolean;

const App: React.FC = () => {


  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route component={TodosPage} path="/" exact/>
            <Route component={AboutPage} path="/about"/>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
