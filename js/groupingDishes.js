function solution(dishes) {
    let ingredients = new Set()
    let result = []
    for(const dish of dishes){
        for(let i = 1 ; i<dish.length ; i++){
            ingredients.add(dish[i])
        }
    } 

    for(const ingredient of ingredients){
        let dishesArr = [ingredient]
        for(const dish of dishes){
            if(dish.some(e => e === ingredient)){
                dishesArr.push(dish[0])
            }
        }
        if(dishesArr.length > 2){
            result.push(dishesArr.sort())
        }
    }

    result.sort((a,b)=>{
        return a[0].localeCompare(b[0])
    })
    return result
}


dishes = [["sf", "Tomato", "Cucumber", "Salad", "Sauce"],
["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
["Quesadilla", "Chicken", "Cheese", "Sauce"],
["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]]

console.log(solution(dishes))

