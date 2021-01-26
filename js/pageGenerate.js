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
			M.S from  UCLA September 2018 to Janunary 2020 <br>
			PhD Student from UCLA Janunary 2020 to present

		<h3> Publication: </h3>
			

			`

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
									<p> <a href="https://sites.google.com/view/vr-kitchen" target="_blank"> VRKitchen </a> : We have designed VRKitchen, 
									an interactive 3D virtual kitchen environment which provides a platform for training and evaluating various learning and planning algorithms
									in a variety of cooking tasks. With the help of virtual reality device, 
									human users serve as teachers for the agents by providing demonstrations in the virtual environment.
									<iframe width=640px" height=480px" src="https://www.youtube.com/embed/bpsoaJe-DAw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
									picture-in-picture" allowfullscreen></iframe>
									</p>

									<p> 
									<a href="https://www.sciencedirect.com/science/article/abs/pii/S0031320320301187?via%3Dihub" target="_blank">
									Learning to infer human attention in daily activities</a>:
									The first attention model in the computer science community is proposed in 1998. In the following years, human attention has been intensively studied. 
									However, these studies mainly refer human attention as the image regions that draw the attention of a human (outside the image) who is looking at the image. 
									In this paper, we infer the attention of a human inside a third-person view video where the human is doing a task, and define human attention as attentional objects 
									that coincide with the task the human is doing. To infer human attention, we propose a deep neural network model that fuses both low-level human pose cue and high-level task
									 encoding cue. Due to the lack of appropriate public datasets for studying this problem, we newly collect a video dataset in complex Virtual-Reality (VR) scenes. 
									 In the experiments, we widely compare our method with three other methods on this VR dataset. In addition, we re-annotate a public real dataset and conduct the extensional 
									 experiments on this real dataset. The experiment results validate the effectiveness of our method.
									</p>

									<p>
									<a href="https://xfgao.github.io/xCookingWeb/" target="_blank"> Joint Mind Modeling for Explanation Generation in Complex Human-Robot Collaborative Tasks </a>:
									Human collaborators can effectively communicate with their partners to finish a common task by inferring each other's mental states (e.g., goals, beliefs, and desires). 
									Such mind-aware communication minimizes the discrepancy among collaborators' mental states, and is crucial to the success in human ad-hoc teaming. 
									We believe that robots collaborating with human users should demonstrate similar pedagogic behavior. Thus, in this paper, we propose a novel explainable AI (XAI) framework 
									for achieving human-like communication in human-robot collaborations, where the robot builds a hierarchical mind model of the human user and generates explanations of its 
										own mind as a form of communications based on its online Bayesian inference of the user's mental state. To evaluate our framework, we conduct a user study on a real-time 
									human-robot cooking task. Experimental results show that the generated explanations of our approach significantly improves the collaboration performance and user perception
									 of the robot.
									 <iframe width="640" height="480" src="https://www.youtube.com/embed/Tuob5S_XMmE" frameborder="0" 
									 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
									</p>

									<p>
									<a href="https://evelinehong.github.io/smart-site/" target="_blank"> SMART: A Situation Model for Algebra Story Problems via Attributed Grammar</a>:
									Solving algebra story problems remains a challenging task in artificial intelligence, which requires a detailed understanding of real-world situations and a strong mathematical reasoning capability. 
									Previous neural solvers of math word problems directly translate problem texts into equations, lacking an explicit interpretation of the situations, 
									and often fail to handle more sophisticated situations. To address such limits of neural solvers, we introduce the concept of a situation model, 
									which originates from psychology studies to represent the mental states of humans in problem-solving, and propose SMART, 
									which adopts attributed grammar as the representation of situation models for algebra story problems. 
									Specifically, we first train an information extraction module to extract nodes, attributes, 
									and relations from problem texts and then generate a parse graph based on a pre-defined attributed grammar. 
									An iterative learning strategy is also proposed to improve the performance of SMART further. 
									To rigorously study this task, we carefully curate a new dataset named ASP6.6k. 
									Experimental results on ASP6.6k show that the proposed model outperforms all previous neural solvers by a large margin while preserving much better interpretability. 
									To test these models' generalization capability, we also design an out-of-distribution (OOD) evaluation, in which problems are more complex than those in the training set.
									 Our model exceeds state-of-the-art models by 17% in the OOD evaluation, demonstrating its superior generalization ability.


									</p>


						`
						).fadeIn(300);
				reset();
			});

});