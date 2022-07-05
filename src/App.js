import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
