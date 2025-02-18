import React,{useState} from 'react'

const DisplayName = () => {
	const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();
  
    if (!trimmedFirstName || !trimmedLastName) {
      setFullName(""); // Ensure full name is not displayed
      return;
    }
  
    setFullName(`${trimmedFirstName} ${trimmedLastName}`);
  };


  return (
	 <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <br /><br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <br /><br />
        <button type="submit">Submit</button>
      </form>
      {fullName && <h2>Full Name: {fullName}</h2>}
    </div>
  )
}

export default DisplayName;