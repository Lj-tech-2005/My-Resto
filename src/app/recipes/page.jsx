import React from 'react'
import { fetchRecipes } from '@/library/api-call';
import RecipeCard from '@/components/RecipeCard';

export default async function page() {

    const recipes = await fetchRecipes();

    return (
        <section className='max-w-[1360px] mx-auto'>
            <h2 className='text-3xl ms-9 mt-5 font-bold'>Over All Recipes</h2>
            <div className='grid sm:grid-cols-2 justify-center md:grid-cols-4 gap-5 p-5'>

                {

                    recipes.map((recipe, index) => {

                        return <RecipeCard  key={index} id={recipe.id} name={recipe.name} image={recipe.image} prepTimeMinutes={recipe.prepTimeMinutes} cookTimeMinutes={recipe.cookTimeMinutes} rating={recipe.rating} />

                    })

                }

            </div>
        </section>
    )
}
