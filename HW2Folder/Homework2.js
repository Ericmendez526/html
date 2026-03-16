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
    let MI = document.getElementById("MI").value.trim();
    var MIpattern = /^[a-zA-Z]$/;
        if(MI != "")
        {
            if (!MI.match(MIpattern))
            {
                document.getElementById("MI-error").innerHTML = "Please enter a valid Middle Initial";
                return false;
            }
            else
            {
                document.getElementById("MI-error").innerHTML = ""; 
                return true;
            }
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
    let date = new Date().setFullYear(DOB.value)
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
            document.getElementById("DOB-Error").innerHTML=
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