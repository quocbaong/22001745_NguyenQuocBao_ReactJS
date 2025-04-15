import React from "react";
import imgRecipes1 from "../assets/3_Data/Lab_02_b/Italian-style tomato.png";
import imgRecipes2 from "../assets/3_Data/Lab_02_b/Vegetable and shrimp spaghetti.png";
import imgRecipes3 from "../assets/3_Data/Lab_02_b/Lotus delight salad.png";
import imgRecipes4 from "../assets/3_Data/Lab_02_b/Snack cakes.png";
import imgBg from "../assets/3_Data/Lab_01/Image 73.png";
import imgAvatar from "../assets/3_Data/Lab_02/avatar.png";
import imgVideo1 from "../assets/3_Data/Lab_02_b/Salad with cabbage.png";
import imgVideo2 from "../assets/3_Data/Lab_02_b/Bean, shrimp, and potato salad.png";
import imgVideo3 from "../assets/3_Data/Lab_02_b/Sunny-side up fried eggs.png";
import imgVideo4 from "../assets/3_Data/Lab_02_b/Lotus delight salad_01.png";
import imgAvatar1 from "../assets/3_Data/Lab_05/Avatar (1).png";
import imgAvatar2 from "../assets/3_Data/Lab_05/Avatar (2).png";
import imgAvatar3 from "../assets/3_Data/Lab_05/Avatar (3).png";
import imgFood1 from "../assets/3_Data/Lab_05/sticky-rice-ball.png";
import imgFood2 from "../assets/3_Data/Lab_05/strawberry-smoothie.png";
import imgFood3 from "../assets/3_Data/Lab_05/latte-art.png";
import imgFood4 from "../assets/3_Data/Lab_05/butter-noodles.png";
import imgBookmark from "../assets/3_Data/Lab_03/Icon Button 73.png"; 

export default function Content() {
  const summerRecipes = [
    {
      name: "Italian-style tomato salad",
      time: "14 minutes",
      image: imgRecipes1,
    },
    {
      name: "Spaghetti with vegetables",
      time: "15 minutes",
      image: imgRecipes2,
    },
    {
      name: "Lotus delight salad",
      time: "20 minutes",
      image: imgRecipes3,
    },
    {
      name: "Snack cakes",
      time: "21 minutes",
      image: imgRecipes4,
    },
  ];

  const videoRecipes = [
    {
      name: "Salad with cabbage and shrimp",
      time: "32 minutes",
      image: imgVideo1,
    },
    {
      name: "Salad of cave beans, shrimp and potatoes",
      time: "20 minutes",
      image: imgVideo2,
    },
    {
      name: "Sunny-side up fried egg",
      time: "15 minutes",
      image: imgVideo3,
    },
    {
      name: "Lotus delight salad",
      time: "20 minutes",
      image: imgVideo4,
    },
  ];

  const editorsPicks = [
    {
      name: "Stuffed sticky rice ball",
      time: "34 minutes",
      description:
        "Stuffed sticky rice ball: A delightful Asian treat with savory glutinous rice and flavorful fillings.",
      author: "Jennifer King",
      authorImage: imgAvatar,
      image: imgFood1,
    },
    {
      name: "Strawberry smoothie",
      time: "40 minutes",
      description:
        "Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this smoothie is creamy and delicious.",
      author: "Matthew Martinez",
      authorImage: imgAvatar1,
      image: imgFood2,
    },
    {
      name: "Latte Art",
      time: "19 minutes",
      description:
        "Latte art is the skilled craft of creating captivating designs on the surface of a latte.",
      author: "Sarah Hill",
      authorImage: imgAvatar2,
      image: imgFood3,
    },
    {
      name: "Butter fried noodles",
      time: "16 minutes",
      description:
        "Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal.",
      author: "Julia Lopez",
      authorImage: imgAvatar3,
      image: imgFood4,
    },
  ];

  const renderRecipeCard = (recipe, withVideo = false) => {
    return (
      <div
        className={`${
          withVideo ? "bg-white shadow-sm" : "bg-gray-100"
        } rounded-lg overflow-hidden`}
      >
        <div className="relative">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-48 object-cover"
          />

          {withVideo && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-white bg-opacity-75 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-pink-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="font-bold">{recipe.name}</h3>
          <div className="flex justify-between items-center mt-2">
            <span className="text-pink-500 text-m bg-pink-100 p-1 rounded-xl">
              {recipe.time}
            </span>
            <button>
              <img src={imgBookmark} alt="Bookmark" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderFeaturedRecipe = (recipe) => {
    return (
      <div className="flex bg-white rounded-lg overflow-hidden shadow-sm relative">
        <div className="w-1/3">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-2/3 p-6">
          <h3 className="font-bold text-lg mb-2">{recipe.name}</h3>
          <p className="text-gray-500 text-sm mb-4">{recipe.time}</p>
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
              <img
                src={recipe.authorImage}
                alt={recipe.author}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="ml-2 text-sm">{recipe.author}</span>
          </div>
          <p className="text-gray-600 text-sm">{recipe.description}</p>
        </div>
        <div className="absolute top-4 right-4">
          <button>
            <img src={imgBookmark} alt="Bookmark" className="w-6 h-6" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <main>
      <section>
        <div className="container mx-auto px-4 py-8 relative">
          <div className="relative h-[500px] overflow-hidden">
            <img
              src={imgBg}
              alt="Kitchen with cook"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-1/2 transform -translate-y-1/2 left-4 w-72">
              <div className="bg-white rounded-lg shadow-sm p-5 border-2 border-pink-300 border-dotted">
                <div className="bg-yellow-400 text-center text-xs py-1 px-3 rounded-full w-32 mb-3 mx-auto">
                  RECIPE OF THE DAY
                </div>
                <h2 className="text-2xl font-bold text-pink-500 mb-3">
                  SALAD CAPRESE
                </h2>
                <p className="text-gray-600 mb-3 text-sm">
                  Classic Italian Salad Caprese: ripe tomatoes, fresh
                  mozzarella, herbs, olive oil, and balsamic vinegar create a
                  refreshing dish for lunch or appetizer.
                </p>

                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                    <img
                      src={imgAvatar}
                      alt="Chef"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    Salad Caprese
                  </span>
                </div>

                <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 flex items-center uppercase">
                  VIEW NOW
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-pink-500 text-center mb-2">
            This Summer Recipes
          </h2>
          <p className="text-gray-500 text-center mb-8">
            We have all your Independence Day sweets covered.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {summerRecipes.map((recipe, index) => (
              <div key={`summer-${index}`}>{renderRecipeCard(recipe)}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-pink-500 text-center mb-2">
            Recipes With Videos
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Cooking Up Culinary Creations with Step-by-Step Videos
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoRecipes.map((recipe, index) => (
              <div key={`video-${index}`}>{renderRecipeCard(recipe, true)}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-pink-500 text-center mb-2">
            Editor's pick
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Curated Culinary Delights: Handpicked Favorites by Our Expert
            Editors!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {editorsPicks.map((recipe, index) => (
              <div key={`editor-${index}`}>{renderFeaturedRecipe(recipe)}</div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}