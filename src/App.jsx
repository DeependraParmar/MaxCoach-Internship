import './App.scss'
import { FaAngleDown, FaRegUserCircle, FaSearch } from 'react-icons/fa' 

function App() {

  return (
    <>
      <section className="navbar">
        <main className="logo">
          <span>Max</span>Coach  
        </main>
        <main className="navlinks">
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/pages">Pages <FaAngleDown /></a></li>
            <li><a href="/courses">Courses <FaAngleDown /></a></li>
            <li><a href="/events">Event <FaAngleDown /></a></li>
            <li><a href="/blogs">Blog <FaAngleDown /></a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </main>
        <main className="search">
            <a href="/profile"><FaRegUserCircle /> </a>
            <div>
            <input type="text" placeholder="Search..." />
            <FaSearch />
            </div>
        </main>
      </section>


    </>
  )
}

export default App
