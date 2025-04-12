// 13:-



// import React, { useState } from "react";

// function App() {
//   // 1. (i) Create a React component without JSX
//   const HelloReactNoJSX = React.createElement("h1", null, "Hello, React!");

//   // 1. (ii) Modify the above code to use JSX
//   const HelloReactJSX = <h1>Hello, React!</h1>;

//   // 1. (iii) Modify the above component to display a message stored in a variable
//   const message = "Hello, React!";

//   // 2. Create a component that renders a list of three fruits dynamically
//   const fruits = ["Apple", "Banana", "Cherry"];

//   // 3. Create a component that displays a styled message using inline CSS
//   const styledMessage = {
//     color: "blue",
//     fontSize: "20px",
//     fontWeight: "bold",
//   };

//   // 4. Create a component that displays the sum of squares of two numbers
//   const num1 = 3, num2 = 4;

//   // 5. Create a component that displays "Good Morning" if isMorning is true, otherwise "Good Evening."
//   const isMorning = true;

//   // 6. Create a component that displays the current day of the week dynamically
//   const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   const currentDay = days[new Date().getDay()];

//   // 7. Create a component that checks whether a given number is prime
//   const isPrime = (num) => {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   };

//   // 8. Temperature Converter (Celsius to Fahrenheit and vice versa)
//   const [celsius, setCelsius] = useState("");
//   const [fahrenheit, setFahrenheit] = useState("");

//   // 9. Reverse a string and check if it's a palindrome
//   const [text, setText] = useState("React");
//   const reversed = text.split("").reverse().join("");
//   const isPalindrome = text.toLowerCase() === reversed.toLowerCase();

//   // 10. Generate a random number between 1 and 100
//   const [randomNumber, setRandomNumber] = useState(null);

//   // 11. Check if a given year is a leap year
//   const year = 2024;
//   const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

//   // 12. Create a UserGreeting component that takes firstName and lastName props
//   const firstName = "John";
//   const lastName = "Doe";

//   return (
//     <div>
//       {/* 1. (i) Display "Hello, React!" without JSX */}
//       <div>{HelloReactNoJSX}</div>

//       {/* 1. (ii) Display "Hello, React!" using JSX */}
//       {HelloReactJSX}

//       {/* 1. (iii) Display stored message */}
//       <h1>{message}</h1>

//       {/* 2. Render a list of three fruits dynamically */}
//       <ul>
//         {fruits.map((fruit, index) => (
//           <li key={index}>{fruit}</li>
//         ))}
//       </ul>

//       {/* 3. Styled message using inline CSS */}
//       <p style={styledMessage}>This is a styled message!</p>

//       {/* 4. Display sum of squares of two numbers */}
//       <p>Sum of squares: {num1 * num1 + num2 * num2}</p>

//       {/* 5. Display "Good Morning" if isMorning is true, otherwise "Good Evening" */}
//       <h1>{isMorning ? "Good Morning" : "Good Evening"}</h1>

//       {/* 6. Display the current day of the week dynamically */}
//       <h1>Today is {currentDay}</h1>

//       {/* 7. Check whether a given number is prime */}
//       <p>7 is {isPrime(7) ? "a Prime" : "not a Prime"} number</p>

//       {/* 8. Temperature Converter */}
//       <input
//         type="number"
//         value={celsius}
//         onChange={(e) => {
//           setCelsius(e.target.value);
//           setFahrenheit(e.target.value ? (e.target.value * 9) / 5 + 32 : "");
//         }}
//         placeholder="Celsius"
//       />
//       <input
//         type="number"
//         value={fahrenheit}
//         onChange={(e) => {
//           setFahrenheit(e.target.value);
//           setCelsius(e.target.value ? ((e.target.value - 32) * 5) / 9 : "");
//         }}
//         placeholder="Fahrenheit"
//       />

//       {/* 9. Reverse String and Check Palindrome */}
//       <p>Reverse: {reversed} | {isPalindrome ? "Palindrome" : "Not a Palindrome"}</p>

//       {/* 10. Generate and display a random number on button click */}
//       <button onClick={() => setRandomNumber(Math.floor(Math.random() * 100) + 1)}>
//         Generate Random Number
//       </button>
//       {randomNumber !== null && <p>Random Number: {randomNumber}</p>}

//       {/* 11. Check If a Year is a Leap Year */}
//       <p>{year} is {isLeap ? "a Leap Year" : "not a Leap Year"}</p>

//       {/* 12. User Greeting with first and last name */}
//       <h1>Hello, {firstName} {lastName}!</h1>
//     </div>
//   );
// }

// export default App;











// 14:-




// Q1)


// import React from "react";
// import srcImage from "./Images/myimg.jpg";

// function App() {
//   return (
//     <div>
//       <h2>Image from Public Folder</h2>
//       <img src={`${process.env.PUBLIC_URL}/Images/myimg.jpg`} alt="Public Folder Image" width="300" />

//       <h2>Image from Src Folder</h2>
//       <img src={srcImage} alt="Src Folder Image" width="300" />
//     </div>
//   );
// }

// export default App;



// Q2)
// import React, { useState } from "react";

// function App() {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     city: "",
//     webServer: "",
//     role: "",
//     signOn: [],
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     if (type === "checkbox") {
//       setFormData((prev) => ({
//         ...prev,
//         signOn: checked
//           ? [...prev.signOn, value]
//           : prev.signOn.filter((item) => item !== value),
//       }));
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(JSON.stringify(formData, null, 2));
//   };

//   const handleReset = () => {
//     setFormData({
//       username: "",
//       password: "",
//       city: "",
//       webServer: "",
//       role: "",
//       signOn: [],
//     });
//   };

//   return (
//     <div style={{ width: "350px", margin: "auto", fontFamily: "Arial" }}>
//       <h2 style={{ textAlign: "center" }}>Novell Services Login</h2>
//       <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//           <label>Username:</label>
//           <input type="text" name="username" value={formData.username} onChange={handleChange} required style={{ width: "200px" }} />
//         </div>

//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//           <label>Password:</label>
//           <input type="password" name="password" value={formData.password} onChange={handleChange} required style={{ width: "200px" }} />
//         </div>

//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//           <label>City of Employment:</label>
//           <input type="text" name="city" value={formData.city} onChange={handleChange} required style={{ width: "200px" }} />
//         </div>

//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//           <label>Web Server:</label>
//           <select name="webServer" value={formData.webServer} onChange={handleChange} required style={{ width: "208px" }}>
//             <option value="">-- Choose a server --</option>
//             <option value="server1">Server 1</option>
//             <option value="server2">Server 2</option>
//           </select>
//         </div>

//         <label>Please specify your role:</label>
//         <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}>
//           <label><input type="radio" name="role" value="Admin" checked={formData.role === "Admin"} onChange={handleChange} /> Admin</label>
//           <label><input type="radio" name="role" value="Engineer" checked={formData.role === "Engineer"} onChange={handleChange} /> Engineer</label>
//           <label><input type="radio" name="role" value="Manager" checked={formData.role === "Manager"} onChange={handleChange} /> Manager</label>
//           <label><input type="radio" name="role" value="Guest" checked={formData.role === "Guest"} onChange={handleChange} /> Guest</label>
//         </div>

//         <label>Single Sign-on to the following:</label>
//         <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}>
//           <label><input type="checkbox" name="signOn" value="Mail" checked={formData.signOn.includes("Mail")} onChange={handleChange} /> Mail</label>
//           <label><input type="checkbox" name="signOn" value="Payroll" checked={formData.signOn.includes("Payroll")} onChange={handleChange} /> Payroll</label>
//           <label><input type="checkbox" name="signOn" value="Self-service" checked={formData.signOn.includes("Self-service")} onChange={handleChange} /> Self-service</label>
//         </div>

//         <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
//           <button type="submit">Login</button>
//           <button type="button" onClick={handleReset}>Reset</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default App;






// Q3)

// seperate files in components 