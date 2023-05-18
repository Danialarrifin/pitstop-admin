import React, { useEffect, useState } from 'react';
import { AiFillCalendar, AiFillCar } from 'react-icons/ai'
import { HiCog, HiUsers } from "react-icons/hi";
import Footer from 'components/Footer'
import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'
import axios from 'utils/axios'


export default function Workshop() {
  const [workshop, setWorkshop] = useState([]);

  const getAllWorkshop = async () => {
    try {
      const response = await axios.get(
        "/workshops",
        {
          headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
          }
        }
      );
      console.log('response workshop', response.data);
      if (response.data.length > 0)
        setWorkshop(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    getAllWorkshop();
  }, []);
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
                      <th className='p-3 w-10 text-sm font-semibold tracking-wide text-left'>NAME</th>
                      <th className='p-3 w-10 text-sm font-semibold tracking-wide text-left'>CONTACT</th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>ADDRESS </th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>ROAD ASSISTANCE </th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>CREATED AT</th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>UPDATED AT </th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>EDIT & DELETE </th>

                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-100'>
                    {workshop.map(item => (
                    <tr className='bg-white'>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{item.name}</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{item.contact_num}</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{item.address_id}</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{item.road_assistance_enabled}</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{item.created_at}</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{item.updated_at}</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'><button class="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded mr-3">
                          Edit
                        </button><button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Delete
                          </button></td>
                    </tr>
                    ))
                    }
                  </tbody>
                </table>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2  gap-4 md:hidden'>
                {workshop.map(item => (
                <div className='bg-white space-y-3 p-4 rounded-lg shadow'>
                  <div className='flex items-center space-x-2 text-sm'>
                    <div>
                      <a href='#' className='text-lue-500 font-bold hover:underline'>1</a>
                    </div>
                    <div className='font-bold'>{item.name}</div>
                  </div>
                  <div>{item.contact_num}</div>
                  <div>{item.address_id}</div>
                  <div className='text-gray-500'>{item.created_at}</div>
                  <div className='text-gray-500'>{item.updated_at}</div>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>

    </>
  )
}
