import { Check, CheckCircle, Circle, Trash } from "phosphor-react";
import style from "./ToDo.module.css";
import { IToDo } from "./Tasks";
import { useState } from "react";

interface ToDoProps {
  id_todo: number;
  content: string;
  done: boolean;
  onDoneToDo: (id: number) => void;
  onDeleteToDo: (id: number) => void;
}

export function ToDo({
  content,
  id_todo,
  done,
  onDeleteToDo,
  onDoneToDo,
}: ToDoProps) {
  const [isDone, setIsDone] = useState<boolean>(done);
  const [hide, setHide] = useState("");

  function handleDeleteToDo() {
    setHide(style.hide);

    setTimeout(() => {
      onDeleteToDo(id_todo);
    }, 100);
  }

  function handleToDoIsDone() {
    if (isDone) {
      setIsDone(false);
    } else {
      setIsDone(true);
    }

    onDoneToDo(id_todo);
  }

  return (
    <div className={style.ToDo + " " + hide}>
      <div>
        {isDone ? (
          <>
            <Check className={style.checkCircle} onClick={handleToDoIsDone} />
            <p className={style.textDone}>{content}</p>
          </>
        ) : (
          <>
            <Circle className={style.check} onClick={handleToDoIsDone} />
            <p>{content}</p>
          </>
        )}
      </div>
      <Trash className={style.trash} onClick={handleDeleteToDo} />
    </div>
  );
}
