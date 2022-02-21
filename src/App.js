import logo from './logo.svg';
import './App.css';
import TodosList from './components/todos/TodosList';

function App() {
  return (
    <div className="App">
      <header >
        <h1>Todos Redux</h1>
      </header>

      <TodosList />
    </div>
  );
}

export default App;
