import Image from 'next/image';
import Link from 'next/link';

export default function RecipeCard({ name, image, rating, cookTimeMinutes, prepTimeMinutes, id }) {
    return (
        <Link href={`/recipes/${id}`}> <div className="max-w-sm bg-white shadow-lg hover:scale-105 duration-100 cursor-pointer rounded-2xl overflow-hidden p-4">
            <div className="w-full h-48 relative mb-4">
                <Image
                    src={image}
                    alt="Delicious Pasta"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>

            <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                    {/* 4 full stars + 1 empty */}
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.566-.955L10 0l2.946 5.955 6.566.955-4.756 4.635 1.122 6.545z" /></svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.566-.955L10 0l2.946 5.955 6.566.955-4.756 4.635 1.122 6.545z" /></svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.566-.955L10 0l2.946 5.955 6.566.955-4.756 4.635 1.122 6.545z" /></svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.566-.955L10 0l2.946 5.955 6.566.955-4.756 4.635 1.122 6.545z" /></svg>
                    <svg className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.566-.955L10 0l2.946 5.955 6.566.955-4.756 4.635 1.122 6.545z" /></svg>
                </div>
                <span className="ml-2 text-sm text-gray-600">{rating}</span>
            </div>

            <div className="flex justify-between text-sm text-gray-600">
                <div><strong>Prep:</strong>{prepTimeMinutes}</div>
                <div><strong>Cook:</strong>{cookTimeMinutes}</div>
            </div>
        </div>
        </Link>
    );
}
