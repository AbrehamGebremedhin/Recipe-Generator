import React from 'react'
import Axios from 'axios'
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const Results = ({name, ingredient}) => {
  const {data} = useQuery(["recipe"], async () => {
      const res = await Axios.get(`http://127.0.0.1:5000/recipe?name[regex]=${name}&ingredients[regex]=${ingredient}`);
      return res.data;
  });

  return (
    <div className='parent space-y-4 pt-1'>
      {data?.data.map((recipe: any)=>    
          <div key={recipe._id} className="child max-w-sm p-6 bg-inherit backdrop-blur-xl font-mono border border-stone-800 rounded-lg shadow text-zinc-800 dark:border-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{recipe.name}</h5>

              <p className="mb-3 font-normal text-Stone-700">{recipe.description}</p>
              <Link to={`/Information/${recipe._id}`} state={recipe._id}  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </Link>
          </div>
      )}
    </div>
  )
}

export default Results