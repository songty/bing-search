var acctKey = 'Rm9W8TmBftVwufignq3BzWPvxdQZeFiRDoR6f6kwWGY';
var rootUri = 'https://api.datamarket.azure.com/Bing/Search/v1/';
var query = 'xbox';
var source = 'web';

var auth    = new Buffer([ acctKey, acctKey ].join(':')).toString('base64');
var request = require('request').defaults({
  headers : {
    'Authorization' : 'Basic ' + auth
  }
});
var service_op = 'Web';
var query = 'xobo';
request.get({
    url : rootUri + '/' + service_op,
    qs  : {
      $format : 'json',
      Query   : "'" + query + "'", // the single quotes are required!
    }
  }, function(err, response, body) {
    var result = JSON.parse(body);
    console.log(result);
  });


// $(function() {
//   // Attaches a click handler to the button.
//   $('#bt_search').click(function(e) {
//     e.preventDefault();
//     // Clear the results div.
//     $('#results').empty();
//     var query = $('#query').val();
//     var serviceOp = $('input[name=service_op]:checked', '#my_form').val();
//     if (query)
//     search(query, serviceOp);
//   });

//   // Performs the search.
//   function search(query, serviceOp) {
//     // Establish the data to pass to the proxy.
//     var data = { q: query, sop: serviceOp, market: 'en-us' };
//     // Calls the proxy, passing the query, service operation and market.
//     $.getJSON('bing_proxy.php', data, function(obj) {
//       if (obj.d !== undefined)  {
//         var items = obj.d.results;
//         for (var k = 0, len = items.length; k < len; k++) {
//           var item = items[k];
//           switch (item.__metadata.type)
//           {
//             case 'WebResult': showWebResult(item);
//             break;
//             case 'ImageResult': showImageResult(item);
//             break;
//           }
//         }
//       }
//     });
//   }

//   // Shows one item of Web result.
//   function showWebResult(item) {
//     var p = document.createElement('p');
//     var a = document.createElement('a');
//     a.href = item.Url;
//     $(a).append(item.Title);
//     $(p).append(item.Description);

//     // Append the anchor tag and paragraph with the description to the results div.
//     $('#results').append(a, p);
//   }

//   // Shows one item of Image result.
//   function showImageResult(item) {
//     var p = document.createElement('p');
//     var a = document.createElement('a');
//     a.href = item.MediaUrl;
//     // Create an image element and set its source to the thumbnail.
//     var i = document.createElement('img');
//     i.src = item.Thumbnail.MediaUrl;
//     // Make the object that the user clicks the thumbnail image.
//     $(a).append(i);
//     $(p).append(item.Title);
//     // Append the anchor tag and paragraph with the title to the results div.
//     $('#results').append(a, p);
//   }
// });
