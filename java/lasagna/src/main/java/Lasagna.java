public class Lasagna {
    // TODO: define the 'expectedMinutesInOven()' method
    public int expectedMinutesInOven(){
        return 40;
    }
    // TODO: define the 'remainingMinutesInOven()' method
    public int remainingMinutesInOven(int time_in_oven){
        return this.expectedMinutesInOven() - time_in_oven;
    }
    // TODO: define the 'preparationTimeInMinutes()' method
    public int preparationTimeInMinutes(int number_of_layer){
        return number_of_layer * 2;
    }
    // TODO: define the 'totalTimeInMinutes()' method
    public int totalTimeInMinutes(int number_of_layer, int time_in_oven){
        return this.preparationTimeInMinutes(number_of_layer) + time_in_oven;
    }
}
