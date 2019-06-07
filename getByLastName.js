function getByLastName() {

    let text = document.getElementById("user").value;

    sessionStorage.setItem("user", text);

    console.log(sessionStorage.getItem("user").value);

    fetchData("GET", ("/owners/*/lastname/" + text), null).then((req) => {

        console.log(req.responseText);

    }).catch((reason) => {

        console.log("Failed");
        
    });
};