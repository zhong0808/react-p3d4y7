import React from "react";
import { observer } from "mobx-react";
import store from "./../../store";

export default observer(() => {
  return (
    <>
      <div>
        {store.completedCount ? `已完成${store.completedCount}项待办` : ""}
      </div>
      <ul>
        {store.todoList.map(item => {
          return (
            <li>
              <input
                type="checkbox"
                checked={item.completed}
                onClick={() => {
                  store.completedItem(item.id);
                }}
              />
              <span
                style={{
                  textDecoration: item.completed ? "line-through" : "none"
                }}
              >
                {item.content}
              </span>
              <button
                onClick={() => {
                  store.removeItem(item.id);
                }}
              >
                删除
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
});
