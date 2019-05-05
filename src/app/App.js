import React from "react";
import { attach } from "proppy-react";
import { withStore } from "proppy-redux";
import { compose, withHandlers, didSubscribe } from "proppy";
import * as types from "../infra/types";
import dispatch from "../infra/dispatch";

const P = compose(
  withStore(state => ({ appReducer: state.appReducer }), {
    dispatch
  }),
  withHandlers({
    onSyncAction: props => () => props.dispatch(types.SYNC_ACTION),
    onAsyncAction: props => () => props.dispatch(types.ASYNC_ACTION)
  }),
  didSubscribe(props => props.onSyncAction(), props => props.onAsyncAction())
);

function MyComponent({ onSyncAction, onAsyncAction, appReducer, counter }) {
  return (
    <div>
      <h2>ProppyJS: withStream</h2>
      <div className="App">
        <div className="App-heading App-flex">
          <h2>
            Welcome to <span className="App-react">react-rx</span>
          </h2>
        </div>
        <div className="App-instructions App-flex">
          <button onClick={onSyncAction}>
            click here to dispatch a sync action
          </button>
          <button onClick={onAsyncAction}>
            click here to dispatch an async action
          </button>
        </div>
        <div>{counter}</div>
        {appReducer.data && <div>data has been fetched</div>}
      </div>
    </div>
  );
}

export default attach(P)(MyComponent);
