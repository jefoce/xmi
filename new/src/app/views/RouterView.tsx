import { Route, Switch } from "react-router-dom";
import { AppRoutes } from "../api/routes";

import { Landing } from "../../landing";

export const RouterView: React.VFC = () => {
    return <Switch>
        <Route path={AppRoutes.Landing} component={Landing} />
    </Switch>;
};
