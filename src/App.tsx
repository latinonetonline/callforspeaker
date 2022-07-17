import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import CallForSpeakers from "./components/CallForSpeakers";
import 'react-advanced-cropper/dist/style.css'


const App = () => {
  return (
    <div id="app_container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CallForSpeakers />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
