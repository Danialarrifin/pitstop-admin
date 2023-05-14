import React, {useEffect, useState} from 'react';
import { AiFillCalendar, AiFillCar } from 'react-icons/ai'
import { HiCog, HiUsers } from "react-icons/hi";
import Footer from 'components/Footer'
import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'
import axios from 'utils/axios'

export default function Vehicle() {
  const [Data,setData] =useState([]);
  const GetVehicleData = () => {
    //here will get all vehicle data
    const url = 'http://localhost:3001/vehicle'
    axios.get(url)
    .then(response=>{
      const result = response.data;
      const {status, message, data}= result;
      if(status !== 'SUCCESS'){
        alert(message,status)
      }
      else{
        setData(data)
        console.log(data)
      }
    })
    .catch(err =>{
      console.log(err)
    })
  }
  return (
    <>
      <Navbar />
      <main>
        <div className="flex">
          <Sidebar />
          <div className='p-5 w-full'>
            <h1 className='text-xl mb-2 font-bold'>Vehicles</h1>
            <div className='overlow-auto rounded-lg shadow'>
              <div className='overflow-auto rounded-lg shadow hidden md:block'>
                <table className='w-full'>
                  <thead className='bg-gray-50 border-b-2 border-gray-200'>
                    <tr>
                      <th className='p-3 w-10  text-sm font-semibold tracking-wide text-left'>MANUFACTURER</th>
                      <th className='p-3 w-10 text-sm font-semibold tracking-wide text-left'>MODEL</th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>PLATE NUMBER </th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>IMAGE PATH </th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>CREATED AT</th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>UPDATED AT </th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'></th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'> </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-100'>
                          {Data.map((item) =>
                          <tr key={item._id}>
                            <td>{item.manufacturer}</td>
                            <td>{item.model}</td>
                            <td>{item.plate_num}</td>
                            <td>{item.image_path}</td>
                            <td>{item.created_at}</td>
                            <td>{item.updated_at}</td>
                          </tr>
                          )}
                  </tbody>
                </table>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2  gap-4 md:hidden'>
                <div className='bg-white space-y-3 p-4 rounded-lg shadow'>
                  <div className='flex items-center space-x-2 text-sm'>
                    <div>
                      <a href='#' className='text-lue-500 font-bold hover:underline'>1</a>
                    </div>
                    <div>Perodua Myvi</div>
                    <div>VHL9808</div>
                  </div>
                  <div className='text-gray-500'>2023/3/4</div>
                  <div className='text-gray-500'>2023/7/6</div>
                </div>
                <div className='bg-white space-y-4-3 p-4 rounded-lg shadow'>
                  <div className='flex items-center space-x-2 text-sm'>
                    <div>
                      <a href='#' className='text-lue-500 font-bold hover:underline'>2</a>
                    </div>
                    <div>Suzuki Swift</div>
                    <div>WWF1738</div>
                  </div>
                  <div className='text-gray-500'>2023/3/4</div>
                  <div className='text-gray-500'>2023/7/6</div>
                </div>
                <div className='bg-white space-y-4-3 p-4 rounded-lg shadow'>
                  <div className='flex items-center space-x-2 text-sm'>
                    <div>
                      <a href='#' className='text-lue-500 font-bold hover:underline'>3</a>
                    </div>
                    <div>BMW X5</div>
                    <div>VIP3015</div>
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
