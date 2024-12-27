import React, { useState } from "react";
import AdminPanel from "./Components/AdminPanel";
import LoginForm from "./Components/LoginForm";
import Button from "../../Components/Button";

const Profile = () => {
  const [isLogin, setIslogin] = useState(false);
  let content;

  if (isLogin) {
    content = <AdminPanel />;
  } else content = <LoginForm />;

  return (
    <>
      {content}
      <Button title={"switch page"} onClick={() => setIslogin(!isLogin)} />

      {isLogin ? <AdminPanel /> : <LoginForm />}
      <Button
        onClick={() => setIslogin(!isLogin)}
        title={"conditional switch"}
      />
    </>
  );
};

export default Profile;
