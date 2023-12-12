<?php

function language_list(string ...$languages)
{
    return $languages;
}

function add_to_language_list(array $language_list, string $language)
{
    $language_list[] = $language;
    return $language_list;
}

function prune_language_list(array $language_list) {
    array_shift($language_list);
    return $language_list;
}

function current_language(array $language_list){
    return array_shift($language_list);
}

function language_list_length(array $language_list){
    return count($language_list);
}
