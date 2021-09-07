import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "../components/Header";
import App from "../views/App";
import { DonadorView } from "../views/DonadorView";

const Routes = () => {
  return (
    <div className="min-h-screen px-5 bg-black sm:px-14 lg:px-60">
      <Router>
        <Header />
        <Switch>
          <Route path="/donador/:id" exact component={DonadorView} />
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
