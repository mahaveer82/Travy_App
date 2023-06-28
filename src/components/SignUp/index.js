import styles from "./styles.module.css";

const Signup = () => {
	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome To Travy</h1>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							className={styles.input}
						/>
						<button type="submit" className={styles.green_btn}>
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
