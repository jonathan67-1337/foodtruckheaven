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
      tagline: "Foodtruckheaven är ett gratis sätt att marknadsföra sin foodtruck. Hitta foodtrucks på kartan i det land du är i. Du kan byta land i inställningarna. Tryck på en foodtruck för att se namn, bilder, plats och öppettider som ägaren har lagt in.",
      ownerTitle: "Marknadsför din foodtruck gratis",
      ownerHelp: "Du marknadsför din foodtruck gratis genom att lägga in namn, bilder på trucken, bilder på maten, plats och öppettider. Besökare i samma land hittar dig på kartan. Besökare i ett annat land ser dig inte. Besökaren ser bara det du lägger in: namn, bilder, plats och öppettider. En dag, eller många dagar framåt om du står på samma plats. På den här sidan sparas uppgifterna i den här webbläsaren.",
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
      listAll: "Hitta foodtrucks på kartan",
      listToday: "Ute idag",
      filterAll: "Alla",
      filterToday: "Idag",
      filterNow: "Öppen nu",
      emptyAll: "Inga foodtrucks är inlagda i det här landet ännu.",
      emptyToday: "Ingen av de inlagda truckarna är ute idag.",
      emptyNow: "Ingen foodtruck är öppen just nu.",
      oneLeft: "1 dag kvar",
      manyLeft: "{n} dagar kvar",
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
      outside: "Foodtruckheaven är ett gratis sätt att marknadsföra sin foodtruck. Hitta foodtrucks på kartan i det land du är i. Du kan byta land i inställningarna.",
      mapLabel: "Karta över foodtrucks",
      countryLabel: "Land",
      settings: "Inställningar",
      settingsHelp: "Landet sätts efter var du är. Du kan byta det här."
    },
    nb: {
      skip: "Hopp til kartet",
      visitor: "Besøkere",
      tagline: "En foodtruck markedsfører seg ved å legge seg inn selv. Du finner den på kartet, i det landet du er i. Du kan bytte land i innstillingene.",
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
      filterNow: "Åpen nå",
      emptyAll: "Ingen foodtrucks er lagt inn i dette landet ennå.",
      emptyToday: "Ingen av de innlagte truckene er ute i dag.",
      emptyNow: "Ingen foodtruck er åpen akkurat nå.",
      oneLeft: "1 dag igjen",
      manyLeft: "{n} dager igjen",
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
      outside: "Foodtruckheaven er en gratis måte å markedsføre foodtrucken sin på. Finn foodtrucks på kartet i det landet du er i. Du kan bytte land i innstillingene.",
      mapLabel: "Kart over foodtrucks",
      countryLabel: "Land",
      settings: "Innstillinger",
      settingsHelp: "Landet settes etter hvor du er. Du kan bytte det her."
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

  var boundsByCode = null;
  var citiesByCountry = null;
  var FOODS = ["Tacos", "Pani puri", "Hot dog", "Waffles", "Croissant", "Tamales", "Empanadas", "Phở", "Ceviche", "Crêpes"];
  var STORAGE_QUIZ = "foodtruckheaven.quiz.v1";
  var STORAGE_OWNER_ASKED = "foodtruckheaven.ownerAsked.v1";
  var quizPick = { food: "", city: "", discount: "" };
  var quizForce = false;
  var ownerPick = { foods: [], line: "", city: "" };

  var state = {
    country: "",
    editingId: null,
    lang: "sv",
    mode: "visitor",
    filter: "all",
    placing: false,
    pin: null,
    truckPhoto: null,
    foodPhoto: null,
    outside: false,
    foodFilter: ""
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
  function isAlpha2(code) {
    return typeof code === "string" && /^[A-Z]{2}$/.test(code);
  }
  function loadedCountry(code) {
    return isAlpha2(code) && !!(boundsByCode && boundsByCode[code]);
  }
  function validOwn(tr) {
    return tr && typeof tr.name === "string" && isAlpha2(tr.country) &&
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
    return list.filter(function (tr) { return state.country && tr.country === state.country; });
  }
  function isOwnId(id) {
    var found = false;
    loadOwn().forEach(function (tr) { if (tr.id === id) found = true; });
    return found;
  }
  function addedAt(tr) {
    if (tr && typeof tr.addedAt === "number") return tr.addedAt;
    var m = /^own-(\d+)$/.exec(tr && tr.id || "");
    return m ? +m[1] : 0;
  }
  function newestFirst(list) {
    return list.slice().sort(function (a, b) { return addedAt(b) - addedAt(a); });
  }
  function dayLines(tr) {
    var n = tr && tr.dates && tr.dates.length || 0;
    if (!n) return null;
    return {
      count: n === 1 ? "Står här i 1 dag." : ("Står här i " + n + " dagar."),
      note: "Antalet är de dagar ägaren själv har lagt in."
    };
  }

  function applyCopy() {
    document.documentElement.lang = state.lang === "nb" ? "nb" : "sv";
    document.title = state.lang === "nb" ? "Foodtruckheaven.com" : "Foodtruckheaven. Hitta foodtrucks på kartan";
    $("skipLink").textContent = t("skip");
    $("btnVisitor").textContent = t("visitor");
    $("tagline").textContent = state.outside ? t("outside") : t("tagline");
    $("ownerTitle").textContent = t("ownerTitle");
    $("ownerPitch").textContent = t("ownerTitle");
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
    if ($("filterNow")) $("filterNow").textContent = t("filterNow");
    $("footerNote").textContent = t("footer");
    $("detailClose").setAttribute("aria-label", t("closeDialog"));
    $("detailDelete").textContent = t("remove");
    if ($("openSettings")) $("openSettings").textContent = t("settings");
    if ($("settingsTitle")) $("settingsTitle").textContent = t("settings");
    if ($("settingsHelp")) $("settingsHelp").textContent = t("settingsHelp");
    if ($("lblCountry")) $("lblCountry").textContent = t("countryLabel");
    if ($("settingsClose")) $("settingsClose").setAttribute("aria-label", t("closeDialog"));
    fillCountrySelect();
    renderCities();
    $("map").setAttribute("aria-label", t("mapLabel"));
    updatePinStatus();
  }

  function updatePinStatus() {
    var el = $("pinStatus");
    if (!el) return;
    el.textContent = state.pin ? t("pinSet") : t("pinMissing");
  }

  var visitorPos = null;
  var geoAsked = false;
  function boundsBox(code) {
    var entry = boundsByCode && code && boundsByCode[code];
    if (!entry || !entry.length) return null;
    var box = entry;
    if (entry.length === 2 && Object.prototype.toString.call(entry[1]) === "[object Array]") box = entry[1];
    if (!box || box.length !== 4) return null;
    for (var i = 0; i < 4; i++) {
      if (typeof box[i] !== "number" || !isFinite(box[i])) return null;
    }
    return box;
  }
  function showWorld() {
    if (!map) return;
    if (typeof map.fitWorld === "function") map.fitWorld();
    else map.setView([20, 0], 2);
  }
  function focusMap(point) {
    if (!map) return;
    var trucks = state.country ? inCountry(allTrucks()) : [];
    if (trucks.length) {
      var latlngs = trucks.map(function (tr) { return [tr.lat, tr.lng]; });
      map.fitBounds(L.latLngBounds(latlngs), { padding: [24, 24], maxZoom: 13 });
      return;
    }
    var box = boundsBox(state.country);
    if (box) {
      map.fitBounds([[box[1], box[0]], [box[3], box[2]]], { padding: [24, 24] });
      return;
    }
    if (point && typeof point.lat === "number" && typeof point.lng === "number") {
      map.setView([point.lat, point.lng], 6);
      return;
    }
    showWorld();
  }
  function regionName(code) {
    if (!code) return "";
    var lang = state.lang === "nb" ? "nb" : "sv";
    try {
      var names = new Intl.DisplayNames([lang], { type: "region" });
      return names.of(code) || code;
    } catch (e) {
      return code;
    }
  }
  function fillCountrySelect() {
    var pick = $("countryPick");
    if (!pick || !boundsByCode) return;
    var lang = state.lang === "nb" ? "nb" : "sv";
    var names = null;
    try { names = new Intl.DisplayNames([lang], { type: "region" }); } catch (e) {}
    var rows = Object.keys(boundsByCode).filter(isAlpha2).map(function (code) {
      var label = code;
      try { if (names) label = names.of(code) || code; } catch (e2) {}
      return { code: code, label: label };
    });
    rows.sort(function (a, b) { return a.label.localeCompare(b.label, lang); });
    pick.textContent = "";
    var blank = document.createElement("option");
    blank.value = "";
    blank.textContent = "";
    pick.appendChild(blank);
    rows.forEach(function (row) {
      var opt = document.createElement("option");
      opt.value = row.code;
      opt.textContent = row.label;
      pick.appendChild(opt);
    });
    pick.value = loadedCountry(state.country) ? state.country : "";
  }
  function askVisitorPosition() {
    if (visitorPos || geoAsked) return;
    geoAsked = true;
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(function (pos) {
      if (!pos || !pos.coords) return;
      var lat = pos.coords.latitude;
      var lng = pos.coords.longitude;
      if (typeof lat !== "number" || typeof lng !== "number") return;
      visitorPos = { lat: lat, lng: lng };
      render();
    }, function () {}, { enableHighAccuracy: false, timeout: 8000, maximumAge: 600000 });
  }
  function haversineKm(lat1, lng1, lat2, lng2) {
    var r = 6371;
    var rad = Math.PI / 180;
    var dLat = (lat2 - lat1) * rad;
    var dLng = (lng2 - lng1) * rad;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * rad) * Math.cos(lat2 * rad) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    return 2 * r * Math.asin(Math.min(1, Math.sqrt(a)));
  }
  function distanceLabel(tr) {
    if (!visitorPos || !tr) return "";
    var km = haversineKm(visitorPos.lat, visitorPos.lng, tr.lat, tr.lng);
    if (!isFinite(km)) return "";
    return km.toFixed(1).replace(".", ",") + " km";
  }
  function daysRemaining(tr, now) {
    var today = isoDate(now || new Date());
    var dates = tr && tr.dates || [];
    var n = 0;
    for (var i = 0; i < dates.length; i++) {
      if (dates[i] >= today) n += 1;
    }
    return n;
  }
  function daysLeftLabel(n) {
    if (!n) return "";
    if (n === 1) return t("oneLeft");
    return t("manyLeft").replace("{n}", String(n));
  }
  function renderCities() {
    var row = $("cityRow");
    if (!row) return;
    row.textContent = "";
    var list = citiesByCountry && state.country && citiesByCountry[state.country];
    if (!list) return;
    list.forEach(function (city) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = city.n;
      btn.addEventListener("click", function () {
        if (map) map.setView([city.lat, city.lng], 12);
      });
      row.appendChild(btn);
    });
  }
  function setCountry(code, persist, point) {
    if (!loadedCountry(code)) return;
    if (state.country !== code) state.pin = null;
    state.country = code;
    state.lang = code === "NO" ? "nb" : "sv";
    state.outside = false;
    if (persist) {
      try { localStorage.setItem(STORAGE_COUNTRY, code); } catch (e) {}
    }
    applyCopy();
    if (map) {
      focusMap(point || null);
      render();
    }
    renderQuiz();
    renderOwnerCities();
  }


  function httpUrl(value) {
    var s = String(value || "").trim();
    if (!/^https?:\/\//i.test(s)) return "";
    try {
      var u = new URL(s);
      if (u.protocol !== "http:" && u.protocol !== "https:") return "";
      return u.toString();
    } catch (e) { return ""; }
  }
  function isSoldToday(tr) {
    return !!(tr && tr.soldOut && tr.soldOut === isoDate(new Date()));
  }
  function cityNamesFor(country) {
    var list = citiesByCountry && country && citiesByCountry[country];
    if (!list || !list.length) return [];
    return list.slice(0, 10).map(function (c) { return c.n; });
  }
  function selectedFoods() {
    var out = [];
    document.querySelectorAll("#foodChecks input:checked").forEach(function (el) {
      if (FOODS.indexOf(el.value) !== -1) out.push(el.value);
    });
    return out;
  }
  function setFoodChecks(list) {
    document.querySelectorAll("#foodChecks input").forEach(function (el) {
      el.checked = list.indexOf(el.value) !== -1;
    });
  }
  function buildFoodChecks() {
    var box = $("foodChecks");
    if (!box || box.childNodes.length) return;
    FOODS.forEach(function (name) {
      var label = document.createElement("label");
      label.className = "checkline";
      var input = document.createElement("input");
      input.type = "checkbox";
      input.value = name;
      label.appendChild(input);
      label.appendChild(document.createTextNode(" " + name));
      box.appendChild(label);
    });
  }
  function renderFoodFilter() {
    var box = $("foodFilter");
    if (!box) return;
    box.textContent = "";
    FOODS.forEach(function (name) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = name;
      btn.setAttribute("aria-pressed", state.foodFilter === name ? "true" : "false");
      btn.addEventListener("click", function () {
        state.foodFilter = state.foodFilter === name ? "" : name;
        render();
      });
      box.appendChild(btn);
    });
  }
  function paintChoices(box, values, picked, onPick) {
    if (!box) return;
    box.textContent = "";
    values.forEach(function (value) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "quiz-opt";
      btn.textContent = value;
      var on = Array.isArray(picked) ? picked.indexOf(value) !== -1 : value === picked;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      btn.addEventListener("click", function () { onPick(value); });
      box.appendChild(btn);
    });
  }
  function quizSaved() {
    try {
      var q = JSON.parse(localStorage.getItem(STORAGE_QUIZ) || "null");
      return !!(q && FOODS.indexOf(q.food) !== -1 && q.city && (q.discount === "Ja" || q.discount === "Nej"));
    } catch (e) { return false; }
  }
  function renderQuiz() {
    var dlg = $("quiz");
    if (!dlg) return;
    if (!quizForce) {
      if (dlg.open) dlg.close();
      return;
    }
    var cities = cityNamesFor(state.country);
    if (quizPick.city && cities.indexOf(quizPick.city) === -1) quizPick.city = "";
    paintChoices($("quizFood"), FOODS, quizPick.food, function (value) {
      quizPick.food = value;
      tryFinishQuiz();
    });
    paintChoices($("quizCity"), cities, quizPick.city, function (value) {
      quizPick.city = value;
      tryFinishQuiz();
    });
    paintChoices($("quizCode"), ["Ja", "Nej"], quizPick.discount, function (value) {
      quizPick.discount = value;
      tryFinishQuiz();
    });
    if (!dlg.open) dlg.showModal();
  }
  function tryFinishQuiz() {
    var cities = cityNamesFor(state.country);
    if (FOODS.indexOf(quizPick.food) === -1 || cities.indexOf(quizPick.city) === -1) { renderQuiz(); return; }
    if (quizPick.discount !== "Ja" && quizPick.discount !== "Nej") { renderQuiz(); return; }
    localStorage.setItem(STORAGE_QUIZ, JSON.stringify({
      food: quizPick.food,
      city: quizPick.city,
      discount: quizPick.discount
    }));
    quizForce = false;
    var dlg = $("quiz");
    if (dlg.open) dlg.close();
  }
  function renderOwnerCities() {
    var box = $("oqCity");
    if (!box) return;
    var cities = cityNamesFor(state.country);
    if (ownerPick.city && cities.indexOf(ownerPick.city) === -1) ownerPick.city = "";
    paintChoices(box, cities, ownerPick.city, function (value) {
      ownerPick.city = ownerPick.city === value ? "" : value;
      renderOwnerCities();
    });
  }
  function renderOwnerFoods() {
    paintChoices($("oqFood"), FOODS, ownerPick.foods, function (value) {
      var i = ownerPick.foods.indexOf(value);
      if (i === -1) ownerPick.foods.push(value);
      else ownerPick.foods.splice(i, 1);
      renderOwnerFoods();
    });
  }
  function openOwnerQuiz() {
    ownerPick.foods = [];
    ownerPick.line = "";
    ownerPick.city = "";
    if ($("oqLine")) $("oqLine").value = "";
    renderOwnerFoods();
    renderOwnerCities();
    var dlg = $("ownerQuiz");
    if (dlg && !dlg.open) dlg.showModal();
  }
  function ownerAlreadyAsked() {
    try { return localStorage.getItem(STORAGE_OWNER_ASKED) === "1"; } catch (e) { return false; }
  }
  function openFromHash() {
    var m = /^#truck=(.+)$/.exec(location.hash || "");
    if (!m || !map) return;
    var id = decodeURIComponent(m[1]);
    var tr = null;
    allTrucks().forEach(function (item) { if (item.id === id) tr = item; });
    if (!tr) return;
    map.setView([tr.lat, tr.lng], 14);
    openDetail(tr);
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
    if ($("filterNow")) $("filterNow").setAttribute("aria-pressed", filter === "now" ? "true" : "false");
    render();
  }

  function visibleTrucks(now) {
    var list = inCountry(allTrucks());
    if (state.filter === "today") {
      list = list.filter(function (tr) { return isOpenOnDay(tr, now); });
    } else if (state.filter === "now") {
      list = list.filter(function (tr) { return statusOf(tr, now) === "now"; });
    }
    if (state.foodFilter) {
      list = list.filter(function (tr) {
        return Array.isArray(tr.foods) && tr.foods.indexOf(state.foodFilter) !== -1;
      });
    }
    list.sort(function (a, b) {
      var order = { now: 0, later: 1, off: 2 };
      return order[statusOf(a, now)] - order[statusOf(b, now)];
    });
    return list;
  }

  function markerIcon(status, letter, leftText) {
    var cls = status === "now" ? "pin-now" : (status === "later" ? "pin-later" : "pin-off");
    var html = "<span><b>" + letter + "</b></span>";
    if (leftText) html += "<i>" + escapeText(leftText) + "</i>";
    return L.divIcon({
      className: "pin " + cls,
      html: html,
      iconSize: leftText ? [148, 36] : [34, 34],
      iconAnchor: [17, 30],
      popupAnchor: [0, -28]
    });
  }

  function truckFace(tr) {
    var letter = safeLetter(tr.name);
    var thumb = document.createElement(tr.photo ? "img" : "div");
    thumb.className = "thumb" + (tr.photo ? "" : " ph");
    if (tr.photo) {
      thumb.src = tr.photo;
      thumb.alt = "";
    } else {
      thumb.textContent = letter;
    }
    return thumb;
  }

  function render() {
    var now = new Date();
    var list = visibleTrucks(now);
    var heading = state.filter === "today" ? t("listToday") : (state.filter === "now" ? t("filterNow") : t("listAll"));
    var countryName = regionName(state.country);
    $("listHeading").textContent = heading;
    if (countryName) $("listHeading").setAttribute("data-country", countryName);
    else $("listHeading").removeAttribute("data-country");
    var countLine = t("summary").replace("{n}", String(list.length));
    var emptyText = t("emptyAll");
    if (state.filter === "now") emptyText = t("emptyNow");
    else if (state.filter === "today" && inCountry(allTrucks()).length) emptyText = t("emptyToday");
    $("listSummary").textContent = list.length
      ? (countryName ? countryName + " · " + countLine : countLine)
      : emptyText;

    var ul = $("truckList");
    ul.textContent = "";
    markers.clearLayers();
    renderExtras();

    list.forEach(function (tr) {
      var status = statusOf(tr, now);
      var letter = safeLetter(tr.name);
      var marker = L.marker([tr.lat, tr.lng], { icon: markerIcon(status, letter, daysLeftLabel(daysRemaining(tr, now))), title: tr.name });
      marker.bindPopup(popupHtml(tr));
      marker.on("click", function () { selectedId = tr.id; });
      marker.addTo(markers);

      var li = document.createElement("li");
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "truck";
      var thumb = truckFace(tr);
      var body = document.createElement("div");
      var h = document.createElement("h3");
      h.textContent = tr.name;
      var meta = document.createElement("p");
      meta.className = "meta";
      meta.textContent = tr.city + " · " + t("hours").replace("{from}", tr.hours.from).replace("{to}", tr.hours.to);
      var dist = distanceLabel(tr);
      if (dist) meta.textContent += " · " + dist;
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
      var days = dayLines(tr);
      if (days) {
        var day = document.createElement("p");
        day.className = "meta";
        day.textContent = days.count;
        var note = document.createElement("p");
        note.className = "meta";
        note.textContent = days.note;
        body.appendChild(day);
        body.appendChild(note);
      }
      li.appendChild(btn);
      li.appendChild(fav);
      ul.appendChild(li);
    });
    var foodEmpty = $("foodFilterEmpty");
    if (foodEmpty) foodEmpty.hidden = !(state.foodFilter && !list.length);
    renderFoodFilter();
    renderUnderMap();
  }
  function renderUnderMap() {
    var trucks = newestFirst(inCountry(allTrucks()));
    var q = ($("recentSearch") && $("recentSearch").value || "").trim().toLowerCase();
    if (q) {
      trucks = trucks.filter(function (tr) {
        return (tr.name || "").toLowerCase().indexOf(q) !== -1 || (tr.city || "").toLowerCase().indexOf(q) !== -1;
      });
    }
    var searchEmpty = $("recentSearchEmpty");
    if (searchEmpty) searchEmpty.hidden = !(q && !trucks.length);
    var recent = $("recentList");
    var recentEmpty = $("recentEmpty");
    recent.textContent = "";
    recentEmpty.hidden = trucks.length > 0 || !!q;
    trucks.forEach(function (tr) {
      var li = document.createElement("li");
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "truck";
      btn.appendChild(truckFace(tr));
      var body = document.createElement("div");
      var h = document.createElement("h3");
      h.textContent = tr.name;
      var meta = document.createElement("p");
      meta.className = "meta";
      meta.textContent = tr.city + " · " + t("hours").replace("{from}", tr.hours.from).replace("{to}", tr.hours.to);
      var dist = distanceLabel(tr);
      if (dist) meta.textContent += " · " + dist;
      body.appendChild(h);
      body.appendChild(meta);
      var days = dayLines(tr);
      if (days) {
        var day = document.createElement("p");
        day.className = "meta";
        day.textContent = days.count;
        var note = document.createElement("p");
        note.className = "meta";
        note.textContent = days.note;
        body.appendChild(day);
        body.appendChild(note);
      }
      btn.appendChild(body);
      btn.addEventListener("click", function () { openDetail(tr); });
      li.appendChild(btn);
      recent.appendChild(li);
    });
    var codes = newestFirst(trucks.filter(function (tr) {
      return isFav(tr.id) && tr.code && String(tr.code).trim();
    }));
    var codeList = $("codeList");
    var codeEmpty = $("codeListEmpty");
    codeList.textContent = "";
    var codeSection = $("codeSection");
    if (codeSection) codeSection.hidden = codes.length === 0;
    codeEmpty.hidden = true;
    codes.forEach(function (tr) {
      var li = document.createElement("li");
      var body = document.createElement("div");
      body.className = "truck";
      var h = document.createElement("h3");
      h.textContent = tr.name;
      var code = document.createElement("p");
      code.textContent = String(tr.code).trim();
      body.appendChild(h);
      body.appendChild(code);
      li.appendChild(body);
      codeList.appendChild(li);
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
    var dist = distanceLabel(tr);
    if (dist) {
      var distEl = document.createElement("div");
      distEl.textContent = dist;
      div.appendChild(distEl);
    }
    var days = dayLines(tr);
    if (days) {
      var d1 = document.createElement("div");
      d1.textContent = days.count;
      var d2 = document.createElement("div");
      d2.textContent = days.note;
      div.appendChild(d1);
      div.appendChild(d2);
    }
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
    var days = dayLines(tr);
    $("detailDays").textContent = days ? days.count : "";
    $("detailDaysNote").textContent = days ? days.note : "";
    var sold = isSoldToday(tr);
    $("detailSold").hidden = !sold;
    var foodsBox = $("detailFoods");
    foodsBox.textContent = "";
    (tr.foods || []).forEach(function (name) {
      if (FOODS.indexOf(name) === -1) return;
      var p = document.createElement("p");
      p.textContent = name;
      foodsBox.appendChild(p);
    });
    $("detailLine").textContent = tr.blurb ? String(tr.blurb) : "";
    $("detailUsual").textContent = tr.usualCity ? ("Står oftast i " + tr.usualCity + ".") : "";
    var g = httpUrl(tr.googleUrl);
    $("googleLink").hidden = !g;
    $("googleNote").hidden = !g;
    if (g) $("googleLink").href = g;
    var site = httpUrl(tr.siteUrl);
    $("siteLink").hidden = !site;
    $("siteNote").hidden = !site;
    if (site) $("siteLink").href = site;
    $("detailDir").href = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(tr.lat + "," + tr.lng);
    $("copyDone").hidden = true;
    $("copyLink").onclick = function () {
      var link = "https://jonathan67-1337.github.io/foodtruckheaven/#truck=" + encodeURIComponent(tr.id);
      var done = function () { $("copyDone").hidden = false; };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(link).then(done).catch(function () {});
    };
    var ownTruckEarly = isOwnId(tr.id);
    $("soldWrap").hidden = !ownTruckEarly;
    $("soldOwnerNote").hidden = !ownTruckEarly;
    $("detailSoldBox").checked = sold;
    $("detailSoldBox").onchange = function () {
      var own = loadOwn();
      own = own.map(function (item) {
        if (item.id !== tr.id) return item;
        item.soldOut = $("detailSoldBox").checked ? isoDate(new Date()) : "";
        tr = item;
        return item;
      });
      saveOwn(own);
      render();
      openDetail(tr);
    };
    var edit = $("detailEdit");
    var editHelp = $("detailEditHelp");
    var ownTruck = isOwnId(tr.id);
    edit.hidden = !ownTruck;
    editHelp.hidden = !ownTruck;
    edit.onclick = function () { openEditor(tr); };
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

    var updated = !!state.editingId;
    var existing = null;
    if (state.editingId) {
      loadOwn().forEach(function (item) { if (item.id === state.editingId) existing = item; });
    }
    if (!existing && !loadedCountry(state.country)) return;
    var truck = {
      id: existing ? existing.id : ("own-" + Date.now()),
      addedAt: existing && typeof existing.addedAt === "number" ? existing.addedAt : Date.now(),
      name: name,
      country: existing ? existing.country : state.country,
      city: city,
      lat: state.pin.lat,
      lng: state.pin.lng,
      photo: imageOrNull(state.truckPhoto),
      foodPhoto: imageOrNull(state.foodPhoto),
      code: $("truckCode").value.trim(),
      hours: { from: from, to: to },
      dates: dates,
      foods: (existing || selectedFoods().length) ? selectedFoods() : ownerPick.foods.slice(),
      blurb: existing ? (existing.blurb || "") : (($("oqLine") && $("oqLine").value.trim()) || ownerPick.line || ""),
      usualCity: existing ? (existing.usualCity || "") : (ownerPick.city || ""),
      googleUrl: httpUrl($("googleUrl").value),
      siteUrl: httpUrl($("siteUrl").value),
      soldOut: $("soldOut").checked ? isoDate(new Date()) : "",
      demo: false
    };

    var own = loadOwn();
    if (existing) {
      var replaced = false;
      own = own.map(function (item) {
        if (item.id !== existing.id) return item;
        replaced = true;
        return truck;
      });
      if (!replaced) own.push(truck);
    } else {
      own.push(truck);
    }
    var photoDropped = false;
    try {
      saveOwn(own);
    } catch (e) {
      truck.photo = null;
      truck.foodPhoto = null;
      own = own.map(function (item) { return item.id === truck.id ? truck : item; });
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
    err.textContent = updated ? "Ändringen är sparad. Det är samma truck som förut." : (photoDropped ? t("photoFail") : t("saved"));
    state.editingId = null;
    setFilter("all");
    setMode("visitor");
    map.setView([truck.lat, truck.lng], 13);
    render();
    openDetail(truck);
  }

  function detectCountry() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_COUNTRY); } catch (e) {}
    if (loadedCountry(saved)) return Promise.resolve({ code: saved, point: null });

    var ctrl = new AbortController();
    var timer = setTimeout(function () { ctrl.abort(); }, 2500);
    return fetch("https://ipwho.is/", { signal: ctrl.signal })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        clearTimeout(timer);
        var code = data && typeof data.country_code === "string" ? data.country_code.toUpperCase() : "";
        var point = null;
        if (data && typeof data.latitude === "number" && typeof data.longitude === "number") {
          point = { lat: data.latitude, lng: data.longitude };
        }
        if (loadedCountry(code)) return { code: code, point: point };
        return { code: null, point: point };
      })
      .catch(function () {
        clearTimeout(timer);
        return { code: null, point: null };
      });
  }
  function loadGeoData() {
    return fetch("data/country-bounds.json")
      .then(function (res) { return res.json(); })
      .then(function (data) {
        boundsByCode = data && typeof data === "object" ? data : {};
      })
      .catch(function () { boundsByCode = {}; })
      .then(function () {
        return fetch("data/cities.json")
          .then(function (res) { return res.json(); })
          .then(function (data) { citiesByCountry = data; })
          .catch(function () { citiesByCountry = {}; });
      });
  }
  function openEditor(tr) {
    if (!isOwnId(tr.id)) return;
    state.editingId = tr.id;
    $("truckName").value = tr.name;
    $("truckCity").value = tr.city || "";
    $("truckCode").value = tr.code || "";
    $("googleUrl").value = tr.googleUrl || "";
    $("siteUrl").value = tr.siteUrl || "";
    $("soldOut").checked = isSoldToday(tr);
    setFoodChecks(tr.foods || []);
    $("openFrom").value = tr.hours.from;
    $("openTo").value = tr.hours.to;
    state.pin = { lat: tr.lat, lng: tr.lng };
    state.truckPhoto = imageOrNull(tr.photo);
    state.foodPhoto = imageOrNull(tr.foodPhoto);
    showShot($("photoPreview"), state.truckPhoto, "");
    showShot($("foodPreview"), state.foodPhoto, "");
    var dates = (tr.dates || []).slice().sort();
    var many = document.querySelector('input[name="span"][value="many"]');
    var one = document.querySelector('input[name="span"][value="one"]');
    if (dates.length > 1) {
      many.checked = true;
      $("startDate").value = dates[0];
      $("endDate").value = dates[dates.length - 1];
    } else {
      one.checked = true;
      $("oneDate").value = dates[0] || isoDate(new Date());
    }
    onSpanChange();
    updatePinStatus();
    $("formError").textContent = "";
    if ($("detail").open) $("detail").close();
    setMode("owner");
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
      btn.appendChild(truckFace(tr));
      var body = document.createElement("div");
      var h = document.createElement("h3");
      h.textContent = tr.name;
      var meta = document.createElement("p");
      meta.className = "meta";
      meta.textContent = tr.city + " · " + t("hours").replace("{from}", tr.hours.from).replace("{to}", tr.hours.to);
      var dist = distanceLabel(tr);
      if (dist) meta.textContent += " · " + dist;
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
      var place = document.createElement("div");
      place.textContent = a.place;
      var time = document.createElement("div");
      time.textContent = a.time;
      li.appendChild(place);
      li.appendChild(time);
      ownerList.appendChild(li);
    });
    var askEmpty = $("askEmpty");
    if (askEmpty) askEmpty.hidden = ownerList.children.length > 0;

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
    map.setView([20, 0], 2);
  }

  function init() {
    var today = isoDate(new Date());
    $("oneDate").value = today;
    $("startDate").value = today;
    var end = new Date();
    end.setDate(end.getDate() + 6);
    $("endDate").value = isoDate(end);

    buildFoodChecks();
    $("btnOwner").addEventListener("click", function () {
      if (state.editingId) {
        state.editingId = null;
        $("ownerForm").reset();
        state.pin = null;
        state.truckPhoto = null;
        state.foodPhoto = null;
        $("photoPreview").hidden = true;
        $("foodPreview").hidden = true;
        $("openFrom").value = "11:00";
        $("openTo").value = "20:00";
        $("oneDate").value = isoDate(new Date());
        onSpanChange();
        updatePinStatus();
        $("formError").textContent = "";
      }
      setMode("owner");
      if (!state.editingId && !ownerAlreadyAsked()) openOwnerQuiz();
    });
    $("btnVisitor").addEventListener("click", function () { setMode("visitor"); });
    $("openSettings").addEventListener("click", function () { $("settings").showModal(); });
    $("editAnswers").addEventListener("click", function () {
      quizForce = true;
      try {
        var q = JSON.parse(localStorage.getItem(STORAGE_QUIZ) || "null");
        if (q) { quizPick.food = q.food || ""; quizPick.city = q.city || ""; quizPick.discount = q.discount || ""; }
      } catch (e) {}
      $("settings").close();
      renderQuiz();
    });
    $("oqDone").addEventListener("click", function () {
      ownerPick.line = $("oqLine").value.trim();
      try { localStorage.setItem(STORAGE_OWNER_ASKED, "1"); } catch (e) {}
      setFoodChecks(ownerPick.foods);
      var dlg = $("ownerQuiz");
      if (dlg.open) dlg.close();
    });
    $("recentSearch").addEventListener("input", function () { renderUnderMap(); });
    $("showMe").addEventListener("click", function () {
      if (!navigator.geolocation || !map) return;
      navigator.geolocation.getCurrentPosition(function (pos) {
        map.setView([pos.coords.latitude, pos.coords.longitude], 14);
      }, function () {});
    });
    var quizDlg = $("quiz");
    if (quizDlg) quizDlg.addEventListener("cancel", function (ev) {
      if (!quizSaved()) ev.preventDefault();
    });
    window.addEventListener("hashchange", openFromHash);
    $("settingsClose").addEventListener("click", function () { $("settings").close(); });
    $("settings").addEventListener("click", function (ev) { if (ev.target === $("settings")) $("settings").close(); });
    $("countryPick").addEventListener("change", function () {
      state.outside = false;
      setCountry($("countryPick").value, true);
    });
    $("filterAll").addEventListener("click", function () { setFilter("all"); });
    $("filterToday").addEventListener("click", function () { setFilter("today"); });
    $("filterNow").addEventListener("click", function () { setFilter("now"); });
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
    applyCopy();
    setMode("visitor");
    setFilter("all");
    onSpanChange();
    askVisitorPosition();
    loadGeoData().then(function () {
      return detectCountry();
    }).then(function (found) {
      if (found && loadedCountry(found.code)) {
        setCountry(found.code, false, found.point);
        return;
      }
      state.outside = false;
      state.country = "";
      state.lang = "sv";
      applyCopy();
      showWorld();
      render();
      var dlg = $("settings");
      if (dlg && dlg.showModal) dlg.showModal();
    }).then(function () {
      buildFoodChecks();
      renderQuiz();
      openFromHash();
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
