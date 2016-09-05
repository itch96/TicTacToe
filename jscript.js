function main() {
	var user = "U";
	var comp = "U";
	var array = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];
	var comments = ["The force is not strong with YOU!",
			   "You can never win this.",
			   "Live Long or Die Soon.",
			   "BAZINGA!",
			   "Lemonade!",
			   "It is FUTILE!",
			   "Relax. It's just x's and o's",
			   "8========D~",
			   "(===||:::::::::::::::>",
			   ")xxxxx[;;;;;;;;;>",
			   "(-(-_(-_-)_-)-)",
			   "(  . Y .  )",
			   "( o) ( o) -  -  -  -  -  -  (__(__)",
			  ];
	$('#x, #o').on('click', function(){

		user = this.innerHTML;
		if(user == "X") {comp = "O";}
		else {comp = "X";}

		$('#x').animate({left: '-50vw'}, 400);
		$('#o').animate({right: '-50vw'}, 400);
		$('#choseHeader').animate({top: '-10vh'}, 400);
		setTimeout(function(){
			$('#chose').css({display: 'none'});
			$('#status').css({display: 'block', top: '-10vh'}).animate({top: '0vh'}, 400);
			$('#sideX').css({display: 'block', left: '-10vh'}).animate({left: '0vh'}, 400);
			$('#sideO').css({display: 'block', right: '-10vh'}).animate({right: '0vh'}, 400);
			$('#comment').css({display: 'block', bottom: '-10vh'}).animate({bottom: '0vh'}, 400);
			$('#gameboard').fadeIn().css({display: 'block'});
		}, 600);
	});

	$('#gameboard > div > div').on('click', function(){
		// if there is no element in the box, user can enter element in the box
		// if there is already an element, show some visual error.
		if(this.innerHTML == "") {
			$(this).html(user);

			$('#status').html("Your turn.");

			// if the first move by user is in the first grid
			if(this.id == 'grid0' && array.join('') == "aaaaaaaaa")  { $('#grid4').html(comp); array[0] = 'x'; array[4] = 'o'; }
			// first move if the first move by user is in grid1
			else if(this.id == 'grid1' && array.join('') == "aaaaaaaaa")  { $('#grid0').html(comp); array[1] = 'x'; array[0] = 'o'; }
			// first move if the first move by user is in grid2
			else if(this.id == 'grid2' && array.join('') == "aaaaaaaaa")  { $('#grid4').html(comp); array[2] = 'x'; array[4] = 'o'; }
			// first move if the first move by user is in grid3
			else if(this.id == 'grid3' && array.join('') == "aaaaaaaaa")  { $('#grid0').html(comp); array[3] = 'x'; array[0] = 'o'; }
			// first move if the first move by user is in grid4
			else if(this.id == 'grid4' && array.join('') == "aaaaaaaaa")  { $('#grid0').html(comp); array[4] = 'x'; array[0] = 'o'; }
			// first move if the first move by user is in grid5
			else if(this.id == 'grid5' && array.join('') == "aaaaaaaaa")  { $('#grid2').html(comp); array[5] = 'x'; array[2] = 'o'; }
			// first move if the first move by user is in grid6
			else if(this.id == 'grid6' && array.join('') == "aaaaaaaaa")  { $('#grid4').html(comp); array[6] = 'x'; array[4] = 'o'; }
			// first move if the first move by user is in grid7
			else if(this.id == 'grid7' && array.join('') == "aaaaaaaaa")  { $('#grid1').html(comp); array[7] = 'x'; array[1] = 'o'; }
			// first move if the first move by user is in grid8
			else if(this.id == 'grid8' && array.join('') == "aaaaaaaaa")  { $('#grid4').html(comp); array[8] = 'x'; array[4] = 'o'; }


			// second move if the first move is in grid0 and the second move is in grid1
			else if(this.id == 'grid1' && array.join('') == "xaaaoaaaa")  { $('#grid2').html(comp); array[1] = 'x'; array[2] = 'o'; }
			// second move if the first move is in grid0 and the second move is in grid2
			else if(this.id == 'grid2' && array.join('') == "xaaaoaaaa")  { $('#grid1').html(comp); array[2] = 'x'; array[1] = 'o'; }
			// second move if the first move is in grid0 and the second move is in grid3
			else if(this.id == 'grid3' && array.join('') == "xaaaoaaaa")  { $('#grid6').html(comp); array[3] = 'x'; array[6] = 'o'; }
			// second move if the first move is in grid0 and the second move is in grid4
			// not possible as grid4 is not free
			// second move if the first move is in grid0 and the second move is in grid5
			else if(this.id == 'grid5' && array.join('') == "xaaaoaaaa")  { $('#grid1').html(comp); array[5] = 'x'; array[1] = 'o'; }
			// second move if the first move is in grid0 and the second move is in grid6
			else if(this.id == 'grid6' && array.join('') == "xaaaoaaaa")  { $('#grid3').html(comp); array[6] = 'x'; array[3] = 'o'; }
			// second move if the first move is in grid0 and the second move is in grid7
			else if(this.id == 'grid7' && array.join('') == "xaaaoaaaa")  { $('#grid3').html(comp); array[7] = 'x'; array[3] = 'o'; }
			// second move if the first move is in grid0 and the second move is in grid8
			else if(this.id == 'grid8' && array.join('') == "xaaaoaaaa")  { $('#grid1').html(comp); array[8] = 'x'; array[1] = 'o'; }

			// second move if the first move is in grid1 and the second move is in grid2
			else if(this.id == 'grid2' && array.join('') == "oxaaaaaaa")  { $('#grid3').html(comp); array[2] = 'x'; array[3] = 'o'; }
			// second move if the first move is in grid1 and the second move is in grid3
			else if(this.id == 'grid3' && array.join('') == "oxaaaaaaa")  { $('#grid4').html(comp); array[3] = 'x'; array[4] = 'o'; }
			// second move if the first move is in grid1 and the second move is in grid4
			else if(this.id == 'grid4' && array.join('') == "oxaaaaaaa")  { $('#grid7').html(comp); array[4] = 'x'; array[7] = 'o'; }
			// second move if the first move is in grid1 and the second move is in grid5
			else if(this.id == 'grid5' && array.join('') == "oxaaaaaaa")  { $('#grid6').html(comp); array[5] = 'x'; array[6] = 'o'; }
			// second move if the first move is in grid1 and the second move is in grid6
			else if(this.id == 'grid6' && array.join('') == "oxaaaaaaa")  { $('#grid4').html(comp); array[6] = 'x'; array[4] = 'o'; }
			// second move if the first move is in grid1 and the second move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oxaaaaaaa")  { $('#grid4').html(comp); array[7] = 'x'; array[4] = 'o'; }
			// second move if the first move is in grid1 and the second move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oxaaaaaaa")  { $('#grid4').html(comp); array[8] = 'x'; array[4] = 'o'; }

			// second move if the first move is in grid2 and the second move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aaxaoaaaa")  { $('#grid1').html(comp); array[0] = 'x'; array[1] = 'o'; }
			// second move if the first move is in grid2 and the second move is in grid1
			else if(this.id == 'grid1' && array.join('') == "aaxaoaaaa")  { $('#grid0').html(comp); array[1] = 'x'; array[0] = 'o'; }
			// second move if the first move is in grid2 and the second move is in grid3
			else if(this.id == 'grid3' && array.join('') == "aaxaoaaaa")  { $('#grid0').html(comp); array[3] = 'x'; array[0] = 'o'; }
			// second move if the first move is in grid2 and the second move is in grid5
			else if(this.id == 'grid5' && array.join('') == "aaxaoaaaa")  { $('#grid8').html(comp); array[5] = 'x'; array[8] = 'o'; }
			// second move if the first move is in grid2 and the second move is in grid6
			else if(this.id == 'grid6' && array.join('') == "aaxaoaaaa")  { $('#grid1').html(comp); array[6] = 'x'; array[1] = 'o'; }
			// second move if the first move is in grid2 and the second move is in grid7
			else if(this.id == 'grid7' && array.join('') == "aaxaoaaaa")  { $('#grid3').html(comp); array[7] = 'x'; array[3] = 'o'; }
			// second move if the first move is in grid2 and the second move is in grid8
			else if(this.id == 'grid8' && array.join('') == "aaxaoaaaa")  { $('#grid5').html(comp); array[8] = 'x'; array[5] = 'o'; }

			// second move if the first move is in grid3 and the second move is in grid1
			else if(this.id == 'grid1' && array.join('') == "oaaxaaaaa")  { $('#grid4').html(comp); array[1] = 'x'; array[4] = 'o'; }
			// second move if the first move is in grid3 and the second move is in grid2
			else if(this.id == 'grid2' && array.join('') == "oaaxaaaaa")  { $('#grid4').html(comp); array[2] = 'x'; array[4] = 'o'; }
			// second move if the first move is in grid3 and the second move is in grid4
			else if(this.id == 'grid4' && array.join('') == "oaaxaaaaa")  { $('#grid5').html(comp); array[4] = 'x'; array[5] = 'o'; }
			// second move if the first move is in grid3 and the second move is in grid5
			else if(this.id == 'grid5' && array.join('') == "oaaxaaaaa")  { $('#grid4').html(comp); array[5] = 'x'; array[4] = 'o'; }
			// second move if the first move is in grid3 and the second move is in grid6
			else if(this.id == 'grid6' && array.join('') == "oaaxaaaaa")  { $('#grid1').html(comp); array[6] = 'x'; array[1] = 'o'; }
			// second move if the first move is in grid3 and the second move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oaaxaaaaa")  { $('#grid2').html(comp); array[7] = 'x'; array[2] = 'o'; }
			// second move if the first move is in grid3 and the second move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oaaxaaaaa")  { $('#grid2').html(comp); array[8] = 'x'; array[2] = 'o'; }

			// second move if the first move is in grid4 and the second move is in grid1
			else if(this.id == 'grid1' && array.join('') == "oaaaxaaaa")  { $('#grid7').html(comp); array[1] = 'x'; array[7] = 'o'; }
			// second move if the first move is in grid4 and the second move is in grid2
			else if(this.id == 'grid2' && array.join('') == "oaaaxaaaa")  { $('#grid6').html(comp); array[2] = 'x'; array[6] = 'o'; }
			// second move if the first move is in grid4 and the second move is in grid3
			else if(this.id == 'grid3' && array.join('') == "oaaaxaaaa")  { $('#grid5').html(comp); array[3] = 'x'; array[5] = 'o'; }
			// second move if the first move is in grid4 and the second move is in grid5
			else if(this.id == 'grid5' && array.join('') == "oaaaxaaaa")  { $('#grid3').html(comp); array[5] = 'x'; array[3] = 'o'; }
			// second move if the first move is in grid4 and the second move is in grid6
			else if(this.id == 'grid6' && array.join('') == "oaaaxaaaa")  { $('#grid2').html(comp); array[6] = 'x'; array[2] = 'o'; }
			// second move if the first move is in grid4 and the second move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oaaaxaaaa")  { $('#grid1').html(comp); array[7] = 'x'; array[1] = 'o'; }
			// second move if the first move is in grid4 and the second move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oaaaxaaaa")  { $('#grid2').html(comp); array[8] = 'x'; array[2] = 'o'; }

			// second move if the first move is in grid5 and the second move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aaoaaxaaa")  { $('#grid3').html(comp); array[0] = 'x'; array[3] = 'o'; }
			// second move if the first move is in grid5 and the second move is in grid1
			else if(this.id == 'grid1' && array.join('') == "aaoaaxaaa")  { $('#grid3').html(comp); array[1] = 'x'; array[3] = 'o'; }
			// second move if the first move is in grid5 and the second move is in grid3
			else if(this.id == 'grid3' && array.join('') == "aaoaaxaaa")  { $('#grid4').html(comp); array[3] = 'x'; array[4] = 'o'; }
			// second move if the first move is in grid5 and the second move is in grid4
			else if(this.id == 'grid4' && array.join('') == "aaoaaxaaa")  { $('#grid3').html(comp); array[4] = 'x'; array[3] = 'o'; }
			// second move if the first move is in grid5 and the second move is in grid6
			else if(this.id == 'grid6' && array.join('') == "aaoaaxaaa")  { $('#grid0').html(comp); array[6] = 'x'; array[0] = 'o'; }
			// second move if the first move is in grid5 and the second move is in grid7
			else if(this.id == 'grid7' && array.join('') == "aaoaaxaaa")  { $('#grid0').html(comp); array[7] = 'x'; array[0] = 'o'; }
			// second move if the first move is in grid5 and the second move is in grid8
			else if(this.id == 'grid8' && array.join('') == "aaoaaxaaa")  { $('#grid0').html(comp); array[8] = 'x'; array[0] = 'o'; }

			// second move if the first move is in grid6 and the second move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aaaaoaxaa")  { $('#grid3').html(comp); array[0] = 'x'; array[3] = 'o'; }
			// second move if the first move is in grid6 and the second move is in grid1
			else if(this.id == 'grid1' && array.join('') == "aaaaoaxaa")  { $('#grid0').html(comp); array[1] = 'x'; array[0] = 'o'; }
			// second move if the first move is in grid6 and the second move is in grid2
			else if(this.id == 'grid2' && array.join('') == "aaaaoaxaa")  { $('#grid1').html(comp); array[2] = 'x'; array[1] = 'o'; }
			// second move if the first move is in grid6 and the second move is in grid3
			else if(this.id == 'grid3' && array.join('') == "aaaaoaxaa")  { $('#grid0').html(comp); array[3] = 'x'; array[0] = 'o'; }
			// second move if the first move is in grid6 and the second move is in grid5
			else if(this.id == 'grid5' && array.join('') == "aaaaoaxaa")  { $('#grid1').html(comp); array[5] = 'x'; array[1] = 'o'; }
			// second move if the first move is in grid6 and the second move is in grid7
			else if(this.id == 'grid7' && array.join('') == "aaaaoaxaa")  { $('#grid8').html(comp); array[7] = 'x'; array[8] = 'o'; }
			// second move if the first move is in grid6 and the second move is in grid8
			else if(this.id == 'grid8' && array.join('') == "aaaaoaxaa")  { $('#grid7').html(comp); array[8] = 'x'; array[7] = 'o'; }

			// second move if the first move is in grid7 and the second move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aoaaaaaxa")  { $('#grid6').html(comp); array[0] = 'x'; array[6] = 'o'; }
			// second move if the first move is in grid7 and the second move is in grid2
			else if(this.id == 'grid2' && array.join('') == "aoaaaaaxa")  { $('#grid6').html(comp); array[2] = 'x'; array[6] = 'o'; }
			// second move if the first move is in grid7 and the second move is in grid3
			else if(this.id == 'grid3' && array.join('') == "aoaaaaaxa")  { $('#grid6').html(comp); array[3] = 'x'; array[6] = 'o'; }
			// second move if the first move is in grid7 and the second move is in grid4
			else if(this.id == 'grid4' && array.join('') == "aoaaaaaxa")  { $('#grid0').html(comp); array[4] = 'x'; array[0] = 'o'; }
			// second move if the first move is in grid7 and the second move is in grid5
			else if(this.id == 'grid5' && array.join('') == "aoaaaaaxa")  { $('#grid6').html(comp); array[5] = 'x'; array[6] = 'o'; }
			// second move if the first move is in grid7 and the second move is in grid6
			else if(this.id == 'grid6' && array.join('') == "aoaaaaaxa")  { $('#grid8').html(comp); array[6] = 'x'; array[8] = 'o'; }
			// second move if the first move is in grid7 and the second move is in grid8
			else if(this.id == 'grid8' && array.join('') == "aoaaaaaxa")  { $('#grid6').html(comp); array[8] = 'x'; array[6] = 'o'; }

			// second move if the first move is in grid8 and the second move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aaaaoaaax")  { $('#grid1').html(comp); array[0] = 'x'; array[1] = 'o'; }
			// second move if the first move is in grid8 and the second move is in grid1
			else if(this.id == 'grid1' && array.join('') == "aaaaoaaax")  { $('#grid0').html(comp); array[1] = 'x'; array[0] = 'o'; }
			// second move if the first move is in grid8 and the second move is in grid2
			else if(this.id == 'grid2' && array.join('') == "aaaaoaaax")  { $('#grid5').html(comp); array[2] = 'x'; array[5] = 'o'; }
			// second move if the first move is in grid8 and the second move is in grid3
			else if(this.id == 'grid3' && array.join('') == "aaaaoaaax")  { $('#grid0').html(comp); array[3] = 'x'; array[0] = 'o'; }
			// second move if the first move is in grid8 and the second move is in grid5
			else if(this.id == 'grid5' && array.join('') == "aaaaoaaax")  { $('#grid2').html(comp); array[5] = 'x'; array[2] = 'o'; }
			// second move if the first move is in grid8 and the second move is in grid6
			else if(this.id == 'grid6' && array.join('') == "aaaaoaaax")  { $('#grid7').html(comp); array[6] = 'x'; array[7] = 'o'; }
			// second move if the first move is in grid8 and the second move is in grid7
			else if(this.id == 'grid7' && array.join('') == "aaaaoaaax")  { $('#grid6').html(comp); array[7] = 'x'; array[6] = 'o'; }


			// third move if the first move is in grid0, the second move is in grid1, and the third move is in grid3
			else if(this.id == 'grid3' && array.join('') == "xxoaoaaaa") { $('#grid6').html(comp); array[3] = 'x'; array[6] = 'o'; }
			// third move if the first move is in grid0, the second move is in grid1, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "xxoaoaaaa") { $('#grid6').html(comp); array[3] = 'x'; array[5] = 'o'; }
			// third move if the first move is in grid0, the second move is in grid1, and the third move is in grid6
			else if(this.id == 'grid6' && array.join('') == "xxoaoaaaa") { $('#grid3').html(comp); array[6] = 'x'; array[3] = 'o'; }
			// third move if the first move is in grid0, the second move is in grid1, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "xxoaoaaaa") { $('#grid6').html(comp); array[7] = 'x'; array[6] = 'o'; }
			// third move if the first move is in grid0, the second move is in grid1, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "xxoaoaaaa") { $('#grid6').html(comp); array[8] = 'x'; array[6] = 'o'; }

			// third move if the first move is in grid0, the second move is in grid2, and the third move is in grid3
			else if(this.id == 'grid3' && array.join('') == "xoxaoaaaa") { $('#grid7').html(comp); array[3] = 'x'; array[7] = 'o'; }
			// third move if the first move is in grid0, the second move is in grid2, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "xoxaoaaaa") { $('#grid7').html(comp); array[5] = 'x'; array[7] = 'o'; }
			// third move if the first move is in grid0, the second move is in grid2, and the third move is in grid6
			else if(this.id == 'grid6' && array.join('') == "xoxaoaaaa") { $('#grid7').html(comp); array[6] = 'x'; array[7] = 'o'; }
			// third move if the first move is in grid0, the second move is in grid2, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "xoxaoaaaa") { $('#grid3').html(comp); array[7] = 'x'; array[3] = 'o'; }
			// third move if the first move is in grid0, the second move is in grid2, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "xoxaoaaaa") { $('#grid7').html(comp); array[8] = 'x'; array[7] = 'o'; }

			// third move if the first move is in grid0, the second move is in grid3, and the third move is in grid1
			else if(this.id == 'grid1' && array.join('') == "xaaxoaoaa") { $('#grid2').html(comp); array[1] = 'x'; array[2] = 'o'; }
			// third move if the first move is in grid0, the second move is in grid3, and the third move is in grid2
			else if(this.id == 'grid2' && array.join('') == "xaaxoaoaa") { $('#grid1').html(comp); array[2] = 'x'; array[1] = 'o'; }
			// third move if the first move is in grid0, the second move is in grid3, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "xaaxoaoaa") { $('#grid2').html(comp); array[5] = 'x'; array[2] = 'o'; }
			// third move if the first move is in grid0, the second move is in grid3, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "xaaxoaoaa") { $('#grid2').html(comp); array[7] = 'x'; array[2] = 'o'; }
			// third move if the first move is in grid0, the second move is in grid3, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "xaaxoaoaa") { $('#grid2').html(comp); array[8] = 'x'; array[2] = 'o'; }

			// third move if the first move is in grid0, the second move is in grid5, and the third move is in grid2
			else if(this.id == 'grid2' && array.join('') == "xoaaoxaaa") { $('#grid7').html(comp); array[2] = 'x'; array[7] = 'o'; }
			// third move if the first move is in grid0, the second move is in grid5, and the third move is in grid3
			else if(this.id == 'grid3' && array.join('') == "xoaaoxaaa") { $('#grid7').html(comp); array[3] = 'x'; array[7] = 'o'; }
			// third move if the first move is in grid0, the second move is in grid5, and the third move is in grid6
			else if(this.id == 'grid6' && array.join('') == "xoaaoxaaa") { $('#grid7').html(comp); array[6] = 'x'; array[7] = 'o'; }
			// third move if the first move is in grid0, the second move is in grid5, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "xoaaoxaaa") { $('#grid6').html(comp); array[7] = 'x'; array[6] = 'o'; }
			// third move if the first move is in grid0, the second move is in grid5, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "xoaaoxaaa") { $('#grid7').html(comp); array[8] = 'x'; array[7] = 'o'; }

			// third move if the first move is in grid0, the second move is in grid6, and the third move is in grid1
			else if(this.id == 'grid1' && array.join('') == "xaaooaxaa") { $('#grid5').html(comp); array[1] = 'x'; array[5] = 'o'; }
			// third move if the first move is in grid0, the second move is in grid6, and the third move is in grid2
			else if(this.id == 'grid2' && array.join('') == "xaaooaxaa") { $('#grid5').html(comp); array[2] = 'x'; array[5] = 'o'; }
			// third move if the first move is in grid0, the second move is in grid6, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "xaaooaxaa") { $('#grid1').html(comp); array[5] = 'x'; array[1] = 'o'; }
			// third move if the first move is in grid0, the second move is in grid6, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "xaaooaxaa") { $('#grid5').html(comp); array[7] = 'x'; array[5] = 'o'; }
			// third move if the first move is in grid0, the second move is in grid6, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "xaaooaxaa") { $('#grid5').html(comp); array[8] = 'x'; array[5] = 'o'; }

			// third move if the first move is in grid0, the second move is in grid7, and the third move is in grid1
			else if(this.id == 'grid1' && array.join('') == "xaaooaaxa") { $('#grid5').html(comp); array[1] = 'x'; array[5] = 'o'; }
			// third move if the first move is in grid0, the second move is in grid7, and the third move is in grid2
			else if(this.id == 'grid2' && array.join('') == "xaaooaaxa") { $('#grid5').html(comp); array[2] = 'x'; array[5] = 'o'; }
			// third move if the first move is in grid0, the second move is in grid7, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "xaaooaaxa") { $('#grid2').html(comp); array[5] = 'x'; array[2] = 'o'; }
			// third move if the first move is in grid0, the second move is in grid7, and the third move is in grid6
			else if(this.id == 'grid6' && array.join('') == "xaaooaaxa") { $('#grid5').html(comp); array[6] = 'x'; array[5] = 'o'; }
			// third move if the first move is in grid0, the second move is in grid7, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "xaaooaaxa") { $('#grid5').html(comp); array[8] = 'x'; array[5] = 'o'; }

			// third move if the first move is in grid0, the second move is in grid8, and the third move is in grid2
			else if(this.id == 'grid2' && array.join('') == "xoaaoaaax") { $('#grid7').html(comp); array[2] = 'x'; array[7] = 'o'; }
			// third move if the first move is in grid0, the second move is in grid8, and the third move is in grid3
			else if(this.id == 'grid3' && array.join('') == "xoaaoaaax") { $('#grid7').html(comp); array[3] = 'x'; array[7] = 'o'; }
			// third move if the first move is in grid0, the second move is in grid8, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "xoaaoaaax") { $('#grid7').html(comp); array[5] = 'x'; array[7] = 'o'; }
			// third move if the first move is in grid0, the second move is in grid8, and the third move is in grid6
			else if(this.id == 'grid6' && array.join('') == "xoaaoaaax") { $('#grid7').html(comp); array[6] = 'x'; array[7] = 'o'; }
			// third move if the first move is in grid0, the second move is in grid8, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "xoaaoaaax") { $('#grid6').html(comp); array[7] = 'x'; array[6] = 'o'; }

			// third move if the first move is in grid1, the second move is in grid2, and the third move is in grid4
			else if(this.id == 'grid4' && array.join('') == "oxxoaaaaa") { $('#grid6').html(comp); array[4] = 'x'; array[6] = 'o'; }
			// third move if the first move is in grid1, the second move is in grid2, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "oxxoaaaaa") { $('#grid6').html(comp); array[5] = 'x'; array[6] = 'o'; }
			// third move if the first move is in grid1, the second move is in grid2, and the third move is in grid6
			else if(this.id == 'grid6' && array.join('') == "oxxoaaaaa") { $('#grid4').html(comp); array[6] = 'x'; array[4] = 'o'; }
			// third move if the first move is in grid1, the second move is in grid2, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oxxoaaaaa") { $('#grid6').html(comp); array[7] = 'x'; array[6] = 'o'; }
			// third move if the first move is in grid1, the second move is in grid2, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oxxoaaaaa") { $('#grid6').html(comp); array[8] = 'x'; array[6] = 'o'; }

			// third move if the first move is in grid1, the second move is in grid3, and the third move is in grid2
			else if(this.id == 'grid2' && array.join('') == "oxaxoaaaa") { $('#grid8').html(comp); array[2] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid1, the second move is in grid3, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "oxaxoaaaa") { $('#grid8').html(comp); array[5] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid1, the second move is in grid3, and the third move is in grid6
			else if(this.id == 'grid6' && array.join('') == "oxaxoaaaa") { $('#grid8').html(comp); array[6] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid1, the second move is in grid3, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oxaxoaaaa") { $('#grid8').html(comp); array[7] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid1, the second move is in grid3, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oxaxoaaaa") { $('#grid2').html(comp); array[8] = 'x'; array[2] = 'o'; }

			// third move if the first move is in grid1, the second move is in grid4, and the third move is in grid2
			else if(this.id == 'grid2' && array.join('') == "oxaaxaaoa") { $('#grid6').html(comp); array[2] = 'x'; array[6] = 'o'; }
			// third move if the first move is in grid1, the second move is in grid4, and the third move is in grid3
			else if(this.id == 'grid3' && array.join('') == "oxaaxaaoa") { $('#grid5').html(comp); array[3] = 'x'; array[5] = 'o'; }
			// third move if the first move is in grid1, the second move is in grid4, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "oxaaxaaoa") { $('#grid3').html(comp); array[5] = 'x'; array[3] = 'o'; }
			// third move if the first move is in grid1, the second move is in grid4, and the third move is in grid6
			else if(this.id == 'grid6' && array.join('') == "oxaaxaaoa") { $('#grid2').html(comp); array[6] = 'x'; array[2] = 'o'; }
			// third move if the first move is in grid1, the second move is in grid4, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oxaaxaaoa") { $('#grid2').html(comp); array[8] = 'x'; array[2] = 'o'; }

			// third move if the first move is in grid1, the second move is in grid5, and the third move is in grid2
			else if(this.id == 'grid2' && array.join('') == "oxaaaxoaa") { $('#grid3').html(comp); array[2] = 'x'; array[3] = 'o'; }
			// third move if the first move is in grid1, the second move is in grid5, and the third move is in grid3
			else if(this.id == 'grid3' && array.join('') == "oxaaaxoaa") { $('#grid4').html(comp); array[3] = 'x'; array[4] = 'o'; }
			// third move if the first move is in grid1, the second move is in grid5, and the third move is in grid4
			else if(this.id == 'grid4' && array.join('') == "oxaaaxoaa") { $('#grid3').html(comp); array[4] = 'x'; array[3] = 'o'; }
			// third move if the first move is in grid1, the second move is in grid5, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oxaaaxoaa") { $('#grid3').html(comp); array[7] = 'x'; array[3] = 'o'; }
			// third move if the first move is in grid1, the second move is in grid5, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oxaaaxoaa") { $('#grid3').html(comp); array[8] = 'x'; array[3] = 'o'; }

			// third move if the first move is in grid1, the second move is in grid6, and the third move is in grid2
			else if(this.id == 'grid2' && array.join('') == "oxaaoaxaa") { $('#grid8').html(comp); array[2] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid1, the second move is in grid6, and the third move is in grid3
			else if(this.id == 'grid3' && array.join('') == "oxaaoaxaa") { $('#grid8').html(comp); array[3] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid1, the second move is in grid6, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "oxaaoaxaa") { $('#grid8').html(comp); array[5] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid1, the second move is in grid6, and the third move is in grid7
			else if(this.id == 'grid2' && array.join('') == "oxaaoaxaa") { $('#grid8').html(comp); array[7] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid1, the second move is in grid6, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oxaaoaxaa") { $('#grid7').html(comp); array[8] = 'x'; array[7] = 'o'; }

			// third move if the first move is in grid1, the second move is in grid7, and the third move is in grid2
			else if(this.id == 'grid2' && array.join('') == "oxaaoaaxa") { $('#grid8').html(comp); array[2] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid1, the second move is in grid7, and the third move is in grid3
			else if(this.id == 'grid3' && array.join('') == "oxaaoaaxa") { $('#grid8').html(comp); array[3] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid1, the second move is in grid7, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "oxaaoaaxa") { $('#grid8').html(comp); array[5] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid1, the second move is in grid7, and the third move is in grid6
			else if(this.id == 'grid6' && array.join('') == "oxaaoaaxa") { $('#grid8').html(comp); array[6] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid1, the second move is in grid7, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oxaaoaaxa") { $('#grid6').html(comp); array[8] = 'x'; array[6] = 'o'; }

			// third move if the first move is in grid1, the second move is in grid8, and the third move is in grid2
			else if(this.id == 'grid2' && array.join('') == "oxaaoaaax") { $('#grid5').html(comp); array[2] = 'x'; array[5] = 'o'; }
			// third move if the first move is in grid1, the second move is in grid8, and the third move is in grid3
			else if(this.id == 'grid3' && array.join('') == "oxaaoaaax") { $('#grid2').html(comp); array[3] = 'x'; array[2] = 'o'; }
			// third move if the first move is in grid1, the second move is in grid8, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "oxaaoaaax") { $('#grid2').html(comp); array[5] = 'x'; array[2] = 'o'; }
			// third move if the first move is in grid1, the second move is in grid8, and the third move is in grid6
			else if(this.id == 'grid6' && array.join('') == "oxaaoaaax") { $('#grid7').html(comp); array[6] = 'x'; array[7] = 'o'; }
			// third move if the first move is in grid1, the second move is in grid8, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oxaaoaaax") { $('#grid6').html(comp); array[7] = 'x'; array[6] = 'o'; }

			// third move if the first move is in grid2, the second move is in grid0, and the third move is in gridx
			// this combination of 20 is same as that of the already done combination of 02.

			// third move if the first move is in grid2, the second move is in grid1, and the third move is in grid3
			else if(this.id == 'grid3' && array.join('') == "oxxaoaaaa") { $('#grid8').html(comp); array[3] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid2, the second move is in grid1, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "oxxaoaaaa") { $('#grid8').html(comp); array[5] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid2, the second move is in grid1, and the third move is in grid6
			else if(this.id == 'grid6' && array.join('') == "oxxaoaaaa") { $('#grid8').html(comp); array[6] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid2, the second move is in grid1, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oxxaoaaaa") { $('#grid8').html(comp); array[7] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid2, the second move is in grid1, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oxxaoaaaa") { $('#grid5').html(comp); array[8] = 'x'; array[5] = 'o'; }

			// third move if the first move is in grid2, the second move is in grid3, and the third move is in grid1
			else if(this.id == 'grid1' && array.join('') == "oaxxoaaaa") { $('#grid8').html(comp); array[1] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid2, the second move is in grid3, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "oaxxoaaaa") { $('#grid8').html(comp); array[5] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid2, the second move is in grid3, and the third move is in grid6
			else if(this.id == 'grid6' && array.join('') == "oaxxoaaaa") { $('#grid8').html(comp); array[6] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid2, the second move is in grid3, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oaxxoaaaa") { $('#grid8').html(comp); array[7] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid2, the second move is in grid3, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oaxxoaaaa") { $('#grid5').html(comp); array[8] = 'x'; array[5] = 'o'; }

			// third move if the first move is in grid2, the second move is in grid5, and the third move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aaxaoxaao") { $('#grid1').html(comp); array[0] = 'x'; array[1] = 'o'; }
			// third move if the first move is in grid2, the second move is in grid5, and the third move is in grid1
			else if(this.id == 'grid1' && array.join('') == "aaxaoxaao") { $('#grid0').html(comp); array[1] = 'x'; array[0] = 'o'; }
			// third move if the first move is in grid2, the second move is in grid5, and the third move is in grid3
			else if(this.id == 'grid3' && array.join('') == "aaxaoxaao") { $('#grid0').html(comp); array[3] = 'x'; array[0] = 'o'; }
			// third move if the first move is in grid2, the second move is in grid5, and the third move is in grid6
			else if(this.id == 'grid6' && array.join('') == "aaxaoxaao") { $('#grid0').html(comp); array[6] = 'x'; array[0] = 'o'; }
			// third move if the first move is in grid2, the second move is in grid5, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "aaxaoxaao") { $('#grid0').html(comp); array[7] = 'x'; array[0] = 'o'; }

			// third move if the first move is in grid2, the second move is in grid6, and the third move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aaxaoxaao") { $('#grid7').html(comp); array[0] = 'x'; array[7] = 'o'; }
			// third move if the first move is in grid2, the second move is in grid6, and the third move is in grid3
			else if(this.id == 'grid3' && array.join('') == "aaxaoxaao") { $('#grid7').html(comp); array[3] = 'x'; array[7] = 'o'; }
			// third move if the first move is in grid2, the second move is in grid6, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "aaxaoxaao") { $('#grid7').html(comp); array[5] = 'x'; array[7] = 'o'; }
			// third move if the first move is in grid2, the second move is in grid6, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "aaxaoxaao") { $('#grid8').html(comp); array[7] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid2, the second move is in grid6, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "aaxaoxaao") { $('#grid7').html(comp); array[8] = 'x'; array[7] = 'o'; }

			// third move if the first move is in grid2, the second move is in grid7, and the third move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aaxooaaxa") { $('#grid5').html(comp); array[0] = 'x'; array[5] = 'o'; }
			// third move if the first move is in grid2, the second move is in grid7, and the third move is in grid1
			else if(this.id == 'grid1' && array.join('') == "aaxooaaxa") { $('#grid5').html(comp); array[1] = 'x'; array[5] = 'o'; }
			// third move if the first move is in grid2, the second move is in grid7, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "aaxooaaxa") { $('#grid8').html(comp); array[5] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid2, the second move is in grid7, and the third move is in grid6
			else if(this.id == 'grid6' && array.join('') == "aaxooaaxa") { $('#grid5').html(comp); array[6] = 'x'; array[5] = 'o'; }
			// third move if the first move is in grid2, the second move is in grid7, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "aaxooaaxa") { $('#grid5').html(comp); array[8] = 'x'; array[5] = 'o'; }

			// third move if the first move is in grid2, the second move is in grid8, and the third move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aaxooaaxa") { $('#grid3').html(comp); array[0] = 'x'; array[3] = 'o'; }
			// third move if the first move is in grid2, the second move is in grid7, and the third move is in grid1
			else if(this.id == 'grid1' && array.join('') == "aaxooaaxa") { $('#grid3').html(comp); array[1] = 'x'; array[3] = 'o'; }
			// third move if the first move is in grid2, the second move is in grid7, and the third move is in grid3
			else if(this.id == 'grid3' && array.join('') == "aaxooaaxa") { $('#grid0').html(comp); array[3] = 'x'; array[0] = 'o'; }
			// third move if the first move is in grid2, the second move is in grid7, and the third move is in grid6
			else if(this.id == 'grid6' && array.join('') == "aaxooaaxa") { $('#grid3').html(comp); array[6] = 'x'; array[3] = 'o'; }
			// third move if the first move is in grid2, the second move is in grid7, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "aaxooaaxa") { $('#grid3').html(comp); array[7] = 'x'; array[3] = 'o'; }

			// third move if the first move is in grid3, the second move is in grid1, and the third move is in gridx
			// this combination of 31 is same as that of the already done combination of 13.

			// third move if the first move is in grid3, the second move is in grid2, and the third move is in grid1
			else if(this.id == 'grid1' && array.join('') == "oaxxoaaaa") { $('#grid8').html(comp); array[1] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid3, the second move is in grid7, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "oaxxoaaaa") { $('#grid8').html(comp); array[5] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid3, the second move is in grid7, and the third move is in grid6
			else if(this.id == 'grid6' && array.join('') == "oaxxoaaaa") { $('#grid8').html(comp); array[6] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid3, the second move is in grid7, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oaxxoaaaa") { $('#grid8').html(comp); array[7] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid3, the second move is in grid7, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oaxxoaaaa") { $('#grid5').html(comp); array[8] = 'x'; array[5] = 'o'; }

			// third move if the first move is in grid3, the second move is in grid4, and the third move is in grid1
			else if(this.id == 'grid1' && array.join('') == "oaaxxoaaa") { $('#grid7').html(comp); array[1] = 'x'; array[7] = 'o'; }
			// third move if the first move is in grid3, the second move is in grid4, and the third move is in grid2
			else if(this.id == 'grid2' && array.join('') == "oaaxxoaaa") { $('#grid6').html(comp); array[2] = 'x'; array[6] = 'o'; }
			// third move if the first move is in grid3, the second move is in grid4, and the third move is in grid6
			else if(this.id == 'grid6' && array.join('') == "oaaxxoaaa") { $('#grid2').html(comp); array[6] = 'x'; array[2] = 'o'; }
			// third move if the first move is in grid3, the second move is in grid4, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oaaxxoaaa") { $('#grid1').html(comp); array[7] = 'x'; array[1] = 'o'; }
			// third move if the first move is in grid3, the second move is in grid4, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oaaxxoaaa") { $('#grid1').html(comp); array[8] = 'x'; array[1] = 'o'; }

			// third move if the first move is in grid3, the second move is in grid5, and the third move is in grid1
			else if(this.id == 'grid1' && array.join('') == "oaaxoxaaa") { $('#grid8').html(comp); array[1] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid3, the second move is in grid5, and the third move is in grid2
			else if(this.id == 'grid2' && array.join('') == "oaaxoxaaa") { $('#grid8').html(comp); array[2] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid3, the second move is in grid5, and the third move is in grid6
			else if(this.id == 'grid6' && array.join('') == "oaaxoxaaa") { $('#grid8').html(comp); array[6] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid3, the second move is in grid5, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oaaxoxaaa") { $('#grid8').html(comp); array[7] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid3, the second move is in grid5, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oaaxoxaaa") { $('#grid2').html(comp); array[8] = 'x'; array[2] = 'o'; }

			// third move if the first move is in grid3, the second move is in grid6, and the third move is in grid2
			else if(this.id == 'grid2' && array.join('') == "ooaxaaxaa") { $('#grid4').html(comp); array[2] = 'x'; array[4] = 'o'; }
			// third move if the first move is in grid3, the second move is in grid6, and the third move is in grid4
			else if(this.id == 'grid4' && array.join('') == "ooaxaaxaa") { $('#grid2').html(comp); array[4] = 'x'; array[2] = 'o'; }
			// third move if the first move is in grid3, the second move is in grid6, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "ooaxaaxaa") { $('#grid2').html(comp); array[5] = 'x'; array[2] = 'o'; }
			// third move if the first move is in grid3, the second move is in grid6, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "ooaxaaxaa") { $('#grid2').html(comp); array[7] = 'x'; array[2] = 'o'; }
			// third move if the first move is in grid3, the second move is in grid6, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "ooaxaaxaa") { $('#grid2').html(comp); array[8] = 'x'; array[2] = 'o'; }

			// third move if the first move is in grid3, the second move is in grid7, and the third move is in grid1
			else if(this.id == 'grid1' && array.join('') == "oaoxaaaxa") { $('#grid4').html(comp); array[1] = 'x'; array[4] = 'o'; }
			// third move if the first move is in grid3, the second move is in grid7, and the third move is in grid4
			else if(this.id == 'grid4' && array.join('') == "oaoxaaaxa") { $('#grid1').html(comp); array[4] = 'x'; array[1] = 'o'; }
			// third move if the first move is in grid3, the second move is in grid7, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "oaoxaaaxa") { $('#grid1').html(comp); array[5] = 'x'; array[1] = 'o'; }
			// third move if the first move is in grid3, the second move is in grid7, and the third move is in grid6
			else if(this.id == 'grid6' && array.join('') == "oaoxaaaxa") { $('#grid1').html(comp); array[6] = 'x'; array[1] = 'o'; }
			// third move if the first move is in grid3, the second move is in grid7, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oaoxaaaxa") { $('#grid1').html(comp); array[8] = 'x'; array[1] = 'o'; }

			// third move if the first move is in grid3, the second move is in grid8, and the third move is in grid1
			else if(this.id == 'grid1' && array.join('') == "oaoxaaaax") { $('#grid4').html(comp); array[1] = 'x'; array[4] = 'o'; }
			// third move if the first move is in grid3, the second move is in grid8, and the third move is in grid4
			else if(this.id == 'grid4' && array.join('') == "oaoxaaaax") { $('#grid1').html(comp); array[4] = 'x'; array[1] = 'o'; }
			// third move if the first move is in grid3, the second move is in grid8, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "oaoxaaaax") { $('#grid1').html(comp); array[5] = 'x'; array[1] = 'o'; }
			// third move if the first move is in grid3, the second move is in grid8, and the third move is in grid6
			else if(this.id == 'grid6' && array.join('') == "oaoxaaaax") { $('#grid1').html(comp); array[6] = 'x'; array[1] = 'o'; }
			// third move if the first move is in grid3, the second move is in grid8, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oaoxaaaax") { $('#grid1').html(comp); array[7] = 'x'; array[1] = 'o'; }

			// third move if the first move is in grid4, the second move is in grid1, and the third move is in gridx
			// this combination of 41 is same as 14.

			// third move if the first move is in grid4, the second move is in grid2, and the third move is in grid1
			else if(this.id == 'grid1' && array.join('') == "oaxaxaoaa") { $('#grid3').html(comp); array[1] = 'x'; array[3] = 'o'; }
			// third move if the first move is in grid4, the second move is in grid2, and the third move is in grid3
			else if(this.id == 'grid3' && array.join('') == "oaxaxaoaa") { $('#grid5').html(comp); array[3] = 'x'; array[5] = 'o'; }
			// third move if the first move is in grid4, the second move is in grid2, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "oaxaxaoaa") { $('#grid3').html(comp); array[5] = 'x'; array[3] = 'o'; }
			// third move if the first move is in grid4, the second move is in grid2, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oaxaxaoaa") { $('#grid3').html(comp); array[7] = 'x'; array[3] = 'o'; }
			// third move if the first move is in grid4, the second move is in grid2, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oaxaxaoaa") { $('#grid3').html(comp); array[8] = 'x'; array[3] = 'o'; }

			// third move if the first move is in grid4, the second move is in grid3, and the third move is in gridx
			// this combination of 43 is same as 34

			// third move if the first move is in grid4, the second move is in grid5, and the third move is in grid1
			else if(this.id == 'grid1' && array.join('') == "oaaoxxaaa") { $('#grid6').html(comp); array[1] = 'x'; array[6] = 'o'; }
			// third move if the first move is in grid4, the second move is in grid5, and the third move is in grid2
			else if(this.id == 'grid2' && array.join('') == "oaaoxxaaa") { $('#grid6').html(comp); array[2] = 'x'; array[6] = 'o'; }
			// third move if the first move is in grid4, the second move is in grid5, and the third move is in grid6
			else if(this.id == 'grid6' && array.join('') == "oaaoxxaaa") { $('#grid2').html(comp); array[6] = 'x'; array[2] = 'o'; }
			// third move if the first move is in grid4, the second move is in grid5, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oaaoxxaaa") { $('#grid6').html(comp); array[7] = 'x'; array[6] = 'o'; }
			// third move if the first move is in grid4, the second move is in grid5, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oaaoxxaaa") { $('#grid6').html(comp); array[8] = 'x'; array[6] = 'o'; }

			// third move if the first move is in grid4, the second move is in grid6, and the third move is in grid1
			else if(this.id == 'grid1' && array.join('') == "oaoaxaxaa") { $('#grid7').html(comp); array[1] = 'x'; array[7] = 'o'; }
			// third move if the first move is in grid4, the second move is in grid6, and the third move is in grid3
			else if(this.id == 'grid3' && array.join('') == "oaoaxaxaa") { $('#grid1').html(comp); array[3] = 'x'; array[1] = 'o'; }
			// third move if the first move is in grid4, the second move is in grid6, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "oaoaxaxaa") { $('#grid1').html(comp); array[5] = 'x'; array[1] = 'o'; }
			// third move if the first move is in grid4, the second move is in grid6, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oaoaxaxaa") { $('#grid1').html(comp); array[7] = 'x'; array[1] = 'o'; }
			// third move if the first move is in grid4, the second move is in grid6, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oaoaxaxaa") { $('#grid1').html(comp); array[8] = 'x'; array[1] = 'o'; }

			// third move if the first move is in grid4, the second move is in grid7, and the third move is in grid2
			else if(this.id == 'grid2' && array.join('') == "ooaaxaaxa") { $('#grid6').html(comp); array[2] = 'x'; array[6] = 'o'; }
			// third move if the first move is in grid4, the second move is in grid7, and the third move is in grid3
			else if(this.id == 'grid3' && array.join('') == "ooaaxaaxa") { $('#grid2').html(comp); array[3] = 'x'; array[2] = 'o'; }
			// third move if the first move is in grid4, the second move is in grid7, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "ooaaxaaxa") { $('#grid2').html(comp); array[5] = 'x'; array[2] = 'o'; }
			// third move if the first move is in grid4, the second move is in grid7, and the third move is in grid6
			else if(this.id == 'grid6' && array.join('') == "ooaaxaaxa") { $('#grid2').html(comp); array[6] = 'x'; array[2] = 'o'; }
			// third move if the first move is in grid4, the second move is in grid7, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "ooaaxaaxa") { $('#grid2').html(comp); array[8] = 'x'; array[2] = 'o'; }

			// third move if the first move is in grid4, the second move is in grid8, and the third move is in grid1
			else if(this.id == 'grid1' && array.join('') == "oaoaxaaax") { $('#grid7').html(comp); array[1] = 'x'; array[7] = 'o'; }
			// third move if the first move is in grid4, the second move is in grid8, and the third move is in grid3
			else if(this.id == 'grid3' && array.join('') == "oaoaxaaax") { $('#grid1').html(comp); array[3] = 'x'; array[1] = 'o'; }
			// third move if the first move is in grid4, the second move is in grid8, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "oaoaxaaax") { $('#grid1').html(comp); array[5] = 'x'; array[1] = 'o'; }
			// third move if the first move is in grid4, the second move is in grid8, and the third move is in grid6
			else if(this.id == 'grid6' && array.join('') == "oaoaxaaax") { $('#grid1').html(comp); array[6] = 'x'; array[1] = 'o'; }
			// third move if the first move is in grid4, the second move is in grid8, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oaoaxaaax") { $('#grid1').html(comp); array[7] = 'x'; array[1] = 'o'; }

			// third move if the first move is in grid5, the second move is in grid0, and the third move is in grid1
			else if(this.id == 'grid1' && array.join('') == "xaooaxaaa") { $('#grid4').html(comp); array[1] = 'x'; array[4] = 'o'; }
			// third move if the first move is in grid5, the second move is in grid0, and the third move is in grid4
			else if(this.id == 'grid4' && array.join('') == "xaooaxaaa") { $('#grid8').html(comp); array[4] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid5, the second move is in grid0, and the third move is in grid6
			else if(this.id == 'grid6' && array.join('') == "xaooaxaaa") { $('#grid4').html(comp); array[6] = 'x'; array[4] = 'o'; }
			// third move if the first move is in grid5, the second move is in grid0, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "xaooaxaaa") { $('#grid4').html(comp); array[7] = 'x'; array[4] = 'o'; }
			// third move if the first move is in grid5, the second move is in grid0, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "xaooaxaaa") { $('#grid4').html(comp); array[8] = 'x'; array[4] = 'o'; }

			// third move if the first move is in grid5, the second move is in grid1, and the third move is in grid0
			else if(this.id == 'grid0' && array.join('') == "axooaxaaa") { $('#grid4').html(comp); array[0] = 'x'; array[4] = 'o'; }
			// third move if the first move is in grid5, the second move is in grid1, and the third move is in grid4
			else if(this.id == 'grid4' && array.join('') == "axooaxaaa") { $('#grid7').html(comp); array[4] = 'x'; array[7] = 'o'; }
			// third move if the first move is in grid5, the second move is in grid1, and the third move is in grid6
			else if(this.id == 'grid6' && array.join('') == "axooaxaaa") { $('#grid4').html(comp); array[6] = 'x'; array[4] = 'o'; }
			// third move if the first move is in grid5, the second move is in grid1, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "axooaxaaa") { $('#grid4').html(comp); array[7] = 'x'; array[4] = 'o'; }
			// third move if the first move is in grid5, the second move is in grid1, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "axooaxaaa") { $('#grid6').html(comp); array[8] = 'x'; array[6] = 'o'; }

			// third move if the first move is in grid5, the second move is in grid3, and the third move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aaoxoxaaa") { $('#grid6').html(comp); array[0] = 'x'; array[6] = 'o'; }
			// third move if the first move is in grid5, the second move is in grid3, and the third move is in grid1
			else if(this.id == 'grid1' && array.join('') == "aaoxoxaaa") { $('#grid6').html(comp); array[1] = 'x'; array[6] = 'o'; }
			// third move if the first move is in grid5, the second move is in grid3, and the third move is in grid6
			else if(this.id == 'grid6' && array.join('') == "aaoxoxaaa") { $('#grid0').html(comp); array[6] = 'x'; array[0] = 'o'; }
			// third move if the first move is in grid5, the second move is in grid3, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "aaoxoxaaa") { $('#grid6').html(comp); array[7] = 'x'; array[6] = 'o'; }
			// third move if the first move is in grid5, the second move is in grid3, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "aaoxoxaaa") { $('#grid6').html(comp); array[8] = 'x'; array[6] = 'o'; }

			// third move if the first move is in grid5, the second move is in grid4, and the third move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aaooxxaaa") { $('#grid8').html(comp); array[0] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid5, the second move is in grid4, and the third move is in grid1
			else if(this.id == 'grid1' && array.join('') == "aaooxxaaa") { $('#grid7').html(comp); array[1] = 'x'; array[7] = 'o'; }
			// third move if the first move is in grid5, the second move is in grid4, and the third move is in grid6
			else if(this.id == 'grid6' && array.join('') == "aaooxxaaa") { $('#grid0').html(comp); array[6] = 'x'; array[0] = 'o'; }
			// third move if the first move is in grid5, the second move is in grid4, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "aaooxxaaa") { $('#grid1').html(comp); array[7] = 'x'; array[1] = 'o'; }
			// third move if the first move is in grid5, the second move is in grid4, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "aaooxxaaa") { $('#grid0').html(comp); array[8] = 'x'; array[0] = 'o'; }

			// third move if the first move is in grid5, the second move is in grid6, and the third move is in grid1
			else if(this.id == 'grid1' && array.join('') == "oaoaaxxaa") { $('#grid4').html(comp); array[1] = 'x'; array[4] = 'o'; }
			// third move if the first move is in grid5, the second move is in grid6, and the third move is in grid3
			else if(this.id == 'grid3' && array.join('') == "oaoaaxxaa") { $('#grid1').html(comp); array[3] = 'x'; array[1] = 'o'; }
			// third move if the first move is in grid5, the second move is in grid6, and the third move is in grid4
			else if(this.id == 'grid4' && array.join('') == "oaoaaxxaa") { $('#grid1').html(comp); array[4] = 'x'; array[1] = 'o'; }
			// third move if the first move is in grid5, the second move is in grid6, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oaoaaxxaa") { $('#grid1').html(comp); array[7] = 'x'; array[1] = 'o'; }
			// third move if the first move is in grid5, the second move is in grid6, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oaoaaxxaa") { $('#grid1').html(comp); array[8] = 'x'; array[1] = 'o'; }

			// third move if the first move is in grid5, the second move is in grid7, and the third move is in grid1
			else if(this.id == 'grid1' && array.join('') == "oaoaaxaxa") { $('#grid4').html(comp); array[1] = 'x'; array[4] = 'o'; }
			// third move if the first move is in grid5, the second move is in grid7, and the third move is in grid3
			else if(this.id == 'grid3' && array.join('') == "oaoaaxaxa") { $('#grid1').html(comp); array[3] = 'x'; array[1] = 'o'; }
			// third move if the first move is in grid5, the second move is in grid7, and the third move is in grid4
			else if(this.id == 'grid4' && array.join('') == "oaoaaxaxa") { $('#grid1').html(comp); array[4] = 'x'; array[1] = 'o'; }
			// third move if the first move is in grid5, the second move is in grid7, and the third move is in grid6
			else if(this.id == 'grid6' && array.join('') == "oaoaaxaxa") { $('#grid1').html(comp); array[6] = 'x'; array[1] = 'o'; }
			// third move if the first move is in grid5, the second move is in grid7, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oaoaaxaxa") { $('#grid1').html(comp); array[8] = 'x'; array[1] = 'o'; }

			// third move if the first move is in grid5, the second move is in grid8, and the third move is in grid1
			else if(this.id == 'grid1' && array.join('') == "oaoaaxaax") { $('#grid6').html(comp); array[1] = 'x'; array[6] = 'o'; }
			// third move if the first move is in grid5, the second move is in grid8, and the third move is in grid3
			else if(this.id == 'grid3' && array.join('') == "oaoaaxaax") { $('#grid1').html(comp); array[3] = 'x'; array[1] = 'o'; }
			// third move if the first move is in grid5, the second move is in grid8, and the third move is in grid4
			else if(this.id == 'grid4' && array.join('') == "oaoaaxaax") { $('#grid1').html(comp); array[4] = 'x'; array[1] = 'o'; }
			// third move if the first move is in grid5, the second move is in grid8, and the third move is in grid6
			else if(this.id == 'grid6' && array.join('') == "oaoaaxaax") { $('#grid1').html(comp); array[6] = 'x'; array[1] = 'o'; }
			// third move if the first move is in grid5, the second move is in grid8, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oaoaaxaax") { $('#grid1').html(comp); array[7] = 'x'; array[1] = 'o'; }

			// third move if the first move is in grid6, the second move is in grid0, and the third move is in grid1
			// this combination of 60 is same as that of 06.

			// third move if the first move is in grid6, the second move is in grid1, and the third move is in grid2
			// this combination of 61 is same as that of 16.

			// third move if the first move is in grid6, the second move is in grid2, and the third move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aoxaoaxaa") { $('#grid7').html(comp); array[0] = 'x'; array[7] = 'o'; }
			// third move if the first move is in grid6, the second move is in grid2, and the third move is in grid3
			else if(this.id == 'grid3' && array.join('') == "aoxaoaxaa") { $('#grid7').html(comp); array[3] = 'x'; array[7] = 'o'; }
			// third move if the first move is in grid6, the second move is in grid2, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "aoxaoaxaa") { $('#grid7').html(comp); array[5] = 'x'; array[7] = 'o'; }
			// third move if the first move is in grid6, the second move is in grid2, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "aoxaoaxaa") { $('#grid8').html(comp); array[7] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid6, the second move is in grid2, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "aoxaoaxaa") { $('#grid7').html(comp); array[8] = 'x'; array[7] = 'o'; }

			// third move if the first move is in grid6, the second move is in grid3, and the third move is in grid1
			else if(this.id == 'grid1' && array.join('') == "oaaxoaxaa") { $('#grid8').html(comp); array[1] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid6, the second move is in grid3, and the third move is in grid2
			else if(this.id == 'grid2' && array.join('') == "oaaxoaxaa") { $('#grid8').html(comp); array[2] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid6, the second move is in grid3, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "oaaxoaxaa") { $('#grid8').html(comp); array[5] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid6, the second move is in grid3, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oaaxoaxaa") { $('#grid8').html(comp); array[7] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid6, the second move is in grid3, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oaaxoaxaa") { $('#grid7').html(comp); array[8] = 'x'; array[7] = 'o'; }

			// third move if the first move is in grid6, the second move is in grid5, and the third move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aoaaoxxaa") { $('#grid7').html(comp); array[0] = 'x'; array[7] = 'o'; }
			// third move if the first move is in grid6, the second move is in grid5, and the third move is in grid2
			else if(this.id == 'grid2' && array.join('') == "aoaaoxxaa") { $('#grid7').html(comp); array[2] = 'x'; array[7] = 'o'; }
			// third move if the first move is in grid6, the second move is in grid5, and the third move is in grid3
			else if(this.id == 'grid3' && array.join('') == "aoaaoxxaa") { $('#grid7').html(comp); array[3] = 'x'; array[7] = 'o'; }
			// third move if the first move is in grid6, the second move is in grid5, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "aoaaoxxaa") { $('#grid8').html(comp); array[7] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid6, the second move is in grid5, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "aoaaoxxaa") { $('#grid7').html(comp); array[8] = 'x'; array[7] = 'o'; }

			// third move if the first move is in grid6, the second move is in grid7, and the third move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aaaaoaxxo") { $('#grid3').html(comp); array[0] = 'x'; array[3] = 'o'; }
			// third move if the first move is in grid6, the second move is in grid7, and the third move is in grid1
			else if(this.id == 'grid1' && array.join('') == "aaaaoaxxo") { $('#grid0').html(comp); array[1] = 'x'; array[0] = 'o'; }
			// third move if the first move is in grid6, the second move is in grid7, and the third move is in grid2
			else if(this.id == 'grid2' && array.join('') == "aaaaoaxxo") { $('#grid0').html(comp); array[2] = 'x'; array[0] = 'o'; }
			// third move if the first move is in grid6, the second move is in grid7, and the third move is in grid3
			else if(this.id == 'grid3' && array.join('') == "aaaaoaxxo") { $('#grid0').html(comp); array[3] = 'x'; array[0] = 'o'; }
			// third move if the first move is in grid6, the second move is in grid7, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "aaaaoaxxo") { $('#grid0').html(comp); array[5] = 'x'; array[0] = 'o'; }

			// third move if the first move is in grid6, the second move is in grid8, and the third move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aaaaoaxox") { $('#grid1').html(comp); array[0] = 'x'; array[1] = 'o'; }
			// third move if the first move is in grid6, the second move is in grid8, and the third move is in grid1
			else if(this.id == 'grid1' && array.join('') == "aaaaoaxox") { $('#grid0').html(comp); array[1] = 'x'; array[0] = 'o'; }
			// third move if the first move is in grid6, the second move is in grid8, and the third move is in grid2
			else if(this.id == 'grid2' && array.join('') == "aaaaoaxox") { $('#grid1').html(comp); array[2] = 'x'; array[1] = 'o'; }
			// third move if the first move is in grid6, the second move is in grid8, and the third move is in grid3
			else if(this.id == 'grid3' && array.join('') == "aaaaoaxox") { $('#grid1').html(comp); array[3] = 'x'; array[1] = 'o'; }
			// third move if the first move is in grid6, the second move is in grid8, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "aaaaoaxox") { $('#grid1').html(comp); array[5] = 'x'; array[1] = 'o'; }

			// third move if the first move is in grid7, the second move is in grid0, and the third move is in grid2
			else if(this.id == 'grid2' && array.join('') == "xoaaaaoxa") { $('#grid4').html(comp); array[2] = 'x'; array[4] = 'o'; }
			// third move if the first move is in grid7, the second move is in grid0, and the third move is in grid3
			else if(this.id == 'grid3' && array.join('') == "xoaaaaoxa") { $('#grid4').html(comp); array[3] = 'x'; array[4] = 'o'; }
			// third move if the first move is in grid7, the second move is in grid0, and the third move is in grid4
			else if(this.id == 'grid4' && array.join('') == "xoaaaaoxa") { $('#grid8').html(comp); array[4] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid7, the second move is in grid0, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "xoaaaaoxa") { $('#grid4').html(comp); array[5] = 'x'; array[4] = 'o'; }
			// third move if the first move is in grid7, the second move is in grid0, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "xoaaaaoxa") { $('#grid4').html(comp); array[8] = 'x'; array[4] = 'o'; }

			// third move if the first move is in grid7, the second move is in grid2, and the third move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aoxaaaoxa") { $('#grid4').html(comp); array[0] = 'x'; array[4] = 'o'; }
			// third move if the first move is in grid7, the second move is in grid2, and the third move is in grid3
			else if(this.id == 'grid3' && array.join('') == "aoxaaaoxa") { $('#grid4').html(comp); array[3] = 'x'; array[4] = 'o'; }
			// third move if the first move is in grid7, the second move is in grid2, and the third move is in grid4
			else if(this.id == 'grid4' && array.join('') == "aoxaaaoxa") { $('#grid0').html(comp); array[4] = 'x'; array[0] = 'o'; }
			// third move if the first move is in grid7, the second move is in grid2, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "aoxaaaoxa") { $('#grid8').html(comp); array[5] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid7, the second move is in grid2, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "aoxaaaoxa") { $('#grid5').html(comp); array[8] = 'x'; array[5] = 'o'; }

			// third move if the first move is in grid7, the second move is in grid3, and the third move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aoaxaaoxa") { $('#grid4').html(comp); array[0] = 'x'; array[4] = 'o'; }
			// third move if the first move is in grid7, the second move is in grid3, and the third move is in grid2
			else if(this.id == 'grid2' && array.join('') == "aoaxaaoxa") { $('#grid4').html(comp); array[2] = 'x'; array[4] = 'o'; }
			// third move if the first move is in grid7, the second move is in grid3, and the third move is in grid4
			else if(this.id == 'grid4' && array.join('') == "aoaxaaoxa") { $('#grid5').html(comp); array[4] = 'x'; array[5] = 'o'; }
			// third move if the first move is in grid7, the second move is in grid3, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "aoaxaaoxa") { $('#grid4').html(comp); array[5] = 'x'; array[4] = 'o'; }
			// third move if the first move is in grid7, the second move is in grid3, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "aoaxaaoxa") { $('#grid2').html(comp); array[8] = 'x'; array[2] = 'o'; }

			// third move if the first move is in grid7, the second move is in grid4, and the third move is in grid2
			// this combination of 74 is same as that of 47.

			// third move if the first move is in grid7, the second move is in grid5, and the third move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aoaaaxoxa") { $('#grid4').html(comp); array[0] = 'x'; array[4] = 'o'; }
			// third move if the first move is in grid7, the second move is in grid5, and the third move is in grid2
			else if(this.id == 'grid2' && array.join('') == "aoaaaxoxa") { $('#grid8').html(comp); array[2] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid7, the second move is in grid5, and the third move is in grid3
			else if(this.id == 'grid3' && array.join('') == "aoaaaxoxa") { $('#grid8').html(comp); array[3] = 'x'; array[8] = 'o'; }
			// third move if the first move is in grid7, the second move is in grid5, and the third move is in grid4
			else if(this.id == 'grid4' && array.join('') == "aoaaaxoxa") { $('#grid3').html(comp); array[4] = 'x'; array[3] = 'o'; }
			// third move if the first move is in grid7, the second move is in grid5, and the third move is in grid8
			else if(this.id == 'grid8' && array.join('') == "aoaaaxoxa") { $('#grid2').html(comp); array[8] = 'x'; array[2] = 'o'; }

			// third move if the first move is in grid7, the second move is in grid6, and the third move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aoaaaaxxo") { $('#grid3').html(comp); array[0] = 'x'; array[3] = 'o'; }
			// third move if the first move is in grid7, the second move is in grid6, and the third move is in grid2
			else if(this.id == 'grid2' && array.join('') == "aoaaaaxxo") { $('#grid4').html(comp); array[2] = 'x'; array[4] = 'o'; }
			// third move if the first move is in grid7, the second move is in grid6, and the third move is in grid3
			else if(this.id == 'grid3' && array.join('') == "aoaaaaxxo") { $('#grid0').html(comp); array[3] = 'x'; array[0] = 'o'; }
			// third move if the first move is in grid7, the second move is in grid6, and the third move is in grid4
			else if(this.id == 'grid4' && array.join('') == "aoaaaaxxo") { $('#grid2').html(comp); array[4] = 'x'; array[2] = 'o'; }
			// third move if the first move is in grid7, the second move is in grid6, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "aoaaaaxxo") { $('#grid0').html(comp); array[5] = 'x'; array[0] = 'o'; }

			// third move if the first move is in grid7, the second move is in grid8, and the third move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aoaaaaoxx") { $('#grid4').html(comp); array[0] = 'x'; array[4] = 'o'; }
			// third move if the first move is in grid7, the second move is in grid8, and the third move is in grid2
			else if(this.id == 'grid2' && array.join('') == "aoaaaaoxx") { $('#grid5').html(comp); array[2] = 'x'; array[5] = 'o'; }
			// third move if the first move is in grid7, the second move is in grid8, and the third move is in grid3
			else if(this.id == 'grid3' && array.join('') == "aoaaaaoxx") { $('#grid2').html(comp); array[3] = 'x'; array[2] = 'o'; }
			// third move if the first move is in grid7, the second move is in grid8, and the third move is in grid4
			else if(this.id == 'grid4' && array.join('') == "aoaaaaoxx") { $('#grid0').html(comp); array[4] = 'x'; array[0] = 'o'; }
			// third move if the first move is in grid7, the second move is in grid8, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "aoaaaaoxx") { $('#grid2').html(comp); array[5] = 'x'; array[2] = 'o'; }

			// third move if the first move is in grid8, the second move is in grid0, and the third move is in grid2
			// this combination of 80 is same as that of 08.

			// third move if the first move is in grid8, the second move is in grid1, and the third move is in grid2
			// this combination of 81 is same as that of 18.

			// third move if the first move is in grid8, the second move is in grid2, and the third move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aaxaooaax") { $('#grid3').html(comp); array[0] = 'x'; array[3] = 'o'; }
			// third move if the first move is in grid8, the second move is in grid2, and the third move is in grid1
			else if(this.id == 'grid1' && array.join('') == "aaxaooaax") { $('#grid3').html(comp); array[1] = 'x'; array[3] = 'o'; }
			// third move if the first move is in grid8, the second move is in grid2, and the third move is in grid3
			else if(this.id == 'grid3' && array.join('') == "aaxaooaax") { $('#grid0').html(comp); array[3] = 'x'; array[0] = 'o'; }
			// third move if the first move is in grid8, the second move is in grid2, and the third move is in grid6
			else if(this.id == 'grid6' && array.join('') == "aaxaooaax") { $('#grid3').html(comp); array[6] = 'x'; array[3] = 'o'; }
			// third move if the first move is in grid8, the second move is in grid2, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "aaxaooaax") { $('#grid3').html(comp); array[7] = 'x'; array[3] = 'o'; }

			// third move if the first move is in grid8, the second move is in grid3, and the third move is in grid1
			else if(this.id == 'grid1' && array.join('') == "oaaxoaaax") { $('#grid2').html(comp); array[1] = 'x'; array[2] = 'o'; }
			// third move if the first move is in grid8, the second move is in grid3, and the third move is in grid2
			else if(this.id == 'grid2' && array.join('') == "oaaxoaaax") { $('#grid5').html(comp); array[2] = 'x'; array[5] = 'o'; }
			// third move if the first move is in grid8, the second move is in grid3, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "oaaxoaaax") { $('#grid2').html(comp); array[5] = 'x'; array[2] = 'o'; }
			// third move if the first move is in grid8, the second move is in grid3, and the third move is in grid6
			else if(this.id == 'grid6' && array.join('') == "oaaxoaaax") { $('#grid7').html(comp); array[6] = 'x'; array[7] = 'o'; }
			// third move if the first move is in grid8, the second move is in grid3, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oaaxoaaax") { $('#grid6').html(comp); array[7] = 'x'; array[6] = 'o'; }

			// third move if the first move is in grid8, the second move is in grid5, and the third move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aaoaoxaax") { $('#grid6').html(comp); array[0] = 'x'; array[6] = 'o'; }
			// third move if the first move is in grid8, the second move is in grid5, and the third move is in grid1
			else if(this.id == 'grid1' && array.join('') == "aaoaoxaax") { $('#grid6').html(comp); array[1] = 'x'; array[6] = 'o'; }
			// third move if the first move is in grid8, the second move is in grid5, and the third move is in grid3
			else if(this.id == 'grid3' && array.join('') == "aaoaoxaax") { $('#grid6').html(comp); array[3] = 'x'; array[6] = 'o'; }
			// third move if the first move is in grid8, the second move is in grid5, and the third move is in grid6
			else if(this.id == 'grid6' && array.join('') == "aaoaoxaax") { $('#grid7').html(comp); array[6] = 'x'; array[7] = 'o'; }
			// third move if the first move is in grid8, the second move is in grid5, and the third move is in grid7
			else if(this.id == 'grid7' && array.join('') == "aaoaoxaax") { $('#grid6').html(comp); array[7] = 'x'; array[6] = 'o'; }

			// third move if the first move is in grid8, the second move is in grid6, and the third move is in grid0
			// this combination of 86 is same as that of 68.

			// third move if the first move is in grid8, the second move is in grid7, and the third move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aaaaoaoxx") { $('#grid2').html(comp); array[0] = 'x'; array[2] = 'o'; }
			// third move if the first move is in grid8, the second move is in grid7, and the third move is in grid1
			else if(this.id == 'grid1' && array.join('') == "aaaaoaoxx") { $('#grid2').html(comp); array[1] = 'x'; array[2] = 'o'; }
			// third move if the first move is in grid8, the second move is in grid7, and the third move is in grid2
			else if(this.id == 'grid2' && array.join('') == "aaaaoaoxx") { $('#grid5').html(comp); array[2] = 'x'; array[5] = 'o'; }
			// third move if the first move is in grid8, the second move is in grid7, and the third move is in grid3
			else if(this.id == 'grid3' && array.join('') == "aaaaoaoxx") { $('#grid2').html(comp); array[3] = 'x'; array[2] = 'o'; }
			// third move if the first move is in grid8, the second move is in grid7, and the third move is in grid5
			else if(this.id == 'grid5' && array.join('') == "aaaaoaoxx") { $('#grid2').html(comp); array[5] = 'x'; array[2] = 'o'; }


			// fourth move if the first move is in grid0, second move is in grid1, third move is in grid3
			// computer already won

			// fourth move if the first move is in grid0, second move is in grid1, third move is in grid6, and the fourth move is in grid5
			else if(this.id == 'grid5' && array.join('') == "xxoooaxaa") { $('#grid7').html(comp); array[5] = 'x'; array[7] = 'o'; }
			// fourth move if the first move is in grid0, second move is in grid1, third move is in grid6, and the fourth move is in grid7
			else if(this.id == 'grid7' && array.join('') == "xxoooaxaa") { $('#grid5').html(comp); array[7] = 'x'; array[5] = 'o'; }
			// fourth move if the first move is in grid0, second move is in grid1, third move is in grid6, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "xxoooaxaa") { $('#grid5').html(comp); array[8] = 'x'; array[5] = 'o'; }

			// fourth move if the first move is in grid0, second move is in grid2, third move is in grid7, and the fourth move is in grid5
			else if(this.id == 'grid5' && array.join('') == "xoxooaaxa") { $('#grid8').html(comp); array[5] = 'x'; array[8] = 'o'; }
			// fourth move if the first move is in grid0, second move is in grid2, third move is in grid7, and the fourth move is in grid6
			else if(this.id == 'grid6' && array.join('') == "xoxooaaxa") { $('#grid5').html(comp); array[6] = 'x'; array[5] = 'o'; }
			// fourth move if the first move is in grid0, second move is in grid2, third move is in grid7, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "xoxooaaxa") { $('#grid5').html(comp); array[8] = 'x'; array[5] = 'o'; }

			// fourth move if the first move is in grid0, second move is in grid3, third move is in grid2, and the fourth move is in grid5
			else if(this.id == 'grid5' && array.join('') == "xoxxoaoaa") { $('#grid7').html(comp); array[5] = 'x'; array[7] = 'o'; }
			// fourth move if the first move is in grid0, second move is in grid3, third move is in grid2, and the fourth move is in grid7
			else if(this.id == 'grid7' && array.join('') == "xoxxoaoaa") { $('#grid5').html(comp); array[7] = 'x'; array[5] = 'o'; }
			// fourth move if the first move is in grid0, second move is in grid3, third move is in grid2, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "xoxxoaoaa") { $('#grid7').html(comp); array[8] = 'x'; array[7] = 'o'; }

			// fourth move if the first move is in grid0, second move is in grid5, third move is in grid7, and the fourth move is in grid2
			else if(this.id == 'grid2' && array.join('') == "xoaaoxoxa") { $('#grid8').html(comp); array[2] = 'x'; array[8] = 'o'; }
			// fourth move if the first move is in grid0, second move is in grid5, third move is in grid7, and the fourth move is in grid3
			else if(this.id == 'grid3' && array.join('') == "xoaaoxoxa") { $('#grid2').html(comp); array[3] = 'x'; array[2] = 'o'; }
			// fourth move if the first move is in grid0, second move is in grid5, third move is in grid7, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "xoaaoxoxa") { $('#grid2').html(comp); array[8] = 'x'; array[2] = 'o'; }

			// fourth move if the first move is in grid0, second move is in grid6, third move is in grid5, and the fourth move is in grid2
			else if(this.id == 'grid2' && array.join('') == "xoaooxxaa") { $('#grid7').html(comp); array[2] = 'x'; array[7] = 'o'; }
			// fourth move if the first move is in grid0, second move is in grid6, third move is in grid5, and the fourth move is in grid7
			else if(this.id == 'grid7' && array.join('') == "xoaooxxaa") { $('#grid8').html(comp); array[7] = 'x'; array[8] = 'o'; }
			// fourth move if the first move is in grid0, second move is in grid6, third move is in grid5, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "xoaooxxaa") { $('#grid7').html(comp); array[8] = 'x'; array[7] = 'o'; }

			// fourth move if the first move is in grid0, second move is in grid7, third move is in grid5, and the fourth move is in grid1
			else if(this.id == 'grid1' && array.join('') == "xxoooaxaa") { $('#grid6').html(comp); array[1] = 'x'; array[6] = 'o'; }
			// fourth move if the first move is in grid0, second move is in grid7, third move is in grid5, and the fourth move is in grid6
			else if(this.id == 'grid6' && array.join('') == "xxoooaxaa") { $('#grid8').html(comp); array[6] = 'x'; array[8] = 'o'; }
			// fourth move if the first move is in grid0, second move is in grid7, third move is in grid5, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "xxoooaxaa") { $('#grid6').html(comp); array[8] = 'x'; array[6] = 'o'; }

			// fourth move if the first move is in grid0, second move is in grid8, third move is in grid7, and the fourth move is in grid2
			else if(this.id == 'grid2' && array.join('') == "xoaaoaoxx") { $('#grid5').html(comp); array[2] = 'x'; array[5] = 'o'; }
			// fourth move if the first move is in grid0, second move is in grid8, third move is in grid7, and the fourth move is in grid3
			else if(this.id == 'grid3' && array.join('') == "xoaaoaoxx") { $('#grid2').html(comp); array[3] = 'x'; array[2] = 'o'; }
			// fourth move if the first move is in grid0, second move is in grid8, third move is in grid7, and the fourth move is in grid5
			else if(this.id == 'grid5' && array.join('') == "xoaaoaoxx") { $('#grid2').html(comp); array[5] = 'x'; array[2] = 'o'; }

			// fourth move if the first move is in grid1, second move is in grid2, third move is in grid6, and the fourth move is in grid5
			else if(this.id == 'grid5' && array.join('') == "oxxooaxaa") { $('#grid8').html(comp); array[5] = 'x'; array[8] = 'o'; }
			// fourth move if the first move is in grid1, second move is in grid2, third move is in grid6, and the fourth move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oxxooaxaa") { $('#grid5').html(comp); array[7] = 'x'; array[5] = 'o'; }
			// fourth move if the first move is in grid1, second move is in grid2, third move is in grid6, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oxxooaxaa") { $('#grid5').html(comp); array[8] = 'x'; array[5] = 'o'; }

			// fourth move if the first move is in grid1, second move is in grid3, third move is in grid8, and the fourth move is in grid5
			else if(this.id == 'grid5' && array.join('') == "oxoxoaaax") { $('#grid6').html(comp); array[5] = 'x'; array[6] = 'o'; }
			// fourth move if the first move is in grid1, second move is in grid3, third move is in grid8, and the fourth move is in grid6
			else if(this.id == 'grid6' && array.join('') == "oxoxoaaax") { $('#grid7').html(comp); array[6] = 'x'; array[7] = 'o'; }
			// fourth move if the first move is in grid1, second move is in grid3, third move is in grid8, and the fourth move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oxoxoaaax") { $('#grid6').html(comp); array[7] = 'x'; array[6] = 'o'; }

			// fourth move if the first move is in grid1, second move is in grid4, third move is in grid2, and the fourth move is in grid3
			else if(this.id == 'grid3' && array.join('') == "oxxaxaooa") { $('#grid8').html(comp); array[3] = 'x'; array[8] = 'o'; }
			// fourth move if the first move is in grid1, second move is in grid4, third move is in grid2, and the fourth move is in grid5
			else if(this.id == 'grid5' && array.join('') == "oxxaxaooa") { $('#grid3').html(comp); array[5] = 'x'; array[3] = 'o'; }
			// fourth move if the first move is in grid1, second move is in grid4, third move is in grid2, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oxxaxaooa") { $('#grid3').html(comp); array[8] = 'x'; array[3] = 'o'; }

			// fourth move if the first move is in grid1, second move is in grid4, third move is in grid3, and the fourth move is in grid2
			else if(this.id == 'grid2' && array.join('') == "oxaxxoaoa") { $('#grid6').html(comp); array[2] = 'x'; array[6] = 'o'; }
			// fourth move if the first move is in grid1, second move is in grid4, third move is in grid3, and the fourth move is in grid6
			else if(this.id == 'grid6' && array.join('') == "oxaxxoaoa") { $('#grid2').html(comp); array[6] = 'x'; array[2] = 'o'; }
			// fourth move if the first move is in grid1, second move is in grid4, third move is in grid3, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oxaxxoaoa") { $('#grid2').html(comp); array[8] = 'x'; array[2] = 'o'; }

			// fourth move if the first move is in grid1, second move is in grid4, third move is in grid5, and the fourth move is in grid2
			else if(this.id == 'grid2' && array.join('') == "oxaoxxaoa") { $('#grid6').html(comp); array[2] = 'x'; array[6] = 'o'; }
			// fourth move if the first move is in grid1, second move is in grid4, third move is in grid5, and the fourth move is in grid6
			else if(this.id == 'grid6' && array.join('') == "oxaoxxaoa") { $('#grid2').html(comp); array[6] = 'x'; array[2] = 'o'; }
			// fourth move if the first move is in grid1, second move is in grid4, third move is in grid5, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oxaoxxaoa") { $('#grid6').html(comp); array[8] = 'x'; array[6] = 'o'; }

			// fourth move if the first move is in grid1, second move is in grid4, third move is in grid6, and the fourth move is in grid3
			else if(this.id == 'grid3' && array.join('') == "oxoaxaxoa") { $('#grid5').html(comp); array[3] = 'x'; array[5] = 'o'; }
			// fourth move if the first move is in grid1, second move is in grid4, third move is in grid6, and the fourth move is in grid5
			else if(this.id == 'grid5' && array.join('') == "oxoaxaxoa") { $('#grid3').html(comp); array[5] = 'x'; array[3] = 'o'; }
			// fourth move if the first move is in grid1, second move is in grid4, third move is in grid6, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oxoaxaxoa") { $('#grid3').html(comp); array[8] = 'x'; array[3] = 'o'; }

			// fourth move if the first move is in grid1, second move is in grid4, third move is in grid8, and the fourth move is in grid3
			else if(this.id == 'grid3' && array.join('') == "oxoaxaaox") { $('#grid5').html(comp); array[3] = 'x'; array[5] = 'o'; }
			// fourth move if the first move is in grid1, second move is in grid4, third move is in grid8, and the fourth move is in grid5
			else if(this.id == 'grid5' && array.join('') == "oxoaxaaox") { $('#grid3').html(comp); array[5] = 'x'; array[3] = 'o'; }
			// fourth move if the first move is in grid1, second move is in grid4, third move is in grid8, and the fourth move is in grid6
			else if(this.id == 'grid6' && array.join('') == "oxoaxaaox") { $('#grid3').html(comp); array[6] = 'x'; array[3] = 'o'; }

			// fourth move if the first move is in grid1, second move is in grid5, third move is in grid3, and the fourth move is in grid2
			else if(this.id == 'grid2' && array.join('') == "oxaxoxoaa") { $('#grid8').html(comp); array[2] = 'x'; array[8] = 'o'; }
			// fourth move if the first move is in grid1, second move is in grid5, third move is in grid3, and the fourth move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oxaxoxoaa") { $('#grid8').html(comp); array[7] = 'x'; array[8] = 'o'; }
			// fourth move if the first move is in grid1, second move is in grid5, third move is in grid3, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oxaxoxoaa") { $('#grid2').html(comp); array[8] = 'x'; array[2] = 'o'; }

			// fourth move if the first move is in grid1, second move is in grid6, third move is in grid8, and the fourth move is in grid2
			else if(this.id == 'grid2' && array.join('') == "oxaaoaxox") { $('#grid5').html(comp); array[2] = 'x'; array[5] = 'o'; }
			// fourth move if the first move is in grid1, second move is in grid6, third move is in grid8, and the fourth move is in grid3
			else if(this.id == 'grid3' && array.join('') == "oxaaoaxox") { $('#grid2').html(comp); array[3] = 'x'; array[2] = 'o'; }
			// fourth move if the first move is in grid1, second move is in grid6, third move is in grid8, and the fourth move is in grid5
			else if(this.id == 'grid5' && array.join('') == "oxaaoaxox") { $('#grid2').html(comp); array[5] = 'x'; array[2] = 'o'; }

			// fourth move if the first move is in grid1, second move is in grid7, third move is in grid8, and the fourth move is in grid2
			else if(this.id == 'grid2' && array.join('') == "oxaaoaoxx") { $('#grid3').html(comp); array[2] = 'x'; array[3] = 'o'; }
			// fourth move if the first move is in grid1, second move is in grid7, third move is in grid8, and the fourth move is in grid3
			else if(this.id == 'grid3' && array.join('') == "oxaaoaoxx") { $('#grid2').html(comp); array[3] = 'x'; array[2] = 'o'; }
			// fourth move if the first move is in grid1, second move is in grid7, third move is in grid8, and the fourth move is in grid5
			else if(this.id == 'grid5' && array.join('') == "oxaaoaoxx") { $('#grid2').html(comp); array[5] = 'x'; array[2] = 'o'; }

			// fourth move if the first move is in grid1, second move is in grid8, third move is in grid2, and the fourth move is in grid3
			else if(this.id == 'grid3' && array.join('') == "oxxaooaax") { $('#grid6').html(comp); array[3] = 'x'; array[6] = 'o'; }
			// fourth move if the first move is in grid1, second move is in grid8, third move is in grid2, and the fourth move is in grid6
			else if(this.id == 'grid6' && array.join('') == "oxxaooaax") { $('#grid3').html(comp); array[6] = 'x'; array[3] = 'o'; }
			// fourth move if the first move is in grid1, second move is in grid8, third move is in grid2, and the fourth move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oxxaooaax") { $('#grid3').html(comp); array[7] = 'x'; array[3] = 'o'; }

			// fourth move if the first move is in grid1, second move is in grid8, third move is in grid3, and the fourth move is in grid5
			// the combination of 183 is same as 138.

			// fourth move if the first move is in grid1, second move is in grid8, third move is in grid5, and the fourth move is in grid2
			else if(this.id == 'grid2' && array.join('') == "oxoaoxaax") { $('#grid6').html(comp); array[2] = 'x'; array[6] = 'o'; }
			// fourth move if the first move is in grid1, second move is in grid8, third move is in grid5, and the fourth move is in grid6
			else if(this.id == 'grid6' && array.join('') == "oxoaoxaax") { $('#grid7').html(comp); array[6] = 'x'; array[7] = 'o'; }
			// fourth move if the first move is in grid1, second move is in grid8, third move is in grid5, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oxoaoxaax") { $('#grid6').html(comp); array[8] = 'x'; array[6] = 'o'; }

			// fourth move if the first move is in grid1, second move is in grid8, third move is in grid6, and the fourth move is in gridx
			// this combination of 186 is same as 168.

			// fourth move if the first move is in grid1, second move is in grid8, third move is in grid7, and the fourth move is in gridx
			// this combination of 187 is same as 178

			// fourth move if the first move is in grid2, second move is in grid0, third move is in grid7, and the fourth move is in gridx
			// this combination of 207 is same as 027.

			// fourth move if the first move is in grid2, second move is in grid1, third move is in grid8, and the fourth move is in grid2
			// this combination of 218 is same as 182.

			// fourth move if the first move is in grid2, second move is in grid3, third move is in grid8, and the fourth move is in grid1
			else if(this.id == 'grid1' && array.join('') == "oaxxooaax") { $('#grid6').html(comp); array[1] = 'x'; array[6] = 'o'; }
			// fourth move if the first move is in grid2, second move is in grid3, third move is in grid8, and the fourth move is in grid6
			else if(this.id == 'grid6' && array.join('') == "oaxxooaax") { $('#grid7').html(comp); array[6] = 'x'; array[7] = 'o'; }
			// fourth move if the first move is in grid2, second move is in grid3, third move is in grid8, and the fourth move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oaxxooaax") { $('#grid6').html(comp); array[7] = 'x'; array[6] = 'o'; }

			// fourth move if the first move is in grid2, second move is in grid5, third move is in grid0, and the fourth move is in grid3
			else if(this.id == 'grid3' && array.join('') == "xoxaoxaao") { $('#grid7').html(comp); array[3] = 'x'; array[7] = 'o'; }
			// fourth move if the first move is in grid2, second move is in grid5, third move is in grid0, and the fourth move is in grid6
			else if(this.id == 'grid6' && array.join('') == "xoxaoxaao") { $('#grid7').html(comp); array[6] = 'x'; array[7] = 'o'; }
			// fourth move if the first move is in grid2, second move is in grid5, third move is in grid0, and the fourth move is in grid7
			else if(this.id == 'grid7' && array.join('') == "xoxaoxaao") { $('#grid3').html(comp); array[7] = 'x'; array[3] = 'o'; }

			// fourth move if the first move is in grid2, second move is in grid6, third move is in grid7, and the fourth move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aoxaoaxxo") { $('#grid3').html(comp); array[0] = 'x'; array[3] = 'o'; }
			// fourth move if the first move is in grid2, second move is in grid6, third move is in grid7, and the fourth move is in grid3
			else if(this.id == 'grid3' && array.join('') == "aoxaoaxxo") { $('#grid0').html(comp); array[3] = 'x'; array[0] = 'o'; }
			// fourth move if the first move is in grid2, second move is in grid6, third move is in grid7, and the fourth move is in grid5
			else if(this.id == 'grid5' && array.join('') == "aoxaoaxxo") { $('#grid0').html(comp); array[5] = 'x'; array[0] = 'o'; }

			// fourth move if the first move is in grid2, second move is in grid7, third move is in grid5, and the fourth move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aaxooxaxo") { $('#grid1').html(comp); array[0] = 'x'; array[1] = 'o'; }
			// fourth move if the first move is in grid2, second move is in grid7, third move is in grid5, and the fourth move is in grid1
			else if(this.id == 'grid1' && array.join('') == "aaxooxaxo") { $('#grid0').html(comp); array[1] = 'x'; array[0] = 'o'; }
			// fourth move if the first move is in grid2, second move is in grid7, third move is in grid5, and the fourth move is in grid6
			else if(this.id == 'grid6' && array.join('') == "aaxooxaxo") { $('#grid0').html(comp); array[6] = 'x'; array[0] = 'o'; }

			// fourth move if the first move is in grid2, second move is in grid8, third move is in grid3, and the fourth move is in grid1
			// this combination of 283 is same as 238.

			// fourth move if the first move is in grid3, second move is in grid1, third move is in grid8, and the fourth move is in grid5
			// this combination of 318 is same as 138.

			// fourth move if the first move is in grid3, second move is in grid2, third move is in grid8, and the fourth move is in grid1
			// this combination of 328 is same as 238.

			// fourth move if the first move is in grid3, second move is in grid4, third move is in grid1, and the fourth move is in grid2
			// this combination of 341 is same as 143.

			// fourth move if the first move is in grid3, second move is in grid5, third move is in grid8, and the fourth move is in grid1
			else if(this.id == 'grid1' && array.join('') == "oaoxoxaax") { $('#grid6').html(comp); array[1] = 'x'; array[6] = 'o'; }
			// fourth move if the first move is in grid3, second move is in grid5, third move is in grid8, and the fourth move is in grid6
			else if(this.id == 'grid6' && array.join('') == "oaoxoxaax") { $('#grid1').html(comp); array[6] = 'x'; array[1] = 'o'; }
			// fourth move if the first move is in grid3, second move is in grid5, third move is in grid8, and the fourth move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oaoxoxaax") { $('#grid6').html(comp); array[7] = 'x'; array[6] = 'o'; }

			// fourth move if the first move is in grid3, second move is in grid6, third move is in grid2, and the fourth move is in grid5
			else if(this.id == 'grid5' && array.join('') == "ooxxoaxaa") { $('#grid7').html(comp); array[5] = 'x'; array[7] = 'o'; }
			// fourth move if the first move is in grid3, second move is in grid6, third move is in grid2, and the fourth move is in grid7
			else if(this.id == 'grid7' && array.join('') == "ooxxoaxaa") { $('#grid8').html(comp); array[7] = 'x'; array[8] = 'o'; }
			// fourth move if the first move is in grid3, second move is in grid6, third move is in grid2, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "ooxxoaxaa") { $('#grid7').html(comp); array[8] = 'x'; array[7] = 'o'; }

			// fourth move if the first move is in grid3, second move is in grid7, third move is in grid1, and the fourth move is in grid5
			else if(this.id == 'grid5' && array.join('') == "oxoxoaaxa") { $('#grid8').html(comp); array[5] = 'x'; array[8] = 'o'; }
			// fourth move if the first move is in grid3, second move is in grid7, third move is in grid1, and the fourth move is in grid6
			else if(this.id == 'grid6' && array.join('') == "oxoxoaaxa") { $('#grid8').html(comp); array[6] = 'x'; array[8] = 'o'; }
			// fourth move if the first move is in grid3, second move is in grid7, third move is in grid1, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oxoxoaaxa") { $('#grid6').html(comp); array[8] = 'x'; array[6] = 'o'; }

			// fourth move if the first move is in grid3, second move is in grid8, third move is in grid1, and the fourth move is in grid1
			// the combination of 381 is same as 138.

			// fourth move if the first move is in grid4, second move is in grid1, third move is in grid2, and the fourth move is in grid3
			// the combination of 412 is same as 142.

			// fourth move if the first move is in grid4, second move is in grid2, third move is in grid3, and the fourth move is in grid1
			else if(this.id == 'grid1' && array.join('') == "oaxxxooaa") { $('#grid7').html(comp); array[1] = 'x'; array[7] = 'o'; }
			// fourth move if the first move is in grid4, second move is in grid2, third move is in grid3, and the fourth move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oaxxxooaa") { $('#grid1').html(comp); array[7] = 'x'; array[1] = 'o'; }
			// fourth move if the first move is in grid4, second move is in grid2, third move is in grid3, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oaxxxooaa") { $('#grid1').html(comp); array[8] = 'x'; array[1] = 'o'; }

			// fourth move if the first move is in grid4, second move is in grid3, third move is in grid1, and the fourth move is in grid1
			// the combination of 431 is same as 143.

			// fourth move if the first move is in grid4, second move is in grid3, third move is in grid2, and the fourth move is in grid1
			// the combination of 432 is same as 423.

			// fourth move if the first move is in grid4, second move is in grid3, third move is in grid6, and the fourth move is in grid1
			else if(this.id == 'grid1' && array.join('') == "oaoxxoxaa") { $('#grid8').html(comp); array[1] = 'x'; array[8] = 'o'; }
			// fourth move if the first move is in grid4, second move is in grid3, third move is in grid6, and the fourth move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oaoxxoxaa") { $('#grid1').html(comp); array[7] = 'x'; array[1] = 'o'; }
			// fourth move if the first move is in grid4, second move is in grid3, third move is in grid6, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oaoxxoxaa") { $('#grid1').html(comp); array[8] = 'x'; array[1] = 'o'; }

			// fourth move if the first move is in grid4, second move is in grid3, third move is in grid7, and the fourth move is in grid2
			else if(this.id == 'grid2' && array.join('') == "ooaxxoaxa") { $('#grid6').html(comp); array[2] = 'x'; array[6] = 'o'; }
			// fourth move if the first move is in grid4, second move is in grid3, third move is in grid7, and the fourth move is in grid6
			else if(this.id == 'grid6' && array.join('') == "ooaxxoaxa") { $('#grid2').html(comp); array[6] = 'x'; array[2] = 'o'; }
			// fourth move if the first move is in grid4, second move is in grid3, third move is in grid7, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "ooaxxoaxa") { $('#grid2').html(comp); array[8] = 'x'; array[2] = 'o'; }

			// fourth move if the first move is in grid4, second move is in grid3, third move is in grid8, and the fourth move is in grid2
			else if(this.id == 'grid2' && array.join('') == "ooaxxoaax") { $('#grid6').html(comp); array[2] = 'x'; array[6] = 'o'; }
			// fourth move if the first move is in grid4, second move is in grid3, third move is in grid8, and the fourth move is in grid6
			else if(this.id == 'grid6' && array.join('') == "ooaxxoaax") { $('#grid2').html(comp); array[6] = 'x'; array[2] = 'o'; }
			// fourth move if the first move is in grid4, second move is in grid3, third move is in grid8, and the fourth move is in grid7
			else if(this.id == 'grid7' && array.join('') == "ooaxxoaax") { $('#grid2').html(comp); array[7] = 'x'; array[2] = 'o'; }

			// fourth move if the first move is in grid4, second move is in grid5, third move is in grid6, and the fourth move is in grid1
			else if(this.id == 'grid1' && array.join('') == "oaooxxxaa") { $('#grid7').html(comp); array[1] = 'x'; array[7] = 'o'; }
			// fourth move if the first move is in grid4, second move is in grid5, third move is in grid6, and the fourth move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oaooxxxaa") { $('#grid1').html(comp); array[7] = 'x'; array[1] = 'o'; }
			// fourth move if the first move is in grid4, second move is in grid5, third move is in grid6, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oaooxxxaa") { $('#grid1').html(comp); array[8] = 'x'; array[1] = 'o'; }

			// fourth move if the first move is in grid4, second move is in grid6, third move is in grid1, and the fourth move is in grid1
			// the combination of 461 is same as 146.

			// fourth move if the first move is in grid4, second move is in grid7, third move is in grid2, and the fourth move is in grid3
			else if(this.id == 'grid3' && array.join('') == "ooxaxaoxa") { $('#grid5').html(comp); array[3] = 'x'; array[5] = 'o'; }
			// fourth move if the first move is in grid4, second move is in grid7, third move is in grid2, and the fourth move is in grid5
			else if(this.id == 'grid5' && array.join('') == "ooxaxaoxa") { $('#grid3').html(comp); array[5] = 'x'; array[3] = 'o'; }
			// fourth move if the first move is in grid4, second move is in grid7, third move is in grid2, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "ooxaxaoxa") { $('#grid3').html(comp); array[8] = 'x'; array[3] = 'o'; }

			// fourth move if the first move is in grid4, second move is in grid8, third move is in grid1, and the fourth move is in grid1
			// the combination of 481 is same as 148.

			// fourth move if the first move is in grid5, second move is in grid0, third move is in grid1, and the fourth move is in grid6
			else if(this.id == 'grid6' && array.join('') == "xxoooxaaa") { $('#grid7').html(comp); array[6] = 'x'; array[7] = 'o'; }
			// fourth move if the first move is in grid5, second move is in grid0, third move is in grid1, and the fourth move is in grid7
			else if(this.id == 'grid7' && array.join('') == "xxoooxaaa") { $('#grid6').html(comp); array[7] = 'x'; array[6] = 'o'; }
			// fourth move if the first move is in grid5, second move is in grid0, third move is in grid1, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "xxoooxaaa") { $('#grid6').html(comp); array[8] = 'x'; array[6] = 'o'; }

			// fourth move if the first move is in grid5, second move is in grid0, third move is in grid4, and the fourth move is in grid1
			else if(this.id == 'grid1' && array.join('') == "xaooxxaao") { $('#grid7').html(comp); array[1] = 'x'; array[7] = 'o'; }
			// fourth move if the first move is in grid5, second move is in grid0, third move is in grid4, and the fourth move is in grid6
			else if(this.id == 'grid6' && array.join('') == "xaooxxaao") { $('#grid1').html(comp); array[6] = 'x'; array[1] = 'o'; }
			// fourth move if the first move is in grid5, second move is in grid0, third move is in grid4, and the fourth move is in grid7
			else if(this.id == 'grid7' && array.join('') == "xaooxxaao") { $('#grid1').html(comp); array[7] = 'x'; array[1] = 'o'; }

			// fourth move if the first move is in grid5, second move is in grid0, third move is in grid6, and the fourth move is in grid1
			else if(this.id == 'grid1' && array.join('') == "xaoooxxaa") { $('#grid7').html(comp); array[1] = 'x'; array[7] = 'o'; }
			// fourth move if the first move is in grid5, second move is in grid0, third move is in grid6, and the fourth move is in grid7
			else if(this.id == 'grid7' && array.join('') == "xaoooxxaa") { $('#grid8').html(comp); array[7] = 'x'; array[8] = 'o'; }
			// fourth move if the first move is in grid5, second move is in grid0, third move is in grid6, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "xaoooxxaa") { $('#grid7').html(comp); array[8] = 'x'; array[7] = 'o'; }

			// fourth move if the first move is in grid5, second move is in grid0, third move is in grid7, and the fourth move is in grid1
			else if(this.id == 'grid1' && array.join('') == "xaoooxaxa") { $('#grid6').html(comp); array[1] = 'x'; array[6] = 'o'; }
			// fourth move if the first move is in grid5, second move is in grid0, third move is in grid7, and the fourth move is in grid6
			else if(this.id == 'grid6' && array.join('') == "xaoooxaxa") { $('#grid8').html(comp); array[6] = 'x'; array[8] = 'o'; }
			// fourth move if the first move is in grid5, second move is in grid0, third move is in grid7, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "xaoooxaxa") { $('#grid6').html(comp); array[8] = 'x'; array[6] = 'o'; }

			// fourth move if the first move is in grid5, second move is in grid0, third move is in grid8, and the fourth move is in grid1
			else if(this.id == 'grid1' && array.join('') == "xaoooxaax") { $('#grid6').html(comp); array[1] = 'x'; array[6] = 'o'; }
			// fourth move if the first move is in grid5, second move is in grid0, third move is in grid8, and the fourth move is in grid6
			else if(this.id == 'grid6' && array.join('') == "xaoooxaax") { $('#grid7').html(comp); array[6] = 'x'; array[7] = 'o'; }
			// fourth move if the first move is in grid5, second move is in grid0, third move is in grid8, and the fourth move is in grid7
			else if(this.id == 'grid7' && array.join('') == "xaoooxaax") { $('#grid6').html(comp); array[7] = 'x'; array[6] = 'o'; }

			// fourth move if the first move is in grid5, second move is in grid1, third move is in grid0, and the fourth move is in grid1
			// the combination of 510 is same as 501.

			// fourth move if the first move is in grid5, second move is in grid1, third move is in grid4, and the fourth move is in grid0
			else if(this.id == 'grid0' && array.join('') == "axooxxaoa") { $('#grid8').html(comp); array[0] = 'x'; array[8] = 'o'; }
			// fourth move if the first move is in grid5, second move is in grid1, third move is in grid4, and the fourth move is in grid6
			else if(this.id == 'grid6' && array.join('') == "axooxxaoa") { $('#grid8').html(comp); array[6] = 'x'; array[8] = 'o'; }
			// fourth move if the first move is in grid5, second move is in grid1, third move is in grid4, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "axooxxaoa") { $('#grid0').html(comp); array[8] = 'x'; array[0] = 'o'; }

			// fourth move if the first move is in grid5, second move is in grid1, third move is in grid6, and the fourth move is in grid0
			else if(this.id == 'grid0' && array.join('') == "axoooxxaa") { $('#grid7').html(comp); array[0] = 'x'; array[7] = 'o'; }
			// fourth move if the first move is in grid5, second move is in grid1, third move is in grid6, and the fourth move is in grid7
			else if(this.id == 'grid7' && array.join('') == "axoooxxaa") { $('#grid8').html(comp); array[7] = 'x'; array[8] = 'o'; }
			// fourth move if the first move is in grid5, second move is in grid1, third move is in grid6, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "axoooxxaa") { $('#grid7').html(comp); array[8] = 'x'; array[7] = 'o'; }

			// fourth move if the first move is in grid5, second move is in grid1, third move is in grid7, and the fourth move is in grid0
			else if(this.id == 'grid0' && array.join('') == "axoooxaxa") { $('#grid6').html(comp); array[0] = 'x'; array[6] = 'o'; }
			// fourth move if the first move is in grid5, second move is in grid1, third move is in grid7, and the fourth move is in grid6
			else if(this.id == 'grid6' && array.join('') == "axoooxaxa") { $('#grid8').html(comp); array[6] = 'x'; array[8] = 'o'; }
			// fourth move if the first move is in grid5, second move is in grid1, third move is in grid7, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "axoooxaxa") { $('#grid6').html(comp); array[8] = 'x'; array[6] = 'o'; }

			// fourth move if the first move is in grid5, second move is in grid1, third move is in grid8, and the fourth move is in grid0
			else if(this.id == 'grid0' && array.join('') == "axooaxoax") { $('#grid4').html(comp); array[0] = 'x'; array[4] = 'o'; }
			// fourth move if the first move is in grid5, second move is in grid1, third move is in grid8, and the fourth move is in grid4
			else if(this.id == 'grid4' && array.join('') == "axooaxoax") { $('#grid0').html(comp); array[4] = 'x'; array[0] = 'o'; }
			// fourth move if the first move is in grid5, second move is in grid1, third move is in grid8, and the fourth move is in grid7
			else if(this.id == 'grid7' && array.join('') == "axooaxoax") { $('#grid0').html(comp); array[7] = 'x'; array[0] = 'o'; }

			// fourth move if the first move is in grid5, second move is in grid3, third move is in grid6, and the fourth move is in grid1
			else if(this.id == 'grid1' && array.join('') == "oaoxoxxaa") { $('#grid8').html(comp); array[1] = 'x'; array[8] = 'o'; }
			// fourth move if the first move is in grid5, second move is in grid3, third move is in grid6, and the fourth move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oaoxoxxaa") { $('#grid1').html(comp); array[7] = 'x'; array[1] = 'o'; }
			// fourth move if the first move is in grid5, second move is in grid3, third move is in grid6, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oaoxoxxaa") { $('#grid1').html(comp); array[8] = 'x'; array[1] = 'o'; }

			// fourth move if the first move is in grid5, second move is in grid4, third move is in grid0, and the fourth move is in grid1
			// the combination of 540 is same as 504.

			// fourth move if the first move is in grid5, second move is in grid4, third move is in grid1, and the fourth move is in grid0
			// the combination of 541 is same as 514.

			// fourth move if the first move is in grid5, second move is in grid4, third move is in grid6, and the fourth move is in grid1
			// the combination of 546 is same as 456.

			// fourth move if the first move is in grid5, second move is in grid4, third move is  in grid7, and the fourth move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aoooxxaxa") { $('#grid8').html(comp); array[0] = 'x'; array[8] = 'o'; }
			// fourth move if the first move is in grid5, second move is in grid4, third move is  in grid7, and the fourth move is in grid6
			else if(this.id == 'grid6' && array.join('') == "aoooxxaxa") { $('#grid0').html(comp); array[6] = 'x'; array[0] = 'o'; }
			// fourth move if the first move is in grid5, second move is in grid4, third move is  in grid7, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "aoooxxaxa") { $('#grid0').html(comp); array[8] = 'x'; array[0] = 'o'; }

			// fourth move if the first move is in grid5, second move is in grid4, third move is  in grid8, and the fourth move is in grid1
			else if(this.id == 'grid1' && array.join('') == "oaooxxaax") { $('#grid6').html(comp); array[1] = 'x'; array[6] = 'o'; }
			// fourth move if the first move is in grid5, second move is in grid4, third move is  in grid8, and the fourth move is in grid6
			else if(this.id == 'grid6' && array.join('') == "oaooxxaax") { $('#grid1').html(comp); array[6] = 'x'; array[1] = 'o'; }
			// fourth move if the first move is in grid5, second move is in grid4, third move is  in grid8, and the fourth move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oaooxxaax") { $('#grid6').html(comp); array[7] = 'x'; array[6] = 'o'; }

			// fourth move if the first move is in grid5, second move is in grid6, third move is  in grid1, and the fourth move is in grid3
			else if(this.id == 'grid3' && array.join('') == "oxoaoxxaa") { $('#grid8').html(comp); array[3] = 'x'; array[8] = 'o'; }
			// fourth move if the first move is in grid5, second move is in grid6, third move is  in grid1, and the fourth move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oxoaoxxaa") { $('#grid8').html(comp); array[7] = 'x'; array[8] = 'o'; }
			// fourth move if the first move is in grid5, second move is in grid6, third move is  in grid1, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oxoaoxxaa") { $('#grid7').html(comp); array[8] = 'x'; array[7] = 'o'; }

			// fourth move if the first move is in grid5, second move is in grid7, third move is  in grid1, and the fourth move is in grid3
			else if(this.id == 'grid3' && array.join('') == "oxoaoxaxa") { $('#grid8').html(comp); array[3] = 'x'; array[8] = 'o'; }
			// fourth move if the first move is in grid5, second move is in grid7, third move is  in grid1, and the fourth move is in grid6
			else if(this.id == 'grid6' && array.join('') == "oxoaoxaxa") { $('#grid8').html(comp); array[6] = 'x'; array[8] = 'o'; }
			// fourth move if the first move is in grid5, second move is in grid7, third move is  in grid1, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "oxoaoxaxa") { $('#grid6').html(comp); array[8] = 'x'; array[6] = 'o'; }

			// fourth move if the first move is in grid5, second move is in grid8, third move is  in grid1, and the fourth move is in grid3
			else if(this.id == 'grid3' && array.join('') == "oxoaaxoax") { $('#grid4').html(comp); array[3] = 'x'; array[4] = 'o'; }
			// fourth move if the first move is in grid5, second move is in grid8, third move is  in grid1, and the fourth move is in grid4
			else if(this.id == 'grid4' && array.join('') == "oxoaaxoax") { $('#grid3').html(comp); array[4] = 'x'; array[3] = 'o'; }
			// fourth move if the first move is in grid5, second move is in grid8, third move is  in grid1, and the fourth move is in grid7
			else if(this.id == 'grid7' && array.join('') == "oxoaaxoax") { $('#grid3').html(comp); array[7] = 'x'; array[3] = 'o'; }

			// fourth move if the first move is in grid6, second move is in grid0, third move is in grid5, and the fourth move is in grid2
			// the combination of 605 is same as 065.

			// fourth move if the first move is in grid6, second move is in grid1, third move is in grid8, and the fourth move is in grid2
			// the combination of 618 is same as 168.

			// fourth move if the first move is in grid6, second move is in grid2, third move is in grid7, and the fourth move is in grid0
			// the combination of 627 is same as 267.

			// fourth move if the first move is in grid6, second move is in grid3, third move is in grid8, and the fourth move is in grid1
			else if(this.id == 'grid1' && array.join('') == "oxoaaxoax") { $('#grid2').html(comp); array[1] = 'x'; array[2] = 'o'; }
			// fourth move if the first move is in grid6, second move is in grid3, third move is in grid8, and the fourth move is in grid2
			else if(this.id == 'grid2' && array.join('') == "oxoaaxoax") { $('#grid1').html(comp); array[2] = 'x'; array[1] = 'o'; }
			// fourth move if the first move is in grid6, second move is in grid3, third move is in grid8, and the fourth move is in grid5
			else if(this.id == 'grid5' && array.join('') == "oxoaaxoax") { $('#grid1').html(comp); array[5] = 'x'; array[1] = 'o'; }

			// fourth move if the first move is in grid6, second move is in grid5, third move is in grid7, and the fourth move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aoaaoxxxo") { $('#grid3').html(comp); array[0] = 'x'; array[3] = 'o'; }
			// fourth move if the first move is in grid6, second move is in grid5, third move is in grid7, and the fourth move is in grid2
			else if(this.id == 'grid2' && array.join('') == "aoaaoxxxo") { $('#grid0').html(comp); array[2] = 'x'; array[0] = 'o'; }
			// fourth move if the first move is in grid6, second move is in grid5, third move is in grid7, and the fourth move is in grid3
			else if(this.id == 'grid3' && array.join('') == "aoaaoxxxo") { $('#grid0').html(comp); array[3] = 'x'; array[0] = 'o'; }

			// fourth move if the first move is in grid6, second move is in grid7, third move is in grid0, and the fourth move is in grid1
			else if(this.id == 'grid1' && array.join('') == "xaaooaxxo") { $('#grid5').html(comp); array[1] = 'x'; array[5] = 'o'; }
			// fourth move if the first move is in grid6, second move is in grid7, third move is in grid0, and the fourth move is in grid2
			else if(this.id == 'grid2' && array.join('') == "xaaooaxxo") { $('#grid5').html(comp); array[2] = 'x'; array[5] = 'o'; }
			// fourth move if the first move is in grid6, second move is in grid7, third move is in grid0, and the fourth move is in grid5
			else if(this.id == 'grid5' && array.join('') == "xaaooaxxo") { $('#grid1').html(comp); array[5] = 'x'; array[1] = 'o'; }

			// fourth move if the first move is in grid6, second move is in grid8, third move is in grid1, and the fourth move is in grid1
			// the combination of 681 is same as 168.

			// fourth move if the first move is in grid7, second move is in grid0, third move is in grid2, and the fourth move is in grid3
			else if(this.id == 'grid3' && array.join('') == "xoxaoaoxa") { $('#grid5').html(comp); array[3] = 'x'; array[5] = 'o'; }
			// fourth move if the first move is in grid7, second move is in grid0, third move is in grid2, and the fourth move is in grid5
			else if(this.id == 'grid5' && array.join('') == "xoxaoaoxa") { $('#grid8').html(comp); array[5] = 'x'; array[8] = 'o'; }
			// fourth move if the first move is in grid7, second move is in grid0, third move is in grid2, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "xoxaoaoxa") { $('#grid5').html(comp); array[8] = 'x'; array[5] = 'o'; }

			// fourth move if the first move is in grid7, second move is in grid0, third move is in grid3, and the fourth move is in grid2
			else if(this.id == 'grid2' && array.join('') == "xoaxoaoxa") { $('#grid5').html(comp); array[2] = 'x'; array[5] = 'o'; }
			// fourth move if the first move is in grid7, second move is in grid0, third move is in grid3, and the fourth move is in grid5
			else if(this.id == 'grid5' && array.join('') == "xoaxoaoxa") { $('#grid2').html(comp); array[5] = 'x'; array[2] = 'o'; }
			// fourth move if the first move is in grid7, second move is in grid0, third move is in grid3, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "xoaxoaoxa") { $('#grid2').html(comp); array[8] = 'x'; array[2] = 'o'; }

			// fourth move if the first move is in grid7, second move is in grid0, third move is in grid4, and the fourth move is in grid2
			else if(this.id == 'grid2' && array.join('') == "xoaaxaoxo") { $('#grid3').html(comp); array[2] = 'x'; array[3] = 'o'; }
			// fourth move if the first move is in grid7, second move is in grid0, third move is in grid4, and the fourth move is in grid3
			else if(this.id == 'grid3' && array.join('') == "xoaaxaoxo") { $('#grid5').html(comp); array[3] = 'x'; array[5] = 'o'; }
			// fourth move if the first move is in grid7, second move is in grid0, third move is in grid4, and the fourth move is in grid5
			else if(this.id == 'grid5' && array.join('') == "xoaaxaoxo") { $('#grid3').html(comp); array[5] = 'x'; array[3] = 'o'; }

			// fourth move if the first move is in grid7, second move is in grid0, third move is in grid5, and the fourth move is in grid3
			// the combination of 705 is same as 057.

			// fourth move if the first move is in grid7, second move is in grid0, third move is in grid8, and the fourth move is in grid3
			// the combination of 708 is same as 087.

			// fourth move if the first move is in grid7, second move is in grid2, third move is in grid0, and the fourth move is in grid3
			// the combination of 720 is same as 702.

			// fourth move if the first move is in grid7, second move is in grid2, third move is in grid3, and the fourth move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aoxxoaoxa") { $('#grid5').html(comp); array[0] = 'x'; array[5] = 'o'; }
			// fourth move if the first move is in grid7, second move is in grid2, third move is in grid3, and the fourth move is in grid5
			else if(this.id == 'grid5' && array.join('') == "aoxxoaoxa") { $('#grid8').html(comp); array[5] = 'x'; array[8] = 'o'; }
			// fourth move if the first move is in grid7, second move is in grid2, third move is in grid3, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "aoxxoaoxa") { $('#grid5').html(comp); array[8] = 'x'; array[5] = 'o'; }

			// fourth move if the first move is in grid7, second move is in grid2, third move is in grid4, and the fourth move is in grid0
			// the combination of 724 is same as 472.

			// fourth move if the first move is in grid7, second move is in grid2, third move is in grid5, and the fourth move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aoxaaxoxo") { $('#grid3').html(comp); array[0] = 'x'; array[3] = 'o'; }
			// fourth move if the first move is in grid7, second move is in grid2, third move is in grid5, and the fourth move is in grid3
			else if(this.id == 'grid3' && array.join('') == "aoxaaxoxo") { $('#grid4').html(comp); array[3] = 'x'; array[4] = 'o'; }
			// fourth move if the first move is in grid7, second move is in grid2, third move is in grid5, and the fourth move is in grid4
			else if(this.id == 'grid4' && array.join('') == "aoxaaxoxo") { $('#grid3').html(comp); array[4] = 'x'; array[3] = 'o'; }

			// fourth move if the first move is in grid7, second move is in grid2, third move is in grid8, and the fourth move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aoxaaooxx") { $('#grid4').html(comp); array[0] = 'x'; array[4] = 'o'; }
			// fourth move if the first move is in grid7, second move is in grid2, third move is in grid8, and the fourth move is in grid3
			else if(this.id == 'grid3' && array.join('') == "aoxaaooxx") { $('#grid0').html(comp); array[3] = 'x'; array[0] = 'o'; }
			// fourth move if the first move is in grid7, second move is in grid2, third move is in grid8, and the fourth move is in grid4
			else if(this.id == 'grid4' && array.join('') == "aoxaaooxx") { $('#grid0').html(comp); array[4] = 'x'; array[0] = 'o'; }

			// fourth move if the first move is in grid7, second move is in grid3, third move is in grid0, and the fourth move is in grid0
			// the combination of 730 is same as 703.

			// fourth move if the first move is in grid7, second move is in grid3, third move is in grid2, and the fourth move is in grid0
			// the combination of 732 is same as 723.

			// fourth move if the first move is in grid7, second move is in grid3, third move is in grid4, and the fourth move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aoaxxooxa") { $('#grid8').html(comp); array[0] = 'x'; array[8] = 'o'; }
			// fourth move if the first move is in grid7, second move is in grid3, third move is in grid4, and the fourth move is in grid2
			else if(this.id == 'grid2' && array.join('') == "aoaxxooxa") { $('#grid0').html(comp); array[2] = 'x'; array[0] = 'o'; }
			// fourth move if the first move is in grid7, second move is in grid3, third move is in grid4, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "aoaxxooxa") { $('#grid0').html(comp); array[8] = 'x'; array[0] = 'o'; }

			// fourth move if the first move is in grid7, second move is in grid3, third move is in grid5, and the fourth move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aoaxoxoxa") { $('#grid2').html(comp); array[0] = 'x'; array[2] = 'o'; }
			// fourth move if the first move is in grid7, second move is in grid3, third move is in grid5, and the fourth move is in grid2
			else if(this.id == 'grid2' && array.join('') == "aoaxoxoxa") { $('#grid8').html(comp); array[2] = 'x'; array[8] = 'o'; }
			// fourth move if the first move is in grid7, second move is in grid3, third move is in grid5, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "aoaxoxoxa") { $('#grid2').html(comp); array[8] = 'x'; array[2] = 'o'; }

			// fourth move if the first move is in grid7, second move is in grid3, third move is in grid8, and the fourth move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aooxaaoxx") { $('#grid4').html(comp); array[0] = 'x'; array[4] = 'o'; }
			// fourth move if the first move is in grid7, second move is in grid3, third move is in grid8, and the fourth move is in grid4
			else if(this.id == 'grid4' && array.join('') == "aooxaaoxx") { $('#grid0').html(comp); array[4] = 'x'; array[0] = 'o'; }
			// fourth move if the first move is in grid7, second move is in grid3, third move is in grid8, and the fourth move is in grid5
			else if(this.id == 'grid5' && array.join('') == "aooxaaoxx") { $('#grid0').html(comp); array[5] = 'x'; array[0] = 'o'; }

			// fourth move if the first move is in grid7, second move is in grid4, third move is in grid2, and the fourth move is in grid0
			// the combination of 742 is same as 472.

			// fourth move if the first move is in grid7, second move is in grid5, third move is in grid0, and the fourth move is in grid0
			// the combination of 750 is same as 057

			// fourth move if the first move is in grid7, second move is in grid5, third move is in grid2, and the fourth move is in grid0
			// the combination of 752 is same as 725.

			// fourth move if the first move is in grid7, second move is in grid5, third move is in grid3, and the fourth move is in grid0
			// the combination of 753 is same as 735.

			// fourth move if the first move is in grid7, second move is in grid5, third move is in grid4, and the fourth move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aoaoxxoxa") { $('#grid8').html(comp); array[0] = 'x'; array[8] = 'o'; }
			// fourth move if the first move is in grid7, second move is in grid5, third move is in grid4, and the fourth move is in grid2
			else if(this.id == 'grid2' && array.join('') == "aoaoxxoxa") { $('#grid0').html(comp); array[2] = 'x'; array[0] = 'o'; }
			// fourth move if the first move is in grid7, second move is in grid5, third move is in grid4, and the fourth move is in grid8
			else if(this.id == 'grid8' && array.join('') == "aoaoxxoxa") { $('#grid0').html(comp); array[8] = 'x'; array[0] = 'o'; }

			// fourth move if the first move is in grid7, second move is in grid5, third move is in grid8, and the fourth move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aooaaxoxx") { $('#grid4').html(comp); array[0] = 'x'; array[4] = 'o'; }
			// fourth move if the first move is in grid7, second move is in grid5, third move is in grid8, and the fourth move is in grid3
			else if(this.id == 'grid3' && array.join('') == "aooaaxoxx") { $('#grid0').html(comp); array[3] = 'x'; array[0] = 'o'; }
			// fourth move if the first move is in grid7, second move is in grid5, third move is in grid8, and the fourth move is in grid4
			else if(this.id == 'grid4' && array.join('') == "aooaaxoxx") { $('#grid0').html(comp); array[4] = 'x'; array[0] = 'o'; }

			// fourth move if the first move is in grid7, second move is in grid6, third move is in grid0, and the fourth move is in grid2
			else if(this.id == 'grid2' && array.join('') == "xoaoaaxxo") { $('#grid4').html(comp); array[2] = 'x'; array[4] = 'o'; }
			// fourth move if the first move is in grid7, second move is in grid6, third move is in grid0, and the fourth move is in grid4
			else if(this.id == 'grid4' && array.join('') == "xoaoaaxxo") { $('#grid2').html(comp); array[4] = 'x'; array[2] = 'o'; }
			// fourth move if the first move is in grid7, second move is in grid6, third move is in grid0, and the fourth move is in grid5
			else if(this.id == 'grid5' && array.join('') == "xoaoaaxxo") { $('#grid2').html(comp); array[5] = 'x'; array[2] = 'o'; }

			// fourth move if the first move is in grid7, second move is in grid6, third move is in grid2, and the fourth move is in grid0
			// the combination of 762 is same as 267.

			// fourth move if the first move is in grid7, second move is in grid6, third move is in grid3, and the fourth move is in grid2
			else if(this.id == 'grid2' && array.join('') == "ooaxaaxxo") { $('#grid4').html(comp); array[2] = 'x'; array[4] = 'o'; }
			// fourth move if the first move is in grid7, second move is in grid6, third move is in grid3, and the fourth move is in grid4
			else if(this.id == 'grid4' && array.join('') == "ooaxaaxxo") { $('#grid2').html(comp); array[4] = 'x'; array[2] = 'o'; }
			// fourth move if the first move is in grid7, second move is in grid6, third move is in grid3, and the fourth move is in grid5
			else if(this.id == 'grid5' && array.join('') == "ooaxaaxxo") { $('#grid2').html(comp); array[5] = 'x'; array[2] = 'o'; }

			// fourth move if the first move is in grid7, second move is in grid6, third move is in grid4, and the fourth move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aooaxaxxo") { $('#grid5').html(comp); array[0] = 'x'; array[5] = 'o'; }
			// fourth move if the first move is in grid7, second move is in grid6, third move is in grid4, and the fourth move is in grid3
			else if(this.id == 'grid3' && array.join('') == "aooaxaxxo") { $('#grid0').html(comp); array[3] = 'x'; array[0] = 'o'; }
			// fourth move if the first move is in grid7, second move is in grid6, third move is in grid4, and the fourth move is in grid5
			else if(this.id == 'grid5' && array.join('') == "aooaxaxxo") { $('#grid0').html(comp); array[5] = 'x'; array[0] = 'o'; }

			// fourth move if the first move is in grid7, second move is in grid8, third move is in grid0, and the fourth move is in grid0
			// the combination of 780 is same as 087.

			// fourth move if the first move is in grid7, second move is in grid8, third move is in grid2, and the fourth move is in grid0
			// the combination of 782 is same as 728.

			// fourth move if the first move is in grid7, second move is in grid8, third move is in grid3, and the fourth move is in grid0
			// the combination of 783 is same as 738.

			// fourth move if the first move is in grid7, second move is in grid8, third move is in grid4, and the fourth move is in grid2
			else if(this.id == 'grid2' && array.join('') == "ooaaxaoxx") { $('#grid3').html(comp); array[2] = 'x'; array[3] = 'o'; }
			// fourth move if the first move is in grid7, second move is in grid8, third move is in grid4, and the fourth move is in grid3
			else if(this.id == 'grid3' && array.join('') == "ooaaxaoxx") { $('#grid2').html(comp); array[3] = 'x'; array[2] = 'o'; }
			// fourth move if the first move is in grid7, second move is in grid8, third move is in grid4, and the fourth move is in grid5
			else if(this.id == 'grid5' && array.join('') == "ooaaxaoxx") { $('#grid2').html(comp); array[5] = 'x'; array[2] = 'o'; }

			// fourth move if the first move is in grid7, second move is in grid8, third move is in grid5, and the fourth move is in grid0
			// the combination of 785 is same as 758.

			// fourth move if the first move is in grid8, second move is in grid0, third move is in grid7, and the fourth move is in grid2
			else if(this.id == 'grid2' && array.join('') == "xoaaoxoxx") { $('#grid5').html(comp); array[2] = 'x'; array[5] = 'o'; }
			// fourth move if the first move is in grid8, second move is in grid0, third move is in grid7, and the fourth move is in grid3
			else if(this.id == 'grid3' && array.join('') == "xoaaoxoxx") { $('#grid2').html(comp); array[3] = 'x'; array[2] = 'o'; }
			// fourth move if the first move is in grid8, second move is in grid0, third move is in grid7, and the fourth move is in grid5
			else if(this.id == 'grid5' && array.join('') == "xoaaoxoxx") { $('#grid2').html(comp); array[5] = 'x'; array[2] = 'o'; }

			// fourth move if the first move is in grid8, second move is in grid1, third move is in grid2, and the fourth move is in grid2
			// the combination of 812 is same as 182.

			// fourth move if the first move is in grid8, second move is in grid1, third move is in grid3, and the fourth move is in grid2
			// the combination of 813 is same as 138.

			// fourth move if the first move is in grid8, second move is in grid1, third move is in grid5, and the fourth move is in grid2
			// the combination of 815 is same as 185.

			// fourth move if the first move is in grid8, second move is in grid1, third move is in grid6, and the fourth move is in grid2
			// the combination of 816 is same as168.

			// fourth move if the first move is in grid8, second move is in grid1, third move is in grid7, and the fourth move is in grid2
			// the combination of 817 is same as 178.

			// fourth move if the first move is in grid8, second move is in grid2, third move is in grid3, and the fourth move is in grid2
			// the combination of 823 is same as 238.

			// fourth move if the first move is in grid8, second move is in grid3, third move is in grid1, and the fourth move is in grid2
			// the combination of 831 is same as 138.

			// fourth move if the first move is in grid8, second move is in grid3, third move is in grid2, and the fourth move is in grid2
			// the combinaion of 832 is same as 238.

			// fourth move if the first move is in grid8, second move is in grid3, third move is in grid5, and the fourth move is in grid2
			// the combination of 835 is same as 358.

			// fourth move if the first move is in grid8, second move is in grid3, third move is in grid6, and the fourth move is in grid1
			else if(this.id == 'grid1' && array.join('') == "oaaxoaxox") { $('#grid2').html(comp); array[1] = 'x'; array[2] = 'o'; }
			// fourth move if the first move is in grid8, second move is in grid3, third move is in grid6, and the fourth move is in grid2
			else if(this.id == 'grid2' && array.join('') == "oaaxoaxox") { $('#grid1').html(comp); array[2] = 'x'; array[1] = 'o'; }
			// fourth move if the first move is in grid8, second move is in grid3, third move is in grid6, and the fourth move is in grid5
			else if(this.id == 'grid5' && array.join('') == "oaaxoaxox") { $('#grid1').html(comp); array[5] = 'x'; array[1] = 'o'; }

			// fourth move if the first move is in grid8, second move is in grid3, third move is in grid7, and the fourth move is in grid1
			else if(this.id == 'grid1' && array.join('') == "oaaxoaoxx") { $('#grid2').html(comp); array[1] = 'x'; array[2] = 'o'; }
			// fourth move if the first move is in grid8, second move is in grid3, third move is in grid7, and the fourth move is in grid2
			else if(this.id == 'grid2' && array.join('') == "oaaxoaoxx") { $('#grid5').html(comp); array[2] = 'x'; array[5] = 'o'; }
			// fourth move if the first move is in grid8, second move is in grid3, third move is in grid7, and the fourth move is in grid5
			else if(this.id == 'grid5' && array.join('') == "oaaxoaoxx") { $('#grid2').html(comp); array[5] = 'x'; array[2] = 'o'; }

			// fourth move if the first move is in grid8, second move is in grid5, third move is in grid6, and the fourth move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aaoaoxxox") { $('#grid1').html(comp); array[0] = 'x'; array[1] = 'o'; }
			// fourth move if the first move is in grid8, second move is in grid5, third move is in grid6, and the fourth move is in grid1
			else if(this.id == 'grid1' && array.join('') == "aaoaoxxox") { $('#grid0').html(comp); array[1] = 'x'; array[0] = 'o'; }
			// fourth move if the first move is in grid8, second move is in grid5, third move is in grid6, and the fourth move is in grid3
			else if(this.id == 'grid3' && array.join('') == "aaoaoxxox") { $('#grid1').html(comp); array[3] = 'x'; array[1] = 'o'; }

			// fourth move if the first move is in grid8, second move is in grid6, third move is in grid1, and the fourth move is in grid1
			// the combination of 861 is same as 168.

			// fourth move if the first move is in grid8, second move is in grid7, third move is in grid2, and the fourth move is in grid0
			else if(this.id == 'grid0' && array.join('') == "aaxaoooxx") { $('#grid3').html(comp); array[0] = 'x'; array[3] = 'o'; }
			// fourth move if the first move is in grid8, second move is in grid7, third move is in grid2, and the fourth move is in grid1
			else if(this.id == 'grid1' && array.join('') == "aaxaoooxx") { $('#grid3').html(comp); array[1] = 'x'; array[3] = 'o'; }
			// fourth move if the first move is in grid8, second move is in grid7, third move is in grid2, and the fourth move is in grid3
			else if(this.id == 'grid3' && array.join('') == "aaxaoooxx") { $('#grid0').html(comp); array[3] = 'x'; array[0] = 'o'; }
		}
		else {
			// there is some move already played on this grid
			// show some visual feedback
			$('#status').html("You really think that's a good move?");
		}

		var grid0 = document.getElementById('grid0');
		var grid1 = document.getElementById('grid1');
		var grid2 = document.getElementById('grid2');
		var grid3 = document.getElementById('grid3');
		var grid4 = document.getElementById('grid4');
		var grid5 = document.getElementById('grid5');
		var grid6 = document.getElementById('grid6');
		var grid7 = document.getElementById('grid7');
		var grid8 = document.getElementById('grid8');
		var rnd = Math.floor(Math.random() * comments.length);

		// if the first row has similar keys.
		if(grid0.innerHTML == "O" && grid1.innerHTML == "O" && grid2.innerHTML == "O") {
			$('#grid0').css({color: '#e74c3c'}); $('#grid1').css({color: '#e74c3c'}); $('#grid2').css({color: '#e74c3c'});
			$('body, html').undelegate('#gameboard > div > div', 'click');
			$('#status').html("You lose."); $('#comment').html("Click here to RETRY.");
			$('#comment').on('click', function(){
				$('#gameboard > div > div').html('');
				array = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];
				$('#status').html('Good Luck!');
				$('#comment').html(comments[rnd]);
				$('#grid0').css({color: 'white'}); $('#grid1').css({color: 'white'}); $('#grid2').css({color: 'white'});
			});
			$('body, html').delegate('#gameboard > div > div', 'click');
		}
		else if(grid0.innerHTML == "X" && grid1.innerHTML == "X" && grid2.innerHTML == "X") {
			$('#grid0').css({color: '#3498db'}); $('#grid1').css({color: '#3498db'}); $('#grid2').css({color: '#3498db'});
			$('body, html').undelegate('#gameboard > div > div', 'click');
			$('#status').html("You Lose."); $('#comment').html('Click here to RETRY.');
			$('#comment').on('click', function(){
				$('#gameboard > div > div').html("");
				array = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];
				$('#status').html('Good Luck!');
				$('#comment').html(comments[rnd]);
				$('#grid0').css({color: 'white'}); $('#grid1').css({color: 'white'}); $('#grid2').css({color: 'white'});
			});
			$('body, html').delegate('#gameboard > div > div', 'click');

		}
		// if the second row has similar keys.
		else if(grid3.innerHTML == "O" && grid4.innerHTML == "O" && grid5.innerHTML == "O") {
			$('#grid3').css({color: '#e74c3c'}); $('#grid4').css({color: '#e74c3c'}); $('#grid5').css({color: '#e74c3c'});
			$('body, html').undelegate('#gameboard > div > div', 'click');
			$('#status').html("You Lose."); $('#comment').html('Click here to RETRY.');
			$('#comment').on('click', function(){
				$('#gameboard > div > div').html("");
				array = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];
				$('#status').html('Good Luck!');
				$('#comment').html(comments[rnd]);
				$('#grid3').css({color: 'white'}); $('#grid4').css({color: 'white'}); $('#grid5').css({color: 'white'});
			});
			$('body, html').delegate('#gameboard > div > div', 'click');
		}
		else if(grid3.innerHTML == "X" && grid4.innerHTML == "X" && grid5.innerHTML == "X") {
			$('#grid3').css({color: '#3498db'}); $('#grid4').css({color: '#3498db'}); $('#grid5').css({color: '#3498db'});
			$('body, html').undelegate('#gameboard > div > div', 'click');
			$('#status').html("You Lose."); $('#comment').html('Click here to RETRY.');
			$('#comment').on('click', function(){
				$('#gameboard > div > div').html("");
				array = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];
				$('#status').html('Good Luck!');
				$('#comment').html(comments[rnd]);
				$('#grid3').css({color: 'white'}); $('#grid4').css({color: 'white'}); $('#grid5').css({color: 'white'});
			});
			$('body, html').delegate('#gameboard > div > div', 'click');
		}
		// if the third row has similar keys.
		else if(grid6.innerHTML == "O" && grid7.innerHTML == "O" && grid8.innerHTML == "O") {
			$('#grid6').css({color: '#e74c3c'}); $('#grid7').css({color: '#e74c3c'}); $('#grid8').css({color: '#e74c3c'});
			$('body, html').undelegate('#gameboard > div > div', 'click');
			$('#status').html("You Lose."); $('#comment').html('Click here to RETRY.');
			$('#comment').on('click', function(){
				$('#gameboard > div > div').html("");
				array = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];
				$('#status').html('Good Luck!');
				$('#comment').html(comments[rnd]);
				$('#grid6').css({color: 'white'}); $('#grid7').css({color: 'white'}); $('#grid8').css({color: 'white'});
			});
			$('body, html').delegate('#gameboard > div > div', 'click');
		}
		else if(grid6.innerHTML == "X" && grid7.innerHTML == "X" && grid8.innerHTML == "X") {
			$('#grid6').css({color: '#3498db'}); $('#grid7').css({color: '#3498db'}); $('#grid8').css({color: '#3498db'});
			$('body, html').undelegate('#gameboard > div > div', 'click');
			$('#status').html("You Lose."); $('#comment').html('Click here to RETRY.');
			$('#comment').on('click', function(){
				$('#gameboard > div > div').html("");
				array = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];
				$('#status').html('Good Luck!');
				$('#comment').html(comments[rnd]);
				$('#grid6').css({color: 'white'}); $('#grid7').css({color: 'white'}); $('#grid8').css({color: 'white'});
			});
			$('body, html').delegate('#gameboard > div > div', 'click');
		}
		// if the first column has similar keys.
		else if(grid0.innerHTML == "O" && grid3.innerHTML == "O" && grid6.innerHTML == "O") {
			$('#grid0').css({color: '#e74c3c'}); $('#grid3').css({color: '#e74c3c'}); $('#grid6').css({color: '#e74c3c'});
			$('body, html').undelegate('#gameboard > div > div', 'click');
			$('#status').html("You Lose."); $('#comment').html('Click here to RETRY.');
			$('#comment').on('click', function(){
				$('#gameboard > div > div').html("");
				array = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];
				$('#status').html('Good Luck!');
				$('#comment').html(comments[rnd]);
				$('#grid0').css({color: 'white'}); $('#grid3').css({color: 'white'}); $('#grid6').css({color: 'white'});
			});
			$('body, html').delegate('#gameboard > div > div', 'click');
		}
		else if(grid0.innerHTML == "X" && grid3.innerHTML == "X" && grid6.innerHTML == "X") {
			$('#grid0').css({color: '#3498db'}); $('#grid3').css({color: '#3498db'}); $('#grid6').css({color: '#3498db'});
			$('body, html').undelegate('#gameboard > div > div', 'click');
			$('#status').html("You Lose."); $('#comment').html('Click here to RETRY.');
			$('#comment').on('click', function(){
				$('#gameboard > div > div').html("");
				array = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];
				$('#status').html('Good Luck!');
				$('#comment').html(comments[rnd]);
				$('#grid0').css({color: 'white'}); $('#grid3').css({color: 'white'}); $('#grid6').css({color: 'white'});
			});
			$('body, html').delegate('#gameboard > div > div', 'click');
		}
		// if the second column has similar keys.
		else if(grid1.innerHTML == "O" && grid4.innerHTML == "O" && grid7.innerHTML == "O") {
			$('#grid1').css({color: '#e74c3c'}); $('#grid4').css({color: '#e74c3c'}); $('#grid7').css({color: '#e74c3c'});
			$('body, html').undelegate('#gameboard > div > div', 'click');
			$('#status').html("You Lose."); $('#comment').html('Click here to RETRY.');
			$('#comment').on('click', function(){
				$('#gameboard > div > div').html("");
				array = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];
				$('#status').html('Good Luck!');
				$('#comment').html(comments[rnd]);
				$('#grid1').css({color: 'white'}); $('#grid4').css({color: 'white'}); $('#grid7').css({color: 'white'});
			});
			$('body, html').delegate('#gameboard > div > div', 'click');
		}
		else if(grid1.innerHTML == "X" && grid4.innerHTML == "X" && grid7.innerHTML == "X") {
			$('#grid1').css({color: '#3498db'}); $('#grid4').css({color: '#3498db'}); $('#grid7').css({color: '#3498db'});
			$('body, html').undelegate('#gameboard > div > div', 'click');
			$('#status').html("You Lose."); $('#comment').html('Click here to RETRY.');
			$('#comment').on('click', function(){
				$('#gameboard > div > div').html("");
				array = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];
				$('#status').html('Good Luck!');
				$('#comment').html(comments[rnd]);
				$('#grid1').css({color: 'white'}); $('#grid4').css({color: 'white'}); $('#grid7').css({color: 'white'});
			});
			$('body, html').delegate('#gameboard > div > div', 'click');
		}
		// if the third column has similar keys.
		else if(grid2.innerHTML == "O" && grid5.innerHTML == "O" && grid8.innerHTML == "O") {
			$('#grid2').css({color: '#e74c3c'}); $('#grid5').css({color: '#e74c3c'}); $('#grid8').css({color: '#e74c3c'});
			$('body, html').undelegate('#gameboard > div > div', 'click');
			$('#status').html("You Lose."); $('#comment').html('Click here to RETRY.');
			$('#comment').on('click', function(){
				$('#gameboard > div > div').html("");
				array = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];
				$('#status').html('Good Luck!');
				$('#comment').html(comments[rnd]);
				$('#grid2').css({color: 'white'}); $('#grid5').css({color: 'white'}); $('#grid8').css({color: 'white'});
			});
			$('body, html').delegate('#gameboard > div > div', 'click');
		}
		else if(grid2.innerHTML == "X" && grid5.innerHTML == "X" && grid8.innerHTML == "X") {
			$('#grid2').css({color: '#3498db'}); $('#grid5').css({color: '#3498db'}); $('#grid8').css({color: '#3498db'});
			$('body, html').undelegate('#gameboard > div > div', 'click');
			$('#status').html("You Lose."); $('#comment').html('Click here to RETRY.');
			$('#comment').on('click', function(){
				$('#gameboard > div > div').html("");
				array = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];
				$('#status').html('Good Luck!');
				$('#comment').html(comments[rnd]);
				$('#grid2').css({color: 'white'}); $('#grid5').css({color: 'white'}); $('#grid8').css({color: 'white'});
			});
			$('body, html').delegate('#gameboard > div > div', 'click');
		}
		// if the left to right diagonal has similar keys.
		else if(grid0.innerHTML == "O" && grid4.innerHTML == "O" && grid8.innerHTML == "O") {
			$('#grid0').css({color: '#e74c3c'}); $('#grid4').css({color: '#e74c3c'}); $('#grid8').css({color: '#e74c3c'});
			$('body, html').undelegate('#gameboard > div > div', 'click');
			$('#status').html("You Lose."); $('#comment').html('Click here to RETRY.');
			$('#comment').on('click', function(){
				$('#gameboard > div > div').html("");
				array = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];
				$('#status').html('Good Luck!');
				$('#comment').html(comments[rnd]);
				$('#grid0').css({color: 'white'}); $('#grid4').css({color: 'white'}); $('#grid8').css({color: 'white'});
			});
			$('body, html').delegate('#gameboard > div > div', 'click');
		}
		else if(grid0.innerHTML == "X" && grid4.innerHTML == "X" && grid8.innerHTML == "X") {
			$('#grid0').css({color: '#3498db'}); $('#grid4').css({color: '#3498db'}); $('#grid8').css({color: '#3498db'});
			$('body, html').undelegate('#gameboard > div > div', 'click');
			$('#status').html("You Lose."); $('#comment').html('Click here to RETRY.');
			$('#comment').on('click', function(){
				$('#gameboard > div > div').html("");
				array = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];
				$('#status').html('Good Luck!');
				$('#comment').html(comments[rnd]);
				$('#grid0').css({color: 'white'}); $('#grid4').css({color: 'white'}); $('#grid8').css({color: 'white'});
			});
			$('body, html').delegate('#gameboard > div > div', 'click');
		}
		// if the right to left diagonal has similar keys.
		else if(grid2.innerHTML == "O" && grid4.innerHTML == "O" && grid6.innerHTML == "O") {
			$('#grid2').css({color: '#e74c3c'}); $('#grid4').css({color: '#e74c3c'}); $('#grid6').css({color: '#e74c3c'});
			$('body, html').undelegate('#gameboard > div > div', 'click');
			$('#status').html("You Lose."); $('#comment').html('Click here to RETRY.');
			$('#comment').on('click', function(){
				$('#gameboard > div > div').html("");
				array = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];
				$('#status').html('Good Luck!');
				$('#comment').html(comments[rnd]);
				$('#grid2').css({color: 'white'}); $('#grid4').css({color: 'white'}); $('#grid6').css({color: 'white'});
			});
			$('body, html').delegate('#gameboard > div > div', 'click');
		}
		else if(grid2.innerHTML == "X" && grid4.innerHTML == "X" && grid6.innerHTML == "X") {
			$('#grid2').css({color: '#3498db'}); $('#grid4').css({color: '#3498db'}); $('#grid6').css({color: '#3498db'});
			$('body, html').undelegate('#gameboard > div > div', 'click');
			$('#status').html("You LOSE."); $('#comment').html('Click here to RETRY.');
			$('#comment').on('click', function(){
				$('#gameboard > div > div').html("");
				array = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];
				$('#status').html('Good Luck!');
				$('#comment').html(comments[rnd]);
				$('#grid2').css({color: 'white'}); $('#grid4').css({color: 'white'}); $('#grid6').css({color: 'white'});
			});
			$('body, html').delegate('#gameboard > div > div', 'click');
		}
		// if it is a draw
		// there are no empty spaces in the grid.
		var i = 0, flag = 0;
		for(i = 0; i < array.length; i ++) {
			if(array[i] == 'a') { flag ++; }
			console.log(array[i]);
		}
		console.log(flag);
		if(i == array.length && flag <= 1) {
			$('#status').html("It's a DRAW."); $('#comment').html("Click here to RETRY.");
			$('#comment').on('click', function() {
				$('#gameboard > div > div').html("");
				array = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];
				$('#status').html('Good Luck!');
				$('#comment').html(comments[rnd]);
			});
		 }
	});
}

$(document).ready(main);