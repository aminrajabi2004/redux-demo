import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import MilkContainer from "./components/MilkContainer";
import UsersList from "./components/UsersList";

function App() {
  return (
    <Provider store={store}>
      <CakeContainer />
      <MilkContainer />
      <hr />
      <UsersList />
    </Provider>
  );
}

export default App;
