import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddContact from "./components/Counter/AddContact/AddContact";
import ContactList from "./components/Counter/ContactList/ContactList";
import Counter from "./components/Counter/Counter";
import Header from "./components/Counter/Header/Header";
import CounterContextProvider from "./CounterContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <CounterContextProvider>
          <Header />
          <Routes>
            <Route path="/counter" element={<Counter />} />
            <Route path="/" element={<ContactList />} />

            <Route path="/add" element={<AddContact />} />
          </Routes>
        </CounterContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
