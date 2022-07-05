import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import "./home.scss";
import Featured from "./components/featured/Featured";
import Chart from "./components/chart/Chart";
import BarChart from "./components/chart/BarChart";
import PieChart from "./components/chart/PieChart";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div> </div>

        <div className="charts">
          <Chart title="Last 6 Months (Revenue)" aspect={3 / 1} />
          <BarChart title="Last 6 Months (Revenue)" aspect={3 / 1} />
        </div>

        <div className="widgets">
          <Featured />
          <Featured />
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
