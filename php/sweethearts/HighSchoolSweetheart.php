<?php

class HighSchoolSweetheart
{
    public function firstLetter(string $name): string
    {
        $firstLetter = substr(trim($name),0,1);
        return $firstLetter;
    }

    public function initial(string $name): string
    {
        $formated = strtoupper(HighSchoolSweetheart::firstLetter($name));
        return "$formated.";
    }

    public function initials(string $name): string
    {
        $explodedName = explode(" ", trim($name));
        $firstName = HighSchoolSweetheart::initial($explodedName[0]);
        $lastName = HighSchoolSweetheart::initial($explodedName[1]);
        return "$firstName $lastName";
    }

    public function pair(string $sweetheart_a, string $sweetheart_b): string
    {
        $first = HighSchoolSweetheart::initials($sweetheart_a);
        $seconde = HighSchoolSweetheart::initials($sweetheart_b);
        return <<<EO_HEART
        ******       ******
      **      **   **      **
    **         ** **         **
   **            *            **
   **                         **
   **     $first  +  $seconde     **
    **                       **
      **                   **
        **               **
          **           **
            **       **
              **   **
                ***
                 *
   EO_HEART;
    }
}

