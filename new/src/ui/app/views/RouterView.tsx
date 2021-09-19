import { Route, Switch, useLocation, useRouteMatch } from "react-router-dom";
import { AppRoutes } from "../api/routes";

import { Landing } from "../../landing";
import { useEffect } from "react";
import { useProgramInfo } from "../../../business/hooks/useProgramInfo";

export const RouterView: React.VFC = () => {
  const { link } = useProgramInfo();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes('/download')) {
      window.location.href = link;
      console.log(link);
    }

    
  }, [pathname, link])

  useEffect(() => {
    window.addEventListener("resize", () => document.body.style.setProperty("--vh", `${window.innerHeight * 0.01}px`));
  }, []);

  return (
    <Switch>
      <Route path={'*'} component={Landing} />
    </Switch>
  );
};
