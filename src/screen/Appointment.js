import { AiFillCalendar, AiFillCar } from 'react-icons/ai'
import { HiCog, HiUsers } from "react-icons/hi";
import Footer from 'components/Footer'
import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'


export default function Appointment() {

  return (
    <>
      <Navbar />
      <main>
        <div className="flex">
          <Sidebar />
          <div className='p-5 w-full'>
            {/* <AiFillCalendar className='w-15 h-15'/> */}
            <h1 className='text-xl mb-2 font-bold'>Appointments</h1>
            <div className='overlow-auto rounded-lg shadow'>
              <div className='overflow-auto rounded-lg shadow hidden md:block'>
                <table className='w-full'>
                  <thead className='bg-gray-50 border-b-2 border-gray-200'>
                    <tr>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>ID </th>
                      <th className='p-3 w-10  text-sm font-semibold tracking-wide text-left'>DATE</th>
                      <th className='p-3 w-10 text-sm font-semibold tracking-wide text-left'>TIME SLOT</th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>VEHICLE </th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>SERVICE </th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>STATUS </th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>CREATED AT</th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>UPDATED AT </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-100'>
                    <tr className='bg-white'>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>1</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>23/3/2023</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>11.00-12.30</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Perodua Myvi</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Flat Tyre, Oil Change</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                        <span className='p-1.5 text-xs font-medium uppercase tracker-wider text-green-800 bg-green-200 rounded-lg bg-opacity-40'>Accept</span>
                      </td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>2023/2/8</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>2023/14/5</td>
                    </tr>
                    <tr className='bg-gray'>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>2</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>29/3/2023</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>4.30-6.00</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Suzuki Swift</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Engine Overhaul</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                        <span className='p-1.5 text-xs font-medium uppercase tracker-wider text-red-800 bg-red-200 rounded-lg bg-opacity-40'>Reject</span>
                      </td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>2023/2/8</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>2023/14/10</td>
                    </tr>
                    <tr className='bg-white'>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>3</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>15/4/2023</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>10.00-12.00</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>BMW X5</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Brakepad Change</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                        <span className='p-1.5 text-xs font-medium uppercase tracker-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-40'>Pending</span>
                      </td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>2023/5/8</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>2023/9/5</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2  gap-4 md:hidden'>
                <div className='bg-white space-y-3 p-4 rounded-lg shadow'>
                  <div className='flex items-center space-x-2 text-sm'>
                    <div>
                      <a href='#' className='text-lue-500 font-bold hover:underline'>1</a>
                    </div>
                    <div className='font-bold'>Perodua Myvi</div>
                  </div>
                  <div>Flat Tyre, Oil Change</div>
                  <div className='flex items-center space-x-2 text-sm'>
                    <div>23/3/2023 </div>
                    <div>11.00-12.30 </div>
                  </div>
                  <div>
                    <span className='p-1.5 text-xs font-medium uppercase tracker-wider text-green-800 bg-green-200 rounded-lg bg-opacity-40'>Accept</span>
                  </div>
                  <div className='text-gray-500'>2023/3/4</div>
                  <div className='text-gray-500'>2023/7/6</div>
                </div>
                <div className='bg-white space-y-3 p-4 rounded-lg shadow'>
                  <div className='flex items-center space-x-2 text-sm'>
                    <div>
                      <a href='#' className='text-lue-500 font-bold hover:underline'>2</a>
                    </div>
                    <div className='font-bold'>Suzuki Swift </div>
                  </div>
                  <div>Engine Overhaul</div>
                  <div className='flex items-center space-x-2 text-sm'>
                    <div>29/3/2023 </div>
                    <div>4.30-6.00 </div>
                  </div>
                  <div>
                    <span className='p-1.5 text-xs font-medium uppercase tracker-wider text-red-800 bg-red-200 rounded-lg bg-opacity-40'>Reject</span>
                  </div>
                  <div className='text-gray-500'>2023/3/4</div>
                  <div className='text-gray-500'>2023/7/6</div>
                </div>
                <div className='bg-white space-y-3 p-4 rounded-lg shadow'>
                  <div className='flex items-center space-x-2 text-sm'>
                    <div>
                      <a href='#' className='text-lue-500 font-bold hover:underline'>3</a>
                    </div>
                    <div className='font-bold'>BMW X5</div>
                  </div>
                  <div>Brakepad Change</div>
                  <div className='flex items-center space-x-2 text-sm'>
                    <div>23/3/2023 </div>
                    <div>10.00-12.00 </div>
                  </div>
                  <div>
                    <span className='p-1.5 text-xs font-medium uppercase tracker-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-40'>Pending</span>
                  </div>
                  <div className='text-gray-500'>2023/3/4</div>
                  <div className='text-gray-500'>2023/7/6</div>
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
