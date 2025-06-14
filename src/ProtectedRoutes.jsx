import { useEffect } from "react";

const loggedin = true;
export default function ProtectedRoutes({ children }) {
  //checks if the user has a token

  useEffect(() => {}, []);
  return <> {loggedin ? children : <p>loading</p>} </>;
}
