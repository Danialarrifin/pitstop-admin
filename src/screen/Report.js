import React, { useEffect, useState } from 'react';
import { AiFillCalendar, AiFillCar } from 'react-icons/ai'
import { HiCog, HiUsers } from "react-icons/hi";
import Footer from 'components/Footer'
import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'
import axios from 'utils/axios'


export default function Report() {
  const [transaction, setTransaction] = useState([]);

  const getAllTransaction = async () => {
    try {
      const response = await axios.get(
        "/transactions",
        {
          headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
          }
        }
      );
      console.log('response transaction', response.data);
      if (response.data.length > 0)
        setTransaction(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    getAllTransaction();
  }, []);
  return (
    <>
      <Navbar />
      <main>
        <div className="flex">
          <Sidebar />
          <div className='p-5 w-full'>
            <h1 className='text-xl mb-2 font-bold'>Transactions Report</h1>
            <div className='overlow-auto rounded-lg shadow'>
              <div className='overflow-auto rounded-lg shadow hidden md:block'>
                <table className='w-full'>
                  <thead className='bg-gray-50 border-b-2 border-gray-200'>
                    <tr>
                      <th className='p-3 text-sm font-semibold tracking-wide text-left'>APPOINTMENT ID</th>
                      <th className='p-3 text-sm font-semibold tracking-wide text-left'>REMARKS</th>
                      <th className='p-3 text-sm font-semibold tracking-wide text-left'>PAID STATUS </th>
                      <th className='p-3 text-sm font-semibold tracking-wide text-left'>SERVICES STATUS</th>
                      <th className='p-3 text-sm font-semibold tracking-wide text-left'>GRAND TOTAL </th>
                      <th className='p-3 text-sm font-semibold tracking-wide text-left'>CREATED AT </th>
                      <th className='p-3 text-sm font-semibold tracking-wide text-left'>UPDATED AT </th>
                      <th className='p-3 text-sm font-semibold tracking-wide text-left'>EDIT & DELETE </th>


                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-100'>
                    {transaction.map(item => (
                    <tr className='bg-white'>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{item.appointment_id}</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{item.remarks}</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{item.is_paid}</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{item.status}</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{item.final_price}</td>
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
                {transaction.map(item => (
                <div className='bg-white space-y-3 p-4 rounded-lg shadow'>
                  <div className='flex items-center space-x-2 text-sm'>
                    <div className='font-bold'>{item.appointment_id}</div>
                  </div>
                  <div>{item.remarks}</div>
                  <div>{item.is_paid}</div>
                  <div>{item.status}</div>
                  <div>{item.final_price}</div>
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
