import React from 'react'
import Image from 'next/image'
import RecipeCard from '@/components/RecipeCard';
import { fetchRecipes } from '@/library/api-call';
import Slider from '@/components/Slider';
import Secondslider from '@/components/Secondslider';

export default async function page() {

  const recipes = await fetchRecipes();
  const FeatureRecipe = recipes.slice(0, 4)
  const MostlikeRecipe = recipes.slice(4, 8)
  const topratingRecipe = recipes.slice(8, 12)
  const sliderimage = recipes.slice(12, 20)
  return (
    <div>

      <section>
        <div className='md:grid max-w-[1360px] mx-auto grid-cols-2 p-8'>

          <div className='p-5'>
            <h1 className='text-3xl xl:text-5xl font-bold text-amber-400'>🍽️ Discover Delicious Recipes from Around the World</h1>
            <p className='xl:text-xl mt-5'>
              Craving something new? From comforting classics to bold global flavors, explore our handpicked recipes that bring taste, tradition, and creativity to your kitchen. Whether you're a beginner or a seasoned chef, we’ve got the perfect dish for every occasion. Start cooking your next favorite meal today!</p>

          </div>
          <Slider  data={sliderimage}/>

        </div>
      </section>
      <section className='max-w-[1360px] mx-auto'>
        <h2 className='text-3xl ms-9 mt-5 font-bold'>Feature Recipes</h2>
        <div className='grid sm:grid-cols-2 justify-center md:grid-cols-4 gap-5 p-5'>
          {

            FeatureRecipe.map((recipe, index) => {

              return <RecipeCard key={index} id={recipe.id} name={recipe.name} image={recipe.image} prepTimeMinutes={recipe.prepTimeMinutes} cookTimeMinutes={recipe.cookTimeMinutes} rating={recipe.rating} />

            })


          }

        </div>
      </section>

      <section>
        <Image src="/1.jpg" width={900} height={100} className='w-full  my-20' alt='banner'/>
      </section>

      <section className='max-w-[1360px] mx-auto'>
        <h2 className='text-3xl ms-9 mt-5 font-bold'>Most liked Recipes</h2>
        <Secondslider/>
      
      </section>

      <section>
        <Image src="/2.jpg" width={900} height={100} className='w-full  my-20' alt='banner'/>
      </section>

      <section className='mb-15 max-w-[1360px] mx-auto'>
        <h2 className='text-3xl ms-9 mt-5 font-bold'>Top rating Recipes</h2>
        <div className='grid sm:grid-cols-2 justify-center md:grid-cols-4 gap-5 p-5'>
          {

            topratingRecipe.map((recipe, index) => {

              return <RecipeCard key={index} id={recipe.id} name={recipe.name} image={recipe.image} prepTimeMinutes={recipe.prepTimeMinutes} cookTimeMinutes={recipe.cookTimeMinutes} rating={recipe.rating} />

            })

          }

        </div>
      </section>
       

    </div>
  )
}

