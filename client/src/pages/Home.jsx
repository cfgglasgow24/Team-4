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
      <div className="flex flex-col items-center">

          <button className="p-3 bg-white mt-10 text-4xl rounded-lg text-black border border-red-500 w-64">
            <Link to={"https://www.dbscotland.org.uk"}>Learn</Link>
          </button>

            <button className="p-3 bg-white mt-10 text-4xl rounded-lg text-black border border-red-500 w-64">
              <Link to={"/quiz1"}>Choice Quest</Link>
            </button>

            <button className="p-3 bg-white  mt-10 text-4xl rounded-lg text-black border border-red-500 w-64">
              <Link to={"/webcam"}>Gesture Quest</Link>
            </button>

            <button className="p-3 bg-white  mt-10 text-4xl rounded-lg mb-4 text-black border border-red-500 w-64">
              <Link to={"/How-To"}>How</Link>
            </button>
      </div>
    </div>
  );
};

export default Home;
