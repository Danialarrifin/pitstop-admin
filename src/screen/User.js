import { AiFillCalendar, AiFillCar } from 'react-icons/ai'
import { HiCog, HiUsers } from "react-icons/hi";
import Footer from 'components/Footer'
import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'
import React, {Button} from 'react';

export default function User() {
  
  return (
    <>
      <Navbar />
      <main>
        <div className="flex">
          <Sidebar />
          <div className='p-5 w-full'>
            <h1 className='text-xl mb-2 font-bold'>Users</h1>
            <div className='overlow-auto rounded-lg shadow'>
              <div className='overflow-auto rounded-lg shadow hidden md:block'>
                <table className='w-full'>
                  <thead className='bg-gray-50 border-b-2 border-gray-200'>
                    <tr>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>ID </th>
                      <th className='p-3 w-10  text-sm font-semibold tracking-wide text-left'>EMAIL</th>
                      <th className='p-3 w-10 text-sm font-semibold tracking-wide text-left'>NAME</th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>PASSWORD </th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>CREATED AT</th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>UPDATED AT </th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'> </th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'> </th>

                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-100'>
                    <tr className='bg-white'>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>1</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>danialarrifin29@testing.com</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Muhamad Danial</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>12234456</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>2023/2/8</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>2023/14/5</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>skhfiu</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>2023/14/5</td>

                    </tr>
                    <tr className='bg-gray'>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>2</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>haiqalgerrard@testing.com</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Haiqal gerrard</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>178902</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>2023/2/8</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>2023/14/10</td>
                    </tr>
                    <tr className='bg-white'>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>3</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>ammarocan11@testing.com</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Muhamad rocan</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>12239349456</td>
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
                    <div>Muhamad Danial</div>                   
                  </div>
                  <div>danialarrifin29@testing.com</div>
                  <div className='text-gray-500'>2023/3/4</div>
                  <div className='text-gray-500'>2023/7/6</div>
                </div>
                <div className='bg-white space-y-4-3 p-4 rounded-lg shadow'>
                  <div className='flex items-center space-x-2 text-sm'>
                    <div>
                      <a href='#' className='text-lue-500 font-bold hover:underline'>2</a>
                    </div>
                    <div>Haiqal Gerrard</div>                
                  </div>
                  <div>haiqalgerrard@testing.com</div>
                  <div className='text-gray-500'>2023/3/4</div>
                  <div className='text-gray-500'>2023/7/6</div>
                </div>
                <div className='bg-white space-y-4-3 p-4 rounded-lg shadow'>
                  <div className='flex items-center space-x-2 text-sm'>
                    <div>
                      <a href='#' className='text-lue-500 font-bold hover:underline'>3</a>
                    </div>
                    <div>Muhamad Rocan</div>
                  </div>
                  <div>ammarocan11@testing.com</div>
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
