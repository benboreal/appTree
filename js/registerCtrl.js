$(document).ready(function() {	
	$('#firstName').dblclick(function() {
		var fname = $('#firstName').val();
		if((fname).length > 5){
			$('#lastName').removeClass('hidden');
			$('#lastName').addClass('form-control');
		}
			else if((fname).length < 5){
				alert("5 letters min. please");
			}
				else{
					alert("Don't understand");
				}
				console.log(fname);			
	});//end of $('#firstName').dblclick(function() {});

	$('#lastName').dblclick(function() {
		var lname = $('#lastName').val();
		if((lname).length > 5){
			$('#age').removeClass('hidden');
			$('#age').addClass('form-control');
		}
			else if((lname).length < 5){
				alert("5 letters min. please");
			}
				else{
					alert("Don't understand");
				}	
	});//end of $('#lastName').dblclick(function() {});
	$('#age').dblclick(function() {
		var ag = $('#age').val();

		if((ag) < 18){
			alert('forbidden under 18');
		}else if((ag) >= 18){
			$('#but2').removeClass('hidden');
			$('#but2').addClass('btn-btn-default');
			$('#but2').addClass('form-control');
			$('#userPict').removeClass('hidden');
			$('#userPict').addClass('form-control');
			var photo = $('#userPict').val();
			console.log(photo);
		}else{
			alert("Don't understand");
		} 
	});//end of $('#age')



});//end of$(document).ready(function() {});