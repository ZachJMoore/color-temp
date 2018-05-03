let ColorTemp = require("./index")

let colorTemp = new ColorTemp()
console.log("#" + colorTemp.getF(2000)) //#FF9900


let custom = {
    100: "ffffff",
    75: "bfbfbf",
    50: "6b6b6b",
    25: "000000"
}

colorTemp = new ColorTemp(custom)
console.log("#" + colorTemp.getF(60)) //#6b6b6b
