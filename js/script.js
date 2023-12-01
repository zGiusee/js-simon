// DEFINISCO LA FUNZIONE CHE GENERI I NUMERI RANDOMICI NON UGUALI TRA LORO
function rngUnique(num_array){

    // Creo la flag
    let check_num = false;
    let random_num;

    // Eseguo un ciclo di verifica per i numeri che andranno dentro l'array
    while(!check_num){

        // Genero i numeri randomici
        random_num = Math.floor(Math.random() * 100 + 1);

        // Definisco la condizione della verifica, 
        // in questo caso = Se l'array non ha nessun elemento uguale al numero randomico allora = true
        if(!num_array.includes(random_num)){
            check_num = true;
        }
    }

    return random_num;

}

// DEFINISCO LA FUNZIONE CHE GENERI I 5 NUMERI CASUALI E LI METTA NELL'ARRAY
function numbersGenerator(){

    // Definisco l'array dove andranno inseriti i numeri
    const numbers_array = [ ];

    // Creo il ciclo che generi i numeri casuali per 5 volte
    for(let i = 0; i < 5; i++){

        numbers_array.push(rngUnique(numbers_array));
    }

    return numbers_array;
}

// DEFINISCO LA FUNZIONE CHE METTA A VIDEO I NUMERI CASUALI
function numberDisplay(){

    // Richiamo la variabile per recupreare i numeri
    let number = numbersGenerator();
    
    // Faccio in modo di far visualizzare i numeri nella lista a schermo
    let numberList = document.getElementById('numbers');
    
    let cell = document.createElement('li');

    cell.innerText = 'Numeri da memorizzare : ' + number.join(' ');
    
    numberList.appendChild(cell);
    
}

// DEFINISCO LA FUNZIONE CHE PERMETTA ALL'UTENTE DI INSERIRE I NUMERI
function userNum(){
    
    const user_num_array = [ ];
    
    while(user_num_array.length < 5){

        let userNum = parseInt(prompt('Inserisci i numeri'));
        
        user_num_array.push(userNum)

    }

    return user_num_array
}


// DEFINISCO LA FUNZIONE CHE CONFRONTI I NUMERI CASUALI 
// GENERATI E QUELLI SCRITTI DALL'UTENTE
function compareNumbers(arr1, arr2){
    
    const correctNum = [ ];

    if(!correctNum.includes(arr1, arr2)){
        
        correctNum.push(arr1)
    }

    return correctNum;
}

numberDisplay();

// DICHIARO LE 2 VARIABILI DEI 2 RISPETTIVI ARRAY
let computerNumArray = numbersGenerator();
console.log(computerNumArray);

let userNumArray = userNum();
console.log(userNumArray);

compareNumbers(computerNumArray, userNumArray);
console.log(compareNumbers(computerNumArray, userNumArray));




