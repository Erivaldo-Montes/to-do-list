import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import style from "./App.module.css";

function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Tasks />
      </div>
    </div>
  );
}

export default App;
