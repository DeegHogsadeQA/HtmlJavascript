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