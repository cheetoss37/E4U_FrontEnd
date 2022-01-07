import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/material";
import "./theme/globalstyles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PathConst } from "./constants";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/User/About";
import Home from "./pages/User/Home";
import OurExams from "./pages/User/OurExams";
import FreeTests from "./pages/User/FreeTests";
import AdminHome from "./pages/Admin/Home";
import ManageTest from "./pages/Admin/ManageTest";
import ManageUser from "./pages/Admin/ManageUser";
import ManageQuestion from "./pages/Admin/ManageQuestion";
import DoTest from "./pages/User/DoTest";
import Result from "./pages/User/Result";
import ResultDetail from "./pages/User/ResultDetail";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path={PathConst.HOME} component={Home} />
          <Route path={PathConst.LOGIN} component={Login} />
          <Route path={PathConst.REGISTER} component={Register} />
          <Route path={PathConst.ABOUT} component={About} />
          <Route path={PathConst.OUR_EXAMS} component={OurExams} />
          <Route path={PathConst.FREE_TEST} component={FreeTests} />
          <Route path={PathConst.DO_TESTS} component={DoTest} />
          <Route path={PathConst.ADMIN_HOME} component={AdminHome} />
          <Route path={PathConst.MANAGE_TEST} component={ManageTest} />
          <Route path={PathConst.MANAGE_USER} component={ManageUser} />
          <Route path={PathConst.MANAGE_QUESTION} component={ManageQuestion} />
          <Route path={PathConst.RESULT_LIST} component={Result} />
          <Route path={PathConst.RESULT_DETAIL} component={ResultDetail} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
