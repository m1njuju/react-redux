import "./App.css";
import CounterAsyncContainer from "./containers/CounterAsyncContainer";
import CounterContainer from "./containers/CounterContainer";
import CounterHookContainer from "./containers/CounterHookContainer";
import CounterSagaContainer from "./containers/CounterSagaContainer";
import NewsItemAsyncContainer from "./containers/NewsItemAsyncContainer";
import NewsItemSagaContainer from "./containers/NewsItemSagaContainer";
import TodosContainer from "./containers/TodosContainer";
import TodosHookContainer from "./containers/TodosHookContainer";
function App() {
  return (
    <div className="App">
      <NewsItemSagaContainer />
      <hr />
      <NewsItemAsyncContainer />
      <hr />
      <CounterContainer />
      <CounterHookContainer />
      <CounterAsyncContainer />
      <CounterSagaContainer />
      <hr></hr>
      <TodosContainer />
      <TodosHookContainer />
    </div>
  );
}

export default App;
