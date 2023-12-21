package cars

// CalculateWorkingCarsPerHour calculates how many working cars are
// produced by the assembly line every hour.
func CalculateWorkingCarsPerHour(productionRate int, successRate float64) float64 {
	return (float64(productionRate) * successRate) / 100
}

// CalculateWorkingCarsPerMinute calculates how many working cars are
// produced by the assembly line every minute.
func CalculateWorkingCarsPerMinute(productionRate int, successRate float64) int {
	return int(CalculateWorkingCarsPerHour(productionRate, successRate)) / 60
}

// CalculateCost works out the cost of producing the given number of cars.
func CalculateCost(carsCount int) uint {
	remainderNumber := carsCount % 10
	numberOfCarGroupPrice := carsCount / 10
	normalPrice := 10000
	groupPrice := 95000
	carAt10000 := remainderNumber * normalPrice
	carsAt95000 := numberOfCarGroupPrice * groupPrice
	return uint(carsAt95000 + carAt10000)
}
