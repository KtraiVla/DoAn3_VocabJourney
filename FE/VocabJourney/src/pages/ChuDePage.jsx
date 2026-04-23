import Navbar from "../components/common/Navbar.jsx";
import TopicHero from "../components/ChuDe/TopicHero.jsx";
import SearchBar from "../components/ChuDe/SearchBar.jsx";

export default function ChuDePage() {
  return (
    <div className="topic-page">
        <Navbar></Navbar>
        <TopicHero></TopicHero>
        <SearchBar></SearchBar>
    </div>
  )
  
  
  
}
