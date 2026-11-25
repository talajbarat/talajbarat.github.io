# Szada – Veresegyház Talajbarát Vízgyűjtő-Diagnosztika

> **Független szakmai prototípus** · Készítette: **Deák Tamás**  
> A Magyar Talajtani Társaság (MTT) *Talajbarát Települések Programja* és a HEKTÁR Agrármédia videója (`https://youtu.be/cxHvCDCI-DQ`) által inspirált előszűrő webtérkép-prototípus. **Nem hivatalos MTT-kiadvány és nem önkormányzati megrendelés.**

---

## Áttekintés

A statikus webtérkép a HEKTÁR videóban említett **Szada (dombtető) → Veresegyház (völgy)** közigazgatási határokon átnyúló víz- és talajproblémát mutatja be 10 méteres domborzati és nyílt műholdas adatok alapján, négy tematikus nézetben:

1. **Vízgyűjtő:** 10 m-es DEM-ből levezetett Topográfiai Nedvességi Index (`TWI`), ≥25 ha fő lefolyási tengelyek, természetes víztározó mélyedések (`Sink Depth`: **12,6 ha / 53 465 m³**), valamint **6 db Szada → Veresegyház átlépő részvízgyűjtő** (`1 582,0 ha`, 50 mm-es zápornál becslés szerint **143 366 m³** átfolyással).
2. **Talajfedés:** Copernicus Sentinel-2 (2018 vs. 2025), NÖSZTÉP 2019 és OpenStreetMap alapján **+154,8 ha** új burkolt felület 7 év alatt (Szadán **+30,8%**-os relatív növekedés).
3. **Erózió:** A 10 m-es DEM áramlási energia indexe (`SPI`) és a 2025-ös Sentinel-2 csupasz talaj index (`BSI`) metszeteként **61,8 ha** kritikus eróziós átfedés (`36,0 ha` Szada, `25,7 ha` Veresegyház).
4. **Hősziget:** 16 nyári Landsat 8/9 hősáv (`LST`) mediánja alapján **+6,4 °C** felszínhőmérsékleti kontraszt a burkolt belterületek (**40,7 °C**) és a fás zöldfelületek (**34,3 °C**) között.

---

## Hosting és struktúra

A repó kizárólag a statikus GitHub Pages publikáláshoz szükséges fájlokat tartalmazza (`web/`, összesen **2,1 MB**):

```text
talajbarat_szada_veresegyhaz/
├── .github/workflows/deploy.yml   # GitHub Pages statikus deploy
├── .gitignore                     # Nyers adatok, DEM, irodai és belső fájlok kizárása
├── README.md
└── web/                           # Statikus Leaflet webtérkép (noindex, nofollow)
    ├── index.html
    ├── robots.txt
    ├── css/style.css
    ├── js/app.js
    ├── data/                      # Csak származtatott PNG raszterek és GeoJSON/JSON
    └── vendor/leaflet/
```

### Helyi előnézet

```bash
python3 -m http.server 8080 --directory web --bind 127.0.0.1
```

Majd nyisd meg: `http://127.0.0.1:8080/`

---

## Adatvédelem és módszertani korlátok

- **Nyers adatok védelme:** A lokális 10 m-es DEM, a NÖSZTÉP és minden nyers/köztes téradat kizárásra került a repóból; nyilvánosan csak a származtatott, stilizált webes kimenetek szerepelnek.
- **Előszűrő jelleg:** Az `SCS-CN` és az `SPI × BSI` számítások területi előszűrő modellek, nem helyettesítik a részletes mérnöki csapadékvíz-hálózati méretezést.
- **Talajlépték (AGROTOPO → DOSoReMI):** A háttérben futó `SCS-CN` modell az országos `1:100 000`-es AGROTOPO-t használja; a módszertan elő van készítve a 100 m-es **DOSoReMI** fizikai talaj- és humuszrétegek integrálására.
