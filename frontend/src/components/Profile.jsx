import React, { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const { setUserEmail } = useContext(AuthContext);
  setUserEmail(user?.email);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
