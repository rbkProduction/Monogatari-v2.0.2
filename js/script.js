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
		body: 'Effectivement, le port du casque n\'est pas obligatoire pour les vélos, bien que vivement recommandé ! Ne serait-ce que pour montrer l\'exemple aux plus jeunes. Il est revanche obligé de le porter pour les personnes qui se déplacent en vélo électrique.',
	},
	'Question1_incorrect': {
		title: 'Incorrect !',
		subtitle: 'Le port du casque n\'est pas obligatoire',
		body: 'Effectivement, le port du casque n\'est pas obligatoire pour les vélos, bien que vivement recommandé ! Ne serait-ce que pour montrer l\'exemple aux plus jeunes. Il est revanche obligé de le porter pour les personnes qui se déplacent en vélo électrique.',
	},
	'Question2_correct': {
		title: 'Correct !',
		subtitle: 'C\'est bien 10 LUX',
		body: 'Une lumière de 10 lux est suffisante pour te permettra de voir la route devant toi en pleine nuit.',
	},
	'Question2_incorrect': {
		title: 'Incorrect !',
		subtitle: 'C\'était 10 LUX',
		body: 'Une lumière de 10 lux est suffisante pour te permettra de voir la route devant toi en pleine nuit.',
	},
	'Question3_correct': {
		title: 'Correct !',
		subtitle: 'C\'est bien 20 LUX',
		body: 'Si il n\'y aucun autre éclairage présent sur la route, alors il te faut au moins 20 lux pour voir la route face à toi. Mais n\'oublie pas que tu peux même trouver des lumières à 1500 lux, voir plus !',
	},
	'Question3_incorrect': {
		title: 'Incorrect !',
		subtitle: 'C\'était 20 LUX',
		body: 'Si il n\'y aucun autre éclairage présent sur la route, alors il te faut au moins 20 lux pour voir la route face à toi. Mais n\'oublie pas que tu peux même trouver des lumières à 1500 lux, voir plus !',
	},
	'Question4_correct': {
		title: 'Correct !',
		subtitle: 'Cela indique de réduire la vitesse',
		body: 'Il faut étendre le bras avec la paume vers le sol et faire des mouvements courts avec la main en haut et en bas. Ce mouvement doit être fait à l\'avance pour que les autres cyclistes aient le temps de réduire leur vitesse progressivement.',
	},
	'Question4_incorrect': {
		title: 'Incorrect !',
		subtitle: 'Cela indique de réduire la vitesse',
		body: 'Il faut étendre le bras avec la paume vers le sol et faire des mouvements courts avec la main en haut et en bas. Ce mouvement doit être fait à l\'avance pour que les autres cyclistes aient le temps de réduire leur vitesse progressivement.',
	},
	'Question5_correct': {
		title: 'Correct !',
		subtitle: 'Cela signifie tourner à gauche',
		body: 'Ce geste est l\'équivalent du clignotant pour les véhicules à moteur. Tu dois étendre le bras dans la direction où tu souhaites tourner. À droite pour indiquer que tu tournes à droite. À gauche, pour indiquer que tu tournes à gauche.',
	},
	'Question5_incorrect': {
		title: 'Incorrect !',
		subtitle: 'Cela signifie tourner à gauche',
		body: 'Ce geste est l\'équivalent du clignotant pour les véhicules à moteur. Tu dois étendre le bras dans la direction où tu souhaites tourner. À droite pour indiquer que tu tournes à droite. À gauche, pour indiquer que tu tournes à gauche.',
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
		body: 'En effet, cela veut dire que la route est sale et couverte de sable, de sel, d\'huile ou autes saletés qui pourraient provoquent une perte de traction de ton vélo, et résulter en chute.',
	},
	'Question9_incorrect': {
		title: 'Incorrect !',
		subtitle: 'La route est sale',
		body: 'En effet, cela veut dire que la route est sale et couverte de sable, de sel, d\'huile ou autes saletés qui pourraient provoquent une perte de traction de ton vélo, et résulter en chute.',
	},
	'Question10_correct': {
		title: 'Correct !',
		subtitle: 'Il faut esquiver un obstacle',
		body: 'Si tu vois ceci, tu dois te préparer à te déporter sur la droite ou sur la gauche pour éviter la voiture, le piéton ou encore les ralentisseurs sur le bord de la chaussée.',
	},
	'Question10_incorrect': {
		title: 'Incorrect !',
		subtitle: 'Il faut esquiver un obstacle',
		body: 'Si tu vois ceci, tu dois te préparer à te déporter sur la droite ou sur la gauche pour éviter la voiture, le piéton ou encore les ralentisseurs sur le bord de la chaussée.',
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
			'<a href="https://github.com/rbkProduction/customRide">Code source</a>',
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
	intro: 'intro/Georges Lament_Ryan McCaffrey.mp3',
	game: 'game/Time Slips By_Ryan McCaffrey.mp3',
	end: 'end/In Dreams - Lish Grooves.mp3',
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	'tools': 'sound_toolsRepair.mp3',
	'cash': 'sound_cash.mp3',
	'transition': 'sound_transition.mp3',
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
	'black': 'blackBackground.svg',
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
	const statBar = document.getElementById("statBar");
	const capitalSpan = document.getElementById("capital")
	// Upload the value of the statBar
	statBar.value = capital
	// Upload the display of the amount spent
	capitalSpan.textContent = capital;
	// Upload in the user's storage
	monogatari.storage ().newCapital = capital;
};

// Function to add an expense
function revertCapital() {
	// Add the amount of risk to be added to the score
	capital += 5;
	// Upload the stat bar
	uploadStatBar();
	return true;
};

// Function to substract an expense
function updateCapital() {
	// Add the amount of risk to be deducted to the score
	capital -= 5;
	// Upload the stat bar
	uploadStatBar();
	// Updating the last answer's score of the player in the storage
	monogatari.storage ().lastCapitalDeducted = 5;
};

/*
// OLD FUNCTION - Function to substract an expense
function substractExpense(amount) {
	// Add the amount of the expense to the total of expenses
	capital -= amount;
	// Upload the stat bar
	uploadStatBar();
	return true;

	// Function to limit the choices depending on the expenses
	if (capital > 100){
		monogatari.storage ().overBudget = false;
	};
	return true;
};
*/


monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene homepage',
		'play music intro with volume 30',
		'show notification Welcome',
		//{
		//	'Input': {
		//		'Text': 'Quel est ton nom ?',
		//		'Validation': function (input) {
		//			return input.trim ().length > 0;
		//		},
		//		'Save': function (input) {
		//			this.storage ({
		//				player: {
		//					name: input
		//				}
		//			});
		//			return true;
		//		},
		//		'Revert': function () {
		//			this.storage ({
		//				player: {
		//					name: ''
		//				}
		//			});
		//		},
		//		'Warning': 'Il faut entrer un nom.'
		//	}
		//},
		'centered Bonjour {{player.name}}.',
		'centered Safe ride est un jeu de prévention sur les codes de la route et les infractions auquel tu peux être sujet lors de tes sorties à vélo.',
		'centered Tu vas découvrir les gestes de sécurité à appliquer, ainsi que les r\éflexes à adopter pour une bonne conduite sur la route.',
		'centered Marie va t\'accompagner pendant le jeu et te donnera toute sorte de conseil ou commentaire pour améliorer ton score.',
		'centered Tu vas commencer le jeu avec un capital risque de 100%.',
		'centered Réponds correctement au maximum de questions et tu feras baisser ton capital risque. Essaie de finir le jeu avec le pourcentage le plus faible !',
		'stop music intro',
		'jump Scene1',
	],

	'Scene1': [
		'show scene street with fadeIn',
		'show character p rightSide on left with fadeIn',
		'show character m leftSide on right with fadeIn',
		'm Bonjour toi, j\'ai entendu dire que tu souhaitais en savoir plus sur le vélo et la sécurité à appliquer pour rouler en toute sérénité.',
		'p C\'est exact. Je crois que cela ne me ferait pas de mal de revoir les bases.',
		'm Ça tombe bien, je suis experte en la matière ! Voyons tout de suite si on doit te considérer comme un danger sur la voie publique ou si tu peux rouler en toute confiance.',
		'show character m smiling on right',
		'show character p front on left',
		'jump Scene2',
	],


	'Scene2': [
		'show scene chapter1 with fadeIn',
		'wait 5000',
		'jump Scene3',
	],
	
	'Scene3': [
		// Chapter 1
		'play music game on loop with volume 30',
		'show scene chapter1_background with fadeIn',
		'show character p smiling on left with fadeIn',
		'show character m smiling on right with fadeIn',
		'm Avoir un matériel adéquat est primordial à vélo. Que ce soit du port du casque aux accessoires comme la sonnette et le cadenas, tu vas découvrir que ces objets peuvent t\'être utile, voir même te sauver la vie.',
		'p Oui, effectivement. Quels sont les objets élémentaires dans ce cas ?',
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
		'play sound cash',
		'm Le port du casque, bien que pas obligatoire, peut sauver ta vie dans beaucoup de circonstances.',
		'm C\'est connu d\'ailleurs...   « Le style vient après la vie » !',
		'p C\'est vrai.',
		'm Poursuivons.',
		'm Les lumières sont également très importantes à vélo, surtout lorsqu\'il fait obscure ou que les routes sont mal éclairées.',
		'm Imagines que tu te trouves sur une route comme illustré ci-dessus, c\'est-à-dire en pleine nuit et seul sur la route.',
		'show image chapter1_question2 top with fadeIn',
		{
			'Choice': {
				// Question 2
				'Dialog': 'm De quelle puissance de lumière as-tu au minimum besoin pour y voir assez clair en roulant ?',
				'10 lux': {
					'Text': '10 lux',
					'onChosen': function(){updateCapital()},
					'onRevert': function(){revertCapital()},
					'Do': 'show message Question2_correct',
				},
				'20 lux': {
					'Text': '20 lux',
					'Do': 'show message Question2_incorrect',
				},
				'50 lux': {
					'Text': '50 lux',
					'Do': 'show message Question2_incorrect',
				},
			},
		},
		'show image chapter1_question2_solution top',
		'm Avec une lumière de 10 lux, tu seras capable de voir la route devant toi lorsqu\'il fait nuit.',
		'show image chapter1_question3 right with fadeIn',
		{
			'Choice': {
				// Question 3
				'Dialog': 'm Et, dans ce nouveau contexte, de quelle puissance as-tu besoin, sachant qu\'il n\'y a aucun éclairage de rue ?',
				'10 lux': {
					'Text': '10 lux',
					'Do': 'show message Question3_incorrect',
				},
				'20 lux': {
					'Text': '20 lux',
					'onChosen': function(){updateCapital()},
					'onRevert': function(){revertCapital()},
					'Do': 'show message Question3_correct',
				},
				'50 lux': {
					'Text': '50 lux',
					'Do': 'show message Question3_incorrect',
				},
			},
		},
		'show image chapter1_question3_solution right',
		'm Avec une lumière de 20 lux, tu seras capable de voir la route devant toi lorsqu\'il fait nuit et qu\'il n\'y pas d\'autres éclairages.',
		'p Je ne savais pas. Je me rends mieux compte désormais.',
		'm Oui, et au même titre que les lumières, voici également 5 autres éléments primordiaux à avoir sur son vélo.',
		'show image chapter1_mostImportant1 on left',
		'm Le catadioptre rouge arrière.',
		'show image chapter1_mostImportant2 on left',
		'hide image chapter1_mostImportant1 on left',
		'm Le catadioptre blanc avant.',
		'show image chapter1_mostImportant3 on left',
		'hide image chapter1_mostImportant2 on left',
		'm Les freins avant et arrière, qui - je le précises - doivent être entretenus et en bon état en permanence.',
		'show image chapter1_mostImportant4 on left',
		'hide image chapter1_mostImportant3 on left',
		'm Catadioptres jaunes à l\'avant et à l\'arrière des pédales.',
		'show image chapter1_mostImportant5 on left',
		'hide image chapter1_mostImportant4 on left',
		'm Et pour finir, des pneus gonflés et en bon état.',
		'p Ha oui, effectivement cet équipement me paraît plus que nécessaire !',
		'm Eh oui, pour terminer, il semble important de mentionner la méthode de l\'oignon pour ce qui est du vestimentaire.',
		'hide image chapter1_mostImportant5',
		'hide image chapter1_question3_solution',
		'hide image chapter1_question2_solution',
		'show image chapter1_apparels1 on center',
		'm La première couche d\'habits pour le cycliste sont simplement des sous-vêtements qui vont aider à évacuer l\'humidité. Mais attention, si tu fais du vélo de course et que tu portes un bib, il est connu que tu dois être à poil sous le bib.',
		'show image chapter1_apparels2 on center',
		'hide image chapter1_apparels1',
		'm Ensuite, la deuxième couche sont le maillot et le short, ainsi qu\'une jacket ou polaire lors de fraîches températures.',
		'show image chapter1_apparels3 on center',
		'hide image chapter1_apparels2',
		'm La dernière couche permet de se protéger en cas de vents ou fortes pluies afin de rester au sec et de garder un minimum de confort pendant l\'effort.',
		'show image chapter1_apparels4 on center',
		'hide image chapter1_apparels3',
		'm En cas de besoin, le cycliste peut aussi s\'apprêter de ses plus beaux gants ou surchaussures pour parer au froid des extrémités, et surtout les protéger en cas de chute.',
		'p Merci pour toutes ces informations, je me sens déjà plus à l\'aise avec le sujet !',
		'm Avec plaisir. J\'espère que tu feras bon usage de ce que tu as appris !',
		'hide image chapter1_apparels4',
		'm Passons maintenant aux code de la route.',
		'jump Scene4',
	],

	'Scene4': [
		'show scene chapter2 with fadeIn',
		'wait 5000',
		'jump Scene5',
	],

	'Scene5': [
		// Chapter 2
		'show scene chapter2_background with fadeIn',
		'show character p interested on left with fadeIn',
		'show character m front on right with fadeIn',
		'm Sur la route, il est très important d\'avoir une gestuelle claire et distincte. Tu es d\'accord {{player.name}} ?',
		'p Oui, bien évidemment.',
		'm Pour tester tes connaissances, tu vas devoir me dire ce que ces gestes représentent. J\'ai hâte de te voir te tromper hihi !',
		'p Et qui te dis que je vais me tromper d\'abord ?!',
		'm C\'est ce que nous allons voir.',
		{
			'Choice': {
				// Question 4
				'Dialog': 'Que signifie ce signe ?',
				'Do': 'show image chapter2_question4 top with fadeIn',
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
		'hide image chapter2_question4',
		{
			'Choice': {
				// Question 5
				'Dialog': 'Que veut dire ce geste ?',
				'Do': 'show image chapter2_question5 top with fadeIn',
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
		'hide image chapter2_question5',
		{
			'Choice': {
				// Question 6
				'Dialog': 'Que veut dire ce geste ?',
				'Do': 'show image chapter2_question6 top with fadeIn',
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
		'hide image chapter2_question6',
		{
			'Choice': {
				// Question 7
				'Dialog': 'Que veut dire ce geste ?',
				'Do': 'show image chapter2_question7 top with fadeIn',
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
		'hide image chapter2_question7',
		{
			'Choice': {
				// Question 8
				'Dialog': 'Que veut dire ce geste ?',
				'Do': 'show image chapter2_question8 top with fadeIn',
				'1': {
					'Text': 'Indiquer que la présence d\'un dos d\'âne',
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
		'hide image chapter2_question8',
		{
			'Choice': {
				// Question 9
				'Dialog': 'Que veut dire ce geste ?',
				'Do': 'show image chapter2_question9 top with fadeIn',
				'1': {
					'Text': 'Prévenir le peloton que quelquechose entrave la route',
					'Do': 'show message Question9_incorrect',
				},
				'2': {
					'Text': 'Avertir qu\'il y a bientôt un rond-point',
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
		'hide image chapter2_question9',
		{
			'Choice': {
				// Question 10
				'Dialog': 'Que veut dire ce geste ?',
				'Do': 'show image chapter2_question10 top with fadeIn',
				'1': {
					'Text': 'Prévenir la personne derrière qu\'il faut qu\'elle aille à l\'avant du peloton',
					'Do': 'show message Question10_incorrect',
				},
				'2': {
					'Text': 'Indiquer qu\il est bientôt le moment de faire une pause sur le côté',
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
		'm Ha-ha ce n\'est pas si simple que cela hein ? Mais tu t\'en es bien sorti ! Bravo.',
		'p Merci, je dois admettre que j\'ai dû me creuser les meninges.',
		'm Maintenant que nous avons abordé la gestuelle à adopter en roulant en peloton, passons aux panneaux de signalisation.',


		'jump Scene6',
	],
	
	'Scene6': [
		'show scene chapter3 with fadeIn',
		'wait 5000',
		'jump Scene7',
	],

	'Scene7': [
		// Chapter 3
		'show scene chapter3_background',
		'show character p smiling on left with fadeIn',
		'show character m surprised on right with fadeIn',
		'jump Win',
	],	

	'Win': [
		'stop music game',
		'play music end on loop with volume 50',
		'show scene bikeFinal',
		'show character p smiling on left with fadeIn',
		'centered Bravo, tu as réussi à respecter ton budget et tu es repart avec ton propre vélo.',
		'end',
	],

	'Lose': [
		'stop music game',
		'play music end on loop with volume 50',
		'show scene storefront',
		'show character p shocked on left with fadeIn',
		'centered Aïe, tu as dépassé le budget... ',
		'centered ce n\'est pas si simple de maintenir un budget lorsqu\'on nous présente tous ces beaux produits ! ',
		'centered T\'en fais pas. Le but, c\'est que tu aies acquéris des connaissances sur le montage d\'un vélo de route.',
		'end',
	],

});