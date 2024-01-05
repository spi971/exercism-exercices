import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.groupingBy;

class WordCount {
    public Map<String, Integer> phrase(String input) {
        final Map<String, Integer> map = new HashMap<>();
        List<String> matchesList = new ArrayList<String>();
        Matcher matcher = Pattern.compile("\\w+(?:'\\w+)?").matcher(input.lines().collect(Collectors.joining()).toLowerCase());
        while (matcher.find()) {
            matchesList.add(matcher.group());
            map.put(matcher.group(), Collections.frequency(matchesList, matcher.group()));
        }
        return map;
    }
}
