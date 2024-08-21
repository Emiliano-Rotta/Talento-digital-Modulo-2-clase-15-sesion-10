var añoUno = parseInt(prompt("Escriba la cantidad de ventas (en millones) del 2016"))
var añoDos = parseInt(prompt("Escriba la cantidad de ventas (en millones) del 2017"))
var añoTres = parseInt(prompt("Escriba la cantidad de ventas (en millones) del 2018"))
var añoCuatro = parseInt(prompt("Escriba la cantidad de ventas (en millones) del 2019"))
var añoCinco = parseInt(prompt("Escriba la cantidad de ventas (en millones) del 2020"))
var añoSeis = parseInt(prompt("Escriba la cantidad de ventas (en millones) del 2021"))
var añoSiete = parseInt(prompt("Escriba la cantidad de ventas (en millones) del 2022"))
var añoOcho = parseInt(prompt("Escriba la cantidad de ventas (en millones) del 2023"))


window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        zoomEnabled: true,
        theme: "dark2",
        title:{
            text: "Ventas de la empresa 2016 - 2023"
        },
        axisX:{
            title: "Año",
            valueFormatString: "####",
            interval: 1
        },

        axisY2:{
            title: "Ventas en millones USD",
            prefix: "$",
            titleFontColor: "#51CDA0",
            logarithmic: false, //change it to true
            lineColor: "#51CDA0",
            gridThickness: 0,
            lineThickness: 1,
            labelFormatter: addSymbols
        },
        legend:{
            verticalAlign: "top",
            fontSize: 16,
            dockInsidePlotArea: true
        },
        data: [{
            type: "line",
            xValueFormatString: "####",
            yValueFormatString: "$#,##0.##",
            showInLegend: true,
            name: "Log Scale",
            dataPoints: [

            ]
        },
        {
            type: "line",
            xValueFormatString: "####",
            yValueFormatString: "$#,##0.##",
            axisYType: "secondary",
            showInLegend: true,
            name: "Linear Scale",
            dataPoints: [

                { x: 2016, y: añoUno },
                { x: 2017, y: añoDos },
                { x: 2018, y: añoTres }, 
                { x: 2019, y: añoCuatro }, 
                { x: 2020, y: añoCinco }, 
                { x: 2021, y: añoSeis }, 
                { x: 2022, y: añoSiete }, 
                { x: 2023, y: añoOcho }
            ]
        }]
    });
    chart.render();
    
    function addSymbols(e){
        var suffixes = ["", "K", "M", "B"];
    
        var order = Math.max(Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)), 0);
        if(order > suffixes.length - 1)
            order = suffixes.length - 1;
    
        var suffix = suffixes[order];
        return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
    }
    
    }