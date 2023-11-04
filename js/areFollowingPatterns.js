function solution(strings, patterns) {

    let stringRegister = new Set()
    let patternRegister = new Set()
    for(let i = 0 ; i<strings.length; i++){
        let cstring = strings[i]
        let eqPattern = patterns[i]
        if(patternRegister.has(eqPattern) && !stringRegister.has(cstring)){
            return false
        }
        patternRegister.add(eqPattern)
        stringRegister.add(cstring)

        
        for(let j = 0 ; j < patterns.length ; j++){
            let tstring = strings[j]
            let tpattern = patterns[j]
            if(tstring === cstring){
            
                if(tpattern !== eqPattern){
                    return false
                }
            }
        }
    }
    
    return true
}

strings =
["cat", 
 "dog", 
 "doggy"]
patterns =
["a", 
 "b", 
 "b"]

console.log(solution(strings,patterns))
