import React from 'react'
import Axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const Information = () => {
    let { id } = useParams();

    const {data} = useQuery(["recipe"], async () => {
        const res = await Axios.get(`http://127.0.0.1:5000/recipe/${id}`);
        return res.data;
    });

    console.log(data?.data)
    
  return ( 
    <div className=" mx-24 pt-12 max-w-sm p-6 bg-transparent font-mono">
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-900">{data?.data.name}</h1>
        <p className=' text-2xl font-mono'>Ingredients</p>
        <p className="mb-3 font-normal text-Stone-700">{data?.data.ingredients}</p>
        <p className=' text-2xl font-mono'>Description</p>
        <p className="mb-3 font-normal text-Stone-700">{data?.data.description}</p>
        <Link to={`${data?.data.url}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            For more information
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </Link>
    </div>
  )
}

export default Information