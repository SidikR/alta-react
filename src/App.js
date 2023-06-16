import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/global/layout";
import HomeBanner from "./components/pages/home/home-banner";
import HomeTestimoni from "./components/pages/home/home-testimoni";

function App() {
  return (
    <div className="App">
      <Layout>
        <HomeBanner />
        <HomeTestimoni />
      </Layout>
    </div>
  );
}

export default App;
