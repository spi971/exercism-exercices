<?php

class PizzaPi
{
    public function calculateDoughRequirement($numberOfPizzas, $numberOfPersons)
    {
        $gNeeded = 200;
        $gToAddPerPerson = 20;
        $grams = $numberOfPizzas * (($numberOfPersons * $gToAddPerPerson) + $gNeeded);
        return $grams;
    }

    public function calculateSauceRequirement($pizzasNumber, $canVolume)
    {
        $saucePerPizza = 125;
        $sauceForOnePizza = $saucePerPizza / $canVolume;
        $sauceNeeded = $pizzasNumber * $sauceForOnePizza;
        return $sauceNeeded;
    }

    public function calculateCheeseCubeCoverage($cheeseCubesideLength, $cheeseLayerThickness, $pizzaDiameter)
    {
        $pi = 3.14159265359;
        $numberOfPizza = ($cheeseCubesideLength**3) / ($cheeseLayerThickness * $pi * $pizzaDiameter);
        return floor($numberOfPizza);
    }

    public function calculateLeftOverSlices($pizzas, $friends)
    {
        $slice = 8;
        $leftOver = ($pizzas * $slice)%$friends;
        return $leftOver;
    }
        
}
