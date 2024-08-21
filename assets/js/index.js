var lechuga = parseInt(prompt("Escriba la cantidad de kg de lechuga"))
var tomate = parseInt(prompt("Escriba la cantidad de kg de tomate"))
var kiwi = parseInt(prompt("Escriba la cantidad de kg de kiwi"))
var pepino = parseInt(prompt("Escriba la cantidad de kg de pepino"))
var uva = parseInt(prompt("Escriba la cantidad de kg de uva"))
var rucula = parseInt(prompt("Escriba la cantidad de kg de rucula"))
var naranja = parseInt(prompt("Escriba la cantidad de kg de naranja"))
var otros = parseInt(prompt("Escriba la cantidad de kg de otras"))
var suma = lechuga + tomate + kiwi + pepino + uva + rucula + naranja + otros
console.log(suma)



// 100 -->lechuga 170 -- 100% 58.8L   29.4T 11.7U
// 50--> tomate  20
// 20-->uva

window.onload = function () {

    var options = {
        title: {
            text: "Verduleria "
        },
        subtitles: [{
            text: "Fresca y barata"
        }],
          theme: "light1",
        animationEnabled: true,
        data: [{
            type: "pie",
            startAngle: 40,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: lechuga*100/suma, label: "Lechuga" },
                { y: tomate*100/suma, label: "Tomate" },
                { y: kiwi*100/suma, label: "Kiwi" },
                { y: pepino*100/suma, label: "Pepino" },
                { y: uva*100/suma, label: "Uva" },
                { y: rucula*100/suma, label: "Rucula" },
                { y: naranja*100/suma, label: "Naranja" },
                { y: otros*100/suma, label: "Otras frutas o verduras" }
            ]
        }]
    };
    $("#chartContainer").CanvasJSChart(options);
    
    }