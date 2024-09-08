/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	},
	'Question1_correct': {
		title: 'Correct !',
		subtitle: 'Le port du casque n\'est pas obligatoire',
		body: 'Effectivement, le port du casque n\'est pas obligatoire pour les vélos, bien que vivement recommandé ! Ne serait-ce que pour montrer l\'exemple aux plus jeunes. Il est en revanche obligé de le porter pour les personnes qui se déplacent en vélo électrique.',
	},
	'Question1_incorrect': {
		title: 'Incorrect !',
		subtitle: 'Le port du casque n\'est pas obligatoire',
		body: 'Effectivement, le port du casque n\'est pas obligatoire pour les vélos, bien que vivement recommandé ! Ne serait-ce que pour montrer l\'exemple aux plus jeunes. Il est en revanche obligé de le porter pour les personnes qui se déplacent en vélo électrique.',
	},
	'Question2_correct': {
		title: 'Correct !',
		subtitle: 'C\'est bien 100 lumen',
		body: 'Une lumière de 100 lumen est suffisante pour te permettre de voir la route devant toi en pleine nuit.',
	},
	'Question2_incorrect': {
		title: 'Incorrect !',
		subtitle: 'C\'était 100 lumen',
		body: 'Une lumière de 100 lumen est suffisante pour te permettre de voir la route devant toi en pleine nuit.',
	},
	'Question3_correct': {
		title: 'Correct !',
		subtitle: 'C\'est bien 200 lumen',
		body: 'S\'il n\'y a aucun autre éclairage présent sur la route, alors il te faut au moins 200 lumen pour voir la route correctement face à toi. Mais tu peux même trouver des lumières à 1500 lumen, si nécessaire.',
	},
	'Question3_incorrect': {
		title: 'Incorrect !',
		subtitle: 'C\'était 200 lumen',
		body: 'S\'il n\'y a aucun autre éclairage présent sur la route, alors il te faut au moins 200 lumen pour voir la route correctement face à toi. Mais tu peux même trouver des lumières à 1500 lumen, si nécessaire.',
	},
	'Question4_correct': {
		title: 'Correct !',
		subtitle: 'Cela indique qu\'il faut réduire la vitesse',
		body: 'Il faut étendre le bras avec la paume vers le sol et faire des mouvements courts avec la main de haut en bas. Ce mouvement doit être fait à l\'avance pour que les autres cyclistes aient le temps de réduire leur vitesse progressivement.',
	},
	'Question4_incorrect': {
		title: 'Incorrect !',
		subtitle: 'Cela indique qu\'il faut réduire la vitesse',
		body: 'Il faut étendre le bras avec la paume vers le sol et faire des mouvements courts avec la main de haut en bas. Ce mouvement doit être fait à l\'avance pour que les autres cyclistes aient le temps de réduire leur vitesse progressivement.',
	},
	'Question5_correct': {
		title: 'Correct !',
		subtitle: 'Cela signifie tourner à gauche',
		body: 'Ce geste est l\'équivalent du clignotant pour les véhicules à moteur. Tu dois étendre le bras dans la direction où tu souhaites tourner. À droite pour indiquer que tu tournes à droite. À gauche pour indiquer que tu tournes à gauche.',
	},
	'Question5_incorrect': {
		title: 'Incorrect !',
		subtitle: 'Cela signifie tourner à gauche',
		body: 'Ce geste est l\'équivalent du clignotant pour les véhicules à moteur. Tu dois étendre le bras dans la direction où tu souhaites tourner. À droite pour indiquer que tu tournes à droite. À gauche pour indiquer que tu tournes à gauche.',
	},
	'Question6_correct': {
		title: 'Correct !',
		subtitle: 'Il faut s\'arrêter',
		body: 'Quand tu vois ce geste, cela veut dire que tu dois réduire ta vitesse et t\'arrêter dès que possible pour éviter toute collision ou accident. Pour ce geste, tu dois lever la main au-dessus de la tête avec la paume vers l\'avant.',
	},
	'Question6_incorrect': {
		title: 'Incorrect !',
		subtitle: 'Il faut s\'arrêter',
		body: 'Quand tu vois ce geste, cela veut dire que tu dois réduire ta vitesse et t\'arrêter dès que possible pour éviter toute collision ou accident. Pour ce geste, tu dois lever la main au-dessus de la tête avec la paume vers l\'avant.',
	},
	'Question7_correct': {
		title: 'Correct !',
		subtitle: 'Des objets gênent la chaussée',
		body: 'Si tu vois un cycliste faire ce geste, il t\'indique que des objets bloquent la chaussée et que tu dois les éviter, comme une branche d\'arbre, un caillou ou un déchet par exemple.',
	},
	'Question7_incorrect': {
		title: 'Incorrect !',
		subtitle: 'Des objets gênent la chaussée',
		body: 'Si tu vois un cycliste faire ce geste, il t\'indique que des objets bloquent la chaussée et que tu dois les éviter, comme une branche d\'arbre, un caillou ou un déchet par exemple.',
	},
	'Question8_correct': {
		title: 'Correct !',
		subtitle: 'C\'est un dos-d\'âne',
		body: 'Et oui, si tu as trouvé celui-ci, tu es déjà bien calé en gestuelle. Ce mouvement indique un dos-d\'âne ou nid-de-poule. Pour ce faire, tu dois étendre le bras et faire des mouvements ascendants plusieurs fois. Ou alors, d\'étendre les coudes et de les mouvoir à la fois, comme une poule ferait avec ses ailes.',
	},
	'Question8_incorrect': {
		title: 'Incorrect !',
		subtitle: 'C\'est un dos-d\'âne',
		body: 'Et oui, si tu as trouvé celui-ci, tu es déjà bien calé en gestuelle. Ce mouvement indique un dos-d\'âne ou nid-de-poule. Pour ce faire, tu dois étendre le bras et faire des mouvements ascendants plusieurs fois. Ou alors, d\'étendre les coudes et de les mouvoir à la fois, comme une poule ferait avec ses ailes.',
	},
	'Question9_correct': {
		title: 'Correct !',
		subtitle: 'La route est sale',
		body: 'En effet, cela veut dire que la route est sale et couverte de sable, de sel, d\'huile ou autres saletés qui pourraient provoquer une perte de traction de ton vélo, et résulter en une chute.',
	},
	'Question9_incorrect': {
		title: 'Incorrect !',
		subtitle: 'La route est sale',
		body: 'En effet, cela veut dire que la route est sale et couverte de sable, de sel, d\'huile ou autres saletés qui pourraient provoquer une perte de traction de ton vélo, et résulter en une chute.',
	},
	'Question10_correct': {
		title: 'Correct !',
		subtitle: 'Il faut esquiver un obstacle',
		body: 'Si tu vois ceci, tu dois te préparer à te déporter sur la droite ou sur la gauche pour éviter la voiture, le piéton ou encore les ralentisseurs au bord de la chaussée.',
	},
	'Question10_incorrect': {
		title: 'Incorrect !',
		subtitle: 'Il faut esquiver un obstacle',
		body: 'Si tu vois ceci, tu dois te préparer à te déporter sur la droite ou sur la gauche pour éviter la voiture, le piéton ou encore les ralentisseurs au bord de la chaussée.',
	},
	'Question11_correct': {
		title: 'Correct !',
		subtitle: '60 CHF d\'amende',
		body: 'Si tu brûles un feu rouge, un policier sera en mesure de te facturer 60 CHF afin de te décourager de reproduire la même erreur.',
	},
	'Question11_incorrect': {
		title: 'Incorrect !',
		subtitle: '60 CHF d\'amende',
		body: 'Si tu brûles un feu rouge, un policier sera en mesure de te facturer 60 CHF afin de te décourager de reproduire la même erreur.',
	},
	'Question12_correct': {
		title: 'Correct !',
		subtitle: '30 CHF d\'amende',
		body: 'Ne pas s\'arrêter à un stop est passible d\'une amende de 30 CHF. La prochaine fois, tu y réfléchiras à deux fois avant de passer parce que tu as la flemme de t\'arrêter.',
	},
	'Question12_incorrect': {
		title: 'Incorrect !',
		subtitle: '30 CHF d\'amende',
		body: 'Ne pas s\'arrêter à un stop est passible d\'une amende de 30 CHF. La prochaine fois, tu y réfléchiras à deux fois avant de passer parce que tu as la flemme de t\'arrêter.',
	},
	'Question13_correct': {
		title: 'Correct !',
		subtitle: '30 CHF',
		body: 'Tout comme ne pas s\'arrêter au stop, rouler dans une zone piétonne est passible de 30 CHF d\'amende. Ça a peut-être l\'air minime comme coût, mais ça, plus ça, plus ça, tu vas finir par sponsoriser l\'État si tu continues comme ça.',
	},
	'Question13_incorrect': {
		title: 'Incorrect !',
		subtitle: '30 CHF',
		body: 'Tout comme ne pas s\'arrêter au stop, rouler dans une zone piétonne est passible de 30 CHF d\'amende. Ça a peut-être l\'air minime comme coût, mais ça, plus ça, plus ça, tu vas finir par sponsoriser l\'État si tu continues comme ça.',
	},
	'Question14_correct': {
		title: 'Correct !',
		subtitle: 'Rouler de nuit sans feu',
		body: 'Ça t\'étonne peut-être, mais rouler de nuit sans feu alors que la route n\'est pas éclairée te reviendra à 60 CHF d\'amende. Ne pas accorder la priorité à un passage pour piétons est sanctionné à hauteur de 40 CHF, et ne pas utiliser la piste cyclable te coûtera 30 CHF.',
	},
	'Question14_incorrect': {
		title: 'Incorrect !',
		subtitle: 'Rouler de nuit sans feu',
		body: 'Ça t\'étonne peut-être, mais rouler de nuit sans feu alors que la route n\'est pas éclairée te reviendra à 60 CHF d\'amende. Ne pas accorder la priorité à un passage pour piétons est sanctionné à hauteur de 40 CHF, et ne pas utiliser la piste cyclable te coûtera 30 CHF.',
	},
	'Question15_correct': {
		title: 'Correct !',
		subtitle: 'C\'est 40 CHF sur les routes éclairées',
		body: 'Rouler sans lumière est vivement déconseillé, mais tant qu\'à faire, il vaut mieux le faire en ville, où c\'est un minimum éclairé de nuit.',
	},
	'Question15_incorrect': {
		title: 'Incorrect !',
		subtitle: 'C\'est 40 CHF sur les routes éclairées',
		body: 'Rouler sans lumière est vivement déconseillé, mais tant qu\'à faire, il vaut mieux le faire en ville, où c\'est un minimum éclairé de nuit.',
	},
	'Question16_correct': {
		title: 'Correct !',
		subtitle: '20 CHF',
		body: 'Bon, ça c\'est si tu veux faire ton malin devant les autres et frimer.',
	},
	'Question16_incorrect': {
		title: 'Incorrect !',
		subtitle: '20 CHF',
		body: 'Bon, ça c\'est si tu veux faire ton malin devant les autres et frimer.',
	},
	'Question17_correct': {
		title: 'Correct !',
		subtitle: 'Évidemment que c\'est important',
		body: 'Tu devrais le savoir, être bien équipé est primordial pour assurer un minimum sa sécurité à vélo.',
	},
	'Question17_incorrect': {
		title: 'Incorrect !',
		subtitle: 'C\'est important de vérifier son matériel',
		body: 'Tu devrais le savoir, être bien équipé est primordial pour assurer un minimum sa sécurité à vélo.',
	},
	'Question18_correct': {
		title: 'Correct !',
		subtitle: 'Les trois',
		body: 'Il faut vérifier tous ces éléments : les freins, les pneus mais aussi les lumières !',
	},
	'Question18_incorrect': {
		title: 'Incorrect !',
		subtitle: 'Les trois',
		body: 'Il faut vérifier tous ces éléments : les freins, les pneus mais aussi les lumières !',
	},
	'Question19_correct': {
		title: 'Correct !',
		subtitle: 'Une superposition de vêtements',
		body: 'Il faut bien t\'habiller à vélo et t\'assurer que tu es prêt à braver le froid, la pluie et le vent.',
	},
	'Question19_incorrect': {
		title: 'Incorrect !',
		subtitle: 'Une superposition de vêtements',
		body: 'Il faut bien t\'habiller à vélo et t\'assurer que tu es prêt à braver le froid, la pluie et le vent.',
	},
	'Question20_correct': {
		title: 'Correct !',
		subtitle: 'Les lumières',
		body: 'Le casque et la sonnette sont recommandés, mais les lumières sont primordiales !',
	},
	'Question20_incorrect': {
		title: 'Incorrect !',
		subtitle: 'Les lumières',
		body: 'Le casque et la sonnette sont recommandés, mais les lumières sont primordiales !',
	},
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Bienvenue',
		body: 'Vous jouez au jeu « Safe Ride »',
		icon: './favicon.ico',
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('Credits', {
	'About': {
		'Rebecca Kneubuehler': [
			'Developping',
		],
		'Github': [
			'<a href="https://github.com/rbkProduction/Monogatari-v2.0.2">Code source</a>',
		],
	},
	'Sources': {
		'Images': '<a href="https://www.freepik.com">Freepik</a> <br>', 
		'Images': '<a href="https://www.canva.com/">Canva</a>',
		'Sprites': '<a href="https://www.freepik.com">Freepik</a>',
		'Music & sounds': '<p>YouTube Audio Library</p>',
	}
});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {
	
});

// Define the music used in the game.
monogatari.assets ('music', {
	intro: 'intro/Smoke - Lish Grooves.mp3',
	chapter1: 'chapter1/Sofa - Dyalla.mp3',
	chapter2: 'chapter2/Bump - Dyalla.mp3',
	chapter3: 'chapter3/In Dreams - Lish Grooves.mp3',
	lastChapter: 'lastChapter/Refresher - Dyalla.mp3',
	end: 'end/Good Energy - Dyalla.mp3',
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	'pedals': 'Bicycle Pedaling.mp3',
});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {
	'chapter1_question2': 'chapter1/chapter1_question2.png',
	'chapter1_question2_solution': 'chapter1/chapter1_question2_solution.png',
	'chapter1_question3': 'chapter1/chapter1_question3.png',
	'chapter1_question3_solution': 'chapter1/chapter1_question3_solution.png',
	'chapter1_mostImportant1': 'chapter1/5mostImportant/chapter1_mostImportant1.png',
	'chapter1_mostImportant2': 'chapter1/5mostImportant/chapter1_mostImportant2.png',
	'chapter1_mostImportant3': 'chapter1/5mostImportant/chapter1_mostImportant3.png',
	'chapter1_mostImportant4': 'chapter1/5mostImportant/chapter1_mostImportant4.png',
	'chapter1_mostImportant5': 'chapter1/5mostImportant/chapter1_mostImportant5.png',
	'chapter1_apparels1': 'chapter1/apparels/chapter1_apparels1.png',
	'chapter1_apparels2': 'chapter1/apparels/chapter1_apparels2.png',
	'chapter1_apparels3': 'chapter1/apparels/chapter1_apparels3.png',
	'chapter1_apparels4': 'chapter1/apparels/chapter1_apparels4.png',
	'chapter2_question4': 'chapter2/gestures/chapter2_question4.png',
	'chapter2_question5': 'chapter2/gestures/chapter2_question5.png',
	'chapter2_question6': 'chapter2/gestures/chapter2_question6.png',
	'chapter2_question7': 'chapter2/gestures/chapter2_question7.png',
	'chapter2_question8': 'chapter2/gestures/chapter2_question8.png',
	'chapter2_question9': 'chapter2/gestures/chapter2_question9.png',
	'chapter2_question10': 'chapter2/gestures/chapter2_question10.png',
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'menu': 'menu.png',
	'homepage': 'homepage.svg',
	'street': 'street.svg',
	'chapter1': 'chapter1.svg',
	'chapter1_background': 'chapter1_background.svg',
	'chapter2': 'chapter2.svg',
	'chapter2_background': 'chapter2_background.svg',
	'chapter3': 'chapter3.svg',
	'chapter3_background': 'chapter3_background.svg',
	'lastChapter': 'lastChapter.svg',
	'lastChapter_background': 'lastChapter_background.svg',
	'ending': 'ending.svg',
});


// Define the Characters
monogatari.characters ({
	'm': {
		name: 'Marie',
		color: 'darkred',
		directory: 'marie',
		sprites: {
			back: 'back.png',
			doubting: 'doubting.png',
			front: 'front.png',
			laughing: 'laughing.png',
			leftSide: 'leftSide.png',
			smiling: 'smiling.png',
			shocked: 'shocked.png',
			surprised: 'surprised.png',
			thirdSide: 'thirdSide.png',
		},
	},
	'p': {
		name: '{{player.name}}',
		color: 'darkolivegreen',
		directory: 'player',
		sprites: {
			front: 'front.png',
			doubting: 'doubting.png',
			back: 'back.png',
			interested: 'interested.png',
			laughing: 'laughing.png',
			rightSide: 'rightSide.png',
			shocked: 'shocked.png',
			smiling: 'smiling.png',
			surprised: 'surprised.png',
			thirdSide: 'thirdSide.png',
		},
	},
});

let capital = 100;
// Function to upload the statBar
function uploadStatBar() {
	let statBar = document.getElementById("progressBar");
	let capitalSpan = document.getElementById("capital");
	// Upload the display of the amount spent
	capitalSpan.textContent = capital;
	// Upload the value of the statBar
	statBar.value = capital;
	// Upload in the user's storage
	monogatari.storage ().newCapital = capital;
};

// Function to add an expense
function revertCapital() {
	// Add the amount of risk to be added to the score
	capital += 5;
	// Upload the stat bar
	uploadStatBar(capital);
	return true;
};

// Function to substract an expense
function updateCapital() {
	// Add the amount of risk to be deducted to the score
	capital -= 5;
	// Upload the stat bar
	uploadStatBar(capital);
};


monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene homepage',
		'play music intro with volume 20',
		'show notification Welcome',
		{
			'Input': {
				'Text': 'Quel est ton nom ?',
				'Validation': (input) => {
					return input.trim ().length > 0;
				},
				'Save': (input) => {
					monogatari.storage ({ player: { name: input }});
				},
				'Revert': () => {
					monogatari.storage ({ player: { name: '' }});
				},
				'Warning': 'Merci d\'entrer un nom'
			},
		},
		'centered Bonjour {{player.name}}.',
		'centered Safe ride est un jeu de prévention sur les codes de la route et les infractions auquel tu peux être sujet lors de tes sorties à vélo, que ce soit en solo ou en peloton.',
		'centered Tu vas découvrir les gestes de sécurité à appliquer, ainsi que les réflexes à adopter pour une bonne conduite sur la route.',
		'centered Tu vas commencer le jeu avec un capital risque de 100%.',
		'centered Réponds correctement au maximum de questions et tu feras baisser ton capital risque. Essaie de finir le jeu avec le pourcentage le plus faible !',
		'jump Scene1',
	],

	'Scene1': [
		'show scene street with fadeIn',
		'show character p rightSide on left with fadeIn',
		'show character m leftSide on right with fadeIn',
		'm Bonjour, j\'ai entendu dire que tu souhaitais en savoir plus sur la sécurité à vélo.',
		'p C\'est exact. Je crois que cela ne me ferait pas de mal de revoir les bases.',
		'm Ça tombe bien, je suis experte en la matière ! Voyons tout de suite si on doit te considérer comme un danger sur la voie publique.',
		'show character m smiling on right',
		'show character p front on left',
		'stop music intro',
		'jump Scene2',
	],


	'Scene2': [
		'show scene chapter1 with fadeIn',
		'play sound pedals',
		'wait 4000',
		'jump Scene3',
	],
	
	'Scene3': [
		// Chapter 1
		'stop sound pedals',
		'play music chapter1 on loop with volume 20',
		'show scene chapter1_background with fadeIn',
		'show character p smiling on left with fadeIn',
		'show character m front on right with fadeIn',
		'm Avoir un matériel adéquat est primordial à vélo. Tu vas te souvenir que cela peut t\'être utile, voire même te sauver la vie.',
		'p Oui, effectivement. Peux-tu me donner un exemple ?',
		'm Typiquement, le casque.',
		{
			'Choice': {
				// Question 1
				'Dialog': 'm Selon toi, est-il obligatoire de porter un casque à vélo ?',
				'Oui': {
					'Text': 'Oui, absolument !',
					'Do': 'show message Question1_incorrect',
				},
				'Non': {
					'Text': 'Évidemment que non.. En plus, j\'ai l\'air ridicule avec un casque.',
					'Do': 'show message Question1_incorrect',

				},
				'Autre': {
					'Text': 'Oui, mais uniquement pour les vélos électriques.',
					'onChosen': function(){updateCapital()},
					'onRevert': function(){revertCapital()},
					'Do': 'show message Question1_correct',
				},
			},
		},
		'show character p interested on left with fadeIn',
		'show character m shocked on right with fadeIn',
		'm Le port du casque, bien que pas obligatoire, peut sauver ta vie dans beaucoup de circonstances.',
		'p C\'est vrai.',
		'm Continuous.',
		'm Les lumières sont également très importantes à vélo, surtout lorsqu\'il fait obscur ou que les routes sont mal éclairées.',
		'show image chapter1_question2 top with fadeIn',
		'm Imagines que tu te trouves sur une route comme illustré ci-dessus, c\'est-à-dire en pleine nuit et seul sur la route.',
		{
			'Choice': {
				// Question 2
				'Dialog': 'm De quelle puissance de lumière as-tu au minimum besoin pour y voir assez clair en roulant ?',
				'10 lumen': {
					'Text': '100 lumen',
					'onChosen': function(){updateCapital()},
					'onRevert': function(){revertCapital()},
					'Do': 'show message Question2_correct',
				},
				'20 lumen': {
					'Text': '200 lumen',
					'Do': 'show message Question2_incorrect',
				},
				'50 lumen': {
					'Text': '500 lumen',
					'Do': 'show message Question2_incorrect',
				},
			},
		},
		'show character p shocked on left with fadeIn',
		'show character m laughing on right with fadeIn',
		'm Oui, regarde.',
		'show image chapter1_question2_solution top',
		'm Comme le montre l\'image désormais, une lumière de 100 lumen te permettra de voir la route devant toi lorsqu\'il fait nuit.',
		'show image chapter1_question3 right with fadeIn',
		'hide image chapter1_question2',
		{
			'Choice': {
				// Question 3
				'Dialog': 'm L\'image de droite ne contient aucun éclairage de nuit. De quelle puissance de lumière as-tu besoin ?',
				'100 lumen': {
					'Text': '100 lumen',
					'Do': 'show message Question3_incorrect',
				},
				'200 lumen': {
					'Text': '200 lumen',
					'onChosen': function(){updateCapital()},
					'onRevert': function(){revertCapital()},
					'Do': 'show message Question3_correct',
				},
				'500 lumen': {
					'Text': '500 lumen',
					'Do': 'show message Question3_incorrect',
				},
			},
		},
		'show character p thirdSide on left with fadeIn',
		'show character m smiling on right with fadeIn',
		'show image chapter1_question3_solution right',
		'm Comme illustré sur l\'image, avec une lumière de 200 lumen, tu seras capable de voir la route devant toi lorsqu\'il fait nuit et qu\'il n\'y a pas d\'autres éclairages.',
		'p Ha oui, je me rends mieux compte désormais.',
		'hide image chapter1_question3',
		'm Oui, et au même titre que les lumières, voici également 5 autres éléments primordiaux à avoir sur son vélo.',
		'show image chapter1_mostImportant1 on left',
		'm Le catadioptre rouge arrière.',
		'show image chapter1_mostImportant2 on left',
		'm Le catadioptre blanc avant.',
		'show image chapter1_mostImportant3 on left',
		'show character p surprised on left with fadeIn',
		'show character m surprised on right with fadeIn',
		'm Les freins avant et arrière, qui doivent être entretenus et en bon état en permanence.',
		'show image chapter1_mostImportant4 on left',
		'm Les catadioptres jaunes à l\'avant et à l\'arrière des pédales.',
		'show image chapter1_mostImportant5 on left',
		'm Et pour finir, des pneus gonflés et en bon état.',
		'p Effectivement, cet équipement me paraît plus que nécessaire !',
		'hide image chapter1_mostImportant1',
		'hide image chapter1_mostImportant2',
		'hide image chapter1_mostImportant3',
		'hide image chapter1_mostImportant4',
		'hide image chapter1_question2_solution',
		'hide image chapter1_question3_solution',
		'hide image chapter1_mostImportant5',
		'm Pour terminer, il faut mentionner la méthode de l\'oignon pour ce qui est du vestimentaire.',
		'show image chapter1_apparels1 on center',
		'm La première couche d\'habits pour le cycliste est simplement des sous-vêtements qui vont aider à évacuer l\'humidité. Par contre, quand tu fais du vélo de course et que tu portes un bib, le sous-vêtement est vivement déconseillé.',
		'show image chapter1_apparels2 on center',
		'm Ensuite, la deuxième couche est le maillot, ainsi que le short, avec une veste ou une polaire lors de fraîches températures.',
		'show image chapter1_apparels3 on center',
		'm La dernière couche permet de se protéger en cas de vent ou fortes pluies afin de rester au sec et de garder un minimum de confort pendant l\'effort.',
		'show image chapter1_apparels4 on center',
		'm En cas de besoin, le cycliste peut aussi se préparer avec des gants ou des surchaussures pour parer au froid des extrémités, et surtout les protéger en cas de chute.',
		'show character p rightSide on left with fadeIn',
		'show character m leftSide on right with fadeIn',
		'p Merci pour toutes ces informations, je me sens déjà plus à l\'aise avec le sujet.',
		'm De rien. J\'espère que tu feras bon usage de ce que tu as appris !',
		'hide image chapter1_apparels1',
		'hide image chapter1_apparels2',
		'hide image chapter1_apparels3',
		'hide image chapter1_apparels4',
		'm Maintenant, passons à la gestuelle des cyclistes, principalement lorsqu\'ils roulent en peloton.',
		'jump Scene4',
	],

	'Scene4': [
		'show scene chapter2 with fadeIn',
		'play sound pedals',
		'wait 4000',
		'jump Scene5',
	],

	'Scene5': [
		// Chapter 2
		'stop sound pedals',
		'stop music chapter1',
		'play music chapter2 on loop with volume 20',
		'show scene chapter2_background with fadeIn',
		'show character p interested on left with fadeIn',
		'show character m front on right with fadeIn',
		'm Sur la route, il est très important d\'avoir une gestuelle claire et distincte. Tu es d\'accord {{player.name}} ?',
		'p Oui, bien évidemment.',
		'm Pour tester tes connaissances, tu vas devoir me dire ce que ces gestes représentent. J\'ai hâte de te voir te tromper !',
		'p Je relève le défi.',
		'show image chapter2_question4 top with fadeIn',
		{
			'Choice': {
				// Question 4
				'Dialog': 'm Que signifie ce signe ?',
				'1': {
					'Text': 'S\'arrêter / se stopper',
					'Do': 'show message Question4_incorrect',
				},
				'2': {
					'Text': 'Réduire la vitesse',
					'onChosen': function(){updateCapital()},
					'onRevert': function(){revertCapital()},
					'Do': 'show message Question4_correct',
				},
				'3': {
					'Text': 'Saluer un autre cycliste',
					'Do': 'show message Question4_incorrect',
				},
			},
		},
		'show character p doubting on left with fadeIn',
		'show character m laughing on right with fadeIn',
		'hide image chapter2_question4',
		'show image chapter2_question5 top with fadeIn',
		{
			'Choice': {
				// Question 5
				'Dialog': 'm Que veut dire celui-ci ?',
				'1': {
					'Text': 'Avertir de la présence d\'un objet sur la chaussée',
					'Do': 'show message Question5_incorrect',
				},
				'2': {
					'Text': 'Tourner à gauche',
					'onChosen': function(){updateCapital()},
					'onRevert': function(){revertCapital()},
					'Do': 'show message Question5_correct',
				},
				'3': {
					'Text': 'Indiquer qu\'une voiture dépasse',
					'Do': 'show message Question5_incorrect',
				},
			},
		},
		'show character p interested on left with fadeIn',
		'show character m surprised on right with fadeIn',
		'hide image chapter2_question5',
		'show image chapter2_question6 top with fadeIn',
		{
			'Choice': {
				// Question 6
				'Dialog': 'm Et ce geste ?',
				'1': {
					'Text': 'S\'arrêter / se stopper',
					'onChosen': function(){updateCapital()},
					'onRevert': function(){revertCapital()},
					'Do': 'show message Question6_correct',
				},
				'2': {
					'Text': 'Saluer un autre cycliste',
					'Do': 'show message Question6_incorrect',
				},
				'3': {
					'Text': 'Avertir au peloton qu\'il faut gentimment freiner',
					'Do': 'show message Question6_incorrect',
				},
			},
		},
		'show character p smiling on left with fadeIn',
		'show character m smiling on right with fadeIn',
		'hide image chapter2_question6',
		'show image chapter2_question7 top with fadeIn',
		{
			'Choice': {
				// Question 7
				'Dialog': 'm Que veut dire ce geste ?',
				'1': {
					'Text': 'Indiquer que le cycliste a crevé',
					'Do': 'show message Question7_incorrect',
				},
				'2': {
					'Text': 'Avertir que le feu passe au rouge',
					'Do': 'show message Question7_incorrect',
				},
				'3': {
					'Text': 'Avertir de la présence d\'un objet sur la chaussée',
					'onChosen': function(){updateCapital()},
					'onRevert': function(){revertCapital()},
					'Do': 'show message Question7_correct',
				},
			},
		},
		'show character p doubting on left with fadeIn',
		'show character m thirdSide on right with fadeIn',
		'hide image chapter2_question7',
		'show image chapter2_question8 top with fadeIn',
		{
			'Choice': {
				// Question 8
				'Dialog': 'm Peux-tu deviner celui-là ?',
				'1': {
					'Text': 'Indiquer la présence d\'un dos d\'âne',
					'onChosen': function(){updateCapital()},
					'onRevert': function(){revertCapital()},
					'Do': 'show message Question8_correct',
				},
				'2': {
					'Text': 'Indiquer qu\'il va falloir dépasser un cycliste qui est plus lent',
					'Do': 'show message Question8_incorrect',
				},
				'3': {
					'Text': 'Avertir que le feu passe au rouge',
					'Do': 'show message Question8_incorrect',
				},
			},
		},
		'show character p shocked on left with fadeIn',
		'show character m laughing on right with fadeIn',
		'hide image chapter2_question8',
		'show image chapter2_question9 top with fadeIn',
		{
			'Choice': {
				// Question 9
				'Dialog': 'm Bien. Et que veut dire ce geste ?',
				'1': {
					'Text': 'Prévenir le peloton qu\'un objet entrave la route',
					'Do': 'show message Question9_incorrect',
				},
				'2': {
					'Text': 'Avertir qu\'il y a un rond-point',
					'Do': 'show message Question9_incorrect',
				},
				'3': {
					'Text': 'Indiquer que la route est sale',
					'onChosen': function(){updateCapital()},
					'onRevert': function(){revertCapital()},
					'Do': 'show message Question9_correct',
				},
			},
		},
		'show character p interested on left with fadeIn',
		'show character m surprised on right with fadeIn',
		'hide image chapter2_question9',
		'show image chapter2_question10 top with fadeIn',
		{
			'Choice': {
				// Question 10
				'Dialog': 'm Et pour finir, que signifie ce geste ?',
				'1': {
					'Text': 'Prévenir la personne derrière qu\'il doit aller à l\'avant du peloton',
					'Do': 'show message Question10_incorrect',
				},
				'2': {
					'Text': 'Indiquer qu\'il faut s\'arrêter sur le côté',
					'Do': 'show message Question10_incorrect',
				},
				'3': {
					'Text': 'Prévenir le peloton qu\'il doit se rabattre pour éviter un obstacle',
					'onChosen': function(){updateCapital()},
					'onRevert': function(){revertCapital()},
					'Do': 'show message Question10_correct',
				},
			},
		},
		'hide image chapter2_question10',
		'm Tu t\'en es bien sorti ! Bravo.',
		'show character p rightSide on left with fadeIn',
		'show character m leftSide on right with fadeIn',
		'p Merci.',
		'm Maintenant que nous avons abordé la gestuelle à adopter en roulant en peloton, passons aux infractions.',
		'show character p front on left with fadeIn',
		'show character m front on right with fadeIn',
		'p Je suis prêt !',
		'jump Scene6',
	],
	
	'Scene6': [
		'show scene chapter3 with fadeIn',
		'play sound pedals',
		'wait 4000',
		'jump Scene7',
	],

	'Scene7': [
		// Chapter 3
		'stop sound pedals',
		'stop music chapter2',
		'play music chapter3 on loop with volume 20',
		'show scene chapter3_background with fadeIn',
		'show character p smiling on left with fadeIn',
		'show character m smiling on right with fadeIn',
		'm Je vais maintenant te poser une série de questions sur les infractions et ce qu\'elles engendrent.',
		{
			'Choice': {
				// Question 11
				'Dialog': 'm Quel est le montant d\'une amende lorsque tu grilles un feu rouge ?',
				'1': {
					'Text': '100 CHF',
					'Do': 'show message Question11_incorrect',
				},
				'2': {
					'Text': '60 CHF',
					'onChosen': function(){updateCapital()},
					'onRevert': function(){revertCapital()},
					'Do': 'show message Question11_correct',
				},
				'3': {
					'Text': '20 CHF',
					'Do': 'show message Question11_incorrect',
				},
			},
		},
		'show character p doubting on left with fadeIn',
		'show character m front on right with fadeIn',
		{
			'Choice': {
				// Question 12
				'Dialog': 'm Quel est le montant d\'une amende lorsque tu ne t\'arrêtes pas complètement à un stop ?',
				'1': {
					'Text': '30 CHF',
					'onChosen': function(){updateCapital()},
					'onRevert': function(){revertCapital()},
					'Do': 'show message Question12_correct',
				},
				'2': {
					'Text': '70 CHF',
					'Do': 'show message Question12_incorrect',
				},
				'3': {
					'Text': '110 CHF',
					'Do': 'show message Question12_incorrect',
				},
			},
		},
		'show character p laughing on left with fadeIn',
		'show character m smiling on right with fadeIn',
		{
			'Choice': {
				// Question 13
				'Dialog': 'm Combien risques-tu de payer si tu roules dans une zone piétonne ?',
				'1': {
					'Text': '10 CHF',
					'Do': 'show message Question13_incorrect',
				},
				'2': {
					'Text': '30 CHF',
					'onChosen': function(){updateCapital()},
					'onRevert': function(){revertCapital()},
					'Do': 'show message Question13_correct',
				},
				'3': {
					'Text': '15 CHF',
					'Do': 'show message Question13_incorrect',
				},
			},
		},
		'show character p interested on left with fadeIn',
		'show character m surprised on right with fadeIn',
		{
			'Choice': {
				// Question 14
				'Dialog': 'Laquelle de ces infractions est considérée plus grave que les autres ?',
				'1': {
					'Text': 'Ne pas utiliser la piste cyclable',
					'Do': 'show message Question14_incorrect',
				},
				'2': {
					'Text': 'Ne pas accorder la priorité à un passage pour piéton',
					'Do': 'show message Question14_incorrect',
				},
				'3': {
					'Text': 'Circuler sans feu sur une route non-éclairée de nuit',
					'onChosen': function(){updateCapital()},
					'onRevert': function(){revertCapital()},
					'Do': 'show message Question14_correct',
				},
			},
		},
		'show character p shocked on left with fadeIn',
		'show character m thirdSide on right with fadeIn',
		{
			'Choice': {
				// Question 15
				'Dialog': 'Tu sais maintenant que tu seras amendé 60 CHF si tu circules sans feu sur une route non-éclairées de nuit. Penses-tu que le même tarif s\'applique à une route éclairée ?',
				'1': {
					'Text': 'Oui',
					'Do': 'show message Question15_incorrect',
				},
				'2': {
					'Text': 'Non',
					'onChosen': function(){updateCapital()},
					'onRevert': function(){revertCapital()},
					'Do': 'show message Question15_correct',
				},
			},
		},
		'show character p doubting on left with fadeIn',
		'show character m laughing on right with fadeIn',
		{
			'Choice': {
				// Question 16
				'Dialog': 'Combien seras-tu amendé si tu lâches complètement ton guidon en roulant ?',
				'1': {
					'Text': '60 CHF',
					'Do': 'show message Question16_incorrect',
				},
				'2': {
					'Text': '20 CHF',
					'onChosen': function(){updateCapital()},
					'onRevert': function(){revertCapital()},
					'Do': 'show message Question17_correct',
				},
				'3': {
					'Text': '80 CHF',
					'Do': 'show message Question16_incorrect',
				},
			},
		},
		'jump Scene8',
	],

	'Scene8': [
		'show scene lastChapter with fadeIn',
		'play sound pedals',
		'wait 4000',
		'jump Scene9',
	],
	
	'Scene9': [
		// Last chapter
		'stop sound pedals',
		'stop music chapter3',
		'play music lastChapter on loop with volume 20',
		'show scene lastChapter_background with fadeIn',
		'show character p thirdSide on left with fadeIn',
		'show character m thirdSide on right with fadeIn',
		'm Voyons maintenant si tu as tout bien retenu.',
		'p Allons-y !',
		{
			'Choice': {
				// Question 17
				'Dialog': 'Est-ce que tu penses qu\'il est important de vérifier son matériel avant chaque sortie à vélo ?',
				'Oui': {
					'Text': 'Bien sûr !',
					'onChosen': function(){updateCapital()},
					'onRevert': function(){revertCapital()},
					'Do': 'show message Question17_correct',
				},
				'Non': {
					'Text': 'Non, je n\'ai jamais eu de problèmes de matériel',
					'Do': 'show message Question17_incorrect',
				},
			},
		},
		'show character p doubting on left with fadeIn',
		'show character m smiling on right with fadeIn',
		{
			'Choice': {
				// Question 18
				'Dialog': 'Que dois-tu vérifier avant chaque sortie à vélo ?',
				'1': {
					'Text': 'Les freins',
					'Do': 'show message Question18_incorrect',
				},
				'2': {
					'Text': 'Les pneus',
					'Do': 'show message Question18_incorrect',
				},
				'3': {
					'Text': 'Les lumières',
					'Do': 'show message Question18_incorrect',
				},
				'4': {
					'Text': 'Tout ce qui précède',
					'onChosen': function(){updateCapital()},
					'onRevert': function(){revertCapital()},
					'Do': 'show message Question18_correct',
				},
			},
		},
		'show character p surprised on left with fadeIn',
		'show character m front on right with fadeIn',
		{
			'Choice': {
				// Question 19
				'Dialog': 'Quel est la méthode de l\'oignon ?',
				'1': {
					'Text': 'L\'utilisation du gilet fluorescent',
					'Do': 'show message Question19_incorrect',
				},
				'2': {
					'Text': 'Une superposition de vêtements',
					'onChosen': function(){updateCapital()},
					'onRevert': function(){revertCapital()},
					'Do': 'show message Question19_correct',
				},
				'3': {
					'Text': 'Le fait de porter des lunettes pour protéger les yeux du vent',
					'Do': 'show message Question19_incorrect',
				},
			},
		},
		'show character p smiling on left with fadeIn',
		'show character m surprised on right with fadeIn',
		{
			'Choice': {
				// Question 20
				'Dialog': 'En plus de freins en bon état et de pneus bien gonflés, qu\'est-ce qui est élémentaire d\'avoir sur un vélo ?',
				'1': {
					'Text': 'Un casque',
					'Do': 'show message Question20_incorrect',
				},
				'2': {
					'Text': 'Une sonnette',
					'Do': 'show message Question20_incorrect',
				},
				'3': {
					'Text': 'Les catadioptres et les lumières',
					'onChosen': function(){updateCapital()},
					'onRevert': function(){revertCapital()},
					'Do': 'show message Question20_correct',
				},
			},
		},
		'play sound pedals',
		'jump End',
	],

	'End': [
		'stop music lastChapter',
		'stop sound pedals',
		'play music end on loop with volume 20',
		'show scene ending',
		'show character p smiling on left',
		'show character m smiling on right',
		'm Bravo, tu as répondu à toutes les questions que j\'avais préparé pour toi ! Félicitations.',
		'show character p rightSide on left',
		'show character m leftSide on right',
		'p Merci, j\'ai apprécié apprendre de nouvelles choses et cela ne m\'a pas fait de mal de revoir certaines règles. Je pense que je suis à jour au niveau de la sécurité routière à vélo.',
		'm Tu es parti avec un capital risque de 100% et en répondant aux questions, tu as réussi à le descendre à {{newCapital}} %.',
		'm Mais n\'oublie jamais, bien que tu sois préparé et prévenu des dangers de la route, tu ne peux jamais faire confiance aux autres. Tu dois constamment être vigileant, puisque les erreurs sont vite arrivées. Sois prudent et à bientôt !',
		'p Merci Marie, à bientôt !', 
		'end',
	],

});