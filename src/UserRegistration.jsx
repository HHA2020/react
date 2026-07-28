import { useRef, useState } from "react";

const hobbies = [
  {
    value: "music",
    name: "Music",
  },
  {
    value: "movie",
    name: "Movies",
  },
  {
    value: "plastic-model",
    name: "Plastic Model",
  },
];

const genders = [
  {
    value: "male",
    name: "Male",
  },
  {
    value: "female",
    name: "Female",
  },
  {
    value: "others",
    name: "Others",
  },
];

function UserRegistration() {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [department, setDepartment] = useState("accountant");
  const [role, setRole] = useState("general-staff");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const genderRef = useRef([]);
  const hobbiesRef = useRef([]);

  const onUsernameChange = (event) => {
    setUsername((prev) => event.target.value);
  }
  const onFirstnameChange = (event) => {
    setFirstname((prev) => event.target.value);
  }
  const onLastnameChange = (event) => {
    setLastname((prev) => event.target.value);
  }

  const onDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const onRoleChange = (event) => {
    setRole(event.target.value);
  };

  const displayGenders = () => {
    return genders.map((gender, index) => {
      return (
        <div key={index} style={{ textAlign: "start" }}>
          <input
            style={{ marginRight: "50px" }}
            type="radio"
            id={`gender-${index}`}
            name="gender"
            value={gender.value}
            ref={(el) => (genderRef.current[index] = el)}
          />
          {gender.name}
        </div>
      );
    });
  };

  const displayHobbies = () => {
    return hobbies.map((hobby, index) => {
      return (
        <div key={index} style={{ textAlign: "start" }}>
          <input
            style={{ marginRight: "20px" }}
            type="checkbox"
            id={`hobby-${index}`}
            name="hobby"
            value={hobby.value}
            ref={(el) => (hobbiesRef.current[index] = el)}
          />
          {hobby.name}
        </div>
      );
    });
  };

  const onSubmit = () => {
    const selectedGender = genderRef.current.find((gender) => gender.checked);
    const selectedHobbies = hobbiesRef.current.filter((hobby) => hobby.checked);
    const usernameValue = username;
    const firstnameValue = firstname;
    const lastnameValue = lastname;
    setIsSubmitted(true);
    console.log("Submitted Data:");
    console.log("Username:", usernameValue);
    console.log("Firstname:", firstnameValue);
    console.log("Lastname:", lastnameValue);
    console.log("Selected Gender:", selectedGender ? selectedGender.value : "None");
    console.log("Selected Hobbies:", selectedHobbies.map((hobby) => hobby.value));
  };

  const onReset = () => {
    setUsername("");
    setFirstname("");
    setLastname("");
    setDepartment("accountant");
    setRole("general-staff");
    setIsSubmitted(false);

    genderRef.current.forEach((gender) => {
      if (gender) gender.checked = false;
    });

    hobbiesRef.current.forEach((hobby) => {
      if (hobby) hobby.checked = false;
    });
  };

  return (
    <div>
      <h1>User Registration</h1>
      <hr />
      <div className="input-form" style={{ maxWidth: "700px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
          <label htmlFor="username" style={{ width: "140px", textAlign: "left" }}>Username</label>
          <input type="text" id="username" value={username} onChange={onUsernameChange} style={{ flex: 1, padding: "6px 8px" }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
          <label htmlFor="firstname" style={{ width: "140px", textAlign: "left" }}>Firstname</label>
          <input type="text" id="firstname" value={firstname} onChange={onFirstnameChange} style={{ flex: 1, padding: "6px 8px" }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
          <label htmlFor="lastname" style={{ width: "140px", textAlign: "left" }}>Lastname</label>
          <input type="text" id="lastname" value={lastname} onChange={onLastnameChange} style={{ flex: 1, padding: "6px 8px" }} />
        </div>
        <div style={{ display: "flex", gap: "16px", marginBottom: "12px" }}>
          <label htmlFor="gender-1" style={{ width: "140px", textAlign: "left", paddingTop: "4px" }}>Gender</label>
          <div style={{ flex: 1 }}>{displayGenders()}</div>
        </div>
        <div style={{ display: "flex", gap: "16px", marginBottom: "12px" }}>
          <label htmlFor="hobby-1" style={{ width: "140px", textAlign: "left", paddingTop: "4px" }}>Hobbies</label>
          <div style={{ flex: 1 }}>{displayHobbies()}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
          <label htmlFor="department" style={{ width: "140px", textAlign: "left" }}>Department</label>
          <select id="department" name="department" value={department} onChange={onDepartmentChange} style={{ flex: 1, padding: "6px 8px" }}>
            <option value="accountant">Accountant</option>
            <option value="senior accountant">Senior Accountant</option>
            <option value="payroll officer">Payroll Officer</option>
          </select>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
          <label htmlFor="role" style={{ width: "140px", textAlign: "left" }}>Job Position</label>
          <select id="role" name="role" value={role} onChange={onRoleChange} style={{ flex: 1, padding: "6px 8px" }}>
            <option value="general-staff">General Staff</option>
            <option value="developer">Developer</option>
            <option value="system-analsyt">System Analyst</option>
          </select>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <input type="submit" value="Submit" onClick={onSubmit} />
        <button type="button" onClick={onReset} style={{ marginLeft: "10px" }}>
          Reset
        </button>
      </div>
      <hr style={{ marginTop: "50px" }} />
      {isSubmitted && (
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
            <span style={{ width: "140px", textAlign: "left", fontWeight: "bold" }}>Username</span>
            <span style={{ flex: 1 }}>{username}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
            <span style={{ width: "140px", textAlign: "left", fontWeight: "bold" }}>Firstname</span>
            <span style={{ flex: 1 }}>{firstname}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
            <span style={{ width: "140px", textAlign: "left", fontWeight: "bold" }}>Lastname</span>
            <span style={{ flex: 1 }}>{lastname}</span>
          </div>
          <div style={{ display: "flex", gap: "16px", marginBottom: "12px" }}>
            <span style={{ width: "140px", textAlign: "left", fontWeight: "bold" }}>Gender</span>
            <span style={{ flex: 1 }}>{genderRef.current.find((gender) => gender.checked)?.value || "None"}</span>
          </div>
          <div style={{ display: "flex", gap: "16px", marginBottom: "12px" }}>
            <span style={{ width: "140px", textAlign: "left", fontWeight: "bold" }}>Hobbies</span>
            <span style={{ flex: 1 }}>{hobbiesRef.current.filter((hobby) => hobby.checked).map((hobby) => hobby.value).toString()}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
            <span style={{ width: "140px", textAlign: "left", fontWeight: "bold" }}>Department</span>
            <span style={{ flex: 1 }}>{department || "None"}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
            <span style={{ width: "140px", textAlign: "left", fontWeight: "bold" }}>Job Position</span>
            <span style={{ flex: 1 }}>{role || "None"}</span>
          </div>
        </div>
      )}

    </div>
  );
}

export default UserRegistration;
