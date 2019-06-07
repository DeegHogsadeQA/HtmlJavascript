function fetchData(type, ext, sen) {
    let x = sen;

    return new Promise((resolve, reject) => {

        const req = new XMLHttpRequest();

        req.onreadystatechange = () => {
            if (req.readyState === 4) {
                if (req.status >= 200 && req.status < 300) {
                    resolve(req);
                    console.log("connected");
                } else {
                    reject("Failed");
                }
            }

        };

        req.open(type, "http://localhost:9966/petclinic/api" + ext);
        req.setRequestHeader("Content-Type", "application/json");
        req.send(x);

    })
}

function getById() {

    let text = document.getElementById("user").value;

    sessionStorage.setItem("user", text);

    console.log(sessionStorage.getItem("user").value)

    fetchData("GET", "/owners/" + text, null).then((req) => {

        console.log(req.responseText);


    })
};



function getAll() {

    let text = document.getElementById("user").value;

    sessionStorage.setItem("user", text);

    console.log(sessionStorage.getItem("user").value)

    fetchData("GET", "/owners/", null).then((req) => {

        console.log(req.responseText);

    })
};

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