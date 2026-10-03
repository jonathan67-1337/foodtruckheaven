(function () {
  "use strict";

  var STORAGE_TRUCKS = "foodtruckheaven.trucks.v1";
  var STORAGE_COUNTRY = "foodtruckheaven.country";

  var boundsByCode = null;
  var fileTrucks = [];
  var state = { country: "" };
  var map;
  var markers;

  function isAlpha2(code) {
    return typeof code === "string" && /^[A-Z]{2}$/.test(code);
  }
  function loadedCountry(code) {
    return isAlpha2(code) && !!(boundsByCode && boundsByCode[code]);
  }
  function validTruck(tr) {
    return tr && typeof tr.name === "string" && isAlpha2(tr.country) &&
      typeof tr.lat === "number" && typeof tr.lng === "number" &&
      tr.hours && tr.hours.from && tr.hours.to &&
      Array.isArray(tr.dates);
  }
  function loadOwn() {
    try {
      var raw = JSON.parse(localStorage.getItem(STORAGE_TRUCKS) || "[]");
      if (!Array.isArray(raw)) return [];
      return raw.filter(validTruck);
    } catch (e) {
      return [];
    }
  }
  function allTrucks() {
    var seen = {};
    var out = [];
    function add(tr) {
      if (!validTruck(tr)) return;
      if (tr.id && seen[tr.id]) return;
      if (tr.id) seen[tr.id] = true;
      out.push(tr);
    }
    fileTrucks.forEach(add);
    loadOwn().forEach(add);
    return out;
  }
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
    if (loadedCountry(state.country)) return;
    if (typeof map.fitWorld === "function") map.fitWorld();
    else map.setView([20, 0], 2);
  }
  function countryLatLngBounds(code) {
    var box = boundsBox(code);
    if (!box) return null;
    return L.latLngBounds([box[1], box[0]], [box[3], box[2]]);
  }
  function insideCountry(lat, lng) {
    var bounds = countryLatLngBounds(state.country);
    if (!bounds) return true;
    if (typeof lat !== "number" || typeof lng !== "number" || !isFinite(lat) || !isFinite(lng)) return false;
    return bounds.contains(L.latLng(lat, lng));
  }
  function mapLaidOut() {
    if (!map) return false;
    var size = map.getSize();
    return !!(size && size.x >= 80 && size.y >= 440);
  }
  function applyCountryLock(recenter) {
    if (!map || !loadedCountry(state.country)) return;
    var bounds = countryLatLngBounds(state.country);
    if (!bounds || !bounds.isValid()) return;
    map.invalidateSize();
    if (!mapLaidOut()) return;
    map.setMinZoom(0);
    var zoom = map.getBoundsZoom(bounds, true);
    if (typeof zoom !== "number" || !isFinite(zoom)) return;
    map.options.maxBoundsViscosity = 1;
    map.setMaxBounds(bounds.pad(0.05));
    map.setMinZoom(zoom);
    if (recenter === false) {
      var current = map.getZoom();
      if (typeof current !== "number" || !isFinite(current) || current < zoom) {
        map.setView(bounds.getCenter(), zoom, { animate: false });
      }
      return;
    }
    map.setView(bounds.getCenter(), zoom, { animate: false });
  }
  function layoutMap(recenter) {
    if (!map) return;
    map.invalidateSize();
    if (!loadedCountry(state.country)) return;
    if (!mapLaidOut()) {
      if (!layoutMap.waiting) {
        layoutMap.waiting = true;
        requestAnimationFrame(function () {
          layoutMap.waiting = false;
          if (!map) return;
          map.invalidateSize();
          if (!mapLaidOut()) return;
          applyCountryLock(recenter);
        });
      }
      return;
    }
    applyCountryLock(recenter);
  }
  function focusMap(point) {
    if (!map) return;
    if (loadedCountry(state.country)) {
      layoutMap();
      return;
    }
    if (point && typeof point.lat === "number" && typeof point.lng === "number" && insideCountry(point.lat, point.lng)) {
      map.setView([point.lat, point.lng], 6);
      return;
    }
    showWorld();
  }
  function letterOf(name) {
    var ch = String(name || "").trim().charAt(0).toUpperCase();
    if (!ch || ch === "<" || ch === "&" || ch === ">" || ch === "\"") return "F";
    return ch.replace(/[&<>"]/g, "");
  }
  function trucksHere() {
    if (!loadedCountry(state.country)) return [];
    return allTrucks().filter(function (tr) {
      return tr.country === state.country && insideCountry(tr.lat, tr.lng);
    });
  }
  function render() {
    if (!markers) return;
    markers.clearLayers();
    trucksHere().forEach(function (tr) {
      var icon = L.divIcon({
        className: "pin pin-now",
        html: "<span><b>" + letterOf(tr.name) + "</b></span>",
        iconSize: [34, 34],
        iconAnchor: [17, 30]
      });
      L.marker([tr.lat, tr.lng], { icon: icon, title: tr.name }).addTo(markers);
    });
  }
  function setCountry(code, point) {
    if (!loadedCountry(code)) {
      state.country = "";
      if (map) {
        map.setMinZoom(0);
        map.setMaxBounds(null);
      }
      showWorld();
      render();
      return;
    }
    state.country = code;
    focusMap(point || null);
    render();
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
      .catch(function () { boundsByCode = {}; });
  }
  function loadFileTrucks() {
    return fetch("data/trucks.json")
      .then(function (res) { return res.json(); })
      .then(function (data) { fileTrucks = Array.isArray(data) ? data : []; })
      .catch(function () { fileTrucks = []; });
  }
  function initMap() {
    map = L.map("map", { scrollWheelZoom: false, dragging: true });
    map.getContainer().addEventListener("wheel", function (ev) {
      if (ev.cancelable) ev.stopImmediatePropagation();
    }, { capture: true, passive: true });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap"
    }).addTo(map);
    markers = L.layerGroup().addTo(map);
    map.setView([20, 0], 2);
  }
  function init() {
    initMap();
    Promise.all([loadGeoData(), loadFileTrucks()]).then(function () {
      return detectCountry();
    }).then(function (found) {
      if (found && loadedCountry(found.code)) setCountry(found.code, found.point);
      else setCountry("", null);
    });
  }
  window.addEventListener("load", function () {
    if (!map) return;
    map.invalidateSize();
    if (loadedCountry(state.country)) layoutMap();
  });
  var mapResizeTimer = null;
  window.addEventListener("resize", function () {
    if (!map) return;
    clearTimeout(mapResizeTimer);
    mapResizeTimer = setTimeout(function () { layoutMap(false); }, 80);
  });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
