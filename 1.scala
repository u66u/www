def sumList(lst: List[Int]): Int = lst.foldLeft(0)(_ + _)

val myList = List(1, 2, 3, 4, 5, 6)
val result = sumList(myList)
println(result)
