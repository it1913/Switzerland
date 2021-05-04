const historicalEvents = [
    {
        "name": "Starověké kmeny a Římané",
        "context": "Území dnešního Švýcarska bylo ve starověku osídleno na západě keltským kmenem Helvétů (viz dnešní označení „země helvétského kříže“) a na severovýchodě kmenem Rétů (zřejmě etruského původu). V roce 58 př. Kr. porazil Helvéty Julius Caesar a jejich území se stalo součástí Římské říše. Později se totéž přihodilo i Rétům."
    },
    {
        "name": "Zárodky jazykového rozdělení",
        "context": "Zatímco Burgundové v západní části země přejali křesťanství a latinu, Alamanové na východě se o římskou kulturu nezajímali. Tak byly položeny základy dnešního rozdělení na francouzsky a německy mluvící část. Mezi Alamany rozšířili křesťanství teprve irští mniši v 7. století – např. sv. Gallus (česky Havel) se usadil jako poustevník poblíž dnešního města St. Gallen."
    },
    {
        "name": "Příchod Habsburků",
        "context": "O moc tu soupeřily mocné šlechtické rody Zähringenů, Habsburků, Kyburgů a Savojských. Zprvu měli převahu říšští správci Zähringenové, kteří založili mnoho významných měst, např. Fribourg a Bern, a vybudovali mj. hrad v Thunu. Po jejich vymření začali ve Švýcarsku dominovat Habsburkové. Rudolf Habsburský, přemožitel našeho krále Přemysla Otakara II. na Moravském poli, se stal v roce 1273 německým císařem a zvýšil tlak na výběr daní."
    },
    {
        "name": "Vznik švýcarského spříseženstva",
        "context": "Nespokojenost přivedla Švýcary k povstání proti Habsburkům. Nejslavnější událost švýcarských dějin se odehrála 1. srpna 1291 na louce Rütli, kde se sešli zástupci „lesních kantonů“ Uri, Schwyz a Unterwalden, aby slavnostně odmítli jakoukoliv vnější soudní a právní moc. Jinými slovy vyhlásili svoji nezávislost na šlechtických rodech, kterou jim už dříve přiznali římští císařové za účelem ochrany strategicky důležitých průsmyků mezi Německem a Itálií (především průsmyku svatého Gottharda). První srpen je dnes státním svátkem."
    },
    {
        "name": "Vilém Tell",
        "context": "Ze vzniku spříseženstva rovněž pochází legenda o Vilému Tellovi. Podle ní umístil rakouský soudce pro kantony Uri a Schwyz Hermann Gessler svůj klobouk na tyč a očekával, že se obyvatelé tomuto symbolu habsburské vlády pokloní. Vilém Tell to však odmítl, byl uvězněn a odsouzen k trestu smrti. Gessler slyšel o jeho pověsti výtečného lučištníka a slíbil milost jemu i jeho synovi v případě, že se Tellovi podaří sestřelit šípem jablko z hlavy svého syna. To se Tellovi ku Gesslerově zklamání povedlo, dostal milost a později Gesslera zabil. Vilém Tell zřejmě jako historická postava nikdy neexistoval, legenda o něm se však ve vojenském boji proti Habsburkům velmi hodila. Za celosvětovou slávu svého národního hrdiny vděčí Švýcaři především německému dramatikovi Friedrichu Schillerovi (drama Vilém Tell) a italskému skladateli Rossinimu (opera Guillermo)."
    },
    {
        "name": "Vojenská expanze",
        "context": "Historie 14. a 15. století je přehlídkou vojenských úspěchů Švýcarů v bojích proti Habsburkům i vévodům burgundským. Stateční rolníci měli převahu nad po zuby ozbrojenými rytíři. Území konfederace se postupně zvětšovalo. Ve 14. století se připojila města Luzern, Curych, Bern a kantony Zug a Glarus, čímž vznikl tzv. „Spolek osmi“ nadlouho jediných plnoprávných členů. Další připojená území byla těmto kantonům podřízena. V roce 1499 odrazilo spříseženstvo v bitvě u Dornachu i vojska císaře Maxmiliána I., který následně formálně potvrdil jejich nezávislost na Svaté říši římské. V roce 1513 už existovalo třináct kantonů (přibyly Fribourg, Solothurn, Basilej, Schaffhausen, Appenzell) a řada přidružených území. Tento stav vydržel v podstatě až do roku 1798."
    },
    {
        "name": "Reformace",
        "context": "Švýcarsko se stalo jedním z center reformace, jejímiž vůdčími osobnostmi byl v Curychu kazatel Huldrych Zwingli a v Ženevě vyhoštěný francouzský právník Jan Kalvín. Zejména Kalvínova verze náboženství založená na asketismu, přísné morálce, tvrdé práci a sebevzdělávání se šířila i do dalších oblastí Evropy. Během třicetileté války (1618-48) se kantony nedokázaly dohodnout, na kterou stranu se přiklonit, a tak zůstalo Švýcarsko se svou silnou armádou nadále neutrální. Švýcarští žoldnéři sloužili na obou stranách. Svoboda konfederace byla v roce 1648 potvrzena Vestfálským mírem. Během války přišla do země řada uprchlíků, zejména hugenotů (francouzských kalvinistů). Zachování neutrality pomohlo hospodářskému rozvoji, především textilnímu, ale také hodinářskému průmyslu."
    },
    {
        "name": "Napoleonské války",
        "context": "Během Velké francouzské revoluce sympatizovaly frankofonní kantony s Francií, což ohrožovalo jednotu země. V roce 1798 obsadil Švýcarsko Napoleon a vytvořil centralizovanou Helvétskou republiku, čímž prakticky zrušil kantony. Republika se stala velmi nepopulární a byla držena při životě jen francouzským vojskem. V roce 1803 nakonec Napoleon obnovil konfederaci, kterou však už tvořilo 19 rovnoprávných kantonů (nově St. Gallen, Graubünden, Aargau, Thurgau, Ticino a Vaud) stále pod dohledem Francie. Po Napoleonově konečné porážce v bitvě u Waterloo v roce 1815 uznaly velmoci na Vídeňském kongresu věčnou neutralitu a nedotknutelnost hranic Švýcarska. Tehdy byly připojeny poslední kantony Valais, Ženeva a Neuchâtel, dříve vyčleněné Napoleonem."
    },
    {
        "name": "Vznik ústavy",
        "context": "V roce 1847 propukla občanská válka, když se katolické kantony („Sonderbund“) pokusily odtrhnout, byly však protestanty velmi rychle poraženy. Následně vznikla v roce 1848 nová federální ústava, která je v hlavních rysech platná dodnes. V čele státu stojí od té doby federální prezident volený na jeden rok, jeho pravomoci jsou však minimální. Každý kanton má svou ústavu, parlament a vládu. Hlavním městem se stal Bern. V dolní komoře (Národní rada) má každý kanton počet poslanců odpovídající poměrnému počtu jeho obyvatel, v horní komoře (Stavovská rada) má každý kanton dva poslance bez ohledu na počet obyvatel."
    },
    {
        "name": "Druhá světová válka",
        "context": "Také za druhé světové války nenarušila žádná ze stran neutralitu Švýcarska, přestože bylo obklopeno Hitlerovým Německem, Mussoliniho Itálii a proněmeckým vichistickým režimem ve Francii a přestože část německy mluvících obyvatel s nacisty sympatizovala. Generál Henry Guisan, vrchní velitel armády, provedl rozsáhlou mobilizaci. Všechny nejvyšší vojenské představitele nechal shromáždit na louce Rütli, kde se v roce 1291 při slavnostní přísaze zrodilo spříseženstvo, a nechal je znovu přísahat věrnost Konfederaci. Silná armáda, dlouhá tradice demokracie a lidských práv, hospodářské ústupky Němcům a jejich problémy v jiných částech Evropy zabránily invazi Hitlera. Švýcarský frank zůstal za války jedinou významnou volně směnitelnou měnou. Spojenci i Němci prodávali Švýcarské národní bance obrovské sumy zlata."
    },
    {
        "name": "Druhá polovina 20. století",
        "context": "V mezinárodních vztazích se Švýcarsko stalo respektovanou zemí a po válce se zde usídlilo mnoho mezinárodních organizací včetně OSN. Paradoxně se přísně neutrální Švýcarsko nestalo členem téměř žádné z těchto organizací. Díky neúčasti ve válečných konfliktech nadále zvýšilo svůj náskok komerčního, finančního, pojišťovacího a průmyslového centra a zařadilo se mezi nejbohatší státy světa. V roce 1963 se připojilo k Radě Evropy. Teprve v roce 1971 zde získaly ženy volební právo. V roce 1979 se od Bernu oddělil nový kanton Jura (nyní jich je 23, z nichž tři se dělí na dva „polokantony“). Zmírnění izolace a pomalý ústup od neutrality naznačuje vstup Švýcarska do OSN schválený v referendu v roce 2002."
    }
];

$(function () {
historicalEvents.forEach((historicalEvents) => {
    $("#seznam").append(`<li class="list-group-item list-group-item-action list-group-item-primary akce">${historicalEvents.name}</li>`);
 });
 
 function fillText(text) {
    let historical = historicalEvents.find(item => { return item.name === text });
    console.log(historical);
    $("#vypis").text(historical.context);
}
fillText(historicalEvents[0].name);
$("#seznam li").on('click', function () {
    fillText($(this).text());
    console.log($(this).text());
    console.log("ahoj");
});
})