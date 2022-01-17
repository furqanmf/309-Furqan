
public class Cars {
String model= "Suv"; 
}

class Toyota extends Cars{
	String model= "Sedan";
	void printModel() {
		System.out.println(model);
		System.out.println(model);
	}
}

class super1{
public static void main(String args[]) {
Toyota ty=new Toyota();
ty.printModel();
}
}
