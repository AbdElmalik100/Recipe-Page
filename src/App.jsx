import { useState } from "react"

function App() {
  const [instructions, setInstructions] = useState([
    {
      title: "Beat the eggs",
      desc: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture."
    },
    {
      title: "Heat the pan",
      desc: "Place a non-stick frying pan over medium heat and add butter or oil."
    },
    {
      title: "Cook the omelette",
      desc: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface."
    },
    {
      title: "Add fillings (optional)",
      desc: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette."
    },
    {
      title: "Fold and serve",
      desc: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate."
    },
    {
      title: "Enjoy",
      desc: "Serve hot, with additional salt and pepper if needed."
    },
  ])

  const [nutritions, setNutritions] = useState([
    {
      name: "Calories",
      value: "277kcal",
    },
    {
      name: "Carbs",
      value: "0g",
    },
    {
      name: "Protein",
      value: "20g",
    },
    {
      name: "Fat",
      value: "22g",
    },
  ])

  return (
    <main className='min-h-screen bg-Stone-100 grid place-items-center'>
      <div className="box md:rounded-3xl md:p-8 md:my-10 bg-white md:w-[750px] w-full">
        <img className="md:rounded-2xl w-full" src="/images/image-omelette.jpeg" alt="Omelette Image" />
        <div className="max-md:p-8">
          <h1 className="text-4xl font-medium text-Stone-900 my-8">Simple Omelette Recipe</h1>
          <p className="text-Stone-600 font-Outfit">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
          <div className="preparation p-6 bg-Rose-50 font-Outfit rounded-xl mt-8">
            <h2 className="text-Rose-800 font-bold mb-3 text-lg">Preparation time</h2>
            <ul className="list-disc flex flex-col gap-2 px-8">
              <li className="text-Stone-600">
                <span className="font-bold">Total: </span>
                Approximately 10 minutes Preparation
              </li>
              <li className="text-Stone-600">
                <span className="font-bold">Preparation: </span>
                5 minutes
              </li>
              <li className="text-Stone-600">
                <span className="font-bold">Cooking: </span>
                5 minutes
              </li>
            </ul>
          </div>
          <div className="ingredients mt-8 border-Stone-150">
            <h2 className="text-Brown-800 font-medium mb-4 text-3xl">Ingredients</h2>
            <ul className="list-disc px-8 flex flex-col gap-2 font-Outfit marker:text-Rose-800">
              <li className="text-Stone-600">
                2-3 large eggs
              </li>
              <li className="text-Stone-600">
                Salt, to taste
              </li>
              <li className="text-Stone-600">
                Pepper, to taste
              </li>
              <li className="text-Stone-600">
                1 tablespoon of butter or oil
              </li>
              <li className="text-Stone-600">
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </div>
          <div className="instructions mt-8 pt-8 mb-8 pb-8 border-y  border-Stone-150">
            <h2 className="text-Brown-800 font-medium mb-4 text-3xl">Instructions</h2>
            <ul className="flex flex-col gap-2 px-6 font-Outfit marker:text-Rose-800 marker:font-bold">
              {
                instructions.map((instruction, index) => (
                  <li key={index} className="text-Stone-600 flex gap-4">
                    <span className="text-Rose-800 font-bold">{index + 1}.</span>
                    <span>
                      <span className="font-bold">{instruction.title}: </span> {instruction.desc}
                    </span>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="nutrition mt-8 border-Stone-150">
            <h2 className="text-Brown-800 font-medium mb-4 text-3xl">Nutrition</h2>
            <p className="text-Stone-600 font-Outfit">The table below shows nutritional values per serving without the additional fillings</p>
            <div className="table w-full font-Outfit mt-4 [&>div:not(:last-child)]:border-b [&>div:not(:last-child)]:border-Stone-150">
              {
                nutritions.map((nutrition, index) => (
                  <div key={index} className="flex p-3 gap-3">
                    <span className="text-Stone-600 flex-1/2 ms-4">{nutrition.name}</span>
                    <span className="text-Brown-800 font-bold flex-1/2">{nutrition.value}</span>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
