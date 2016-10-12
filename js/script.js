var slideIndex = 1;
var slideIndex2= 1;
reset();

function reset()
{
	slideIndex = 1;
	slideIndex2 = 1;
	showDivs(slideIndex);
	showDivs2(slideIndex2);
}

changeCaption();
changeCaption2();
function plusDivs2(n)
{
	showDivs2(slideIndex2 += n)
}
function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slideshow");
  if (x.length == 0) return;
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++)
  {
     x[i].style.display = "none";
  }

  x[slideIndex-1].style.display = "block";
}


function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("slideshow2");
  if (x.length==0) return;
  if (n > x.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = x.length}
  for (i = 0; i < x.length; i++)
  {
     x[i].style.display = "none";
  }
  x[slideIndex2-1].style.display = "block";
}

function changeCaption()
{

	var x= document.getElementsByClassName("caption");
	if (x.length == 0) return;
	
	for (i = 0; i < x.length; i++)
	{
		if (i == slideIndex-1 )
		{
			if (i == 0)
			x[i].innerHTML="The original file";
			else if (i == 1)
				x[i].innerHTML="The key value pair";
			else if (i == 2)
				x[i].innerHTML="The obfuscated output file";
			else if(i == 3)
				x[i].innerHTML="The web application window";

			x[i].style.color="red";
		
		}
		else
		{
			x[i].innerHTML="";
		}
	}
}


function changeCaption2()
{

	var x= document.getElementsByClassName("caption2");
	if (x.length==0) return;
	
	for (i = 0; i < x.length; i++)
	{
		if (i == slideIndex2-1 )
		{
			if (i == 0)
			x[i].innerHTML="Black and white palette";
			else if (i == 1)
				x[i].innerHTML="Rainbow palette";
			else if (i == 2)
				x[i].innerHTML="Color Blindness palette";

			x[i].style.color="red";
		
			
		}
		else
		{
			x[i].innerHTML="";
		}
	}
}