import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, resetToZero } from "./redux/slices/counterSlice";

const App = () => {
  const num = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div className="app-container">
      <div className="counter-card">
        <h1 className="app-title">Counter App</h1>

        <div className="display-box">
          <p className="counter-label">Current Count</p>
          <h2 className="counter-display">{num}</h2>
        </div>

        <div className="button-group">
          <button
            onClick={() => {
              dispatch(increment());
            }}
            className="btn btn-increment"
          >
            Increment
          </button>
          <button
            onClick={() => {
              dispatch(decrement());
            }}
            className="btn btn-decrement"
          >
            Decrement
          </button>
        </div>

        <button
          onClick={() => {
            dispatch(resetToZero());
          }}
          className="btn btn-reset"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
