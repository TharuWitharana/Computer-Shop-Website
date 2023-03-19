// import React from 'react'
// import Layout from '../../components/Layout/Layout'

// const Register = () => {
//   return (
//     <Layout title={"Register- com shop app"}>
//       <div className="register"> 
//          <h5>Registration</h5>
//           {/* <form>
//   <div class="mb-3">
//     <label for="exampleInputEmail1">Email</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    
//   </div>
//   <div class="mb-3">
//     <label for="exampleInputPassword1">Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter password"></input>
//   </div>

//   <button type="submit" class="btn btn-primary">Submit</button>
// </form>  */}





//       </div>
//     </Layout> 
//   )
// }

// export default Register

import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Register() {
	const googleAuth = () => {
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/google/callback`,
			"_self"
		);
	};
	
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Sign Up Form</h1>
			<div className={styles.form_container}>
				<div className={styles.left}>
					<img className={styles.img} src="./images/login.jpg" alt="login" />
				</div>
				<div className={styles.right}>
					<h2 className={styles.from_heading}>Members Sign Up</h2>
					<input type="text" className={styles.input} placeholder="Username" />
					<input type="text" className={styles.input} placeholder="Email" />
					<input type="password" className={styles.input} placeholder="Password" />
					<button className={styles.btn}>Sign Up</button>
					<p className={styles.text}>or</p>
					<button className={styles.google_btn} onClick={googleAuth}>
						<img src="./images/google.png" alt="google icon" />
						<span>Sing up with Google</span>
					</button>
					<p className={styles.text}>
						Already Have Account ? <Link to="/signup">Sing Up</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Register;