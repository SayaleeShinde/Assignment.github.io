function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if (username=="admin"&& password=="qwerty")
    {
    alert("Login Succesfully..!!")
    return false;     
    }

    else
    {
      alert("Login Failed")
    }
}