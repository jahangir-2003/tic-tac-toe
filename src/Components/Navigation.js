import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        height: 40,
        backgroundColor: "black",
        color: "white",
      }}
    >
      <Link
        style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
        to="/"
      >
        React js
      </Link>
      <Link
        style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
        to="tic-tac-toe"
      >
        Game
      </Link>
      <Link
        style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
        to="mock-up"
      >
        Read Json
      </Link>
    </div>
  );
};

export default Navigation;
