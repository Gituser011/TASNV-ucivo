var mojeOtazky = [
    {
        question: "Ako sa vám páči moja stránka?",
        odpovede: {
            a: "Veľmi dobrá",
            b: "Priemerná",
            c: "Zlá"
        },
        spravnaOdpodved: "a"
    },
    {
        question: "Čo bolo najlepšie?",
        odpovede: {
            a: "Poznatky z učiva",
            b: "Prevedenie",
            c: "Celkový dojem"
        },
        spravnaOdpodved: "c"
    },
    {
        question: "Koľko je: 150*3?",
        odpovede: {
            a: "350",
            b: "Neviem",
            c: "450"
        },
        spravnaOdpodved: "c"
    },
    {
        question: "Koľko je: 150*3+-546*4*56/-521+6?",
        odpovede: {
            a: "2",
            b: "3",
            c: "Neviem",
        },
        spravnaOdpodved: "c"
    },   
    {
        question: "Koľko je: 10*10?",
        odpovede: {
            a: "100",
            b: "1000",
            c: "Neviem"
        },
        spravnaOdpodved: "a"
    },
    {
        question: "Koľko hodín do týždňa by si chcel mať?",
        odpovede: {
            a: "1",
            b: "2",
            c: "40",
        },
        spravnaOdpodved: "a"
    },

    {
        question: "Čo je na našej škole najepšie?",
        odpovede: {
            a: "Učivo",
            b: "Žiaci",
            c: "Učitelia"
        },
        spravnaOdpodved: "b"
    },
    {
        question: "Ktorý predmet je najpeší?",
        odpovede: {
            a: "Základý výroby",
            b: "Telesná výchova",
            c: "Tvorba web stránok"
        },
        spravnaOdpodved: "c"
    },
    {
        question: "Ktoré je hlavné mesto Slovenska?",
        odpovede: {
            a: "Košice",
            b: "Bratislava",
            c: "Žilina"
        },
        spravnaOdpodved: "b"
    }


];

var quizPole = document.getElementById("quiz");
var odpovedePole = document.getElementById("results");
var tlacidlo = document.getElementById("submit");

generateQuiz(mojeOtazky, quizPole, odpovedePole, tlacidlo);

function generateQuiz(otazky, quizPole, odpovedePole, tlacidlo){

    function showQuestions(otazky, quizPole){
        var vystup = [];
        var odpovede;

        for(var i=0; i<otazky.length; i++){
            odpovede = [];
            for(letter in otazky[i].odpovede){
                // pridá html radio tlačidlo
                odpovede.push(
                    "<label>"
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ": "
                        + otazky[i].odpovede[letter]+"&nbsp;&nbsp;&nbsp;&nbsp;"
                    + "</label>"
                );
            }

            // pridá otázku a odpoveď do výstupu
            vystup.push(
                '<div class="question"><center>' + otazky[i].question + "</center></div>"
                + '<div class="odpovede">' + odpovede.join("") + "</div>"
            );
        }

        // spojí vystup do jedného html strigu a vypíše ho
        quizPole.innerHTML = vystup.join("");
    }


    function showResults(otazky, quizPole, odpovedePole){
        
        var answerContainers = quizPole.querySelectorAll(".odpovede");
        var userAnswer = '';
        var pocetSpravnych = 0;
        
        for(var i=0; i<otazky.length; i++){

            // najde zadanú odpoveď
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // ak je odpoveď dobrá
            if(userAnswer===otazky[i].spravnaOdpodved){
                // zvýší počet správnych odpovedí o jednu
                pocetSpravnych++;
                
                // zafarbí odpovede na zeleno
                answerContainers[i].style.color = "lightgreen";
            }
            // ak je odpoveď zlá
            else{
                // zafarbí odpovede na červeno
                answerContainers[i].style.color = "red";
            }
        }

        // vypíše počet správnych odpovedí
        if(pocetSpravnych == 1)
        {
            odpovedePole.innerHTML = "Mal si " + pocetSpravnych + " správnu odpoveď z: " + otazky.length;
        }
        else if(pocetSpravnych == 2)
        {
            odpovedePole.innerHTML = "Mal si " + pocetSpravnych + " správne odpovede z: " + otazky.length;
        }
        else if(pocetSpravnych == 3)
        {
            odpovedePole.innerHTML = "Mal si " + pocetSpravnych + " správne odpovede z: " + otazky.length;
        }
        else if(pocetSpravnych == 4)
        {
            odpovedePole.innerHTML = "Mal si " + pocetSpravnych + " správne odpovede z: " + otazky.length;
        }
        else 
        {
            odpovedePole.innerHTML = "Mal si " + pocetSpravnych + " správnych odpovedí z: " + otazky.length;
        }
        
    }

    // vypíše otázky
    showQuestions(otazky, quizPole);
    
    // po stlačení tlačidla, vypíše odpoveď
    tlacidlo.onclick = function(){
        showResults(otazky, quizPole, odpovedePole);
    }

}