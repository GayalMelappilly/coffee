import Header from "./components/Header";
import Banner from "./components/Banner/Banner";
import Discussions from "./components/Home/Discussions";
import Posts from "./components/Home/Posts";
import SidePanel from "./components/Home/SidePanel";


export default function Home() {
  return (
    <>
      <Header />
      {/* <Banner /> */}
      <div className="flex">
        <div className="hidden sm:block sm:w-2/12">
          <SidePanel />
        </div>
        <Posts />
      </div>
      {/* <Discussions /> */}
    </>
  );
}
