const quoteData = [{
        "src" : "cyrano_punchline",
        "key" : "p",
        "name": "Punchline"
    },
    {
        "src" : "dracula_drucker",
        "key" : "d",
        "name": "Drucker"
    },
    {
        "src" : "dracula_kebab",
        "key" : "k",
        "name": "Kebab"
    },
    {
        "src" : "dracula_norris",
        "key" : "n",
        "name": "Chuck N."
    },
    {
        "src" : "germinal_lentier",
        "key" : "l",
        "name": "Le lait lentier"
    },
    {
        "src" : "germinal_macarena",
        "key" : "m",
        "name": "Macarena"
    },
    {
        "src" : "jeckyll_carglass",
        "key" : "c",
        "name": "Carglass"
    },
    {
        "src" : "metamorphose_fajitas",
        "key" : "f",
        "name": "Fajitas"
    },
    {
        "src" : "metamorphose_jv",
        "key" : "j",
        "name": "Jeux video.com"
    },
    {
        "src" : "cid_chimene",
        "key" : "e",
        "name": "Chimène"
    },
    {
        "src" : "cid_honneur",
        "key" : "h",
        "name": "Honneur"
    },
    {
        "src" : "cid_quinconce",
        "key" : "q",
        "name": "Quinconce"
    },
    {
        "src" : "cleve_galette",
        "key" : "g",
        "name": "Galette saucisse"
    },
    {
        "src" : "cleve_paparazzi",
        "key" : "z",
        "name": "Paparazzi"
    },
    {
        "src" : "misanthrope_legolas",
        "key" : "o",
        "name": "Legolas"
    },
    {
        "src" : "misanthrope_merde",
        "key" : "r",
        "name": "Merde"
    },
    {
        "src" : "misanthrope_mimolette",
        "key" : "i",
        "name": "Mimolette"
    },
    {
        "src" : "misanthrope_motus",
        "key" : "u",
        "name": "Motus"
    },
    {
        "src" : "misanthrope_nique",
        "key" : "w",
        "name": "Nique"
    },
    {
        "src" : "misanthrope_standing",
        "key" : "s",
        "name": "Standing ovation"
    },
    {
        "src" : "misanthrope_tchao",
        "key" : "t",
        "name": "Tchao"
    },
    {
        "src" : "parfum_kermit",
        "key" : "v",
        "name": "Kermit"
    },
    {
        "src" : "parfum_fouette",
        "key" : "x",
        "name": "Ça fouette"
    },
    {
        "src" : "bovary_lol_salope",
        "key" : "b",
        "name": "La salope"
    },
    {
        "src" : "bovary_amour_pre",
        "key" : "a",
        "name": "L'amour est dans le prè"
    },
    {
        "src" : "fable_babybel",
        "key" : "B",
        "name": "Babybel"
    },
    {
        "src" : "fable_lol",
        "key" : "L",
        "name": "Lol"
    },
    {
        "src" : "fable_magneto",
        "key" : "M",
        "name": "Magneto"
    },
    {
        "src" : "fable_rend_compte",
        "key" : "R",
        "name": "Il se rend compte"
    },
    {
        "src" : "goriot_caramel",
        "key" : "C",
        "name": "Caramel"
    },
    {
        "src" : "goriot_nous_deux",
        "key" : "A",
        "name": "A nous deux"
    },
    {
        "src" : "goriot_terminator",
        "key" : "T",
        "name": "Terminator"
    },
    {
        "src" : "goriot_trou_balzac",
        "key" : "Z",
        "name": "Balzac"
    },
    {
        "src" : "prince_begonia",
        "key" : "G",
        "name": "Mes begonia"
    },
    {
        "src" : "prince_dde",
        "key" : "D",
        "name": "DDE"
    },
    {
        "src" : "prince_de_la_merde",
        "key" : "E",
        "name": "De la merde"
    },
    {
        "src" : "prince_dessine",
        "key" : "O",
        "name": "Dessine moi un mouton"
    },
    {
        "src" : "prince_doue",
        "key" : "U",
        "name": "Aussi doué"
    }
];
// a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, z,
// a, b, c, d, e, g, l, m, o, r, t, u, z
const videoData = [{	
		"id" : "cyrano",
		"name" : "Cyrano de Bergerac",
		"youtube" : "ImZxePaJqIM"
	},
	{
		"id" : "dracula",
		"name" : "Dracula",
		"youtube" : "PdYKn4_CLy0"
	},
	{
		"id" : "germinal",
		"name" : "Germinal",
		"youtube" : "zwis51PRIyU"
	},
	{
		"id" : "jeckyll",
		"name" : "Dr Jekyll & Mr Hyde",
		"youtube" : "bYJ5vP5XHRA"
	},
	{
		"id" : "metamorphose",
		"name" : "La Métamorphose",
		"youtube" : "QtXwRFv5xsw"
	},
	{
		"id" : "cid",
		"name" : "Le Cid",
		"youtube" : "KAPfIL5ZaHw"
	},
	{
		"id" : "cleve",
		"name" : "La princesse de Clèves",
		"youtube" : "ZwZ_i_v1Huk"
	},
	{
		"id" : "misanthrope",
		"name" : "Le misanthrope",
		"youtube" : "OuFulRC1vsE"
	},
	{
		"id" : "parfum",
		"name" : "Le parfum",
		"youtube" : "Jj1QBxcNmmI"
	},
	{
		"id" : "bovary",
		"name" : "Madame Bovary",
		"youtube" : "16ubmu7qbJc"
	},
	{
		"id" : "prince",
		"name" : "Le petit prince",
		"youtube" : "sdETSsEk1-g"
	},
	{
		"id" : "goriot",
		"name" : "Le père Goriot",
		"youtube" : "iJHXzlhB6Gk"
	},
	{
		"id" : "fable",
		"name" : "Les fables de La Fontaine",
		"youtube" : "irmu5QUtxXI"
	}
        
];

/*
Phèdre m20msXnvIGY
L'Odyssée t7wq-T6zpOs
Les liaisons dangereuse _s4q1PbdEMw
Roméo et juliette -Yk48TEGIao
Les misérables aja7Po9XV1s
Lorenzaccio 4XMw0YWUXVE 
*/
