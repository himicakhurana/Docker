var availableTags = [];


$("#search_symbol").autocomplete({
    source: function (request, response) {
        $.ajax({
            type: "GET",
            dataType: "json",
            data: {
                symbol: request.term,
                autocomplete: true
            },
            async: true,
            url: "http://himicaphp-env.us-west-2.elasticbeanstalk.com/", //Relative or absolute path to response.php file
            success: function (data) {
                response(data);
                console.log("Form submitted successfully.\nReturned json:aass ");
            }

        });

    },
    minLength: 1

});



/*http://dev.markitondemand.com/MODApis/Api/v2/InteractiveChart/json?parameters={"Normalized":fa
lse,"NumberOfDays":1095,"DataPeriod":"Day","Elements":[{"Symbol":"AAPL","Type":"price","Params":[
"ohlc"]}]}*/
$(document).ready(function () {
    console.log("document loaded");
    populateFav();
    /* $.getJSON('http://himicaphp-env.us-west-2.elasticbeanstalk.com?symbol=AAPL&highcharts=true', function (data) {
        alert('dat');
        // Create the chart
        $('#container').highcharts('StockChart', {

            chart: {
                zoomType: 'x'
            },
            rangeSelector: {

                buttons: [{
                        type: 'week',
                        count: 1,
                        text: '1w'
                }, {
                        type: 'month',
                        count: 1,
                        text: '1m'
}, {
                        type: 'month',
                        count: 3,
                        text: '3m'
}, {
                        type: 'month',
                        count: 6,
                        text: '6m'
},
                    {
                        type: 'year',
                        count: 1,
                        text: '1y'
}, {
                        type: 'ytd',
                        text: 'YTD'
}, {
                        type: 'all',
                        text: 'All'
}],
                selected: 0
            },

            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: 'Exchange rate'
                }
            },

            legend: {
                enabled: false
            },
            title: {
                text: 'AAPL Stock Price'
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'area',
                name: 'USD to EUR',
                data: data
            }]
        });
    });
});
*/
    var sym = '{"Normalized":false,"NumberOfDays":1095,"DataPeriod":"Day","Elements":[{"Symbol":"AAPL","Type":"price","Params":["ohlc"]}]}';
    var data;
    var sym = 'AAPL';
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        data: {
            symbol: sym,
            news: true
        },
        async: true,
        jsonp: 'callback',
        jsonpCallback: 'news',
        url: "http://himicaphp-env.us-west-2.elasticbeanstalk.com/", //Relative or absolute path to response.php file
        success: function (data) {

            console.log("Form submitted successfully.\nReturned json:aa ");
        }

    });
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        data: {
            symbol: sym,
            table: true
        },
        async: true,
        jsonp: 'callback',
        jsonpCallback: 'table',
        url: "http://himicaphp-env.us-west-2.elasticbeanstalk.com/", //Relative or absolute path to response.php file
        success: function (data) {

            console.log("Form submitted successfully.\nReturned json:aa ");
        }

    });
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        data: {
            symbol: sym,
            highcharts: true
        },
        async: true,
        jsonp: 'callback',
        jsonpCallback: 'render',
        url: "http://himicaphp-env.us-west-2.elasticbeanstalk.com/", //Relative or absolute path to response.php file
        success: function (data) {

            console.log("Form submitted successfully.\nReturned json:aa ");
        }

    });
});

/* $.getJSON('http://dev.markitondemand.com/MODApis/Api/v2/InteractiveChart/json?parameters=%7b%22Normalized%22:false,%22NumberOfDays%22:1095,%22DataPeriod%22:%22Day%22,%22Elements%22:%5b%7b%22Symbol%22:%22AAPL%22,%22Type%22:%22price%22,%22Params%22:%5b%22ohlc%22%5d%7d%5d%7d&callback=?', function (data) {
     alert('ss');
 });*/
/*
    (function () {
        var flickerAPI = "http://dev.markitondemand.com/MODApis/Api/v2/InteractiveChart/json?jsoncallback=?";
        $.getJSON(flickerAPI, {
                Normalized: false,
                NumberOfDays: 1095,
                DataPeriod: "Day",
                Elements: [{
                    Symbol: "AAPL",

                    Type: "price",
                    Params: ["ohlc"]
	}]

            })
            .done(function (data) {
                alert("Form submitted successfully2");

            });
    })();
*/


function jsonpCallback2(data) {


    alert("Form submitted successfully2");
}
$("#search_symbol").on('change keyup keydown paste input', function () {
    console.log($("#search_symbol").val());

    /* var sym = $("#search_symbol").val();
     $.ajax({
         type: "GET",
         dataType: "jsonp",
         data: {
             symbol: sym,
             autocomplete: true
         },
         async: true,
         jsonp: 'callback',
         jsonpCallback: 'autocomplete',
         url: "http://himicaphp-env.us-west-2.elasticbeanstalk.com/", //Relative or absolute path to response.php file
         success: function (data) {

             console.log("Form submitted successfully.\nReturned json:aa ");
         }

     });*/

});

function autocomplete(data) {
    console.log("autocomplete");
    availableTags = [];
    var json = $.parseJSON(data);

    $.each(json,
        function (idx, obj) {
            var s = obj.Symbol + ' - ' + obj.Name;
            availableTags.push(s);
        });
    $("#search_symbol").autocomplete({
        source: availableTags
    });
}
/*$(".get-quote-form").submit(function () {
    e.preventDefault();

    var x = $("#search_symbol").val();
    alert(x + 'hi');

    if ($.inArray($("#search_symbol").val(), availableTags) > 0) {

        console.log("Val passed");
        var data;
        var sym = 'AAPL';
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            data: {
                symbol: sym,
                table: true
            },
            async: true,
            jsonp: 'callback',
            jsonpCallback: 'jsonpCallback',
            url: "http://himicaphp-env.us-west-2.elasticbeanstalk.com/", //Relative or absolute path to response.php file
            success: function (data) {
                var obj = $.parseJSON(data);
                console.log(obj.Name);

                console.log("Form submitted successfully.\nReturned aajson: ");
            }

        });
    } else {
        console.log("Select Valid Entry");
    }
    return false;

});*/
$("#getquote").on('click', function () {

    var x = $("#search_symbol").val();
    alert(x + 'hi');

    if ($.inArray($("#search_symbol").val(), availableTags) > 0) {

        console.log("Val passed");
        var data;
        var sym = 'AAPL';
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            data: {
                symbol: sym,
                table: true
            },
            async: true,
            jsonp: 'callback',
            jsonpCallback: 'jsonpCallback',
            url: "http://himicaphp-env.us-west-2.elasticbeanstalk.com/", //Relative or absolute path to response.php file
            success: function (data) {
                var obj = $.parseJSON(data);
                console.log(obj.Name);
                updateURL();

                function updateURL() {

                    if (history.pushState) {
                        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?symbol=' + sym;
                        window.history.pushState({
                            path: newurl
                        }, '', newurl);
                    }
                }

                console.log("Form submitted successfully.\nReturned aajson: ");
            }

        });

    } else {
        console.log("Select Valid Entry");
    }



    return false;

});
$("#fb-share").on('click', function () {
    alert('ss');
    var data = new Array();
    var sym = 'AAPL';
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        data: {
            symbol: sym
        },
        jsonp: 'callback',
        jsonpCallback: 'jsonpCallback',
        url: "http://himicaphp-env.us-west-2.elasticbeanstalk.com/", //Relative or absolute path to response.php file
        success: function (data) {
            var obj = $.parseJSON(data);
            alert(obj.Name);

            alert("Form submitted successfully.\nReturned json: ");
        }

    });
    /*   $.getJSON('http://himicaphp-env.us-west-2.elasticbeanstalk.com?callback=?','symbol=AAPL',function(res){
             var obj = $.parseJSON(res);

        alert('Your name is ');
});*/
});

function jsonpCallback(data) {
    var obj = $.parseJSON(data);
    console.log(obj.Name);

    console.log("Form submitted successfullyss");
}

function jsonpCallback2(data) {
    /*  var options = {
          chart: {
              renderTo: 'container',
              type: 'area'
          },
          plotOptions: {
              series: {
                  turboThreshold: 0
              }
          },
          series: [{}]
      };
      options.series[0].data = data;
      var chart = new Highcharts.Chart(options);*/

    var dates = data.Dates || [];
    var elements = data.Elements || [];
    var chartSeries = [];

    if (elements[0]) {

        for (var i = 0, datLen = dates.length; i < datLen; i++) {
            var dat = fixDate(dates[i]);
            var pointData = [
                dat,
                elements[0].DataSeries['open'].values[i],
                elements[0].DataSeries['high'].values[i],
                elements[0].DataSeries['low'].values[i],
                elements[0].DataSeries['close'].values[i]
            ];
            chartSeries.push(pointData);
        };
    }
    $('#container').highcharts('StockChart', {


        rangeSelector: {
            inputEnabled: false,
            buttons: [{
                    type: 'week',
                    count: 1,
                    text: '1w'
                }, {
                    type: 'month',
                    count: 1,
                    text: '1m'
}, {
                    type: 'month',
                    count: 3,
                    text: '3m'
}, {
                    type: 'month',
                    count: 6,
                    text: '6m'
},
                {
                    type: 'year',
                    count: 1,
                    text: '1y'
}, {
                    type: 'ytd',
                    text: 'YTD'
}, {
                    type: 'all',
                    text: 'All'
}],
            selected: 0
        },
        /*xAxis: {
            type: 'datetime'
        },*/
        yAxis: {
            title: {
                text: 'Exchange rate'
            }
        },
        title: {
            text: 'AAPL Stock Price'
        },
        /*plotOptions: {
            series: {
                pointStart: Date.UTC(2015, 0, 1)

            }
        },
*/
        series: [{
            name: 'AAPL Stock Price',
            data: data.DataSeries,
            type: 'area',
            threshold: null,
            tooltip: {
                valueDecimals: 2
            },
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
            }
            }]
    });

    console.log("Form submitted successfully");
}



function render(data) {
    var obj = $.parseJSON(data);

    var ohlc = getOHLC(obj);

    //alert(obj.Positions);
    // display historical chart in specified container
    $('#container').highcharts('StockChart', {

        rangeSelector: {
            allButtonsEnabled: true,
            buttons: [{
                type: 'week',
                count: 1,
                text: '1w'
						}, {
                type: 'month',
                count: 1,
                text: '1m'
						}, {
                type: 'month',
                count: 3,
                text: '3m'
						}, {
                type: 'month',
                count: 6,
                text: '6m'
						}, {
                type: 'ytd',
                text: 'YTD'
						}, {
                type: 'year',
                count: 1,
                text: '1y'
						}, {
                type: 'all',
                text: 'All'
						}],

            selected: 0
        },

        title: {
            text: 'AAPL Stock Price'
        },

        yAxis: [{
            title: {
                text: 'Stock Value'
            }
			}],

        series: [{
            name: 'AAPL Stock Price',
            data: ohlc,
            yAxis: 0,
            type: 'area',
            threshold: null,
            tooltip: {
                valueDecimals: 2
            },
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
            }
            }]
    });


}

getOHLC = function (json) {
    var dates = json.Dates || [];
    var elements = json.Elements || [];
    var chartSeries = [];

    if (elements[0]) {

        for (var i = 0, datLen = dates.length; i < datLen; i++) {
            var dat = fixDate(dates[i]);
            var pointData = [
                dat,
                //elements[0].DataSeries['open'].values[i],
                //elements[0].DataSeries['high'].values[i],
                //elements[0].DataSeries['low'].values[i],
                elements[0].DataSeries['close'].values[i]
            ];
            chartSeries.push(pointData);
        };
    }
    return chartSeries;
};

fixDate = function (dateIn) {
    var dat = new Date(dateIn);
    return Date.UTC(dat.getFullYear(), dat.getMonth(), dat.getDate());
};


function news(data) {
    alert('new');
    var json = $.parseJSON(data);
    console.log(json.d);
    $.each(json.d.results,
        function (idx, obj) {
            console.log(obj.Title);
            $("#news").append('<li><a href="' + obj.Url + '"><span class="news-link">' + obj.Title + '</span></a><p>' + obj.Description + '</p><span class="news-detail">Publisher:</span>' + obj.Source + '<br><span class="news-detail">Date:</span>' + obj.Date + '</li>');
        });

}

function table(data) {
    alert('new');
    var obj = $.parseJSON(data);
    $("#details").append('<tr><td>Name</td><td>' + obj.Name + '</td></tr>');
    $("#details").append('<tr><td>Symbol</td><td>' + obj.Symbol + '</td></tr>');
    $("#details").append('<tr><td>Last Price</td><td>' + obj.LastPrice + '</td></tr>');
    $("#details").append('<tr><td>Change</td><td>' + obj.Change + '</td></tr>');
    $("#details").append('<tr><td>Change Percent</td><td>' + obj.ChangePercent + '</td></tr>');
    $("#details").append('<tr><td>Change Percent</td><td>' + obj.ChangePercent + '</td></tr>');
    $("#details").append('<tr><td>Date</td><td>' + obj.Timestamp + '</td></tr>');
    $("#details").append('<tr><td>MarketCap</td><td>' + obj.MarketCap + '</td></tr>');
    $("#details").append('<tr><td>Volume</td><td>' + obj.Volume + '</td></tr>');
    $("#details").append('<tr><td>ChangeYTD</td><td>' + obj.ChangeYTD + '</td></tr>');
    $("#details").append('<tr><td>ChangePercentYTD</td><td>' + obj.ChangePercentYTD + '</td></tr>');
    $("#details").append('<tr><td>High</td><td>' + obj.High + '</td></tr>');
    $("#details").append('<tr><td>Low</td><td>' + obj.Low + '</td></tr>');
    $("#details").append('<tr><td>Open</td><td>' + obj.Open + '</td></tr>');
}
/*  FB.ui({
         method: 'feed',
         link: 'https://developers.facebook.com/docs/',
         caption: 'An example caption',
     }, function (response) {});*/

function populateFav() {
    var favorites = ["AAPL", "APLE", "VXAPL"];
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        data: {
            favorites: favorites,
            fav: true
        },
        async: true,
        jsonp: 'callback',
        jsonpCallback: 'favappend',
        url: "http://himicaphp-env.us-west-2.elasticbeanstalk.com/", //Relative or absolute path to response.php file
        success: function (data) {

            console.log("Form submitted successfully.\nReturned json:aa ");
        }

    });


}
$(document).on('click', ".trash-icon", function (event) {
    console.log('trash-icon');

    var rowindex = $(this).closest('tr').index();
    console.log('rowindex', rowindex);
    $("#favorites tr:eq(" + rowindex + ")").remove();

});


function favappend(data) {
    alert('reached');

    /*
        var json = $.parseJSON(data);
    */
    $.each(data,
        function (idx, obj) {

            $("#favorites").append('<tr><td>' + obj.Symbol + '</td><td>' + obj.Name + '</td><td>' + obj.LastPrice + '</td><td>' + obj.ChangePercent + '</td><td>' + obj.MarketCap + '</td><td> <button type="button" class="btn btn-default trash-icon">trash</button></td></tr>');

        });

}