import java.util.ArrayList;
import java.util.Scanner;

public class Atm {
	static ArrayList<Acc_Holders> userlist=new ArrayList<Acc_Holders>(); 
	public static final Scanner input=new Scanner(System.in);
	
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
		 for(Acc_Holders b:userlist)
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
					 break;
				 }
				 else 
				 {
					 System.out.println("Withdrawn amount exceeding Current Balance");
					 System.out.println("Transaction failed");
					 balance=b.amount; 
					 break;
				 } 
			 }			 
			 else 
			 {
				 balance=b.amount;
				 System.out.println("Please enter correct Account number");
				 break;
			 }
		 }
		
		return balance;
	}
	
	public double deposit(String ac) 
	{
		double balance=0.00;
		System.out.println("Enter account no: ");
		String user_acc=input.nextLine();
		 for(Acc_Holders b:userlist)
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
				break;
			 }	
			 else 
			 {
				 balance=b.amount;
				 System.out.println("Please enter correct Account number");
				 break;
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
		 
		 for(Acc_Holders b:userlist)
		 { 
			 if(b.name.equals(username))
			 {
    			 if(b.password.equals(userpass))
    			 {
					 if (b.gender.equals("male"))
					   {
						  prefix="Mr. ";
						  msg= "Login Success";
						  System.out.println("Welcome, "+prefix+ b.name);	
						  break;
					    } 
		    	       	else if(b.gender.equals("female"))
					   	{
						  prefix="Ms. ";
						  msg= "Login Success";
						  System.out.println("Welcome, "+prefix+ b.name);
						  break;
				        }
				        else 
				        {
					       prefix=" ";  
				           msg= "Login Success";
						   System.out.println("Welcome, "+prefix+ b.name);
						   break;
				        }	
					}
			 		else
				    {
						msg="Error Occured";
						System.out.println("Login failed!");
						     
					} 
				 }
			 	 else 
			 	 {
			 		 msg="Wrong Username";
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
		
		Acc_Holders ach1= new Acc_Holders("Sam","+91-9876543210", "Hyd", "6543210987","sam098",25000.00,"male");
		Acc_Holders ach2 = new Acc_Holders("Ria","+91-7890123456", "Delhi", "6543210988","ria100",10000.00,"male");
		Atm atm = new Atm ();
		
		userlist.add(ach1);
		userlist.add(ach2);
		
		login=atm.login();
		System.out.println(login);
		if (login.equals("Login Success")) 
		{
			choice=atm.display();
			if(choice.equals("1"))
			{
				
				System.out.println("Cash Withdraw Page");
				for(Acc_Holders b:userlist)
					 {  
						 acc_no=b.acc_no;
						 pre_transaction=b.amount;
						 withdraw_balance=atm.withdraw(acc_no);
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
				for(Acc_Holders b:userlist)
				 {  
					 acc_no=b.acc_no;
					 pre_transaction=b.amount;
					 deposit_balance=atm.deposit(acc_no);
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
