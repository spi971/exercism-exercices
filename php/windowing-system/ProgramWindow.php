<?php

class ProgramWindow
{
    public $x;
    public $y;
    public $width;
    public $height;
    function __construct($x = 0, $y = 0, $width = 800, $height = 600)
    {
        $this->x = $x;
        $this->y = $y;
        $this->width = $width;
        $this->height = $height;
    }

    function resize($size)
    {
        $this->width = $size->width;
        $this->height = $size->height;
    }

    function move($position)
    {
        $this->x = $position->x;
        $this->y = $position->y;
    }
}

class Size
{
    public $width;
    public $height;

    function __construct($height, $width)
    {
        $this->width = $width;
        $this->height = $height;
    }
}
