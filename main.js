//Zona variables
var operaciones = Array("+","-");
var numero1 = Math.floor(Math.random() * 10) + 1;
var posArray = Math.floor(Math.random() * 2);
var numero2 = Math.floor(Math.random() * 10) + 1;
var x = 0;
solucion = 0;

//Script    
    x = posArray;
    alert(`La operacion presentada es ${numero1} ${operaciones[x]} ${numero2}`);
    var solucion = parseInt(prompt("Introduce tu solucion"));
   
    var operador = operaciones[x];

    if(operador === "+"){
    var evaluacion= eval(numero1 + numero2);
        if(evaluacion != solucion){
           
            alert(`Has fallado. La solucion era ${evaluacion} mientras que tu pusiste ${solucion}`);
           
        
        }else{
            alert(`Has acertado. Solución = ${evaluacion}`);
        }

    }

    if(operador === "-"){
        var evaluacion= eval(numero1 - numero2);
        if(solucion != evaluacion){
            alert(`Has fallado. La solucion era ${evaluacion} mientras que tu pusiste ${solucion}`);
            
        }else{
            alert(`Has acertado. Solución = ${evaluacion}`);
        }
    
    }
        


