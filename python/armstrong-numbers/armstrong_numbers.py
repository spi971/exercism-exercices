import math


def is_armstrong_number(number):
    # transform input in a list
    nmber_list = list(str(number))

    # input size
    list_size = len(nmber_list)

    # check the input is an Armstrong number
    # example 153 is an Armstrong number, 
    # because: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
    # using a map to return a new itérable with result of Armstrong number
    # sum up the map
    total = sum(map(lambda n: int(n) ** list_size, nmber_list))
    return total == number

