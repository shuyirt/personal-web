import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './css/theme';
import Home from './pages/Home';
import Project from './pages/Blog';
import Blog from './pages/Profile';
import Profile from './pages/Project';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          {/*<Home />*/}
          <Project />
          {/*<Profile />*/}
          {/*<Blog />*/}
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
