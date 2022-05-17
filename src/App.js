import { ContextProvider } from "./Context/ContextProvider";
import { Router } from "./router/Router";


function App() {
  return (
    <>
      <ContextProvider>
        <Router />
      </ContextProvider>

    </>
  );
}

export default App;

