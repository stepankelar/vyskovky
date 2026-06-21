# Web – Výškové práce

Jednoduchý, rychlý a plně responzivní web (funguje na počítači i telefonu)
pro firmu zaměřenou na výškové práce. Postavený jen na HTML, CSS a kousku
JavaScriptu – **bez nutnosti instalace čehokoliv**.

## Struktura

```
.
├── index.html          # celá stránka (obsah a texty)
├── css/
│   └── styles.css      # vzhled, barvy, responzivita
├── js/
│   └── main.js         # mobilní menu + odeslání poptávky
└── images/             # sem vložíte fotografie (viz images/README.md)
```

## Jak web spustit / prohlédnout

Stačí otevřít soubor `index.html` v prohlížeči (dvojklik). Není potřeba
žádný server. Pro vývoj lze použít i jednoduchý lokální server:

```bash
# v této složce
python3 -m http.server 8000
# pak otevřít http://localhost:8000
```

## Co je potřeba doplnit (označeno v textu hranatými závorkami `[...]`)

- **Název firmy** – v hlavičce, patičce a sekci Kontakt (`[NÁZEV FIRMY]`, `[Název firmy]`)
- **Telefon** – `[+420 000 000 000]` (a v odkazech `tel:` a `href`)
- **E-mail** – `[info@vasefirma.cz]` (a v `js/main.js` proměnná `ADRESA_PRO_POPTAVKY`)
- **Působnost / adresa / IČO / DIČ** – sekce Kontakt
- **Fotografie** – složka `images/` (návod v `images/README.md`)
- **Texty** – kdekoliv uvidíte text v hranatých závorkách `[...]`

## Sekce webu

1. **Úvod (hero)** – hlavní sdělení a výzva k poptávce
2. **Výškové práce** – 5 oblastí činnosti:
   1. Čištění (střech, fasád, okapů a světlíků)
   2. Opravy a zednické práce ve výškách (fasád, střech, komínů a střešních lávek, zednické práce)
   3. Nátěry (střech, fasád, konstrukcí, komínů, ochranné nástřiky)
   4. Úklid (mytí oken, mytí fasád, úklidové práce ve výškách)
   5. Instalace a montáže – *vedlejší činnost* (reklamní plochy, komínové stříšky atd.)
3. **Rekonstrukce a zednické práce** – sezónní (zimní) činnost
4. **Galerie** – prostor pro ilustrační fotografie
5. **Kontakt** – telefon, e-mail, působnost, provozní doba, fakturační údaje
6. **Poptávka práce** – formulář

## Formulář poptávky

Web nemá server, proto formulář po vyplnění otevře e-mailového klienta
s předvyplněnou zprávou. E-mailovou adresu nastavíte v `js/main.js`
(proměnná `ADRESA_PRO_POPTAVKY`). Pokud budete chtít odesílání přímo
z webu, lze formulář snadno napojit na službu jako Formspree, FormSubmit
nebo vlastní backend.

## Úprava barev

Hlavní barvy jsou na začátku `css/styles.css` v sekci `:root`
(např. `--orange` pro hlavní akcentovou barvu). Změnou jedné hodnoty
se přebarví celý web.
