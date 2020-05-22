// import React, { useState } from "react"
// import axios from "axios"

// const Form = () => {
//   const [formData, setFormData] = useState({
//     interest1: "",
//     interest2: "",
//     interest3: "",
//   })

//   const { interest1, interest2, interest3 } = formData
//   const onChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value })

//   const onSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }

//       // const body = JSON.stringify(newUser)
//       const res = await axios.post(`/users/:user_id/facts`, config)
//       console.log(res.data)
//     } catch (err) {
//       console.error(err.response.data)
//     }
//   }

//   return (
//     <div className="loginPage">
//       {/* <h1 className="screenHeader">Update Password</h1> */}
//       <form onSubmit={(e) => onSubmit(e)}>
//         <div>
//           <input
//             type="text"
//             placeholder="Enter Full Name"
//             name="interestOne"
//             value={interest1}
//             onChange={(e) => onChange(e)}
//             required
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             placeholder="Enter Email"
//             name="interestTwo"
//             value={interest2}
//             onChange={(e) => onChange(e)}
//             required
//           />
//           {/* <small>
//             This site uses Gravatar so if you want a profile image, use a
//             Gravatar email
//           </small> */}
//         </div>
//         <div>
//           <input
//             type="text"
//             placeholder="Create Password"
//             name="interestThree"
//             minLength="6"
//             value={interest3}
//             onChange={(e) => onChange(e)}
//             required
//           />
//         </div>
//         <input className="submitForm" type="submit" value="Update" />
//       </form>
//     </div>
//   )
// }

// export default Form

import React, { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const { name, email, password, password2 } = formData
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    if (password !== password2) {
      console.log("Passwords do not match")
    } else {
      const newUser = {
        name,
        email,
        password,
      }

      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        }

        const body = JSON.stringify(newUser)

        const res = await axios.post("/users/:user_id/facts", body, config)
        console.log(res.data)
      } catch (err) {
        console.error(err.response.data)
      }
    }
  }

  return (
    <div className="loginPage">
      NEEDS TO BE CONVERTED TO UPDATE PASSWORD
      <h1 className="screenHeader">Update Password</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <input
            type="text"
            placeholder="Enter your favorite dog"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your favorite hobby"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
          {/* <small>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small> */}
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your favorite food"
            name="password"
            minLength="6"
            value={password}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <Link to="/" className="goToRegisterPage">
          Already have an account? Login
        </Link>
        <br />
        <input className="loginButton" type="submit" value="Update" />
      </form>
    </div>
  )
}

export default Form
