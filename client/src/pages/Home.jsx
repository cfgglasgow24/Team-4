import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container min-h-screen bg-black">
      <div className="flex justify-center items-center pt-12">
        <img src="https://www.dbscotland.org.uk/wp-content/uploads/2023/06/website-dbsnewlogo-transparent-face.png" alt="logo" height={171} width={130}/>
      </div>
      <div className="homePageContents">
        <h1 className="text-white text-center text-bold mt-4 text-5xl">DEAFBLIND SCOTLAND</h1>
      </div>
      <div className="flex justify-center items-center">
        <ul>
          <li>
          <button className="p-3 bg-red-600  mt-10 text-4xl rounded-lg text-white">
            <Link to={"https://www.dbscotland.org.uk"}>LEARN</Link>
          </button>
          </li>
          <li>
            <button className="p-3 bg-red-600 mt-10 text-4xl rounded-lg text-white">
              <Link to={"/quiz1"}>QUIZ 1</Link>
            </button>
          </li>
          <li>
            <button className="p-3 bg-red-600  mt-10 text-4xl rounded-lg text-white">
              <Link to={"/webcam"}>QUIZ 2</Link>
            </button>
          </li>
          <li>
            <button className="p-3 bg-red-600  mt-10 text-4xl rounded-lg mb-4 text-white">
              <Link to={"/How-To"}>HOW</Link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
``
