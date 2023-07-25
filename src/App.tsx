import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserContextProvider>
          <Router />
        </UserContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
