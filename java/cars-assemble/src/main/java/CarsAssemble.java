public class CarsAssemble {
    int CAR_PER_HOUR = 221;
    double SPEED_5_TO_8_SUCCESS_RATE = 0.90;
    double SPEED_9_SUCCESS_RATE = 0.80;
    double SPEED_10_SUCCESS_RATE = 0.77;
    public double productionRatePerHour(int speed) {
        return getProductionWhithSuccessRate(speed);
    }

    public int workingItemsPerMinute(int speed) {
        return (int) (getProductionWhithSuccessRate(speed) / 60);
    }

    private double getProductionWhithSuccessRate(int speed) {
        if(speed >= 5 && speed <= 8 ){
            return (speed * CAR_PER_HOUR) * SPEED_5_TO_8_SUCCESS_RATE;
        } else if (speed == 9) {
            System.out.print((speed * CAR_PER_HOUR) * SPEED_9_SUCCESS_RATE);
            return (speed * CAR_PER_HOUR) * SPEED_9_SUCCESS_RATE;
        } else if (speed == 10) {
            return (speed * CAR_PER_HOUR) * SPEED_10_SUCCESS_RATE;
        } else return speed * CAR_PER_HOUR;
    }
}
