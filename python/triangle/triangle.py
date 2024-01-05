def sides_are_valid(sides): return sum(sides[:2]) > sides[2]
def equilateral(sides): return sides_are_valid(sorted(sides)) and len(set(sides)) == 1
def isosceles(sides): return sides_are_valid(sorted(sides)) and len(set(sides)) <= 2
def scalene(sides): return sides_are_valid(sorted(sides)) and len(set(sides)) == 3
