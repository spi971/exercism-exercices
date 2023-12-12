import java.io.Serializable

object Hamming {
    // ma solution

/*    fun compute(leftStrand: String, rightStrand: String): Int {
        if(leftStrand.toMutableList().size != rightStrand.toMutableList().size){
            throw IllegalArgumentException("left and right strands must be of equal length")
        }
        if (leftStrand == rightStrand){
            return 0
        }
        val difChar = mutableListOf<String>()
        leftStrand.asIterable().forEachIndexed{index, it ->
            if(rightStrand.toCharArray()[index] != it){
                difChar.add(rightStrand.toCharArray()[index].toString())
            }
        }

        return difChar.size;
    }*/

    // meilleur solution
    fun compute(leftStrand: String, rightStrand: String): Int {
        require(leftStrand.length == rightStrand.length) { "left and right strands must be of equal length" }
        return leftStrand.zip(rightStrand).count{it.first != it.second}
    }
}
