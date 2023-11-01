const returnNumber = function(str){
    if(typeof(str) === "string"){
        let formatted =  str.split('').filter(num => {
         let regex = /[0-9]/
              if(regex.test(+num)){
                  return num
              }
        }).join('')
        if( typeof(+formatted) === "number" && +formatted !== 0){
            return +formatted
        } else {
            return undefined
        }
    } else if (typeof(str) === "number") {
        return str
    } else {
        return undefined
    }
}
module.exports = returnNumber