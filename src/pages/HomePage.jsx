import { Search } from 'lucide-react'
import React from 'react'
import RecipeCard from '../components/RecipeCard'

const HomePage = () => {
  return (
    <div className='bg-[#faf9fb] p-10 flex-1'>
      <div className='max-w-screen-lg mx-auto'>
        <form>
          <label className="input shadow-md flex gap-2 items-center">
            <Search size={24} />
            <input type="text"
              className='text-sm md:text-md grow'
              placeholder='what do you want to cook today!' />
          </label>
        </form>

        <h1 className='md:text-5xl mt-4 font-bold text-3cl'>
          Recommended Recipes
        </h1>

        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-light">
          Popular choice
        </p>

        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* 1st recipe  */}
         <RecipeCard />
         <RecipeCard />
         <RecipeCard />
         <RecipeCard />
         <RecipeCard />
         <RecipeCard />
         <RecipeCard />
         <RecipeCard />
        </div>
      </div>
    </div>
  )
}

export default HomePage