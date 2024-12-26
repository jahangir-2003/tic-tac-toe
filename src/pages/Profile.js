import React, { useState } from "react";
import AdminPanel from "../Components/AdminPanel";
import LoginForm from "../Components/LoginForm";

const Profile = () => {
  const [isLogin, setIslogin] = useState(false);
  let content;

  if (isLogin) {
    content = <AdminPanel />;
  } else content = <LoginForm />;

  return (
    <>
      {content}
      <button onClick={() => setIslogin(!isLogin)}>set login</button>

      {isLogin ? <AdminPanel /> : <LoginForm />}
      <button onClick={() => setIslogin(!isLogin)}>
        set login conditional
      </button>
    </>
  );
};

export default Profile;
