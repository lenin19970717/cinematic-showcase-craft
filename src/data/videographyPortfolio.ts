// Videography portfolio data.
// Titles are the original YouTube titles (fetched from the videos themselves).
// "Frames of LENIN" channel: https://www.youtube.com/@framesoflenin

export interface YouTubeVideo {
  /** YouTube video ID */
  id: string;
  /** Original YouTube title */
  title: string;
  /** Short label shown above the title (own creations only) */
  label?: string;
  /** Link exactly as supplied, when one was supplied */
  url?: string;
}

export interface YouTubePlaylist {
  id: string;
  title: string;
  count: number;
  coverVideoId: string;
}

export const CHANNEL_URL = "https://www.youtube.com/@framesoflenin";

/** Own creations — links supplied directly */
export const ownCreations: YouTubeVideo[] = [
  {
    "id": "yhJ6x0VmzzQ",
    "title": "BEYOND EXISTENCE | Episode 01 — The History of the Universe #universe #ai #aivideo #documentary #1m",
    "label": "AI Video Documentary",
    "url": "https://youtu.be/yhJ6x0VmzzQ?si=iiILSNvJue77vR3f"
  },
  {
    "id": "HZ1mrhi5Ecg",
    "title": "Waste to Wonder #Entrepreneurs #promotion #story #localbusiness #sustainability #farming #1m",
    "label": "Waste to Wonder Story",
    "url": "https://youtu.be/HZ1mrhi5Ecg?si=SOshr17XUC6UwESw"
  }
];

/** Full-length videos from the channel's Videos tab */
export const channelVideos: YouTubeVideo[] = [
  {
    "id": "EO_z3LFccB8",
    "title": "SunSet Videography 2  #sunset #videography #lightandshade  #nature #naturelovers #arrahman #1k #fyp"
  },
  {
    "id": "hdD-sCCUfLo",
    "title": "Quotes Videographey1 #hometown #videography #quotes #nature #destination #photography #fyp #1m #1k "
  },
  {
    "id": "adsbDleyHhI",
    "title": "அலங்காரா நல்லூரா  ...Alangara Nalluraa .. #nallurkanthasuwamikovil #videography #quotes #devine"
  },
  {
    "id": "yiYsRvPClQI",
    "title": "Teaser .. சம்பூர் கொக்கட்டி காட்டேரி அம்மன் ஆலயம் . மடை "
  },
  {
    "id": "vnPyAuqNtAs",
    "title": "LIGHTHOUSE VIDEOGRAPHY #lighthouse #vlog #videography #nature #sampur #trincomalee"
  },
  {
    "id": "jGjoUrLnZ_Y",
    "title": "walking BEACH VIDEOGRAPHY 2 #beach #videography"
  },
  {
    "id": "C-Usmja11YA",
    "title": "videography field with Natural. #nature #videography"
  },
  {
    "id": "RH3r7jwQiA0",
    "title": "சம்பூர் கொக்கட்டி காடேறி அம்மன் வழிபாடு"
  }
];

/** Playlists on the channel */
export const channelPlaylists: YouTubePlaylist[] = [
  {
    "id": "PLLZLGcSjZG2i2UxG7m2xXw2NuzhMG7cBn",
    "title": "story telling",
    "count": 7,
    "coverVideoId": "EO_z3LFccB8"
  },
  {
    "id": "PLLZLGcSjZG2j1HuCsZkdPSNAToflIe23V",
    "title": "Videography",
    "count": 90,
    "coverVideoId": "hdD-sCCUfLo"
  }
];

/** Shorts from the channel's Shorts tab (newest first) */
export const channelShorts: YouTubeVideo[] = [
  {
    "id": "TEuLrN2eksk",
    "title": "🌳 #nature #videography #shorts #Netruponavai #song #quotes #love #life #phylosophy #1m #100k #fyp"
  },
  {
    "id": "BlZu-ClwfWI",
    "title": "🥹 #prima #trincomale #view #seaview #harbour #trincomalee #videography #quotes #shorts #1m #1k #fyp"
  },
  {
    "id": "toYfY0w0LRw",
    "title": "🌝 #moon #fullmoon #videography #nature #night #nightvideography #naturelovers #natural #1m #1k #fyp"
  },
  {
    "id": "q2bTC6uT72c",
    "title": "🙏#sampur #vinayagar #kovil #temple #videography #shorts #lightandshade #cinemotography #1m #fypシ #1k"
  },
  {
    "id": "SyaVz1gciPQ",
    "title": "🙏#god #sky #videography #rain #dark #spritual #universe #godsword #quotes #nature #naturelovers"
  },
  {
    "id": "fjlH6AQ_SmI",
    "title": "last  📿🙏🛕 #nallurkanthasuwamikovil #lastnight #devotional #devine #videography #lightandshade #1k"
  },
  {
    "id": "F-vC5240M4w",
    "title": "🛕📿#nallurkanthasuwamikovil #therthalthiruvizha #nallurkovil #jaffna #videography #shorts #1k #fyp"
  },
  {
    "id": "RgCLogZrUWE",
    "title": "appa 🧑‍🍼 #appa #missyou #father #missyou_status #nature #videography #naturelovers #natural #1k #1m"
  },
  {
    "id": "oOjS-deoHPo",
    "title": "quote #sea #water #beach #sunset #natural #videography #photography #mobilevideography #1m #fyp #1k"
  },
  {
    "id": "0Lz9KspUmt0",
    "title": "MyQuote #quotes #videography #naturelovers #nature #natural #sea #evening #sunset #pannai #1m #love"
  },
  {
    "id": "YLX5HNqf03I",
    "title": "🌊 #videography #photography #quotes #nature #naturelovers #natural #sea #beach #jaffna #mannaar #1m"
  },
  {
    "id": "4xfym1Dv1pM",
    "title": "#universe #videography #love #thankyouuniverse #sea #beach #sunset #lik #anirudh #1m #fypシ #1k #10k"
  },
  {
    "id": "jUDH6l0WXfc",
    "title": "#alone #lonlyness #beach #hometown #sampur #nature #Enakenna #aakko #lik #anirudh #1m #fypシ #love"
  },
  {
    "id": "B4zRPNB9q1M",
    "title": "🔵 #pond #hometown #sampur #quotes #videography #nature #quotesvideostatus #vilambaraidaiveli #1m"
  },
  {
    "id": "nAbaywS18no",
    "title": "✒️ #quotes #quotesvideostatus #videography #nature #blackandwhite #nature #1m #fypシ #rajinikanth"
  },
  {
    "id": "5oznr0jeeQA",
    "title": "🏞️ #river #nature #green #greenystyle  #natural #quotes #videography #1m #hiphop #fypシ #1k #love"
  },
  {
    "id": "YoMrZZ2A0mI",
    "title": "one #videography #nature #1m #natural #naturelovers #quotes #thanioruvan #sea #sampur #fypシ #1m #1k"
  },
  {
    "id": "fKwiTXWZ8KU",
    "title": "🌅 me#me #sunset #beach #beachvibes #nature #naturelovers #natural #vilambaraidaiveli #hiphoptamizha"
  },
  {
    "id": "EsFzkwjJHgI",
    "title": "🌊 #beach #vibes #dialogue #ambikapathy #dhanush #ranjana #arrahman  #sea #nature #videography #love"
  },
  {
    "id": "zDSEcsdqT_E",
    "title": "🏝️ 💔#videography #nature #delft #alovera #beach #beachvibes #love #1m #tereishkmein #ranjana #fypシ"
  },
  {
    "id": "cNfliRKFEXU",
    "title": "🏝️ #delft #neduntheevu #journey #sea #travel #videography #blue #maara #yaarazhaippadhu #gibran #1m"
  },
  {
    "id": "JH39SplvR1I",
    "title": "#delulu 🌊#beachvibes  #videography #nature #sarvammaya #puthumazha #sampur #beach #sarvammayamovie"
  },
  {
    "id": "TpI2W7uvqgM",
    "title": "🔵 #pond #pool #sampur #villu #kulam #videography #nature #natural #naturelovers #neelothi #1m #fyp"
  },
  {
    "id": "xlZKsuPojWE",
    "title": "🏡 #homegarden #garden #farming #natural #green #nature #videography #shortvideo #love #vizhiveekura"
  },
  {
    "id": "RBWCrGDImOk",
    "title": "இலஙகைத்துறை முகத்துவாரம் 🌊 #sea #natural #videography #sunset #love #fypシ #travel #vlog #1000m #1m"
  },
  {
    "id": "XfkkyFIN_Ys",
    "title": "miss 🥹 you all... #miss #missyou #missyoufriends #videography #paddy #field #nature #chellamagale"
  },
  {
    "id": "p2gn9flq2ek",
    "title": "🌤️ #pond #nature #videography #natural #naturephotography #naturelovers #shorts #quotes #menslife"
  },
  {
    "id": "IfQ8vM_-Jdg",
    "title": "🌅 #sunset #videography #beach #beachvibes #sunset #nature #dude #dudesong #dudebgm #saiabhyankkar"
  },
  {
    "id": "osLuAbhlN9Q",
    "title": "🌾#paddy #videography #ai #nature #naturelovers #naturephotography #natural #dude #bgm #fypシ #1m #1k"
  },
  {
    "id": "V-i9RZamvPY",
    "title": "🌊 #beach #videography #sampur #nature #sea #fypシ #love #kannukulla #saiabhyankkar #dude #1m #1k #1b"
  },
  {
    "id": "GH43_bO6PPY",
    "title": "Miss u My 🏕️🌾#paddy #nature #naturelovers #naturephotography #videography #kannukulla #fypyoutube"
  },
  {
    "id": "d2XnvV2WL_g",
    "title": "⛰️#sigiriya #hills #mountain #tourvlog #travelvideo #nature #1000subscriber #fypシ #fypシ #fypyoutube"
  },
  {
    "id": "dzZMFlnCnU4",
    "title": "⛰️#sigiriya #mountains #hills #travel #trip #nature #anirudh #song #tour #vlog #fypシ #1million #1m"
  },
  {
    "id": "CqpEeVc-4HE",
    "title": "நல்லூரான் தேர் உற்சவம். #nallur #nallurkanthasuwamikovil #nallurkovil #nallurtemple #murugan #fyp"
  },
  {
    "id": "nf2ybbjdYVk",
    "title": "💚 #myhometown #heaven   #love #nature #illayaraja #song #videography #edit #fypyoutube #fypシ゚viral"
  },
  {
    "id": "ZeBURbsX1z0",
    "title": "🛕#murugan #nallur #kanthaswamy #temple #night #videography #jaffna #1million #fyp #fypviralシ #1k"
  },
  {
    "id": "ChVa5fxQuPc",
    "title": "🌞#powerhouse #vibes #evening #bike #ride #videography #coolie #anirudh #bgm #fyp #100m #fypシ゚viral"
  },
  {
    "id": "xNCP19FHKMs",
    "title": "🥺 #videography #loneliness #songai #mycreation #onesidelovefeeling #tamil #song #fypシ゚viral #1m #1k"
  },
  {
    "id": "cmplJPiC2iQ",
    "title": "🚉 #videography #train #travel #trainview #marakkumanenjam #song #vtkong #nature #myvlog #arrahman"
  },
  {
    "id": "SNK1zn4VwDc",
    "title": "🏢🖼️#tamil #kavithai #videography #poem #tamilkavithai #nature #view #1m #love #fypyoutube #1kviews"
  },
  {
    "id": "KyUOJ4SRlhU",
    "title": "Ai Video #sunset #vibes #anjuvannapoove #arrahman #nature #feel #thuglife #aivideo #love #1m #fyp"
  },
  {
    "id": "1IqpKSPMpWM",
    "title": "🌧️#anjuvannapoove #rain #night #nightrain #shorts #arrahman #arrahmansongs #thuglife #thuglifesong"
  },
  {
    "id": "h0gAdXBRqyk",
    "title": "#lightandshadow #tamilkavithai #poem #nature #night #lamp #vesakpoya #2025 #videography #shorts #1m"
  },
  {
    "id": "TyrslbNi8uc",
    "title": "#rock #aisong #mycreation #rockvideos #beach #beachsong #aisongs #videography #shorts #nature #fyp"
  },
  {
    "id": "VoSEkgQqv9A",
    "title": "🌅#poem #tamil #sunset #beach #inme #arrahman #bgm #videography #shorts #fyp #1m #fypシ゚viral #1k #1b"
  },
  {
    "id": "iXw0aeeUY1s",
    "title": "🌅#ourplace #nature #natural #1m #1000subscriber #fypyoutube #love #lighthouse #yuvan #fypシ゚viral #1k"
  },
  {
    "id": "CZzWbvVIaCQ",
    "title": "🌅 #tamil #poem #sunset  #தமிழ்  #கவிதை #redsky #செவ்வானம் #nature #yennaiizhukkuthadi #arrahman #1m"
  },
  {
    "id": "pWsKb0CxkIY",
    "title": "🏞️ #nature #poem #tamil #தமிழ்க்கவிதை #கவிதை #natural #fypyoutube #greenlove #1m #1b #1bhk #1k #my"
  },
  {
    "id": "umiFVOP_N-0",
    "title": "🐦‍⬛ #birds #birdsound #naturesound #videography #shorts #real #visual #1m #flowers #fyp #fypyoutube"
  },
  {
    "id": "_Y1BG0m8-Hs",
    "title": "🌺 #flowers #flower #flowergarden #nilavukuenmelennadikobam #yedisong #fyp #1m #videography #shorts"
  },
  {
    "id": "H8IjhVBnhO8",
    "title": "🌿 #naturalbeauty #nature #naturesounds #naturevideo #naturevibes #naturevideos #shorts #fyp #100m"
  },
  {
    "id": "QeA_3e4eob0",
    "title": "🏞️#travelwithnature #travel #traveling #videography #shorts #arunmozhi #nature #fypage #fypシ゚ #10m"
  },
  {
    "id": "SHMsMw6MlbQ",
    "title": "💚#nature #sound #naturesounds #naturelovers #naturevideo #green #greenliving #1m #fypシ゚ #fypyoutube"
  },
  {
    "id": "EELXu-_jTz4",
    "title": "🌽 #corn #boild #adventure #field #camping #video #shortsvideo #chikituvibe #chikitu #1m #fypシ゚ #10m"
  },
  {
    "id": "kRd0_92ZNsY",
    "title": "🪔#deepam #karthigaideepam #karthigai #karthigaispecial #karthigaimaadham #karthikaideepam #1m #fyp"
  },
  {
    "id": "oeAaV-NnZmk",
    "title": "🔥#fire #firevideo #firesong #kanguva #videography #1m #100million #fyp #shortsvideo #whatsappstatus"
  },
  {
    "id": "B4OwE6AG-SM",
    "title": "🌀#cyclone #pengal #sampur #trincomalee #trincomalee_live #videography #shortsvideo #shortsviral #10m"
  },
  {
    "id": "0x_6PvF_914",
    "title": "🌧️#yennaiizhukkuthadi #kadhalikkaneramillai  #newyorknagaramsong  #rain #nature #1m  #arrahman #fyp"
  },
  {
    "id": "vC0lJBjgpwQ",
    "title": "🌽#corn #green #greenfarming #pachainirame #cornfarming #fypシ゚  #farming #arrahman #1m #1billion #1k"
  },
  {
    "id": "4-HXX55sI2w",
    "title": "🟢💚🏕️ #paddyfarming #paddyfields #greenfarming #greenalien #nature #naturelovers #heyminnale #amaran"
  },
  {
    "id": "n4VWxPEkvSM",
    "title": "🌝 #sampur #beach #evening #sunset #sunsetvideography #sunsetview #videography #photography #1m #fyp"
  },
  {
    "id": "V6YTDMNNLac",
    "title": "🚜#paddy #paddyfarming #paddyfields #tractor #tractorvideo #thenkizhakku #vaazhai #farmer #100million"
  },
  {
    "id": "auGIjAFbimU",
    "title": "⛅#sunset #sampur #paddy #sampoor #videography #whatsappstatus #shortsvideo #dheemasong #anirudh #1m"
  },
  {
    "id": "USThR680_V8",
    "title": "🌊#lighthouse #sampur #sampoor #muthur #trincomalee #shortsvideo #shorts #nature #100million #1m #1k"
  },
  {
    "id": "XHTf56UACww",
    "title": "🌿#garden #homegarden #nature #videography #shortsvideo #sampoor #sampur #naturelovers #village #fyp"
  },
  {
    "id": "qUWLIlCbKtU",
    "title": "🛕🟡#nallur #nalluran #nallurkanthasuwamikovil #nallurtemple #nallurmurugan #தேர்த்திருவிழா #jaffna"
  },
  {
    "id": "djB49UNL5po",
    "title": "🔥#jaffna #nallur #nallurkanthasuwamikovil #nallurtemple #nalluran #1m #100million #shortsvideo #1k"
  },
  {
    "id": "km-RHGoeOlI",
    "title": "💙💚 #journey #madu #mannar #northern #srilanka #100million #travel #1k #1m #shortsvideo #nature #fyp"
  },
  {
    "id": "tiONhzkkwbM",
    "title": "🧡🙏#nalluran #nallur #nallurtemple #nallurkanthasuwamikovil #murugan #alangaram #jaffna #2024 #1m"
  },
  {
    "id": "Qs_N1zn-c8o",
    "title": "loneliness #loneliness #amidreaming #sunflower #lone #100million #editing #shortsvideo #shorts #1m"
  },
  {
    "id": "aONDnj6Wdg4",
    "title": "💚🌿 #paddyfield #paddyfields #shorts #videography #editing #nature #green #naturelovers #aasakooda"
  },
  {
    "id": "CUwnOkqy_8s",
    "title": "#sunset #sunsetview #videography #shortsvideo #shortsviral #nirasong #takkar #sky #evening #pannai"
  },
  {
    "id": "Bale0sBg8-U",
    "title": "🪁🪁#valvettithurai #pointpedro #kiteflying #kites #jaffna #shorts #maragathamalai #bgm #takkar #kite"
  },
  {
    "id": "HQVD0ziE1UM",
    "title": "BeachShorts🌊#beach #sampur #videography #shorts #shortsvideo #unakkuthaan #lighthouse #nature #blue"
  },
  {
    "id": "ccI9boGkk2o",
    "title": "evening river view #river #bridge #videography #shorts #kangaledho #santhoshnarayanan #bgm #nature"
  },
  {
    "id": "3oHkTLw8rVY",
    "title": "RESTinPEACE🐾🐶JINOW#restinpeacemydog #restinpeace #mydog #dogsarebetterthanhumans#rip #doglover#dogs"
  },
  {
    "id": "bHD77XTrcSM",
    "title": "ordinaryPerson🦁.#ordinaryperson #videography #vibes #leo #mylifeisinthistown #leovibe #sunset #ani"
  },
  {
    "id": "r9hC9Yznqjw",
    "title": "sunset 🌇2 #sunset #sunsets #pannai #beach #videography #sunsetvideography #sunsetvideo #shortsvideo"
  },
  {
    "id": "fPJ3uimSFnE",
    "title": "MannarMadu✝️#mannar #madhu  #matha #temple #church #madhuchurch #ourladyofmadhu #srilanka #matha"
  },
  {
    "id": "JULmt5mIbl8",
    "title": "TherThiruvizha #nallurkanthasuwamikovil #therthiruvila #therthiruvizha #nallurtemple#jaffna#shorts"
  },
  {
    "id": "1cp2dv8dGik",
    "title": "நல்லூர் திருவிழா #jaffna #jaffnatemple #jaffnamurugantemples #nallurkanthasuwamikovil #nallur"
  },
  {
    "id": "JiZDMGOPAXE",
    "title": "IWouldHaveLostMySelf.🐶 #dogshorts #emotional #missingme #dogshortsvideo #shortsvideo #shortsyoutube"
  },
  {
    "id": "uc8gRI3D9jk",
    "title": "Walking Nature paddy field emotional. #nature #videography #shortsyoutube #shortsvideo #emotional"
  },
  {
    "id": "tLcFu3jA3OI",
    "title": "SmallWaterfall #smallwaterfall #videography #shortsvideo #shortsyoutube #veralevelsago"
  },
  {
    "id": "iYRSSw8vu40",
    "title": "SUNSET #sunset #sun #seaview #thalapathy #shorts #thalapathybgm #sundarikannalorusethi #love#nature"
  },
  {
    "id": "Gv3T4NN30N8",
    "title": "our Nature ..   #lighthouse #sampur #sea #nature #blue #beautyofnature  #iyarkai"
  },
  {
    "id": "ki53mujDv2I",
    "title": "Nainativu .. videography  #nainativu #sea #seaview #videography #shorts #jaffna"
  },
  {
    "id": "4rM9L_4RTpY",
    "title": "happy flying in sky... #flying #sky #feelgood #aagayamtamil #nature"
  },
  {
    "id": "eWqUyk3a7Es",
    "title": "Dogs are Better than... 🐶👍❤️ #dogsarebetterthanhumans #doggod #dogslover"
  },
  {
    "id": "eMn7ZPgymjs",
    "title": "my beautiful place nature things #videography #nature #love"
  },
  {
    "id": "Tic54rfxcaw",
    "title": "missing my paddy 🌾🌾🌾 #videography #shorts #paddy #my #nature"
  },
  {
    "id": "18mENNgoAAo",
    "title": "சம்பூர் #ஜல்லிக்கட்டு 🐃 #jallikattu"
  },
  {
    "id": "ZVhdXK6Vl1E",
    "title": "Soul of MY PLACE ⛱️"
  },
  {
    "id": "Xb7vsTS96lw",
    "title": "Our place is very beautiful.... Nature videography shorts"
  },
  {
    "id": "b3gLA5SCBx0",
    "title": "Nature videography shorts.... our place is very beautiful..."
  },
  {
    "id": "eH7usBRBmHc",
    "title": "#ARIYAKULAM #jaffnatraveler #jaffna #jaffna2021 #beautiful #videography #shortsvideo #shortsyoutube"
  },
  {
    "id": "OeXtaBpJ05g",
    "title": "Dog fear funny #Dogfunny #Dogvideos #Dogs #countrydog #funny #shortsvideo #shortsyoutube #shorts"
  }
];
