import React from "react";
import { ITask } from "../../interfaces/Task";

interface Props {
  taskList: ITask[];
  handleDelete(id: number): void;
  handleEdit(task: ITask): void;
}

const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
  return (
    <div>
      <ul className="list-group list-group-flush">
        <>
          {taskList.length > 0 ? (
            taskList.map((task) => (
              <li key={task.id} className="list-group-item">
                <div className="col">
                  <p>
                    {task.title}{" "}
                    <button
                      type="submit"
                      className="ms-2 btn btn-outline-success"
                    >
                      <i
                        className="bi bi-pencil"
                        onClick={() => {
                          handleEdit(task);
                        }}
                      ></i>
                    </button>
                    <button
                      type="submit"
                      className="ms-2 btn btn-outline-danger"
                    >
                      <i
                        className="bi bi-trash"
                        onClick={() => {
                          handleDelete(task.id);
                        }}
                      ></i>
                    </button>
                  </p>
                </div>
              </li>
            ))
          ) : (
            <p>Não tem tarefas</p>
          )}
        </>
      </ul>
    </div>
  );
};

export default TaskList;
