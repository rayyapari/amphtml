/**
 * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A whitelist of djb2a hashes of publisher origins.
 * @const {!Array<string>}
 */
export const ORIGIN_WHITELIST = [
  '1005249088',
  '1006163429',
  '1008162951',
  '10089108',
  '1010750108',
  '101608808',
  '1019348494',
  '1024745460',
  '1025683127',
  '1033170015',
  '1040387537',
  '1042067194',
  '1048639639',
  '1048768124',
  '1055309246',
  '1061774354',
  '1066656902',
  '1075430814',
  '1080553171',
  '1081382723',
  '1085278050',
  '1087738722',
  '108933955',
  '1097876642',
  '1098115586',
  '1120549175',
  '1122637707',
  '1123796379',
  '1137284944',
  '1148058575',
  '1151862878',
  '1158106191',
  '1162517776',
  '1167928101',
  '1170971680',
  '1172399292',
  '1180555863',
  '1182996899',
  '1188221598',
  '1191530385',
  '1193086302',
  '1196288955',
  '1203175957',
  '1203629527',
  '1206202368',
  '1209396307',
  '1210508580',
  '1212905960',
  '1219663970',
  '1221946827',
  '1223948430',
  '1224563123',
  '1224575240',
  '122776143',
  '1230010468',
  '1235870422',
  '1239612924',
  '1252045233',
  '1266686880',
  '1267058499',
  '1271217363',
  '1271836085',
  '1272420392',
  '1275112483',
  '1279420495',
  '128315777',
  '1291285285',
  '129196458',
  '1296373605',
  '1304908597',
  '1314122247',
  '1323716407',
  '1331021272',
  '1332628692',
  '1337085136',
  '1343032467',
  '1343153594',
  '1348111506',
  '1358036688',
  '1358275160',
  '1362700107',
  '1366298771',
  '136948846',
  '1370863654',
  '1382180463',
  '1384161523',
  '1384885545',
  '1390195319',
  '1390422041',
  '1391355679',
  '1392973808',
  '1401234945',
  '1403015859',
  '1406014587',
  '1408213495',
  '1409815047',
  '1416203172',
  '1416336576',
  '1420964370',
  '1424038674',
  '1426205130',
  '1426908974',
  '142793127',
  '1429768323',
  '1433535079',
  '1436589466',
  '1451865411',
  '1452555948',
  '1452631355',
  '1454471704',
  '1456452353',
  '1462086116',
  '1463873379',
  '1472537769',
  '1474107485',
  '1476740172',
  '1485177716',
  '1491204959',
  '1495909416',
  '1502183300',
  '1502183303',
  '1506356073',
  '1510693494',
  '1512200976',
  '1515192136',
  '1516044894',
  '1516712134',
  '1527869901',
  '1527955987',
  '1531622827',
  '1542113246',
  '1542890108',
  '1544071036',
  '1544904918',
  '154680092',
  '1548043628',
  '1551216225',
  '1554302139',
  '1560556568',
  '156105329',
  '1565761663',
  '1568645882',
  '1574632236',
  '1581752952',
  '1587531568',
  '1597805481',
  '1598215278',
  '1604714840',
  '1605964375',
  '1606771939',
  '1606845272',
  '1607726622',
  '1616084341',
  '1618633174',
  '1628432066',
  '1629009934',
  '1633699767',
  '1635597923',
  '1638733129',
  '1639295851',
  '1639843601',
  '1641361303',
  '1641755208',
  '1645367571',
  '164958789',
  '1651834381',
  '165218748',
  '1657655384',
  '166080441',
  '166550074',
  '167065142',
  '167457365',
  '1686480925',
  '1692205821',
  '1696562222',
  '1712515810',
  '172062822',
  '1721539702',
  '1727000213',
  '1729406438',
  '1734343726',
  '1741775485',
  '1746787055',
  '1750274567',
  '1752199172',
  '1755487660',
  '1758506884',
  '176099546',
  '1762075722',
  '1762779619',
  '1765761661',
  '1766408482',
  '1777879957',
  '1778814731',
  '1782415871',
  '1786821707',
  '1790421447',
  '1793364122',
  '1796631487',
  '179954814',
  '1799580062',
  '1804754165',
  '1814333326',
  '1820719129',
  '1828302437',
  '1831449632',
  '1842365929',
  '1844097179',
  '185695994',
  '1857703569',
  '1862429134',
  '1866288580',
  '1868825623',
  '1873175698',
  '1878840548',
  '188153886',
  '1881549152',
  '1885949806',
  '1890671223',
  '1890684493',
  '1891136033',
  '1892894796',
  '1897412628',
  '1897877027',
  '190058212',
  '1911273138',
  '1914691069',
  '1916053925',
  '1921891253',
  '19233369',
  '1924394550',
  '1926444709',
  '192946894',
  '1932332195',
  '1934543421',
  '1938906399',
  '1944707380',
  '1948987049',
  '1956324539',
  '1958476175',
  '1960309827',
  '1960384540',
  '1969495793',
  '197478601',
  '1980609434',
  '198514785',
  '2003114268',
  '200513980',
  '2025148527',
  '2025653254',
  '2034674542',
  '2038626037',
  '2038733725',
  '2045713344',
  '2050218658',
  '2051204756',
  '2052997999',
  '2062991370',
  '2064945552',
  '2068779408',
  '2072157691',
  '2072267213',
  '2076974480',
  '2077125460',
  '208348204',
  '2084091630',
  '2085643881',
  '209024299',
  '2105278890',
  '2109740133',
  '2114974219',
  '2115738579',
  '2116825342',
  '2117678752',
  '2118239665',
  '2124375454',
  '2126860507',
  '212690086',
  '2128662947',
  '2130032338',
  '2131418359',
  '2134891083',
  '2138194233',
  '2139925877',
  '2150296095',
  '2151200413',
  '2160565275',
  '2160997979',
  '2163333100',
  '2164891421',
  '21653271',
  '2172705717',
  '218358682',
  '2183916165',
  '2185544172',
  '2193197883',
  '2199838184',
  '220103233',
  '220632861',
  '2207832807',
  '2214432888',
  '2221548842',
  '2231215830',
  '2232562594',
  '2236849121',
  '2246978037',
  '2247419316',
  '2250390055',
  '2250762825',
  '2252559194',
  '2254619785',
  '2271213671',
  '2275977064',
  '2277458929',
  '2278516260',
  '2284332078',
  '2299758819',
  '2311290044',
  '2313067530',
  '2319346288',
  '2325333010',
  '2326328585',
  '2342924379',
  '234914730',
  '2355703345',
  '2360854839',
  '2362191459',
  '2373437534',
  '2374338088',
  '2375389254',
  '2380804515',
  '2388222966',
  '2391306573',
  '2393754227',
  '2406112565',
  '2408225607',
  '2413038656',
  '2414533450',
  '2415015357',
  '241505564',
  '2422198952',
  '2426360694',
  '2427371871',
  '2428857403',
  '2434633986',
  '2437839027',
  '2438549543',
  '2450881433',
  '2451485116',
  '2454481433',
  '2465244303',
  '2471412274',
  '2472591333',
  '2479885882',
  '2480671357',
  '2483800093',
  '2486258543',
  '2487828098',
  '2490491327',
  '2491279653',
  '2497925282',
  '2498415300',
  '2500743291',
  '25024500',
  '250464294',
  '2512768819',
  '2514009950',
  '2514987571',
  '2517493756',
  '251839354',
  '25231870',
  '2529138038',
  '2529319010',
  '2540030627',
  '255752794',
  '2563128128',
  '2564618500',
  '2565653830',
  '2569424332',
  '2580152873',
  '2587850265',
  '2588277885',
  '2600368355',
  '2602595202',
  '2606715995',
  '2611729722',
  '2612967453',
  '2613072379',
  '2616846056',
  '2619537797',
  '2627761745',
  '2629810525',
  '2632194804',
  '2635588792',
  '2636391541',
  '2637085339',
  '2639830307',
  '2652634921',
  '2662207691',
  '2671290557',
  '2672599929',
  '2676022422',
  '2678501748',
  '2688673784',
  '2689355865',
  '2690235168',
  '2702577685',
  '2705736432',
  '270580042',
  '2713112922',
  '2718273594',
  '2718446350',
  '2720496885',
  '2723434276',
  '2725145135',
  '2731883839',
  '2732398879',
  '2734313767',
  '273580543',
  '2738155690',
  '2741673809',
  '2749835187',
  '2754997109',
  '2755153627',
  '2759976952',
  '2761508292',
  '2762302648',
  '2766106524',
  '2766754689',
  '2767961054',
  '2769442224',
  '2771839729',
  '2774175302',
  '2780639696',
  '2784212793',
  '2784479860',
  '2787853368',
  '2790502057',
  '2791249547',
  '2795182078',
  '2797839121',
  '2797844367',
  '2798104093',
  '2803957366',
  '2812672743',
  '2814269253',
  '2820864954',
  '2825564215',
  '2830660705',
  '2835331287',
  '283661147',
  '2845803411',
  '2852627326',
  '2861134475',
  '2866448207',
  '2866470331',
  '2870769104',
  '2872980659',
  '288246341',
  '2885388648',
  '2887960156',
  '2889518419',
  '2893467144',
  '2893590542',
  '2911378586',
  '2914243153',
  '2917909858',
  '2918230434',
  '2919447987',
  '2927763036',
  '2930531110',
  '2930818498',
  '2933287666',
  '2933678691',
  '2934412348',
  '2939338957',
  '2941207893',
  '294281365',
  '294281662',
  '2951025154',
  '2955070851',
  '296084766',
  '2972849537',
  '2981581097',
  '3003621454',
  '3017572169',
  '3018496372',
  '3018644774',
  '3022092377',
  '302251478',
  '3024284791',
  '3028558767',
  '3033234915',
  '3034807703',
  '3036809290',
  '303732921',
  '3040972817',
  '3047184436',
  '3057278033',
  '3060519019',
  '3060985947',
  '3063651839',
  '3071986971',
  '3075313860',
  '3090387299',
  '3090399922',
  '3092172140',
  '3107121214',
  '3108333779',
  '3109674920',
  '3121167307',
  '3129729985',
  '313079991',
  '3132507840',
  '3133369938',
  '3144086645',
  '3144741080',
  '3153172095',
  '3156001180',
  '3162265419',
  '3172876126',
  '3176449798',
  '3181090214',
  '3185535902',
  '3188249139',
  '3188949253',
  '3189406311',
  '3200093935',
  '3201739013',
  '3208039641',
  '3213623864',
  '3216947982',
  '3226517851',
  '323546264',
  '3238374737',
  '3240528713',
  '3244251087',
  '3246119198',
  '3250723869',
  '3252080663',
  '3256754508',
  '3259979025',
  '3261687030',
  '3263349802',
  '3263974103',
  '3268659322',
  '3271330177',
  '3283747143',
  '3284374556',
  '3285310371',
  '32924227',
  '3295776646',
  '3301018689',
  '3301688194',
  '3307671928',
  '3308888367',
  '3309952347',
  '3319768647',
  '3320829318',
  '3322156041',
  '3326846086',
  '3341054457',
  '334796489',
  '3348379104',
  '3349409886',
  '3353312560',
  '3355368229',
  '3355865416',
  '335855777',
  '335993804',
  '3361466716',
  '3362397554',
  '3367171293',
  '3376790055',
  '3377688480',
  '3381390900',
  '3385268402',
  '3385846727',
  '3387204737',
  '338844244',
  '3390751743',
  '3394315494',
  '3394334006',
  '3402978750',
  '3408249191',
  '3412968150',
  '3416831537',
  '3422087589',
  '3424311896',
  '3429649351',
  '3436742277',
  '3437958748',
  '3446215673',
  '3448620799',
  '3450221390',
  '3451824873',
  '3455711044',
  '3458310975',
  '3460779095',
  '3464002149',
  '3473901382',
  '3494887100',
  '3498056818',
  '3500123957',
  '3501893757',
  '3506413408',
  '3512587025',
  '351733085',
  '3523014533',
  '3523382932',
  '35263365',
  '353380306',
  '3535681127',
  '354082441',
  '3549522247',
  '3550596029',
  '3551433075',
  '3552657708',
  '3561349461',
  '3568064118',
  '3572504894',
  '3574354948',
  '3584992110',
  '3585356855',
  '3589838638',
  '3591084947',
  '3591311390',
  '3594356251',
  '3607050633',
  '3623074634',
  '3625812674',
  '3625817820',
  '3635562717',
  '3638406088',
  '363894702',
  '3651158166',
  '365125059',
  '3652728877',
  '3655120568',
  '365605518',
  '3656736643',
  '3657625030',
  '3662429216',
  '3670522374',
  '3673866953',
  '3685844947',
  '3692367215',
  '3695202375',
  '369644343',
  '3700425047',
  '3700982698',
  '3710911628',
  '3711744991',
  '3712090763',
  '3718288426',
  '3723719135',
  '3739222329',
  '3739723588',
  '3741803823',
  '3742076373',
  '3743398870',
  '3747063085',
  '3748953276',
  '3751563702',
  '3768651282',
  '3774834930',
  '3782187505',
  '3783616226',
  '3785031815',
  '3802272349',
  '3803427289',
  '3808515023',
  '3817759242',
  '3821795909',
  '3828921363',
  '382915004',
  '3835330948',
  '3835931824',
  '3838983789',
  '3840525739',
  '3841844405',
  '3842213279',
  '3866956400',
  '3867683259',
  '3872981885',
  '3882281943',
  '3882775575',
  '3887937944',
  '3902596111',
  '3907965689',
  '3916735828',
  '3919621757',
  '3926983707',
  '3931371606',
  '3935672072',
  '3942169396',
  '39435537',
  '3949846101',
  '3950676371',
  '3952253013',
  '3952985875',
  '3960376034',
  '3964022265',
  '3969333164',
  '3980734000',
  '3981323989',
  '3984648422',
  '398689081',
  '3989863158',
  '399163616',
  '4011166599',
  '4012569232',
  '4015960781',
  '402077837',
  '4022635071',
  '4031427958',
  '4038419154',
  '4038719404',
  '4040963526',
  '4045001232',
  '4045348626',
  '4047076163',
  '4050194446',
  '4051110478',
  '4053566461',
  '4062202631',
  '4064403033',
  '4067292809',
  '4071169494',
  '4072394641',
  '4083044353',
  '4084194935',
  '4092369519',
  '4092664937',
  '4096098894',
  '4097039999',
  '4098138342',
  '4100429993',
  '4101484574',
  '4102232185',
  '410737467',
  '4107833758',
  '4109200270',
  '4118683051',
  '4123388433',
  '4126100909',
  '4127212193',
  '4127351496',
  '4129698325',
  '4130370977',
  '4136314176',
  '4137128901',
  '4137746800',
  '4138310485',
  '4138748709',
  '4139415765',
  '4140762491',
  '414191242',
  '4143625838',
  '4158727075',
  '416271463',
  '4162923732',
  '4165850368',
  '4166688207',
  '4171920376',
  '4177803870',
  '4188696195',
  '4189589756',
  '4189681769',
  '4190697962',
  '4192009492',
  '4192906772',
  '4194824130',
  '4195946149',
  '4199121874',
  '4200069764',
  '4205027822',
  '4205379393',
  '4206479264',
  '4214687327',
  '4218607244',
  '4220526267',
  '4225558487',
  '4236710113',
  '4237053731',
  '4237182114',
  '4237691393',
  '4248203292',
  '4249010776',
  '4249223952',
  '4265092200',
  '4269692612',
  '4273375831',
  '4278046063',
  '4279918903',
  '4280929457',
  '4282579220',
  '4283958960',
  '4286009170',
  '4287324892',
  '4288013307',
  '428973607',
  '4292132695',
  '431449824',
  '436035672',
  '436895478',
  '4389594',
  '446783407',
  '451861333',
  '455553168',
  '468972428',
  '473408210',
  '475325125',
  '480050636',
  '481608910',
  '497560025',
  '508331528',
  '509623217',
  '509801075',
  '510469576',
  '52068258',
  '524581881',
  '525657889',
  '535848262',
  '542002382',
  '54455908',
  '552831033',
  '56119367',
  '589348565',
  '590180088',
  '590449081',
  '605645428',
  '607649949',
  '613252162',
  '616398681',
  '616652136',
  '620434036',
  '628256541',
  '630124302',
  '637590687',
  '646925241',
  '649068147',
  '663752382',
  '664849843',
  '666552315',
  '667802223',
  '672304730',
  '673490260',
  '675617839',
  '676286387',
  '679226261',
  '681317506',
  '684496063',
  '687924735',
  '690204840',
  '699169033',
  '699554795',
  '699835401',
  '708478954',
  '709875223',
  '721006546',
  '722659024',
  '724181429',
  '738209012',
  '740460396',
  '749072475',
  '750731789',
  '759835262',
  '760645918',
  '76243793',
  '763580606',
  '764546410',
  '769246051',
  '770400223',
  '773697188',
  '777846327',
  '779185847',
  '781950191',
  '785278645',
  '791888271',
  '793360597',
  '795111685',
  '799038630',
  '802940860',
  '803626326',
  '805461297',
  '809525143',
  '812914966',
  '817596813',
  '826702818',
  '829747121',
  '830059440',
  '834917366',
  '836634675',
  '839663198',
  '840748945',
  '845690173',
  '851918419',
  '853535426',
  '855882027',
  '856215399',
  '865387614',
  '870075114',
  '878041739',
  '884037848',
  '884942273',
  '885000263',
  '886030867',
  '887992794',
  '888009729',
  '9021761',
  '904920502',
  '90677328',
  '907695148',
  '911963500',
  '919166850',
  '926902921',
  '92732745',
  '92829579',
  '93038994',
  '930681418',
  '932642421',
  '932940871',
  '938755445',
  '939810501',
  '947303209',
  '956771599',
  '958749034',
  '959889676',
  '960466505',
  '962380673',
  '963095446',
  '965728075',
  '968466010',
  '973612916',
  '976603789',
  '978364597',
  '9851868',
  '986539863',
  '988140002',
  '989444878',
  '990312922',
];