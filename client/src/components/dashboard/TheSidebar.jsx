import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillDashboard } from 'react-icons/ai';
import { MdAddCircle, MdUpdate, MdViewList } from 'react-icons/md';
import { BiLogOutCircle } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/actions/auth-actions';
import { FaChartLine } from 'react-icons/fa'; // Icône de ligne de statistiques


const TheSidebar = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);

    const logoutUser = async () => {
        await dispatch(logout(token));
    };

    return (
        <div className='flex flex-col h-full px-6 bg-black'>
            <div className='mb-12 mt-8 flex flex-col justify-center items-center'>
                <span className='block text-5xl text-white'><FaChartLine /></span>
                <h1 className='uppercase text-3xl tracking-wider font-bold py-2 text-center'>
                    <span className='text-white'>MEDI</span>
                    <span className='text-white'>STORE</span>
                </h1>
            </div>
            <div className='flex flex-col text-white font-normal tracking-wider text- space-y-3'>
                <Link to='/admin/dashboard' className='border-b-2 pb-3 border-gray-600 hover:text-gray-400 transition duration-300'>
                    <span className='inline-flex mr-3'><AiFillDashboard /></span>
                    Dashboard
                </Link>
                <Link to='/admin/dashboard/products' className='border-b-2 pb-3 border-gray-600 hover:text-gray-400 transition duration-300'>
                    <span className='inline-flex mr-3'><MdViewList /></span>
                    Liste des Produits
                </Link>
                <Link to='/admin/dashboard/addproduct' className='border-b-2 pb-3 border-gray-600 hover:text-gray-400 transition duration-300'>
                    <span className='inline-flex mr-3'><MdAddCircle /></span>
                    Ajouter un Product
                </Link>
                <Link to='/admin/dashboard/updateproducts' className='border-b-2 pb-3 border-gray-600 hover:text-gray-400 transition duration-300'>
                    <span className='inline-flex mr-3'><MdUpdate /></span>
                    MOdifier un Produit
                </Link>
            </div>
            <div className='mt-auto mb-8'>
                <button className='px-4 py-2 bg-gray-800 text-white rounded-md flex items-center shadow-lg hover:bg-gray-700 transition duration-300' onClick={logoutUser}>
                    <span className='inline-flex mr-3 font-normal'><BiLogOutCircle /></span>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default TheSidebar;
