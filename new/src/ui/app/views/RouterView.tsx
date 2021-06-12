import { Route, Switch } from "react-router-dom";
import { AppRoutes } from "../api/routes";

import { Landing } from "../../landing";
import { useEffect } from "react";

export const RouterView: React.VFC = () => {
  useEffect(() => {
    window.addEventListener("resize", () => document.body.style.setProperty("--vh", `${window.innerHeight * 0.01}px`));
  }, []);

  return (
    <Switch>
      <Route path={AppRoutes.Landing} component={Landing} />
    </Switch>
  );
};
