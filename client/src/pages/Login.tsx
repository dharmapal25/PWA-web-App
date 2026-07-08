import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react'
import { auth, provider } from '../services/auth/Firebase';

function Login() {

    const [User, setUser] = useState<any>(null);

    // Google Login
    async function loginHandler() {
        try {
            await signInWithPopup(auth, provider);
            // onAuthStateChanged automatically handle
        } catch (error) {
            console.error("Login Error:", error);
        }
    }
    
    async function logoutHandler() {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error("Logout Error:", error);
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            try {
                if (currentUser) {
                    setUser(currentUser);

                    // Firebase JWT Token
                    const token = await currentUser.getIdToken();
                    console.log("Firebase Token:", token);

                } else {
                    setUser(null);
                }

            } catch (error) {
                console.error("Backend Error:", error)
            };
            return () => unsubscribe();
        })

    }, []);

    return (
        <div>

            {(User) ?
                <button onClick={logoutHandler} >Logout</button>
                :
                <button onClick={loginHandler} >Login with Google</button>
            }

        </div>
    )
}

export default Login