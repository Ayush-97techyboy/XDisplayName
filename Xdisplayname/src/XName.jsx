import React, { useState } from "react";
import styles from "./XName.module.css";
export default function XName() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  //   const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
      setFirstNameError("");
    } else {
      setLastName(value);
      setLastNameError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
      setIsSubmitted(true);
      //   setShowPopup(false);
    } else {
      if (!firstName && !lastName) {
        setFirstNameError("First Name is required");
        setLastNameError("Last Name is required");
      } else if (!firstName) {
        setFirstNameError("First Name is required");
      } else {
        setLastNameError("Last Name is required");
      }
      //   setShowPopup(true);
    }
  };

  return (
    <div>
      {/* <h1>{name}</h1>
      <button onClick={() => setName("XName")}>Reset</button> */}
      <form onSubmit={handleSubmit}>
        <h1>Full Name Display</h1>
        {/* <div className="sec"> */}
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          name="firstName"
          className={styles.inputfield}
          value={firstName}
          placeholder="First Name"
          onChange={handleChange}
        />
        {/* </div> */}
        {firstNameError && <div className={styles.popup}>{firstNameError}</div>}
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            name="lastName"
            className={styles.inputfield}
            value={lastName}
            placeholder="Last Name"
            onChange={handleChange}
          />
        </div>
        {lastNameError && <div className={styles.popup}>{lastNameError}</div>}
        {/* <div> */}
        <button type="submit" disabled={isSubmitted}>
          Submit
        </button>
        {/* </div> */}
      </form>
      {/* {showPopup && (
        <div className={styles.popup}>
          First Name and Last Name are required
        </div>
      )} */}
      {isSubmitted && <h2>Full Name: {fullName}</h2>}
    </div>
  );
}

//   console.log("Full Name: ", fullName);
//   console.log("First Name: ", firstName);
//   console.log("Last Name: ", lastName);
//   console.log("isSubmitted: ", isSubmitted);
//   console.log("Event: ", e.target);
//   console.log("Event: ", e.target.value);
//   console.log("Event: ", e.target.name);
