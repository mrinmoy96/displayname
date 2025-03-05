import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if both fields are filled before setting submitted to true
    if (first && last) {
      setSubmitted(true);
    } else {
      setSubmitted(false); // Explicitly handle invalid submission
    }
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={first}
            onChange={(e) => setFirst(e.target.value.trim())}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={last}
            onChange={(e) => setLast(e.target.value.trim())}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {submitted && <div>Full Name: {`${first} ${last}`}</div>}
    </div>
  );
}

export default App;