import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ITask } from "../../interfaces/Task";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id: number, title: string, difficulty: number): void;
}

const TaskForm = ({
  btnText,
  taskList,
  setTaskList,
  task,
  handleUpdate,
}: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [task]);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleUpdate) {
      handleUpdate(id, title, difficulty);
    } else {
      const id = Math.floor(Math.random() * 1000);

      const newTask: ITask = { id, title, difficulty };

      setTaskList!([...taskList, newTask]);
    }
    clearForm();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  };

  const clearForm = () => {
    setTitle("");
    setDifficulty(0);
  };

  return (
    <form onSubmit={addTaskHandler}>
      <div className="container text-center">
        <div className="col mb-3">
          <label className="form-label" htmlFor="title">
            Informe a tarefa
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={title}
            onChange={handleChange}
            placeholder="Titulo da tarefa"
          />
        </div>
        <div className="col mb-3">
          <label htmlFor="difficulty" className="form-label">
            Dificuldade
          </label>
          <input
            type="text"
            className="form-control"
            name="difficulty"
            value={difficulty}
            onChange={handleChange}
            placeholder="Dificuldade"
          />
        </div>
        <input
          type="submit"
          className="btn btn-outline-primary mb-4"
          value={btnText}
        />
      </div>
    </form>
  );
};

export default TaskForm;
