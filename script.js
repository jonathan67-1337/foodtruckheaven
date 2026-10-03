(function () {
  "use strict";

  var STORAGE_TRUCKS = "foodtruckheaven.trucks.v1";
  var STORAGE_COUNTRY = "foodtruckheaven.country";
  var MAX_DAYS = 45;

  var COPY = {
    sv: {
      skip: "Hoppa till kartan",
      visitor: "Besökare",
      tagline: "Två ingångar längst upp. Kartan visar foodtrucks i landet du är i.",
      ownerTitle: "Lägg in din foodtruck",
      ownerHelp: "Namn, bild, plats och öppettider. En dag, eller många dagar framåt om du står på samma plats. Trucken sparas i den här webbläsaren.",
      name: "Vilken foodtruck",
      blurb: "Vad serverar ni",
      photo: "Bilder på trucken",
      city: "Plats, med ord",
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
      listAll: "Alla i landet",
      listToday: "Ute idag",
      filterAll: "Alla",
      filterToday: "Idag",
      emptyAll: "Inga foodtrucks i det här landet ännu.",
      emptyToday: "Ingen foodtruck är ute idag i det här landet.",
      summary: "{n} foodtrucks",
      openNow: "Öppen nu",
      later: "Ute idag",
      off: "Inte idag",
      everyDay: "Varje dag",
      weekdays: "Vardagar",
      weekends: "Helg",
      days: "{n} dagar",
      example: "Exempel",
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
      footer: "Exempeltruckarna är påhittade. En truck du lägger in syns i den här webbläsaren, inte för alla andra. Ingen egen domän är kopplad.",
      outside: "Foodtruckheaven.com visar Sverige och Norge. Vi gissade Sverige eftersom du verkar vara någon annanstans.",
      mapLabel: "Karta över foodtrucks",
      countryLabel: "Land"
    },
    nb: {
      skip: "Hopp til kartet",
      visitor: "Besøkere",
      tagline: "To knapper helt øverst. Kartet viser foodtrucks i landet du er i.",
      ownerTitle: "Legg inn foodtrucken din",
      ownerHelp: "Navn, bilde, sted og åpningstider. Én dag, eller mange dager fremover om du står på samme plass. Trucken lagres i denne nettleseren.",
      name: "Hvilken foodtruck",
      blurb: "Hva serverer dere",
      photo: "Bilder av trucken",
      city: "Sted, med ord",
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
      listAll: "Alle i landet",
      listToday: "Ute i dag",
      filterAll: "Alle",
      filterToday: "I dag",
      emptyAll: "Ingen foodtrucks i dette landet ennå.",
      emptyToday: "Ingen foodtruck er ute i dag i dette landet.",
      summary: "{n} foodtrucks",
      openNow: "Åpen nå",
      later: "Ute i dag",
      off: "Ikke i dag",
      everyDay: "Hver dag",
      weekdays: "Ukedager",
      weekends: "Helg",
      days: "{n} dager",
      example: "Eksempel",
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
      footer: "Eksempeltruckene er oppdiktet. En truck du legger inn vises i denne nettleseren, ikke for alle andre. Ingen eget domene er koblet til.",
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

  var DEMOS = [];

  var state = {
    country: "SE",
    lang: "sv",
    mode: "visitor",
    filter: "all",
    placing: false,
    pin: null,
    photo: null,
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
    return DEMOS.concat(loadOwn());
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
    $("lblBlurb").textContent = t("blurb");
    $("lblPhoto").textContent = t("photo");
    $("lblCity").textContent = t("city");
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
    $("listHeading").textContent = countryName + " · " + heading;
    $("listSummary").textContent = list.length
      ? t("summary").replace("{n}", String(list.length))
      : (state.filter === "today" ? t("emptyToday") : t("emptyAll"));

    var ul = $("truckList");
    ul.textContent = "";
    markers.clearLayers();

    list.forEach(function (tr) {
      var status = statusOf(tr, now);
      var letter = safeLetter(tr.name);
      var marker = L.marker([tr.lat, tr.lng], { icon: markerIcon(status, letter), title: tr.name });
      marker.bindPopup(popupHtml(tr, status));
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
      var pill = document.createElement("span");
      pill.className = "pill " + status;
      pill.textContent = status === "now" ? t("openNow") : (status === "later" ? t("later") : t("off"));
      body.appendChild(h);
      body.appendChild(meta);
      body.appendChild(pill);
      btn.appendChild(thumb);
      btn.appendChild(body);
      btn.addEventListener("click", function () {
        selectedId = tr.id;
        map.setView([tr.lat, tr.lng], Math.max(map.getZoom(), 12));
        marker.openPopup();
        openDetail(tr);
      });
      li.appendChild(btn);
      ul.appendChild(li);
    });
  }

  function popupHtml(tr, status) {
    var label = status === "now" ? t("openNow") : (status === "later" ? t("later") : t("off"));
    var div = document.createElement("div");
    var strong = document.createElement("strong");
    strong.textContent = tr.name;
    var p = document.createElement("div");
    p.textContent = tr.city + " · " + label;
    div.appendChild(strong);
    div.appendChild(p);
    return div;
  }

  function openDetail(tr) {
    var now = new Date();
    var status = statusOf(tr, now);
    var dlg = $("detail");
    var photo = $("detailPhoto");
    if (tr.photo) {
      photo.hidden = false;
      photo.src = tr.photo;
      photo.alt = tr.name;
    } else {
      photo.hidden = true;
      photo.removeAttribute("src");
    }
    $("detailBadge").hidden = !tr.demo;
    $("detailBadge").textContent = t("example");
    $("detailName").textContent = tr.name;
    $("detailCity").textContent = tr.city;
    $("detailBlurb").textContent = tr.blurb || "";
    $("detailHours").textContent = t("hours").replace("{from}", tr.hours.from).replace("{to}", tr.hours.to);
    $("detailWhen").textContent = scheduleText(tr);
    $("detailStatus").textContent = status === "now" ? t("openNow") : (status === "later" ? t("later") : t("off"));
    var del = $("detailDelete");
    del.hidden = !!tr.demo;
    del.onclick = function () {
      var own = loadOwn().filter(function (item) { return item.id !== tr.id; });
      saveOwn(own);
      dlg.close();
      render();
    };
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
    var blurb = $("truckBlurb").value.trim();
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
      blurb: blurb,
      country: state.country,
      city: city,
      lat: state.pin.lat,
      lng: state.pin.lng,
      photo: state.photo && state.photo.indexOf("data:image/") === 0 ? state.photo : null,
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
    state.photo = null;
    $("ownerForm").reset();
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
        state.photo = url;
        var preview = $("photoPreview");
        if (url) {
          preview.hidden = false;
          preview.src = url;
        } else {
          preview.hidden = true;
        }
      });
    });
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
