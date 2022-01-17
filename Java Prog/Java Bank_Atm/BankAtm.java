import java.util.Scanner; 
import java.util.ArrayList;

public class BankAtm {
	String name=null;
	String mob_num=null;
	String address=null;
	String acc_no=null;
	String password;
	double amount=0.00;
	
	String gender=null;
	
	static ArrayList<BankAtm> userlist=new ArrayList<BankAtm>(); 
	public static final Scanner input=new Scanner(System.in);
	
	
	public BankAtm (String name, String mob_num, String address, String acc_no, String password, double amount, String gender )
	{
		 this.name= name;
		 this.mob_num=mob_num;
		 this.address=address;
		 this.acc_no=acc_no;
		 this.password=password;
		 this.amount=amount;
		 
		 this.gender=gender;
	}
	public String display() 
	{
		String val=null;
		System.out.println("**********************************************************");
		System.out.println("\t\tATM MAIN MENU\t\t");
		System.out.println("**********************************************************");
	
		
		System.out.println("\nPlease select one:");
		System.out.println("\n1.Cash Withdraw\n2.Cash Deposit");
		System.out.println("**********************************************************");
		
		
		System.out.println("Enter Option: ");
		val = input.nextLine();  
		return val;
		
	}
	
	public double withdraw(String an) 
	{
		double balance=0.00;
		System.out.println("Enter account no: ");
		String user_acc=input.nextLine();
		 for(BankAtm b:userlist)
		 { 
			 if(b.acc_no.equals(user_acc))
			 {
				 System.out.println("Äccount Verification Complete");
				 System.out.println("Äccount Details");
				 System.out.println("Name:"+b.name);
				 System.out.println("Account:"+b.acc_no);
				 System.out.println("Balance"+b.amount);
				 System.out.println("**********************************************************");
				 System.out.println("Enter Amount to withdraw: ");
				 int withdraw=input.nextInt();
				 double withdraw_amount=withdraw;
				 if(withdraw_amount<=b.amount) 
				 {
					 b.amount=b.amount-withdraw_amount;
					 balance=b.amount;
					 System.out.println("Transaction Successful");
				 }
				 else 
				 {
					 System.out.println("Withdrawn amount exceeding Current Balance");
					 System.out.println("Transaction failed");
					 balance=b.amount; 
				 } 
			 }			 
			 else 
			 {
				 balance=b.amount;
				 System.out.println("Please enter correct Account number");
			 }
		 }
		
		return balance;
	}
	
	public double deposit(String ac) 
	{
		double balance=0.00;
		System.out.println("Enter account no: ");
		String user_acc=input.nextLine();
		 for(BankAtm b:userlist)
		 { 
			 if(b.acc_no.equals(user_acc))
			 {
				 System.out.println("Äccount Verification Complete");
				 System.out.println("Äccount Details");
				 System.out.println("Name:"+b.name);
				 System.out.println("Account:"+b.acc_no);
				 System.out.println("Balance"+b.amount);
				 System.out.println("**********************************************************");
				 System.out.println("Enter Amount to Deposit: ");
				 int deposit=input.nextInt();
				 double deposit_amount=deposit;
				 
				b.amount=b.amount+deposit_amount;
				balance=b.amount;
				System.out.println("Transaction Successful");
			 }	
			 else 
			 {
				 balance=b.amount;
				 System.out.println("Please enter correct Account number");
			 }
		 }
		
		return balance;
	} 
	
	
	
	public String login() 
	{
		String prefix=null;
		String msg=null;
		
		System.out.println("**********************************************************");
		System.out.println("\t\t\tLOGIN PAGE\t\t");
		System.out.println("**********************************************************");
		
		System.out.println("Enter name: ");
		String username = input.nextLine();  
		username = username.replaceAll("\\s", "");
		System.out.println("Hi," +username );
		
		System.out.println("Please enter your password: ");
		String userpass = input.nextLine(); 
		userpass = userpass.replaceAll("\\s", "");
		System.out.println("Verfying you account ");
		 
		 for(BankAtm b:userlist)
		 { 
			 if((b.name.equals(username))&&(b.password.equals(userpass)))
				{
				   if (b.gender.equals("male"))
				   {
					  prefix="Mr. ";
					  msg= "Login Success";
					  System.out.println("Welcome, "+prefix+ name);
					  
			    	} 
    	        	else if(b.gender.equals("female"))
			    	{
					  prefix="Ms. ";
					  msg= "Login Success";
					  System.out.println("Welcome, "+prefix+ name);
					  
		        	}
		        	else 
		        	{
			       		prefix=" ";  
		        		msg= "Login Success";
						System.out.println("Welcome, "+prefix+ name);
						
		        	}	
				  }
	 			 else
				 {
					 msg="Error Occured";
				     System.out.println("Login failed!");
				     
				 } 
		 }
		 return msg;
	}
	
	public static void main(String args[]) 
	{ 
		String login=null;
		String choice=null;
		String acc_no=null;
		double pre_transaction=0.00;
		double withdraw_balance=0.00;
		double deposit_balance=0.00;
		BankAtm batm = new BankAtm("Sam","+91-9876543210", "Hyd", "6543210987","sam098",25000.00,"male");
		userlist.add(batm);
		login=batm.login();
		System.out.println(login);
		if (login.equals("Login Success")) 
		{
			choice=batm.display();
			if(choice.equals("1"))
			{
				
				System.out.println("Cash Withdraw Page");
				for(BankAtm b:userlist)
					 {  
						 acc_no=b.acc_no;
						 pre_transaction=b.amount;
						 withdraw_balance=batm.withdraw(acc_no);
						 if(withdraw_balance!=pre_transaction) 
						 {
							 System.out.println("************************Digital Receipt************************");
							 System.out.println("Name: "+b.name);
							 System.out.println("Account: "+b.acc_no);
							 System.out.println("Available Balance: "+b.amount); 
							 System.out.println("*****************Thank you for Banking with us*****************");
						 }
						 else 
						 {
							 System.out.println("*****************Thank you for Banking with us*****************");
						 }
					 }
				
			}
			else if(choice.equals("2"))
			{
				System.out.println("Cash Deposit Page");
				for(BankAtm b:userlist)
				 {  
					 acc_no=b.acc_no;
					 pre_transaction=b.amount;
					 deposit_balance=batm.deposit(acc_no);
					 if(deposit_balance!=pre_transaction) 
					 {
					 System.out.println("************************Digital Receipt************************");
					 System.out.println("Name: "+b.name);
					 System.out.println("Account: "+b.acc_no);
					 System.out.println("Available Balance: "+b.amount); 
					 System.out.println("*****************Thank you for Banking with us*****************");
					 }
					 else 
					 {
						 System.out.println("*****************Thank you for Banking with us*****************");
					 }
				 }
			}	
			else 
			{
				System.out.println("Select valid input");
			}
		}
		else
		{
			System.out.println("Please enter valid name and password...");
		}
		
	}
		 
	
}
	


