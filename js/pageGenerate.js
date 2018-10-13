index();

	function index()
	{
		$("#content").fadeOut(500,
			function(){
				$("#content").empty().append(`<h3>About Me</h3>
												<p>enthusiastic about learning<p>
												<p>stay humble and remain positive<p>
					`
					
			).fadeIn(300); 
	  	} );
	
	}

$("#btn_index").click(index);

$("#btn_CV").click(
function ()
{
	
	$("#content").fadeOut(500, function(){
	$("#content").empty().append(
		`<h3>Education: </h3> 
			B.S. from UCLA  June 2018 <br>
			M.S from  UCLA September 2018 to present`
			).fadeIn(300); 
		});
});

$("#btn_photos").click(
function ()
{
	
	$("#content").fadeOut(500, function(){
	$('#content').empty().append( '<img class="slideshow" src="img/photo1.jpg" style="width:70%" style="height:60%" >'+
				'<img class="slideshow" src="img/photo2.jpg" style="width:70%" style="height:60%" >'+
				'<img class="slideshow" src="img/photo3.jpg" style="width:70%" style="height:60%" >'+
				'<img class="slideshow" src="img/photo4.jpg" style="width:70%" style="height:60%" >'+
				'<img class="slideshow" src="img/photo5.jpg" style="width:70%" style="height:60%" >'+
				'<a class="w3-btn-floating" style="position:absolute;top:45%;left:-2%" onclick="plusDivs(-1)">❮</a>'+
  				'<a class="w3-btn-floating" style="position:absolute;top:45%;right:27%" onclick="plusDivs(1)">❯</a>'
  				).fadeIn(300);
	reset();
	});
});

$("#btn_projects").click(
function ()
{
	
	$('#content').fadeOut(500, function(){
	$('#content').empty().append(`<h3>Projects</h3>
									<p>To Be Added</p>
						`
						).fadeIn(300);
				reset();
			});

});