import Holder from "./components/Holder/Holder";
import { useSubscribe, freshState, writeState } from "local-state-for-react";

freshState({
  todolist: [
    {
      id: 1,
      title: "İşleri Yoluna Koy",
    },
    {
      id: 2,
      title: "Yat Uyu Gana",
    },
  ],
});
function App() {
  return (
    <div className="App">
      <Holder />
    </div>
  );
}

export default App;
