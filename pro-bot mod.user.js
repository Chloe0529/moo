// ==UserScript==
// @name         pro-bot mod
// @namespace    http://tampermonkey.net/
// @version      v1
// @description  is real
// @author       death pro yt
// @match        http://*moomoo.io/*
// @icon         https://media.tenor.com/rbh82fZnmKUAAAAM/probot-discord.gif
// @grant        none
// ==/UserScript==

function updateInnerHTML() {
    modMenus.innerHTML = `
    <style>
    .tabchange {
    color: #fff;
    background-color: #000;
    border: 2px solid transparent;
    border-radius: 4px;
    text-align: center;
    height: 25px;
    }
    .menuTabs {
    padding-left: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    }
    .holder {
    padding-left: 1em;
    }
    .nothing {
    }
    </style>
    <script>
    function test() {
    console.log("call");
    }
    </script>
    <div id = "headline" style = "font-size: 30px; color: rgb(255, 255, 255);">
    <div style = "font-size: 30px" >PrO Client V3.5</div>
    <div class = "menuTabs">
    ${HTML.button("tHome", "Home", "", "tabchange")}
    ${HTML.button("t1", "page 1", "", "tabchange")}
    ${HTML.button("t2", "page 2", "", "tabchange")}
    ${HTML.button("t3", "page 3", "", "tabchange")}
    </div>
    <div style = "font-size: 12px; overflow-y: scroll; max-height: 320px;" max-width: 150px;>
    <div id = "homeTab" style = "display: block">
    <div id = "priXP">Primary XP: 0 / not found</div>
    <div id = "secXP">Seconadry XP: 0 / not found</div>
    <div id = "healer">Healer: High Ping</div>
    </div>
    <div id = "miscTab" style = "display: none">
    Create clan: ${HTML.text("ccv", "ü", "20", "7")}${HTML.newLine(1)}
    ${HTML.button("ccf", "Create clan", `document.createAlliance(document.getElementById("ccv").value)`, "nothing")}${HTML.newLine(1)}
    ${HTML.select("autoupgrade", [{
        name: "Autoupgrade to DH",
        value: "dh",
    }, {
        name: "Autoupgrade to KH",
        value: "kh",
    }, {
        name: "Autoupgrade to SM",
        value: "sm",
    }, ])}${HTML.newLine(1)}
    7-Slot: ${HTML.select("7slot", [{
        name: "Teleporter",
        value: "38",
    }, {
        name: "Turret",
        value: "33",
    }, ])}${HTML.newLine(1)}
    </div>
    <div id = "configTab" style = "display: none">
    ${HTML.mod("configs", [{
        name: "AddAdditionalRangeOnLag",
        value: "addictdist",
        checked: true
    }, {
        name: "doAntiKickAtPacketLimit",
        value: "ak",
        checked: true
    }, {
        name: "doRenderKMTexture",
        value: "kmtexture",
    }, {
        name: "doAutoBullTick",
        value: "bulltick",
        checked: true
    }, {
        name: "doAutoQOnSync",
        value: "antisync",
        checked: true
    }, {
        name: "doAutoQOnHighPing",
        value: "autoq",
        checked: true
    }, {
        name: "doSimpleAntiInsta",
        value: "simpleheal",
        checked: true
    }, {
        name: "doTickBasedHealing",
        value: "tickheal",
        checked: true
    }, {
        name: "doTeamSyncWithChat",
        value: "teamsync",
        checked: true
    }, {
        name: "doAutoSpikeTickOnReplaced",
        value: "spiketick",
        checked: true
    }, {
        name: "doUseTurretOnCounter",
        value: "countertur",
        checked: true
    }, {
        name: "doUseSecondaryOnCounter",
        value: "countersec",
    }, {
        name: "doClickCombat",
        value: "clicktype",
    }, {
        name: "doAutoSpinning",
        value: "spin",
    }, {
        name: "doBuildingHealth",
        value: "bh",
        checked: true
    }, {
        name: "doRenderDark",
        value: "darkmode",
    }, {
        name: "doRenderShadow (CANT TURN OFF)",
        value: "shadowss",
    }, {
        name: "doShowStackedAnimtext",
        value: "stacktext",
    }, {
        name: "doDisableAnimtext",
        value: "hidetext",
    }, {
        name: "doUpperCaseChatting",
        value: "chatc",
    }, {
        name: "doTryHardMode",
        value: "tryhard",
    }, {
        name: "doAlwaysRevInsta",
        value: "alwaysrev",
        checked: true
    }, {
        name: "doAlwaysSyncRevInsta",
        value: "alwayssyncrev",
    }, {
        name: "doAlwaysSpikeInstaTurnOn",
        value: "alwayspikess",
    }, {
        name: "doCommandChat",
        value: "comchatss",
    }, {
        name: "doShowClanOnLeaderboard",
        value: "clanleaderbo",
    }, {
        name: "doAlwaysAutoAimIfClick",
        value: "autoaimclick",
    }, {
        name: "doAutoChangeWeapons",
        value: "weaponsautoch",
        checked: true
    }, {
        name: "doRevTurretGearInsta",
        value: "revturretins",
    }, {
        name: "doPlaceSpikeBoost",
        value: "placeboostss",
    }, {
        name: "doLineTracer",
        value: "linetracer",
        checked: true
    }, {
        name: "doSmoothCamera",
        value: "stmooshcamera",
    }, {
        name: "doAttackIfDoneBoostSpike",
        value: "attckdone",
    }, {
        name: "doTextHealth",
        value: "bhtext",
    }, {
        name: "doBotMoveToNear",
        value: "botmove",
    }, ])}${HTML.newLine(1)}
    <div id = "freeCam">Freecam: none</div>
    <div id = "boosttrue">Spike boost: false</div>
    <div id = "instaspiketrue">Spike insta: false</div>
    Freecam hotkey: ${HTML.hotkey("freecumLOL", "/", "2", "1")}${HTML.newLine(1)}
    4 placer hotkey: ${HTML.hotkey("stonespawn", "p", "2", "1")}${HTML.newLine(1)}
    Bow Insta hotkey: ${HTML.hotkey("bowinstakey", "t", "2", "1")}${HTML.newLine(1)}
    One Tick hotkey: ${HTML.hotkey("zeroframe", "o", "2", "1")}${HTML.newLine(1)}
    Boost and break hotkey: ${HTML.hotkey("boostsbre", "m", "2", "1")}${HTML.newLine(1)}
    Insta by essa hotkey: ${HTML.hotkey("essainsta", "r", "2", "1")}${HTML.newLine(1)}
    New insta sword hotkey: ${HTML.hotkey("newinstaspike", "u", "2", "1")}${HTML.newLine(1)}
    Toggle insta spike hotkey: ${HTML.hotkey("instawithspike", "i", "2", "1")}${HTML.newLine(1)}
    Age 2 insta hotkey: ${HTML.hotkey("ageinstass", "y", "2", "1")}${HTML.newLine(1)}
    Team Sync shot hotkey: ${HTML.hotkey("synckey", "L", "2", "1")}${HTML.newLine(1)}
    Team Sync primary hotkey: ${HTML.hotkey("syncprikey", "K", "2", "1")}${HTML.newLine(1)}
    Team Sync insta hotkey: ${HTML.hotkey("syncinstakey", "J", "2", "1")}${HTML.newLine(1)}
    Debug hotkey: ${HTML.hotkey("debugkey", "Z", "2", "1")}${HTML.newLine(1)}
    chatshortcut hotkey: ${HTML.hotkey("chatskey", ".", "2", "1")}${HTML.newLine(1)}
    Spike hotkey: ${HTML.hotkey("spikekey", "v", "2", "1")}${HTML.newLine(1)}
    Trap/Boost hotkey: ${HTML.hotkey("trapkey", "f", "2", "1")}${HTML.newLine(1)}
    Walls hotkey: ${HTML.hotkey("wallsskeyss", "O", "2", "1")}${HTML.newLine(1)}
    Turret/Teleport hotkey: ${HTML.hotkey("turretkey", "k", "2", "1")}${HTML.newLine(1)}
    Automill hotkey: ${HTML.hotkey("millkey", "z", "2", "1")}${HTML.newLine(1)}
    Toggle boost spike hotkey: ${HTML.hotkey("boostsspikes", "j", "2", "1")}${HTML.newLine(1)}
    Toggle chat mod hotkey: ${HTML.hotkey("chatmod", ",", "2", "1")}${HTML.newLine(1)}
    Say player dumb hotkey: ${HTML.hotkey("dumbkeys", "-", "2", "1")}${HTML.newLine(1)}
    Connectbot hotkey: ${HTML.hotkey("botkey", "Y", "2", "1")}${HTML.newLine(1)}
    Zoom hotkey: ${HTML.hotkey("zoomkey", "M", "2", "1")}${HTML.newLine(1)}
    Zoom reset key: ${HTML.hotkey("zoomresetkey", "=", "2", "1")}${HTML.newLine(1)}
    Song hotkey: ${HTML.hotkey("songkey", "C", "2", "1")}${HTML.newLine(1)}
    Song: ${HTML.select("songs", [{
        name: "DJ Junggle Dutch",
        value: "1",
    }, {
        name: "sound jedag jedug kece",
        value: "2",
    }, {
        name: "DJ Enakeun V9",
        value: "3",
        selected: true
    }, {
        name: "hensonn sahara x dxrk rave",
        value: "4",
    }, {
        name: "we make it bounce jedag jedug",
        value: "5",
    }, {
        name: "dj paijo mumet ndase",
        value: "6",
    }, {
        name: "dj on the floor x gak tau",
        value: "7",
    }, {
        name: "dj zerz softboy jedag jedug",
        value: "8",
    }, {
        name: "dj tangkis dang",
        value: "9",
    }, {
        name: "jantung bergoyang v2",
        value: "10",
    }, {
        name: "DJ Ganteng / Cantik",
        value: "11",
    }, {
        name: "dj coba aja dulu",
        value: "12",
    }, {
        name: "dj gk tau namanya",
        value: "13",
    }, {
        name: "stop song",
        value: "14",
    }, ])}${HTML.newLine(1)}
    AutoGG: ${HTML.select("autogg", [{
        name: "kills",
        value: "1",
    }, {
        name: "LOL U DIE SO NOOB XD",
        value: "2",
    }, {
        name: "ez lol",
        value: "3",
    }, {
        name: "AutoGG PrO|Client kills",
        value: "4",
        selected: true
    }, {
        name: "AutoGG PrO|Client",
        value: "5",
    }, {
        name: "write below",
        value: "6",
    }, {
        name: "your name + kills",
        value: "7",
    }, {
        name: "write + kills",
        value: "8",
    }, {
        name: "Noob died: kills",
        value: "9",
    }, {
        name: "[player] is so dumb",
        value: "10",
    }, ])}${HTML.newLine(1)}
    Write: ${HTML.text("killschats", "AutoGG | XD | NOOB DIE *;::;*", "15", "30")}${HTML.newLine(1)}
    ${HTML.checkBox("secondkillschat", "Second AutoGG", true, true)}${HTML.text("killchatse", "I am super PrO", "6", "30")}${HTML.newLine(1)}
    ${HTML.checkBox("thkillshat", "Third AutoGG", true, true)}${HTML.text("killchattee", "He super BAD", "6", "30")}${HTML.newLine(1)}
    Bow insta mode: ${HTML.select("modebow", [{
        name: "bow + crossbow + musket",
        value: "1",
        selected: true
    }, {
        name: "bow + crossbow + repearter",
        value: "2",
    }, ])}${HTML.newLine(1)}
    spike insta mode: ${HTML.select("modeinspi", [{
        name: "1 spike",
        value: "1",
        selected: true
    }, {
        name: "2 spike",
        value: "2",
    }, {
        name: "trap + spike",
        value: "3",
    }, ])}${HTML.newLine(1)}
    4 placer mode: ${HTML.select("modestone", [{
        name: "Walls",
        value: "1",
    }, {
        name: "Spikes",
        value: "2",
    }, {
        name: "Windmills",
        value: "3",
    }, {
        name: "Trap/Boosts",
        value: "4",
    }, {
        name: "Teleport/Turrets/mine",
        value: "5",
        selected: true,
    }, ]
    )}${HTML.newLine(1)}
    one tick mode: ${HTML.select("modezerotick", [{
        name: "v1",
        value: "1",
        selected: true
    }, {
        name: "v2",
        value: "2",
    }, {
        name: "polearm + hammer",
        value: "3",
    }, {
        name: "katana + bow",
        value: "4",
    }, ])}${HTML.newLine(1)}
    ${HTML.checkBox("onefix", "oneTickFixPosition", false)}${HTML.newLine(1)}
    ${HTML.checkBox("instarep", "instaAtSpikeTick", false)}${HTML.newLine(1)}
    insta mode: ${HTML.select("instamode", [{
        name: "v1",
        value: "1",
        selected: true
    }, {
        name: "v2",
        value: "2",
    }, {
        name: "fast rev",
        value: "revs",
    }, {
        name: "polearm + musket rev",
        value: "pmr",
    }, ])}${HTML.newLine(1)}
      ${HTML.checkBox("showch", "sendChatPacket", true, true)}${HTML.newLine(1)}
    Ratio hotkey: ${HTML.hotkey("ezkey", "p", "2", "1")}${HTML.newLine(1)}
    Vision: ${HTML.select("vision", [{
        name: "1",
        value: "1",
    }, {
        name: "1.1",
        value: "1.1",
    }, {
        name: "1.2",
        value: "1.2",
        selected: true,
    }, {
        name: "1.3",
        value: "1.3",
    }, {
        name: "1.4",
        value: "1.4",
    }, {
        name: "1.5",
        value: "1.5",
    }, ])}${HTML.newLine(1)}
    ExtraCombat(Beta): ${HTML.select("combat", [{
        name: "Default",
        value: "0",
    }, {
        name: "essa",
        value: "me",
        selected: true,
    }, {
        name: "King hans",
        value: "hans",
    }, {
        name: "Spyder",
        value: "spyder",
    }, {
        name: "L._.re",
        value: "lore",
    }, {
        name: "Celestial",
        value: "cele",
    }, {
        name: "zeph",
        value: "zeph",
    }, {
        name: "Ae86",
        value: "ae",
    }, {
        name: "FlareZ",
        value: "fz",
    }, {
        name: "Zyenith",
        value: "zyenith",
    }, ])} - <div id = "crp" style = "display: inline-block;">lol ur bad</div>${HTML.newLine(1)}
    ExtraVisual: ${HTML.select("visual", [{
        name: "Default",
        value: "0",
    }, {
        name: "essa",
        value: "cele",
        selected: true,
    }, {
        name: "Spyder",
        value: "spyder",
    }, {
        name: "L._.re",
        value: "lore",
    }, {
        name: "Celestial",
        value: "hans",
    }, {
        name: "Zeph",
        value: "zeph",
    }, {
        name: "Ae86",
        value: "ae",
    }, {
        name: "FlareZ",
        value: "fz",
    }, {
        name: "Zyenith",
        value: "zyenith",
    }, {
        name: "Ueheua",
        value: "me",
    }, ])} - <div id = "vrp" style = "display: inline-block;">lol ur b a d</div>${HTML.newLine(1)}
    </div>
    <div id = "combatTab" style = "display: none">
    (region locked) ${HTML.button("serverwarper", "Warp to Active Server", `document.warpServer()`, "nothing")}${HTML.newLine(2)}
    Object for the placer: ${HTML.select("placeconfig", [{
        name: "Walls",
        value: "1",
    }, {
        name: "Spikes",
        value: "2",
    }, {
        name: "Windmills",
        value: "3",
        selected: true,
    }, {
        name: "Trap/Boosts",
        value: "4",
    }, {
        name: "Teleport/Turrets",
        value: "5",
    }, ])}${HTML.newLine(2)}
    One-way: ${HTML.button("streamer", "Streamer Mode", "", "nothing")}${HTML.newLine(2)}
    farm
    <div class = "holder">
    ${HTML.checkBox("grind", "autoRuby", false)}${HTML.newLine(1)}
    ${HTML.checkBox("grindsec", "autoRubySec", true)}${HTML.newLine(1)}
    </div>
    anti
    <div class = "holder">
    ${HTML.checkBox("soldieranti", "soldierAntiInsta", true)}${HTML.newLine(1)}
    ${HTML.checkBox("revanti", "antiRevInsta", true)}${HTML.newLine(1)}
    ${HTML.checkBox("soldierempanti", "soldierEmpAntiInsta", true)}${HTML.newLine(1)}
    ${HTML.checkBox("antitick", "anti0Tick", true)}${HTML.newLine(1)}
    ${HTML.checkBox("antirange", "antiRangedInsta", true)}${HTML.newLine(1)}
    </div>
    autoBreak
    <div class = "holder">
    ${HTML.checkBox("earlyab", "early", true)}${HTML.newLine(1)}
    earlyWaitTime ${HTML.newLine(1)}
    ${HTML.text("earlytime", "10", "6", "5")}${HTML.newLine(1)}
    ${HTML.checkBox("abactive", "activate", true)}${HTML.newLine(1)}
    ${HTML.checkBox("ab360hit", "breakitems(Patched)", false)}${HTML.newLine(1)}
    ${HTML.checkBox("abplace", "tryPlacementEveryTick", true)}${HTML.newLine(1)}
    </div>
    music
    <div class = "holder">
    ${HTML.checkBox("msync", "sync", true)}${HTML.newLine(1)}
    </div>
    autoTrigger
    <div class = "holder" id = "syncoption">
    ${HTML.checkBox("sync", "syncShots (no chat)", false)}${HTML.newLine(1)}
    ${HTML.checkBox("syncsss", "syncShots (with chat)", false)}${HTML.newLine(1)}
    ${HTML.checkBox("syncpole", "syncPolearm (no chat)", false)}${HTML.newLine(1)}
    ${HTML.checkBox("syncpri", "syncPrimary (with chat)", false)}${HTML.newLine(1)}
    ${HTML.checkBox("syncinsta", "syncInsta", false)}${HTML.newLine(1)}
    ${HTML.checkBox("duosync", "duoSync", false)}${HTML.newLine(1)}
    syncThrottle: ${HTML.text("synccount", "1", "6", "2")}${HTML.newLine(1)}
    sync shot chat: ${HTML.text("syncschats", "Pew", "6", "20")}${HTML.newLine(1)}
    sync primary chat: ${HTML.text("syncschatpri", "Piw", "6", "20")}${HTML.newLine(1)}
    sync insta chat: ${HTML.text("syncschatinsta", "Paw", "6", "20")}${HTML.newLine(1)}
    duo sync with: ${HTML.text("userduosync", "::essa-PrO::", "6", "20")}${HTML.newLine(1)}
    duo sync mode: ${HTML.select("duomode", [{
        name: "musket only",
        value: "1",
    }, {
        name: "polearm + musket",
        value: "2",
    }, {
        name: "polearm only",
        value: "3",
    }, ])}${HTML.newLine(1)}
    </div>
    mouse
    <div class = "holder">
    ${HTML.checkBox("clicksync", "mclickSync", false)}${HTML.newLine(1)}
    </div>
    autoQ
    <div class = "holder">
    ${HTML.checkBox("evautoq", "alwaysOn", true)}${HTML.newLine(1)}
    </div>
    placement
    <div class = "holder">
    ${HTML.checkBox("replc", "autoreplace", true)}${HTML.newLine(1)}
    ${HTML.checkBox("autoplc", "placeEveryTick", true)}${HTML.newLine(1)}
    </div>
    messages
    <div class = "holder">
    ${HTML.checkBox("eautochat", "autoChat", true)}${HTML.newLine(1)}
    ${HTML.checkBox("esyncteams", "teamSyncChat", false)}${HTML.newLine(1)}
    ${HTML.checkBox("chatshort", "chatShortcut", false)}${HTML.text("chatshorttext", "hi", "6", "25")}${HTML.newLine(1)}
    ${HTML.checkBox("chattypingsss", "chatTyping", false)}${HTML.text("chattypingtext", "AFK+Messageing", "6", "25")}${HTML.newLine(1)}
    Typing type: ${HTML.select("typengtypi", [{
        name: "...",
        value: "1",
        selected: true,
    }, {
        name: ".-+_",
        value: "2",
    }, {
        name: "ABCD",
        value: "3",
    }, ])}${HTML.newLine(1)}
    </div>
    autoUpgrade
    <div class = "holder">
    ${HTML.checkBox("aaauaua", "activate", false)}${HTML.newLine(1)}
    </div>
    </div>
    </div>
    `;
}
let isDragging = false;
let offset = { x: 0, y: 0 };

modMenus.addEventListener('mousedown', (event) => {
  isDragging = true;
  offset.x = event.clientX - modMenus.offsetLeft;
  offset.y = event.clientY - modMenus.offsetTop;

  modMenus.style.transition = 'none';
});

document.addEventListener('mousemove', (event) => {
  if (isDragging) {
    const left = event.clientX - offset.x;
    const top = event.clientY - offset.y;
    modMenus.style.left = `${left}px`;
    modMenus.style.top = `${top}px`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;

  modMenus.style.transition = '';
});

updateInnerHTML();
changeDisp(getEl("tHome"));
getEl("tHome").onclick = function() {
    changeDisp(this);
}
;
getEl("t1").onclick = function() {
    changeDisp(this);
}
;
getEl("t2").onclick = function() {
    changeDisp(this);
}
;
getEl("t3").onclick = function() {
    changeDisp(this);
}
;
getEl("streamer").onclick = function() {
    streamerMode = !streamerMode;
}
;
getEl("ccv").onfocus = function() {
    canmove = false;
};
getEl("ccv").onblur = function() {
    canmove = true;
};
let oldSelect = firstConfig[0];
let newSelect = firstConfig[0];
getEl("configs").onchange = function() {
    let value = getEl("configs").value;
    let sliced = function(val) {
        return val.slice(0, val.length - 1);
    };
    oldSelect = newSelect;
    newSelect = value;
    getEl(sliced(oldSelect)).style.display = "none";
    getEl(sliced(newSelect)).style.display = "inline-block";
}
;
function checkCheckChickenModV69(a) {
    let aw = a == "0" ? "Legit" : a == "spyder" ? "Quasar Beta v0.83" : a == "lore" ? "L._.re FZ Lover" : a == "zeph" ? "J Mod" : a == "cele" ? "Goofy Ahh Mod" : a == "ae" ? "Alpine A110" : a == "fz" ? "RV2" : a == "zyenith" ? "RV3" : a == "me" ? "PrO Client" : a == "hans" ? "PrO Client" : "U r bad";
    return aw;
}

getEl("crp").innerHTML = checkCheckChickenModV69(getEl("combat").value);
getEl("vrp").innerHTML = checkCheckChickenModV69(getEl("visual").value);

document.gototouchgrass = function() {
    window.onbeforeunload = undefined;
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

let urGameRegion = "";
let botSockets = [];
let firstMan = true;
let manClan = undefined;
let healLag = 100;
var secPacket = 0;
var minPacket = 0;
var secMax = 110;
var minMax = 5100;
var secTime = 1000;
var minTime = 60000;
var firstSend = {
    sec: false,
    min: false,
};
let tmpAddress;
let wsconnected = 0;
let doMouseMove = false;
let myConfig = {
    x: 0,
    y: 0,
    sync: false,
};
let myNearAim = undefined;
let doEnemyMove = false;

function bConnect(token) {
    let o = token && new WebSocket(tmpAddress + "&token=" + encodeURIComponent(token));
    o.binaryType = "arraybuffer";
    o.id = null;
    o.firstMan = firstMan ? true : false;
    firstMan = false;
    o.sTime = 0;
    o.sCount = 0;
    o.health = 100;
    o.enemy = [];
    o.near = [];
    o.weapons = [0];
    o.items = [0, 3, 6, 10];
    o.skins = [];
    o.tails = [];
    o.score = 100;
    o.upgraded = 0;
    o.millCount = 0;
    o.moveDir = undefined;
    let snowBiomeTop = 2400;
    let riverWidth = 724;
    let mapScale = 14400;
    if (o.firstMan) {
        o.allianceNotifications = [];
        o.tickC = 0;
    }

    function wsSend(ms) {
        o.send(new Uint8Array(Array.from(window.msgpack.encode(ms))));
    }

    function botSpawn() {
        o.weapons = [0];
        o.items = [0, 3, 6, 10];
        o.score = 100;
        o.upgraded = 0;
        let hmm = ["essa-PrO fan", "PrO-Bots"]
        let botnamess = hmm[Math.floor(Math.random() * hmm.length)]
        wsSend(["sp", [{
            name: botnamess,
            moofoll: 1,
            skin: 6,
        }, ], ]);
        //"propertyIsEnumerable"
        wsSend(["7", [true]]);
        setTimeout(()=>{
            plc();
        }
        , 1000);
    }

    function plc() {
        wsSend(["5", [o.items[0]]]);
        wsSend(["c", [1]]);
        wsSend(["5", [o.weapon, true]]);
    }

    function plct(ang) {
        wsSend(["5", [o.items[4]]]);
        wsSend(["c", [1, ang]]);
        wsSend(["5", [o.weapon, true]]);
    }

    function plc1(ang) {
        wsSend(["5", [o.items[3]]]);
        wsSend(["c", [1, ang]]);
        wsSend(["5", [o.weapon, true]]);
    }

    function plca(id, ang) {
        wsSend(["5", [o.items[id]]]);
        wsSend(["c", [1, ang]]);
        wsSend(["5", [o.weapon, true]]);
    }

    function storeEquip(id, index) {
        wsSend(["13c", [0, id, index]]);
    }

    function storeBuy(id, index) {
        wsSend(["13c", [1, id, index]]);
    }

    function buyEquip(id, index) {
        if (index == 0) {
            if (o.skins[id]) {
                if (o.hat != id) {
                    storeEquip(id, 0);
                }
            } else {
                if (id == 6 && o.score >= 4000) {
                    storeBuy(id, 0);
                } else if (id == 12 && o.score >= 6000) {
                    storeBuy(id, 0);
                } else if (id == 53 && o.score >= 10000) {
                    storeBuy(id, 0);
                }
            }
        } else if (index == 1) {
            if (o.tails[id]) {
                if (o.accessory != id) {
                    storeEquip(id, 1);
                }
            } else {
                if (id == 21 && o.score >= 15000) {
                    storeBuy(id, 1);
                } else if (id == 11 && o.score >= 2000) {
                    storeBuy(id, 1);
                }
            }
        }
    }
    function autoBuyhats() {

    }
    function autoBuyAccs() {

    }

    function rad(ang) {
        return ang * (Math.PI / 180);
    }

    function sendUpgrade(index) {
        wsSend(["6", [index]]);
    }
    o.mill = {
        x: 0,
        y: 0,
    };
    o.old = {
        x: 0,
        y: 0,
    };
    o.sync = false;
    o.movedir = undefined;
    o.onmessage = function(ms) {
        let tmpData = window.msgpack.decode(new Uint8Array(ms.data));
        let data;
        if (tmpData.length > 1) {
            data = [tmpData[0], ...tmpData[1]];
            if (data[1]instanceof Array) {
                data = data;
            }
        } else {
            data = tmpData;
        }
        let item = data[0];
        if (!data)
            return;
        if (data[0] == "1" && o.id == null) {
            o.id = data[1];
        }
        if (data[0] == "11") {
            botSpawn();
        }
        if (data[0] == "33") {
            o.enemy = [];
            o.near = [];
            if (o.firstMan) {
                o.tickC += 1;
            }
            for (let i = 0; i < data[1].length / 13; i++) {
                let players = data[1].slice(13 * i, 13 * i + 13);
                if (players[0] == o.id) {
                    o.id = players[0];
                    o.x = players[1];
                    o.y = players[2];
                    o.weapon = players[5];
                    o.clan = players[7];
                    o.hat = players[9];
                    o.accessory = players[10];
                    if (o.firstMan) {
                        manClan = o.clan;
                    }
                }
                if (!(players[0] == o.id || (players[7] && players[7] == o.clan))) {
                    o.enemy.push(players);
                }
            }
            if (o.enemy.length) {
                o.near = o.enemy.sort(function(a, b) {
                    return (Math.hypot(a[2] - o.y, a[1] - o.x) - Math.hypot(b[2] - o.y, b[1] - o.x));
                })[0];
            }
            if (getEl("botmove").checked || o.enemy.length) {
                if (getEl("botmove").checked) {
                    o.movedir = myNearAim(o);
                    wsSend(["33", [myNearAim(o)]]);
                    if (Math.hypot(o.near[2] - o.y, o.near[1] - o.x) <= 300) {
                        plct(Math.atan2(o.near[2] - o.y, o.near[1] - o.x));
                    } else {
                        wsSend(["2", [Math.atan2(o.near[2] - o.y, o.near[1] - o.x)]]);
                    }
                } else {
                    o.movedir = Math.atan2(o.near[2] - o.y, o.near[1] - o.x);
                    wsSend(["33", [Math.atan2(o.near[2] - o.y, o.near[1] - o.x)]]);
                    if (Math.hypot(o.near[2] - o.y, o.near[1] - o.x) <= 300) {
                        plct(Math.atan2(o.near[2] - o.y, o.near[1] - o.x));
                    } else {
                        wsSend(["2", [Math.atan2(o.near[2] - o.y, o.near[1] - o.x)]]);
                    }
                }
            } else {
                if (o.movedir != undefined) {
                    o.movedir = undefined;
                    wsSend(["33", [undefined]]);
                }
            }
            if (Math.hypot(o.near[2] - o.y, o.near[1] - o.x) <= 300) {
                if (o.weapon != (o.weapons[0] ? o.weapons[0] : o.weapons[0])) {
                    wsSend(["5", [o.weapons[0] ? o.weapons[0] : o.weapons[0], true]]);
                }
            } else {
                if (o.weapon != o.weapons[0]) {
                    wsSend(["5", [o.weapons[0], true]]);
                }
            }
            if (myConfig.sync) {
                buyEquip(53, 0);
            } else {
                buyEquip(6, 0);
            }
            buyEquip(21, 1);
            if (o.firstMan) {
                if (!o.clan) {
                    wsSend(["8", ["PrO-bot"]]);
                } else {
                    if (o.tickC % 9 === 0) {
                        if (o.allianceNotifications.length) {
                            wsSend(["11", [o.allianceNotifications[0].sid, true]]);
                            o.allianceNotifications.splice(0, 1);
                        }
                    }
                }
            } else {
                if (o.clan && o.clan != manClan) {
                    wsSend(["9", [undefined]]);
                } else {
                    if (o.clan != manClan) {
                        wsSend(["10", [manClan]]);
                    }
                }
            }
            if (o.millCount <= 96 && !(o.y >= mapScale / 2 - riverWidth / 2 && o.y <= mapScale / 2 + riverWidth / 2) && window.location.hostname == "sandbox.moomoo.io") {
                if (o.oldy != o.y || o.oldx != o.x) {
                    if (Math.hypot(o.mill.y - o.y, o.mill.x - o.x) > 94) {
                        let ang = Math.atan2(o.old.y - o.y, o.old.x - o.x);
                        plc1(ang + rad(94 / 1.25));
                        plc1(ang - rad(94 / 1.25));
                        plc1(ang);
                        o.mill.x = o.x;
                        o.mill.y = o.y;
                    }
                    o.old.x = o.x;
                    o.old.y = o.y;
                }
            }
        }
        if (data[0] == "14") {
            if (data[1] == 3) {
                o.millCount = data[2];
            }
        }
        if (data[0] == "16") {
            if (data[1] > 0) {
                if (o.upgraded == 0) {
                    sendUpgrade(5);
                } else if (o.upgraded == 1) {
                    sendUpgrade(17);
                } else if (o.upgraded == 2) {
                    sendUpgrade(31);
                } else if (o.upgraded == 3) {
                    sendUpgrade(27);
                } else if (o.upgraded == 4) {
                    sendUpgrade(9);
                } else if (o.upgraded == 5) {
                    sendUpgrade(38);
                } else if (o.upgraded == 6) {
                    sendUpgrade(4);
                } else if (o.upgraded == 7) {
                    sendUpgrade(25);
                }
                o.upgraded++;
            }
        }
        if (data[0] == "17") {
            if (data[1]) {
                if (data[2]) {
                    o.weapons = data[1];
                } else {
                    o.items = data[1];
                }
            }
        }
        if (data[0] == "h" && data[1] == o.id) {
            let dmg = o.health - data[2];
            if (o.health - data[2] < 0) {
                if (o.sTime) {
                    let timeHit = Date.now() - o.sTime;
                    o.sTime = 0;
                    if (timeHit <= 120) {
                        o.sCount++;
                    } else {
                        o.sCount = Math.max(0, o.sCount - 2);
                    }
                }
            } else {
                o.sTime = Date.now();
            }
            if (dmg >= 10 && o.sCount < 5) {
                plc();
            } else {
                setTimeout(()=>{
                    plc();
                }
                , 80);
            }
            o.health = data[2];
        }
        if (o.firstMan) {
            if (data[0] == "an") {
                o.allianceNotifications.push({
                    sid: data[1],
                    name: data[2],
                });
            }
        }
        if (data[0] == "us") {
            if (data[3]) {
                if (!data[1])
                    o.tails[data[2]] = 1;
                else
                    o.accessory = data[2];
            } else {
                if (!data[1])
                    o.skins[data[2]] = 1;
                else
                    o.hat = data[2];
            }
        }
        if (data[0] == "9") {
            if (data[1] == "points") {
                o.score = data[2];
            } else if (data[1] == "kills") {
                wsSend(["ch", ["PrO bot kill u"]]);
                setTimeout(() => {
                        wsSend(["ch", ["Imagine got killed by bots LOL"]]);
                    }, 2000);
            }
        }
    }
    ;
    o.onopen = function() {
        wsconnected++;
        botSpawn();
        botSockets.push(o);
    }
    ;
    o.onclose = function() {
        if (o.firstMan) {
            firstMan = true;
            manClan = undefined;
        }

const Command = require("../Command");
const servers = require("../lib/data/servers");

const serverstats = require("moomoo-stats")

class StatsCommand extends Command {
    constructor(client) {
        super(client);
        this.name = "stats";
        this.cooldown = 5000;
        this.userPermissions = ["SendMessages"];
        this.description = "Requests information from MooMoo.io";
        this.options = [
            {
                name: "type",
                description: "Please put in the server type for the command.",
                type: 3,
                choices: servers.serverTypes,
                required: false
            },
            {
                name: "region",
                description: "Put in the region of the server you want to request information for.",
                type: 3,
                required: false,
                choices: servers.extractRegionsToChoices()
            },
            {
                name: "index",
                description: "Put in the index of the server you want to request information for.",
                type: 4,
                required: false
            }
        ]
        this.usage = {
            "title": `Stats command usage`,
            "description": `The stats command lets you request data about MooMoo.io servers.`,
            "fields": [
                {
                    "name": `Usage`,
                    "value": `You can use the slash command called \"stats\" to use the command.`,
                    "inline": true
                },
                {
                    "name": `Arguments`,
                    "value": `There are three arguments: \`type, region, index\``,
                    "inline": true
                },
                {
                    "name": `Providing no arguments`,
                    "value": `\nWhen you do not provide any argument, then the bot will return overall moomooio stats about all types.\n\nExample usage: \`/stats\``
                },
                {
                    "name": `Providing only a type`,
                    "value": `When you provide a type only, It will show overall statistics about the specified type. The types are set, so you can freely choose from any option given by the slash command menu.\n\nExample usage: \`/stats type:sandbox\``,
                },
                {
                    "name": `Providing a type and a region`,
                    "value": `When you provide a type and a region, the bot will return region statistics and a full list with available servers for that region (empty servers are filtered out)\n\nExample usage: \`/stats type:normal region:8\``,
                },
                {
                    "name": `Providing all arguments with index`,
                    "value": `The index is the number after the region in a server. For example, \`8:5:0\`, 5 would be the indexWhen you provide all arguments, the bot will simply return information about the given server.\n\nExample usage: \`/stats type:sandbox region:Frankfurt index:12\``,
                }
            ]
        }


    }
    /**
     *
     * @param {import("discord.js").Interaction} interaction
     * @param {import("discord.js").Interaction.args} args
     */
    async execute(interaction, args) {
        await interaction.deferReply();

        let type;
        let region;
        let index;

        for (let i = 0; i < args.length; i++) {
            let command = args[i];

            switch (command.name) {
                case "type":
                    type = command.value;
                    break;
                case "region":
                    region = command.value
                    break;
                case "index":
                    index = command.value;
                    break
            }
        }
        let stats = await serverstats(type, region, index);

        if (!type && !region && !index) {
            let allServers = stats.normal.concat(stats.sandbox).concat(stats.dev)

            let playerCounts = {
                all: 0,
                sandbox: 0,
                normal: 0,
                dev: 0
            }

            allServers.forEach(server => {
                let games = server.games[0]

                let playerCount = games.playerCount;
                playerCounts.all += playerCount
            })

            stats.sandbox.forEach(server => {
                let games = server.games[0]

                let playerCount = games.playerCount;
                playerCounts.sandbox += playerCount
            })
            stats.normal.forEach(server => {
                let games = server.games[0]

                let playerCount = games.playerCount;
                playerCounts.normal += playerCount
            })
            stats.dev.forEach(server => {
                let games = server.games[0]

                let playerCount = games.playerCount;
                playerCounts.dev += playerCount
            })
            let totaldev = stats.dev.length;
            let totalsandbox = stats.sandbox.length
            let totalnormal = stats.normal.length
            let total = totaldev + totalsandbox + totalnormal;

            await interaction.editReply({
                embeds: [{
                    title: "Total Server Stats",
                    description: "[Need help, found a bug or want more features? Click here.](https://discord.gg/NMS3YR9Q5R)",
                    fields: [
                        {
                            name: "Overall MooMoo Stats",
                            value: "---"
                        },
                        {
                            name: "Server Stats",
                            value: `Total servers: ${total} \n \n sandbox.moomoo.io: **${totalsandbox} Servers** \n dev.moomoo.io: **${totaldev} Servers** \n moomoo.io: **${totalnormal} Servers**`
                        },
                        {
                            name: "Player Stats",
                            value: `Total players: ${playerCounts.all} \n Average Players per server: ${Math.round(playerCounts.all / total)} \n sandbox: **${playerCounts.sandbox} Players** \n normal: **${playerCounts.normal} Players** \n dev: **${playerCounts.dev} Players**`,
                        }
                    ]
                }]
            })
        } else if (type && !region && !index) {
            let stats = await serverstats(type)
            let playerCount = 0;

            stats.forEach(server => {
                let games = server.games[0]

                playerCount += games.playerCount
            })
            await interaction.editReply({
                embeds: [{
                    title: `${type} statistics`,
                    description: "[Need help, found a bug or want more features? Click here.](https://discord.gg/NMS3YR9Q5R)",
                    fields: [
                        {
                            name: "Total Players",
                            value: `${playerCount} Players`,
                            inline: true
                        },
                        {
                            name: "Total Servers",
                            value: `${stats.length} Servers`,
                            inline: true
                        },
                        {
                            name: "Average Players per server",
                            value: `${Math.round(playerCount / stats.length)} Players per server`,
                            inline: true
                        }
                    ]
                }]
            })
        } else if (type && region && !index) {
            let stats = await serverstats(type, region)
            let playerCount = 0;

            stats.forEach(server => {
                let games = server.games[0]

                playerCount += games.playerCount
            })

            let formattedServers = stats
                .map(server => {
                    let playerCount = server.games[0].playerCount;
                    return `${server.region.split("vultr:")[1]}:${server.index}:0 - ${playerCount}/50 players`;
                }).filter(server => {
                    let playerCount = parseInt(server.split(" - ")[1]);
                    return playerCount > 0;
                })
                .sort((a, b) => {
                    let playerCountA = parseInt(a.split(" - ")[1]);
                    let playerCountB = parseInt(b.split(" - ")[1]);
                    return playerCountB - playerCountA;
                })
                .join("\n");

            await interaction.editReply({
                embeds: [{
                    title: `Server stats for region \`${region}\` (${type})`,
                    description: "[Need help, found a bug or want more features? Click here.](https://discord.gg/NMS3YR9Q5R)",
                    fields: [
                        {
                            name: "Total Players",
                            value: `${playerCount} Players`,
                            inline: true
                        },
                        {
                            name: "Total Servers",
                            value: `${stats.length} Servers`,
                            inline: true
                        },
                        {
                            name: "Average Players per server",
                            value: `${Math.round(playerCount / stats.length)} Players`,
                            inline: true
                        },
                        {
                            name: "Server stats",
                            value: formattedServers
                        }
                    ]
                }]
            })
        } else if (type && region && index) {
            let server = await serverstats(type, region, index);
            if (!server) {
                return await interaction.editReply("Server not found or API error.")
            }
            let embed = {
                title: `Server Statistics (${type} - ${server.region.split("vultr:")[1]}:${server.index}:0)`,
                description: "[Need help, found a bug or want more features? Click here.](https://discord.gg/NMS3YR9Q5R)",
                fields: [
                    { name: 'Player Count', value: `${server.games[0].playerCount} / 50`, inline: true },
                    { name: 'Server Scheme', value: server.scheme, inline: true }
                ],
            };

            await interaction.editReply({
                embeds: [embed]
            })
        } else {
            await interaction.editReply({
                embeds: [{
                    title: "Error: Make sure you enter the command correctly. If you need help, try `/help`.",
                    description: "[Need help, found a bug or want more features? Click here.](https://discord.gg/NMS3YR9Q5R)"
                }]
            })

            const Command = require("../Command");

class InviteCommand extends Command {
    constructor(client) {
        super(client);
        this.name = "invite";
        this.cooldown = 0;
        this.userPermissions = ["SendMessages"];
        this.description = "gives you a link to invite the bot into your server";
        this.usage = {
            title: "Invite command usage",
            description: "just write /invite to get the link for the discord bot"
        }
    }

    async execute(interaction, args) {

        await interaction.reply({
            embeds: [{
                title: "Click here to invite the bot to your discord server!",
                url: "https://discord.com/api/oauth2/authorize?client_id=892560224781742091&permissions=285615381744&scope=applications.commands%20bot"
            }]
        });
    module.exports = InviteCommand;
         const Command = require("../Command");

let cmds = []

class ExampleCommand extends Command {
    constructor(client) {
        super(client);
        this.name = "help";
        this.cooldown = 0;
        this.userPermissions = ["SendMessages"];
        this.description = "This command gives you help about other commands";
        this.example = true;
    }

    async execute(interaction, args) {
        let command = args[0].value;
        let targetCommand = cmds.find(item => item.name === command);

        await interaction.reply({
            embeds: [
                targetCommand.usage
            ]
        });
    }

    loadCommands(commands) {
        cmds = commands;
        let choices = [];
        cmds.forEach(command => {
            let choice = {
                name: command.name,
                value: command.name
            }

            choices.push(choice)
        })

        this.options = [{
            name: "command",
            description: "Choose the command you need help with.",
            type: 3,
            required: true,
            choices: choices
        }]
 r4module.exports = ExampleCommand;
        const Command = require("../Command");

class ExampleCommand extends Command {
    constructor(client) {
        super(client);
        this.name = "example";
        this.cooldown = 5000;
        this.userPermissions = ["SendMessages"];
        this.description = "This is an example command";
        this.example = true;
        // https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type
        this.options = [
            {
                "name": "example",
                "description": "ExampleDescription",
                "type": 3,
                "required": true,
                "choices": [
                    {
                        "name": "optionone",
                        "value": "optionvalue"
                    },
                    {
                        "name": "optiontwo",
                        "value": "optionvaluetwo"
                    }
                ]
            }
        ]
    }

    async execute(interaction, args) {
        console.log(args)
        await interaction.reply("This is an example command.");
    }
}

module.exports = ExampleCommand;
        module.exports.regions = {
    "vultr:8": {
        name: "London",
        latitude: 51.5283063,
        longitude: -0.382486
    },
    "vultr:9": {
        name: "Frankfurt",
        latitude: 50.1211273,
        longitude: 8.496137
    },
    "vultr:12": {
        name: "Silicon Valley",
        latitude: 37.4024714,
        longitude: -122.3219752
    },
    "vultr:39": {
        name: "Miami",
        latitude: 25.7823071,
        longitude: -80.3012156
    },
    "vultr:40": {
        name: "Singapore",
        latitude: 1.3147268,
        longitude: 103.7065876
    }
}

module.exports.extractRegionsToChoices = function () {
    let choices = [];
    Object.keys(module.exports.regions).forEach(key => {
        if (key.startsWith("vultr:")) {
            let number = key.split(":")[1];
            let name = module.exports.regions[key].name;
            choices.push({
                name: number,
                value: number
            });
            choices.push({
                name: name,
                value: number
            });
        }
    });
    return choices;
}

   module.exports.serverTypes =
       [
        name: "sandbox",
        value: "sandbox"
    },
    {
        name: "dev",
        value: "dev"
    },
    {
        name: "mm_beta",
        value: "mm_beta"
    },
    {
        name: "normal",
        value: "normal"
    }
]
        =class Command {
    constructor(client) {
        this.client = client;
        this.name = "";
        this.aliases = [];
        this.cooldown = 0;
        this.userPermissions = [];
        this.lastUse = 0;
        this.description = ""
    }

    execute() {
        throw new Error("The execute method must be implemented in the command.");
    }
}

module.exports = Command;
        require("dotenv").config();

const { REST, Routes } = require("discord.js");

async function restApiCall(TOKEN, commands) {
    const rest = new REST({ version: "10" }).setToken(TOKEN);
    try {
        console.log("Started refreshing application (/) commands.");
        await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });

        console.log("Successfully reloaded application (/) commands.");
    } catch (error) {
        console.error(error);
    }
}

module.exports = restApiCall;
        require("dotenv").config();

const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [Discord.IntentsBitField.Flags.Guilds, Discord.IntentsBitField.Flags.GuildMessages, Discord.IntentsBitField.Flags.GuildMembers]
});
const fs = require("fs");

const commandFiles = fs.readdirSync("./src/commands").filter(file => file.endsWith(".js"));
const commands = [];

for (const file of commandFiles) {
    const CommandClass = require(`./src/commands/${file}`);
    const command = new CommandClass(client);
    if (!command.example) {
        commands.push(command);
    }
}

const helpCommand = require(`./src/commands/help`);
const help = new helpCommand(client);

help.loadCommands(commands);
commands.push(help)

require('./src/restApiCall')(process.env.BOT_TOKEN, commands)

client.on("interactionCreate", async interaction => {
    if (!interaction.isChatInputCommand()) return;
    const command = commands.find(c => c.name === interaction.commandName || c.aliases.includes(interaction.commandName));
    if (!command) return;

    if (command.userPermissions && interaction.member.permissions.has(...command.userPermissions)) {
        let permissions = [...command.userPermissions]
        let saveperms = []
        interaction.member.permissions.toArray().forEach(permission => {
            if(permissions.includes(permission)) {
                saveperms.push(permission)
            }
        })
        let hasPermission = permissions.toString() == saveperms.toString()
        if(!hasPermission) {
            interaction.reply("You dont have permissions to execute this command.");
            return;
        }
    }
    if (command.cooldown) {
        const timeSinceLastUse = Date.now() - (command.lastUse || 0);
        if (timeSinceLastUse < command.cooldown) {
            const timeLeft = (command.cooldown - timeSinceLastUse) / 1000;
            await interaction.reply(`Please wait ${timeLeft.toFixed(1)} seconds before using this command again.`);
            return;
        }
    }

    command.lastUse = Date.now();
    try {
        await command.execute(interaction, interaction.options.data);
    } catch (error) {
        console.error(error);
        await interaction.reply("An error occurred while executing the command.");
    }
});

client.on("ready", function() {
    console.log("ready as " + client.user.tag)
})

client.login(process.env.BOT_TOKEN);
        {
  "dependencies": {
    "axios": "^1.3.2",
    "discord.js": "^14.7.1",
    "dotenv": "^16.0.3",
    "fs": "^0.0.1-security",
    "moomoo-recaptcha-token-generator": "^1.0.3",
    "moomoo-stats": "^1.0.1",
    "msgpack-lite": "^0.1.26",
    "ws": "^8.12.0"
  }
}
  let func: any = Function.prototype;

export let MooMoo = func[69];
if (!MooMoo) {
    const Game = require("./src/index").default;
    const updateHookPosition = require("./src/ws/packets/server/updatePlayers").updateHookPosition;
    const initRendering = require("./src/lib/rendering/initRendering").default;
    MooMoo = new Game();
    Object.defineProperty(Function.prototype, 69, {
        get() {
            return MooMoo;
        }
    })
    let sym = Symbol();

    Object.defineProperty(Object.prototype, "x", {
        set(data) {
            this[sym] = data;
            updateHookPosition.call(this, data);
        },
        get() {
            return this[sym];
        }
    })
    initRendering();
}
  // Define custom types
type CommandType = "command";
type FunctionType = "function";
type NodeType = CommandType | FunctionType;

type CustomError = ParseError | ValidationError;

type AstNode = FunctionNode | CommandNode;

interface CommandNode {
  type: CommandType;
  command: string;
  args: string[];
}

interface FunctionNode {
  type: FunctionType;
  name: string;
  body: CommandNode[];
}

interface FunctionTable {
  [name: string]: {
    call: () => void;
  };
}

interface CommandDefinition {
  exec: (args: string[]) => void | Promise<void>;
}

interface CommandTable {
  [key: string]: CommandDefinition;
}

interface IVultr {
  readonly servers: ReadonlyArray<{
    ip: string;
    scheme: string;
    region: string;
    index: number;
    games: ReadonlyArray<{
      playerCount: number;
      isPrivate: boolean;
    }>;
  }>;
}

interface IRecaptchaExecute {
  execute(token: string, action: { action: string }): Promise<string>;
}

interface Window {
  readonly vultr: IVultr;
  readonly grecaptcha: IRecaptchaExecute;
}

interface ParseError {
  type: "ParseError";
  message: string;
}

interface ValidationError {
  type: "ValidationError";
  message: string;
}
            const path = require('path');


const TerserWebpackPlugin = require('terser-webpack-plugin');


module.exports = {
    mode: 'production',
    entry: './app.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimizer: [
            new TerserWebpackPlugin({
                terserOptions: {
                    compress: false,
                    mangle: {
                        keep_classnames: true,
                        keep_fnames: true
                    },
                    parse: false,
                    output: false,
                    format: {
                        beautify: true,
                    }
                }
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.coffee$/,
                loader: "coffee-loader",
              },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
                    {
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "commonjs",
    "target": "es6",
    "jsx": "react",
    "allowJs": true,
    "moduleResolution": "node",
    "lib": ["dom"],
    "strict": false,
  }
}
            {
  "dependencies": {
    "typo-js": "^1.2.2",
    "webpack": "^5.75.0",
    "webpack-cli": "^5.0.0"
  },
  "scripts": {
    "build": "webpack --watch"
  },
  "devDependencies": {
    "@types/typo-js": "^1.2.0",
    "coffee-loader": "^4.0.0",
    "coffeescript": "^2.7.0",
    "ts-loader": "^9.4.2",
    "typescript": "^4.9.3"
  }
}
            const MooMoo = (function MooMooJS_beta() {})[69]

const styles = {
    position: "absolute",
    top: "0",
    paddingLeft: "5px",
    fontSize: "2em",
    color: "#fff"
};

MooMoo.onGameLoad = () => {
    initializeActionBar()
}

function initializeActionBar() {
    'use strict';
    const actionBarItems = document.getElementsByClassName("actionBarItem");

    for (let i = 0; i < actionBarItems.length; i++) {
        if (i >= 19 && i <= 38) {
            const divElement = createActionBarItem(i);
            appendActionBarItem(divElement, i);
        }
    }

    function createActionBarItem(index)

    // ==/UserScript==

// https://nuroc.github.io/MooMoo.js/#installing-and-getting-started
const MooMoo = (function MooMooJS_beta() {})[69]

// https://github.com/NuroC/moomoo-in-depth/tree/main/protocol/server#updatehealth
MooMoo.addEventListener("updatehealth", (data) => {
    let sid = data[0]
    let health = data[1]

    // https://nuroc.github.io/MooMoo.js/Player#accessing-player-data-and-information
    if (MooMoo.myPlayer.sid === sid && health < 100) {

        // https://nuroc.github.io/MooMoo.js/Player#accessing-player-data-and-information
        let food = MooMoo.myPlayer.inventory.food;

        // https://nuroc.github.io/MooMoo.js/Player#placing-items
        MooMoo.myPlayer.place(food)
    }
})
    const MooMoo = (function () {})[69];

// New variables
const BOT_NAME = "Nuro";
const BOT_SKIN = 1;
const BOT_MOOFOLL = true;
const BOT_CONNECT_EVENT = "connected";
const BOT_PACKET_EVENT = "packet";
const BOT_JOIN_REGION_INDEX = "join";
const BOT_POSITION_UPDATE_INTERVAL = 100;
const BOT_POSITION_UPDATE_PACKET = "33";
const COMMAND_PREFIX = "/";
const COMMAND_NAME_SEND = "send";
const COMMAND_NAME_DISCONECT = "disconnect";
const COMMAND_RESPONSE_SEND = "sending 4 more bots...";
const COMMAND_RESPONSE_DISCONNECT = "disconnecting bots...";
const BOT_COUNT_TO_ADD = 4;
const IP_LIMIT = 4;
const BOT_COUNT = IP_LIMIT - 1;


const botManager = MooMoo.BotManager;
let CommandManager = MooMoo.CommandManager;

CommandManager.setPrefix(COMMAND_PREFIX);

class Bot {
    static generateBot(botManager) {
        const bot = new botManager.Bot(true, {
            name: BOT_NAME,
            skin: BOT_SKIN,
            moofoll: BOT_MOOFOLL
        });
        bot.addEventListener(BOT_CONNECT_EVENT, server => {
            bot.spawn();
        });
        bot.addEventListener(BOT_PACKET_EVENT, packetData => {
            if (packetData.packet === "11") bot.spawn();
        });
        const { region, index } = MooMoo.ServerManager.extractRegionAndIndex();
        bot[BOT_JOIN_REGION_INDEX]([region, index]);
        botManager.addBot(bot);
        setInterval(() => {
            if (!bot.x || !bot.y) return;
            const playerAngle = Math.atan2(MooMoo.myPlayer.y - bot.y, MooMoo.myPlayer.x - bot.x);
            bot.sendPacket(BOT_POSITION_UPDATE_PACKET, playerAngle);
        }, BOT_POSITION_UPDATE_INTERVAL);
    }
}

MooMoo.addEventListener(BOT_PACKET_EVENT, () => {
    if (MooMoo.myPlayer) {
        if (botManager._bots.size < BOT_COUNT) {
            Bot.generateBot(botManager);
        }
    }
});

CommandManager.registerCommand(COMMAND_NAME_SEND, (Command, args) => {
    Command.reply(COMMAND_RESPONSE_SEND);
    for (let i = 1; i <= BOT_COUNT_TO_ADD; i++) {
        Bot.generateBot(botManager)

