import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import Menu from "./components/Menu";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Outbox from "./pages/Outbox";
import Dashboard from "./pages/Dashboard";
import Page1 from "./pages/Page1";
import Home from "./pages/Home";
import InfiniteScroll from "./pages/InfiniteScroll";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/">
              <Redirect to="/page/home" />
            </Route>
            <Route path="/page/home" component={Home} exact={true} />
            <Route path="/page/dashboard" component={Dashboard} exact={true} />
            <Route path="/page/outbox" component={Outbox} exact={true} />
            <Route path="/page/page1" component={Page1} exact={true} />
            <Route
              path="/page/infiniteScroll"
              component={InfiniteScroll}
              exact={true}
            />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
