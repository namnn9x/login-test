import {
 createUserWithEmailAndPassword,
 sendEmailVerification,
 sendPasswordResetEmail,
 signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebase";

export const signInUser = (email: string, pasword: string) => {
 return signInWithEmailAndPassword(auth, email, pasword);
};

export const signUpUser = (email: string, password: string) => {
 return createUserWithEmailAndPassword(auth, email, password);
};

export const verifyEmailUser = async () => {
 auth.currentUser && (await sendEmailVerification(auth.currentUser));
};

export const sendResetPassword = (email: string) => {
 return sendPasswordResetEmail(auth, email)
}