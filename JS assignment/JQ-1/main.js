class employeeDetails{
    constructor(empId, empName, mobNumber, compName, empMail){
        this.empId = empId;
        this.empName = empName;
        this.mobNumber = mobNumber;
        this.compName = compName;
        this.empMail= empMail;
    }
    display = () =>{
        var disp = `<div style="float:left"><p> Employee ID: ${this.empId}</p>Employee Name: ${this.empName}<p> Contact Number: ${this.mobNumber}</p><p>Company Name: ${this.compName}</p><p>E-mail: ${this.empMail}</p></div>`;
        document.write(disp);
        document.write("<br><br>");


    }
};

var e1 = new employeeDetails(9801,"Raj Varma",9876543210,"Apple","varma.raj1@apple.com");
var e2 = new employeeDetails(9802,"Neha Sharma",8907654321,"Microsoft","nehas0@microsoft.com");
var e3 = new employeeDetails(9803,"John Thomson",7890654312,"Google","tjohn@gmail.com");
var e4 = new employeeDetails(9804,"Ali Ahmed",6789054123,"Amazon","ali121@amazon.com");
var e5 = new employeeDetails(9805,"XYZ",9988776400,"Accenture","xyz123@accenture.com");
e1.display();
e2.display();
e3.display();
e4.display();
e5.display();