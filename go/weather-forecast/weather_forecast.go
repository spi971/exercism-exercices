// Package weather implement a function which return the weather based on the location.
package weather

// CurrentCondition represent the current weather.
// can be used as param in the Forecast function.
var CurrentCondition string

// CurrentLocation represent the current location.
// can be used as param in the Forecast function.
var CurrentLocation string

// Forecast return the current forecast based on the city and condition.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
