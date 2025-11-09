import { useState } from "react";
import HelloWorld from "./HelloWorld";
import ClickCounter from "./ClickCounter";
import ItemList from "./ItemList";
import UserForm from "./UserForm";
import "./styles.css";

function App() {
  const [selectedTask, setSelectedTask] = useState(null);

  function renderTask() {
    switch (selectedTask) {
      case "hello":
        return <HelloWorld />;
      case "counter":
        return <ClickCounter />;
      case "list":
        return <ItemList items={["Apple", "Banana", "Cherry"]} />;
      case "form":
        return <UserForm />;
      default:
        return <p>Please select a task to begin.</p>;
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Tasks Menu</h1>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setSelectedTask("hello")}>HelloWorld</button>
        <button onClick={() => setSelectedTask("counter")}>ClickCounter</button>
        <button onClick={() => setSelectedTask("list")}>ItemList</button>
        <button onClick={() => setSelectedTask("form")}>UserForm</button>
      </div>
      {renderTask()}
    </div>
  );
}

export default App;
