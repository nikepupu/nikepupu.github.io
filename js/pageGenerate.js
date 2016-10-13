index();

	function index()
	{
		$("#content").empty();
		$("#content").append('<h3>About Me</h3>'+
				'<p> I grow up in China. My family moved to Beijing when I was 6 years old.'+ 
				'Then we moved back to my hometown Chengdu when I was 12 years old.' +
				'I attened <a href="https://cdqz.net" target="_blank">Chengdu No.7 High school</a>.' +
				'Then I came to the United States. After studying 2 years in <a href="http://www.ucdavis.edu" target="_blank">UC Davis'+
				'</a> I transferred to UCLA so I can join a group of very talented people to compete in ACM-ICPC.</p>');
	
	}

$("#btn_index").click(index);

$("#btn_CV").click(
function ()
{
	$("#content").empty();
	$("#content").append(
		'<h3>Education: </h3>' +  
		'<p><a href="https://www.ucla.edu" target="_blank">University of California, Los Angeles  2016-2018</a> <br>' +
		'<a href="https://www.ucdavis.edu" target="_blank"> University of California, Davis 2014-2016 </a> <br>'+
		'Major: Computer science and Engineering <br>'+
		'GPA: 3.7 </p>'+
		'<h3>Related courses</h3>'+
		'<p>UC Davis: Machine Learning, Artifical Intelligence, Intro to Statistics, Data Structure, Algorithm Design <br>'+
			'UCLA: Signal and Systems</p>'+
		'<h3> Awards and hornors </h3>'+
		'<p>Alberta High School Math Competiton 13th palce 2013-2014 <br>' +
			'Euclid Math Contest Certificate of Distinction, school champion <br>'+
			'UC Davis Dean\'s honors list: winter 2015, spring 2015, fall 2015, spring 2016 <br>'+
		'</p>'+
		'<h3> Hobbies: </h3>'+
		'<p>'+
			'Table Tennis, basketball <br>'+
			'Starcraft2 <br></p>');
});

$("#btn_photos").click(
function ()
{
	
	$("#content").empty();
	$('#content').append( '<img class="slideshow" src="img/photo1.jpg" style="width:70%" style="height:60%" >'+
				'<img class="slideshow" src="img/photo2.jpg" style="width:70%" style="height:60%" >'+
				'<img class="slideshow" src="img/photo3.jpg" style="width:70%" style="height:60%" >'+
				'<img class="slideshow" src="img/photo4.jpg" style="width:70%" style="height:60%" >'+
				'<img class="slideshow" src="img/photo5.jpg" style="width:70%" style="height:60%" >'+
				'<a class="w3-btn-floating" style="position:absolute;top:45%;left:-2%" onclick="plusDivs(-1)">❮</a>'+
  				'<a class="w3-btn-floating" style="position:absolute;top:45%;right:27%" onclick="plusDivs(1)">❯</a>');
	reset();
});

$("#btn_projects").click(
function ()
{

	$('#content').empty();
	$('#content').append('<h3>Projects</h3>'+
				'<p>Due to confidentiality issues, I cannot show any thrid parties analysisy code of the following two projects.</p>'+
				'<h4>Datatron-obfuscator </h4>'+
				'<p> Obfuscator is trying to protect student information. Let\'s say if the university needs to give part of student information to a department to conduct some analysis, but the university does not want to give away some certain infomation like student IDs. University can use this tool to generate a unique random ID for each entry in that user specified column.</p>'+
				'<div>'+
				'	<figure>'+
				'		<img src="img/datatron1.png" width="80%" class="slideshow" style="height:60%" > '+
				'		<figcaption class="caption"></figcaption>'+
				'	</figure>'+
				'	<figure>'+
				'		<img src="img/datatron2.png" width="80%" class="slideshow" style="height:60%" >'+
				'		<figcaption class="caption"></figcaption>'+
				'	</figure>'+
				'	<figure>' +
				'		<img src="img/datatron3.png" width="80%" class="slideshow" style="height:60%" > '+
				'		<figcaption class="caption"></figcaption>	'+
				'	</figure>'+
				'	<figure>'+
				'		<img src="img/datatron4.png" width="80%" class="slideshow" style="height:60%" > '+
				'		<figcaption class="caption"></figcaption>'+
				'	</figure>						'+
				'	<a class="w3-btn-floating" style="position:absolute;top:35%;left:-2%" onclick="plusDivs(-1); changeCaption();">❮</a>'+
  				'	<a class="w3-btn-floating" style="position:absolute;top:35%;right:17%" onclick="plusDivs(1); changeCaption();">❯</a>'+
				'</div>'+
				'<h4> SeeIt color palette feature </h4>'+
				'<p> The color palette feature guarteens that no matter where you are, as long as you open up the webpage with the same dataset,'+ 
				'the graph will be identical (colors are not randomly generated).'+
				'Therefore, instructors and remote students can access the same thing from the same perspective </p>'+
				'<div>'+
				'	<figure>'+
				'		<img src="img/SeeIt1.png" width="80%" class="slideshow2">'+
				'		<figcaption class="caption2"></figcaption>'+
				'	</figure>'+
				'	<figure>'+
				'		<img src="img/SeeIt2.png" width="80%" class="slideshow2">'+
				'		<figcaption class="caption2"></figcaption>'+
				'	</figure>	'+
				'	<figure>'+
				'		<img src="img/SeeIt3.png" width="80%" class="slideshow2">'+
				'		<figcaption class="caption2"></figcaption>'+
				'	</figure>'+
				'	<a class="w3-btn-floating" style="position:absolute;top:80%;left:-2%" onclick="plusDivs2(-1);changeCaption2();">❮</a>'+
  				'	<a class="w3-btn-floating" style="position:absolute;top:80%;right:17%" onclick="plusDivs2(1);changeCaption2();">❯</a>'+
				'</div>');

		reset();
});