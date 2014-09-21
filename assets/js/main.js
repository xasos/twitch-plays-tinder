			var tinderPeople = tinderPeople || [];
			var currentPerson = currentPerson || null;
			var list = {};

			$(document).ready(function(){
				nextPerson();

				function pollForPeople() {
					$.ajax({
						url: '//localhost:1337/main/get',
						data: '',
						type: 'GET',
						crossDomain: true,
						success: function(data){
							list = data;
							console.log(data);
						},
						error: function(){
							console.log("Could not load data.")
						}						
					});
				}
				
				// $(function() {
				//    $(window).keypress(function(l) {
				//        var ev = l || window.event;
				//        var key = ev.keyCode || ev.which;
				//        alert("l was pressed");
				//    });
				// });

				// $(function() {
				//    $(window).keypress(function(r) {
				//        var ev = r || window.event;
				//        var key = ev.keyCode || ev.which;
				//        alert("r was pressed");
				//    });
				// });

			$(document).keydown(function(event){
    				if (event.keyCode == 39) {
    					alert("right");
    				};

    				if (event.keyCode == 37) {
    					alert("left");
    				};		                
		            
		        });

				function nextPerson(){
					if(tinderPeople.length == 0){
						setTimeout(function(){
							pollForPeople();
							nextPerson();
						}, 500);
					}
					else {
						currentPerson = tinderPeople.pop();
						// process data into dom
					}
				}
			});
