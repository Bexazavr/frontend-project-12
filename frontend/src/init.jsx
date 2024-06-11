import { Provider } from "react-redux";
import store from "./slices/index.js";
import App from "./components/App";
import { socket, WebSocketContext } from "./context/webSocketContext.js";

const init = () => {
  return (
    <Provider store={store}>
      <WebSocketContext.Provider value={socket}>
        <App />
      </WebSocketContext.Provider>
    </Provider>
  );
};
export default init;
