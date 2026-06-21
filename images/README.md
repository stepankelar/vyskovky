# Složka pro fotografie

Sem vložte ilustrační fotografie. Web je připravený a obrázky se zobrazí
automaticky, jakmile budou mít správný název. **Doporučený formát: `.jpg`**
(případně `.webp`), šířka cca 1200–1920 px, optimalizované pro web.

## Které soubory web hledá

| Soubor                | Kde se zobrazí                                   | Doporučený poměr stran |
|-----------------------|--------------------------------------------------|------------------------|
| `hero.jpg`            | velké pozadí úvodní sekce (hero)                 | na šířku (16:9)        |
| `rekonstrukce.jpg`    | sekce „Rekonstrukce a zednické práce“            | 4:3                    |
| `poptavka.jpg`        | pozadí sekce „Poptávka práce“                    | na šířku               |
| `galerie-1.jpg` … `galerie-6.jpg` | dlaždice v galerii                  | čtverec (1:1)          |

> Dokud fotky nevložíte, zobrazí se na jejich místě elegantní zástupný
> obrázek („Prostor pro foto“) s názvem očekávaného souboru – nic nerozbije.

## Galerie – přidání obrázku do dlaždice

V `index.html` v sekci `#galerie` stačí do dané `<figure>` vložit obrázek, např.:

```html
<figure class="img-placeholder">
    <img src="images/galerie-1.jpg" alt="Čištění střechy">
</figure>
```

Obrázek pak zástupnou grafiku překryje.

## Tip k velikosti souborů

Velké fotky web zpomalují. Před nahráním je zmenšete / zkomprimujte
(např. na [squoosh.app](https://squoosh.app)). Ideálně do ~300 kB na obrázek.
