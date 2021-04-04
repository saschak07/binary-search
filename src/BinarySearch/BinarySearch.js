class BinarySearch{
    constructor(){
        this.foundElement = false
    }
    search(inputArray,searchObject){
        let middle = Math.trunc(inputArray.length/2)
        if(middle > 0){
            if(searchObject===inputArray[middle]){
                this.foundElement = true
                return true
            }
            if(searchObject<inputArray[middle]){
                let newArray = inputArray.slice(0,middle)
                this.search(newArray,searchObject)
            }
            if(searchObject>inputArray[middle]){
                let newArray = inputArray.slice(middle,inputArray.length)
                this.search(newArray,searchObject)
            }
        }
         return this.foundElement
    }
}
module.exports = BinarySearch