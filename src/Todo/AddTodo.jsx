import React, { useState } from "react";
import "./animation.css";

function AddTodo({ onCreate }) {
  const [value, setValue] = useState("");
  const [loader, setLoader] = useState(false);
  const [border, setBorder] = useState(true)

  function submitHanle(event) {
    event.preventDefault();

    if (value.trim()) {
      setLoader(true);
    } else {
        setBorder(false)
    }

    setTimeout(() => {
      if (value.trim()) {
        onCreate(value);
        setValue("");
        setLoader(false);
        setBorder(true)
      }
    }, 1000);
  }

  return (
    <div>
      <form onSubmit={submitHanle}>
        <div>
          <input className={border ? '' : 'red'}
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
        <button>Add Task</button>
      </form>
      <div id="wrapper" className={loader ? "" : "none"}>
        <div class="profile-main-loader">
          <div class="loader">
            <svg class="circular-loader" viewBox="25 25 50 50">
              <circle
                class="loader-path"
                cx="50"
                cy="50"
                r="20"
                fill="none"
                stroke="#70c542"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
