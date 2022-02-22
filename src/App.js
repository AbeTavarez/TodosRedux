import logo from "./logo.svg";
import "./App.css";
import TodosList from "./components/todos/TodosList";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <h1>Todos Redux</h1>
        </header>

        <TodosList />
      </div>
    </Provider>
  );
}

export default App;
