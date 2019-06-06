function fetchData(url) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.onreadystatechange = () => {
            if (req.readyState === 4) {
                if (req.status === 200) {
                    resolve(req);
                } else {
                    reject("It was unsuccessful");

                }
            }
        };
        req.open("GET", url);
        req.send();
    });

}

function newPromise() {
    fetchData("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json").then((req) => {
        return JSON.parse(req.responseText);
    }).then((data) => {
        return generateTable(data.members);
    }).then(() => {
        console.log("Successful");
    }).catch((reason) => {
        console.log(reason)
    });

}

function addTable(hero) {
    let tableName = document.getElementById("Heroes data");
    let addRow = tableName.insertRow(-1);
    let count = 0;
    for (let key in hero) {
        let data = addRow.insertCell(count);
        let text = document.createTextNode(hero[key]);
        data.appendChild(text);
        count++;

    }
}

function generateTable(members) {
    return new Promise((resolve, reject) => {
        for (let hero of members) {
            addTable(hero);
        } resolve();
    })
}

newPromise();