import React, { useState } from 'react'
import Results from './Results';


const Search = () => {
  const [ingredient, setIngredient] = useState("");
  const [name, setName] = useState("");

  return (
    <div>
        <form className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
                <label className="block font-mono text-2xl leading-6 text-sky-900">Ingredients</label>
                <div className="mt-2">
                    <input type="text" className="block w-full bg-transparent text-center rounded-md border-0 py-1.5 text-stone-900 font-mono shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => {
                        setIngredient(e.target.value);
                    }}/>
                </div>
            </div>

            <div className="sm:col-span-2">
                <label className="block font-mono text-2xl leading-6 text-sky-900">Type</label>
                <div className="mt-2">
                    <input type="text" className="block w-full bg-inherit text-center rounded-md border-0 py-1.5 text-stone-900 font-mono shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => {
                        setName(e.target.value)
                    }}/>
                </div>
            </div>
        </form>
        
        <Results name={name} ingredient={ingredient}/>
    </div>     
  )
}

export default Search