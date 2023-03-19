

import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Signup() {
	const googleAuth = () => {
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/google/callback`,
			"_self"
		);
	};
	
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}></h1>
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

export default Signup;