<?php

class LuckyNumbers
{
    public function sumUp(array $digitsOfNumber1, array $digitsOfNumber2): int
    {
        return (implode($digitsOfNumber1) + implode($digitsOfNumber2));
    }

    public function isPalindrome(int $number): bool
    {
        $reversed = strrev((string) $number);
        if ($number === (int)$reversed) {
            return true;
        } else {
            return false;
        }
        
    }

    public function validate(string $input): string
    {
        switch ($input) {
            case "":
                return "Required field";
                break;
            case !is_int((int)$input):
                return "Must be a whole number larger than 0";
                break;
            case intval((int)$input) < 1:
                return  "Must be a whole number larger than 0";
                break;
            default:
                return "";
                break;
        }
    }
}
