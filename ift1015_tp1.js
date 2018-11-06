// Ensemble d'images de taille 16x16 pixels.  Chaque element du
// tableau images correspond a une image d'une tuile du jeu demineur.
// Une image est representee par un tableau des rangees de pixels.
// Chaque rangee est un tableau contenant l'index de la couleur dans
// le tableau colormap.

var images =
    [
     [ // 0
      [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
     ],
     [ // 1
      [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
      [8,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
      [8,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
      [8,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
      [8,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
     ],
     [ // 2
      [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,2,2,2,2,2,2,2,2,0,0,0,0],
      [8,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0],
      [8,0,0,2,2,2,0,0,0,0,2,2,2,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0],
      [8,0,0,0,0,0,0,0,2,2,2,2,0,0,0,0],
      [8,0,0,0,0,0,2,2,2,2,2,0,0,0,0,0],
      [8,0,0,0,2,2,2,2,2,0,0,0,0,0,0,0],
      [8,0,0,2,2,2,2,0,0,0,0,0,0,0,0,0],
      [8,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0],
      [8,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
     ],
     [ // 3
      [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,3,3,3,3,3,3,3,3,3,0,0,0,0],
      [8,0,0,3,3,3,3,3,3,3,3,3,3,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0],
      [8,0,0,0,0,0,3,3,3,3,3,3,0,0,0,0],
      [8,0,0,0,0,0,3,3,3,3,3,3,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0],
      [8,0,0,3,3,3,3,3,3,3,3,3,3,0,0,0],
      [8,0,0,3,3,3,3,3,3,3,3,3,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
     ],
     [ // 4
      [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,4,4,4,0,4,4,4,0,0,0,0],
      [8,0,0,0,0,4,4,4,0,4,4,4,0,0,0,0],
      [8,0,0,0,4,4,4,0,0,4,4,4,0,0,0,0],
      [8,0,0,0,4,4,4,0,0,4,4,4,0,0,0,0],
      [8,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0],
      [8,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0],
      [8,0,0,0,0,0,0,0,0,4,4,4,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,4,4,4,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,4,4,4,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,4,4,4,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
     ],
     [ // 5
      [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,5,5,5,5,5,5,5,5,5,5,0,0,0],
      [8,0,0,5,5,5,5,5,5,5,5,5,5,0,0,0],
      [8,0,0,5,5,5,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,5,5,5,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,5,5,5,5,5,5,5,5,5,0,0,0,0],
      [8,0,0,5,5,5,5,5,5,5,5,5,5,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,5,5,5,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,5,5,5,0,0,0],
      [8,0,0,5,5,5,5,5,5,5,5,5,5,0,0,0],
      [8,0,0,5,5,5,5,5,5,5,5,5,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
     ],
     [ // 6
      [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,6,6,6,6,6,6,6,6,0,0,0,0],
      [8,0,0,6,6,6,6,6,6,6,6,6,0,0,0,0],
      [8,0,0,6,6,6,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,6,6,6,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,6,6,6,6,6,6,6,6,6,0,0,0,0],
      [8,0,0,6,6,6,6,6,6,6,6,6,6,0,0,0],
      [8,0,0,6,6,6,0,0,0,0,6,6,6,0,0,0],
      [8,0,0,6,6,6,0,0,0,0,6,6,6,0,0,0],
      [8,0,0,6,6,6,6,6,6,6,6,6,6,0,0,0],
      [8,0,0,0,6,6,6,6,6,6,6,6,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
     ],
     [ // 7
      [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,7,7,7,7,7,7,7,7,7,7,0,0,0],
      [8,0,0,7,7,7,7,7,7,7,7,7,7,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,7,7,7,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,7,7,7,0,0,0],
      [8,0,0,0,0,0,0,0,0,7,7,7,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,7,7,7,0,0,0,0],
      [8,0,0,0,0,0,0,0,7,7,7,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,7,7,7,0,0,0,0,0],
      [8,0,0,0,0,0,0,7,7,7,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,7,7,7,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
     ],
     [ // 8
      [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,8,8,8,8,8,8,8,8,0,0,0,0],
      [8,0,0,8,8,8,8,8,8,8,8,8,8,0,0,0],
      [8,0,0,8,8,8,0,0,0,0,8,8,8,0,0,0],
      [8,0,0,8,8,8,0,0,0,0,8,8,8,0,0,0],
      [8,0,0,0,8,8,8,8,8,8,8,8,0,0,0,0],
      [8,0,0,0,8,8,8,8,8,8,8,8,0,0,0,0],
      [8,0,0,8,8,8,0,0,0,0,8,8,8,0,0,0],
      [8,0,0,8,8,8,0,0,0,0,8,8,8,0,0,0],
      [8,0,0,8,8,8,8,8,8,8,8,8,8,0,0,0],
      [8,0,0,0,8,8,8,8,8,8,8,8,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
     ],
     [ // mine
      [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0],
      [8,0,0,0,7,0,7,7,7,7,7,0,7,0,0,0],
      [8,0,0,0,0,7,7,7,7,7,7,7,0,0,0,0],
      [8,0,0,0,7,7,9,9,7,7,7,7,7,0,0,0],
      [8,0,0,0,7,7,9,9,7,7,7,7,7,0,0,0],
      [8,0,7,7,7,7,7,7,7,7,7,7,7,7,7,0],
      [8,0,0,0,7,7,7,7,7,7,7,7,7,0,0,0],
      [8,0,0,0,7,7,7,7,7,7,7,7,7,0,0,0],
      [8,0,0,0,0,7,7,7,7,7,7,7,0,0,0,0],
      [8,0,0,0,7,0,7,7,7,7,7,0,7,0,0,0],
      [8,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
     ],
     [ // mine sur fond rouge
      [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
      [8,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
      [8,3,3,3,3,3,3,3,7,3,3,3,3,3,3,3],
      [8,3,3,3,3,3,3,3,7,3,3,3,3,3,3,3],
      [8,3,3,3,7,3,7,7,7,7,7,3,7,3,3,3],
      [8,3,3,3,3,7,7,7,7,7,7,7,3,3,3,3],
      [8,3,3,3,7,7,9,9,7,7,7,7,7,3,3,3],
      [8,3,3,3,7,7,9,9,7,7,7,7,7,3,3,3],
      [8,3,7,7,7,7,7,7,7,7,7,7,7,7,7,3],
      [8,3,3,3,7,7,7,7,7,7,7,7,7,3,3,3],
      [8,3,3,3,7,7,7,7,7,7,7,7,7,3,3,3],
      [8,3,3,3,3,7,7,7,7,7,7,7,3,3,3,3],
      [8,3,3,3,7,3,7,7,7,7,7,3,7,3,3,3],
      [8,3,3,3,3,3,3,3,7,3,3,3,3,3,3,3],
      [8,3,3,3,3,3,3,3,7,3,3,3,3,3,3,3],
      [8,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]
     ],
     [ // tuile non-devoilee
      [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0],
      [9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,8],
      [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
      [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
      [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
      [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
      [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
      [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
      [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
      [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
      [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
      [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
      [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
      [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
      [9,0,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
      [0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]
     ]
    ];

// Ensemble de couleurs utilisees dans la definition des images
// ci-dessus.  A tout endroit ou le nombre c apparait dans une image,
// la couleur RGB du pixel est colormap[c].

var colormap =
    [
     { r: 192, g: 192, b: 192 },
     { r:   0, g:   0, b: 255 },
     { r:   0, g: 128, b:   0 },
     { r: 255, g:   0, b:   0 },
     { r:   0, g:   0, b: 128 },
     { r: 128, g:   0, b:   0 },
     { r:   0, g: 128, b: 128 },
     { r:   0, g:   0, b:   0 },
     { r: 128, g: 128, b: 128 },
     { r: 255, g: 255, b: 255 }
    ];

var afficherImage = function (x, y, colormap, image) {

    // La procedure afficherImage affiche une seule tuile, ou les coordonnees
    // (x, y) correspondent au pixel au coin en haut a gauche de la tuile. Le
    // parametre colormap est un tableau dont les elements sont des structures
    // avec des champs r, g, b specifiant des couleurs.

    // Dimensions de l'image affichee
    var imgH = image.length;
    var imgL = image[0].length;

    for (var i = 0; i < imgH; i++) {
        for (var j = 0; j < imgL; j++) {
            setPixel(x + j, y + i, colormap[image[i][j]]);
        }
    }
};

var attendreClic = function () {

    // La fonction attendreClic verifie que la souris est relachee, puis attend
    // qu'elle est appuyee de nouveau et retourne un enregistrement contenant
    // les coordonnees (x, y) de la tuile qui a ete cliquee.

    // Verifie l'etat de la souris a chaque 0.01 seconde
    var clic;
    do {
        clic = getMouse();
        pause(0.01);
    } while (clic.down === false);

    // Transforme les coordonnees de position de la souris de pixels en tuiles
    var imgH = images[0].length;
    var imgL = images[0][0].length;
    var position = {x:Math.floor(clic.x / imgL), y:Math.floor(clic.y / imgH)};

    return position;

};

var placerMines = function (largeur, hauteur, nbMines, x, y) {

    // La fonction placerMines prend cinq parametres et retourne un tableau de
    // deux dimensions, contenant les valeurs booleens true et false, ou true
    // represente la presence d'une mine. La taille de ce tableau est indiquee
    // par les parametres hauteur et largeur, et chaque element correspond a une
    // tuile qui est affichee sur l'ecran. La fonction place en total nbMines
    // mines sur le tableau, et pour que le jeu soit amusant la fonction evite
    // de placer une mine sur la premiere tuile cliquee par le joueur, aux
    // coordonnees (x, y).

    // Initialisation du tableau de mines
    var tabMines = [];
    for (var i = 0; i < hauteur; i++) {
        tabMines.push([]);
        for (var j = 0; j < largeur; j++) {
            tabMines[i].push(false);
        }
    }

    // Remplissage aleatoire du tableau de mines
    for (var i = 0; i < nbMines; i++) {
        var ver = Math.floor(Math.random() * hauteur);
        var hor = Math.floor(Math.random() * largeur);
        if (!(tabMines[ver][hor]) && !(ver === y && hor === x)) {
            // On choisit une tuile aleatoire, qui n'est pas la premiere tuile
            // cliquee, pour y placer une mine.
            tabMines[ver][hor] = true;
        } else {
            i--; // Si on tombe sur un element ayant deja une mine, recommencer
        }
    }

    return tabMines;

};

var adjacent = function (tabM, x, y) {

    // La fonction adjacent verifie toutes les tuiles adjacentes a la tuile qui
    // se trouve aux coordonnees (x, y) dans le tableau de mines tabM, et garde
    // un compte du nombre de mines. La fonction retourne alors un tableau
    // contenant le total de ce nombre de mines, ainsi que les coordonnees de
    // ces tuiles adjacentes.

    var mines = 0;
    var coordAdj = []; // Les coordonnes des tuiles adjacentes

    // Les dimensions du tableau de mines
    var hauteur = tabM.length;
    var largeur = tabM[0].length;

    for (var i = -1; i <= 1; i++) {
        for (var j = -1; j <= 1; j++) {

            // Conditions assurant que la tuile adjacente est dans la grille
            var condBordY = (0 <= y+i) && (y+i < hauteur);
            var condBordX = (0 <= x+j) && (x+j < largeur);

            // Condition excluant la tuile centrale
            var condCentre = !(i === 0 && j === 0);

            if (condBordY && condBordX && condCentre) {
                // Condition qui verifie la presence d'une mine
                var condMine = tabM[y + i][x + j];
                if (condMine) {
                    mines++;
                }
                // Garder les coordonnees de la tuile adjacente
                coordAdj.push([x + j, y + i]);
            }
        }
    }

    return [mines, coordAdj];

};

var demineur = function (largeur, hauteur, nbMines) {

    // La procedure demineur est la procedure centrale qui s'occupe du
    // deroulement du jeu. Elle cree au debut une grille de taille indiquee par
    // les parametres largeur et hauteur, contenant des tuiles.
    // Ensuite, le jeu attend un premier clic du joueur, place un nombre
    // nbMines de mines sur la grille aleatoirement, et continue a devoiler des
    // tuiles en reaction au prochains clics du joueur, jusqu'a la fin du jeu.
    // Ceci peut arriver de deux facons: si le joueur touche une tuile contenant
    // une mine, il perd, et si il devoile toutes les tuiles sauf celles ayant
    // des mines, il gagne. Dans les deux cas, un message est affiche qui lui
    // indique son statut, et toutes les mines sont devoilees.

    // Les dimensions des tuiles, en nombre de pixels
    var imgL = images[0].length;
    var imgH = images[0][0].length;

    // Initalisation de la grille de tuiles et du tableau de devoilement
    setScreenMode(largeur * imgL, hauteur * imgH);
    var tabD = []; // Ce tableau garde l'etat de devoilement des tuiles
    for (var i = 0; i < hauteur; i++) {
        tabD.push([]);
        for (var j = 0; j < largeur; j++) {
            afficherImage(j * imgL, i * imgH, colormap, images[11]);
            tabD[i].push(false); // Aucune tuile n'est devoilee au debut
        }
    }

    // Clic initial du joueur et placement des mines
    var premierClic = attendreClic();
    var x = premierClic.x;
    var y = premierClic.y;
    var tabM = placerMines(largeur, hauteur, nbMines, x, y);

    // Condition de victoire: le nombre de tuiles devoilees doit etre egal au
    // nombre total de tuiles moins le nombre de mines.
    var tuilesTotales = largeur * hauteur - nbMines;
    var tuilesDevoilees = 0;

    // Le jeu continue tant que le joueur n'ait pas clique sur une tuile de mine
    while (tabM[y][x] == false) {

        // Nombre de mines adjacents a la tuile (x, y)
        var output = adjacent(tabM, x, y);
        var mines = output[0];

        // Si il n'y a aucune mine autour de la tuile, on devoile les 9 tuiles
        if (mines === 0) {
            tabD[y][x] = true; // Devoiler la tuile centrale
            var autour = output[1]; // Coordonnees des tuiles adjacentes

            // Devoiler les tuiles adjacentes
            for (var i = 0; i < autour.length; i++) {
                var autourX = autour[i][0];
                var autourY = autour[i][1];
                if (!tabD[autourY][autourX]) {
                    tabD[autourY][autourX] = true;
                    var nM = images[adjacent(tabM, autourX, autourY)[0]];
                    afficherImage(autourX * imgL, autourY * imgH, colormap, nM);
                    tuilesDevoilees++;
                }
            }
        }

        // Si il y a des mines autour, on ne devoile que la tuile selectionee
        afficherImage(x * imgL, y * imgH, colormap, images[mines]);
        tabD[y][x] = true;
        tuilesDevoilees++;

        // Victoire
        if (tuilesDevoilees === tuilesTotales) {
            break;
        }

        // Attendre le prochain clic du joueur
        var pX = x;
        var pY = y;
        do {
            var clic = attendreClic();
            var x = clic.x;
            var y = clic.y;
        } while ((x === pX) && (y === pY)); // Eviter les clics dupliques
    }

    // Affichage d'un message selon si le jeu a ete gagne ou perdu
    if (tabM[y][x] == true) {
        alert("Vous avez perdu");

        // Affichage en rouge de la mine cliquee
        afficherImage(x * imgL, y * imgH, colormap, images[10]);

    } else {
        alert("Vous avez gagne!!! \n Niveau : "+nbMines);
    }

    // Devoilement de toutes les mines sur la grille
    for (var i = 0; i < hauteur; i++) {
        for (var j = 0; j < largeur; j++) {
            if (tabM[i][j] == true && !(i === y && j === x)) {
                afficherImage(j * imgL, i * imgH, colormap, images[9]);
            }
        }
    }
};

var testDemineur = function () {

    // La procedure testDemineur fait des tests unitaires sur la procedure
    // afficherImage ainsi que la fonction placerMines.

    // tests pour la procedure afficherImage:

    // tests de couleurs
    setScreenMode(2, 2);

    var testImage = [[0, 1], [2, 3]];
    afficherImage(0, 0, colormap, testImage);
    assert(exportScreen() == "#c0c0c0#0000ff\n#008000#ff0000");

    testImage= [[4,5],[6,7]];
    afficherImage(0, 0, colormap, testImage);
    assert(exportScreen() == "#000080#800000\n#008080#000000");

    testImage= [[8, 9], [0, 0]];
    afficherImage(0, 0, colormap, testImage);
    assert(exportScreen() == "#808080#ffffff\n#c0c0c0#c0c0c0");

    // tests des tailles de l'image et de l'ecran, et des coordonnees
    setScreenMode(2, 2);
    testImage= [[1]];
    afficherImage(0, 0, colormap, testImage);
    assert(exportScreen() == "#0000ff#000000\n#000000#000000");

    setScreenMode(4 ,1);
    testImage=[[2 ,3]];
    afficherImage(1, 0, colormap, testImage);
    assert(exportScreen() == "#000000#008000#ff0000#000000");

    // tests pour la fonction placerMines:

    // tests sur le nombre de mines (min et max)
    var test = placerMines(2, 2, 1, 1, 1);
    assert(test == "true,false,false,false" ||
           test == "false,true,false,false" ||
           test == "false,false,true,false");
    assert(placerMines(2, 2, 3, 1, 1) == "true,true,true,false");

    // tests avec des tailles de tableaux differentes
    assert(placerMines(1, 2, 1, 0, 0) == "false,true");
    assert(placerMines(2, 1, 1, 0, 0) == "false,true");
    test = placerMines(1, 4, 1, 0, 2);
    assert(test == "true,false,false,false" ||
           test == "false,true,false,false" ||
           test == "false,false,false,true");

};

testDemineur();
