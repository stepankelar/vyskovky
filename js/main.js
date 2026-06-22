/* =========================================================
   VÝŠKOVÉ PRÁCE – interaktivní prvky
   ========================================================= */
(function () {
    "use strict";

    /* ----- Aktuální rok v patičce ----- */
    var yearEl = document.getElementById("year");
    if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

    /* ----- Mobilní menu (hamburger) ----- */
    var toggle = document.getElementById("nav-toggle");
    var nav = document.getElementById("main-nav");

    function closeMenu() {
        if (!nav || !toggle) return;
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Otevřít menu");
    }

    if (toggle && nav) {
        toggle.addEventListener("click", function () {
            var isOpen = nav.classList.toggle("open");
            toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
            toggle.setAttribute("aria-label", isOpen ? "Zavřít menu" : "Otevřít menu");
        });

        /* zavřít menu po kliknutí na odkaz */
        nav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", closeMenu);
        });

        /* zavřít menu klávesou Esc */
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") closeMenu();
        });
    }

    /* ----- Stín hlavičky při scrollování ----- */
    var header = document.getElementById("header");
    if (header) {
        var onScroll = function () {
            header.classList.toggle("scrolled", window.scrollY > 10);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
    }

    /* ----- Formulář poptávky ----- */
    /* Bez serveru: po validaci sestaví e-mail a otevře poštovního klienta.
       Až budete mít e-mailovou schránku nebo službu (Formspree apod.),
       stačí změnit ADRESA_PRO_POPTAVKY níže, případně formulář napojit
       na vlastní backend. */
    var ADRESA_PRO_POPTAVKY = "sterbakr@seznam.cz"; // e-mail, kam chodí poptávky

    var form = document.getElementById("inquiry-form");
    var note = document.getElementById("form-note");

    function setNote(message, type) {
        if (!note) return;
        note.textContent = message;
        note.className = "form-note" + (type ? " " + type : "");
    }

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            /* jednoduchá validace povinných polí */
            var required = form.querySelectorAll("[required]");
            var firstInvalid = null;

            required.forEach(function (field) {
                var ok = field.type === "checkbox" ? field.checked : field.value.trim() !== "";
                field.classList.toggle("invalid", !ok);
                if (!ok && !firstInvalid) firstInvalid = field;
            });

            if (firstInvalid) {
                setNote("Vyplňte prosím všechna povinná pole označená *.", "error");
                firstInvalid.focus();
                return;
            }

            /* sestavení e-mailu */
            var get = function (id) {
                var el = document.getElementById(id);
                return el ? el.value.trim() : "";
            };

            var subject = "Poptávka práce z webu";
            var lines = [
                "Jméno: " + get("name"),
                "Telefon: " + get("phone"),
                "E-mail: " + get("email"),
                "Druh práce: " + get("service"),
                "Místo realizace: " + get("location"),
                "",
                "Popis poptávky:",
                get("message")
            ];

            var mailto = "mailto:" + ADRESA_PRO_POPTAVKY +
                "?subject=" + encodeURIComponent(subject) +
                "&body=" + encodeURIComponent(lines.join("\n"));

            window.location.href = mailto;

            setNote("Otevíráme váš e-mailový program s předvyplněnou poptávkou. Děkujeme!", "success");
            form.reset();
        });

        /* odstranit zvýraznění chyby při psaní */
        form.querySelectorAll("[required]").forEach(function (field) {
            field.addEventListener("input", function () {
                field.classList.remove("invalid");
            });
        });
    }
})();
