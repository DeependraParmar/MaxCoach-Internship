import './App.scss'
import { FaAngleDown, FaAngleRight, FaRegUserCircle, FaSearch } from 'react-icons/fa' 
import image from './assets/girl.jpg'

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

      <section className="hero">
        <main className="hero_description">
          <p className="heading">Distant learning for further expansion</p>
          <p className="description">Learning is a life-long journey that in fact we never find the terminate stop. Stop searching, enjoy the process.</p>
            <a href="">Download Free Guide</a>
          <p className='description para'>Have questions? <span> <a href="/free-form">Get Free Form <FaAngleRight /></a></span></p>
        </main>
        <main className="hero_image">
          <img src={image} alt="" />
        </main>
      </section>
    </>
  )
}

export default App
