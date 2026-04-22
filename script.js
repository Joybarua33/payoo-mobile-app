document.querySelector("#loginButton").addEventListener("click", function(event){
    event.preventDefault();
    const mobileNumber = 123456780;
    const pinNumber = 1234;
    const mobileNumValue = document.querySelector("#mobile-number").value;
    const convertMobileNum = parseInt(mobileNumValue);

    const pinNumValue = document.querySelector("#pin-number").value;
    const convertPinNum = parseInt(pinNumValue);

    if(convertMobileNum === mobileNumber && convertPinNum === pinNumber){
        window.location.href = "./home.html";
    }
    else{
        alert("Invalid credentials");
    }
});