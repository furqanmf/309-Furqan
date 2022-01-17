public class Customer
{
string name=null;
private int password;

Customer(String p, int q)
{
name= p;
password=q;
}

boolean logic(String n,int p){
if((name==n)&&(password==p)){
System.out.println("Login Successsfull");
return true;
}
else
{
System.out.println("Login failed");
return false;
}
