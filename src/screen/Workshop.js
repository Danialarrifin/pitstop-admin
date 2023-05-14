import { AiFillCalendar, AiFillCar } from 'react-icons/ai'
import { HiCog, HiUsers } from "react-icons/hi";
import Footer from 'components/Footer'
import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'


export default function Workshop() {

  return (
    <>
      <Navbar />
      <main>
        <div className="flex">
          <Sidebar />
          <div className='p-5 w-full'>
            <h1 className='text-xl mb-2 font-bold'>Workshops</h1>
            <div className='overlow-auto rounded-lg shadow'>
              <div className='overflow-auto rounded-lg shadow hidden md:block'>
                <table className='w-full'>
                  <thead className='bg-gray-50 border-b-2 border-gray-200'>
                    <tr>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>ID </th>
                      <th className='p-3 w-10 text-sm font-semibold tracking-wide text-left'>NAME</th>
                      <th className='p-3 w-10 text-sm font-semibold tracking-wide text-left'>CONTACT</th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>ADDRESS </th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>ROAD ASSISTANCE </th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>CREATED AT</th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>UPDATED AT </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-100'>
                    <tr className='bg-white'>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>1</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Serv Malaysia</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>03-2746374</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>No 12 Jalan MULTIMEDIA, Cyberjaya</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>YES</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>2023/2/8</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>2023/14/5</td>
                    </tr>
                    <tr className='bg-gray'>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>2</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>POMEN</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>016-9926463</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>No 12 Jalan baru, Kepong</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>NO</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>2023/2/8</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>2023/14/10</td>
                    </tr>
                    <tr className='bg-white'>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>3</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Bridgestone</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>03-0983432</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>No 45 Jalan baru, Bangi</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>YES</td>
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
                    <div className='font-bold'>Serv Malaysia</div>
                  </div>
                  <div>03-2746374</div>
                  <div>No 12 Jalan MULTIMEDIA, Cyberjaya</div>
                  <div className='text-gray-500'>2023/3/4</div>
                  <div className='text-gray-500'>2023/7/6</div>
                </div>
                <div className='bg-white space-y-3 p-4 rounded-lg shadow'>
                  <div className='flex items-center space-x-2 text-sm'>
                    <div>
                      <a href='#' className='text-lue-500 font-bold hover:underline'>2</a>
                    </div>
                    <div className='font-bold'>POMEN</div>
                  </div>
                  <div>016-9926463</div>
                  <div>No 12 Jalan baru, Kepong</div>
                  <div className='text-gray-500'>2023/3/4</div>
                  <div className='text-gray-500'>2023/7/6</div>
                </div>
                <div className='bg-white space-y-3 p-4 rounded-lg shadow'>
                  <div className='flex items-center space-x-2 text-sm'>
                    <div>
                      <a href='#' className='text-lue-500 font-bold hover:underline'>3</a>
                    </div>
                    <div className='font-bold'>Bridgestone</div>
                  </div>
                  <div>03-0983432</div>
                  <div>No 45 Jalan baru, Bangi</div>
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
