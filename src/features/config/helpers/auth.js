import { firebaseAuth, googleProvider } from "../constants";
export function loginWithGoogle() {
  return firebaseAuth().signInWithRedirect(googleProvider);
}
export function logout() {
  return firebaseAuth().signOut();
}
