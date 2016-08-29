var app = angular.module("agecalc",[]);

app.controller('dataController', function($scope){
	$scope.machados=[
		//machados
		{nome: "Machado de Pedra",min: "2",max: "4",taxa: "38",lvl: "0",imagem: "imagens/machado01.bmp"},
		{nome: "Machado de Aço",min: "3",max: "5",taxa: "43",lvl: "0",imagem: "imagens/machado02.bmp"},
		{nome: "Machado de Batalha",min: "4",max: "7",taxa: "45",lvl: "7",imagem: "imagens/machado03.bmp"},
		{nome: "Machado de Guerra",min: "5",max: "10", taxa: "56",lvl: "10",imagem: "imagens/machado04.bmp"},
		{nome: "Machado de duas Mãos",min: "8",max: "19", taxa: "60",lvl: "16",imagem: "imagens/machado05.bmp"},
		{nome: "Machado Morcego ",min: "8",max: "16", taxa: "64",lvl: "22",imagem: "imagens/machado06.bmp"},
		{nome: "Machado Mecânico ",min: "11",max: "20", taxa: "66",lvl: "30",imagem: "imagens/machado07.bmp"},
		{nome: "Machado de Duas Cabeças ",min: "16",max: "27", taxa: "70",lvl: "37",imagem: "imagens/machado08.bmp"},
		{nome: "Machado Grandioso ",min: "19",max: "30", taxa: "66",lvl: "44",imagem: "imagens/machado09.bmp"},
		{nome: "Machado Diamante ",min: "23",max: "36", taxa: "88",lvl: "50",imagem: "imagens/machado10.bmp"},
		{nome: "Machado Afiado ",min: "16",max: "29", taxa: "94",lvl: "55",imagem: "imagens/machado11.bmp"},
		{nome: "Machado Fatiador ",min: "23",max: "39", taxa: "102",lvl: "60",imagem: "imagens/machado12.bmp"},
		{nome: "Machado Gigante ",min: "27",max: "46", taxa: "110",lvl: "65",imagem: "imagens/machado13.bmp"},
		{nome: "Tomahawk",min: "25",max: "38", taxa: "66",lvl: "120",imagem: "imagens/machado14.bmp"},
		{nome: "Machado Titan ",min: "34",max: "55", taxa: "128",lvl: "75",imagem: "imagens/machado15.bmp"},
		{nome: "Machado do Caos ",min: "38",max: "59", taxa: "140",lvl: "80a",imagem: "imagens/machado16.bmp"},
		{nome: "Machado Ancião",min: "43",max: "65", taxa: "148",lvl: "80b",imagem: "imagens/machado17.bmp"},
		{nome: "Machado Antigo",min: "39",max: "60", taxa: "160",lvl: "80c",imagem: "imagens/machado18.bmp"},
		{nome: "Machado Extremo",min: "53",max: "74", taxa: "170",lvl: "80d",imagem: "imagens/machado19.bmp"},
		{nome: "Machado Wyvern",min: "67",max: "85", taxa: "192",lvl: "100",imagem: "imagens/machado20.bmp"},
		{nome: "Machado Zecram",min: "76",max: "90", taxa: "204",lvl: "102",imagem: "imagens/machado21.bmp"},
		{nome: "Machado Dragão",min: "87",max: "99", taxa: "216",lvl: "105",imagem: "imagens/machado22.bmp"},
		{nome: "Machado Lendário",min: "85",max: "99", taxa: "228",lvl: "108a",imagem: "imagens/machado23.bmp"},
		{nome: "Machado Fúria",min: "97",max: "109", taxa: "228",lvl: "108",imagem: "imagens/machado24.bmp"},
		

		{nome: "Machado Negro",min: "107",max: "119", taxa: "238",lvl: "115",imagem: "imagens/machado25.bmp"}

	]


	$scope.garras=[
		{nome: "Garra de Águia ",min: "2",max: "5",taxa: "38",lvl: "0",imagem: "imagens/garra1.bmp"},
		{nome: "Garra de Tigre ",min: "3",max: "7",taxa: "42",lvl: "0",imagem: "imagens/garra2.bmp"},
		{nome: "Garra Griffin ",min: "5",max: "9",taxa: "50",lvl: "7",imagem: "imagens/garra3.bmp"},
		{nome: "Garra de Cobra ",min: "5",max: "10",taxa: "54",lvl: "10",imagem: "imagens/garra4.bmp"},
		{nome: "Lâmina de Mão ",min: "7",max: "12",taxa: "60",lvl: "16",imagem: "imagens/garra5.bmp"},
		{nome: "Garra Afiada ",min: "9",max: "15",taxa: "66",lvl: "22",imagem: "imagens/garra6.bmp"},
		{nome: "Espada de Mão ",min: "11",max: "17",taxa: "72",lvl: "30",imagem: "imagens/garra7.bmp"},
		{nome: "Faraó ",min: "13",max: "20",taxa: "80",lvl: "37",imagem: "imagens/garra8.bmp"},
		{nome: "Garra Brutal ",min: "15",max: "23",taxa: "88",lvl: "44",imagem: "imagens/garra9.bmp"},
		{nome: "Garra Hydra ",min: "17",max: "27",taxa: "95",lvl: "50",imagem: "imagens/garra10.bmp"},
		{nome: "Leviatã",min: "20",max: "28",taxa: "100",lvl: "55",imagem: "imagens/garra11.bmp"},
		{nome: "Garra Wyvern ",min: "22",max: "31",taxa: "108",lvl: "60",imagem: "imagens/garra12.bmp"},
		{nome: "Garra do Caos ",min: "23",max: "35",taxa: "114",lvl: "65",imagem: "imagens/garra13.bmp"},
		{nome: "Garra Alada ",min: "26",max: "38",taxa: "123",lvl: "70",imagem: "imagens/garra14.bmp"},
		{nome: "Garra Maldita ",min: "28",max: "42",taxa: "133",lvl: "75",imagem: "imagens/garra15.bmp"},
		{nome: "Garra Titan ",min: "33",max: "47",taxa: "130",lvl: "80a",imagem: "imagens/garra16.bmp"},
		{nome: "Garra Salamandra ",min: "37",max: "52",taxa: "142",lvl: "80b",imagem: "imagens/garra17.bmp"},
		{nome: "Garra Fênix ",min: "42",max: "57",taxa: "154",lvl: "80c",imagem: "imagens/garra18.bmp"},
		{nome: "Garra Chiemera ",min: "47",max: "63",taxa: "165",lvl: "80d",imagem: "imagens/garra19.bmp"},
		{nome: "Garra Viper ",min: "58",max: "74",taxa: "181",lvl: "80e",imagem: "imagens/garra20.bmp"},
		{nome: "Garra da Justiça ",min: "63",max: "80",taxa: "190",lvl: "102",imagem: "imagens/garra21.bmp"},
		{nome: "Garra Herege ",min: "74",max: "91",taxa: "198",lvl: "105",imagem: "imagens/garra22.bmp"},
		{nome: "Garra Lendária ",min: "85",max: "102",taxa: "208",lvl: "108",imagem: "imagens/garra23.bmp"},
		

		{nome: "Garra Negra ",min: "96",max: "113",taxa: "220",lvl: "115",imagem: "imagens/garra24.bmp"}

	]

	$scope.martelos=[
		{nome: "Porrete Pequeno ",min: "1",max: "4",taxa: "45",lvl: "0",imagem: "imagens/martelo1.bmp"},
		{nome: "Porrete de Batalha ",min: "3",max: "6",taxa: "50",lvl: "0",imagem: "imagens/martelo2.bmp"},
		{nome: "Porrete ",min: "5",max: "8",taxa: "46",lvl: "7",imagem: "imagens/martelo3.bmp"},
		{nome: "Porrete Gótico ",min: "5",max: "11",taxa: "50",lvl: "9",imagem: "imagens/martelo4.bmp"},
		{nome: "Martelo de Guerra ",min: "7",max: "13",taxa: "55",lvl: "12",imagem: "imagens/martelo5.bmp"},
		{nome: "Martelo de Metal ",min: "10",max: "20",taxa: "62",lvl: "16",imagem: "imagens/martelo6.bmp"},
		{nome: "Martelo Cruzado ",min: "8",max: "17",taxa: "69",lvl: "22",imagem: "imagens/martelo7.bmp"},
		{nome: "Porrete Sagrado ",min: "11",max: "21",taxa: "77",lvl: "30",imagem: "imagens/martelo8.bmp"},
		{nome: "Estrela ",min: "12",max: "22",taxa: "84",lvl: "37",imagem: "imagens/martelo9.bmp"},
		{nome: "Maximum ",min: "18",max: "31",taxa: "92",lvl: "43",imagem: "imagens/martelo10.bmp"},
		{nome: "Meditação ",min: "20",max: "35",taxa: "102",lvl: "48",imagem: "imagens/martelo11.bmp"},
		{nome: "Martelo Mágico ",min: "17",max: "31",taxa: "94",lvl: "54",imagem: "imagens/martelo12.bmp"},
		{nome: "Solar ",min: "19",max: "36",taxa: "45",lvl: "110",imagem: "imagens/martelo13.bmp"},
		{nome: "Porrete de Guerra ",min: "24",max: "46",taxa: "120",lvl: "64",imagem: "imagens/martelo14.bmp"},
		{nome: "Porrete Titan ",min: "27",max: "51",taxa: "132",lvl: "69",imagem: "imagens/martelo15.bmp"},
		{nome: "Porrete do Caos ",min: "32",max: "56",taxa: "144",lvl: "75",imagem: "imagens/martelo16.bmp"},
		{nome: "Martelo Brutal ",min: "28",max: "51",taxa: "149",lvl: "80a",imagem: "imagens/martelo17.bmp"},
		{nome: "Martelo Gladiador ",min: "40",max: "66",taxa: "165",lvl: "80b",imagem: "imagens/martelo18.bmp"},
		{nome: "Martelo Archon ",min: "45",max: "72",taxa: "173",lvl: "80c",imagem: "imagens/martelo19.bmp"},
		{nome: "Martelo da Justiça ",min: "41",max: "67",taxa: "180",lvl: "80d",imagem: "imagens/martelo20.bmp"},
		{nome: "Martelo Guardião ",min: "61",max: "87",taxa: "186",lvl: "100",imagem: "imagens/martelo22.bmp"},
		{nome: "Martelo da Perdição ",min: "68",max: "94",taxa: "201",lvl: "102",imagem: "imagens/martelo23.bmp"},
		{nome: "Martelo da Dragão ",min: "81",max: "103",taxa: "216",lvl: "105",imagem: "imagens/martelo24.bmp"},
		{nome: "Martelo Lendário ",min: "79",max: "103",taxa: "228",lvl: "108a",imagem: "imagens/martelo25.bmp"},
		{nome: "Martelo Fênix ",min: "94",max: "111",taxa: "228",lvl: "108",imagem: "imagens/martelo26.bmp"},
		

		{nome: "Martelo Negro ",min: "104",max: "121",taxa: "238",lvl: "115",imagem: "imagens/martelo27.bmp"}
	]

	$scope.foices= [
		{nome: "Bastão ",min: "1",max: "6",taxa: "45",lvl: "0",imagem: "imagens/foice1.bmp"},
		{nome: "Foice ",min: "3",max: "7",taxa: "54",lvl: "0",imagem: "imagens/foice2.bmp"},
		{nome: "Bill ",min: "5",max: "9",taxa: "62",lvl: "7",imagem: "imagens/foice3.bmp"},
		{nome: "Foice Larga ",min: "8",max: "13",taxa: "66",lvl: "10",imagem: "imagens/foice4.bmp"},
		{nome: "Foice de Chifres ",min: "9",max: "16",taxa: "65",lvl: "14",imagem: "imagens/foice5.bmp"},
		{nome: "Tridente ",min: "10",max: "19",taxa: "74",lvl: "16",imagem: "imagens/foice6.bmp"},
		{nome: "Foice Reforçada ",min: "11",max: "23",taxa: "81",lvl: "22",imagem: "imagens/foice7.bmp"},
		{nome: "Foice Dupla",min: "12",max: "27",taxa: "90",lvl: "30",imagem: "imagens/foice8.bmp"},
		{nome: "Foice do Mal",min: "13",max: "32",taxa: "90",lvl: "37",imagem: "imagens/foice9.bmp"},
		{nome: "Pássaro de Prata ",min: "15",max: "36",taxa: "94",lvl: "44",imagem: "imagens/foice10.bmp"},
		{nome: "Foice do Caos ",min: "17",max: "39",taxa: "98",lvl: "50",imagem: "imagens/foice11.bmp"},
		{nome: "Foice Titan ",min: "19",max: "44",taxa: "110",lvl: "55",imagem: "imagens/foice12.bmp"},
		{nome: "Styx ",min: "96",max: "22",taxa: "49",lvl: "60",imagem: "imagens/foice13.bmp"},
		{nome: "Asa do Dragão ",min: "23",max: "53",taxa: "135",lvl: "65",imagem: "imagens/foice14.bmp"},
		{nome: "Borboleta ",min: "25",max: "56",taxa: "151",lvl: "70",imagem: "imagens/foice15.bmp"},
		{nome: "Foice Mística ",min: "28",max: "61",taxa: "160",lvl: "75",imagem: "imagens/foice16.bmp"},
		{nome: "Hiper Foice ",min: "31",max: "66",taxa: "169",lvl: "80a",imagem: "imagens/foice17.bmp"},
		{nome: "Oráculo ",min: "35",max: "71",taxa: "178",lvl: "80b",imagem: "imagens/foice18.bmp"},
		{nome: "Imortal ",min: "39",max: "76",taxa: "185",lvl: "80c",imagem: "imagens/foice19.bmp"},
		{nome: "Foice Extrema ",min: "43",max: "82",taxa: "192",lvl: "80d",imagem: "imagens/foice20.bmp"},
		{nome: "Implacável ",min: "52",max: "95",taxa: "199",lvl: "100",imagem: "imagens/foice21.bmp"},
		{nome: "Foice da Morte ",min: "56",max: "102",taxa: "210",lvl: "102",imagem: "imagens/foice22.bmp"},
		{nome: "Foice Dragão ",min: "63",max: "109",taxa: "216",lvl: "105",imagem: "imagens/foice23.bmp"},
		{nome: "Foice Fênix ",min: "70",max: "117",taxa: "228",lvl: "108",imagem: "imagens/foice24.bmp"},
		{nome: "Foice Negra ",min: "79",max: "126",taxa: "240",lvl: "115",imagem: "imagens/foice25.bmp"},
	]

	$scope.arcos=[
		{nome: "Arco Pequeno",min: "1",max: "4",taxa: "21",lvl: "0",imagem: "imagens/itws101.bmp"},
		{nome: "Arco de Chifres ",min: "2",max: "5",taxa: "29",lvl: "0",imagem: "imagens/itws102.bmp"},
		{nome: "Arco de Mão ",min: "3",max: "7",taxa: "34",lvl: "0",imagem: "imagens/itws103.bmp"},
		{nome: "Arco ",min: "90",max: "4",taxa: "9",lvl: "6",imagem: "imagens/itws104.bmp"},
		{nome: "Arco de Batalha ",min: "5",max: "11",taxa: "49",lvl: "9",imagem: "imagens/itws105.bmp"},
		{nome: "Arco Grande ",min: "7",max: "13",taxa: "53",lvl: "15",imagem: "imagens/itws106.bmp"},
		{nome: "Arco de Guerra ",min: "9",max: "15",taxa: "56",lvl: "20",imagem: "imagens/itws107.bmp"},
		{nome: "Arco Grandioso ",min: "11",max: "16",taxa: "62",lvl: "25",imagem: "imagens/itws108.bmp"},
		{nome: "Mini-arco de Aço ",min: "12",max: "17",taxa: "68",lvl: "30",imagem: "imagens/itws109.bmp"},
		{nome: "Arco Duplo ",min: "14",max: "20",taxa: "70",lvl: "36",imagem: "imagens/itws110.bmp"},
		{nome: "Arco de Ossos ",min: "15",max: "21",taxa: "76",lvl: "41",imagem: "imagens/itws111.bmp"},
		{nome: "Arco Sagitarius ",min: "17",max: "25",taxa: "85",lvl: "47",imagem: "imagens/itws112.bmp"},
		{nome: "Arco Ancião ",min: "18",max: "27",taxa: "92",lvl: "53",imagem: "imagens/itws113.bmp"},
		{nome: "Arco Titan ",min: "20",max: "31",taxa: "98",lvl: "59",imagem: "imagens/itws114.bmp"},
		{nome: "Arco do Caos ",min: "23",max: "35",taxa: "85",lvl: "64",imagem: "imagens/itws115.bmp"},
		{nome: "Arco do Vento ",min: "24",max: "39",taxa: "112",lvl: "70",imagem: "imagens/itws116.bmp"},
		{nome: "Arco Antigo ",min: "27",max: "44",taxa: "120",lvl: "75",imagem: "imagens/itws117.bmp"},
		{nome: "Arco do Trovão ",min: "32",max: "49",taxa: "124",lvl: "80a",imagem: "imagens/itws118.bmp"},
		{nome: "Arco Onda ",min: "36",max: "54",taxa: "130",lvl: "80b",imagem: "imagens/itws119.bmp"},
		{nome: "Arco Grandioso ",min: "40",max: "59",taxa: "135",lvl: "80c",imagem: "imagens/itws120.bmp"},
		{nome: "Arco Mirage ",min: "45",max: "65",taxa: "144",lvl: "80d",imagem: "imagens/itws121.bmp"},
		{nome: "Arco Wyvern ",min: "54",max: "77",taxa: "138",lvl: "100",imagem: "imagens/itws123.bmp"},
		{nome: "Arco Mortal ",min: "60",max: "83",taxa: "158",lvl: "102",imagem: "imagens/itws1124.bmp"},
		{nome: "Arco Salamandra ",min: "70",max: "92",taxa: "166",lvl: "105",imagem: "imagens/itws125.bmp"},
		{nome: "Arco Cronus ",min: "80",max: "102",taxa: "178",lvl: "108",imagem: "imagens/itws126.bmp"},
		{nome: "Arco Negro",min: "90",max: "112",taxa: "188",lvl: "115",imagem: "imagens/itws127.bmp"},
	]

	$scope.espadas=[
		{nome: "Adaga ",min: "2",max: "3",taxa: "56",lvl: "0",imagem: "imagens/itws201.bmp"},
		{nome: "Adaga Celta",min: "2",max: "5",taxa: "62",lvl: "0",imagem: "imagens/itws202.bmp"},
		{nome: "Quebra-Espadas ",min: "3",max: "7",taxa: "52",lvl: "0",imagem: "imagens/itws203.bmp"},
		{nome: "Espada Curta",min: "4",max: "8",taxa: "44",lvl: "6",imagem: "imagens/itws204.bmp"},
		{nome: "Espada Longa ",min: "8",max: "13",taxa: "45",lvl: "9",imagem: "imagens/itws205.bmp"},
		{nome: "Espada Larga",min: "8",max: "12",taxa: "53",lvl: "13",imagem: "imagens/itws206.bmp"},
		{nome: "Lâmina ",min: "9",max: "14",taxa: "52",lvl: "17",imagem: "imagens/itws207.bmp"},
		{nome: "Espada do Templo ",min: "9",max: "15",taxa: "46",lvl: "24",imagem: "imagens/itws208.bmp"},
		{nome: "Espada Protetora",min: "12",max: "18",taxa: "56",lvl: "30",imagem: "imagens/itws209.bmp"},
		{nome: "Espada de Platina",min: "16",max: "26",taxa: "62",lvl: "37",imagem: "imagens/itws210.bmp"},
		{nome: "Claymore",min: "96",max: "14",taxa: "23",lvl: "43",imagem: "imagens/itws211.bmp"},
		{nome: "Slayer ",min: "96",max: "16",taxa: "27",lvl: "48",imagem: "imagens/itws212.bmp"},
		{nome: "Espada Gigante ",min: "22",max: "35",taxa: "100",lvl: "53",imagem: "imagens/itws213.bmp"},
		{nome: "Highlander ",min: "20",max: "31",taxa: "98",lvl: "57",imagem: "imagens/itws214.bmp"},
		{nome: "Espada Bastarda ",min: "26",max: "40",taxa: "114",lvl: "61",imagem: "imagens/itws215.bmp"},
		{nome: "Espada Fatal",min: "29",max: "44",taxa: "130",lvl: "65",imagem: "imagens/itws216.bmp"},
		{nome: "Espada Antiga",min: "26",max: "38",taxa: "120",lvl: "70",imagem: "imagens/itws217.bmp"},
		{nome: "Espada Gêmea",min: "35",max: "51",taxa: "142",lvl: "75",imagem: "imagens/itws218.bmp"},
		{nome: "Espada Salamandra",min: "40",max: "56",taxa: "150",lvl: "80a",imagem: "imagens/itws219.bmp"},
		{nome: "Espada Vingança",min: "36",max: "50",taxa: "156",lvl: "80b",imagem: "imagens/itws220.bmp"},
		{nome: "Espada Titan",min: "50",max: "66",taxa: "164",lvl: "80c",imagem: "imagens/itws221.bmp"},
		{nome: "Espada Wyvern",min: "39",max: "55",taxa: "170",lvl: "80d",imagem: "imagens/itws222.bmp"},
		{nome: "Espada Justiça",min: "54",max: "74",taxa: "164",lvl: "100",imagem: "imagens/itws224.bmp"},
		{nome: "Espada Extrema",min: "61",max: "85",taxa: "192",lvl: "102",imagem: "imagens/itws225.bmp"},
		{nome: "Espada Mirage",min: "73",max: "98",taxa: "199",lvl: "105",imagem: "imagens/itws226.bmp"},
		{nome: "Espada Lendária",min: "75",max: "99",taxa: "211",lvl: "108a",imagem: "imagens/itws227.bmp"},
		{nome: "Espada Tirbing",min: "85",max: "108",taxa: "211",lvl: "108",imagem: "imagens/itws228.bmp"},
		
		{nome: "Espada Negra",min: "97",max: "118",taxa: "223",lvl: "115",imagem: "imagens/itws229.bmp"},
	]

	$scope.lancas=[
		{nome: "Lança ",min: "2",max: "4",taxa: "34",lvl: "0",imagem: "imagens/itwt101.bmp"},
		{nome: "Lança de Guerra ",min: "3",max: "5",taxa: "38",lvl: "0",imagem: "imagens/itwt102.bmp"},
		{nome: "Lança Afiada ",min: "4",max: "6",taxa: "45",lvl: "0",imagem: "imagens/itwt103.bmp"},
		{nome: "Lança de Aço",min: "5",max: "7",taxa: "48",lvl: "6",imagem: "imagens/itwt104.bmp"},
		{nome: "Lança Dupla",min: "6",max: "10",taxa: "52",lvl: "11",imagem: "imagens/itwt105.bmp"},
		{nome: "Lança dos Elfos",min: "7",max: "11",taxa: "52",lvl: "16",imagem: "imagens/itwt106.bmp"},
		{nome: "Lança Fatal",min: "8",max: "13",taxa: "65",lvl: "22",imagem: "imagens/itwt107.bmp"},
		{nome: "Lança de Metal",min: "11",max: "16",taxa: "58",lvl: "30",imagem: "imagens/itwt108.bmp"},
		{nome: "Cobra",min: "12",max: "18",taxa: "62",lvl: "37",imagem: "imagens/itwt109.bmp"},
		{nome: "Lança Alada ",min: "13",max: "19",taxa: "68",lvl: "44",imagem: "imagens/itwt110.bmp"},
		{nome: "Lança Sagrada ",min: "15",max: "23",taxa: "80",lvl: "50",imagem: "imagens/itwt111.bmp"},
		{nome: "Tridente de Arremesso ",min: "17",max: "25",taxa: "72",lvl: "55",imagem: "imagens/itwt112.bmp"},
		{nome: "Lança Wyvern",min: "19",max: "28",taxa: "80",lvl: "60",imagem: "imagens/itwt113.bmp"},
		{nome: "Lança Retorcida",min: "22",max: "31",taxa: "96",lvl: "65",imagem: "imagens/itwt114.bmp"},
		{nome: "Link",min: "23",max: "34",taxa: "104",lvl: "70",imagem: "imagens/itwt115.bmp"},
		{nome: "Lança Mística ",min: "27",max: "38",taxa: "115",lvl: "75",imagem: "imagens/itwt116.bmp"},
		{nome: "Miragem",min: "30",max: "43",taxa: "124",lvl: "80a",imagem: "imagens/itwt117.bmp"},
		{nome: "Lança Extrema",min: "33",max: "48",taxa: "130",lvl: "80b",imagem: "imagens/itwt118.bmp"},
		{nome: "Lança do Dragão",min: "38",max: "53",taxa: "140",lvl: "80c",imagem: "imagens/itwt119.bmp"},
		{nome: "Lança Espinhosa",min: "43",max: "58",taxa: "148",lvl: "80d",imagem: "imagens/itwt120.bmp"},
		{nome: "Lança Imortal",min: "54",max: "68",taxa: "165",lvl: "100",imagem: "imagens/itwt122.bmp"},
		{nome: "Lança Herege",min: "59",max: "74",taxa: "172",lvl: "102",imagem: "imagens/itwt123.bmp"},
		{nome: "Lança Salamandra",min: "71",max: "90",taxa: "180",lvl: "105",imagem: "imagens/itwt124.bmp"},
		{nome: "Lança Cronus",min: "81",max: "100",taxa: "188",lvl: "108",imagem: "imagens/itwt125.bmp"},
		{nome: "Lança Negra",min: "91",max: "110",taxa: "198",lvl: "115",imagem: "imagens/itwt126.bmp"},
	]

	$scope.varinhas=[
		{nome: "Varinha ",min: "1",max: "4",taxa: "25",lvl: "0",imagem: "imagens/itwm101.bmp"},
		{nome: "Varinha Esférica",min: "2",max: "5",taxa: "31",lvl: "0",imagem: "imagens/itwm102.bmp"},
		{nome: "Varinha Obi",min: "4",max: "7",taxa: "36",lvl: "0",imagem: "imagens/itwm103.bmp"},
		{nome: "Cajado de Raízes",min: "6",max: "9",taxa: "38",lvl: "7",imagem: "imagens/itwm104.bmp"},
		{nome: "Cajado Suave ",min: "8",max: "13",taxa: "40",lvl: "11",imagem: "imagens/itwm105.bmp"},
		{nome: "Varinha dos Elfos",min: "7",max: "11",taxa: "44",lvl: "16",imagem: "imagens/itwm106.bmp"},
		{nome: "Varinha Druída",min: "9",max: "12",taxa: "50",lvl: "22",imagem: "imagens/itwm107.bmp"},
		{nome: "Cajado de Meditação",min: "10",max: "15",taxa: "54",lvl: "30",imagem: "imagens/itwm108.bmp"},
		{nome: "Cajado Esqueleto ",min: "12",max: "17",taxa: "66",lvl: "37",imagem: "imagens/itwm109.bmp"},
		{nome: "Cajado Mágico ",min: "14",max: "19",taxa: "68",lvl: "44",imagem: "imagens/itwm110.bmp"},
		{nome: "Varinha da Fé ",min: "12",max: "16",taxa: "70",lvl: "50",imagem: "imagens/itwm111.bmp"},
		{nome: "Cajado Leve ",min: "18",max: "23",taxa: "90",lvl: "55",imagem: "imagens/itwm112.bmp"},
		{nome: "Cajado do Caos ",min: "13",max: "19",taxa: "84",lvl: "60",imagem: "imagens/itwm113.bmp"},
		{nome: "Varinha Arch ",min: "19",max: "27",taxa: "98",lvl: "65",imagem: "imagens/itwm114.bmp"},
		{nome: "Varinha Mágica ",min: "15",max: "20",taxa: "125",lvl: "70",imagem: "imagens/itwm115.bmp"},
		{nome: "Cajado Mágico ",min: "24",max: "30",taxa: "130",lvl: "75",imagem: "imagens/itwm116.bmp"},
		{nome: "Varinha dos Apóstolos ",min: "23",max: "31",taxa: "140",lvl: "80a",imagem: "imagens/itwm117.bmp"},
		{nome: "Cajado Antigo ",min: "30",max: "38",taxa: "148",lvl: "80b",imagem: "imagens/itwm118.bmp"},
		{nome: "Cajado do Dragão ",min: "35",max: "42",taxa: "155",lvl: "80c",imagem: "imagens/itwm119.bmp"},
		{nome: "Varinha Wyvern ",min: "30",max: "39",taxa: "164",lvl: "80d",imagem: "imagens/itwm120.bmp"},
		{nome: "Varinha Oráculo ",min: "40",max: "45",taxa: "174",lvl: "100",imagem: "imagens/itwm122.bmp"},
		{nome: "Varinha Celestial",min: "51",max: "58",taxa: "183",lvl: "102",imagem: "imagens/itwm123.bmp"},
		{nome: "Cajado Astral",min: "63",max: "79",taxa: "193",lvl: "105",imagem: "imagens/itwm124.bmp"},
		{nome: "Varinha Freya",min: "64",max: "80",taxa: "203",lvl: "108a",imagem: "imagens/itwm125.bmp"},
		
		{nome: "Cajado Freya",min: "77",max: "94",taxa: "203",lvl: "108",imagem: "imagens/itwm126.bmp"},


		{nome: "Cajado Negro ",min: "88",max: "105",taxa: "213",lvl: "115",imagem: "imagens/itwm127.bmp"},
	]

	// Itens de Defesa

	$scope.armaduras=[
		{nome: "Traje de Batalha ",def: "12", abs: "0.9" ,lvl: "0",imagem: "imagens/itda102.bmp"},
		{nome: "Armadura Leve ",def: "20", abs: "1.4" ,lvl: "0",imagem: "imagens/itda103.bmp"},
		{nome: "Brigandine ",def: "38", abs: "2.0" ,lvl: "10",imagem: "imagens/itda104.bmp"},
		{nome: "Armadura de Ferro",def: "54", abs: "" ,lvl: "17",imagem: "imagens/itda105.bmp"},
		{nome: "Armadura Reforçada ",def: "70", abs: "" ,lvl: "22",imagem: "imagens/itda106.bmp"},
		{nome: "Armadura Peitoral ",def: "84", abs: "" ,lvl: "29",imagem: "imagens/itda107.bmp"},
		{nome: "Armadura Anelar ",def: "100", abs: "" ,lvl: "35",imagem: "imagens/itda108.bmp"},
		{nome: "Armadura de Escamas ",def: "120", abs: "" ,lvl: "39",imagem: "imagens/itda109.bmp"},
		{nome: "Armadura Sintética ",def: "140", abs: "" ,lvl: "43",imagem: "imagens/itda110.bmp"},
		{nome: "Armadura de Platina ",def: "160", abs: "" ,lvl: "47",imagem: "imagens/itda111.bmp"},
		{nome: "Armadura de Metal ",def: "180", abs: "" ,lvl: "51",imagem: "imagens/itda112.bmp"},
		{nome: "Armadura Suprema ",def: "190", abs: "" ,lvl: "55",imagem: "imagens/itda113.bmp"},
		{nome: "Armadura Lucy Khan ",def: "210", abs: "9.5" ,lvl: "55k",imagem: "imagens/itda171.bmp"},
		{nome: "Armadura Espinhosa ",def: "260", abs: "" ,lvl: "60",imagem: "imagens/itda114.bmp"},
		{nome: "Armadura Titan ",def: "270", abs: "" ,lvl: "65",imagem: "imagens/itda115.bmp"},
		{nome: "Armadura Extrema ",def: "270", abs: "" ,lvl: "70",imagem: "imagens/itda116.bmp"},
		{nome: "Armadura Antiga ",def: "290", abs: "" ,lvl: "75",imagem: "imagens/itda117.bmp"},
		{nome: "Armadura Nox Khan ",def: "300", abs: "12.9" ,lvl: "75k",imagem: "imagens/itda171.bmp"},
		{nome: "Armadura Minotauro ",def: "", abs: "" ,lvl: "80a",imagem: "imagens/itda118.bmp"},
		{nome: "Armadura Demoníaca ",def: "", abs: "" ,lvl: "80b",imagem: "imagens/itda119.bmp"},
		{nome: "Armadura Salamandra ",def: "", abs: "" ,lvl: "80c",imagem: "imagens/itda120.bmp"},
		{nome: "Armadura Wyvern ",def: "", abs: "" ,lvl: "80d",imagem: "imagens/itda121.bmp"},
		{nome: "Armadura Cealum Khan ",def: "400", abs: "19.0" ,lvl: "90k",imagem: "imagens/itda171.bmp"},
		{nome: "Armadura Fênix ",def: "", abs: "" ,lvl: "100a",imagem: "imagens/itda123.bmp"},
		{nome: "Armadura Ira Khan ",def: "420", abs: "23.5" ,lvl: "100k",imagem: "imagens/itda1171.bmp"},
		{nome: "Armadura Frenesi ",def: "", abs: "" ,lvl: "102",imagem: "imagens/itda124.bmp"},
		{nome: "Armadura Mágica ",def: "490", abs: "29.4" ,lvl: "103",imagem: "imagens/itda126.bmp"},
		{nome: "Armadura Highlander ",def: "", abs: "" ,lvl: "105",imagem: "imagens/itda125.bmp"},
		{nome: "Armadura Vir Khan ",def: "480", abs: "29.3" ,lvl: "105k",imagem: "imagens/itda171.bmp"},
		{nome: "Armadura Cronus ",def: "", abs: "" ,lvl: "108",imagem: "imagens/itda127.bmp"},
	]

	$scope.roupoes=[
		{nome: "Roupão",def: "10", abs: "0.8" ,lvl: "0",imagem: "imagens/idta202.bmp"},
		{nome: "Roupão Reforçada",def: "14", abs: "1.3" ,lvl: "06",imagem: "imagens/itda203.bmp"},
		{nome: "Roupão de Batalha",def: "20", abs: "1.7" ,lvl: "11",imagem: "imagens/itda204.bmp"},
		{nome: "Roupão de Elfo",def: "30", abs: "2.2" ,lvl: "17",imagem: "imagens/itda205.bmp"},
		{nome: "Roupão Druída",def: "40", abs: "2.8" ,lvl: "23",imagem: "imagens/itda206.bmp"},
		{nome: "Roupão Nymph",def: "52", abs: "3.4" ,lvl: "29",imagem: "imagens/itda207.bmp"},
		{nome: "Roupão dos Aprendizes",def: "72", abs: "4.0" ,lvl: "35",imagem: "imagens/itda208.bmp"},
		{nome: "Roupão dos Discípulos",def: "85", abs: "4.8" ,lvl: "39",imagem: "imagens/itda209.bmp"},
		{nome: "Roupão dos Mestres",def: "100", abs: "5.3" ,lvl: "43",imagem: "imagens/itda210.bmp"},
		{nome: "Roupão dos Arch",def: "120", abs: "5.9" ,lvl: "47",imagem: "imagens/itda211.bmp"},
		{nome: "Roupão dos Santo",def: "140", abs: "6.4" ,lvl: "51",imagem: "imagens/itda212.bmp"},
		{nome: "Roupão dos Real",def: "155", abs: "7.0" ,lvl: "55",imagem: "imagens/itda213.bmp"},
		{nome: "Roupão Lucy Khan",def: "", abs: "" ,lvl: "55k",imagem: "imagens/itda171.bmp"},
		{nome: "Roupão Místico",def: "170", abs: "7.5" ,lvl: "60",imagem: "imagens/itda214.bmp"},
		{nome: "Roupão Divino",def: "190", abs: "8.1" ,lvl: "65",imagem: "imagens/itda215.bmp"},
		{nome: "Roupão de Episcopisas",def: "210", abs: "8.9" ,lvl: "70",imagem: "imagens/itda216.bmp"},
		{nome: "Roupão Celestial",def: "230", abs: "9.6" ,lvl: "75",imagem: "imagens/itda217.bmp"},
		{nome: "Roupão Nox Khan",def: "", abs: "" ,lvl: "75k",imagem: "imagens/itda171.bmp"},
		{nome: "Roupão da Salvação",def: "255", abs: "10.8" ,lvl: "80a",imagem: "imagens/itda218.bmp"},
		{nome: "Roupão Alquimista",def: "270", abs: "12.6" ,lvl: "80b",imagem: "imagens/itda219.bmp"},
		{nome: "Roupão Astral",def: "290", abs: "14.4" ,lvl: "80c",imagem: "imagens/itda220.bmp"},
		{nome: "Roupão Archon",def: "310", abs: "16.5" ,lvl: "80d",imagem: "imagens/itda221.bmp"},
		{nome: "Roupão Cealum Khan",def: "", abs: "" ,lvl: "90k" ,imagem: "imagens/itda171.bmp"},
		{nome: "Roupão Ruah",def: "350", abs: "21.1" ,lvl: "100a",imagem: "imagens/itda223.bmp"},
		{nome: "Roupão Ira Khan",def: "", abs: "" ,lvl: "100k",imagem: "imagens/itda171.bmp"},
		{nome: "Roupão Eterno",def: "370", abs: "23.3" ,lvl: "102",imagem: "imagens/itda224.bmp"},
		{nome: "Roupão Arcanjo",def: "390", abs: "24.6" ,lvl: "105",imagem: "imagens/itda225.bmp"},
		{nome: "Roupão Vir Khan",def: "", abs: "" ,lvl: "105k",imagem: "imagens/itda171	.bmp"},
		{nome: "Roupão Freyja",def: "410", abs: "26.8" ,lvl: "108",imagem: "imagens/itda226.bmp"},
	]

	$scope.escudos=[
		{nome: "Escudo de Madeira",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Tampa",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Quebra-Aço",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Escudo Kite",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Escudo Torre",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Escudo Metálico",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Scutum",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Escudo Chama",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Escudo Garra",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Escudo Alado",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Escudo Grande",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Escudo Espinhoso",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Escudo Grandioso",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Escudo Extremo",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Escudo Gladiador",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Escudo Sintético",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Escudo Titan",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Escudo Místico",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Escudo Vampiro",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Escudo Fenix",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Escudo da Morte",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Escudo Inferno",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Escudo Cronus",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
	]

	$scope.orbitais=[
		{nome: "Amuleto Pérola",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Esfera Cristalina",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Esfera Prismática",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Amuleto de Ossos",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Amuleto Caveira",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Orbital",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Orbital Sagrado",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Orbital Arch",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Lua Negra",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Esfera Cerimonial",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Amuleto Orbital",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Esfera Harmônica",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Angel",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Lúcifer",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Orbital Astral",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Rune Beads",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Orbital da Criação",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Mundane",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Amuleto Salamandra",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Cosmos",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Alma Negra",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Orbital Arvenus",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Orbital de Rosário",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Orbital Freya",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
	]

	$scope.luvas=[
		{nome: "Luvas",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Protetores Leves",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Protetores de Metal",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Luvas Rijas",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Luvas de Aço",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Luvas Góticas",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Luvas de Guerra",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Luvas de Metal",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Luvas Sagradas",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Luvas Grandes",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Luvas de Bronze",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Luvas Gigantes",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Luvas Titan",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Luvas Grandiosas",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Luvas de Marfim",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Luvas Santas",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Luvas de Diamante",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Luvas Anjo",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Luvas Antigas",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Luvas Inferno",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Luvas Fênix",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Luvas Frenesi",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Luvas Cronus",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
	]

	$scope.braceletes=[
		{nome: "Bracelete Leve",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Bracelete Longo",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Bracelete Largo",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Bracelete Dobra",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Bracelete Escama",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Bracelete Elfo",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Bracelete Rijo",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Bracelete Mecânico",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Bracelete Alado",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Bracelete Grande",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Bracelete Grandioso",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Bracelete Mágico",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Bracelete Espinhoso",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Bracelete da Justiça",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Bracelete Minotauro",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Bracelete de Metal",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Bracelete Titan",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Bracelete Santo",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Bracelete Wyvern",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Bracelete Inferno",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Bracelete Fênix",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Bracelete Frenesi",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Bracelete Cronus",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
	]

	$scope.botas=[
		{nome: "Botas",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Botas de Elfo",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Botas de Ferro",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Botas Longas",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Botas de Aço",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Botas de Platina",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Botas de Bronze",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Botas de Guerra",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Botas Mecânicas",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Botas do Caos",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Botas Sagradas",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Botas Espinhosas",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Botas Grandiosas",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Botas Aladas",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Botas Titan",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Botas Santas",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Botas Wyvern",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Botas Encantadas",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Botas Reais",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Botas Inferno",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Botas Fênix",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Botas Frenesi",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
		{nome: "Botas Cronus",def: "", abs: "" ,lvl: "108",imagem: "imagens/itwm127.bmp"},
	]






	if ($scope.item != null) {
		$scope.perfeito.min = $scope.item.min;
		$scope.perfeito.max = $scope.item.max;
		$scope.perfeito.taxa = $scope.item.taxa;
	};



	

	$scope.calcular = function(){
		if ($scope.item != null) {
			if ($scope.age <=9) {
				 $scope.resultadoMin = parseInt($scope.min) - (parseInt($scope.item.min) + parseInt($scope.age));
				 $scope.resultadoMax = parseInt($scope.max) - (parseInt($scope.item.max) + parseInt($scope.age));
				 $scope.resultadoTaxa = parseInt($scope.taxa) - (parseInt($scope.item.taxa) + parseInt($scope.age * 10));
				 if ($scope.resultadoMax == 0 && $scope.resultadoMax == $scope.resultadoMin && $scope.resultadoTaxa == 0) {
				 	$scope.resultado = "Item perfeito  -0  / -0 " + " Taxa de Ataque = " + $scope.resultadoTaxa;
				 }else{3
				 	$scope.resultado = $scope.resultadoMin + " / " + $scope.resultadoMax + "Taxa de ataque" + $scope.resultadoTaxa;
				 }
			}else if($scope.age > 9){
				$scope.resultadoMin = parseInt($scope.min) - (parseInt($scope.item.min) + parseInt( ($scope.age - 9) *2 ) + 9 );
				$scope.resultadoMax = parseInt($scope.max) - (parseInt($scope.item.max) + parseInt( ($scope.age - 9) *2 ) + 9 );
				$scope.resultadoTaxa = parseInt($scope.taxa) - (parseInt($scope.item.taxa) + parseInt($scope.age * 10));
				 if ($scope.resultadoMax == 0 && $scope.resultadoMax == $scope.resultadoMin) {
				 	$scope.resultado = "Item perfeito  -0  / -0" + " Taxa de Ataque = " + $scope.resultadoTaxa;
				 }else{
				 	$scope.resultado = $scope.resultadoMin + " / " + $scope.resultadoMax  + " Taxa  = " + $scope.resultadoTaxa;
				 }
			}
		}else{
			console.log("Selecione o item antes de calcular");
		}
	}

	$scope.calcular2 = function(){
		if ($scope.item != null) {
			if ($scope.age <=9) {
				 $scope.resultadoMin = parseInt($scope.min) - (parseInt($scope.item.min) + parseInt($scope.age));
				 $scope.resultadoMax = parseInt($scope.max) - (parseInt($scope.item.max) + parseInt($scope.age));
				 $scope.resultadoTaxa = parseInt($scope.taxa) - parseInt($scope.item.taxa);
				 if ($scope.resultadoMax == 0 && $scope.resultadoMax == $scope.resultadoMin && $scope.resultadoTaxa == 0) {
				 	$scope.resultado = "Item perfeito  -0  / -0 " + " Taxa de Ataque = " + $scope.resultadoTaxa;
				 }else{3
				 	$scope.resultado = $scope.resultadoMin + " / " + $scope.resultadoMax + "Taxa de ataque" + $scope.resultadoTaxa;
				 }
			}else if($scope.age > 9){
				$scope.resultadoMin = parseInt($scope.min) - (parseInt($scope.item.min) + parseInt( ($scope.age - 9) *2 ) + 9 );
				$scope.resultadoMax = parseInt($scope.max) - (parseInt($scope.item.max) + parseInt( ($scope.age - 9) *2 ) + 9 );
				$scope.resultadoTaxa = parseInt($scope.taxa) - parseInt($scope.item.taxa);
				 if ($scope.resultadoMax == 0 && $scope.resultadoMax == $scope.resultadoMin) {
				 	$scope.resultado = "Item perfeito  -0  / -0" + " Taxa de Ataque = " + $scope.resultadoTaxa;
				 }else{
				 	$scope.resultado = $scope.resultadoMin + " / " + $scope.resultadoMax  + " Taxa de ataque " + $scope.resultadoTaxa;
				 }
			}
		}else{
			console.log("Selecione o item antes de calcular");
		}
	}







	$scope.preencher = function(){
			$scope.min = $scope.item.min;
			$scope.max = $scope.item.max;
			$scope.taxa = $scope.item.taxa;
	}
});