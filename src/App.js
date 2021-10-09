import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/material";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/User/About";
import Home from "./pages/User/Home";
import "./theme/globalstyles.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
