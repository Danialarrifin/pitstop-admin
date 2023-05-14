import { AiFillCalendar, AiFillCar } from 'react-icons/ai'
import { HiCog, HiUsers } from "react-icons/hi";
import Footer from 'components/Footer'
import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'


export default function Report() {
  return (
    <>
      <Navbar />
      <main>
        <div className="flex">
          <Sidebar />
        </div>
        <Footer />
      </main>

    </>
  )
}
