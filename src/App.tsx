import { AppProviders } from "components/AppProviders";
import { Dashboard } from "features/Dashboard";

const App = () => {
  return (
    <AppProviders>
      <Dashboard />
    </AppProviders>
  );
};

export default App;
