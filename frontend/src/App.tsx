import FilterCars from "./components/Filter";
import { HomeProvider } from "./providers/HomeProvider";

const App = () => {
  return (
    <>
      <HomeProvider>
        <FilterCars />
      </HomeProvider>
    </>
  );
};

export default App;
