import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './css/theme';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Profile from './pages/Profile';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          {/*<Home />*/}
          <Projects />
          {/*<Profile />*/}
          {/*<Blog />*/}
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
