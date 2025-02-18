import Header from "./components/Header";
import Discussions from "./components/Home/Discussions";
import Posts from "./components/Home/Posts";
import SidePanel from "./components/Home/SidePanel";


export default function Home() {
  return (
    <>
      <Header />
      <SidePanel />
      <Posts />
      <Discussions />
    </>
  );
}
