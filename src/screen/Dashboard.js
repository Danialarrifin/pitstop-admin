import { AiFillCalendar, AiFillCar } from 'react-icons/ai'
import { HiCog, HiUsers } from "react-icons/hi";
import Footer from 'components/Footer'
import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'


export default function Dashboard() {
  return (
    <>
      <Navbar />
      <main>
        <div className="flex">

          <Sidebar />

          <div className="w-full">
            {/* <header className="bg-white shadow">
              <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
              </div>
            </header> */}
            <div className='mx-10 mt-10'>
              <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
                <div className="flex flex-row justify-center items-center w-full px-4 py-5 bg-white rounded-lg shadow">
                 <HiUsers className='w-28 h-28'/>

                  <div className='ml-5'>
                    <div className="text-sm font-medium text-gray-500 truncate">
                      Total users
                    </div>
                    <div className="mt-1 text-3xl font-semibold text-gray-900">
                      12,00
                    </div>
                  </div>
                </div>
                <div className="flex flew-row justify-center items-center w-full px-4 py-5 bg-white rounded-lg shadow">
                 <HiCog className='w-28 h-28'/>
                  <div className='ml-5'>
                    <div className="text-sm font-medium text-gray-500 truncate">
                      Workshops
                    </div>
                    <div className="mt-1 text-3xl font-semibold text-gray-900">
                      90
                    </div>
                  </div>
                </div>
                <div className="flex felx-row justify-center items-center w-full px-4 py-5 bg-white rounded-lg shadow">
                  <AiFillCar className='w-28 h-28' />
                  <div className='ml-5'>
                    <div className="text-sm font-medium text-gray-500 truncate">
                      Vehicles
                    </div>
                    <div className="mt-1 text-3xl font-semibold text-gray-900">
                      500
                    </div>
                  </div>
                </div>
                <div className="flex flew-row justify-center items-center w-full px-4 py-5 bg-white rounded-lg shadow">
                  <AiFillCalendar className='w-28 h-28' />
                  <div className='ml-5'>
                    <div className="text-sm font-medium text-gray-500 truncate">
                      Appointments
                    </div>
                    <div className="mt-1 text-3xl font-semibold text-gray-900">
                      150
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>

    </>
  )
}
