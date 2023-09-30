import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from "../../Firebage/Firbage";



const Login = () => {
    const auth = getAuth(app);
    const provider = new  GoogleAuthProvider ();

    
    const hedelgoogleSignIn = () => {
        console.log("you no who i am")
    }


    return (
        <div>
             <button onClick={hedelgoogleSignIn} >Login Now</button>
        </div>
    );
};

export default Login;