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
function numbersGenerator(i){

    // Definisco l'array dove andranno inseriti i numeri
    let numbers_array = [ ];

    // Creo il ciclo che generi i numeri casuali per 5 volte
    for(i = 0; i < 5; i++){

        numbers_array.push(rngUnique(numbers_array));
    }

    console.log(numbers_array)

    return numbers_array;
}


function numberDisplay(i){
    
    let numberList = document.getElementById('numbers');
    
    let number = document.createElement('li');

    number.innerText = 'Numeri da memorizzare : ' + numbersGenerator(i).join(' ');
    
    numberList.appendChild(number);
    
}

function userNum(){
    
    const user_num_array = [ ];
    
    while(user_num_array.length < 5){

        let userNum = parseInt(prompt('Inserisci i numeri'));
        
        user_num_array.push(userNum)

    }

    console.log(user_num_array)

    return user_num_array
}

userNum()


numberDisplay();


