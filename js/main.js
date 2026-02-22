// CONFIGURATION GLOBALE
const LOGO_URL = "public/photos/Season-Deals_Dz.png";
const WEBHOOK_URL = "https://hook.eu2.make.com/s0fln9fki3odgir6rb2myb4okp4mcqwc"; // Utilisation de votre URL Make.com

// DONNÉES PRODUITS
const PRODUCTS = [
  {
    id: 1,
    title: "Climatiseur Portable Powerful Cool",
    price: 5500,
    originalPrice: 7900,
    category: "ete",
    image: "public/produit/Été/casquette-Vt-cnc.jpg",
    video: "public/produit/videos/Blue and Yellow Modern Business Service Promotion Mobile Video.mp4",
    isNew: true,
    description: "L'été ne sera plus un problème avec notre climatiseur portable USB nouvelle génération. Technologie de refroidissement par hydro-chill, ultra-silencieux et extrêmement économe. Parfait pour vos nuits d'été ou vos journées de bureau."
  },
  {
    id: 2,
    title: "Robot Aspirateur Smart Clean Pro",
    price: 28000,
    originalPrice: 35000,
    category: "maison",
    image: "public/photos/robot.jpg",
    video: "public/produit/videos/Blue and Yellow Modern Business Service Promotion Mobile Video.mp4",
    rating: 4.8,
    description: "Le futur du nettoyage est ici. Ce robot 3-en-1 balaie, aspire et lave vos sols en toute autonomie. Navigation intelligente, capteurs d'obstacles et retour automatique à sa station de charge. Contrôlez-le depuis votre canapé."
  },
  {
    id: 3,
    title: "Mini Mixeur Fresh-Go USB",
    price: 2900,
    originalPrice: 4500,
    category: "ete",
    image: "public/photos/mixeur.jpg",
    video: "public/produit/videos/Blue and Yellow Modern Business Service Promotion Mobile Video.mp4",
    rating: 4.7,
    description: "Emportez vos vitamines partout ! Ce mixeur portable puissant vous permet de réaliser des smoothies, shakes et jus de fruits frais en quelques secondes. Rechargeable par USB, il est le compagnon idéal de vos sorties sportives."
  }
];

const CATEGORIES = [
  { id: 'all', name: 'Tout voir' },
  { id: 'maison', name: 'Maison & Cuisine' },
  { id: 'electronique', name: 'Électronique Utile' },
  { id: 'accessoires', name: 'Accessoires Quotidien' },
  { id: 'ete', name: 'Spécial Été' },
  { id: 'hiver', name: 'Spécial Hiver' },
];

const WILAYAS = [
  { code: "1", name: "Adrar" }, { code: "2", name: "Chlef" }, { code: "3", name: "Laghouat" }, { code: "4", name: "Oum El Bouaghi" },
  { code: "5", name: "Batna" }, { code: "6", name: "Béjaïa" }, { code: "7", name: "Biskra" }, { code: "8", name: "Béchar" },
  { code: "9", name: "Blida" }, { code: "10", name: "Bouira" }, { code: "11", name: "Tamanrasset" }, { code: "12", name: "Tébessa" },
  { code: "13", name: "Tlemcen" }, { code: "14", name: "Tiaret" }, { code: "15", name: "Tizi Ouzou" }, { code: "16", name: "Alger" },
  { code: "17", name: "Djelfa" }, { code: "18", name: "Jijel" }, { code: "19", name: "Sétif" }, { code: "20", name: "Saïda" },
  { code: "21", name: "Skikda" }, { code: "22", name: "Sidi Bel Abbès" }, { code: "23", name: "Annaba" }, { code: "24", name: "Guelma" },
  { code: "25", name: "Constantine" }, { code: "26", name: "Médéa" }, { code: "27", name: "Mostaganem" }, { code: "28", name: "M'Sila" },
  { code: "29", name: "Mascara" }, { code: "30", name: "Ouargla" }, { code: "31", name: "Oran" }, { code: "32", name: "El Bayadh" },
  { code: "33", name: "Illizi" }, { code: "34", name: "Bordj Bou Arréridj" }, { code: "35", name: "Boumerdès" }, { code: "36", name: "El Tarf" },
  { code: "37", name: "Tindouf" }, { code: "38", name: "Tissemsilt" }, { code: "39", name: "El Oued" }, { code: "40", name: "Khenchela" },
  { code: "41", name: "Souk Ahras" }, { code: "42", name: "Tipaza" }, { code: "43", name: "Mila" }, { code: "44", name: "Aïn Defla" },
  { code: "45", name: "Naâma" }, { code: "46", name: "Aïn Témouchent" }, { code: "47", name: "Ghardaïa" }, { code: "48", name: "Relizane" },
  { code: "49", name: "Timimoun" }, { code: "50", name: "Bordj Badji Mokhtar" }, { code: "51", name: "Ouled Djellal" }, { code: "52", name: "Béni Abbès" },
  { code: "53", name: "In Salah" }, { code: "54", name: "In Guezzam" }, { code: "55", name: "Touggourt" }, { code: "56", name: "Djanet" },
  { code: "57", name: "El M'Ghair" }, { code: "58", name: "El Meniaa" }
];

const DELIVERY_FEES = {
  "1": { home: 1000, desk: 600 }, "2": { home: 600, desk: 350 }, "3": { home: 750, desk: 500 }, "4": { home: 700, desk: 400 },
  "5": { home: 650, desk: 350 }, "6": { home: 550, desk: 300 }, "7": { home: 800, desk: 500 }, "8": { home: 1050, desk: 700 },
  "9": { home: 250, desk: 150 }, "10": { home: 600, desk: 400 }, "11": { home: 1200, desk: 600 }, "12": { home: 700, desk: 450 },
  "13": { home: 700, desk: 400 }, "14": { home: 700, desk: 400 }, "15": { home: 550, desk: 350 }, "16": { home: 250, desk: 100 },
  "17": { home: 750, desk: 500 }, "18": { home: 600, desk: 400 }, "19": { home: 550, desk: 350 }, "20": { home: 750, desk: 450 },
  "21": { home: 650, desk: 400 }, "22": { home: 650, desk: 400 }, "23": { home: 550, desk: 350 }, "24": { home: 700, desk: 400 },
  "25": { home: 550, desk: 350 }, "26": { home: 600, desk: 400 }, "27": { home: 600, desk: 400 }, "28": { home: 650, desk: 400 },
  "29": { home: 650, desk: 400 }, "30": { home: 800, desk: 500 }, "31": { home: 550, desk: 300 }, "32": { home: 850, desk: 550 },
  "33": { home: 1300, desk: 900 }, "34": { home: 600, desk: 400 }, "35": { home: 500, desk: 350 }, "36": { home: 700, desk: 400 },
  "37": { home: 1300, desk: 900 }, "38": { home: 700, desk: 400 }, "39": { home: 800, desk: 500 }, "40": { home: 700, desk: 450 },
  "41": { home: 800, desk: 450 }, "42": { home: 500, desk: 350 }, "43": { home: 650, desk: 400 }, "44": { home: 600, desk: 400 },
  "45": { home: 900, desk: 600 }, "46": { home: 600, desk: 450 }, "47": { home: 850, desk: 500 }, "48": { home: 600, desk: 450 },
  "49": { home: 1200, desk: 700 }, "50": { home: null, desk: null }, "51": { home: 800, desk: 500 }, "52": { home: 1100, desk: 1100 },
  "53": { home: 1200, desk: 700 }, "54": { home: null, desk: null }, "55": { home: 850, desk: 500 }, "56": { home: null, desk: null },
  "57": { home: 900, desk: 900 }, "58": { home: 900, desk: 600 },
};

const WILAYA_TO_COMMUNES = {
  "1": ["Adrar", "Tamest", "Aoulef", "Charouine", "Fenoughil", "In Zghmir", "Ksar Kaddour", "Reggane", "Sali", "T'Sabit", "Tit",
    "Timekten", "Tinerkouk", "Tamentit", "Bouda", "Sebaa",
    "Zaouiet Kounta"
  ],

  "2": ["Chlef", "Abou El Hassan", "Aïn Merane", "Aïn Tinnouka", "Benairia", "Sobha", "Beni Haoua", "Boukadir", "Bouzeghaia", "Breira",
    "El Karimia", "Tadjnena", "Taouegrit", "Harchoun", "Beni Rached", "Hallasa", "Herenfa", "Oued Goussine", "Dahra",
    "El Marsa", "El Menaouer", "Oued Fares", "Oum Drou", "Tenes"],

  "3": ["Laghouat", "Ain Madhi", "Ain Sidi Ali", "Beidha Bordj", "Benghazi", "Hadj Mechri", "Ksar El Hirane", "Makhareg Boualem",
    "Mihoub", "Oued Morra", "Sidi Makhlouf"],

  "4": ["Oum El Bouaghi", "Ain Beida", "Ainmlila", "Behir Chergui", "El Amiria", "El Belala", "El Djazia", "El Fedjoudj", "El Harmilia",
    "El Kouh", "Fkirina", "Hanchir Toumghani", "Ksar Sbahi", "Meskiana", "Ouled Gacem", "Ouled Hamla", "Ouled Zouai", "Rahia", "Sigus",
    "Souk Naamane", "Zorg"],

  "6": ["Béjaïa", "Amizour", "Aokas", "Barbacha", "Beni Djellil", "Beni Ksila", "Beni-Mallikeche", "Bouhamza", "Boukhelifa",
    "Boussif Ouled Askeur", "Chelata", "Chemini", "Darguina", "Draâ El Mizan", "El Kseur", "Fenaia Il Maten", "Feraoun", "Ighil Ali",
    "Ighram", "Kendira", "Kherrata", "Leflaye", "M'cisna", "Melbou", "Oued Ghir", "Ouzellaguen", "Semaoun", "Sidi Ayad",
    "Souk El Thenine", "Taskriout", "Tazmalt", "Tibane", "Tichy", "Tifra", "Timezrit", "Tinebdar", "Tizi N'berber", "Toudja"],

  "5": ["Batna", "Ain Djasser", "Ain Touta", "Arris", "Barika", "Bouzina", "Chemora", "Djerma", "Djezzar", "El Madher", "Fesdis",
    "Foum Toub", "Ghassira", "Gosbat", "Guigba", "Hidoussa", "Ichmoul", "Inoughissen", "Kimmel", "Ksar Bellezma", "Lemcene", "M Doukal",
    "Maafa", "Menaa", "Merouana", "N Gaous", "Oued Chaaba", "Oued El Ma", "Ouled Ammar", "Ouled Aouf", "Ouled Fadel", "Ouled Selam",
    "Ouled Si Slimane", "Ouyoun El Assafir", "Ras El Aioun", "Rogassa", "Sefiane", "Seriana", "T Kout", "Tazoult", "Teniet El Abed",
    "Tigharghar", "Tigherghar", "Tilatou", "Zanat El Beida"],

  "7": ["Biskra", "Bordj Ben Azzouz", "Chetma", "Djelfa", "El Kantara", "El Oued", "El Guerrara", "El Merdja", "Ez Zaouia", "Faidja",
    "Foughala", "Hassi Ben Okba", "Lichana", "Lioua", "Mekhadma", "Mezraoua", "Oued El Abtal", "Ouled Djilali", "Ouled Djebed",
    "Ouled Rahma", "Ouled Sidi Brahim", "Ouled Touil", "Sidi Khaled", "Sidi Okba", "Sidi Slimane", "Tolga", "Touggourt",
    "Zeribet El Oued"],

  "8": ["Béchar", "Abadla", "Beni Abbes", "Beni Ikhlef", "Beni Ounif", "Boukais", "Boualem", "Boukaïs", "Djanet", "El Ouata",
    "El Abiodh Sidi Cheikh", "Erg Ferradj", "Igli", "Kénadsa", "Lahmar", "Meridja", "Mogheul", "Oum El Assel", "Tabelbala", "Taghit",
    "Tindouf", "Timoudi"],


  "9": ["Blida", "Boufarik", "Soumaa", "Mouzaia", "Satte", "Bouinan", "Benkhelil", "Beni Mered", "Ouled Slama"
    , "Oued Djer", "Ouled Yaich", "Chiffa", "Hammam Melouane", "Beni Tamou", "Bouarfa", "Meftah", "Sidi Moussa",
    "El Affroun", "Chrea", "Djebabra", "Bouhlou", "Oued Alleug", "Ouled Mimoun", "Larbaa"],

  "10": ["Bouira", "El Asnam", "Guerrouaou", "Souk El Khemis", "Kadiria", "Hanifia", "Dirah", "Ait Laaziz", "Taghzout", "Raouraoua",
    "Mezdour", "Haizer", "Lakhdaria", "Maala", "El Hachimia", "Aomar", "Ain El Hadjar", "Djebahia", "Aghbalou", "Taguedit", "Ain Turk",
    "Saharidj", "Dechmia", "Ridane", "Bechloul", "Bordj Oukhriss", "El Adjiba", "El Hakimia", "El Khebouzia", "Hadjera Zerga",
    "Ath Mansour", "El Mokrani", "Oued El Berdi"],

  "11": [
    "Tamanrasset", "Abalessa", "In Ghar", "In Guezzam", "Idles", "Tinzaouatine",
    "Tazrouk", "Tin Zaouatine", "In Salah", "In Amguel", "Foggaret Ezzaouia"],

  "12": [
    "Tébessa", "Bir El Ater", "Cheria", "Stah Guentis", "El Aouinet", "Lahouidjbet",
    "Safsaf El Ouesra", "Hammamet", "Negrine", "Bir El Mokadem", "El Kouif", "Morsott",
    "El Ogla", "Bekkaria", "Boukhadra", "Ouenza", "El Ma El Biodh", "Oum Ali", "Thlidjene",
    "Ain Zerga", "El Meridj", "Boulhaf Dyr", "Bedjene", "El Mazeraa", "Ferkane"],

  "13": [
    "Tlemcen", "Beni Mester", "Ain Tallout", "Remchi", "El Fehoul", "Sabra", "Ghazaouet",
    "Souani", "Djebala", "El Gor", "Oued Chouly", "Ain Fezza", "Ouled Mimoun", "Amieur",
    "Ain Youcef", "Zenata", "Beni Snous", "Bab El Assa", "Dar Yaghmouracene", "Fellaoucene",
    "Azails", "Sebbaa Chioukh", "Terny Beni Hediel", "Bensekrane", "Ain Nehala", "Hennaya",
    "Maghnia", "Hammam Boughrara", "Souahlia", "Msirda Fouaga", "Ain Fetah", "El Aricha",
    "Beni Khellad", "Nedroma", "Sidi Abdelli", "Sebdou", "Beni Ouarsous", "Sidi Medjahed",
    "Beni Boussaid", "Marsa Ben Mhidi", "Nouicer", "Sidi Samra", "Foum Toub", "Chetouane",],

  "14": [
    "Tiaret", "Medroussa", "Ain Bouchekif", "Ain Deheb", "Sidi Ali Mellal", "Ain El Hadid",
    "Ain Zarit", "Ain Kermes", "Bougara", "Chehaima", "Djebilet Rosfa", "Djillali Ben Amar",
    "Faidja", "Guertoufa", "Hamadia", "Ksar Chellala", "Madna", "Mahdia", "Mechraa Safa",
    "Medrissa", "Meghila", "Mellakou", "Naima", "Ouled Djerad", "Ouled Mimoun", "Rahouia",
    "Rechaiga", "Sebt", "Serghine", "Si Abdelghani", "Sidi Abderrahmane", "Sidi Bakhti",
    "Sidi Hosni", "Sougueur", "Takhemaret", "Tidda", "Tousnina", "Zmalet El Emir Abdelkader"
  ],


  "15": ["Tizi Ouzou", "Ain El Hammam", "Akbil", "Ait Aissa Mimoun", "Ait Bouaddou", "Ait Chafaa", "Ait Mahmoud", "Ait Yahia", "Boghni",
    "Bounouh", "Djebel Aissa", "Freha", "Illoula Oumalou", "Irdjen", "Larbaâ Nath Irathen", "Maatka", "Makouda", "Mechtras", "Ouaguenoun",
    "Ouled Aissa", "Rahassa", "Souamaa", "Tamda", "Tigzirt", "Timizart", "Tizi Ghenif", "Tizi Rached", "Zekri"],

  "16": ["Alger", "Bab Ezzouar", "Baraki", "Bir El Djir", "Hussein Dey", "Sidi M'Hamed", "El Madania", "Bologhine", "Casbah",
    "Oued Koriche", "Bir Mourad Rais", "El Biar", "Bouzareah", "Birkhadem", "El Harrach", "Oued Smar", "Bordj El Kiffan", "Ben Aknoun",
    "Dar El Beida", "Cheraga", "Ouled Fayet", "El Achour", "Draria", "Douera", "Bir Touta", "Rouiba", "Kouba", "Bachedjerah", "Hydra",
    "Mohammadia", "Bordj El Bahri", "Marsa", "Saoula", "Staoueli", "Zeralda", "Rahmania", "Souidania", "Hammedi", "Khracia", "Sidi Moussa",
    "Ain Taya", "Bordj Menai", "Tassala El Merdja", "Ouled Chebel", "Sidi Ahmed", "El Hammamet", "Rais Hamidou", "Dely Ibrahim",
    "Bourouba", "Khraissia", "El Magharia", "Beni Messous", "Les Eucalyptus", "Birtouta", "Tassift", "Ouled Yahia Khadrouch",
    "Sidi Merouane", "Khemis El Khechna", "Reghaia", "Ain Benian"],

  "17": ["Djelfa", "Ain Chouhada", "Ain Fekka", "Amourah", "Birine", "Charef", "Dar Chioukh", "El Idrissia", "Faidh El Botma",
    "Guettara", "Hassi Bahbah", "Hassi El Euch", "khemiss El Djadid", "Messaad", "Moudjebara", "Sed Rahal", "Selmana", "Sidi Baizid",
    "Tadmit", "Tessala El Merdja", "Zaccar", "Ain Maabed", "Ain Oussera", "Beni Yacoub", "Boussaada", "El Guedid", "El Khemis",
    "Hassi El Ghella", "Messaoud Boudjeriou", "Ouled Addouane", "Ouled Sidi Brahim", "Sidi Ladjel", "Tadjenanet", "El Oued"],

  "18": ["Jijel", "El Aouana", "Djimla", "Erraguene", "El Milia", "Kaous", "Settara", "Taher", "Texenna", "Ziama Mansouriah",
    "Chekfa", "El Ancer", "El Kennar Nouchfi", "El M'naouer", "Ouled Yahia Khadrouch", "Sidi Abdelaziz", "Sidi Maârouf", "Taza", "Bordj Taher",
    "Cheraia", "El Ouldja", "Selma Benziada", "Sidi Daho", "Souk El Tenine"],

  "19": ["Sétif", "Ain Arnat", "Ain Azel", "Ain El Kebira", "Amoucha", "Babor", "Bazer Sakhra", "Bir El Arch", "Bouandas", "Bousselam",
    "Djemila", "El Eulma", "Guellal", "Guenzet", "Hammam Guergour", "Hammam Soukhna", "Maoklane", "Menaa", "Mezloug", "Ouled Sabor", "Rasfa",
    "Salah Bey", "Serdj El Ghoul", "Talaifacene", "Tizi N'Bechar", "Ain Lahdjar", "Beni Fouda", "Beni Hocine", "Beni Ourtilane",
    "Bir Haddada", "Bougaa", "El Ouldja", "Guelta Zerka", "Harbil", "Ksar El Abtal", "Maaouia", "Meftah", "Oued El Barad",
    "Salah Bey", "Salahida", "Tizi Ghenif"],

  "20": ["Saïda", "Ain El Hadjar", "Ain Sekhouna", "Doui Thabet", "El Hassasna", "Hounet", "Maamora", "Moulay Larbi", "Ouled Brahim",
    "Ouled Khaled", "Ouled Mimoun", "Sidi Ahmed", "Sidi Boubekeur", "Sidi Hamadouche", "Tircine", "Youb"],

  "21": ["Skikda", "Ain Kechra", "Azzaba", "Bekkouche Lakhdar", "Ben Azzouz", "Collo", "El Hadaik", "El Harrouch", "Emdjez Edchich",
    "Es Sebt", "Filfila", "Hamadi Krouma", "Kerkera", "Oum Toub", "Oued Z'hor", "Ramdane Djamel", "Salah Bouchaour", "Skikda", "Tamalous",
    "Zitouna", "Ain Zouit", "Cheraia", "El Ghedir", "Kheneg Mayoum", "Ouled Attia"],

  "22": ["Sidi Bel Abbès", "Ain Thrid", "Amarnas", "Boudjebaa El Bordj", "Branis", "Chettouane Belaila", "Djouab", "El Haoudane",
    "Hassi Dahou", "Hassi Zahana", "Labiod Medjadja", "Makedra", "Marhoum", "Moulay Slissen", "Mostefa Ben Brahim", "Nedroma", "Oued Sebaa",
    "Oued Sefioun", "Ras El Ma", "Sfisef", "Sidi Ali Benyoub", "Sidi Ali Mellal", "Sidi Bel Abbès", "Sidi Brahim", "Sidi Hamadouche", "Sidi Lahcene", "Sidi Yacoub", "Tabia", "Tafissour",
    "Tilmouni", "Tissemsilt", "Zerouala"],

  "23": ["Annaba", "Ain El Berda", "Ain Kermes", "Berrahal", "Chetaïbi", "El Hadjar", "El Bouni", "Eulma", "Seraïdi", "Cheurfa",
    "El Tarf", "Oued El Aneb", "Ramdane Djamel", "Sidi Amar", "Sidi Salem", "Treat"],

  "24": ["Guelma", "Aïn Makhlouf", "Aïn Reggada", "Bou Hachana", "Dahouara", "Djeballah Khemissi", "Hammam Debagh", "Hammam N'Bails",
    "Héliopolis", "Houari Boumediene", "Khezaras", "Medjez Amar", "M'daourouch", "Oued Zenati", "Ras El Agba", "Roknia", "Tamlouka", "Tebessa", "Bouchegouf",
    "Nechmaya", "Aïn Fekka", "Beni Mezline", "Bordj Sabath", "Guelaat Bou Sbaa", "Hammam Soukhna"],

  "25": ["Constantine", "El Khroub", "Aïn Abid", "Zighoud Youcef", "Didouche Mourad", "Ibn Ziad", "Hamma Bouziane", "Beni Hamidane",
    "Ouled Rahmoune", "Sidi Mabrouk", "Ali Mendjeli", "Boudouaou El Bahri", "Beni Smiel", "Boussouf", "Djemila", "El Rassas", "Hamma", "Messaoud Boudjeriou",
    "Ouled Rahmoune", "Zighoud Youcef", "Ain Smara", "Beni Hamidane", "Didouche Mourad", "El Khroub", "Hamma Bouziane", "Ibn Ziad",
    "Messaoud Boudjeriou", "Ouled Rahmoune", "Ras El Hamra", "Zighoud Youcef"],

  "26": ["Médéa", "Ain Boucif", "Ain Ouksir", "Aziz", "Berrouaghia", "Bir Ben Laabed", "Chahbounia", "Chellalet El Adhaoura",
    "Derrag", "Djouab", "El Azizia", "El Omaria", "Guerrouaou", "Ksar El Boukhari", "Médéa", "Mezerana", "Mihoub", "Ouzera", "Ouamri", "Sidi Naamane",
    "Sidi Zahar", "Tablat", "Tamesguida", "Tizi Mahdi", "Tlatet Eddouairi", "Zoubiria", "Ain Boucif", "Ain Ouksir", "Aziz",
    "Berrouaghia", "Bir Ben Laabed", "Chahbounia", "Chellalet El Adhaoura"],

  "27": ["Mostaganem", "Ain Nouissy", "Ain Sidi Cherif", "Ain Tedles", "Bouguirat", "Hassi Mameche", "Kheir Eddine", "Mansourah",
    "Mesra", "Mostaganem", "Nekmaria", "Oued Sly", "Safsaf", "Sayada", "Sidi Ali", "Sidi Belattar", "Sidi Lakhdar", "Sirat", "Souaflia", "Tazgait",
    "Ain Tedles", "Bouguirat", "Hassi Mameche", "Kheir Eddine", "", "Mesra", ""],

  "28": ["M'Sila", "Ain El Hadjel", "Ain Errich", "Ben Srour", "Berhoum", "Bousselam", "Chellal", "El Hamel", "Hammam Dhalaa",
    "Khoubana", "M'Sila", "Maadid", "Magra", "Medjedel", "Ouled Derradj", "Ouled Sidi Brahim", "Sidi Aissa", "Sidi Ameur", "Sidi Hadjeres",
    "Sidi M'Hamed", "Tamsa", "Tiaret", "Ain El Hadjel", "Ain Errich", "Ben Srour", "Berhoum", "Bousselam"],

  "29": ["Mascara", "Ain Fekan", "Ain Ferah", "Bouhanifia", "El Bordj", "Ghriss", "Hacine", "Khalouia", "Makdha", "Mascara",
    "Matemore", "Mekhadma", "Oggaz", "Ouled Attia", "Oued Taria", "Sig", "Tighenif", "Zahana", "Ain Fekan", "Ain Ferah", "Bouhanifia",
    "El Bordj", "Ghriss", "Hacine"],

  "30": ["Ouargla", "Ain Beida", "Ain El Ibel", "Hassi Messaoud", "Megarine", "N'goussa", "Rouissat", "Sidi Khouiled", "Taibet",
    "Temacine", "Touggourt", "Tamacine", "Ain El Ibel", "Hassi Messaoud", "Megarine", "N'goussa", "Rouissat", "Sidi Khouiled"],

  "31": ["Oran", "Aïn El Turk", "Bir El Djir",
    "Hassi Bounif", "El Kerma", "El Braya", "El Hamri", "Misserghin", "Sidi Chami", "Sidi El Houari", "Tafraoui", "Aïn El Turk",
    "Arzew", "Mers El Kébir", "Es Senia", "Boutlelis", "Bousfer", "Gdyel", "Oued Tlelat",],

  "32": ["El Bayadh", "Boualem", "Bougtoub", "Brezina", "Chellala", "El Abiodh Sidi Cheikh", "El Bnoud", "Kef El Ahmar", "Kraimor",
    "M'Chouneche", "Moulay Slissen", "Ouled Khlifa", "Rogassa", "Sidi Ameur", "Stitten", "Tousmouline", "El Bayadh", "Boualem", "Bougtoub",
    "Brezina", "Chellala"],

  "33": ["Illizi", "Bordj Omar Driss", "Debdeb", "In Amenas", "Illizi", "Bordj Omar Driss", "Debdeb", "In Amenas"],

  "34": ["Bordj Bou Arréridj", "Ain Taghrout", "Belimour", "Ben Daoud", "Bir Kasdali", "Bordj Ghedir", "Bordj Zemmoura", "Djaafra",
    "El Hamadia", "El Main", "El M'hir", "Ghailasa", "Khelil", "Lardjem", "Mansoura", "Medjana", "Ouled Sidi Brahim", "Rabta",
    "Sidi Embarek", "Taglait", "Tassamert", "Teniet En Nasr", "Tixter", "Zemmoura"],

  "35": ["Boumerdès", "Baghlia", "Bordj Menaiel", "Boudouaou", "Boudouaou El Bahri", "Bouzegza Keddara", "Dellys", "Isser",
    "Khemis El Khechna", "Naciria", "Ouled Aissa", "Ouled Hedadj", "Si Mustapha", "Tidjelabine", "Thenia", "Timezrit", "Zemmouri",
    "Bordj Menaiel", "Boudouaou", "Boudouaou El Bahri", "Bouzegza Keddara", "Dellys"],

  "36": ["El Tarf", "Ain El Assel", "Berrihane", "Bouhadjar", "Bouteldja", "Dréan", "El Kala", "El Tarf", "Hammam Beni Salah",
    "Lac des Oiseaux", "Oued Zitoun", "Raml Soukna", "Zitouna"],

  "37": ["Tindouf", "Oum El Assel", "Tindouf", "Oum El Assel"],

  "38": ["Tissemsilt", "Ain Bouyahia", "Ain El Hadid", "Bordj Bou Naama", "Khemisti", "Lardjem", "Melaab", "Ouled Bessem",
    "Sidi Abed", "Sidi Boutouchent", "Tissemsilt", "Ain Bouyahia", "Ain El Hadid", "Bordj Bou Naama"],

  "39": ["El Oued", "Ain Beida", "Ain Cheikh", "Beni Guecha", "Debila", "Douar El Ma", "El Ogla", "Guemar", "Hassi Khelifa",
    "Magrane", "Mih Ouansa", "Nakhla", "Oued El Alenda", "Oued Souf", "Righa", "Robbah", "Taghzout", "Taibet", "Taleb Larbi",
    "Trifaoui", "El Oued", "Ain Beida", "Ain Cheikh", "Beni Guecha"],

  "40": ["Khenchela", "Ain Touila", "Babar", "Bouhmama", "Chelia", "Djellal", "El Hamma", "El Mahmal", "Ensigha", "Kais",
    "Khenchela", "M'Sara", "Ouled Rechache", "Remila", "Tamza", "Yabous", "Zanata"],

  "41": ["Souk Ahras", "Ain Zana", "Bir Bouhouche", "Drea", "El Ogla", "Haddada", "M'daourouch", "Merahna", "Ouled Driss",
    "Oum El Adhaim", "Ragouba", "Sedrata", "Sidi Fredj", "Souk Ahras", "Taoura", "Tiffech", "Zaarouria"],

  "42": ["Tipaza", "Aghbalou", "Ain Tagourait", "Attatba", "Beni Milleuk", "Bou Ismail", "Cherchell", "Damous", "Djoufi",
    "Fouka", "Gouraya", "Hadjeret Ennous", "Kolea", "Larhat", "Menaceur", "Messelmoun", "Nador", "Sidi Amar", "Sidi Ghiles", "Sidi Rached", "Tipaza",
    "Aghbalou", "Ain Tagourait", "Attatba"],

  "43": ["Mila", "Ain Beida Harriche", "Amira Arres", "Beni Dergoun", "Bouhatem", "Chelghoum Laid", "Djerissa", "El Mechira",
    "Grarem Gouga", "Hamala", "Mila", "Oued Athmania", "Rouached", "Sidi Merouane", "Tassadane Haddada", "Teleghma", "Yahia Beniguecha"],

  "44": ["Aïn Defla", "Aïn Lechiakh", "Aïn Soltane", "Bathia", "Bordj Emir Abdelkader", "Boumedfaa", "Djelida", "El Abadia",
    "El Amra", "El Attaf", "Hadjout", "Khemis Miliana", "Mekhatria", "Miliana", "Oued Chorfa", "Rouina", "Sidi Lakhdar",
    "Tacheta Zougagha",
  ],

  "45": ["Naama", "Ain Safra", "Mechria", "Tiout", "Sfissifa", "Moghrar", "Assela", "Djeniane Bourzeg", "Ain Ben Khelil", "Kasdir", "El Biod",
  ],

  "46": ["Sidi Boumediene", "Aïn Temouchent", "Chaabat El Ham", "Ain Khehel", "Hammmam Bouhdjer", "Bouzedjar", "Aghlal", "Terga", "Ain El Arbaa",
    "Tamzoura", "Chentouf", "Sidi Ben Adda", "El Maleh", "Ouled Boudjemaa", "Ain Tolba", "El Amria", "Hassi El Ghalla", "Beni Saf", "Sidi Safi",
    "Oulhaca", "Sidi Ouriache", "Emir Abdelakader", "El Messaid",
  ],

  "47": ["Ghardaïa", "Dhayed Bendahoua", "Berriane", "Metilili", "El Gherara", "El Atteuf", "Zelfana", "Sebseb", "Bounoura", "Mansoura"],

  "48": [

  ],

  "49": [
    "Charouine", "Ksar Keddour", "Timimoun", "Ouled Said", "Tinerkouk", "Metarfa", "Aougrout", "Talmine"
  ],

  "50": [],

  "51": ["Doucen", "Ras El Miad", "Ouled Djellal",],

  "52": ["Ouled Khoudir", "Timoudi", "Beni Abbes", "Beni Ikhlef", "Igli", "Tabelbala", "El Ouata", "Kerzaz", "Ksabi", "Tamtert",],

  "53": ["Ain Saleh", "Ain Ghar", "Foggaret Azzaouia"],

  "54": [],

  "55": ["Tougourt", "Blidet Amor", "Tebesbest", "Nezla", "Zaouia El Abidia", "El Hadjira", "Taibet", "Temacine", "Benaceur", "Mnaguer", "Megarine"
    , "El Alia", "Sidi Slimane"],

  "56": [],

  "57": ["Still", "Mrara", "Sidi Khelil", "Tenedla", "El M'Ghair", "Djamaa", "Oum Touyour", "Sidi Amrane"],

  "58": ["El Menia", "Hassi Fhel", "Hassi Gara"],
};


// ÉTAT GLOBAL
let state = {
  cart: [],
  wishlist: [],
  filters: { category: 'all', minPrice: 0, maxPrice: 100000 },
  activeProduct: null
};

// DOM ELEMENTS
const dom = {
  carousel: document.getElementById('hero-carousel'),
  grid: document.getElementById('products-grid'),
  sidebar: document.getElementById('sidebar-filters'),
  cartModal: document.getElementById('cart-modal'),
  cartList: document.getElementById('cart-items-list'),
  cartTotal: document.getElementById('cart-total-display'),
  cartCount: document.getElementById('cart-count-badge'),
  wishlistCount: document.getElementById('wishlist-count-badge'),
  checkoutModal: document.getElementById('checkout-modal'),
  productModal: document.getElementById('product-modal'),
  orderForm: document.getElementById('orderForm'),
  wilayaSelect: document.getElementById('wilaya'),
  deliveryRadios: document.getElementsByName('delivery'),
  checkoutTotal: document.getElementById('final-total'),
  shippingDisplay: document.getElementById('shipping-cost'),
  toast: document.getElementById('toast'),
  searchInput: document.getElementById('search-input'),
  mobileMenu: document.getElementById('mobile-menu')
};

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  renderCarousel();
  renderSidebar();
  renderProducts();
  setupEventListeners();
  loadState(); // Load cart from localStorage if exists
});

// EVENT LISTENERS
function setupEventListeners() {
  // Search
  dom.searchInput?.addEventListener('input', (e) => {
    state.filters.search = e.target.value.toLowerCase();
    renderProducts();
  });

  // Price Range
  document.getElementById('price-range')?.addEventListener('input', (e) => {
    document.getElementById('price-max-display').textContent = e.target.value;
  });

  document.getElementById('apply-price')?.addEventListener('click', () => {
    state.filters.maxPrice = Number(document.getElementById('price-range').value);
    renderProducts();
  });

  // --- NOUVELLE LOGIQUE INTÉGRÉE ---

  // 1. Gestion du numéro de téléphone
  document.getElementById('operator')?.addEventListener('change', function () {
    const phoneInput = document.getElementById('phone');
    phoneInput.value = this.value; // Met le préfixe automatiquement
  });

  document.getElementById('phone')?.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Garde que les chiffres
    const operatorSelect = document.getElementById('operator');
    const operatorPrefix = operatorSelect.value;

    if (!operatorPrefix) {
      alert('Veuillez d’abord sélectionner un opérateur');
      e.target.value = '';
      return;
    }

    // Force le préfixe de l'opérateur
    if (!value.startsWith(operatorPrefix)) {
      value = operatorPrefix + value.replace(new RegExp('^' + operatorPrefix), '');
    }

    // Limite à 10 chiffres
    value = value.slice(0, 10);

    e.target.value = value;
  });

  // 2. Gestion Wilaya & Commune (Dynamique)
  document.getElementById('wilaya')?.addEventListener('change', function () {
    const wilayaCode = this.value;
    const searchInput = document.getElementById('commune-search');
    const dropdown = document.getElementById('commune-dropdown');
    const hiddenCommune = document.getElementById('commune');

    // Réinitialiser
    searchInput.disabled = !wilayaCode;
    searchInput.value = '';
    dropdown.innerHTML = '';
    hiddenCommune.value = '';
    dropdown.classList.add('hidden');

    // -- Calcul des frais de livraison (Logique existante) --
    if (wilayaCode) {
      const fees = DELIVERY_FEES[wilayaCode];
      const homeRadio = document.getElementById('delivery-home');
      const deskRadio = document.getElementById('delivery-desk');

      // Helper pour activer/désactiver visuellement
      const setStatus = (el, enabled) => {
        el.disabled = !enabled;
        const label = el.closest('label');
        if (enabled) {
          label.classList.remove('opacity-50', 'cursor-not-allowed');
        } else {
          label.classList.add('opacity-50', 'cursor-not-allowed');
          el.checked = false;
        }
      };

      if (fees.home !== null) {
        setStatus(homeRadio, true);
        document.getElementById('fee-home-display').textContent = fees.home + ' DA';
      } else {
        setStatus(homeRadio, false);
        document.getElementById('fee-home-display').textContent = '--';
      }

      if (fees.desk !== null) {
        setStatus(deskRadio, true);
        document.getElementById('fee-desk-display').textContent = fees.desk + ' DA';
      } else {
        setStatus(deskRadio, false);
        document.getElementById('fee-desk-display').textContent = '--';
      }

      // Auto-select premier dispo
      if (!homeRadio.disabled && !homeRadio.checked && !deskRadio.checked) homeRadio.checked = true;
      else if (!deskRadio.disabled && !deskRadio.checked && !homeRadio.checked) deskRadio.checked = true;
    }
    calculateTotal();
    // -------------------------------------------------------

    if (!wilayaCode || !WILAYA_TO_COMMUNES[wilayaCode]) return;

    const communes = WILAYA_TO_COMMUNES[wilayaCode];

    // Fonction pour afficher les communes filtrées
    function renderCommunes(filter = '') {
      dropdown.innerHTML = '';
      const filtered = communes.filter(c => c.toLowerCase().includes(filter.toLowerCase()));

      if (filtered.length > 0) dropdown.classList.remove('hidden');
      else dropdown.classList.add('hidden');

      filtered.forEach(commune => {
        const div = document.createElement('div');
        div.className = 'p-3 hover:bg-gray-700 cursor-pointer text-white text-sm border-b border-gray-700 last:border-0 transition-colors';
        div.textContent = commune;
        div.onclick = () => {
          searchInput.value = commune;
          hiddenCommune.value = commune;
          dropdown.innerHTML = '';
          dropdown.classList.add('hidden');
        };
        dropdown.appendChild(div);
      });
    }

    // Recherche en temps réel
    searchInput.oninput = (e) => renderCommunes(e.target.value);
    searchInput.onfocus = () => renderCommunes(searchInput.value);

    // Clic en dehors pour fermer (simple)
    document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.add('hidden');
      }
    });

  });

  // Delivery Change -> Update Total
  dom.orderForm?.addEventListener('change', (e) => {
    if (e.target.name === 'delivery') calculateTotal();
  });

  // 3. Validation Finale & Submit
  dom.orderForm?.addEventListener('submit', function (e) {
    // Validation
    const operators = document.getElementById('operator');
    const selectedOperatorText = operators.options[operators.selectedIndex].text;

    const fullName = document.getElementById('fullName').value.trim();
    const operator = operators.value;
    const phone = document.getElementById('phone').value;
    const wilaya = document.getElementById('wilaya').value;
    const commune = document.getElementById('commune').value;
    const delivery = document.querySelector('input[name="delivery"]:checked')?.value;

    if (!fullName || !operator || !phone || !wilaya || !commune || !delivery) {
      e.preventDefault();
      alert('Veuillez remplir tous les champs (y compris la commune).');
      return;
    }

    if (!phone.startsWith(operator)) {
      e.preventDefault();
      alert(`Le numéro doit commencer par ${operator} pour ${selectedOperatorText}`);
      return;
    }

    if (phone.length !== 10) {
      e.preventDefault();
      alert('Le numéro doit contenir exactement 10 chiffres.');
      return;
    }

    // Si tout est bon, on laisse le formulaire partir (Webhook)
    // Mais on affiche l'alerte de confirmation (optionnelle, peut bloquer ou être juste informative)

    // Note: Alert blocks the thread.
    // alert(`Commande validée !\nNom: ${fullName}\nTéléphone: ${phone}\nOpérateur: ${selectedOperatorText}\nWilaya: ${document.getElementById('wilaya').options[document.getElementById('wilaya').selectedIndex].text}\nCommune: ${commune}\nLivraison: ${delivery === 'domicile' ? 'À domicile' : 'Yalidine'}`);

    // Changement du bouton pour feedback visuel
    const btn = e.target.querySelector('button[type="submit"]');
    if (btn) btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Traitement...';

    // On ne fait PAS reset() ici car cela viderait les champs avant l'envoi POST !
  });
}

// LOGIC: PRODUCTS RENDER
function renderProducts() {
  const container = document.getElementById('products-container');
  container.innerHTML = '';

  let filtered = PRODUCTS.filter(p => {
    const matchCat = state.filters.category === 'all' || p.category === state.filters.category;
    const matchPrice = p.price >= state.filters.minPrice && p.price <= state.filters.maxPrice;
    const matchSearch = !state.filters.search || p.title.toLowerCase().includes(state.filters.search);
    return matchCat && matchPrice && matchSearch;
  });

  document.getElementById('products-count').textContent = filtered.length;

  if (filtered.length === 0) {
    container.innerHTML = `<div class="col-span-full text-center py-20 text-gray-500">Aucun produit trouvé.</div>`;
    return;
  }

  filtered.forEach(product => {
    const isFav = state.wishlist.includes(product.id);
    const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;

    const card = document.createElement('div');
    card.className = "group bg-gray-900 border border-gray-800 rounded-2xl sm:rounded-[1.5rem] overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-brand-orange/10 transition-all duration-300 flex flex-col";
    card.innerHTML = `
      <div class="relative h-40 sm:h-64 overflow-hidden bg-gray-800 flex items-center justify-center p-4 sm:p-6 cursor-pointer" onclick="openProductModal(${product.id})">
        <div class="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
        
        ${product.isNew ? '<span class="absolute top-2 left-2 sm:top-4 sm:left-4 z-20 bg-brand-gold text-brand-dark text-[7px] sm:text-[9px] font-black px-2 py-1 sm:px-3 sm:py-1.5 rounded-full uppercase tracking-widest shadow-lg">Nouveau</span>' : ''}
        ${discount > 0 ? `<span class="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 bg-red-600 text-white text-[7px] sm:text-[9px] font-black px-2 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-lg">-${discount}%</span>` : ''}
        
        <img src="${product.image}" alt="${product.title}" onerror="this.src='https://placehold.co/400x400/1f2937/FFF?text=Image+Non+Dispo'" class="max-h-[90%] max-w-[90%] object-contain transform group-hover:scale-110 transition-all duration-700 drop-shadow-2xl z-0">
        
        <!-- Hover Overlay with Play Icon if Video exists -->
        ${product.video ? `
        <div class="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div class="h-10 w-10 sm:h-16 sm:w-16 bg-brand-orange/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 scale-50 group-hover:scale-100 transition-transform duration-500">
            <i class="fa-solid fa-play text-white text-sm sm:text-2xl ml-1"></i>
          </div>
        </div>` : ''}

        <button onclick="event.stopPropagation(); toggleWishlist(${product.id})" class="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 z-10 p-2 sm:p-2.5 rounded-full backdrop-blur-md transition-all ${isFav ? 'text-red-500 bg-red-500/20' : 'text-gray-300 bg-gray-900/80 hover:text-red-500 shadow-xl'}">
          <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart text-xs sm:text-base"></i>
        </button>
      </div>

      <div class="p-3 sm:p-6 flex flex-col flex-1">
        <div class="mb-2">
          <span class="text-[7px] sm:text-[9px] uppercase font-black text-brand-orange bg-brand-orange/10 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full tracking-widest">${product.category}</span>
        </div>
        <h3 class="text-gray-100 font-bold text-xs sm:text-lg leading-tight sm:leading-snug mb-3 sm:mb-4 line-clamp-2 flex-1 group-hover:text-brand-orange transition-colors tracking-tight">${product.title}</h3>
        
        <div class="mt-auto pt-3 sm:pt-5 border-t border-gray-800">
          <div class="flex items-center sm:items-end gap-1 sm:gap-2 mb-3 sm:mb-4">
             <span class="text-sm sm:text-2xl font-black text-white tracking-tighter">${product.price.toLocaleString('fr-FR')} <span class="text-brand-orange text-[8px] sm:text-xs">DA</span></span>
             ${product.originalPrice ? `<span class="text-[9px] sm:text-xs text-gray-500 line-through mb-0.5 sm:mb-1.5 font-medium">${product.originalPrice.toLocaleString('fr-FR')} DA</span>` : ''}
          </div>

          <div class="flex gap-1.5 sm:gap-2">
            <button onclick="addToCart(${product.id})" class="flex-1 flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-gray-300 py-2 sm:py-3.5 rounded-lg sm:rounded-xl transition-all border border-gray-700 active:scale-95">
                <i class="fa-solid fa-cart-plus text-xs sm:text-base"></i>
            </button>
            <button onclick="buyNow(${product.id})" class="flex-[2] flex items-center justify-center bg-gradient-to-r from-brand-orange to-brand-gold text-white py-2 sm:py-3.5 rounded-lg sm:rounded-xl transition-all shadow-lg font-bold sm:font-black text-[10px] sm:text-xs tracking-wider active:scale-95">
                <span>ACHETER</span>
            </button>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// LOGIC: SIDEBAR FILTERS
function renderSidebar() {
  const list = document.getElementById('category-list');
  const mobileList = document.getElementById('mobile-category-list');
  if (list) list.innerHTML = '';
  if (mobileList) mobileList.innerHTML = '';

  // Calculate counts
  const counts = {};
  PRODUCTS.forEach(p => {
    counts[p.category] = (counts[p.category] || 0) + 1;
    counts['all'] = (counts['all'] || 0) + 1;
  });

  CATEGORIES.forEach(cat => {
    // Desktop Sidebar
    if (list) {
      const li = document.createElement('li');
      const isActive = state.filters.category === cat.id;
      li.innerHTML = `
        <button onclick="setCategory('${cat.id}')" class="w-full flex items-center justify-between p-2.5 rounded-lg text-sm transition-all ${isActive ? 'bg-brand-orange text-white font-medium shadow-md' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}">
          <span>${cat.name}</span>
          ${!isActive ? `<span class="text-xs bg-gray-800 text-gray-500 px-2 py-0.5 rounded-full">${counts[cat.id] || 0}</span>` : ''}
        </button>
      `;
      list.appendChild(li);
    }

    // Mobile Menu Grid
    if (mobileList) {
      const btn = document.createElement('button');
      const isActive = state.filters.category === cat.id;
      btn.onclick = () => { setCategory(cat.id); toggleMobileMenu(); };
      btn.className = `p-3 rounded-xl text-xs font-bold transition-all border ${isActive ? 'bg-brand-orange text-white border-brand-orange shadow-lg' : 'bg-gray-800 text-gray-400 border-gray-700'}`;
      btn.innerHTML = `<span>${cat.name}</span>`;
      mobileList.appendChild(btn);
    }
  });
}

function setCategory(id) {
  state.filters.category = id;
  renderSidebar();
  renderProducts();
}

// LOGIC: CAROUSEL
function renderCarousel() {
  const container = document.getElementById('carousel-track');
  const featured = PRODUCTS.slice(0, 5); // Take first 5
  container.innerHTML = '';

  featured.forEach((product, idx) => {
    const slide = document.createElement('div');
    slide.className = "min-w-full h-full relative flex items-center justify-center p-4 sm:p-8 transition-opacity duration-500";
    slide.innerHTML = `
      <div class="absolute inset-0 bg-gray-900 z-0">
         <img src="${product.image}" class="w-full h-full object-cover opacity-20 blur-xl scale-110">
      </div>
      <div class="relative z-10 w-full max-w-5xl flex flex-row items-center justify-center h-full gap-4 sm:gap-8">
          <div class="w-2/5 sm:w-1/2 flex justify-center">
              <img src="${product.image}" class="max-h-[150px] sm:max-h-[250px] md:max-h-[350px] object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500">
          </div>
          <div class="w-3/5 sm:w-1/2 text-left space-y-2 sm:space-y-4">
              <span class="bg-brand-orange text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[8px] sm:text-xs font-bold uppercase">En Vedette</span>
              <h2 class="text-lg sm:text-3xl md:text-5xl font-bold text-white leading-tight line-clamp-2">${product.title}</h2>
              <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 pt-1 sm:pt-2">
                  <span class="text-base sm:text-3xl font-bold text-brand-gold">${product.price} DA</span>
                  ${product.originalPrice ? `<span class="text-[10px] sm:text-lg text-gray-500 line-through">${product.originalPrice} DA</span>` : ''}
              </div>
              <button onclick="buyNow(${product.id})" class="mt-2 sm:mt-4 bg-white text-gray-900 hover:bg-brand-gold font-bold py-2 px-4 sm:py-3 sm:px-8 rounded-full transition transform hover:scale-105 shadow-lg text-xs sm:text-base">
                  Acheter
              </button>
          </div>
      </div>
    `;
    container.appendChild(slide);
  });

  // Start Auto Slide logic (simplified)
  let currentSlide = 0;
  setInterval(() => {
    currentSlide = (currentSlide + 1) % featured.length;
    container.style.transform = `translateX(-${currentSlide * 100}%)`;
  }, 5000);
}

// LOGIC: CART
function addToCart(id) {
  const existing = state.cart.find(item => item.id === id);
  if (existing) {
    existing.quantity++;
  } else {
    const product = PRODUCTS.find(p => p.id === id);
    state.cart.push({ ...product, quantity: 1 });
  }
  updateCartUI();
  showToast("Produit ajouté au panier !");
}

function updateCartUI() {
  const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  dom.cartCount.textContent = count;
  dom.cartCount.classList.toggle('hidden', count === 0);

  // Render list inside modal
  const list = document.getElementById('cart-items-container');
  if (state.cart.length === 0) {
    list.innerHTML = `<div class="text-center text-gray-500 py-10">Votre panier est vide</div>`;
    dom.cartTotal.textContent = "0 DA";
  } else {
    list.innerHTML = state.cart.map(item => `
      <div class="flex items-center gap-4 bg-gray-800 p-3 rounded-lg border border-gray-700">
        <img src="${item.image}" class="w-16 h-16 object-cover rounded bg-gray-700">
        <div class="flex-1">
          <h4 class="text-white text-sm font-bold line-clamp-1">${item.title}</h4>
          <span class="text-brand-gold text-sm font-bold">${item.price * item.quantity} DA</span>
        </div>
        <div class="flex items-center border border-gray-600 rounded">
            <button onclick="updateQty(${item.id}, -1)" class="px-2 text-gray-400 hover:text-white">-</button>
            <span class="px-2 text-white text-sm">${item.quantity}</span>
            <button onclick="updateQty(${item.id}, 1)" class="px-2 text-gray-400 hover:text-white">+</button>
        </div>
        <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-400"><i class="fa-solid fa-trash"></i></button>
      </div>
    `).join('');

    const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    dom.cartTotal.textContent = total.toLocaleString('fr-FR') + " DA";
  }
}

function updateQty(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) removeFromCart(id);
    updateCartUI();
  }
}

function removeFromCart(id) {
  state.cart = state.cart.filter(i => i.id !== id);
  updateCartUI();
}

// LOGIC: CHECKOUT & ORDER FORM
function buyNow(id) {
  state.activeProduct = PRODUCTS.find(p => p.id === id); // Single product buy
  openCheckoutModal(false);
}

function checkoutCart() {
  if (state.cart.length === 0) return;
  state.activeProduct = null; // Cart buy
  openCheckoutModal(true);
}

function openCheckoutModal(isCart) {
  const modal = dom.checkoutModal;
  modal.classList.remove('hidden');

  // Update Summary Input
  const summaryInput = document.getElementById('product-summary-input');
  if (isCart) {
    const summary = `Panier (${state.cart.length}): ` + state.cart.map(i => `${i.quantity}x ${i.title}`).join(', ');
    summaryInput.value = summary;
  } else {
    summaryInput.value = state.activeProduct.title;
  }

  calculateTotal();
}

// handleWilayaChange removed (integrated into setupEventListeners)

function calculateTotal() {
  let subtotal = 0;
  if (state.activeProduct) {
    subtotal = state.activeProduct.price;
  } else {
    subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  const wilayaCode = dom.wilayaSelect.value;
  let shipping = 0;

  if (wilayaCode) {
    const fees = DELIVERY_FEES[wilayaCode];
    const mode = document.querySelector('input[name="delivery"]:checked')?.value;
    if (mode === 'domicile' && fees.home) shipping = fees.home;
    if (mode === 'yalidine' && fees.desk) shipping = fees.desk;
  }

  dom.shippingDisplay.textContent = shipping > 0 ? shipping + ' DA' : '--';
  dom.checkoutTotal.textContent = (subtotal + shipping).toLocaleString('fr-FR') + ' DA';

  // Update hidden inputs for form submission
  document.getElementById('input-total-price').value = subtotal + shipping;
  document.getElementById('input-shipping-price').value = shipping;
}

// handleOrderSubmit logic integrated into setupEventListeners

// UTILS
function toggleWishlist(id) {
  if (state.wishlist.includes(id)) {
    state.wishlist = state.wishlist.filter(w => w !== id);
    showToast("Retiré des favoris");
  } else {
    state.wishlist.push(id);
    showToast("Ajouté aux favoris");
  }
  dom.wishlistCount.textContent = state.wishlist.length;
  dom.wishlistCount.classList.toggle('hidden', state.wishlist.length === 0);
  renderProducts(); // Re-render to update heart icon
}

function showToast(msg) {
  dom.toast.textContent = msg;
  dom.toast.classList.remove('translate-y-20', 'opacity-0');
  setTimeout(() => {
    dom.toast.classList.add('translate-y-20', 'opacity-0');
  }, 3000);
}

function closeCheckout() {
  dom.checkoutModal.classList.add('hidden');
}

function toggleCart() {
  dom.cartModal.classList.toggle('hidden');
}

// MODAL LOGIC (IMPROVED)
function openProductModal(id) {
  const product = PRODUCTS.find(p => p.id === id);
  const modal = dom.productModal;
  state.activeProduct = product;

  // Set Content
  document.getElementById('modal-img').src = product.image;
  document.getElementById('modal-title').textContent = product.title;
  document.getElementById('modal-desc').textContent = product.description;
  document.getElementById('modal-price').textContent = product.price.toLocaleString('fr-FR') + ' DA';
  document.getElementById('modal-cat').textContent = product.category;

  // Rating/Reviews
  document.getElementById('modal-reviews').textContent = product.reviews || '84';

  // Original Price handling
  const origPriceDisplay = document.getElementById('modal-original-price');
  if (product.originalPrice) {
    origPriceDisplay.textContent = product.originalPrice.toLocaleString('fr-FR') + ' DA';
    origPriceDisplay.classList.remove('hidden');
  } else {
    origPriceDisplay.classList.add('hidden');
  }

  // Tags
  document.getElementById('modal-new-tag').classList.toggle('hidden', !product.isNew);

  // Video Setup
  const videoBtn = document.getElementById('video-toggle-btn');
  const modalVideo = document.getElementById('modal-video');
  const videoContainer = document.getElementById('modal-video-container');
  const videoBadge = document.getElementById('modal-video-badge');

  if (product.video) {
    videoBtn.classList.remove('hidden');
    videoBadge.classList.remove('hidden');
    modalVideo.querySelector('source').src = product.video;
    modalVideo.load();
  } else {
    videoBtn.classList.add('hidden');
    videoBadge.classList.add('hidden');
  }

  // Reset media view (show image by default)
  videoContainer.classList.add('hidden');
  document.getElementById('modal-img').classList.remove('opacity-0');
  videoBtn.innerHTML = '<i class="fa-solid fa-play"></i> <span>Voir la Vidéo</span>';

  // Buttons Action
  document.getElementById('modal-add-btn').onclick = () => {
    addToCart(product.id);
    // Optionnel: ne pas fermer le modal pour laisser l'utilisateur continuer à lire
    showToast("Ajouté au panier !");
  };

  document.getElementById('modal-buy-btn').onclick = () => {
    closeProductModal();
    buyNow(product.id);
  };

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Prevents scrolling behind modal
}

function toggleModalMedia() {
  const videoContainer = document.getElementById('modal-video-container');
  const img = document.getElementById('modal-img');
  const video = document.getElementById('modal-video');
  const btn = document.getElementById('video-toggle-btn');

  if (videoContainer.classList.contains('hidden')) {
    // Switch to Video
    videoContainer.classList.remove('hidden');
    img.classList.add('opacity-0');
    video.play();
    btn.innerHTML = '<i class="fa-solid fa-image"></i> <span>Voir l’Image</span>';
    btn.classList.replace('bg-brand-orange/90', 'bg-white/10');
    btn.classList.add('backdrop-blur-xl', 'border', 'border-white/20');
  } else {
    // Switch to Image
    videoContainer.classList.add('hidden');
    img.classList.remove('opacity-0');
    video.pause();
    btn.innerHTML = '<i class="fa-solid fa-play"></i> <span>Voir la Vidéo</span>';
    btn.classList.replace('bg-white/10', 'bg-brand-orange/90');
    btn.classList.remove('backdrop-blur-xl', 'border', 'border-white/20');
  }
}

function closeProductModal() {
  const modal = dom.productModal;
  const video = document.getElementById('modal-video');
  if (video) video.pause();
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

function loadState() {
  // Optional: Add LocalStorage logic here
}

// NAVIGATION FUNCTIONS
function toggleMobileMenu() {
  dom.mobileMenu.classList.toggle('hidden');
}

function openAboutPage() {
  const aboutPage = document.getElementById('about-page');
  aboutPage.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  // Re-trigger scroll animations for the new section
  setupScrollAnimations();
}

function closeAboutPage() {
  document.getElementById('about-page').classList.add('hidden');
  document.body.style.overflow = '';
}

// ANIMATION OBSERVER
function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Optional: stop observing once revealed
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(element => {
    observer.observe(element);
  });
}

// Init animations
document.addEventListener('DOMContentLoaded', () => {
  setupScrollAnimations();
});