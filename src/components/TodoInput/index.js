import React, { useRef } from "react";

import { observer } from "mobx-react";
import store from "./../../store";

export default observer(() => {
  const inputRef = useRef();
  return (
    <>
      <input ref={inputRef} placeholder="请输入待办事项" />
      <button
        onClick={() => {
          const content = inputRef.current.value.trim();
          if (content.length > 0) {
            store.addItem({
              id: new Date().getTime(),
              content: inputRef.current.value.trim(),
              completed: false
            });
            inputRef.current.value = "";
          }
        }}
      >
        增加
      </button>
    </>
  );
});
