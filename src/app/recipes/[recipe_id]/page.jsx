import Image from "next/image";
import { fetchRecipesbyid } from "@/library/api-call";
export default async function RecipeDetail({ params }) {
    const id = params.recipe_id
    const recipe = await fetchRecipesbyid(id)

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                    src={recipe.image}
                    alt={recipe.name}
                    width={800}
                    height={500}
                    className="w-full h-80 object-cover"
                />
                <div className="p-6 space-y-4">
                    <h1 className="text-3xl font-bold text-gray-800">{recipe.name}</h1>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                        <span className="bg-gray-100 px-3 py-1 rounded-full">{recipe.cuisine}</span>
                        <span className="bg-gray-100 px-3 py-1 rounded-full">{recipe.difficulty}</span>
                        {recipe.mealType.map(type => (
                            <span key={type} className="bg-gray-100 px-3 py-1 rounded-full">{type}</span>
                        ))}
                    </div>
                    <div className="flex items-center gap-4 text-yellow-500">
                        <span className="text-xl font-semibold">⭐ {recipe.rating}</span>
                        <span className="text-sm text-gray-500">({recipe.reviewCount} reviews)</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-700">Ingredients</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                {recipe.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-700">Instructions</h2>
                            <ol className="list-decimal list-inside text-gray-600 space-y-1">
                                {recipe.instructions.map((step, index) => (
                                    <li key={index}>{step}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div><strong>Prep Time:</strong> {recipe.prepTimeMinutes} min</div>
                        <div><strong>Cook Time:</strong> {recipe.cookTimeMinutes} min</div>
                        <div><strong>Servings:</strong> {recipe.servings}</div>
                        <div><strong>Calories/Serving:</strong> {recipe.caloriesPerServing} kcal</div>
                    </div>
                    <div className="flex gap-2 mt-4">
                        {recipe.tags.map(tag => (
                            <span key={tag} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">#{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}