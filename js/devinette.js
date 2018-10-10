/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
 console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
var nombreSaisie = 0; 
var nombreDeCoups = 1;


 var nombreSaisie = Number(prompt ("Entrez un nombre entre 1 et 100 : "));



 while ((solution !== nombreSaisie) || (nombreDeCoups < 5)) // tant que nombre saisie n'est pas égal à la solution ou nombre de tentatives sup à 6. 
{
	if (nombreSaisie !== [0,100])
		{
			console.log()(nombreSaisie+ "est en dehors de l'intervalle [0, 100]");
		}
		

		if (nombreSaisie < solution) // nombre saisi est plus petit que la solution
		{
			console.log(nombreSaisie+ " est trop petit !");
		}

		else if (nombreSaisie > solution) // nombre saisi est plus grand que la solution
		{
			console.log(nombreSaisie+ " est trop grand !");
		}


// ICI LE COLLER SI BEUG

		if (nombreSaisie === solution) // Bonne réponse
		{
			console.log("Bravo la solution etait bien " + solution);
			console.log("Vous avez trouvé le nombre mystere en " +nombreDeCoups+ " coups !");
		}


		if (nombreDeCoups > 5) // nombre de tentative supérieurs à 6
		{
			console.log ("Votre nombre d'essai disponible a ete atteint ! La solution était " +solution);
		}
		
nombreDeCoups ++;
var nombreSaisie = Number(prompt ("Entrez un nombre entre 1 et 100 : "));
} 





