import "./App.css";
import CounterAsyncContainer from "./containers/CounterAsyncContainer";
import CounterContainer from "./containers/CounterContainer";
import CounterHookContainer from "./containers/CounterHookContainer";
import NewsItemAsyncContainer from "./containers/NewsItemAsyncContainer";
import TodosContainer from "./containers/TodosContainer";
import TodosHookContainer from "./containers/TodosHookContainer";
function App() {
  return (
    <div className="App">
      <NewsItemAsyncContainer />
      <hr />
      <CounterContainer />
      <CounterHookContainer />
      <CounterAsyncContainer />
      <hr></hr>
      <TodosContainer />
      <TodosHookContainer />
    </div>
  );
}

export default App;
