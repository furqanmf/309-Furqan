public class A1Shopping {
	public static void main(String args[])
	{
	/*String name="Furqan";
	int pass=12345;
	String contact="+91-9087654321";
	String email= "xyz123@gmail.com";
	String address="HYD";
	String gender="Male";
	String membership="Premium";*/
	Customer c1= new Customer("Furqan",12345,"+91-9087654321","xyz123@gmail.com","HYDERABAD","Male","Premium");
	Customer c2= new Customer("John",54321,"+91-8123456790","abc123@gmail.com","PUNE","Male","Bronze");
	Customer c3= new Customer("Raju",98765,"+91-7123456890","pqr123@gmail.com","MUMBAI","Male","Silver");
	Customer c4= new Customer("Sita",56789,"+91-6123457890","lmn123@gmail.com","DELHI","Female","Gold");
	
	System.out.println("----------------------------Customer 1----------------------------");
	System.out.println(c1.login("Furqan",12345));
	System.out.println(c1.details("Furqan","+91-9087654321","xyz123@gmail.com","HYD","Male","Premium"));
	System.out.println(c1.Orders());
	System.out.println(c1.AddtoCart());
	
	System.out.println("----------------------------Customer 2----------------------------");
	System.out.println(c2.login("John",54321));
	System.out.println(c2.details("John","+91-8123456790","abc123@gmail.com","PUNE","Male","Bronze"));
	System.out.println(c2.Orders());
	System.out.println(c2.AddtoCart());
	
	System.out.println("----------------------------Customer 3----------------------------");
	System.out.println(c3.login("Raju",98765));
	System.out.println(c3.details("Raju","+91-7123456890","pqr123@gmail.com","MUMBAI","Male","Silver"));
	System.out.println(c3.Orders());
	System.out.println(c3.AddtoCart());
	
	System.out.println("----------------------------Customer 4----------------------------");
	System.out.println(c4.login("Sita",56789));
	System.out.println(c4.details("Sita","+91-6123457890","lmn123@gmail.com","DELHI","Female","Gold"));
	System.out.println(c4.Orders());
	System.out.println(c4.AddtoCart());
	}
	}
