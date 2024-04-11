
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
    return (
      <>
        <h1>Home</h1>
        <Link to="/webcam">Webcam</Link>
      </>
    )
  };
  
  export default Home;