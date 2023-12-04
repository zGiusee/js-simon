// DEFINISCO LA FUNZIONE CHE GENERI I NUMERI RANDOMICI NON UGUALI TRA LORO
function rngUnique(num_array) {

    // Creo la flag
    let check_num = false;
    let random_num;

    // Eseguo un ciclo di verifica per i numeri che andranno dentro l'array
    while (!check_num) {

        // Genero i numeri randomici
        random_num = Math.floor(Math.random() * 100 + 1);

        // Definisco la condizione della verifica, 
        // in questo caso = Se l'array non ha nessun elemento uguale al numero randomico allora = true
        if (!num_array.includes(random_num)) {
            check_num = true;
        }
    }

    return random_num;

}

// DEFINISCO LA FUNZIONE CHE GENERI I 5 NUMERI CASUALI E LI METTA NELL'ARRAY
function numbersGenerator() {

    // Definisco l'array dove andranno inseriti i numeri
    const numbers_array = [];

    // Creo il ciclo che generi i numeri casuali per 5 volte
    for (let i = 0; i < 5; i++) {

        numbers_array.push(rngUnique(numbers_array));
    }

    return numbers_array;
}

// DEFINISCO LA FUNZIONE CHE METTA A VIDEO I NUMERI CASUALI
function numberDisplay() {

    // Richiamo la variabile per recupreare i numeri
    let number = numbersGenerator();

    // Faccio in modo di far visualizzare i numeri nella lista a schermo
    let numberList = document.getElementById('numbers');

    let cell = document.createElement('li');

    cell.innerText = 'Numeri da memorizzare : ' + number.join(' ');

    numberList.appendChild(cell);

    // Imposto il timer per far si che i numeri spariscano
    setTimeout(function () {
        cell.innerText = ' ';
    }, 4000)

    // Aggiungo nuovamente al dom i numeri del computer dopo l'inserimento dell'utente
    setTimeout(function () {
        cell.innerText = 'Numeri da memorizzare erano : ' + number.join(', ');
    }, 6000)

    return number;

}

// DEFINISCO LA FUNZIONE CHE PERMETTA ALL'UTENTE DI INSERIRE I NUMERI
function userNum() {

    // Creo la variabile di visualizzazione dei messaggi che ha inserito l'utente
    let userNumDisplay = document.getElementById('userNumbers');

    // Creo due variabili di messaggio 1'per le risposte giuse e la 2' per quelle sbagliate
    let guessedNumberDisplay = document.getElementById('guessed');
    let wrongNumberDisplay = document.getElementById('wrong');

    // Creo la variabile dello score
    let score = 0;

    // Creo l'array dei numeri corretti
    const correct_user_num_array = [];

    // Creo l'array dei numeri inseriti dall'utente (in questo caso mi servira solo per farli visualizzare nel dom)
    const userInputNumbers= []

    for (let i = 0; i < 5; i++) {

        let userNum = parseInt(prompt('Inserisci i numeri'));
        userInputNumbers.push(userNum)

        if(correct_user_num_array.includes(userNum)){
            
            // Aggiungo una varabile per i numeri inseriti 2 volte in modo che non conti sull'punteggio
            console.log('hai inserito los tesso numero 2 volte')
            
        }
        else if(computerNumbers.includes(userNum)) {
            score++;

            guessedNumberDisplay.innerText = 'Punti totalizzati : ' + score;
            correct_user_num_array.push(userNum);
        }
        else{
            wrongNumberDisplay.innerText = 'Hai sbagliato un totale di ' + (computerNumbers.length - score) + ' numeri';
        }
        


        userNumDisplay.innerText = 'I numeri da te inseriti sono : ' + userInputNumbers.join(', ');
    }

    return correct_user_num_array
}

// DEFIINSCO LA COSTANTE DEI NUMERI GENERATI DAL COMPUTER
const computerNumbers = numberDisplay();

// Imposto il timer per l'user prompt
setTimeout(userNum, 6000)




