import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 flex flex-col justify-center text-white bg-gray-800">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Recipe Collection</h1>
            <p className="text-base md:text-lg mb-4">
              Discover a wide variety of mouthwatering recipes curated for home cooks and food lovers of all levels.
              Whether you're craving something sweet, savory, quick, or gourmet—we've got you covered.
            </p>
            <p className="text-base md:text-lg mb-4">
              Our recipes are crafted with care and tested to perfection. Powered by <span className="font-semibold">Next.js</span> and styled with <span className="font-semibold">Tailwind CSS</span>,
              the experience is as smooth as your favorite buttercream frosting.
            </p>
            <p className="text-base md:text-lg">
              Dive into our collection, try something new, and bring joy to your kitchen one recipe at a time!
            </p>
          </div>
          <div className="bg-amber-300">
            <Image
              src="/3.jpg"
              width={200}
              height={200}
              className="w-full h-full object-cover"
              alt="Delicious Food"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
