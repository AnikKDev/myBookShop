import React, { useEffect } from "react";
// import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
// import auth from "../../../firebase.init";
import { BsGoogle } from "react-icons/bs";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import jwt_decode from "jwt-decode";
const Signin = () => {
  const navigate = useNavigate();
  // const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  /* useEffect(() => {
    if (user) {
      toast.success("Logged in as " + user?.user?.displayName);

      navigate("/");
    }
  }, [user]);
  if (error) {
    toast.error("Something went wrong. Please try again!");
  } */

  /* if (loading) {
    return <p>loading...</p>;
  } */

  const provider = new GoogleAuthProvider();

  const handleGoogleSignin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credential(result);
        // const token = credential.accessToken;
        const user = result.user;

        //
        console.log(credential);
        console.log(user.getIdToken());

        /*  const token = credential.idToken.user.accessToken;
        const decoded = jwt_decode(token);
        console.log(decoded);
        console.log(user); */
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Welcome to MyBookShop. Please Register To Continue With Your Buys...
          </p>
          <button
            onClick={handleGoogleSignin}
            className="btn border-3 border-primary text-primary bg-base-100 font-extrabold hover:border-primary"
          >
            <span className="mx-2">
              <BsGoogle size={20} />
            </span>{" "}
            Login With Google
          </button>
        </div>
      </div>
    </div>
  );
};
{
  /* <div>
  <button onClick={() => signInWithGoogle()}>Google Login</button>
</div> */
}

export default Signin;
