import "./App.css";
import CounterContainer from "./containers/CounterContainer";
import CounterHookContainer from "./containers/CounterHookContainer";
import TodosContainer from "./containers/TodosContainer";
import TodosHookContainer from "./containers/TodosHookContainer";
function App() {
  return (
    <div className="App">
      <CounterContainer />
      <CounterHookContainer />
      <hr></hr>
      <TodosContainer />
      <TodosHookContainer />
    </div>
  );
}

export default App;
