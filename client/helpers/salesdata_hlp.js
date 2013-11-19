Template.salesdata.dataset = function () {

console.log('# helper dataset # starting ... ');
    return Sales2013.find({});
  };

Template.salesdata.rendered = function()
{
 
  $('.editable').editable(function(value, settings) { 
     console.log(this);
     console.log(value);
     console.log(settings);
     Sales2013.update(Session.get("selected_datapoint"), {$set: {total: parseInt(value)}});
     return(value);
  }, { 
     type    : 'text',
     style : 'inherit',
     width : 100,
     submit  : 'OK',
 });

     var cur = Sales2013.find();
     if (cur.count() === 0)  // do not render pie if no data
       return;
     var data = [];
     cur.forEach( function(sale) {
       data.push( [sale.region, sale.total]);
     });

  var plot1 = $.jqplot ('chart', [data], 
    { 
      seriesDefaults: {
        // Make this a pie chart.
        renderer: $.jqplot.PieRenderer, 
        rendererOptions: {
          // Put data labels on the pie slices.
          // By default, labels show the percentage of the slice.
          showDataLabels: true
        }
      }, 
      legend: { show:true, location: 'e' }
    });   
};

