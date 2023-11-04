function solution(arr) {
    let result = []; // Un array para almacenar todas las combinaciones únicas
  
    function combine(current, start) {
      for (let i = start; i < arr.length; i++) {
        current.push(arr[i]); // Agregar el elemento actual al conjunto actual
        result.push([...current]); // Agregar una copia del conjunto actual a las combinaciones resultantes
        combine(current, i + 1); // Llamar recursivamente para agregar más elementos a la combinación
        current.pop(); // Eliminar el elemento actual para explorar otras combinaciones
        while (arr[i] === arr[i + 1]) {
          i++; // Saltar elementos duplicados para evitar combinaciones duplicadas
        }   
      }
    }
  
    arr.sort(); // Ordenar el arreglo para agrupar elementos duplicados
  
    combine([], 0); // Iniciar la función recursiva con un conjunto vacío y el índice 0
  
    return result; // Devolver todas las combinaciones únicas
  }
  
  // Ejemplo con el conjunto [2, 4, 5, 5, 6]
  const conjunto = [10,10,50];
  console.log(solution(conjunto));