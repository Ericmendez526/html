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
        document.getElementById("ZipCode-error").innerHTML = "";
        return true;
}

//Email Validation
function validateEmail()
{
    let email = document.getElementById("Email").value;
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
            document.getElementById("Email-error").innerHTML=
            "Please enter a valid email address.";
            return false;
        }   
        else
        {
            document.getElementById("Email-error").innerHTML = "";
            return true;
        }
}

//Phone Number Validation
function validatePhoneNumber()
{
    const phoneInput = document.getElementById("phoneNum");
    const phone = phoneInput.value.replace(/\0/g,"");

    if(phone.length != 10)
    {
        document.getElementById("phoneNum-error").innerHTML = 
        "Phone Number cannot be blank";
        return false;
    }

    const formattedPhone = phone.slice(0,3)+ "-" + phone.slice(3,6) + "-" + phone.slice(6,10)
    phoneInput.value = formattedPhone;
    document.getElementById("phoneNum-error").innerHTML = "";
    return true;
}

//Range slider 
function rangeSliderLive(val)
{
    document.getElementById("painValue").innerText = val;
}

//Username Validation 
function validateUsername()
{
    let Username = document.getElementById("Username").value;
    Username = Username.toLowerCase();
    document.getElementById("Username").value = Username;

    if(Username.length === 0)
    {
        document.getElementById("Username-error").innerHTML = 
        "Username Field cannot be empty";
        return false;
    }
        if(!isNaN(Username.charAt(0)))
        {
            document.getElementById("Username-error").innerHTML = 
            "Username cannot begin with a number";
            return false;
        }
            let regex = /^[a-zA-Z0-9_]+$/;
            if(!regex.test(Username))
            {
                document.getElementById("Username-error").innerHTML = 
                "Username can only contain letters, numbers, or underscores";
                return false;
            }
            else
                if(Username.length < 5)
                {
                    document.getElementById("Username-error").innerHTML = 
                    "Username cannot be less than 5 characters";
                    return false;
                }
                else 
                    if(Username.length > 30)
                    {
                    document.getElementById("Username-error").innerHTML = 
                    "Username cannot exceed 30 characters";   
                    return false;                     
                    }
                    else
                        {
                            document.getElementById("Username-error").innerHTML = "";
                            return true;
                        }
}

//Password Validations
function validatePass()
{
    const Password = document.getElementById("Password").value;
    const Username = document.getElementById("Username").value;

    const errorMessage = [];

    if(!Password.match(/[a-z]/))
    {
        errorMessage.push("Enter at least one lowercase letter");
    }
    if(!Password.match(/[A-Z]/))
    {
        errorMessage.push("Enter at least one uppercase letter");
    }
    if(!Password.match(/[0-9]/))
    {
        errorMessage.push("Enter at least one number");
    }
    if(!Password.match(/[!@#$%&*_\.+()-]/))
    {
        errorMessage.push("Enter at least one special character");
    }
    if((Password == Username) || Password.includes(Username))
    {
        errorMessage.push("Password cannot contain username")
    }

    const errorContainer = document.querySelector(".pass-message");
    errorContainer.innerHTML = errorMessage
    .map(msg => `<span>${msg}</span><br>`)
    .join("");
}

//Confirm Password Validation
function confirmPass()
{
    Password = document.getElementById("Password").value;
    passwordConfirm = document.getElementById("passwordConfirm").value;

    if(Password !== passwordConfirm)
    {
        document.getElementById("cPass-error").innerHTML =
        "Passwords do not match";
        return false;
    }
    else
    {
        document.getElementById("cPass-error").innerHTML =
        "Password Match";
        return true;
    }

}

//Review Button Code
function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><tr><th colspan='2'>Review Your Information:</th></tr>";

    for (var i = 0; i < formcontent.elements.length; i++) {
        var el = formcontent.elements[i];
        var datatype = el.type;
        var name = el.name;
        var value = el.value;

        // skip elements with no name
        if (!name) continue;

        switch (datatype) {
            case "checkbox":
                if (el.checked) {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>&#x2713;</td></tr>";
                }
                break;

            case "radio":
                if (el.checked) {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
                break;

            case "range":
                // Only show the slider if the user moved it off the default (0)
                if (value !== "0") {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
                break;

            case "button":
            case "submit":
            case "reset":
                // skip
                break;

            default:
                if (value !== "") {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
        }
    }

    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

//Remove user input
function removeReview()
{
    document.getElementById("showInput".innerHTML = "")
}

