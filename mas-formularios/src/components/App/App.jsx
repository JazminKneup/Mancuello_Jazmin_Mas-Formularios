import { useState } from "react";
import Form from "../Form/Form";
import Results from "../Results/Results";
import "../App/App.css";

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  return (
    <div className="App">
      <Form inputs={state} setInputs={setState} errors={errors} setErrors={setErrors} />
      <Results data={state} />
    </div>
  );
}

export default App;
