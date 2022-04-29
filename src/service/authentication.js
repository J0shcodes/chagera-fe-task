import auth from "../config/firebase-config";
import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { githubProvider } from "../config/authMethod";

const authenticate = () => {
  signInWithPopup(auth, githubProvider)
    .then((result) => {
      console.log(result);
      const credentials = GithubAuthProvider.credentialFromResult(result);
      const token = credentials.accessToken;
      console.log(token);
    })
    .catch((error) => {
      // Handle errors here
      const errorCode = error.code;
      const errorMessage = error.message;

      // The email of the users account
      const email = error.email;

      // The Auth credential type that was used
      const credentials = GithubAuthProvider.credentialFromError(error);
    });
};

export default authenticate;
