var games = [
  {
    id: 'customgame',
    title: 'Add custom game',
    image: 'assets/images/add.png'
  },
  {
    id: 'idlebreakout',
    title: 'Idle Breakout',
    url: 'https://www.coolmathgames.com/0-idle-breakout/play',
    image: 'https://play-lh.googleusercontent.com/e5jzYTn7Mjh9Ghn-DFpVedkOlRfSOyCS2AFgXdTrADIuuUbjx6vP6r_YOM2j5m7uLQ'
  },
  {
    id: 'eggycar',
    title: 'Eggy Car',
    url: 'https://webglmath.github.io/eggy-car/',
    image: 'https://assets.3kh0.net/eggycar/eggy-car.png'
  },
  {
    id: 'cookieclicker',
    title: 'Cookie Clicker',
    description: 'Cookie Clicker is an addictive incremental game where players click to produce cookies, unlock upgrades, and aim to amass an ever-growing mountain of delicious digital treats.',
    url: 'https://sushi8756.github.io/Cookie-Clicker-2.031/',
    image: 'https://cdn.discordapp.com/icons/339131488111034389/73f15cd93d96504af9877a53816d110c.png'
  },
  {
    id: 'jacksmith',
    title: 'Jacksmith',
    url: 'https://art-class.github.io/assets/jacksmith',
    image: 'https://lh3.googleusercontent.com/dJAftLFmxmWdTAEjuolFrtNNAX3D0HjODTm9703CP7JqM_jFgOgPR75d6xqRsYTwoTot'
  },
  {
    id: 'thereisnogame',
    title: 'There Is No Game',
    url: 'https://assets.3kh0.net/there-is-no-game/index.html',
    image: 'https://play-lh.googleusercontent.com/a6DfrYUL6viV0LAZFplqqA44gE0LHE0PyDnKHgdlydiUvccwzSBWrmRQSx5cjdL74Us=w240-h480-rw'
  },
  {
    id: 'fbwg',
    title: 'Fireboy and Watergirl',
    description: 'A 2 player game where you have to work together using logic and teamwork to get to the finish line.',
    url: 'https://educationgg-23704.web.app/games/FBWG4-main/index.html',
    image: 'https://play-lh.googleusercontent.com/5-YcjiTyMrPJEZe078dHMxnCxcg2A_8NWJZQieRvn2Gkf8JOuHZEbTmFyQ9gn5p2lnU'
  },
  {
    id: 'driftboss',
    title: 'Drift Boss',
    image: 'https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=40,height=40,fit=cover,f=auto/baf55f009fd63dd63c760a5dcfe79615.png',
    url: 'https://www.hoodamath.com/mobile/games/drift-boss/game.html'
  },
  {
    id: 'osu',
    title: 'osu!',
    description: 'A web version of osu!',
    url: 'webosu.online',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Osu%21_Logo_2016.svg/1200px-Osu%21_Logo_2016.svg.png',
  },
  {
    id: 'cuttherope',
    title: 'Cut the Rope',
    url: 'https://cut-the-rope-ebx.game-files.crazygames.com/cut-the-rope-ebx/2/index.html',
    image: 'https://play-lh.googleusercontent.com/8FNcAyLXtQB_0Ux2ZO8VZoEoihL6a5VMBNf6V2lydRM24hXLnNUdlEup1d5miVjl3JY'
  },
  {
    id: 'tombofthemask',
    title: 'Tomb of the Mask',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/element@9cccb2fafb569c963501a5d818472b561121cea6/totm.xml',
    image: 'https://play-lh.googleusercontent.com/gTd127I81O2i2Q6kfCJoN-M0OSWmgsdjB47orUFpLwANW7VZLJYrOxMVt-OpilDXszg=w240-h480-rw'
  },
  {
    id: 'backrooms',
    title: 'Backrooms',
    description: 'Scary game based on the viral 4Chan post.',
    url: 'https://backroomsgame.io/game/backrooms/',
    image: 'https://media.wired.com/photos/627b0c1fb6048c47d506c6c0/1:1/w_679,h_679,c_limit/Backrooms-Games.jpg'
  },
  {
    id: 'youarebezos',
    title: 'You are Bezos',
    url: 'https://assets.3kh0.net/you-are-bezos/index.html',
    image: 'https://img.itch.zone/aW1nLzE1NzI2NjIucG5n/original/Equhiy.png'
  },
  {
    id: 'papaburgers',
    title: 'Papa\'s Burgeria',
    url: 'https://www.coolmathgames.com/0-papas-burgeria/play',
    image: 'https://i.flipline.com/gamefiles/papasburgeriatogo/app_upsell_C.jpg'
  },
  {
    id: 'papasicecream',
    title: 'Papa\'s Scooperia',
    url: 'https://www.coolmathgames.com/0-papas-scooperia/play',
    image: 'https://play-lh.googleusercontent.com/KpLBHo89bWG3jmuYb_KqDD1rZSY4XzXcHiMLZ1PCv83GMwVMcJluuuXrT32oQGCo51A'
  },
  {
    id: 'ultimatechess',
    title: 'Ultimate Chess',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2Fultimate-chess.xml',
    image: 'https://img.kbhgames.com/2010/05/Ultimate-Chess.jpg'
  },
  {
    id: 'jetpackjoyride',
    title: 'Jetpack Joyride',
    url: 'https://a83061a3-6c94-48d3-b9c5-65b31b279a78.poki-gdn.com/7929912f-9d77-4215-be6c-9916a1095c09/index.html?country=US&ccpaApplies=0&url_referrer=https%3A%2F%2Fpoki.com%2F&tag=pg-9551b1fb395dc7535d35465bb0dbce1e5a09497f&site_id=3&iso_lang=en&poki_url=https%3A%2F%2Fpoki.com%2Fen%2Fg%2Fjetpack-joyride&hoist=yes&nonPersonalized=n&cloudsavegames=n&familyFriendly=n&categories=3%2C37%2C77%2C101%2C385%2C1013&special_condition=landing&game_id=a83061a3-6c94-48d3-b9c5-65b31b279a78&game_version_id=7929912f-9d77-4215-be6c-9916a1095c09&inspector=0&csp=1',
    image: 'https://play-lh.googleusercontent.com/Pl2nmu5U9CH3NQqLBTjnokoV325zESrX6KIaHrwSqREEJDWIv1yJpRCXzl9r3oMnEWHC',
  },
  {
    id: 'shellshockers',
    title: 'Shell Shockers',
    description: 'Shell Shockers is unique online shooter in first-person perspective where all the characters are represented exclusively by eggs.',
    url: 'https://assets.3kh0.net/shellshockers/index.html',
    image: 'https://play-lh.googleusercontent.com/P-nde227L29s8w5U44kTPLiEnMEJUhJpEr4jL6tD6LV65Xz0JZtI4wEyFN-smsNrx-Q'
  },
  {
    id: 'plantsvszombies',
    title: 'Plants Versus Zombies 1.0',
    description: 'Plants Versus Zombies 1.0 is a tower defense video game where players strategically plant a variety of plants to fend off waves of zombie invaders.',
    url: 'https://pvz.ee/iframe.php',
    image: 'http://cm1.narvii.com/6715/5bef9754b89ffbf36e5afb2c4dac9860b9614987_00.jpg'
  },
  {
    id: 'happywheels',
    title: 'Happy Wheels',
    url: 'https://totaljerkface.com/happy-wheels-js/index.tjf',
    image: 'https://play-lh.googleusercontent.com/SV8RsV5udSeeONjatT5SwleP6lzV6PjtNPs2VvyohJXWSG9fFLNOfslDEHbpDN337wQ'
  },
  {
    id: 'motox3m',
    title: 'MotoX3M',
    //url: 'https://assets.3kh0.net/motox3m/index.html',
    url: 'https://www.coolmathgames.com/0-moto-x3m/play',
    image: 'https://play-lh.googleusercontent.com/AbQMuT4ncBfWDqNF-4ubmfaRag59nrW3fJARDsHK51_PENScmWCnMFeQX81wfPlfGBo'
  },
  {
    id: 'thefinalearth',
    title: 'The Final Earth',
    description: 'Earth has been destroyed. It\'s a good thing you teleported to a new planet, also known as The Final Earth. Gather resources and build a colony',
    url: 'https://assets.3kh0.net/the-final-earth/index.html',
    image: 'https://img.itch.zone/aW1nLzIyMTU1NDAucG5n/original/6vGlZe.png'
  },
  {
    id: 'fnf',
    title: 'Friday Night Funkin',
    url: 'https://html-classic.itch.zone/html/2876359-1104083/index.html?v=1732313800',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Boyfriend-2.png/250px-Boyfriend-2.png'
  },
  {
    id: 'paperio2',
    title: 'Paper.io 2',
    url: 'https://paperio.site/',
    image: 'https://play-lh.googleusercontent.com/KxcjUrs8S75iOPnKBR2b-s7eGtqbREwLgzttVxaM9Znl5ZxsDCl6qEZHny4rBkMeYA=w240-h480-rw'
  },
  {
    id: 'impossiblequiz',
    title: 'The Impossible Quiz',
    url: 'https://proudparrot2.github.io/msg-archive/g_mes/impossiblequiz1/impossiblequiz1/index.html',
    image: 'https://ih1.redbubble.net/image.489460698.9522/st,small,507x507-pad,600x600,f8f8f8.jpg'
  },
  {
    id: 'ducklife4',
    title: 'Duck Life 4',
    url: 'https://www.coolmathgames.com/0-duck-life-4/play',
    image: 'https://play-lh.googleusercontent.com/AUGkRrKMtUCLVE9vCvlfMY9Ny9EBqzx17yejVtEEhvpkw-H6lJlvBHgCMqPJm8HV_tM'
  },
  {
    id: 'retrobowl',
    url: 'https://game316009.konggames.com/gamez/0031/6009/live/index.html',
    title: 'Retro Bowl',
    image: 'https://play-lh.googleusercontent.com/WRM5Y1xZmzcCP1YtO5zl6G2g7CU5c5ZfjX4UVrgi1bpNgkfy-wuB-bQx3kkeRfaGYQ'
  },
  {
    id: 'littlealchemy',
    title: 'Little Alchemy',
    url: 'https://littlealchemy.com',
    image: 'https://play-lh.googleusercontent.com/-NQ2QLAOaafy7iHAJcrdEFk-tyVicnbwy6iLehml8K0Higi60sSVn0829bcyi1lOUw'
  },
  {
    id: 'templerun2',
    title: 'Temple Run 2',
    url: 'https://assets.3kh0.net/temple-run-2/index.html',
    image: 'https://play-lh.googleusercontent.com/go4XqS4mYs-G2tZymiVLF4wJYXIi5QrvwixNRzssk4G_vRBHrAdg4E1ddNwy9c2cZA'
  },
  {
    id: 'stickmanhook',
    title: 'Stickman Hook',
    url: 'https://assets.3kh0.net/stickman-hook/index.html',
    image: 'https://play-lh.googleusercontent.com/yXqBI1Vb1b-xjwmXLE2T7FQbgHIxfvjze1b6jO2aLHfy8Y8ta7NFSEVqZoPHtM2Ajyrl'
  },
  {
    id: 'run3',
    title: 'Run 3',
    url: 'https://coolmathgames.com/0-run-3/play',
    image: 'https://play-lh.googleusercontent.com/A97ygyZMgnoapGfPhWZn9QBMsrskPuPQmJqeEtROZWnbQRfAOZZlhtP-UBWxaKtMI6U',
    description: 'Run 3 is a classic game where you swerve through space in a race to the finish. Play hundreds of new levels in this fast-paced platformer'
  },
  {
    id: 'run1',
    title: 'Run 1',
    url: 'https://glcdn.githack.com/kaioxdev/legacy-assets/-/raw/main/run/index.html',
    image: 'https://trefoilkingdom.com/uploads/games/21624/Run-1.jpg',
    description: 'Run 1 is a classic game where you swerve through space in a race to the finish. Play hundreds of new levels in this fast-paced platformer'
  },
  {
    id: 'run2',
    title: 'Run 2',
    url: 'https://glcdn.githack.com/kaioxdev/legacy-assets/-/raw/main/Run%202/index.html',
    image: 'https://i.pinimg.com/280x280_RS/b6/2f/e8/b62fe8c6a9ceb9fd7e5257ad25f6897d.jpg',
    description: 'Run 2 is a classic game where you swerve through space in a race to the finish. Play hundreds of new levels in this fast-paced platformer'
  },
  {
    id: 'justfall',
    title: 'Just Fall',
    description: 'Just Fall is a game similar to Fall Guys, where you compete in minigames to be the sole winner',
    url: 'https://just-fall-online.github.io/file/',
    image: 'https://play-lh.googleusercontent.com/-0rSllZ8as88Jcs3iZ7-JCFyTb3YLB-HjR7bY7P6q_2MAswmDH4h1qNPfFiaZqzkkg'
  },
  {
    id: 'sm64',
    title: 'Super Mario 64',
    url: 'https://assets.3kh0.net/sm64/index.html',
    image: 'https://assets1.ignimgs.com/2019/05/31/mario-64---button-1559263987447.jpg',
    description: 'Controls: <br>Movement: Arrow Keys <br>A: X <br>B: C <br>R: Q <br>Z: Space <br>Start: Enter <br>C-stick: WASD<br><br>You might need to go into fullscreen for the keybinds to register'
  },
  {
    id: 'snowball',
    title: 'snowball.io',
    url: 'https://assets.3kh0.net/snowbattle/index.html',
    image: 'https://play-lh.googleusercontent.com/X8FEOENa_t5mlRllBh2RRLc6sMnPIq56Wxa2ndValDOmwzIRhAv7MG6fT97TLQ2DK48'
  },
  {
    id: 'minecraft',
    title: 'Minecraft Classic',
    url: 'https://classic.minecraft.net',
    image: 'https://cdn.iconscout.com/icon/free/png-256/minecraft-2752120-2284937.png'
  },
  {
    id: 'smashkarts',
    title: 'Smash Karts',
    url: 'https://assets.3kh0.net/smashkarts/index.html',
    image: 'https://geometry-dash.co/upload/imgs/smash-karts-logo.png'
  },
  {
    id: 'tunnelrush',
    title: 'Tunnel Rush',
    url: 'https://assets.3kh0.net/tunnel-rush/index.html',
    image: 'https://images.hellokids.com/_uploads/_tiny_galerie/20180415/vign-tunnel-rush-hk-w8v_u89.jpg',
  },
  {
    id: 'awesometanks2',
    title: 'Awesome Tanks 2',
    url: 'https://www.coolmathgames.com/0-awesome-tanks-2/play',
    image: 'https://play-lh.googleusercontent.com/fiH2wSovQkxQ2dQViDAphNBbM0B1dYxTlJqnYwKXeSoQQZbBNkZZuLyMkv4gglb7LH4'
  },
  {
    id: 'escapeprison',
    title: 'Henry Stickmin: Escaping the Prison',
    url: 'https://escaping-the-prison.game-files.crazygames.com/ruffle/escaping-the-prison/2/escaping_the_prison.html?v=1.323',
    image: 'https://play-lh.googleusercontent.com/MKW0yzbpA-faDMztP2xkirlXsHwL7QutC_9VyQlbr4VTbPOyCZInL7zYG9EA4XpX4mtM'
  },
  {
    id: 'fleeingthecomplex',
    title: 'Henry Stickmin: Fleeing the Complex',
    url: 'https://art-class.github.io/assets/fleeingthecompound/index.html',
    image: 'https://play-lh.googleusercontent.com/RDk8BpHUESL9J4H-s-07ZC1sNJol8-aZEzz3OEA99PxTYnsZd8038Y-0wRMpCQKDssU'
  },
  {
    id: 'infiltratingtheairship',
    title: 'Henry Stickmin: Infiltrating the Airship',
    url: 'https://art-class.github.io/assets/infiltratingtheairship/index.html',
    image: 'https://play-lh.googleusercontent.com/bRVIDUSlmkDM9ZA9xLczm-PuUa0dYPupAG2ZVNXJvCITc3ZkO7PS-t0qKX1T--7f5-k=w240-h480-rw'
  },
  {
    id: 'breakingthebank',
    title: 'Henry Stickmin: Breaking the Bank',
    url: 'https://art-class.github.io/assets/breakingthebank/index.html',
    image: 'https://play-lh.googleusercontent.com/I9aDLwmiy5iSjeUPs5IDI3lam8iWZ1zVnLF-V_EGvClOLuccjwLNNjZ8xltu4AN60io'
  },
  {
    id: 'slope',
    title: 'Slope',
    url: 'https://mathadventure1.github.io/slope/slope/index.html',
    image: 'https://play-lh.googleusercontent.com/uJn2i9h7KxYQarC_c3K4qH6o7gLtflFnhD_dN14MNkzHJ1NeNFzCL69jpB5mT0vCoQs'
  },
  {
    id: 'baldisbasics',
    title: 'Baldi\'s Basics',
    url: 'https://baldis-basics-online.github.io/file/',
    image: 'https://play-lh.googleusercontent.com/EPV1TB4So1lB0DGrdCVExDpNU8ML67nd8OqBeoOIM-s6sDicxmDdPvCXD6n7LKevFl0'
  },
  {
    id: '1v1lol',
    title: "1v1.lol",
    url: 'https://1v1.lol',
    image: 'https://play-lh.googleusercontent.com/-dE43Bqni_bUnq0L-piPxiJG4YiCotk5khMdrQaQBJrXJ3vSgjNeIaKyA34rBvKQSyOy'
  },
  {
    id: 'subwaysurfers',
    title: 'Subway Surfers',
    url: 'https://assets.3kh0.net/subway-surfers/index.html',
    image: 'https://cdnb.artstation.com/p/assets/images/images/040/799/939/large/celine-j-1-74-shanghai-icon-1024-x.jpg?1629908071'
  },
  {
    id: 'geometrydash',
    title: 'Geometry Dash',
    url: 'https://geometrydashlitepc.io/game/geometry-dash-lite/',
    image: 'data:image/webp;base64,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'
  },
  {
    id: '8ballpool',
    title: '8 Ball Pool',
    url: 'https://8ball-pool.io',
    image: 'https://play-lh.googleusercontent.com/bPz1guJ6FHF3oIOEy3KqwpaDDKO-hLRaZoyzmM8bLFLN8fWm6L0_EuUnkwv9iqPo3Ag'
  },
  {
    id: 'fruitninja',
    title: 'Fruit Ninja',
    url: 'https://html5.gamedistribution.com/rvvASMiM/a186dc9ac7f548f884db8ff54df6dd9f/index.html?gd_sdk_referrer_url=https%3A%2F%2Fwww.crazygames.com%2Fgame%2Ffruit-ninja&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3d3dy5jcmF6eWdhbWVzLmNvbS9nYW1lL2ZydWl0LW5pbmphIiwicGFyZW50RG9tYWluIjoiY3JhenlnYW1lcy5jb20iLCJ0b3BEb21haW4iOiJjcmF6eWdhbWVzLmNvbSIsImhhc0ltcHJlc3Npb24iOmZhbHNlLCJsb2FkZXJFbmFibGVkIjp0cnVlLCJob3N0IjoiaHRtbDUuZ2FtZWRpc3RyaWJ1dGlvbi5jb20iLCJ2ZXJzaW9uIjoiMS41LjE3In0%253D',
    image: 'https://play-lh.googleusercontent.com/iRlGmvtJ524J-gAGdJJchMv-MH-9AuG80TAx8Rv8q3lObiI7kLVZrEvjVOM-yw3BBH4'
  },
  {
    id: 'bloxors',
    title: 'Bloxorz',
    url: 'https://www.coolmathgames.com/0-bloxorz/play',
    image: 'https://play-lh.googleusercontent.com/FHpA3r3FHDzVNtBpjpi9Zq8JA81bvRXBEbdkBvL3COOucsMfn_fYYhEFE5g55VkeSQ'
  },
  {
    id: 'chromedino',
    title: "Chrome Dino Game",
    url: 'https://chrome-dino-game.github.io/',
    image: 'https://qph.cf2.quoracdn.net/main-qimg-c803e5912e045867b4e2f033c1b57ff9-lq'
  },
  {
    id: 'doodlejump',
    title: 'Doodle Jump',
    url: 'https://doodlejump.io/play/',
    image: 'https://assets-prd.ignimgs.com/2022/03/16/doodlejump-1647405974576.jpg'
  },
  {
    id: 'slither',
    title: 'slither.io',
    url: 'https://slither.io',
    image: 'https://play-lh.googleusercontent.com/oObkhKfUXOY5yzheKe9w1Y1pXZBgdiSksMeNmT0BijoQ8J75maTCIW2TA7-6pA6EMA'
  },
  {
    id: 'amongus',
    title: 'Among Us',
    url: 'https://amongusonline.io/among-us-online.embed',
    image: 'https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec'
  },
  {
    id: 'rocketleague',
    title: 'Rocket League',
    url: 'https://315c81e0-540a-4ec9-8371-e182079a24b6.poki-gdn.com/b1a247b6-8e44-4b89-972d-385a272d8c01/index.html?country=US&ccpaApplies=0&url_referrer=https%3A%2F%2Fpoki.com%2F&tag=pg-9551b1fb395dc7535d35465bb0dbce1e5a09497f&site_id=3&iso_lang=en&poki_url=https%3A%2F%2Fpoki.com%2Fen%2Fg%2Frocket-soccer-derby&hoist=yes&nonPersonalized=n&cloudsavegames=n&familyFriendly=n&categories=2%2C27%2C78%2C91%2C869%2C893%2C929%2C1126%2C1140%2C1143%2C1147%2C1193%2C1194%2C1197&special_condition=landing&game_id=315c81e0-540a-4ec9-8371-e182079a24b6&game_version_id=b1a247b6-8e44-4b89-972d-385a272d8c01&inspector=0&csp=1',
    image: 'https://cdn2.iconfinder.com/data/icons/popular-games-1/50/rocketleague_squircle-512.png'
  },
  {
    id: 'curveball3d',
    title: 'Curve Ball 3D',
    url: 'https://www.coolmathgames.com/0-curve-ball-3d/play',
    image: 'https://play-lh.googleusercontent.com/sTHCFQc1HlSFK2jHNsQOabTeKBvgtugFxnSa_uNLWX2euDE7ohRnJhgCDapOZ0gvxlQ'
  },
  {
    id: 'bitlife',
    title: 'Bitlife',
    url: 'https://bitlifesimulator.io/game/bitlife/',
    image: 'https://d.newsweek.com/en/full/1317374/bitlife-ribbons-how-get-all-complete-list-android-ios-cheats-guide-tips-become.jpg?w=1600&h=1600&q=88&f=75befc746fb83a0c568c44ca07bc5e64'
  },
  {
    id: 'btd4',
    title: 'Bloons TD 4',
    url: 'https://bloons-tower-defense-4.game-files.crazygames.com/ruffle/bloons-tower-defense-4/2/Bloons%20Tower%20Defense%204.html?v=1.323',
    image: 'https://assets-prd.ignimgs.com/2022/08/16/bloons-td4-button-1660612386362.jpg'
  },
  {
    id: 'ovo',
    title: 'OvO',
    url: 'https://www.coolmathgames.com/0-ovo/play',
    image: 'https://play-lh.googleusercontent.com/v7KwGdPjJGjJjRXn46sck4DwDBdKSeRzGN44CjiXUtKV0jjOi51Bt4wcXud0m-SkXg=w240-h480-rw'
  },
  {
    id: 'aquapark',
    title: 'aquapark.io',
    url: 'https://html5.gamedistribution.com/rvvASMiM/2d5df06bddfa400ab53e02c64a7f4172/index.html?gd_sdk_referrer_url=https%3A%2F%2Fwww.miniplay.com%2Fgame%2Faquapark-io&mp_assets=https%3A%2F%2Fs2.minijuegosgratis.com%2F&mp_embed=0&mp_game_id=229416&mp_game_uid=aquapark-io&mp_game_url=https%3A%2F%2Fwww.miniplay.com%2Fembed%2Faquapark-io&mp_int=1&mp_locale=en_US&mp_player_type=IFRAME&mp_site_https_url=https%3A%2F%2Fwww.miniplay.com%2F&mp_site_name=miniplay.com&mp_site_url=https%3A%2F%2Fwww.miniplay.com%2F&mp_timezone=America%2FNew_York&mp_view_type=&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3d3dy5taW5pcGxheS5jb20vZ2FtZS9hcXVhcGFyay1pbyIsInBhcmVudERvbWFpbiI6Im1pbmlwbGF5LmNvbSIsInRvcERvbWFpbiI6Im1pbmlwbGF5LmNvbSIsImhhc0ltcHJlc3Npb24iOmZhbHNlLCJsb2FkZXJFbmFibGVkIjp0cnVlLCJob3N0IjoiaHRtbDUuZ2FtZWRpc3RyaWJ1dGlvbi5jb20iLCJ2ZXJzaW9uIjoiMS41LjE3In0%253D',
    image: 'https://play-lh.googleusercontent.com/pNI21ILS4I9IAzveYzjbfk5D5LGuL03b0Ea4OtlFRLD_yk7KYLBeLlBmsvhH7Uj-dQn6'
  },
  {
    id: '2048',
    title: '2048',
    url: 'https://mochaproxy.com/cdn/2048/index.html',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2048_logo.svg/220px-2048_logo.svg.png'
  },
  {
    id: 'roblox',
    title: 'Roblox',
    url: 'https://now.gg/play/roblox-corporation/5349/roblox',
    image: 'https://play-lh.googleusercontent.com/WNWZaxi9RdJKe2GQM3vqXIAkk69mnIl4Cc8EyZcir2SKlVOxeUv9tZGfNTmNaLC717Ht=w240-h480-rw',
    description: 'EXPERIMENTAL: This may or may not work for you. Please don\'t report it if it doesn\'t. If you have bad WiFi, it may load slower than usual.'
  },
  {
    id: 'baconmaydie',
    title: 'Bacon May Die',
    url: 'https://5dd2c21a-015f-11ea-ad56-9cb6d0d995f7.poki-gdn.com/07337bcc-523e-4e4d-a77f-d783ab2ddae8/index.html?country=US&ccpaApplies=0&url_referrer=https%3A%2F%2Fpoki.com%2F&tag=pg-9551b1fb395dc7535d35465bb0dbce1e5a09497f&site_id=3&iso_lang=en&poki_url=https%3A%2F%2Fpoki.com%2Fen%2Fg%2Fbacon-may-die&hoist=yes&nonPersonalized=n&cloudsavegames=n&familyFriendly=n&categories=3%2C80%2C96%2C750%2C929%2C1163%2C1197&special_condition=landing&game_id=5dd2c21a-015f-11ea-ad56-9cb6d0d995f7&game_version_id=07337bcc-523e-4e4d-a77f-d783ab2ddae8&inspector=0&csp=1',
    image: 'data:image/png;base64,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',
  },
  {
    id: 'burninrubber5xs',
    title: 'Burnin\' Rubber 5 XS',
    url: 'https://21494faf-b9e8-4edc-a384-8e4aa7c9bbe6.poki-gdn.com/dfa3f948-112b-4219-a07c-cb816c8d5ec3/index.html?country=US&ccpaApplies=0&url_referrer=https%3A%2F%2Fpoki.com%2F&tag=pg-9551b1fb395dc7535d35465bb0dbce1e5a09497f&site_id=3&iso_lang=en&poki_url=https%3A%2F%2Fpoki.com%2Fen%2Fg%2Fburnin-rubber-5-xs&hoist=yes&nonPersonalized=n&cloudsavegames=n&familyFriendly=n&categories=1%2C78%2C765%2C929%2C1178&special_condition=landing&game_id=21494faf-b9e8-4edc-a384-8e4aa7c9bbe6&game_version_id=dfa3f948-112b-4219-a07c-cb816c8d5ec3&inspector=0&csp=1',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD5QlYWcEtxHe9p40C0nR-bdJJMHujPxyoG5y4XZFYAm9-MVrQNjnkUf0&usqp=CAE&s',
    description: 'This game is resource-heavy. Make sure to adjust quality using the Star button in the main menu.'
  },
  {
    id: 'funnyshooter2',
    title: 'Funny Shooter 2',
    url: 'https://funny-shooter-2.game-files.crazygames.com/unity/unity2020/funny-shooter-2.html?v=1.323',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQllXezliB4G31nMyguAV25NVm00Zrh_7bX5P9Nomnf&usqp=CAE&s',
    description: 'This game has a working rewarded ad bypass, but it will temporarily mute the game. It will unmute at level start/end.'
  },
  {
    id: 'hydrostorm2',
    title: 'Hydro Storm 2',
    url: 'https://c09ef760-ed90-4eac-b2d6-94f903bf5f3e.poki-gdn.com/a9e2f4a7-7511-4bd2-bc66-9bab6c388f0a/index.html?country=US&ccpaApplies=0&url_referrer=https%3A%2F%2Fpoki.com%2F&tag=pg-9551b1fb395dc7535d35465bb0dbce1e5a09497f&site_id=3&iso_lang=en&poki_url=https%3A%2F%2Fpoki.com%2Fen%2Fg%2Fhydro-storm-two&hoist=yes&nonPersonalized=n&cloudsavegames=n&familyFriendly=n&categories=1%2C2%2C32%2C77%2C93%2C893%2C1141&special_condition=landing&game_id=c09ef760-ed90-4eac-b2d6-94f903bf5f3e&game_version_id=a9e2f4a7-7511-4bd2-bc66-9bab6c388f0a&inspector=0&csp=1',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs0XlJRpdsa8bCaOSYw5QKOJYh8eZFQ5h4lx-i9TbNPxRrQC4lW0iP2p8&usqp=CAE&s',
    description: 'This game is resource-heavy. Make sure to adjust quality using the Star button in the main menu.'
  },
  {
    id: 'pixwars2',
    title: 'PixWars 2',
    url: 'https://6b3d117a-f64d-44f0-8e45-53f33acc0ec1.poki-gdn.com/a1e7e6b5-1bba-46b4-b574-7b6b65013748/index.html?country=US&ccpaApplies=0&url_referrer=https%3A%2F%2Fpoki.com%2F&tag=pg-9551b1fb395dc7535d35465bb0dbce1e5a09497f&site_id=3&iso_lang=en&poki_url=https%3A%2F%2Fpoki.com%2Fen%2Fg%2Fpixwars-2&hoist=yes&nonPersonalized=n&cloudsavegames=n&familyFriendly=n&categories=3%2C76%2C77%2C93%2C385%2C744%2C929%2C1126%2C1143%2C1194&special_condition=landing&game_id=6b3d117a-f64d-44f0-8e45-53f33acc0ec1&game_version_id=a1e7e6b5-1bba-46b4-b574-7b6b65013748&inspector=0&csp=1',
    image: 'https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=40,height=40,fit=cover,f=auto/537325f8347e169392524c58419d74d56a9452151e6a5ae5d7ba8920e2a3df63.jpg',
    description: 'An error is displayed during startup. It can be ignored, the game still works.'
  },
  {
    id: 'recoil',
    title: 'Recoil',
    url: 'https://45d94cd0-12d0-4056-93a0-f0cc96ce818b.poki-gdn.com/29a6ef65-4b2d-4e0a-8e06-277b83ce3448/index.html?country=US&ccpaApplies=0&url_referrer=https%3A%2F%2Fpoki.com%2F&tag=pg-9551b1fb395dc7535d35465bb0dbce1e5a09497f&site_id=3&iso_lang=en&poki_url=https%3A%2F%2Fpoki.com%2Fen%2Fg%2Frecoil&hoist=yes&nonPersonalized=n&cloudsavegames=n&familyFriendly=n&categories=3%2C37%2C72%2C77%2C103%2C385%2C929%2C1141&special_condition=landing&game_id=45d94cd0-12d0-4056-93a0-f0cc96ce818b&game_version_id=29a6ef65-4b2d-4e0a-8e06-277b83ce3448&inspector=0&csp=1',
    image: 'https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=40,height=40,fit=cover,f=auto/475c9015dfe59f39fe71b4d7522a6d6b.png'
  },
  {
    id: 'vex8',
    title: 'Vex 8',
    url: 'https://rawcdn.githack.com/nightrose-labs/quartz/8ad8d5b123954f4a5d7e35ca84d5aacba0061eec/2/6dcc5fd9-a43a-4e13-9b6f-456a416e1059/index.html',
    image: 'https://rawcdn.githack.com/nightrose-labs/quartz/master/thumb/6dcc5fd9-a43a-4e13-9b6f-456a416e1059.jpg'
  },
  {
    id: 'thefinalearth2',
    title: 'The Final Earth 2',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://529473016-184630684593625815.preview.editmysite.com/uploads/b/139890129-811652923688457694/files/tfe2.xml&',
    image: 'https://play-lh.googleusercontent.com/oAzUAWZS6R4iPUIWF-DxGgx0Jr4ssCO2BjVA3vmA8033Y9j6bp9FGMz9JkcS9TPrp4Q'
  },
  {
    id: 'snowrider',
    title: 'Snow Rider',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/89574567@71f165531792ae450fe0a522a52ba4e827344de2/sr3d.xml',
    image: 'https://lh5.googleusercontent.com/7h-724mAeXnnyC-MA1OA8RI1iaQYgcCZlAt9A8hLk8BLruu0Bu5NCBH1geQJqAUmMztyS4dEIQruPJYgypQTarqr9G4-ydAM8bsQxL2rFL6LUPxbi2JnBEgrWqeg08a9Lg=w1280'
  },
  {
    id: '1on1basketball',
    title: 'Basketball Stars',
    url: 'https://5dd33196-015f-11ea-ad56-9cb6d0d995f7.poki-gdn.com/36935933-5052-4dad-80ac-ae6f13020276/index.html?country=US&ccpaApplies=0&url_referrer=https%3A%2F%2Fpoki.com%2F&tag=pg-9551b1fb395dc7535d35465bb0dbce1e5a09497f&site_id=3&iso_lang=en&poki_url=https%3A%2F%2Fpoki.com%2Fen%2Fg%2Fbasketball-stars&hoist=yes&nonPersonalized=n&cloudsavegames=n&familyFriendly=n&categories=2%2C76%2C130%2C750%2C775%2C929%2C1103%2C1109%2C1123%2C1139%2C1140%2C1147%2C1168%2C1193%2C1201%2C1202&game_id=5dd33196-015f-11ea-ad56-9cb6d0d995f7&game_version_id=36935933-5052-4dad-80ac-ae6f13020276&inspector=0&csp=1',
    image: 'https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=40,height=40,fit=cover,f=auto/bc02c9cdfc5b424ddf343b01edf791ce.png'
  },
  {
    id: 'johnnyupgrade',
    title: 'Johnny Upgrade',
    url: 'https://www.coolmathgames.com/0-johnny-upgrade/play',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyZiOLpwkFMMTL4ylp_7un0RIKqp9nnjK6Enlj_X9AmMEuKTdLK6WFCKg&usqp=CAE&s'
  },
  {
    id: 'holeio',
    title: 'Hole.io',
    url: 'https://holeioonline.github.io/file/',
    image: 'https://play-lh.googleusercontent.com/PTnoGeHV-bsIF79sW4IX4MzKAKaWj9fBWGvR4AOA4tmW0eYjPo3bVdpPYR7GGeX-0w'
  },
  {
    id: 'brawlguys',
    title: 'Brawl Guys',
    url: 'https://zayaruzostreetorgan.com/uploads/5/5/6/7/5567194/custom_themes/139948058740159493/files/index.html',
    image: 'https://play-lh.googleusercontent.com/EiElcSrd6-o-19roiswSx0AZPzsq6qF3hUGHsSWDl5UVtj7G23DHkneM8ucwqyOmEg'
  },
  {
    id: 'helixjump',
    title: 'Helix Jump',
    url: 'https://helix-jump.game-files.crazygames.com/helix-jump/14/index.html',
    image: 'https://play-lh.googleusercontent.com/cZHORa1z78dfMsP_nxCkplmHGUx5wfjY0x2jK59GWL7rUL5o6c_KiQ7QL9o4T22qbH8'
  },
  {
    id: 'raccoonretail',
    title: 'Raccoon Retail',
    url: 'https://www.coolmathgames.com/0-raccoon-retail/play',
    image: 'https://play-lh.googleusercontent.com/zI8P-Gej0l8WK9_rRrVJuHQfZqA97ncD1RCN8qdLbmwl0uxPI8o5JLBsnJz5hxLKTYE'
  }
]
games.sort(function (a, b) {
  return a.title.localeCompare(b.title);
});
var customGameId = "customgame"; // replace with the id of the game you want to pin
var customGame = games.find(function (game) {
  return game.id === customGameId;
});
games.splice(games.indexOf(customGame), 1);
games.unshift(customGame);

var customgames = getObj("customgames")
if (customgames) customgames.forEach(game => {
  games.push(game)
})

console.log("Loaded " + games.length + " games")
if (customgames) console.log("Loaded " + customgames.length + " custom games")
