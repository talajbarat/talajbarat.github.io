(() => {
  const VIEW_META = {
    hydro: {
      label: "Vízgyűjtő",
      heading: "Vízgyűjtő és vízvisszatartás",
      lead: 'A <strong>10 méteres országos domborzatmodell (DEM)</strong> alapján készült nézet azt mutatja, merre gyűlik össze a csapadékvíz a tájban. Egy 50 mm-es felhőszakadásnál kb. <span class="hl-accent">143 ezer m³</span> víz folyik át Szada domboldalairól Veresegyház völgyeibe. A <span class="hl-water">kék sávok</span> a nedvességi gyülekezőhelyeket, az <span class="hl-gold">aranysárga foltok</span> a természetes víztározó mélyedéseket jelzik.',
      methodHtml: `
        <h3 class="method-title">Hogyan készült ez a réteg?</h3>
        <ul class="method-list">
          <li><strong>Domborzati lefolyási modell:</strong> A 10 m-es DEM-ből WhiteboxTools segítségével levezetett <span class="hl-water">Topográfiai Nedvességi Index (TWI)</span> és a ≥25 ha-os vízgyűjtő-tengelyek mutatják, hol lassul le és gyülekezik meg a felszíni víz.</li>
          <li><strong>Természetes mélyedések (Sink Depth):</strong> A nyers és a hidrológiailag feltöltött domborzat különbségéből kiszűrtük a legalább <span class="hl-gold">20 cm mély</span> zárt mélyedéseket — ezek olcsó, természetes záportározó zsebekként működhetnek.</li>
          <li><strong>Lefolyásbecslés (SCS-CN):</strong> A 2019-es NÖSZTÉP felszínborítás, a burkoltság és a talajvíz-gazdálkodási csoport alapján becsültük az 50 mm-es zápor helyi többletlefolyását.</li>
        </ul>
        <p class="method-note">Előszűrő vízgyűjtő-diagnosztika: kijelöli a beavatkozásra érdemes völgyeket és zsebeket, de nem helyettesíti a részletes mérnöki csapadékvíz-hálózati méretezést.</p>
      `,
    },
    sealing: {
      label: "Talajfedés",
      heading: "Talajfedés és zöldvesztés",
      lead: 'A <strong>Copernicus Sentinel-2</strong> műhold <strong>2018-as és 2025-ös</strong> nyári felvételeinek összehasonlítása alapján hét év alatt <span class="hl-rose">154,8 hektár</span> új burkolt felület (épület, út, térkő) jelent meg a két településen. A <span class="hl-rose">bíborpiros foltok</span> az új lefedéseket, a sötétpalaszürke részek a 2018-ban már meglévő burkolatokat mutatják.',
      methodHtml: `
        <h3 class="method-title">Hogyan készült ez a réteg?</h3>
        <ul class="method-list">
          <li><strong>Többéves műholdas idősor:</strong> Felhőmentes nyári Sentinel-2 kompozitokat (10 m felbontás) hasonlítottunk össze a 2018-as és a 2025-ös időszakból, a 2019-es NÖSZTÉP ökoszisztéma-alaptérképre kalibrálva.</li>
          <li><strong>Beépítettségi és zöld-index:</strong> A <span class="hl-rose">ΔNDBI</span> (beépítettségi növekedés) és a <strong>ΔNDVI</strong> (vegetáció-csökkenés) együttes küszöbölése választotta le a valódi új burkolatokat az átmeneti szántóföldi változásoktól.</li>
          <li><strong>Vízgyűjtő-hatás:</strong> Minden újonnan lefedett hektár elveszíti a beszivárgási képességét, ami közvetlenül növeli a szadai lejtőkről Veresegyházra zúduló villámárvíz-terhelést.</li>
        </ul>
        <p class="method-note">Szadán a 7 év alatti relatív burkoltság-növekedés +30,8% volt, ami jelentősen gyorsítja a felszíni lefolyást.</p>
      `,
    },
    erosion: {
      label: "Erózió",
      heading: "Talajeróziós kockázat",
      lead: 'A <strong>10 méteres domborzatmodell</strong> és a <strong>2025-ös Sentinel-2</strong> műholdfelvételek összevetése megmutatja, hol találkoznak a gyors lefolyású lejtők növénytakaró nélküli felszínnel. A <span class="hl-rose">bíborpiros foltok</span> jelzik a kritikus eróziós átfedéseket, ahol a zápor könnyen lemossa a termőtalajt.',
      methodHtml: `
        <h3 class="method-title">Hogyan készült ez a réteg?</h3>
        <ul class="method-list">
          <li><strong>Lefolyási energia (SPI):</strong> A 10 m-es DEM-ből számított Stream Power Index a ≥5%-os lejtőkön mutatja a koncentrált vízáramlás <span class="hl-accent">nyíró- és mosóerejét</span>.</li>
          <li><strong>Csupasz talaj (BSI):</strong> A 2025-ös Sentinel-2 Csupasz Talaj Indexe (Bare Soil Index) a legalább 3%-os lejtőkön azonosítja a <span class="hl-gold">fedetlen, növényzet nélküli</span> talajfelszíneket.</li>
          <li><strong>Kritikus zóna (SPI × BSI):</strong> A két réteg metszete <span class="hl-rose">61,8 ha</span> kiemelten veszélyeztetett területet jelöl ki, ahonnan hordalék és sár juthat az alsóbb utcákba és tavakba.</li>
        </ul>
        <p class="method-note">A felszíni takarónövényzet, az erózióvédő sávok és a rönkgátak ezekben a folyosókban adják a legnagyobb talajvédelmi hasznot.</p>
      `,
    },
    heat: {
      label: "Hősziget",
      heading: "Nyári városi hősziget",
      lead: 'A <strong>Landsat 8/9</strong> műholdak <strong>2022–2025 közötti 16 felhőmentes nyári felvételének</strong> mediánja alapján a leburkolt belterületek átlagosan <span class="hl-warm">+6,4 °C-kal forróbbak</span>, mint a fás zöldfelületek. A <span class="hl-cool">kék-cián zónák</span> a hűvösebb erdőket és parkokat, a <span class="hl-warm">narancs-vörös részek</span> a túlmelegedő felületeket jelzik.',
      methodHtml: `
        <h3 class="method-title">Hogyan készült ez a réteg?</h3>
        <ul class="method-list">
          <li><strong>Hőkamerás műhold-sorozat:</strong> 16 azonos nyári időszakú Landsat 8/9 hősáv (LST) mediánértékéből szűrtük ki az egyszeri időjárási kilengéseket.</li>
          <li><strong>Felszínhőmérsékleti kontraszt:</strong> A burkolt belterületek átlaga <span class="hl-warm">40,7 °C</span>, míg a fás-bokros zöldfelületeké csak <span class="hl-cool">34,3 °C</span> azonos nyári napokon.</li>
          <li><strong>Mikroklíma és vízháztartás:</strong> A lezárt, száraz talaj nem tud párologtatással hűteni — így a városi hősziget és a csapadékvesztés ugyanannak a problémának két oldala.</li>
        </ul>
        <p class="method-note">A közterületi fásítás, az árnyékolás és a vízáteresztő burkolatok közvetlenül csökkentik a nyári hőterhelést a piros zónákban.</p>
      `,
    },
  };

  const state = {
    view: "hydro",
    basemapKey: "sat_fresh",
    stats: null,
  };

  const fmtNum = (val) => Number(val).toLocaleString("hu-HU");
  const fmtDec = (val, digits = 1) =>
    Number(val).toLocaleString("hu-HU", {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    });

  // 1. Initialize Leaflet map with top-right zoom
  const map = L.map("map", {
    center: [47.648, 19.305],
    zoom: 13,
    zoomControl: false,
    preferCanvas: true,
  });
  L.control.zoom({ position: "topright" }).addTo(map);

  map.createPane("rasterPane");
  map.getPane("rasterPane").style.zIndex = 320;
  map.createPane("vectorLowPane");
  map.getPane("vectorLowPane").style.zIndex = 410;
  map.createPane("vectorMidPane");
  map.getPane("vectorMidPane").style.zIndex = 430;

  const basemaps = {
    sat_fresh: L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      { attribution: "Tiles &copy; Esri World Imagery", maxZoom: 19 }
    ),
    osm: L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
      maxZoom: 19,
    }),
  };
  basemaps.sat_fresh.addTo(map);

  const viewGroups = {
    hydro: L.layerGroup(),
    sealing: L.layerGroup(),
    erosion: L.layerGroup(),
    heat: L.layerGroup(),
  };
  const refGroups = {
    aoi: L.layerGroup().addTo(map),
    ecosystems: L.layerGroup(),
  };
  const rasters = {};

  function setBasemap(key) {
    if (!basemaps[key] || state.basemapKey === key) return;
    basemaps[state.basemapKey].removeFrom(map);
    basemaps[key].addTo(map);
    state.basemapKey = key;

    document.querySelectorAll(".basemap-btn").forEach((btn) => {
      const active = btn.dataset.basemap === key;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
  }

  document.querySelectorAll(".basemap-btn").forEach((btn) => {
    btn.addEventListener("click", () => setBasemap(btn.dataset.basemap));
  });

  // 2. Raster opacity control
  const opacitySlider = document.getElementById("raster-opacity");
  const opacityValEl = document.getElementById("opacity-value");
  function syncOpacity() {
    const val = Number(opacitySlider.value);
    opacitySlider.setAttribute("aria-valuetext", `${val}%`);
    opacityValEl.textContent = `${val}%`;
    const alpha = val / 100;
    Object.values(rasters).forEach((ov) => ov && ov.setOpacity(alpha));
  }
  syncOpacity();
  opacitySlider.addEventListener("input", syncOpacity);

  // 3. Desktop panel collapse & mobile bottom sheet
  const sidePanel = document.getElementById("side-panel");
  const panelToggle = document.getElementById("panel-toggle");
  const sheetHandle = document.getElementById("sheet-handle");

  panelToggle.addEventListener("click", () => {
    const isClosed = sidePanel.dataset.state === "closed";
    sidePanel.dataset.state = isClosed ? "open" : "closed";
    panelToggle.setAttribute("aria-expanded", String(isClosed));
    panelToggle.setAttribute("aria-label", isClosed ? "Panel elrejtése" : "Panel megnyitása");
    panelToggle.setAttribute("title", isClosed ? "Panel elrejtése" : "Panel megnyitása");
  });

  sheetHandle.addEventListener("click", () => {
    const isFull = sidePanel.dataset.sheet === "full";
    sidePanel.dataset.sheet = isFull ? "peek" : "full";
    sheetHandle.setAttribute("aria-expanded", String(!isFull));
  });

  // 4. Render active view KPIs & Municipality comparison
  function renderSidebarForView() {
    if (!state.stats) return;
    const t = VIEW_META[state.view];
    const s = state.stats;
    const sz = s.municipalities.Szada;
    const ve = s.municipalities["Veresegyház"];
    const d = s.derived_indices;

    document.getElementById("view-heading").textContent = t.heading;
    document.getElementById("view-lead").innerHTML = t.lead;
    document.getElementById("method-section").innerHTML = t.methodHtml;

    const kpiEl = document.getElementById("panel-kpis");
    const muniEl = document.getElementById("muni-band");

    let kpis = [];
    let szSub = "";
    let veSub = "";
    let muniLeft = [];
    let muniRight = [];

    if (state.view === "hydro") {
      kpis = [
        ["Szadáról átfolyó víz (50 mm)", `${fmtNum(s.cross_border.runoff_50mm_m3)} m³`],
        ["Természetes mélyedések", `${fmtDec(d.hydro.sink_area_ha)} ha`],
        ["Mélyedések térfogata", `${fmtNum(d.hydro.sink_volume_m3)} m³`],
      ];
      szSub = `dombtető · átl. ${fmtDec(sz.elev_mean_m, 0)} m`;
      veSub = `völgy · átl. ${fmtDec(ve.elev_mean_m, 0)} m`;
      muniLeft = [
        ["50 mm zápor lefolyása", `${fmtNum(sz.runoff_50mm_m3)} m³`],
        ["Természetes mélyedések", `${fmtDec(d.hydro.szada.sink_area_ha)} ha`],
      ];
      muniRight = [
        ["50 mm zápor lefolyása", `${fmtNum(ve.runoff_50mm_m3)} m³`],
        ["Természetes mélyedések", `${fmtDec(d.hydro.veresegyhaz.sink_area_ha)} ha`],
      ];
    } else if (state.view === "sealing") {
      kpis = [
        ["Burkolt arány (2018 → 2025)", `${fmtDec(s.combined.sealed_2018_pct)}→${fmtDec(s.combined.sealed_2025_pct)}%`],
        ["Újonnan leburkolt terület", `+${fmtDec(s.combined.new_sealing_2018_2025_ha)} ha`],
        ["Szada növekedése (7 év)", `+${fmtDec(sz.sealing_rel_growth_pct)}%`],
      ];
      muniLeft = [
        ["Burkolt terület aránya", `${fmtDec(sz.sealed_2018_pct)}% → ${fmtDec(sz.sealed_2025_pct)}%`],
        ["Új burkolat (7 év alatt)", `+${fmtDec(sz.new_sealing_2018_2025_ha)} ha (+${fmtDec(sz.sealing_rel_growth_pct)}%)`],
      ];
      muniRight = [
        ["Burkolt terület aránya", `${fmtDec(ve.sealed_2018_pct)}% → ${fmtDec(ve.sealed_2025_pct)}%`],
        ["Új burkolat (7 év alatt)", `+${fmtDec(ve.new_sealing_2018_2025_ha)} ha (+${fmtDec(ve.sealing_rel_growth_pct)}%)`],
      ];
    } else if (state.view === "erosion") {
      kpis = [
        ["Kritikus (meredek + csupasz)", `${fmtDec(d.erosion.spi_bsi_overlap_ha)} ha`],
        ["Erős lefolyású lejtő", `${fmtDec(d.erosion.high_spi_ha)} ha`],
        ["Csupasz talaj lejtőn", `${fmtDec(d.erosion.bare_soil_slope_ha)} ha`],
      ];
      muniLeft = [
        ["Kritikus eróziós zóna", `${fmtDec(d.erosion.szada.spi_bsi_overlap_ha)} ha`],
        ["Csupasz talaj lejtőn", `${fmtDec(d.erosion.szada.bare_soil_slope_ha)} ha`],
      ];
      muniRight = [
        ["Kritikus eróziós zóna", `${fmtDec(d.erosion.veresegyhaz.spi_bsi_overlap_ha)} ha`],
        ["Csupasz talaj lejtőn", `${fmtDec(d.erosion.veresegyhaz.bare_soil_slope_ha)} ha`],
      ];
    } else if (state.view === "heat") {
      kpis = [
        ["Burkolt vs. fás különbség", `+${fmtDec(s.combined.uhi_contrast_c)} °C`],
        ["Burkolt felületek átlaga", `${fmtDec(s.combined.lst_sealed_c)} °C`],
        ["Fás zöldfelületek átlaga", `${fmtDec(s.combined.lst_green_c)} °C`],
      ];
      muniLeft = [
        ["Burkolt felszín átlaga", `${fmtDec(sz.lst_sealed_c)} °C`],
        ["Melegebb a fás zöldnél", `+${fmtDec(sz.uhi_contrast_c)} °C`],
      ];
      muniRight = [
        ["Burkolt felszín átlaga", `${fmtDec(ve.lst_sealed_c)} °C`],
        ["Melegebb a fás zöldnél", `+${fmtDec(ve.uhi_contrast_c)} °C`],
      ];
    }

    kpiEl.innerHTML = kpis
      .map(([lbl, val]) => `<div class="kpi"><dt class="kpi-label">${lbl}</dt><dd class="kpi-value">${val}</dd></div>`)
      .join("");

    const renderMuniCard = (name, sub, rows) => `
      <div class="muni-mini">
        <div class="muni-mini-head">${name}${sub ? `<span class="muni-mini-sub">${sub}</span>` : ""}</div>
        ${rows.map(([l, v]) => `<div class="muni-row"><span class="muni-row-label">${l}</span><span class="muni-row-val">${v}</span></div>`).join("")}
      </div>
    `;

    muniEl.innerHTML = `
      <div class="muni-band-title">Településenkénti bontás</div>
      <div class="muni-grid">
        ${renderMuniCard("Szada", szSub, muniLeft)}
        ${renderMuniCard("Veresegyház", veSub, muniRight)}
      </div>
    `;
  }

  // 5. Dynamic legend inside the Rétegek popover (ONLY shows the active view)
  function renderPopoverLegend() {
    const el = document.getElementById("popover-legend");
    const minC = state.stats?.lst_palette?.min_c ?? 29.9;
    const maxC = state.stats?.lst_palette?.max_c ?? 45.1;

    let rows = [];
    if (state.view === "hydro") {
      rows = [
        `<div class="legend-row"><span class="legend-mark legend-line" style="background:#00E5FF;border:1px solid #082F49"></span><span>Fő lefolyási tengely (≥25 ha)</span></div>`,
        `<div class="legend-row"><span class="legend-mark" style="background:#0284C7"></span><span>Magas nedvességi index (TWI)</span></div>`,
        `<div class="legend-row"><span class="legend-mark" style="background:#FACC15"></span><span>Természetes víztározó mélyedés (≥0,2 m)</span></div>`,
      ];
    } else if (state.view === "sealing") {
      rows = [
        `<div class="legend-row"><span class="legend-mark" style="background:#E11D48"></span><span>Új talajfedés (2018 → 2025)</span></div>`,
        `<div class="legend-row"><span class="legend-mark" style="background:#334155"></span><span>Korábbi burkoltság (2018)</span></div>`,
      ];
    } else if (state.view === "erosion") {
      rows = [
        `<div class="legend-row"><span class="legend-mark" style="background:#E11D48"></span><span>Kritikus átfedés (meredek + csupasz)</span></div>`,
        `<div class="legend-row"><span class="legend-mark" style="background:#F97316"></span><span>Erős lefolyási energia (≥5% lejtő)</span></div>`,
        `<div class="legend-row"><span class="legend-mark" style="background:#FACC15"></span><span>Fedetlen, csupasz talaj lejtőn</span></div>`,
      ];
    } else if (state.view === "heat") {
      rows = [
        `<div class="legend-row"><span>Nyári felszínhőmérséklet (LST)</span></div>`,
        `<div class="legend-gradient"></div>`,
        `<div class="legend-scale-labels"><span>${minC} °C</span><span>${maxC} °C</span></div>`,
      ];
    }
    el.innerHTML = rows.join("");
  }

  // 6. Exclusive view switcher (via dropdown popover)
  const viewPopover = document.getElementById("view-popover");
  const viewMenuLabel = document.getElementById("view-menu-label");

  function switchView(nextView) {
    if (!viewGroups[nextView]) return;
    state.view = nextView;

    Object.entries(viewGroups).forEach(([k, grp]) => {
      if (k === nextView) grp.addTo(map);
      else map.removeLayer(grp);
    });

    viewMenuLabel.textContent = VIEW_META[nextView].label;
    document.querySelectorAll(".view-option").forEach((btn) => {
      const active = btn.dataset.view === nextView;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    renderSidebarForView();
    renderPopoverLegend();
  }

  document.querySelectorAll(".view-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      switchView(btn.dataset.view);
      if (typeof viewPopover.hidePopover === "function") {
        viewPopover.hidePopover();
      }
    });
  });

  // 7. Load derived datasets & populate views
  async function loadAllData() {
    const fetchJson = (url) => fetch(url).then((r) => r.json());
    const [stats, aoi, flowMajor, cbWs, eco] = await Promise.all([
      fetchJson("data/summary_stats.json"),
      fetchJson("data/aoi_boundaries.geojson"),
      fetchJson("data/flow_network_major.geojson"),
      fetchJson("data/cross_border_subbasins.geojson"),
      fetchJson("data/receiving_ecosystems.geojson"),
    ]);

    state.stats = stats;
    const b = stats.overlay_bounds;
    const alpha = Number(opacitySlider.value) / 100;

    // 4 clean view raster overlays
    rasters.twi = L.imageOverlay("data/twi_wetness.png", b, { opacity: alpha, pane: "rasterPane" }).addTo(viewGroups.hydro);
    rasters.sealing = L.imageOverlay("data/impervious_change.png", b, { opacity: alpha, pane: "rasterPane" }).addTo(viewGroups.sealing);
    rasters.erosion = L.imageOverlay("data/erosion_spi_bsi.png", b, { opacity: alpha, pane: "rasterPane" }).addTo(viewGroups.erosion);
    rasters.heat = L.imageOverlay("data/lst_summer.png", b, { opacity: alpha, pane: "rasterPane" }).addTo(viewGroups.heat);

    // AOI boundaries
    L.geoJSON(aoi, {
      pane: "vectorMidPane",
      style: { color: "#FFF8EE", weight: 4.5, opacity: 0.72, fillOpacity: 0 },
      interactive: false,
    }).addTo(refGroups.aoi);

    const aoiLayer = L.geoJSON(aoi, {
      pane: "vectorMidPane",
      style: (feat) => ({
        color: feat.properties.name === "Szada" ? "#C85A35" : "#2B2118",
        weight: 2.2,
        dashArray: "7 5",
        fillOpacity: 0.02,
      }),
      interactive: false,
    }).addTo(refGroups.aoi);
    map.fitBounds(aoiLayer.getBounds(), { padding: [36, 36] });

    // Hydro view vectors (no POIs)
    L.geoJSON(cbWs, {
      pane: "vectorLowPane",
      style: { color: "#236B8E", weight: 1.4, fillColor: "#236B8E", fillOpacity: 0.06 },
      interactive: false,
    }).addTo(viewGroups.hydro);

    L.geoJSON(flowMajor, {
      pane: "vectorMidPane",
      style: (feat) => {
        const str = feat.properties.strahler || 2;
        return {
          color: "#082F49",
          weight: Math.min(5.2, 3.2 + str * 0.45),
          opacity: 0.78,
        };
      },
      interactive: false,
    }).addTo(viewGroups.hydro);

    L.geoJSON(flowMajor, {
      pane: "vectorMidPane",
      style: (feat) => {
        const str = feat.properties.strahler || 2;
        return {
          color: "#00E5FF",
          weight: Math.min(3.0, 1.4 + str * 0.45),
          opacity: 0.95,
        };
      },
      interactive: false,
    }).addTo(viewGroups.hydro);

    // Optional reference layer in Rétegek popover
    L.geoJSON(eco, {
      pane: "vectorLowPane",
      style: (feat) => ({
        color: feat.properties.eco_type === "protected" ? "#3B7A57" : "#236B8E",
        weight: 1.4,
        dashArray: feat.properties.eco_type === "protected" ? "4 3" : null,
        fillColor: feat.properties.eco_type === "protected" ? "#3B7A57" : "#236B8E",
        fillOpacity: 0.24,
      }),
      onEachFeature: (feat, lyr) => {
        lyr.bindTooltip(`${feat.properties.name_hu} (${feat.properties.area_ha} ha)`);
      },
    }).addTo(refGroups.ecosystems);

    // Reference toggle bindings
    [
      ["toggle-aoi", refGroups.aoi],
      ["toggle-eco", refGroups.ecosystems],
    ].forEach(([id, grp]) => {
      document.getElementById(id).addEventListener("change", (e) => {
        if (e.target.checked) grp.addTo(map);
        else map.removeLayer(grp);
      });
    });

    switchView("hydro");
  }

  loadAllData().catch((err) => {
    console.error("Failed to load spatial data:", err);
  });
})();
