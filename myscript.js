/*
Rifare l’esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all’interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, 
il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante “aggiungi”: 
cliccando sul pulsante, il testo digitato viene letto e utilizzato per 
creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per 
aggiungere il todo alla lista
2- cliccando sul testo dell’item, invertire il valore della proprietà done 
del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/

let app = new Vue ({
    el   : "#myApp",
    data :{
        active      : false,
        valoreInput : "",
        listaTodo   : [
            {
                text: "fare il corso",
                done: false
            },
            {
                text: "fare l'esercizio",
                done: false
            },
            {
                text: "preparare cena",
                done: false
            },
            {
                text: "pulire casa",
                done: false
            },
            {
                text: "alzarsi presto",
                done: false
            }

        ]
    },
    methods:{
        aggiungi: function(){
            this.listaTodo.push({
                text : this.valoreInput,
                done: false
            })
            this.valoreInput = "";  
        },
        fatto: function(indice){
            if(this.listaTodo[indice].done == true){
                return "sbarrato"
            }
        },
        verificato: function(indice){
            if(this.listaTodo[indice].done == true){
                this.listaTodo[indice].done = false
            } else { 
                this.listaTodo[indice].done = true
            }
        }
    }
})  