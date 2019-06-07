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

function getByPetType() {

    let text = document.getElementById("pet").value;

    sessionStorage.setItem("pet", text);

    console.log(sessionStorage.getItem("pet").value)

    fetchData("GET", "/pets/pettypes", null).then((req) => {

        console.log(req.responseText);

    })
};