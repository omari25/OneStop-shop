import { useNavigate } from "react-router-dom";

function Home( {user, setUser} ) {
  const navigate = useNavigate();
  // console.log(user.first_name)
  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        navigate("/login");
      }
    });
  }

  return (
    <div>
        <button onClick={handleLogout} >logout</button>
    </div>
  );
}

export default Home;
