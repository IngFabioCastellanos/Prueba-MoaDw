import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "../components/Header";
import App from "../views/App";
import { DonadorView } from "../views/DonadorView";

const Routes = () => {
  return (
    <div className="px-5 sm:px-14 lg:px-60 bg-gradient">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/donador/:id" component={DonadorView} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
