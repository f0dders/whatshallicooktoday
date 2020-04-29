$(document).ready(function () {
	var data = [
		"'Nduja",
		"00-flour",
		"Acidulated-water",
		"Ackee",
		"Acorn-squash",
		"Aduki-beans",
		"Advocaat",
		"Agar-agar",
		"Ajwain",
		"Ale",
		"Aleppo-pepper",
		"Alfalfa-sprouts",
		"Allspice",
		"Almond-essence",
		"Almond-extract",
		"Almond-milk",
		"Almond",
		"Amaranth",
		"Amaretti",
		"Amchoor",
		"Anchovies",
		"Anchovy-essence",
		"Angelica",
		"Angostura-bitters",
		"Anise",
		"Annatto",
		"Apple-chutney",
		"Apple-juice",
		"Apple-sauce",
		"Apple",
		"Apricot-jam",
		"Apricot",
		"Aquafaba",
		"Arborio-rice",
		"Arbroath-smokie",
		"Argan-oil",
		"Arrowroot",
		"Artichoke",
		"Asafoetida",
		"Asparagus",
		"Aubergine",
		"Avocado",
		"Bacon",
		"Bagel",
		"Baguette",
		"Baked-beans",
		"Baking-powder",
		"Baking",
		"Balsamic-vinegar",
		"Bamboo-shoots",
		"Banana-bread",
		"Banana",
		"Barbary-duck",
		"Barbecue-sauce",
		"Barley",
		"Basil",
		"Basmati-rice",
		"Bay-boletes",
		"Bay-leaf",
		"Beans",
		"Beansprouts",
		"Béchamel-sauce",
		"Beef-consommé",
		"Beef-dripping",
		"Beef-mince",
		"Beef-ribs",
		"Beef-rump",
		"Beef-sausage",
		"Beef-stock",
		"Beef-tomato",
		"Beef",
		"Beer",
		"Beetroot",
		"Berry",
		"Best-end-of-lamb",
		"Betel-leaves",
		"Beurre-manié",
		"Bicarbonate-of-soda",
		"Bilberries",
		"Bird's-eye-chillies",
		"Biscotti",
		"Biscuits",
		"Blachan",
		"Black-bean-sauce",
		"Black-bean",
		"Black-bream",
		"Black-cardamom",
		"Black-eyed-beans",
		"Black-pepper",
		"Black-pudding",
		"Black-sesame-seeds",
		"Blackberry",
		"Blackcurrant-juice-drink",
		"Blackcurrant",
		"Blini",
		"Blood-orange",
		"Blueberry",
		"Boar",
		"Bok-choi",
		"Bone-marrow",
		"Bonito",
		"Borage",
		"Borlotti-beans",
		"Bouquet-garni",
		"Braising-steak",
		"Bramley-apple",
		"Bran",
		"Brandy-butter",
		"Brandy-snaps",
		"Brandy",
		"Bratwurst",
		"Brazil-nut",
		"Bread-roll",
		"Bread-sauce",
		"Bread",
		"Breadcrumbs",
		"Breadfruit",
		"Breadsticks",
		"Bresaola",
		"Brie",
		"Brill",
		"Brioche",
		"Brisket",
		"Broad-beans",
		"Broccoli",
		"Broth",
		"Brown-bread",
		"Brown-lentil",
		"Brown-rice",
		"Brown-sauce",
		"Brown-shrimp",
		"Brown-sugar",
		"Brownie",
		"Brussels-sprouts",
		"Buckwheat-flour",
		"Buckwheat",
		"Bulgur-wheat",
		"Buns",
		"Burger",
		"Butter-beans",
		"Butter",
		"Buttercream-icing",
		"Butterhead-lettuce",
		"Buttermilk",
		"Butternut-squash",
		"Cabbage",
		"Caerphilly",
		"Cake",
		"Calasparra-rice",
		"Calvados",
		"Camembert",
		"Campagne-loaf",
		"Candied-peel",
		"Cannellini-beans",
		"Cape-gooseberries",
		"Capers",
		"Capsicum",
		"Caramel",
		"Caraway-seeds",
		"Cardamom",
		"Carob",
		"Carrageen-moss",
		"Carrot",
		"Cashew",
		"Cassava",
		"Cassia-bark",
		"Caster-sugar",
		"Catfish",
		"Caul-fat",
		"Cauliflower",
		"Cava",
		"Caviar",
		"Cavolo-nero",
		"Cayenne-pepper",
		"Celeriac",
		"Celery-seeds",
		"Celery",
		"Chaat-masala",
		"Champ",
		"Champagne",
		"Chana-dal",
		"Chanterelle-mushrooms",
		"Chantilly-cream",
		"Chapati-flour",
		"Chapatis",
		"Charcuterie",
		"Chard",
		"Charlotte-potato",
		"Chayote",
		"Cheddar",
		"Cheese-sauce",
		"Cheese",
		"Cherry-brandy",
		"Cherry-tomatoes",
		"Cherry",
		"Chervil",
		"Cheshire",
		"Chestnut-mushrooms",
		"Chestnut",
		"Chia-seeds",
		"Chicken-breast",
		"Chicken-leg",
		"Chicken-liver",
		"Chicken-stock",
		"Chicken-thigh",
		"Chicken-wing",
		"Chicken",
		"Chickpea-flour",
		"Chickpea",
		"Chicory",
		"Chilli-oil",
		"Chilli-paste",
		"Chilli-powder",
		"Chilli-sauce",
		"Chilli",
		"Chinese-cabbage",
		"Chinese-mushrooms",
		"Chinese-pancake",
		"Chipotle",
		"Chips",
		"Chives",
		"Chocolate-biscuit",
		"Chocolate-cake",
		"Chocolate-mousse",
		"Chocolate-truffle",
		"Chocolate",
		"Chopped-tomatoes",
		"Chorizo",
		"Choux-pastry",
		"Christmas-cakes",
		"Christmas-pudding",
		"Chuck-and-blade",
		"Chump",
		"Chutney",
		"Ciabatta",
		"Cider",
		"Cinnamon",
		"Citrus-fruit",
		"Clams",
		"Clarified-butter",
		"Clementine",
		"Clotted-cream",
		"Cloves",
		"Cobnut",
		"Cockles",
		"Cocoa-butter",
		"Cocoa-powder",
		"Coconut-cream",
		"Coconut-flour",
		"Coconut-milk",
		"Coconut-oil",
		"Coconut",
		"Cod-roe",
		"Cod",
		"Coffee-beans",
		"Coffee-essence",
		"Coffee-granules",
		"Coffee-liqueur",
		"Coffee",
		"Cognac",
		"Cola",
		"Coleslaw",
		"Coley",
		"Collar",
		"Compôte",
		"Comté",
		"Condensed-milk",
		"Coriander-cress",
		"Coriander-seeds",
		"Coriander",
		"Corn-oil",
		"Corn-syrup",
		"Corned-beef",
		"Cornflour",
		"Cos-lettuce",
		"Cottage-cheese",
		"Coulis",
		"Courgette",
		"Court-bouillon",
		"Couscous",
		"Crab-apple",
		"Crab",
		"Crackers",
		"Cranberry-juice",
		"Cranberry-sauce",
		"Cranberry",
		"Crayfish",
		"Cream-cheese",
		"Cream-liqueur",
		"Cream-of-tartar",
		"Cream-soda",
		"Cream",
		"Creamed-coconut",
		"Crème-fraîche",
		"Crêpe",
		"Cress",
		"Crispbread",
		"Crisps",
		"Croissant",
		"Crostini",
		"Croûtons",
		"Crudités",
		"Crumble",
		"Crystallised-ginger",
		"Cucumber",
		"Cumberland-sauce",
		"Cumin",
		"Curacao",
		"Curd-cheese",
		"Curd",
		"Curly-kale",
		"Currant-bread",
		"Currants",
		"Curry-leaves",
		"Curry-paste",
		"Curry-powder",
		"Curry",
		"Custard-powder",
		"Custard",
		"Cuttlefish",
		"Dab",
		"Daikon",
		"Dal",
		"Damsons",
		"Dandelion",
		"Danish-blue",
		"Dark-chocolate",
		"Date",
		"Demerara-sugar",
		"Demi-glace-sauce",
		"Desiccated-coconut",
		"Desirée-potato",
		"Digestive-biscuit",
		"Dijon-mustard",
		"Dill",
		"Dim-sum-wrappers",
		"Dolcelatte",
		"Double-cream",
		"Double-Gloucester",
		"Dover-sole",
		"Dragon-fruit",
		"Dried-apricots",
		"Dried-cherries",
		"Dried-chilli",
		"Dried-fruit",
		"Dried-mixed-fruit",
		"Dry-sherry",
		"Duck-confit",
		"Duck-fat",
		"Duck",
		"Dulce-de-leche",
		"Dumplings",
		"Duxelles",
		"Edam",
		"Eel",
		"Egg-wash",
		"Egg-white",
		"Egg-yolk",
		"Egg",
		"Elderberries",
		"Elderflower",
		"Emmental",
		"English-muffin",
		"English-mustard",
		"Escalope",
		"Evaporated-milk",
		"Exotic-fruit",
		"Falafel",
		"Farfalle",
		"Fat",
		"Fennel-seeds",
		"Fennel",
		"Fenugreek",
		"Feta",
		"Fettuccine",
		"Field-mushroom",
		"Fig",
		"Fillet-of-beef",
		"Filo-pastry",
		"Fines-herbes",
		"Fish-paste",
		"Fish-roe",
		"Fish-sauce",
		"Fish-soup",
		"Fish",
		"Five-spice-powder",
		"Flageolet-beans",
		"Flaked-almonds",
		"Flank",
		"Flapjacks",
		"Flatbread",
		"Flatfish",
		"Flaxseed",
		"Fleur-de-sel",
		"Flour-tortilla",
		"Flour",
		"Floury-potato",
		"Flying-fish",
		"Focaccia",
		"Foie-gras",
		"Fondant-icing",
		"Fondant-potatoes",
		"Fontina-cheese",
		"Food-colouring",
		"Forced-rhubarb",
		"Fortified-wine",
		"Frangipane",
		"Frankfurter",
		"Freekeh",
		"French-beans",
		"French-bread",
		"French-dressing",
		"Fresh-coriander",
		"Fresh-tuna",
		"Fromage-frais",
		"Fruit-brandy",
		"Fruit-cake",
		"Fruit-juice",
		"Fruit-salad",
		"Fruit",
		"Fudge",
		"Fusilli",
		"Galangal",
		"Game",
		"Gammon",
		"Garam-masala",
		"Gari",
		"Garlic-and-herb-cream-cheese",
		"Garlic-bread",
		"Garlic",
		"Gelatine",
		"Ghee",
		"Gherkin",
		"Giblets",
		"Gin",
		"Ginger-ale",
		"Ginger-beer",
		"Ginger-biscuit",
		"Ginger",
		"Gingerbread",
		"Glacé-cherries",
		"Globe-artichoke",
		"Glucose",
		"Gluten-free-flour",
		"Gnocchi",
		"Goat",
		"Goats'-cheese",
		"Goats'-milk",
		"Goji-berries",
		"Golden-syrup",
		"Goose-fat",
		"Goose",
		"Gooseberry",
		"Gorgonzola",
		"Gouda",
		"Grains",
		"Gram-flour",
		"Grape-juice",
		"Grapefruit-juice",
		"Grapefruit",
		"Grapes",
		"Grapeseed-oil",
		"Gratin",
		"Gravy-browning",
		"Gravy",
		"Green-banana",
		"Green-beans",
		"Green-cabbage",
		"Green-lentil",
		"Green-tea",
		"Greengages",
		"Grey-mullet",
		"Ground-almonds",
		"Ground-ginger",
		"Grouse",
		"Gruyère",
		"Guacamole",
		"Guava",
		"Guinea-fowl",
		"Gurnard",
		"Habañero-chillies",
		"Haddock",
		"Haggis",
		"Hake",
		"Halibut",
		"Halloumi",
		"Ham",
		"Hare",
		"Haricot-beans",
		"Harissa",
		"Hazelnut-oil",
		"Hazelnut",
		"Heart",
		"Herbal-liqueur",
		"Herbal-tea",
		"Herbes-de-provence",
		"Herbs",
		"Herring",
		"Hogget",
		"Hoisin-sauce",
		"Hoki",
		"Hollandaise-sauce",
		"Hominy",
		"Honey",
		"Honeycomb",
		"Horseradish-sauce",
		"Horseradish",
		"Hot-cross-buns",
		"Hummus",
		"Hunza-apricots",
		"Hyssop",
		"Ice-cream",
		"Iceberg-lettuce",
		"Icing-sugar",
		"Icing",
		"Irish-stout",
		"Jackfruit",
		"Jaggery",
		"Jam",
		"January-King-cabbage",
		"Japanese-pumpkin",
		"Jasmine-rice",
		"Jelly",
		"Jerk-seasoning",
		"Jersey-Royal-potatoes",
		"Jerusalem-artichoke",
		"John-Dory",
		"Jujube",
		"Juniper-berries",
		"Jus",
		"Kabana",
		"Kale",
		"Ketchup",
		"Ketjap-manis",
		"Kidney-beans",
		"Kidney",
		"King-Edward",
		"Kipper",
		"Kirsch",
		"Kiwi-fruit",
		"Kohlrabi",
		"Kumquat",
		"Lager",
		"Lamb-breast",
		"Lamb-chop",
		"Lamb-fillet",
		"Lamb-kidney",
		"Lamb-loin",
		"Lamb-mince",
		"Lamb-neck",
		"Lamb-rump",
		"Lamb-shank",
		"Lamb-shoulder",
		"Lamb-stock",
		"Lamb",
		"Lancashire-cheese",
		"Langoustine",
		"Lard",
		"Lardons",
		"Lasagne-sheets",
		"Lasagne",
		"Laverbread",
		"Leek",
		"Leftover-turkey",
		"Leg-of-lamb",
		"Lemon-balm",
		"Lemon-curd",
		"Lemon-juice",
		"Lemon-sole",
		"Lemon",
		"Lemonade",
		"Lemongrass",
		"Lentils",
		"Lettuce",
		"Lime-cordial",
		"Lime-juice",
		"Lime-leaves",
		"Lime-pickle",
		"Lime",
		"Ling",
		"Lingonberry",
		"Linguine",
		"Liqueur",
		"Liquorice",
		"Little-Gem-lettuce",
		"Liver",
		"Loaf-cake",
		"Lobster",
		"Loganberry",
		"Long-grain-rice",
		"Lovage",
		"Low-calorie-sweetener",
		"Lychee",
		"Macadamia",
		"Macaroni",
		"Macaroon",
		"Mace",
		"Mackerel",
		"Madeira-cake",
		"Madeira",
		"Madeleines",
		"Maize",
		"Malted-grain-bread",
		"Manchego",
		"Mandarin",
		"Mangetout",
		"Mango-chutney",
		"Mango-juice",
		"Mango-pickle",
		"Mango",
		"Mangosteen",
		"Maple-syrup",
		"Margarine",
		"Marjoram",
		"Marmalade",
		"Marrow",
		"Marrowfat-peas",
		"Marsala-wine",
		"Marshmallow",
		"Marzipan",
		"Mascarpone",
		"Mashed-potato",
		"Matzo",
		"Mayonnaise",
		"Meat",
		"Medlars",
		"Megrim",
		"Melon-seeds",
		"Melon",
		"Membrillo",
		"Meringue",
		"Mesclun",
		"Milk-chocolate",
		"Milk",
		"Milkshake",
		"Millet-flour",
		"Millet",
		"Mince-pies",
		"Mince",
		"Mincemeat",
		"Mint-sauce",
		"Mint",
		"Mirepoix",
		"Mirin",
		"Miso",
		"Mixed-berries",
		"Mixed-dried-beans",
		"Mixed-fish",
		"Mixed-nuts",
		"Mixed-spice",
		"Mixed-spices",
		"Molasses",
		"Monk's-beard",
		"Monkfish",
		"Morel",
		"Mortadella",
		"Mozzarella",
		"Muesli",
		"Muffins",
		"Mulberries",
		"Mulled-wine",
		"Mung-beans",
		"Mung-dal",
		"Mushroom",
		"Mussels",
		"Mustard-cress",
		"Mustard-leaves",
		"Mustard-oil",
		"Mustard-powder",
		"Mustard-seeds",
		"Mustard",
		"Mutton",
		"Naan-bread",
		"Nachos",
		"Nashi",
		"Nasturtium",
		"Nectarine",
		"Nettle",
		"New-potatoes",
		"Nibbed-almonds",
		"Nigella-seeds",
		"Noodle-soup",
		"Noodles",
		"Nori",
		"Nougat",
		"Nut",
		"Nutmeg",
		"Oatcakes",
		"Oatmeal",
		"Oats",
		"Octopus",
		"Offal",
		"Oil",
		"Oily-fish",
		"Okra",
		"Olive-oil",
		"Olive",
		"Onion",
		"Orange-juice",
		"Orange-liqueur",
		"Orange",
		"Oregano",
		"Orzo",
		"Ouzo",
		"Oxtail",
		"Oyster-mushrooms",
		"Oyster-sauce",
		"Oyster",
		"Paella",
		"Pak-choi",
		"Palm-oil",
		"Palm-sugar",
		"Pancakes",
		"Pancetta",
		"Panch-phoran",
		"Pandan-leaves",
		"Paneer",
		"Panettone",
		"Papaya",
		"Pappardelle",
		"Paprika",
		"Paratha",
		"Parfait",
		"Parma-ham",
		"Parmesan",
		"Parsley",
		"Parsnip",
		"Partridge",
		"Passata",
		"Passion-fruit-juice",
		"Passion-fruit",
		"Pasta-sauce",
		"Pasta",
		"Pastrami",
		"Pastry",
		"Pasty",
		"Pâté",
		"Paw-paw",
		"Pea-shoots",
		"Peach",
		"Peanut-butter",
		"Peanut-oil",
		"Peanuts",
		"Pear",
		"Pearl-barley",
		"Peas",
		"Pecan",
		"Pecorino",
		"Pectin",
		"Peel",
		"Penne",
		"Pepper",
		"Peppercorn",
		"Pepperoni",
		"Perch",
		"Perry",
		"Pesto",
		"Pheasant",
		"Piccalilli",
		"Pickle",
		"Pickled-onion",
		"Pie",
		"Pig-cheeks",
		"Pigeon-peas",
		"Pigeon",
		"Pike",
		"Pine-nut",
		"Pineapple-juice",
		"Pineapple",
		"Pink-Fir-Apple",
		"Pink-peppercorn",
		"Pinto-beans",
		"Piri-piri",
		"Pistachio",
		"Pitta-bread",
		"Pizza",
		"Plaice",
		"Plain-flour",
		"Plantain",
		"Plum",
		"Polenta",
		"Pollack",
		"Pollock",
		"Pomegranate-juice",
		"Pomegranate-molasses",
		"Pomegranate",
		"Pomelo",
		"Popcorn",
		"Poppy-seeds",
		"Porcini",
		"Pork-belly",
		"Pork-chop",
		"Pork-fillet",
		"Pork-leg",
		"Pork-loin",
		"Pork-mince",
		"Pork-sausages",
		"Pork-shoulder",
		"Pork-spare-rib",
		"Pork",
		"Porridge",
		"Port",
		"Portobello-mushrooms",
		"Potato-rösti",
		"Potato-wedges",
		"Potato",
		"Poultry",
		"Poussin",
		"Praline",
		"Prawn-crackers",
		"Prawn",
		"Preserved-lemons",
		"Preserves",
		"Pretzels",
		"Prosciutto",
		"Prune-juice",
		"Prune",
		"Pudding-rice",
		"Puff-pastry",
		"Pulled-pork",
		"Pumpernickel-bread",
		"Pumpkin-seed",
		"Pumpkin",
		"Purple-sprouting-broccoli",
		"Puy-lentils",
		"Quail",
		"Quails'-egg",
		"Quark",
		"Quatre-épices",
		"Quince",
		"Quinoa",
		"Quorn",
		"Rabbit",
		"Rack-of-lamb",
		"Radicchio",
		"Radish",
		"Rainbow-chard",
		"Rainbow-trout",
		"Raisins",
		"Raita",
		"Rapeseed-oil",
		"Ras-el-hanout",
		"Raspberry-jam",
		"Raspberry",
		"Ratafia-biscuits",
		"Ratatouille",
		"Red-cabbage",
		"Red-Leicester",
		"Red-lentil",
		"Red-mullet",
		"Red-onion",
		"Red-rice",
		"Red-snapper",
		"Red-wine-vinegar",
		"Red-wine",
		"Redcurrant-jelly",
		"Redcurrant",
		"Rennet",
		"Rhubarb",
		"Rib-of-beef",
		"Rice-flour",
		"Rice-noodles",
		"Rice-pudding",
		"Rice-vinegar",
		"Rice-wine",
		"Rice",
		"Ricotta",
		"Rigatoni",
		"Risotto-rice",
		"Risotto",
		"Roast-beef",
		"Roast-chicken",
		"Roast-lamb",
		"Roast-pork",
		"Roast-potatoes",
		"Roast-turkey",
		"Roasted-vegetables",
		"Rock-salmon",
		"Rock-salt",
		"Rocket",
		"Root-beer",
		"Root-vegetable",
		"Roquefort",
		"Rose-wine",
		"Rosehip-syrup",
		"Rosemary",
		"Rosewater",
		"Rouille",
		"Royal-icing",
		"Rum",
		"Rump",
		"Runner-beans",
		"Rye-bread",
		"Rye-flour",
		"Safflower-oil",
		"Saffron",
		"Sage-derby",
		"Sage",
		"Sago",
		"Salad-cream",
		"Salad-leaves",
		"Salad",
		"Salami",
		"Salmon",
		"Salsa",
		"Salsify",
		"Salt-beef",
		"Salt-cod",
		"Salt",
		"Sambuca",
		"Samphire",
		"Sardine",
		"Satay",
		"Satsuma",
		"Sauces",
		"Saucisson",
		"Sauerkraut",
		"Sausage",
		"Savory",
		"Savoy-cabbage",
		"Scallop",
		"Scotch-bonnet-chilli",
		"Scrag",
		"Sea-bass",
		"Sea-bream",
		"Sea-salt",
		"Sea-trout",
		"Seafood",
		"Seasoning",
		"Seaweed",
		"Seeds",
		"Self-raising-flour",
		"Semolina",
		"Serrano-ham",
		"Sesame-oil",
		"Sesame-seeds",
		"Seville-orange",
		"Shallot",
		"Sharon-fruit",
		"Shellfish",
		"Sherry-vinegar",
		"Sherry",
		"Shiitake-mushroom",
		"Shin",
		"Shortbread",
		"Shortcrust-pastry",
		"Sichuan-pepper",
		"Silverside",
		"Single-cream",
		"Sirloin",
		"Skate",
		"Sloe-gin",
		"Sloe",
		"Smoked-cheese",
		"Smoked-fish",
		"Smoked-haddock",
		"Smoked-mackerel",
		"Smoked-paprika",
		"Smoked-salmon",
		"Smoked-trout",
		"Snapper",
		"Soba-noodles",
		"Soda-bread",
		"Soda-water",
		"Sole",
		"Sorbet",
		"Sorrel",
		"Soup",
		"Sourdough-bread",
		"Soured-cream",
		"Soy-sauce",
		"Soya-beans",
		"Soya-flour",
		"Soya-milk",
		"Soya-oil",
		"Spaghetti-squash",
		"Spaghetti",
		"Sparkling-wine",
		"Spelt-flour",
		"Spelt",
		"Spices",
		"Spinach",
		"Split-peas",
		"Sponge-cake",
		"Spring-greens",
		"Spring-onion",
		"Spring-roll-wrappers",
		"Squash",
		"Squid",
		"Sriracha",
		"Star-anise",
		"Starfruit",
		"Steak",
		"Stem-ginger",
		"Stew",
		"Stewing-lamb",
		"Stilton",
		"Stock",
		"Straw-mushroom",
		"Strawberry-jam",
		"Strawberry",
		"Strega-liqueur",
		"Strong-white-flour",
		"Stuffing",
		"Sucralose",
		"Suet",
		"Sugar-snap-peas",
		"Sugar",
		"Sultanas",
		"Sumac",
		"Summer-cabbage",
		"Summer-fruit",
		"Sunflower-oil",
		"Sunflower-seed",
		"Sushi-rice",
		"Swede",
		"Sweet-potato",
		"Sweet-sherry",
		"Sweetbread",
		"Sweetcorn",
		"Sweets",
		"Swiss-chard",
		"Swiss-rolls-and-roulades",
		"Swordfish",
		"Syrup",
		"T-bone-steak",
		"Tabasco",
		"Taco",
		"Tagliatelle",
		"Tahini",
		"Taleggio",
		"Tamari",
		"Tamarillo",
		"Tamarind",
		"Tangerine",
		"Tapenade",
		"Tapioca",
		"Taro",
		"Tarragon",
		"Tartare-sauce",
		"Tayberry",
		"Tea",
		"Tempura",
		"Tequila",
		"Teriyaki-sauce",
		"Teriyaki",
		"Thai-basil",
		"Thyme",
		"Tilapia",
		"Tinned-tuna",
		"Toffee",
		"Tofu",
		"Tomatillo",
		"Tomato-chutney",
		"Tomato-juice",
		"Tomato-purée",
		"Tomato",
		"Tongue",
		"Tonic",
		"Topside",
		"Tortellini",
		"Treacle",
		"Tripe",
		"Trout",
		"Truffle-oil",
		"Truffle",
		"Turbot",
		"Turkey-breast",
		"Turkey-mince",
		"Turkey",
		"Turkish-delight",
		"Turmeric",
		"Turnip",
		"Unleavened-bread",
		"Urid-dal",
		"Vacherin",
		"Vanilla-bean-paste",
		"Vanilla-essence",
		"Vanilla-extract",
		"Vanilla-pod",
		"Veal",
		"Vegetable-oil",
		"Vegetable-shortening",
		"Vegetable-stock",
		"Vegetables",
		"Vegetarian-sausage",
		"Venison",
		"Verjus",
		"Vermicelli-(pasta)",
		"Vermouth",
		"Vine-leaves",
		"Vinegar",
		"Vodka-cocktail",
		"Vodka",
		"Waffles",
		"Walnut-oil",
		"Walnut",
		"Wasabi",
		"Water-chestnut",
		"Watercress",
		"Watermelon",
		"Waxy-potato",
		"Wensleydale",
		"Wheatgerm",
		"Whelk",
		"Whipping-cream",
		"Whisky-cocktail",
		"Whisky-liqueur",
		"Whisky",
		"White-bread",
		"White-cabbage",
		"White-chocolate",
		"White-fish",
		"White-pepper",
		"White-wine-vinegar",
		"White-wine",
		"Whitebait",
		"Whitecurrant",
		"Whiting",
		"Whole-wheat-pasta",
		"Wholegrain-mustard",
		"Wholemeal-bread",
		"Wholemeal-flour",
		"Wild-duck",
		"Wild-garlic",
		"Wild-mushrooms",
		"Wild-rice",
		"Wine",
		"Winkles",
		"Wood-pigeon",
		"Worcestershire-sauce",
		"Wraps",
		"Yam",
		"Yeast-extract",
		"Yeast",
		"Yellow-lentil",
		"Yoghurt",
		"Yorkshire-pudding",
		"Yuzu",
		"Zander",
		"Zest",
	];

	$(".food-selector").select2({
		data: data,
		tags: true,
		tokenSeparators: [","],
		placeholder: "Start typing...",
		allowClear: true,
		width: "resolve",
		// templateSelection: "formatFood",
		// templateResults: "formatFood",
	});
});
