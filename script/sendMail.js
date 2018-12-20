$(document).ready(function(){
	$('#form').on('submit', function(e){
		e.preventDefault();
		var data=$(this).serialize();

		$.ajax({
			url: '../sendmail.php',
			type: 'POST',
			data: data,
			success: function(){
				alert('sent!');
			},
			error: function(){
				alert('Error!');
			}
		});
	});
});
