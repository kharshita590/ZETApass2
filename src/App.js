import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Event from './components/Events';
import Details from './components/Details';
import "./App.css";
import "./index.css";
import CreateEvent from "./components/createEvent";
import EventDetails from "./components/eventDetails";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/event" element={<Event />}></Route>
        <Route path="/details" element={<Details />}></Route>
        <Route path="/details" element={<Details />}></Route>
        <Route path="/createEvent" element={<CreateEvent />}></Route>
        <Route path="/eventDetails" element={<EventDetails />}></Route>


      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
