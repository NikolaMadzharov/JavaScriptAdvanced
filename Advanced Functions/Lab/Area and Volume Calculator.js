function area(){
    return Math.abs(this.x *this.y);
 };

function vol() {
    return Math.abs(this.x *this.y *this.z);
};
    
function solve(area, vol, input) {

    dataObj = JSON.parse(input);
    let result = [];
    for (const obj of dataObj) {
     
        let areaObj = area.call(obj);
        let volObj = vol.call(obj);
        result.push({
            area: areaObj,
            volume: volObj
        });
    }
    return result;
    }

 let result = solve(area, vol, `[
        {"x":"10","y":"-22","z":"10"},
        {"x":"47","y":"7","z":"-5"},
        {"x":"55","y":"8","z":"0"},
        {"x":"100","y":"100","z":"100"},
        {"x":"55","y":"80","z":"250"}
        ]`);
   
    console.log(JSON.stringify(result));