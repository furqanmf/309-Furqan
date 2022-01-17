// Parent Class
public class Inheritance {
		String Name;
		float id;
		String Address;
		int mob_number;
		String email;
		
		
		void order() {
			System.out.println("Customer Ordered a Product Online");
		}
		void addtoCart() {
		 System.out.println("Customer Adds a product to cart");
		}
		
	}

	//Child class

	class Fm extends Inheritance{
		public static void main(String args[]) {
		
			Fm obj=new Fm();
			obj.order();
			System.out.println("Fm Ordered a Product Online");
			obj.addtoCart();
			System.out.println("Fm Adds a Product to Cart");
		}
	}

