
'use client'

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecipeCard from "./RecipeCard";
import { fetchRecipes } from "@/library/api-call";

const recipes = await fetchRecipes();
const MostlikeRecipe = recipes.slice(4, 14)


function Secondslider() {
  var settings = {
    dots: true,
    infinite:true,
    autoplay:true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container overflow-hidden py-9 mt-5">
      <Slider {...settings}>


        {

          MostlikeRecipe.map((recipe, index) => {

            return (
              <div className="ps-5">
                <RecipeCard  key={index} id={recipe.id} name={recipe.name} image={recipe.image} prepTimeMinutes={recipe.prepTimeMinutes} cookTimeMinutes={recipe.cookTimeMinutes} rating={recipe.rating} />
              </div>
            )
          })

        }
 

      </Slider>
    </div>
  );
}

export default Secondslider;