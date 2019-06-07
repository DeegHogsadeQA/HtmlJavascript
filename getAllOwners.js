function getAll() {

    let text = document.getElementById("user").value;

    sessionStorage.setItem("user", text);

    console.log(sessionStorage.getItem("user").value)

    fetchData("GET", "/owners/", null).then((req) => {

        console.log(req.responseText);

    })
};