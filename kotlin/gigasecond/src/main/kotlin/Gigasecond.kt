import java.time.LocalDate
import java.time.LocalDateTime
import java.time.LocalTime
import java.time.ZoneOffset

class Gigasecond (startingDate: LocalDateTime){
    //using _ to make the value more readable
    val GIGASECOND: Long = 1_000_000_000
    // TODO: Implement proper constructor
    //if LocalDate is passed in first constructor convert it to LocaldateTime using atStartOfDay()(adding time to date)
    constructor(startingDate: LocalDate): this(startingDate.atStartOfDay())

    val date: LocalDateTime =startingDate.plusSeconds(GIGASECOND)
}
