//First Name Validation Function
function validateFname()
{
    let fname = document.getElementById("Fname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    if (fname == "")
        {
            document.getElementById("fname-error").innerHTML = "First Name field cannot be empty"
            return false;
        }
    else
        if(fname != "")
        {
            if (!fname.match(namePattern))
            {
                document.getElementById("fname-error").innerHTML = "Letters, Dashes, and Apostrophes only";
                return false;
            }
            else
                if(fname.length < 2)
                {
                    document.getElementById("fname-error").innerHTML = "First Name cannot be less than 2 characters";
                    return false;
                }
                else
                    if(fname.length > 30)
                    {
                        document.getElementById("fname-error").innerHTML = "First Name connot be more than 30 Characters";
                        return false;
                    }
                    else
                    {
                        document.getElementById("fname-error").innerHTML = ""; 
                        return true;
                    }
        }
}

//Middle Initial Validation Function
function validateMI()
{
    let MI = document.getElementById("MI").value;
    var namePattern = /^[A-Z]$/;
    MI = MI.toUpperCase();
    document.getElementById("MI").value = MI;
    if (!MI.match(namePattern))
    {
        document.getElementById("MI-error").innerHTML = "Middle Initial must be a single uppercaseletter";
        return false;
    }
    else
    {
        document.getElementById("MI-error").innerHTML = "";
        return true;
    }
}

//Last Name Validation Function
function validateLname()
{
    let lname = document.getElementById("Lname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    if (lname == "")
        {
            document.getElementById("Lname-error").innerHTML = "Last Name field cannot be empty"
            return false;
        }
    else
        if(lname != "")
        {
            if (!lname.match(namePattern))
            {
                document.getElementById("Lname-error").innerHTML = "Letters, Dashes, and Apostrophes only";
                return false;
            }
            else
                if(lname.length < 2)
                {
                    document.getElementById("Lname-error").innerHTML = "Last Name cannot be less than 2 characters";
                    return false;
                }
                else
                    if(lname.length > 30)
                    {
                        document.getElementById("Lname-error").innerHTML = "Last Name cannot be more than 30 Characters";
                        return false;
                    }
                    else
                    {
                        document.getElementById("Lname-error").innerHTML = ""; 
                        return true;
                    }
        }
}
//DOB Validation 
function validateDOB()
{
    let DOB = document.getElementById("DOB")
    let date = new Date(DOB.value)
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if(date > new Date())
    {
        document.getElementById("DOB-error").innerHTML= 
        "Date cannot be in the future.";
        DOB.value="";
        return false;
    }
    else   
        if(date < new Date(maxDate))
        {
            document.getElementById("DOB-error").innerHTML=
            "Date cannot be more than 120 years ago";
            DOB.value = "";
            return false;
        }
        else
        {
            document.getElementById("DOB-error").innerHTML= "";
            return true;
        }
}
//SSN Validation
function validateSSN()
{
    const SSN = document.getElementById("SSN").value;
    const SSNR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;
    if(!SSNR.test(SSN))
    {
        document.getElementById("SSN-error").innerHTML =
        "Please enter a valid Social Security Number";
        return false;
    }
    else
    {
        document.getElementById("SSN-error").innerHTML = "";
        return true;
    }
}

//Address Validation
function validateAL1()
{
    var AL1 = document.getElementById("AL1").value;
    console.log(AL1);
    console.log(AL1.length)
    if(AL1.length < 2)
        {
            document.getElementById("AL1-error").innerHTML=
            "Please enter a valid address.";
            return false;
        }
    else 
        {
            document.getElementById("AL1-error").innerHTML = "";
            return true;
        }   
}

//City Validation
function validateCity()
{
    let City = document.getElementById("City").value.trim();
    if(!City)
    {
        document.getElementById("City-error").innerHTML = 
        "City cannot be blank";
        return false;
    }
    else
    {
        document.getElementById("City-error").innerHTML = "";
        return true; 
    }
}

// ZipCode Validation
function validateZipCode()
{
    const zipInput = document.getElementById("ZipCode");
    let ZipCode = zipInput.value.replace(/[^\d-]/g, "");

    if(!ZipCode)
    {
        document.getElementById("ZipCode-error").innerHTML = 
        "Zip code cannot be blank";
        return false;
    }
        if (ZipCode.length > 5)
        {
            ZipCode = ZipCode.slice(0,5) + "-" + ZipCode.slice(5,9);
        }
        else
        {
            ZipCode = ZipCode.slice(0,5);
        }

        zipInput.value = ZipCode;
        document.getElementById("ZipCode-error")/innerHTML = "";
        return true;
}

//Email Validation
function validateEmail
{
    let email = document.getElementById("Email");
    var emailR = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    
    if(email == "")
    {
        document.getElementById("Email-error").innerHTML = 
        "Email Address cannot be empty";
        return false;
    }
    else
        if(!email.match(emailR))
        {
            document.getElementById("Email-error")=
            "Please enter a valid email address.";
            return false;
        }   
        else
        {
            docuemtn.getElementById("Email-error") = "";
            return true;
        }
}