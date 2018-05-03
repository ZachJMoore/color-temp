#ColorTemp
Get a real color representation based on a temperature. Designed for use of getting the color of the inside of a kiln.

##Usage
```javascript
let ColorTemp = require("./index")
let colorTemp = new ColorTemp()
let temperature = 2000
let hex = colorTemp.getF(temperature)

console.log("#" + color) //#FF9900
```

ColorTemp constructor takes in my own predefined color range based from <a href="http://lakesidepottery.com/HTML%20Text/Tips/Tempruturerange.htm">this</a> resource, but a custom color range can be used. See [examples.js](examples.js) for structure. ColorTemp converts an object to an array, using the keys as a target, then returning the value of the closest target to the temperature.