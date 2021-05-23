import { AppContainer } from "../containers/AppContainer";
import { RouterView } from "../views/RouterView";

export const App: React.VFC = () => {
  return (
    <AppContainer>
      <RouterView />
    </AppContainer>
  );
};
