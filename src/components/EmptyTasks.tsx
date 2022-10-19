import clipboard from "../assets/Clipboard.svg";
import style from "./EmptyTasks.module.css";
export function EmptyTasks() {
  return (
    <div className={style.EmptyTasks}>
      <img src={clipboard} alt="" />
      <div className={style.text}>
        <p>Vocễ ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus items a fazer</p>
      </div>
    </div>
  );
}
