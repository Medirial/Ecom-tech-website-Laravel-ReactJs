import React from 'react';

import { FaWallet } from 'react-icons/fa'
import BarChart from '../../charts/BarChart';
import LineChart from '../../charts/LineChart';
import DoughnutChart from '../../charts/DoughnutChart';
import RadarChart from '../../charts/RadarChart';



const DashboardContent = () => {
    return (
        <div className=''>
            {/* start banner */}
            <div className=' m-7 p-6'>
                <div className='text-4xl text-gray-800 font-medium'>Bonjour , Administrator</div>
                <div className='mt-4'>Voici les statistiques d'aujourd'hui, passez une bonne journée.






</div>
            </div>
            {/* end banner */}

            <div className='flex m-7 space-x-6'>
                <div className='w-1/2 bg-white p-4'>
                    <span className='text-amber-400 text-2xl'><FaWallet /></span>

                    <h3 className="uppercase my-3 font-bold text-sm text-gray-400">Ventes</h3>
                    <div className='flex items-center'>
                        <span className="font-bold text-3xl mr-2">$24,780</span>
                        <span className="bg-green-500 rounded-full p-1 text-white text-sm font-bold align-text-top">+49%</span>
                    </div>
                    <BarChart />
                </div>
                <div className='w-1/2 bg-white p-4'>
                    <span className='text-amber-400 text-2xl'><FaWallet /></span>

                    <h3 className="uppercase my-3 font-bold text-sm text-gray-400">Ventes</h3>
                    <div className='flex items-center'>
                        <span className="font-bold text-3xl mr-2">$24,780</span>
                        <span className="bg-red-500 rounded-full p-1 text-white text-sm font-bold align-text-top">-9%</span>
                    </div>
                    <LineChart />
                </div>
            </div>


            <div className='flex m-7 space-x-6'>
                <div className='w-1/2 bg-white p-4'>
                    <span className='text-amber-400 text-2xl'><FaWallet /></span>

                    <h3 className="uppercase my-3 font-bold text-sm text-gray-400">Ventes</h3>
                    <div className='flex items-center'>
                        <span className="font-bold text-3xl mr-2">$24,780</span>
                        <span className="bg-green-500 rounded-full p-1 text-white text-sm font-bold align-text-top">+49%</span>
                    </div>
                    <DoughnutChart />
                </div>
                <div className='w-1/2 bg-white p-4'>
                    <span className='text-amber-400 text-2xl'><FaWallet /></span>

                    <h3 className="uppercase my-3 font-bold text-sm text-gray-400">Ventes</h3>
                    <div className='flex items-center'>
                        <span className="font-bold text-3xl mr-2">$24,780</span>
                        <span className="bg-red-500 rounded-full p-1 text-white text-sm font-bold align-text-top">-9%</span>
                    </div>
                    <RadarChart />
                </div>
            </div>
        </div>
    );
};


export default DashboardContent;