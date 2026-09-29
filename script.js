(function () {
  "use strict";

  var STORAGE_TRUCKS = "foodtruckheaven.trucks.v1";
  var STORAGE_COUNTRY = "foodtruckheaven.country";
  var STORAGE_FAV = "foodtruckheaven.favs.v1";
  var STORAGE_ASK = "foodtruckheaven.asks.v1";
  var STORAGE_REV = "foodtruckheaven.revs.v1";
  var MAX_DAYS = 45;

  var COPY = {
    sv: {
      skip: "Hoppa till kartan",
      visitor: "Besökare",
      tagline: "En foodtruck marknadsför sig genom att lägga in sig själv. Du hittar den på kartan, i det land du är i. Är du i Sverige ser du trucks i Sverige. Är du i Norge ser du trucks i Norge.",
      ownerTitle: "Marknadsför din foodtruck",
      ownerHelp: "Du marknadsför din truck genom att lägga in namn, bilder på trucken, bilder på maten, plats och öppettider. Besökare i samma land hittar dig på kartan. Besökare i ett annat land ser dig inte. Besökaren ser bara det du lägger in: namn, bilder, plats och öppettider. En dag, eller många dagar framåt om du står på samma plats. På den här sidan sparas uppgifterna i den här webbläsaren.",
      name: "Namn",
      photoHeading: "Bilder",
      photoIntro: "Lägg upp bilder på hur trucken ser ut, och bilder på maten. Besökaren ser bara de bilder du har lagt in.",
      photo: "Trucken",
      photoTruckHelp: "Hur trucken ser ut.",
      food: "Maten",
      foodHelp: "Maten du serverar.",
      codeLabel: "Rabattkod",
      codeHelp: "Skriv en kod om du vill ge den till dem som har din truck som favorit. Koden syns inte på kartan.",
      codeBlank: "Lämna tomt om du inte har någon kod.",
      codeForFav: "Den här koden har ägaren lagt in för dig som har trucken som favorit.",
      codeNone: "Ingen rabattkod är inlagd.",
      codeAskTitle: "Be om rabattkod",
      codeAskBody: "Fyll i när du tänker besöka trucken. Knappen går att använda bara när besöket är inom 60 minuter. Inte tidigare, och inte efter tiden. Förfrågan skapar ingen kod. Ser du en kod är det en kod ägaren själv har skrivit in, och den syns bara om du har trucken som favorit.",
      codeAskTime: "Tid för besöket",
      codeAskSend: "Be om rabattkod",
      codeAskEarly: "Det är för tidigt. Du kan be om en rabattkod tidigast 60 minuter före besöket.",
      codeAskLate: "Tiden har passerat. Du kan be om en rabattkod bara inom 60 minuter före besöket.",
      codeAskSent: "Förfrågan är skickad. Den skapar ingen kod. Ser du en kod är det en kod ägaren själv har skrivit in, och den syns bara om du har trucken som favorit.",
      favTitle: "Favorit",
      favBody: "Märk en truck som favorit så hittar du tillbaka till den. Favoriten lägger inte till något i kartpopupen. Där står fortfarande bara namn, bilder, plats och öppettider.",
      favMark: "Märk som favorit",
      favDone: "Favorit",
      favEmpty: "Du har inga favoriter ännu.",
      askTitle: "Be trucken komma",
      askBody: "Be en truck komma till en plats vid en tid. Trucken ser plats och tid. Inget annat.",
      askPlace: "Plats",
      askTime: "Tid",
      askSend: "Skicka förfrågan",
      askNeed: "Fyll i plats och tid.",
      askSent: "Förfrågan skickad. Trucken ser plats och tid.",
      revTitle: "Recension",
      revBody: "En recension är tre bilder som besökaren själv lägger in. En på maten, en på foodtrucken och en på menyn. Ingen text, och inga andra recensioner.",
      revFood: "Maten",
      revTruck: "Foodtrucken",
      revMenu: "Menyn",
      revSend: "Skicka recension",
      revNeed: "Lägg in en bild på maten, en på foodtrucken och en på menyn.",
      revSaved: "Recensionen är sparad.",
      revEmpty: "Ingen recension är inlagd.",
      city: "Plats",
      pinMissing: "Platsen på kartan saknas.",
      pinSet: "Plats satt på kartan.",
      pick: "Välj plats på kartan",
      when: "När står ni där",
      oneDay: "En dag",
      manyDays: "Många dagar framåt",
      date: "Dag",
      from: "Från",
      to: "Till",
      open: "Öppnar",
      close: "Stänger",
      save: "Spara foodtrucken",
      cancel: "Avbryt",
      place: "Klicka på kartan där trucken står.",
      placeCancel: "Avbryt",
      listAll: "Hitta foodtrucken på kartan",
      listToday: "Ute idag",
      filterAll: "Alla",
      filterToday: "Idag",
      emptyAll: "Inga foodtrucks är inlagda i det här landet ännu.",
      emptyToday: "Ingen av de inlagda truckarna är ute idag.",
      summary: "{n} foodtrucks",
      openNow: "Öppen nu",
      later: "Ute idag",
      off: "Inte idag",
      everyDay: "Varje dag",
      weekdays: "Vardagar",
      weekends: "Helg",
      days: "{n} dagar",
      remove: "Ta bort min truck",
      closeDialog: "Stäng",
      hours: "Öppet {from}–{to}",
      needName: "Skriv vad foodtrucken heter.",
      needCity: "Skriv platsen med ord.",
      needPin: "Klicka på kartan och sätt platsen.",
      needDate: "Välj en dag.",
      needRange: "Välj från och till.",
      badRange: "Slutdagen måste vara samma dag eller senare.",
      longRange: "Högst " + MAX_DAYS + " dagar åt gången.",
      badHours: "Stängning måste vara efter öppning.",
      saved: "Sparad. Den syns på kartan i den här webbläsaren.",
      photoFail: "Bilden fick inte plats och sparades inte. Trucken är sparad utan bild.",
      footer: "Tryck på en truck. Du ser namn, bilder, plats och öppettider. Det är det ägaren har lagt in. Inget annat.",
      outside: "Foodtruckheaven.com visar Sverige och Norge. Vi gissade Sverige eftersom du verkar vara någon annanstans.",
      mapLabel: "Karta över foodtrucks",
      countryLabel: "Land"
    },
    nb: {
      skip: "Hopp til kartet",
      visitor: "Besøkere",
      tagline: "En foodtruck markedsfører seg ved å legge seg inn selv. Du finner den på kartet, i det landet du er i. Er du i Sverige ser du trucks i Sverige. Er du i Norge ser du trucks i Norge.",
      ownerTitle: "Markedsfør foodtrucken din",
      ownerHelp: "Du markedsfører trucken ved å legge inn navn, bilder av trucken, bilder av maten, sted og åpningstider. Besøkende i samme land finner deg på kartet. Besøkende i et annet land ser deg ikke. Besøkende ser bare det du legger inn: navn, bilder, sted og åpningstider. Én dag, eller mange dager fremover om du står på samme plass. På denne siden lagres opplysningene i denne nettleseren.",
      name: "Navn",
      photoHeading: "Bilder",
      photoIntro: "Legg ut bilder av hvordan trucken ser ut, og bilder av maten. Besøkende ser bare bildene du har lagt inn.",
      photo: "Trucken",
      photoTruckHelp: "Hvordan trucken ser ut.",
      food: "Maten",
      foodHelp: "Maten du serverer.",
      codeLabel: "Rabattkode",
      codeHelp: "Skriv en kode om du vil gi den til dem som har trucken din som favoritt. Koden vises ikke på kartet.",
      codeBlank: "La stå tomt om du ikke har en kode.",
      codeForFav: "Denne koden har eieren lagt inn for deg som har trucken som favoritt.",
      codeNone: "Ingen rabattkode er lagt inn.",
      codeAskTitle: "Be om rabattkode",
      codeAskBody: "Fyll inn når du tenker å besøke trucken. Knappen kan bare brukes når besøket er innen 60 minutter. Ikke tidligere, og ikke etter tiden. Forespørselen lager ingen kode. Ser du en kode, er det en kode eieren selv har skrevet inn, og den vises bare om du har trucken som favoritt.",
      codeAskTime: "Tid for besøket",
      codeAskSend: "Be om rabattkode",
      codeAskEarly: "Det er for tidlig. Du kan be om en rabattkode tidligst 60 minutter før besøket.",
      codeAskLate: "Tiden har passert. Du kan be om en rabattkode bare innen 60 minutter før besøket.",
      codeAskSent: "Forespørselen er sendt. Den lager ingen kode. Ser du en kode, er det en kode eieren selv har skrevet inn, og den vises bare om du har trucken som favoritt.",
      favTitle: "Favoritt",
      favBody: "Merk en truck som favoritt så finner du tilbake til den. Favoritten legger ikke til noe i kartpopupen. Der står fortsatt bare navn, bilder, sted og åpningstider.",
      favMark: "Merk som favoritt",
      favDone: "Favoritt",
      favEmpty: "Du har ingen favoritter ennå.",
      askTitle: "Be trucken komme",
      askBody: "Be en truck komme til et sted på et tidspunkt. Trucken ser sted og tid. Ikke noe annet.",
      askPlace: "Sted",
      askTime: "Tid",
      askSend: "Send forespørsel",
      askNeed: "Fyll inn sted og tid.",
      askSent: "Forespørselen er sendt. Trucken ser sted og tid.",
      revTitle: "Anmeldelse",
      revBody: "En anmeldelse er tre bilder som besøkende selv legger inn. Ett av maten, ett av foodtrucken og ett av menyen. Ingen tekst, og ingen andre anmeldelser.",
      revFood: "Maten",
      revTruck: "Foodtrucken",
      revMenu: "Menyen",
      revSend: "Send anmeldelse",
      revNeed: "Legg inn et bilde av maten, ett av foodtrucken og ett av menyen.",
      revSaved: "Anmeldelsen er lagret.",
      revEmpty: "Ingen anmeldelse er lagt inn.",
      city: "Sted",
      pinMissing: "Stedet på kartet mangler.",
      pinSet: "Sted satt på kartet.",
      pick: "Velg sted på kartet",
      when: "Når står dere der",
      oneDay: "Én dag",
      manyDays: "Mange dager fremover",
      date: "Dag",
      from: "Fra",
      to: "Til",
      open: "Åpner",
      close: "Stenger",
      save: "Lagre foodtrucken",
      cancel: "Avbryt",
      place: "Klikk på kartet der trucken står.",
      placeCancel: "Avbryt",
      listAll: "Finn foodtrucken på kartet",
      listToday: "Ute i dag",
      filterAll: "Alle",
      filterToday: "I dag",
      emptyAll: "Ingen foodtrucks er lagt inn i dette landet ennå.",
      emptyToday: "Ingen av de innlagte truckene er ute i dag.",
      summary: "{n} foodtrucks",
      openNow: "Åpen nå",
      later: "Ute i dag",
      off: "Ikke i dag",
      everyDay: "Hver dag",
      weekdays: "Ukedager",
      weekends: "Helg",
      days: "{n} dager",
      remove: "Fjern trucken min",
      closeDialog: "Lukk",
      hours: "Åpent {from}–{to}",
      needName: "Skriv hva foodtrucken heter.",
      needCity: "Skriv stedet med ord.",
      needPin: "Klikk på kartet og sett stedet.",
      needDate: "Velg en dag.",
      needRange: "Velg fra og til.",
      badRange: "Sluttdagen må være samme dag eller senere.",
      longRange: "Høyst " + MAX_DAYS + " dager om gangen.",
      badHours: "Stenging må være etter åpning.",
      saved: "Lagret. Den vises på kartet i denne nettleseren.",
      photoFail: "Bildet fikk ikke plass og ble ikke lagret. Trucken er lagret uten bilde.",
      footer: "Trykk på en truck. Du ser navn, bilder, sted og åpningstider. Det er det eieren har lagt inn. Ikke noe annet.",
      outside: "Foodtruckheaven.com viser Sverige og Norge. Vi gjettet Sverige fordi du ser ut til å være et annet sted.",
      mapLabel: "Kart over foodtrucks",
      countryLabel: "Land"
    }
  };

  var WEEK = {
    sv: ["sön", "mån", "tis", "ons", "tor", "fre", "lör"],
    nb: ["søn", "man", "tir", "ons", "tor", "fre", "lør"]
  };
  var MONTH = {
    sv: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
    nb: ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"]
  };

  var BOUNDS = {
    SE: [[55.2, 10.8], [69.1, 24.3]],
    NO: [[57.9, 4.4], [71.3, 31.3]]
  };

  var state = {
    country: "SE",
    lang: "sv",
    mode: "visitor",
    filter: "all",
    placing: false,
    pin: null,
    truckPhoto: null,
    foodPhoto: null,
    outside: false
  };

  var map;
  var markers;
  var selectedId = null;

  function t(key) { return COPY[state.lang][key] || ""; }
  function $(id) { return document.getElementById(id); }

  function isoDate(d) {
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function parseIso(iso) {
    var p = iso.split("-");
    return new Date(+p[0], +p[1] - 1, +p[2], 12, 0, 0, 0);
  }
  function minutes(hhmm) {
    var p = String(hhmm || "").split(":");
    return (+p[0] || 0) * 60 + (+p[1] || 0);
  }
  function escapeText(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" }[c];
    });
  }
  function safeLetter(name) {
    var ch = String(name || "").trim().charAt(0).toUpperCase();
    if (!ch || ch === "<" || ch === "&" || ch === ">" || ch === "\"") return "F";
    return escapeText(ch);
  }

  function isOpenOnDay(truck, date) {
    var iso = isoDate(date);
    if (truck.dates && truck.dates.length) return truck.dates.indexOf(iso) !== -1;
    if (truck.weekdays) return truck.weekdays.indexOf(date.getDay()) !== -1;
    return false;
  }
  function statusOf(truck, now) {
    if (!isOpenOnDay(truck, now)) return "off";
    var cur = now.getHours() * 60 + now.getMinutes();
    var a = minutes(truck.hours.from);
    var b = minutes(truck.hours.to);
    if (cur >= a && cur < b) return "now";
    return "later";
  }

  function scheduleText(truck) {
    if (truck.dates && truck.dates.length) {
      var sorted = truck.dates.slice().sort();
      if (sorted.length === 1) return formatPretty(sorted[0]);
      var contiguous = true;
      for (var i = 1; i < sorted.length; i++) {
        var prev = parseIso(sorted[i - 1]);
        prev.setDate(prev.getDate() + 1);
        if (isoDate(prev) !== sorted[i]) contiguous = false;
      }
      if (contiguous) return formatPretty(sorted[0]) + "–" + formatPretty(sorted[sorted.length - 1]);
      return t("days").replace("{n}", String(sorted.length));
    }
    var days = truck.weekdays || [];
    if (days.length === 7) return t("everyDay");
    var wd = [1, 2, 3, 4, 5];
    var we = [0, 6];
    if (sameSet(days, wd)) return t("weekdays");
    if (sameSet(days, we)) return t("weekends");
    return days.slice().sort().map(function (d) { return WEEK[state.lang][d]; }).join(", ");
  }
  function sameSet(a, b) {
    if (a.length !== b.length) return false;
    var s = a.slice().sort().join(",");
    return s === b.slice().sort().join(",");
  }
  function formatPretty(iso) {
    var d = parseIso(iso);
    return d.getDate() + " " + MONTH[state.lang][d.getMonth()];
  }

  function loadOwn() {
    try {
      var raw = JSON.parse(localStorage.getItem(STORAGE_TRUCKS) || "[]");
      if (!Array.isArray(raw)) return [];
      return raw.filter(validOwn);
    } catch (e) {
      return [];
    }
  }
  function validOwn(tr) {
    return tr && typeof tr.name === "string" && (tr.country === "SE" || tr.country === "NO") &&
      typeof tr.lat === "number" && typeof tr.lng === "number" &&
      tr.hours && tr.hours.from && tr.hours.to &&
      Array.isArray(tr.dates);
  }
  function saveOwn(list) {
    localStorage.setItem(STORAGE_TRUCKS, JSON.stringify(list));
  }
  function allTrucks() {
    return loadOwn();
  }
  function inCountry(list) {
    return list.filter(function (tr) { return tr.country === state.country; });
  }

  function applyCopy() {
    document.documentElement.lang = state.lang === "nb" ? "nb" : "sv";
    document.title = "Foodtruckheaven.com";
    $("skipLink").textContent = t("skip");
    $("btnVisitor").textContent = t("visitor");
    $("tagline").textContent = state.outside ? t("outside") : t("tagline");
    $("ownerTitle").textContent = t("ownerTitle");
    $("ownerHelp").textContent = t("ownerHelp");
    $("lblName").textContent = t("name");
    $("photoHeading").textContent = t("photoHeading");
    $("photoIntro").textContent = t("photoIntro");
    $("lblPhoto").textContent = t("photo");
    $("photoTruckHelp").textContent = t("photoTruckHelp");
    $("lblFood").textContent = t("food");
    $("foodHelp").textContent = t("foodHelp");
    $("lblCode").textContent = t("codeLabel");
    $("codeHelp").textContent = t("codeHelp");
    $("codeBlank").textContent = t("codeBlank");
    $("codeAskTitle").textContent = t("codeAskTitle");
    $("codeAskBody").textContent = t("codeAskBody");
    $("lblCodeAskTime").textContent = t("codeAskTime");
    $("codeAskSend").textContent = t("codeAskSend");
    $("lblCity").textContent = t("city");
    $("favTitle").textContent = t("favTitle");
    $("favBody").textContent = t("favBody");
    $("askTitle").textContent = t("askTitle");
    $("askBody").textContent = t("askBody");
    $("lblAskPlace").textContent = t("askPlace");
    $("lblAskTime").textContent = t("askTime");
    $("askSend").textContent = t("askSend");
    $("revTitle").textContent = t("revTitle");
    $("revBody").textContent = t("revBody");
    $("lblRevFood").textContent = t("revFood");
    $("lblRevTruck").textContent = t("revTruck");
    $("lblRevMenu").textContent = t("revMenu");
    $("revSend").textContent = t("revSend");
    $("pickPlace").textContent = t("pick");
    $("lblWhen").textContent = t("when");
    $("lblOneDay").textContent = t("oneDay");
    $("lblManyDays").textContent = t("manyDays");
    $("lblDate").textContent = t("date");
    $("lblFrom").textContent = t("from");
    $("lblTo").textContent = t("to");
    $("lblOpen").textContent = t("open");
    $("lblClose").textContent = t("close");
    $("saveTruck").textContent = t("save");
    $("cancelOwner").textContent = t("cancel");
    $("placeText").textContent = t("place");
    $("cancelPlace").textContent = t("placeCancel");
    $("filterAll").textContent = t("filterAll");
    $("filterToday").textContent = t("filterToday");
    $("footerNote").textContent = t("footer");
    $("detailClose").setAttribute("aria-label", t("closeDialog"));
    $("detailDelete").textContent = t("remove");
    $("countryGroup").setAttribute("aria-label", t("countryLabel"));
    $("map").setAttribute("aria-label", t("mapLabel"));
    updatePinStatus();
  }

  function updatePinStatus() {
    var el = $("pinStatus");
    if (!el) return;
    el.textContent = state.pin ? t("pinSet") : t("pinMissing");
  }

  function setCountry(code, persist) {
    if (code !== "SE" && code !== "NO") code = "SE";
    if (state.country !== code) {
      state.pin = null;
    }
    state.country = code;
    state.lang = code === "NO" ? "nb" : "sv";
    if (persist) {
      try { localStorage.setItem(STORAGE_COUNTRY, code); } catch (e) {}
    }
    $("countrySE").setAttribute("aria-pressed", code === "SE" ? "true" : "false");
    $("countryNO").setAttribute("aria-pressed", code === "NO" ? "true" : "false");
    applyCopy();
    if (map) {
      map.fitBounds(BOUNDS[code], { padding: [24, 24] });
      render();
    }
  }

  function setMode(mode) {
    state.mode = mode;
    $("btnOwner").setAttribute("aria-pressed", mode === "owner" ? "true" : "false");
    $("btnVisitor").setAttribute("aria-pressed", mode === "visitor" ? "true" : "false");
    $("ownerPanel").hidden = mode !== "owner";
    if (mode !== "owner") stopPlacing();
    if (mode === "visitor") {
      var mapEl = $("map");
      if (mapEl) mapEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setTimeout(function () { if (map) map.invalidateSize(); }, 60);
  }

  function setFilter(filter) {
    state.filter = filter;
    $("filterAll").setAttribute("aria-pressed", filter === "all" ? "true" : "false");
    $("filterToday").setAttribute("aria-pressed", filter === "today" ? "true" : "false");
    render();
  }

  function visibleTrucks(now) {
    var list = inCountry(allTrucks());
    if (state.filter === "today") {
      list = list.filter(function (tr) { return isOpenOnDay(tr, now); });
    }
    list.sort(function (a, b) {
      var order = { now: 0, later: 1, off: 2 };
      return order[statusOf(a, now)] - order[statusOf(b, now)];
    });
    return list;
  }

  function markerIcon(status, letter) {
    var cls = status === "now" ? "pin-now" : (status === "later" ? "pin-later" : "pin-off");
    return L.divIcon({
      className: "pin " + cls,
      html: "<span><b>" + letter + "</b></span>",
      iconSize: [34, 34],
      iconAnchor: [17, 30],
      popupAnchor: [0, -28]
    });
  }

  function render() {
    var now = new Date();
    var list = visibleTrucks(now);
    var heading = state.filter === "today" ? t("listToday") : t("listAll");
    var countryName = state.country === "NO" ? "Norge" : "Sverige";
    $("listHeading").textContent = heading;
    $("listHeading").setAttribute("data-country", countryName);
    var countLine = t("summary").replace("{n}", String(list.length));
    $("listSummary").textContent = list.length
      ? countryName + " · " + countLine
      : (state.filter === "today" && inCountry(allTrucks()).length
          ? t("emptyToday")
          : t("emptyAll"));

    var ul = $("truckList");
    ul.textContent = "";
    markers.clearLayers();
    renderExtras();

    list.forEach(function (tr) {
      var status = statusOf(tr, now);
      var letter = safeLetter(tr.name);
      var marker = L.marker([tr.lat, tr.lng], { icon: markerIcon(status, letter), title: tr.name });
      marker.bindPopup(popupHtml(tr));
      marker.on("click", function () { selectedId = tr.id; });
      marker.addTo(markers);

      var li = document.createElement("li");
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "truck";
      var thumb = document.createElement(tr.photo ? "img" : "div");
      thumb.className = "thumb" + (tr.photo ? "" : " ph");
      if (tr.photo) {
        thumb.src = tr.photo;
        thumb.alt = "";
      } else {
        thumb.textContent = letter;
        thumb.style.background = status === "now" ? "#7dcea0" : (status === "later" ? "#f2b705" : "#f4efe6");
      }
      var body = document.createElement("div");
      var h = document.createElement("h3");
      h.textContent = tr.name;
      var meta = document.createElement("p");
      meta.className = "meta";
      meta.textContent = tr.city + " · " + t("hours").replace("{from}", tr.hours.from).replace("{to}", tr.hours.to);
      body.appendChild(h);
      body.appendChild(meta);
      btn.appendChild(thumb);
      btn.appendChild(body);
      btn.addEventListener("click", function () {
        selectedId = tr.id;
        map.setView([tr.lat, tr.lng], Math.max(map.getZoom(), 12));
        marker.openPopup();
        openDetail(tr);
      });
      var fav = document.createElement("button");
      fav.type = "button";
      fav.className = "btn ghost mini";
      fav.textContent = isFav(tr.id) ? t("favDone") : t("favMark");
      fav.addEventListener("click", function () {
        toggleFav(tr.id);
        render();
      });
      li.appendChild(btn);
      li.appendChild(fav);
      ul.appendChild(li);
    });
  }

  function popupHtml(tr) {
    var div = document.createElement("div");
    var strong = document.createElement("strong");
    strong.textContent = tr.name;
    var p = document.createElement("div");
    p.textContent = tr.city;
    var h = document.createElement("div");
    h.textContent = t("hours").replace("{from}", tr.hours.from).replace("{to}", tr.hours.to);
    div.appendChild(strong);
    div.appendChild(p);
    div.appendChild(h);
    return div;
  }

  function showShot(el, src, alt) {
    if (src) {
      el.hidden = false;
      el.src = src;
      el.alt = alt || "";
    } else {
      el.hidden = true;
      el.removeAttribute("src");
      el.alt = "";
    }
  }

  function openDetail(tr) {
    selectedId = tr.id;
    var dlg = $("detail");
    showShot($("detailPhoto"), tr.photo, tr.name);
    showShot($("detailFood"), tr.foodPhoto, tr.name);
    $("detailName").textContent = tr.name;
    $("detailCity").textContent = tr.city;
    $("detailHours").textContent = t("hours").replace("{from}", tr.hours.from).replace("{to}", tr.hours.to);
    $("detailWhen").textContent = scheduleText(tr);
    var del = $("detailDelete");
    del.hidden = false;
    del.onclick = function () {
      saveOwn(loadOwn().filter(function (item) { return item.id !== tr.id; }));
      saveJson(STORAGE_FAV, loadJson(STORAGE_FAV).filter(function (id) { return id !== tr.id; }));
      saveJson(STORAGE_ASK, loadJson(STORAGE_ASK).filter(function (a) { return a.truckId !== tr.id; }));
      saveJson(STORAGE_REV, loadJson(STORAGE_REV).filter(function (r) { return r.truckId !== tr.id; }));
      if (selectedId === tr.id) selectedId = null;
      dlg.close();
      render();
    };
    renderExtras();
    if (!dlg.open) dlg.showModal();
  }

  function stopPlacing() {
    state.placing = false;
    document.body.classList.remove("placing");
    $("placeBanner").hidden = true;
  }

  function startPlacing() {
    state.placing = true;
    document.body.classList.add("placing");
    $("placeBanner").hidden = false;
    $("ownerPanel").hidden = true;
    setTimeout(function () { if (map) map.invalidateSize(); }, 40);
    $("map").scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function eachDate(startIso, endIso) {
    var out = [];
    var cur = parseIso(startIso);
    var end = parseIso(endIso);
    var guard = 0;
    while (cur <= end && guard < MAX_DAYS + 2) {
      out.push(isoDate(cur));
      cur.setDate(cur.getDate() + 1);
      guard++;
    }
    return out;
  }

  function spanMode() {
    var picked = document.querySelector('input[name="span"]:checked');
    return picked ? picked.value : "one";
  }

  function onSpanChange() {
    var many = spanMode() === "many";
    $("manyFields").hidden = !many;
    $("oneFields").hidden = many;
    $("oneDate").required = !many;
    $("startDate").required = many;
    $("endDate").required = many;
  }

  function shrinkImage(file) {
    return new Promise(function (resolve) {
      if (!file || !/^image\//.test(file.type)) { resolve(null); return; }
      var img = new Image();
      var url = URL.createObjectURL(file);
      img.onload = function () {
        var max = 900;
        var w = img.width;
        var h = img.height;
        var scale = Math.min(1, max / Math.max(w, h));
        w = Math.max(1, Math.round(w * scale));
        h = Math.max(1, Math.round(h * scale));
        var canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        canvas.getContext("2d").drawImage(img, 0, 0, w, h);
        URL.revokeObjectURL(url);
        resolve(canvas.toDataURL("image/jpeg", 0.72));
      };
      img.onerror = function () {
        URL.revokeObjectURL(url);
        resolve(null);
      };
      img.src = url;
    });
  }

  function onSubmit(ev) {
    ev.preventDefault();
    var err = $("formError");
    err.textContent = "";
    var name = $("truckName").value.trim();
    var city = $("truckCity").value.trim();
    if (!name) { err.textContent = t("needName"); return; }
    if (!city) { err.textContent = t("needCity"); return; }
    if (!state.pin) { err.textContent = t("needPin"); return; }
    var from = $("openFrom").value;
    var to = $("openTo").value;
    if (!from || !to || minutes(to) <= minutes(from)) { err.textContent = t("badHours"); return; }

    var dates;
    if (spanMode() === "many") {
      var a = $("startDate").value;
      var b = $("endDate").value;
      if (!a || !b) { err.textContent = t("needRange"); return; }
      if (parseIso(b) < parseIso(a)) { err.textContent = t("badRange"); return; }
      dates = eachDate(a, b);
      if (dates.length > MAX_DAYS) { err.textContent = t("longRange"); return; }
    } else {
      var one = $("oneDate").value;
      if (!one) { err.textContent = t("needDate"); return; }
      dates = [one];
    }

    var truck = {
      id: "own-" + Date.now(),
      name: name,
      country: state.country,
      city: city,
      lat: state.pin.lat,
      lng: state.pin.lng,
      photo: imageOrNull(state.truckPhoto),
      foodPhoto: imageOrNull(state.foodPhoto),
      code: $("truckCode").value.trim(),
      hours: { from: from, to: to },
      dates: dates,
      demo: false
    };

    var own = loadOwn();
    own.push(truck);
    var photoDropped = false;
    try {
      saveOwn(own);
    } catch (e) {
      truck.photo = null;
      own[own.length - 1] = truck;
      try { saveOwn(own); photoDropped = true; }
      catch (e2) {
        err.textContent = t("photoFail");
        return;
      }
    }

    state.pin = null;
    state.truckPhoto = null;
    state.foodPhoto = null;
    $("ownerForm").reset();
    $("foodPreview").hidden = true;
    $("openFrom").value = "11:00";
    $("openTo").value = "20:00";
    $("oneDate").value = isoDate(new Date());
    $("photoPreview").hidden = true;
    onSpanChange();
    updatePinStatus();
    err.textContent = photoDropped ? t("photoFail") : t("saved");
    setFilter("all");
    setMode("visitor");
    map.setView([truck.lat, truck.lng], 13);
    render();
    openDetail(truck);
  }

  function detectCountry() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_COUNTRY); } catch (e) {}
    if (saved === "SE" || saved === "NO") return Promise.resolve({ code: saved, outside: false });

    var ctrl = new AbortController();
    var timer = setTimeout(function () { ctrl.abort(); }, 2500);
    return fetch("https://ipwho.is/", { signal: ctrl.signal })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        clearTimeout(timer);
        var code = data && data.country_code;
        if (code === "SE" || code === "NO") return { code: code, outside: false };
        return { code: fallbackCountry(), outside: true };
      })
      .catch(function () {
        clearTimeout(timer);
        return { code: fallbackCountry(), outside: false };
      });
  }

  function fallbackCountry() {
    var lang = (navigator.language || "").toLowerCase();
    if (lang.indexOf("nb") === 0 || lang.indexOf("nn") === 0 || lang.indexOf("no") === 0) return "NO";
    try {
      if (Intl.DateTimeFormat().resolvedOptions().timeZone === "Europe/Oslo") return "NO";
    } catch (e) {}
    return "SE";
  }


  function imageOrNull(url) {
    return url && url.indexOf("data:image/") === 0 ? url : null;
  }
  function loadJson(key) {
    try {
      var raw = JSON.parse(localStorage.getItem(key) || "[]");
      return Array.isArray(raw) ? raw : [];
    } catch (e) { return []; }
  }
  function saveJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  function isFav(id) {
    return loadJson(STORAGE_FAV).indexOf(id) !== -1;
  }
  function toggleFav(id) {
    var ids = loadJson(STORAGE_FAV).filter(function (item) { return item !== id; });
    if (!isFav(id)) ids.push(id);
    saveJson(STORAGE_FAV, ids);
  }
  function truckById(id) {
    var found = null;
    allTrucks().forEach(function (tr) { if (tr.id === id) found = tr; });
    return found;
  }
  function renderExtras() {
    var favs = loadJson(STORAGE_FAV);
    var favUl = $("favList");
    favUl.textContent = "";
    var shown = 0;
    favs.forEach(function (id) {
      var tr = truckById(id);
      if (!tr) return;
      shown += 1;
      var li = document.createElement("li");
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "truck";
      var body = document.createElement("div");
      var h = document.createElement("h3");
      h.textContent = tr.name;
      var meta = document.createElement("p");
      meta.className = "meta";
      meta.textContent = tr.city + " · " + t("hours").replace("{from}", tr.hours.from).replace("{to}", tr.hours.to);
      body.appendChild(h);
      body.appendChild(meta);
      if (tr.code) {
        var label = document.createElement("p");
        label.className = "meta";
        label.textContent = t("codeLabel");
        var note = document.createElement("p");
        note.className = "meta";
        note.textContent = t("codeForFav");
        var code = document.createElement("p");
        code.textContent = tr.code;
        body.appendChild(label);
        body.appendChild(note);
        body.appendChild(code);
      } else {
        var none = document.createElement("p");
        none.className = "meta";
        none.textContent = t("codeNone");
        body.appendChild(none);
      }
      btn.appendChild(body);
      btn.addEventListener("click", function () { openDetail(tr); });
      li.appendChild(btn);
      favUl.appendChild(li);
    });
    $("favEmpty").hidden = shown > 0;
    $("favEmpty").textContent = t("favEmpty");

    var asks = loadJson(STORAGE_ASK);
    var ownIds = {};
    loadOwn().forEach(function (tr) { ownIds[tr.id] = true; });
    var ownerList = $("ownerAsks");
    ownerList.textContent = "";
    asks.forEach(function (a) {
      if (!ownIds[a.truckId]) return;
      var li = document.createElement("li");
      li.textContent = a.place + " · " + a.time;
      ownerList.appendChild(li);
    });

    var revEmpty = $("revEmpty");
    var revList = $("revList");
    revList.textContent = "";
    var revs = loadJson(STORAGE_REV).filter(function (r) { return r.truckId === selectedId; });
    if (!selectedId || !revs.length) {
      revEmpty.hidden = false;
      revEmpty.textContent = t("revEmpty");
    } else {
      revEmpty.hidden = true;
      revs.forEach(function (r) {
        var set = document.createElement("div");
        set.className = "rev-set";
        [r.food, r.truck, r.menu].forEach(function (src) {
          if (!src) return;
          var img = document.createElement("img");
          img.src = src;
          img.alt = "";
          set.appendChild(img);
        });
        revList.appendChild(set);
      });
    }
  }

  function onCodeAsk(ev) {
    ev.preventDefault();
    var status = $("codeAskStatus");
    var raw = $("codeAskTime").value;
    if (!raw) { status.textContent = t("codeAskEarly"); return; }
    var visit = new Date(raw);
    if (isNaN(visit.getTime())) { status.textContent = t("codeAskEarly"); return; }
    var diff = visit.getTime() - Date.now();
    var hour = 60 * 60 * 1000;
    if (diff <= 0) { status.textContent = t("codeAskLate"); return; }
    if (diff > hour) { status.textContent = t("codeAskEarly"); return; }
    status.textContent = t("codeAskSent");
  }

  function onAsk(ev) {
    ev.preventDefault();
    var status = $("askStatus");
    var place = $("askPlace").value.trim();
    var time = $("askTime").value.trim();
    if (!selectedId || !place || !time) { status.textContent = t("askNeed"); return; }
    var asks = loadJson(STORAGE_ASK);
    asks.push({ id: "ask-" + Date.now(), truckId: selectedId, place: place, time: time });
    try { saveJson(STORAGE_ASK, asks); }
    catch (e) { return; }
    $("askForm").reset();
    status.textContent = t("askSent");
    renderExtras();
  }
  function onReview(ev) {
    ev.preventDefault();
    var status = $("revStatus");
    status.textContent = "";
    if (!selectedId) { status.textContent = t("revNeed"); return; }
    var files = ["revFood", "revTruck", "revMenu"].map(function (id) {
      var input = $(id);
      return input.files && input.files[0];
    });
    if (!files[0] || !files[1] || !files[2]) { status.textContent = t("revNeed"); return; }
    Promise.all(files.map(shrinkImage)).then(function (urls) {
      if (!urls[0] || !urls[1] || !urls[2]) { status.textContent = t("revNeed"); return; }
      var revs = loadJson(STORAGE_REV);
      revs.push({ id: "rev-" + Date.now(), truckId: selectedId, food: urls[0], truck: urls[1], menu: urls[2] });
      try { saveJson(STORAGE_REV, revs); }
      catch (e) { status.textContent = t("photoFail"); return; }
      $("revForm").reset();
      status.textContent = t("revSaved");
      renderExtras();
    });
  }

  function initMap() {
    map = L.map("map", { scrollWheelZoom: true });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap"
    }).addTo(map);
    markers = L.layerGroup().addTo(map);
    map.on("click", function (ev) {
      if (!state.placing) return;
      state.pin = { lat: Math.round(ev.latlng.lat * 10000) / 10000, lng: Math.round(ev.latlng.lng * 10000) / 10000 };
      stopPlacing();
      $("ownerPanel").hidden = false;
      updatePinStatus();
      setTimeout(function () { map.invalidateSize(); }, 40);
    });
    map.fitBounds(BOUNDS[state.country], { padding: [24, 24] });
  }

  function init() {
    var today = isoDate(new Date());
    $("oneDate").value = today;
    $("startDate").value = today;
    var end = new Date();
    end.setDate(end.getDate() + 6);
    $("endDate").value = isoDate(end);

    $("btnOwner").addEventListener("click", function () { setMode("owner"); });
    $("btnVisitor").addEventListener("click", function () { setMode("visitor"); });
    $("countrySE").addEventListener("click", function () { state.outside = false; setCountry("SE", true); });
    $("countryNO").addEventListener("click", function () { state.outside = false; setCountry("NO", true); });
    $("filterAll").addEventListener("click", function () { setFilter("all"); });
    $("filterToday").addEventListener("click", function () { setFilter("today"); });
    $("pickPlace").addEventListener("click", startPlacing);
    $("cancelPlace").addEventListener("click", function () {
      stopPlacing();
      if (state.mode === "owner") $("ownerPanel").hidden = false;
    });
    $("cancelOwner").addEventListener("click", function () { setMode("visitor"); });
    document.querySelectorAll('input[name="span"]').forEach(function (el) {
      el.addEventListener("change", onSpanChange);
    });
    $("ownerForm").addEventListener("submit", onSubmit);
    $("truckPhoto").addEventListener("change", function () {
      var file = $("truckPhoto").files && $("truckPhoto").files[0];
      shrinkImage(file).then(function (url) {
        state.truckPhoto = url;
        var preview = $("photoPreview");
        if (url) { preview.hidden = false; preview.src = url; }
        else preview.hidden = true;
      });
    });
    $("foodPhoto").addEventListener("change", function () {
      var file = $("foodPhoto").files && $("foodPhoto").files[0];
      shrinkImage(file).then(function (url) {
        state.foodPhoto = url;
        var preview = $("foodPreview");
        if (url) { preview.hidden = false; preview.src = url; }
        else preview.hidden = true;
      });
    });
    $("askForm").addEventListener("submit", onAsk);
    $("codeAskForm").addEventListener("submit", onCodeAsk);
    $("revForm").addEventListener("submit", onReview);
    $("detailClose").addEventListener("click", function () { $("detail").close(); });
    $("detail").addEventListener("click", function (ev) {
      if (ev.target === $("detail")) $("detail").close();
    });
    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape" && state.placing) {
        stopPlacing();
        if (state.mode === "owner") $("ownerPanel").hidden = false;
      }
    });

    initMap();
    setCountry("SE", false);
    setMode("visitor");
    setFilter("all");
    onSpanChange();

    detectCountry().then(function (found) {
      var saved = null;
      try { saved = localStorage.getItem(STORAGE_COUNTRY); } catch (e) {}
      if (saved === "SE" || saved === "NO") return;
      state.outside = !!found.outside;
      setCountry(found.code, false);
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
