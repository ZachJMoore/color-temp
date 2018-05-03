//Sources:
// http://lakesidepottery.com/HTML%20Text/Tips/Tempruturerange.htm

let colorRange = {
    2552: "ffffff",
    2380: "FFFF66",
    2192: "FFCC33",
    1950: "FF9900",
    1832: "FF6600",
    1650: "FF3300",
    1472: "FF3300",
    1292: "CC0000",
    1212: "990000",
    1060: "660000",
    752: "660000",
    572: "330000",
    439: "000000",
    212: "000000",
    0: "000000"
}

class ColorTemp{
    constructor(object = colorRange){
        this.color;
        this.lessThan;
        this.colorRange = Object.keys(object).map(key=>parseInt(key))
        this.getF = (temperature)=>{
            this.colorRange.some((target, index)=>{
                if (temperature <= target){
                    this.lessThan = {target: target, index:index}
                    return true
                } else {
                    this.lessThan = {target: target, index:index}
                }
            })
            
            //TODO: Find average color between the two target temperatures

            let average;
            this.lessThan.index === 0 ? average = this.lessThan.target : average = (this.lessThan.target + this.colorRange[(this.lessThan.index - 1)]) / 2

            if ( average <= temperature){
                this.color = object[`${this.lessThan.target}`]
            } else {
                this.color = object[`${this.lessThan.index === 0 ? this.colorRange[this.lessThan.index] : this.colorRange[this.lessThan.index - 1]}`]
            }
            return this.color
        }
    }
}

module.exports = ColorTemp