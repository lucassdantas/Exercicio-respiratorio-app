
/*NÃO UTILIZADO*/
//OUTRO OBJETO =============

//Este cria os arrays dos segundos 
//e pega os valores dos atributos
/*let SecondMaker = {

    //Atributes ==========

    Inspiracao:[0],
    Pause:[0],
    Expiracao:[0],


    //Methods ============

    Contador(Value) {
        //Cria um array do número selecionado até 0
        //Cria um array de 0 até o número selecionado
        let ValueList = []      
        ValueList[Value] = Value
        //let Count = ValueList[0]    
        for (let i = Value; i = 0; i--){
            ValueList[i] = i  
            console.log(i)          
        }     
        console.log(Value)
        return ValueList   
    },


    //Getters and Setters  -------
    ValueGetterSetter(){       
        //Pega os valores do exercício selecionado,
        //joga na função que cria um array e
        //define o resultado como os valores do obj
        let Selected = Exercicios.Selector()
        let InspValue = Selected.Inspiracao
        let PauseValue = Selected.Pausa
        let ExpValue = Selected.Expiracao
        //Setter
        this.Inspiracao = this.Contador(InspValue)
        this.Pause = this.Contador(PauseValue)
        this.Expiracao = this.Contador(ExpValue)
        console.log(InspValue)
    },

    getInspiracao(){
        return this.Inspiracao
    },

    setPause(nContado){
        let nContadoV = nContado.getPauseValue()
        let PauseValueF = this.Contador(nContadoV)
        this.Pause = PauseValueF
    },
    getPause(){
        return this.Pause
    },

    setExpiracao(nContado){
        let nContadoV = nContado.getExpValue()
        let ExpValueF = this.Contador(nContadoV)
        this.Expiracao = ExpValueF
    },
    getExpiracao(){
       return this.Expiracao
    },


}
*/

//OUTRO OBJETO==============
//Pega os valores do exercicio custom
let CustomValueGetter = {

    //Atributes -----

    inspValue: 0,
    PauseValue: 0, 
    expV: 0,
    ExpValue: 0,
    RepeatNumber: 0,

    
    //Getter and Setter ----

    setInspValue(){
        this.InspValue = document.querySelector("#InspValue")
    },
    getInspValue(){    
        return this.inspValue
    },


    setPauseValue(){
        this.PauseValue = document.querySelector("#PauseValue")
    },
    getPauseValue(){
        return this.PauseValue
    },


    setExpValue(){
        this.ExpValue = document.querySelector("#ExpValue")
    },
    getExpValue(){
        return this.ExpValue
    },
    
    setRepeatValue(){
        this.repeatNumber = document.querySelector("#RepeatNumber")
    },
    getRepeatValue(){
        return this.RepeatNumber
    }


}

//OUTRO OBJETO ===============
//Este define os atributos para os exercicios
let Exercicios = {

    //Atributes ----
    Default: {
        ExercName:"Default",
        Inspiracao: 1,
        Pausa: 1,
        Expiracao: 2,
        RepeatNumber: 2
    },

    Exercicio01: {
        ExercName:"Exercicio 01",
        Inspiracao: 10,
        Pausa: 10,
        Expiracao: 40,
        RepeatNumber: 6

    },

    Custom: {
        ExercName:"Custom",
        Inspiracao: CustomValueGetter.InspValue,
        Pausa: CustomValueGetter.PauseValue,
        Expiracao: CustomValueGetter.ExpValue,
        RepeatNumber: CustomValueGetter.RepeatNumber
    },

    Selected:"",

    //METHODS ----
    Selector(){
        //Verifica e retorna os valores do exercicio selecionado
        //pelo usuario
       let Select = document.querySelector("#SelectExerc").value
       let SelectV 
       switch (Select) {

            case "Padrão":
                SelectV = this.Default
                this.Selected = SelectV.ExercName.value
                break;

            case "Custom":
                SelectV = this.Custom
                console.log(SelectV.ExercName)
                this.Selected = SelectV.ExercName.value
                this.customVisibility()             
                break;
           
            case "1":
                SelectV = this.Exercicio01
                this.Selected = SelectV.ExercName
                break;    

           default:
               SelectV = undefined
               this.Selected = "none"
               break;
       }
        this.Selected = SelectV
        return SelectV

    },

    SelectRepeat(){
        //Verifica e retorna os valores da repetição
        //do exercicio selecionado pelo usuário
        let Selected = this.Selector()
        let RepeatNumber
        switch (Selected) {
            case this.Default:
                RepeatNumber = 4
                break;

            case this.Custom:
                RepeatNumber = document.querySelector("#RepeatNumber").value

            default:
                
                break;
        }
        
        return RepeatNumber
    },

    //Adiciona as opções para customizaçao
    customVisibility(){
        let CustomDiv = document.querySelectorAll(".Custom").classList

        function customShow(Custom){
            Custom.remove("CustomHidden")
            console.log("oi")
        }

        function customHide(Custom){
            Custom.add("CustomHidden")
            console.log("ei")    
        }    
        if (this.Selected == "Custom"){
            customShow(CustomDiv)
        } else {
            customHide(CustomDiv)
        }
    },


    //Getters ---
    getInspValue(){
        return this.Selector().Inspiracao
    },
    getPauseValue(){
        return this.Selector().Pause
    },
    getExpValue(){
        return this.Selector().Expiracao
    }
}

//OUTRO OBJETO ===============
//Seleciona os textos de inspiracao, expiracao e pausa
let SecondsSelector = {
    Inspiracao: document.querySelector("#InspText"),
    Pause: document.querySelector("#PauseText"),
    Expiracao: document.querySelector("#ExpText"),
    
    //Methods ------
    //Troca o valor da inspiração, expiração e pause
    //rN = repeatnumber
    Changer(Value, Value2, Value3, rN){
        if (rN > 0){
            Value2 = Value2 +rN
            Value3 = Value3 +rN
        }
        this.Inspiracao.innerText = String(Value)
        this.Pause.innerText = String(Value2)
        this.Expiracao.innerText = String(Value3)

    },
}

let Cutdown = {
    //Methods
    //Conta do valor do objeto passado até 0 e exibe 
    SecondSubtract(object){
        let interval = setInterval(Subtract, 1000, object)
        function Subtract(object){
            object.innerText = String(Number(object.innerHTML)-1)
            if(Number(object.innerHTML) <= 0){
                //reseta os valores e passa para a proxima etapa
                clearInterval(interval)
                listener.function++
                listener.fstate = "finish"
            }
        }
    }

}

//OUTRO OBJETO========================

//Verifica se os contadores terminaram
//Faz o programa parar quando o limite de repetições
//é alcançado
let listener = {
    //estado do programa
    status: "running",

    //função atual (inspiração, segurar ou expirar)
    function:0,

    //estado da função(em andameno ou acabada)
    fstate:"loading",

    //qual quadro está sendo diminuido (insp, segurar ou expirar)
    presentObj:"0",

    //Em qual repetição está
    repeatNumber: 0,

    globalChecker: {
        //executa a função atual
        exec(PresentObject, actualFunction){
            //Dependendo da função atual, vai rodar o cronometro
            if(actualFunction >= 4){
                listener.fstate = "finish"
            }
            else{
                listener.fstate = "loading"
                Cutdown.SecondSubtract(PresentObject)
                
            }
        },
            
        //cheka e setta a função, seu estado e objeto atual
        fChecker(){
            let principalChecker = setInterval(checker, 0)
            function checker(){
                let Status = listener.status
                let aF = listener.function
                let fS = listener.fstate
                let aB = listener.presentObj
                let rNumber = listener.repeatNumber 
                let rLimit = Exercicios.Selected.RepeatNumber
                console.log("oi")
                console.log(listener.status)
                
                //finaliza o cronometro
                if(Status == "close"){
                    clearInterval(principalChecker)
                }

                //soma as repetições e verifica se estas atingiram o limite
                listener.globalChecker.somador(rNumber, aF)

                //verifica se a função acabou,
                //troca o bloco a ser contado 
                //e executa o cronometro deste proximo bloco no "exec"
                if(fS == "finish"){
        
                    //verifica se o limite de repetições
                    //foi atingido
                    if (rNumber >= rLimit){
                        listener.status = "close"
                        aF = 0
                    }
                    //faz com que ele não rode mais funções
                    //se o app for finalizado
                    if (Status != "close"){
                        switch (aF) {
                            case 1:
                                aB = SecondsSelector.Inspiracao 
                                break;
    
                            case 2:
                                aB = SecondsSelector.Pause  
                                break;
    
                            case 3:
                                aB = SecondsSelector.Expiracao
                                break;    
    
                            default:
                                
    
                                break;
                        }
                        listener.globalChecker.exec(aB, aF)

                    }
                    
                }   
                

            }
        },

        //soma os valores após o fim da sequencia
        somador(rNumber, Presentfunction){
            if (Presentfunction >= 4){
                console.log(Presentfunction)
                listener.function = 1
                rNumber++
                listener.setRepeatNumber(rNumber)
                SecondsSelector.Changer(Exercicios.Default.Inspiracao, Exercicios.Default.Pausa, Exercicios.Default.Expiracao, rNumber)

            }
        }
    //endglobalchecker
    },

    setRepeatNumber(value){
        this.repeatNumber = value
    }

}


//Carrega as funções necessárias para o funcionamento do programa
LoadFunction = function(){
    Exercicios.Selector()
    //Trocar os parametros por nomes menores.
    SecondsSelector.Changer(Exercicios.Default.Inspiracao, Exercicios.Default.Pausa, Exercicios.Default.Expiracao, 0)
    
    

}
   
LoadFunction()
//seta os valores necessários para 
//o inicio da aplicação
function appInit(){
    listener.setRepeatNumber(0)
    listener.function = 1
    listener.fstate = "finish"
    listener.status = "running"
    listener.globalChecker.fChecker()
}
function appStop(){
    listener.status = "close"
    listener.function = 0
    listener.fstate = "loading"
    SecondsSelector.Changer(Exercicios.Selected.Inspiracao, Exercicios.Selected.Pausa, Exercicios.Selected.Expiracao)
}
let buttonInit = document.querySelector("#ButtonInit")
let buttonStop = document.querySelector("#ButtonStop")
buttonInit.addEventListener("click", appInit)
buttonStop.addEventListener("click", appStop)

/*
ANOTAÇÕES====
TENTAR FAZER O DADO DAS FUNÇÕOES NÃO ENTRAR NO IF

OBS: DEVO FAZER COM QUE OS VALORES PADRÕES VOLTEM
 A SER 5, 5 E 20 (EU TROQUEI 
    PARA QUE OS TESTES FIQUEM MAIS RÁPIDOS)
*/






