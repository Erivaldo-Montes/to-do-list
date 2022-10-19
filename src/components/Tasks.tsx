import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { EmptyTasks } from "./EmptyTasks";
import style from "./Tasks.module.css";
import { ToDo } from "./ToDo";

import { PlusCircle, Target } from "phosphor-react";

export interface IToDo {
  id: number;
  content: string;
  done: boolean;
}

export function Tasks() {
  const [toDos, setToDos] = useState<IToDo[]>([]);
  const [newTaskText, setNewTaskText] = useState("");

  function handleNewTaskText(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTaskText(event?.target.value);
    event.target.setCustomValidity("");
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    let task: IToDo = {
      id: Math.random() * 100,
      content: newTaskText as string,
      done: false,
    };

    setToDos([...toDos, task]);

    setNewTaskText("");
  }

  function handleInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Este campo é obrigatório");
  }

  function handleDeleteToDo(id: number) {
    const toDosWithoutDeleteOne = toDos.filter((toDo) => {
      return toDo.id !== id;
    });

    setToDos(toDosWithoutDeleteOne);
  }

  function handleToDoIsDone(id: number) {
    let listTodo = toDos;

    const toDoIsDone = listTodo.find((toDo) => toDo.id === id);

    if (!toDoIsDone!.done) {
      toDoIsDone!.done = true;
    } else {
      toDoIsDone!.done = false;
    }

    listTodo.splice(
      toDos.findIndex((toDo) => toDo.id === toDoIsDone!.id),
      1,
      toDoIsDone!
    );

    setToDos(listTodo);

    console.log(listTodo);
  }

  return (
    <div className={style.tasks}>
      <form className={style.formText} onSubmit={handleCreateNewTask}>
        <textarea
          onChange={handleNewTaskText}
          name="form"
          placeholder="Adione uma nova tarefa"
          onInvalid={handleInvalid}
          value={newTaskText}
          required
        />
        <button type="submit">
          Criar
          <PlusCircle size={20} />
        </button>
      </form>

      <div className={style.status}>
        <p>
          Tarefas criadas <span>0</span>
        </p>
        <p>
          Concluidas <span>0</span>
        </p>
      </div>

      <div className={style.taskList}>
        {toDos.length ? (
          toDos.map((toDo) => {
            return (
              <ToDo
                content={toDo.content}
                id_todo={toDo.id}
                done={toDo.done}
                onDeleteToDo={handleDeleteToDo}
                onDoneToDo={handleToDoIsDone}
                key={toDo.id}
              />
            );
          })
        ) : (
          <EmptyTasks />
        )}
      </div>
    </div>
  );
}
