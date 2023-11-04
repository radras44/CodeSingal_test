function solution(words, eqTable) {
    const encrypt = (word) => {
        const encryptedWord = []
        for(const letter of word){
            let row = eqTable.find(row => row[0] === letter)
                encryptedWord.push(row[1])
            }
        if(encryptedWord.length > 1 && encryptedWord[0] === "0"){return null}
        return parseInt(encryptedWord.join(""))       
     }
     
     encrypted = []
     
     for(const word of words){
         encryptedWord = encrypt(word)
         if(encryptedWord != null){
             encrypted.push(encryptedWord)            
         }else{
             return false
         }
     }

     console.log(encrypted)
     
     if(encrypted[0] + encrypted[1] === encrypted[2]){
         return true
     }
     return false
 }
 
 crypt =
 ["SEND", 
  "MORE", 
  "MONEY"]
 solutionGrid =
 [["O","0"], 
  ["M","1"], 
  ["Y","2"], 
  ["E","5"], 
  ["N","6"], 
  ["D","7"], 
  ["R","8"], 
  ["S","9"]]
            
console.log(solution(crypt,solutionGrid))