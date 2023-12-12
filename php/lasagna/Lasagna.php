<?php

declare(strict_types=1);

class Lasagna
{
    // Please define the 'expectedCookTime()' function
    function expectedCookTime(): int
    {
        $cookTime = 40;
        return $cookTime;
    }

    // Please define the 'remainingCookTime($elapsed_minutes)' function
    function remainingCookTime($elapsed_minutes): int
    {
        return Lasagna::expectedCookTime() - $elapsed_minutes;
    }

    // Please define the 'totalPreparationTime($layers_to_prep)' function
    function totalPreparationTime($layers_to_prep): int
    {
        $timeForOneLayer = 2;
        return $layers_to_prep * $timeForOneLayer;
    }

    // Please define the 'totalElapsedTime($layers_to_prep, $elapsed_minutes)' function
    function totalElapsedTime($layers_to_prep, $elapsed_minutes): int
    {
        return Lasagna::totalPreparationTime($layers_to_prep) + $elapsed_minutes;
    }

    // Please define the 'alarm()' function
    function alarm(): string
    {
        return "Ding!";
    }
}
