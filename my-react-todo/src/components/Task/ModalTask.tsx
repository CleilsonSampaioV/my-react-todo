import React from "react";
import styles from "./ModalTask.module.css";

interface Props {
  title: string;
  children: React.ReactNode;
}

const ModalTask = ({ children, title }: Props) => {
  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.getElementById("modalTaskForm");
    modal!.classList.add("hide");
  };

  return (
    <div id="modalTaskForm" className="hide">
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default ModalTask;
