import { hot } from 'react-hot-loader/root';
import React from 'react';
import style from '../scss/labshome.scss';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import ClientDetail from '../pages/ClientDetail';

interface AppProps {
  title: string;
}

// Properties AppProps and state is {}(unknown)
class App extends React.Component<AppProps, unknown> {
  constructor(props: AppProps) {
    super(props);
  }

  render(): JSX.Element {
 
    return (
      <BrowserRouter>
        <div className={style.container}>
          {this.props.title}
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>

        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>

          <Route path="/about" exact>
            <About/>
          </Route>

          <Route path="/client/:id" exact>
            <ClientDetail/>
          </Route>

        </Switch>
      </BrowserRouter>
    );
  }
}

export default hot(App);