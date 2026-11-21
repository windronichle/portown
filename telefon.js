
/* ===== TELEFON: "Ara"ya basınca iPhone gibi arama ekranı (gerçek arama yapılmaz) ===== */
(function () {
    const st = document.createElement("style");
    st.textContent = `
#cgx{position:absolute;left:0;top:0;width:100%;height:100%;z-index:60;display:none;color:#fff;overflow:hidden;background:linear-gradient(180deg,#4a4a4e 0%,#2a2a2d 55%,#161618 100%)}
#cgx.ac{display:block}
#cgx .ad{position:absolute;left:24px;right:24px;top:108px;text-align:center;font-size:36px;font-weight:500;line-height:42px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#cgx .dr{position:absolute;left:0;right:0;top:158px;text-align:center;font-size:20px;color:rgba(255,255,255,.7)}
#cgx .izg{position:absolute;left:50%;top:262px;width:288px;margin-left:-144px;display:grid;grid-template-columns:repeat(3,80px);column-gap:24px;row-gap:24px}
#cgx .dg{display:flex;flex-direction:column;align-items:center;gap:8px;font-size:13px;color:#fff}
#cgx .dg span{display:flex;align-items:center;justify-content:center;width:80px;height:80px;border-radius:50%;background:rgba(255,255,255,.2)}
#cgx .dg svg{width:32px;height:32px}
#cgx .dg.sol{opacity:.55}
#cgx .bit{position:absolute;left:50%;bottom:92px;width:80px;height:80px;margin-left:-40px;border-radius:50%;background:#ff3b30;border:0;padding:0;display:flex;align-items:center;justify-content:center}
#cgx .bit svg{width:36px;height:36px;transform:rotate(135deg)}
#cgx .bit svg path,#cgx .bit svg circle{fill:#fff;stroke:#fff}
`;
    document.head.appendChild(st);

    const faz = document.getElementById("phone");
    const el = document.createElement("div");
    el.id = "cgx";
    const G = function (yol) { return "<svg viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='1.7' stroke-linecap='round' stroke-linejoin='round'>" + yol + "</svg>"; };
    const D = [
        ["sessiz", G("<rect x='9' y='3' width='6' height='11' rx='3'/><path d='M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M4 4l16 16'/>")],
        ["tuş takımı", G("<circle cx='6' cy='5' r='1.3'/><circle cx='12' cy='5' r='1.3'/><circle cx='18' cy='5' r='1.3'/><circle cx='6' cy='10.5' r='1.3'/><circle cx='12' cy='10.5' r='1.3'/><circle cx='18' cy='10.5' r='1.3'/><circle cx='6' cy='16' r='1.3'/><circle cx='12' cy='16' r='1.3'/><circle cx='18' cy='16' r='1.3'/><circle cx='12' cy='21' r='1.3'/>")],
        ["hoparlör", G("<path d='M4 9.5h3.5L12 5.5v13L7.5 14.5H4z'/><path d='M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a8 8 0 0 1 0 11'/>")],
        ["arama ekle", G("<path d='M12 5v14M5 12h14'/>")],
        ["FaceTime", G("<rect x='3' y='6.5' width='13' height='11' rx='2.5'/><path d='M16 10.5l5-3v9l-5-3z'/>")],
        ["kişiler", G("<circle cx='12' cy='8' r='3.6'/><path d='M4.5 20a7.5 7.5 0 0 1 15 0'/>")]
    ];
    el.innerHTML = "<div class='ad'></div><div class='dr'></div><div class='izg'>" +
        D.map(function (d) { return "<div class='dg sol'><span>" + d[1] + "</span>" + d[0] + "</div>"; }).join("") +
        "</div><button class='bit' aria-label='Bitir'>" +
        "<svg viewBox='0 0 24 24' stroke-width='1.2' stroke-linejoin='round'><path d='M6.6 3.5l2.8 3.9c.4.5.3 1.2-.2 1.6l-1.6 1.2a13.5 13.5 0 0 0 5.2 5.2l1.2-1.6c.4-.5 1.1-.6 1.6-.2l3.9 2.8c.5.4.7 1.1.3 1.6l-1.4 2c-.5.7-1.3 1-2.1.9C9.9 20 4 14.100 3.100 6.700c-.1-.8.2-1.600.9-2.100l2-1.400c.5-.4 1.200-.2 1.600.3z'/></svg></button>";
    faz.appendChild(el);

    const adEl = el.querySelector(".ad"), drEl = el.querySelector(".dr");
    let tm = null, sn = 0, bitti = false;

    function ac(ad) {
        bitti = false; sn = 0;
        adEl.textContent = ad;
        drEl.textContent = "aranıyor…";
        el.classList.add("ac");
        clearInterval(tm);
        tm = setInterval(function () {
            if (bitti) return;
            sn++;
            drEl.textContent = "aranıyor" + ".".repeat(sn % 4);
        }, 500);
    }
    function kapat() {
        if (!el.classList.contains("ac") || bitti) return;
        bitti = true;
        clearInterval(tm);
        drEl.textContent = "Arama sona erdi";
        setTimeout(function () { el.classList.remove("ac"); }, 600);
    }
    el.querySelector(".bit").addEventListener("click", kapat);
    window.addEventListener("popstate", function () { el.classList.remove("ac"); clearInterval(tm); });

    // kişi kartındaki "ara" butonunu işaretle
    const _kart = telKisiKarti;
    telKisiKarti = function (i) {
        const d = document.createElement("div");
        d.innerHTML = _kart(i);
        d.querySelectorAll(".t-islem button").forEach(function (b) {
            if (b.textContent.trim() === "ara") b.setAttribute("data-cag", KISILER[i].ad);
        });
        return d.innerHTML;
    };

    document.getElementById("xapp").addEventListener("click", function (e) {
        const b = e.target.closest("[data-cag]");
        if (b) { ac(b.getAttribute("data-cag")); return; }
        const g = e.target.closest("[data-x='tel:cagri']");
        if (g) ac(telNo ? telNo : "Bilinmeyen numara");
    });
})();


/* ===== KAMERA: Kamera uygulamasına basınca telefonun gerçek kamerası açılır ===== */
(function () {
    const st = document.createElement("style");
    st.textContent = `
#kmx{position:absolute;left:0;top:0;width:100%;height:100%;z-index:40;background:#000;color:#fff;overflow:hidden;display:none}
#kmx.ac{display:block}
#kmx .gor{position:absolute;left:0;top:118px;width:100%;height:520px;background:#111;overflow:hidden}
#kmx video{width:100%;height:100%;object-fit:cover;display:block}
#kmx video.on{transform:scaleX(-1)}
#kmx .msj{position:absolute;left:0;top:0;width:100%;height:100%;display:none;align-items:center;justify-content:center;text-align:center;padding:0 36px;font-size:15px;line-height:1.4;color:#d1d1d6}
#kmx .zum{position:absolute;left:50%;bottom:14px;width:38px;height:38px;margin-left:-19px;border-radius:50%;background:rgba(0,0,0,.45);color:#ffd60a;font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center}
#kmx .mod{position:absolute;left:0;right:0;top:652px;display:flex;justify-content:center;gap:26px;font-size:13px;font-weight:600;letter-spacing:.5px;color:#e5e5ea}
#kmx .mod b{color:#ffd60a;font-weight:700}
#kmx .alt{position:absolute;left:0;right:0;top:690px;height:90px}
#kmx .tetik{position:absolute;left:50%;top:6px;width:76px;height:76px;margin-left:-38px;border-radius:50%;border:4px solid #fff;background:none;padding:0;display:flex;align-items:center;justify-content:center}
#kmx .tetik span{display:block;width:62px;height:62px;border-radius:50%;background:#fff;transition:transform .08s}
#kmx .tetik:active span{transform:scale(.88)}
#kmx .son{position:absolute;left:40px;top:20px;width:50px;height:50px;border-radius:10px;background:#1c1c1e center/cover no-repeat;border:1px solid rgba(255,255,255,.2)}
#kmx .don{position:absolute;right:40px;top:20px;width:50px;height:50px;border-radius:50%;background:rgba(60,60,64,.8);border:0;padding:0;display:flex;align-items:center;justify-content:center}
#kmx .don svg{width:24px;height:24px}
#kmx .flas{position:absolute;inset:0;background:#fff;opacity:0;pointer-events:none}
#kmx .flas.pat{animation:kmxf .25s ease-out}
@keyframes kmxf{0%{opacity:.85}100%{opacity:0}}
`;
    document.head.appendChild(st);

    const faz = document.getElementById("phone");
    const el = document.createElement("div");
    el.id = "kmx";
    el.innerHTML = "<div class='gor'><video playsinline muted autoplay></video><div class='msj'></div><div class='zum'>1×</div><div class='flas'></div></div>" +
        "<div class='mod'><span>VİDEO</span><b>FOTOĞRAF</b><span>PORTRE</span></div>" +
        "<div class='alt'><div class='son'></div><button class='tetik' aria-label='Çek'><span></span></button>" +
        "<button class='don' aria-label='Çevir'><svg viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round'><path d='M20 12a8 8 0 0 0-13.7-5.6L4 8.7'/><path d='M4 4v4.7h4.7'/><path d='M4 12a8 8 0 0 0 13.7 5.6l2.3-2.3'/><path d='M20 20v-4.7h-4.7'/></svg></button></div>";
    faz.appendChild(el);

    const video = el.querySelector("video"), msj = el.querySelector(".msj"), flas = el.querySelector(".flas"), son = el.querySelector(".son");
    let akis = null, yon = "environment", acik = false, bas = null;

    function durdur() {
        if (akis) { akis.getTracks().forEach(function (t) { t.stop(); }); akis = null; }
        video.srcObject = null;
    }
    function hata(t) { msj.style.display = "flex"; msj.textContent = t; video.style.visibility = "hidden"; }
    function baslat() {
        durdur();
        msj.style.display = "none"; video.style.visibility = "visible";
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { hata("Bu tarayıcıda kamera kullanılamıyor. Siteyi https ile aç."); return; }
        navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: yon }, width: { ideal: 1920 }, height: { ideal: 1440 } }, audio: false })
            .then(function (s) {
                if (!acik) { s.getTracks().forEach(function (t) { t.stop(); }); return; }
                akis = s; video.srcObject = s; video.play().catch(function () { });
                video.classList.toggle("on", yon === "user");
            })
            .catch(function () { hata("Kamera izni verilmedi.\nTarayıcının adres çubuğundaki kamera simgesinden izin verip tekrar dene."); });
    }
    function kamAc() { acik = true; el.classList.add("ac"); baslat(); }
    function kamKapat() { acik = false; el.classList.remove("ac"); durdur(); }

    el.querySelector(".don").addEventListener("click", function () { yon = yon === "environment" ? "user" : "environment"; baslat(); });
    el.querySelector(".tetik").addEventListener("click", function () {
        flas.classList.remove("pat"); void flas.offsetWidth; flas.classList.add("pat");
        if (!video.videoWidth) return;
        const c = document.createElement("canvas");
        c.width = video.videoWidth; c.height = video.videoHeight;
        const x = c.getContext("2d");
        if (yon === "user") { x.translate(c.width, 0); x.scale(-1, 1); }
        x.drawImage(video, 0, 0);
        son.style.backgroundImage = "url(" + c.toDataURL("image/jpeg", .7) + ")";
    });

    // çıkış: alttaki çizgiye bas ya da aşağıdan yukarı kaydır
    document.querySelector(".cizgi").addEventListener("click", function (e) { if (acik) { e.stopImmediatePropagation(); kamKapat(); } }, true);
    el.addEventListener("pointerdown", function (e) { bas = e.clientY; });
    el.addEventListener("pointerup", function (e) {
        const r = faz.getBoundingClientRect();
        if (bas !== null && bas - e.clientY > 60 && bas > r.bottom - r.height * 0.14) kamKapat();
        bas = null;
    });
    window.addEventListener("popstate", function () { if (acik) kamKapat(); });

    const _uygAc = uygAc;
    uygAc = function (k) {
        if (k === "kamera") { kamAc(); return; }
        return _uygAc(k);
    };
})();


/* ===== TELEFON: Son Aramalar düzeni ===== */
(function () {
    // son cevapsız aramasının yanında (5) yazacak kişi
    const NJ = "kim namjoon", NJ_SAYI = 5;
    // "açılmış" gibi görünecek (kırmızı olmayan) 2 cevapsız arama: ad + zaman (DEĞİŞTİREBİLİRSİN)
    const ACILMIS = [{ ad: "🤍", zaman: "13:08" }, { ad: "ANNEM", zaman: "Pazartesi" }];

    const _telCiz = telCiz;
    telCiz = function () {
        const d = document.createElement("div");
        d.innerHTML = _telCiz();
        const satirlar = d.querySelectorAll(".t-satir");
        const l = ARAMA.filter(function (c) { return telFiltre === "tum" || c.tur === "cevapsiz"; });
        let njTamam = false;
        if (telSekme === "aramalar" && satirlar.length === l.length) {
            l.forEach(function (c, i) {
                const ad = satirlar[i].querySelector(".t-ad");
                if (!ad) return;
                if (c.tur === "cevapsiz" && c.ad === NJ && !njTamam) { ad.textContent = c.ad + " (" + NJ_SAYI + ")"; njTamam = true; }
                if (c.tur === "cevapsiz" && ACILMIS.some(function (a) { return a.ad === c.ad && a.zaman === c.zaman; })) ad.classList.remove("kirmizi");
            });
        }
        return d.innerHTML;
    };
})();


/* ===== Kilit ekranı: sadece yukarı kaydırarak açılsın (dokununca açılmasın) ===== */
document.querySelector(".yukari").style.pointerEvents = "none";



/* ===== SAAT: Alarm ekranı (iPhone gibi) ===== */
(function () {
    // alarmlar: saat, başlık ("" = başlıksız, "Alarm" yazar), açık mı  (DÜZENLEYEBİLİRSİN)
    const ALARMLAR = [
        { s: "08:32", b: "sevgilimi işe bırakcam", ac: true },
        { s: "12:45", b: "", ac: true },
        { s: "12:50", b: "", ac: true },
        { s: "13:00", b: "", ac: true }
    ];

    const st = document.createElement("style");
    st.textContent = `
#slx{position:absolute;left:0;top:0;width:100%;height:100%;z-index:40;background:#000;color:#fff;overflow:hidden;display:none}
#slx.ac{display:block}
#slx .ust{position:absolute;left:0;right:0;top:62px;height:34px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;color:#ff9f0a;font-size:17px}
#slx .ust b{font-size:34px;font-weight:300;line-height:30px}
#slx .bas{position:absolute;left:20px;top:104px;font-size:34px;font-weight:700;line-height:40px}
#slx .lis{position:absolute;left:0;right:0;top:158px;bottom:83px;overflow-y:auto}
#slx .bol{padding:6px 20px 8px;font-size:22px;font-weight:700}
#slx .sat{display:flex;align-items:center;margin-left:20px;padding:10px 20px 10px 0;border-bottom:.5px solid #2c2c2e}
#slx .sol{flex:1;min-width:0}
#slx .sa{font-size:52px;font-weight:300;line-height:56px;letter-spacing:-.5px}
#slx .et{font-size:15px;color:#fff;margin-top:-2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#slx .sat.kp .sa,#slx .sat.kp .et{color:#8e8e93}
#slx .tg{flex:none;position:relative;width:51px;height:31px;border-radius:16px;background:#39393d;transition:background .2s;cursor:pointer}
#slx .tg::after{content:"";position:absolute;left:2px;top:2px;width:27px;height:27px;border-radius:50%;background:#fff;box-shadow:0 2px 4px rgba(0,0,0,.3);transition:transform .2s}
#slx .sat:not(.kp) .tg{background:#34c759}
#slx .sat:not(.kp) .tg::after{transform:translateX(20px)}
#slx .bar{position:absolute;left:0;right:0;bottom:0;height:83px;background:rgba(28,28,30,.96);border-top:.5px solid #38383a;display:flex;justify-content:space-around;padding-top:8px}
#slx .bar div{width:25%;display:flex;flex-direction:column;align-items:center;gap:3px;font-size:10px;color:#8e8e93}
#slx .bar div.ak{color:#ff9f0a}
#slx .bar svg{width:27px;height:27px}
`;
    document.head.appendChild(st);

    const faz = document.getElementById("phone");
    const el = document.createElement("div");
    el.id = "slx";
    const G = function (y) { return "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.7' stroke-linecap='round' stroke-linejoin='round'>" + y + "</svg>"; };
    const SEK = [
        ["Dünya Saati", G("<circle cx='12' cy='12' r='9'/><path d='M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18'/>"), false],
        ["Alarm", G("<circle cx='12' cy='13' r='8'/><path d='M12 8.5V13l3 2M3 6.5L6.5 3M21 6.5L17.5 3'/>"), true],
        ["Kronometre", G("<circle cx='12' cy='13.5' r='7.5'/><path d='M12 9.5v4l2.5 1.5M9.5 3h5M12 3v3'/>"), false],
        ["Zamanlayıcı", G("<circle cx='12' cy='12' r='8.5'/><path d='M12 7v5l-3.5 3'/>"), false]
    ];

    function sirala() { return ALARMLAR.slice().sort(function (a, b) { return a.s < b.s ? -1 : 1; }); }
    function ciz() {
        el.innerHTML = "<div class='ust'><span>Düzenle</span><b>+</b></div><div class='bas'>Alarm</div><div class='lis'><div class='bol'>Diğer</div>" +
            sirala().map(function (a) {
                const i = ALARMLAR.indexOf(a);
                return "<div class='sat" + (a.ac ? "" : " kp") + "'><div class='sol'><div class='sa'>" + a.s + "</div><div class='et'>" + (a.b ? kacis(a.b) : "Alarm") + "</div></div><div class='tg' data-al='" + i + "'></div></div>";
            }).join("") + "</div><div class='bar'>" +
            SEK.map(function (s) { return "<div class='" + (s[2] ? "ak" : "") + "'>" + s[1] + s[0] + "</div>"; }).join("") + "</div>";
    }
    faz.appendChild(el);
    ciz();

    let acik = false, bas = null;
    function ac() { acik = true; ciz(); el.classList.add("ac"); }
    function kapat() { acik = false; el.classList.remove("ac"); }

    el.addEventListener("click", function (e) {
        const t = e.target.closest("[data-al]");
        if (!t) return;
        const a = ALARMLAR[+t.getAttribute("data-al")];
        a.ac = !a.ac;
        t.parentNode.classList.toggle("kp", !a.ac);
    });
    document.querySelector(".cizgi").addEventListener("click", function (e) { if (acik) { e.stopImmediatePropagation(); kapat(); } }, true);
    el.addEventListener("pointerdown", function (e) { bas = e.clientY; });
    el.addEventListener("pointerup", function (e) {
        const r = faz.getBoundingClientRect();
        if (bas !== null && bas - e.clientY > 60 && bas > r.bottom - r.height * 0.14) kapat();
        bas = null;
    });
    window.addEventListener("popstate", function () { if (acik) kapat(); });

    const _uygAc = uygAc;
    uygAc = function (k) {
        if (k === "saat") { ac(); return; }
        return _uygAc(k);
    };
})();


/* ===== Alttaki çizgi her uygulamanın üstünde kalsın ===== */
(function () {
    const z = document.createElement("style");
    z.textContent = "#phone .cizgi{z-index:80 !important}";
    document.head.appendChild(z);
})();



/* ===== TİKTOK: yukarı kaydırmalı video akışı (beğeni + yorum) ===== */
(function () {
    /* ---------- BURAYI DÜZENLE ---------- */
    // src: video dosyası | k: kullanıcı adı | a: açıklama | ses: müzik yazısı
    // b: beğeni | c: yorum sayısı (yazılan yorumlar buna eklenir) | p: kaydet | s: paylaş
    // y: baştan yazılı yorumlar [{ k: kullanıcı, t: yazı, l: beğeni, z: zaman }]  (boş bırakırsan yorum yok; yazılanlar sayfa yenilenince silinir)
    const BEN = "thv";
    const VIDEOLAR = [
        { src: "tiktok/video1.mp4", k: "jdfghldfjgldkf", a: "", ses: "orijinal ses - jdfghldfjgldkf", b: 14200, c: 0, p: 842, s: 391, y: [] },
        { src: "tiktok/video2.mp4", k: "qwkzmxpvnrtl", a: "", ses: "orijinal ses - qwkzmxpvnrtl", b: 18700, c: 0, p: 1130, s: 527, y: [] },
        { src: "tiktok/video3.mp4", k: "hsdkfjh_sdkjf9", a: "", ses: "orijinal ses - hsdkfjh_sdkjf9", b: 11600, c: 0, p: 688, s: 274, y: [] }
    ];

    const st = document.createElement("style");
    st.textContent = `
#ttx,#ttx *{font-family:"Roboto",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif !important}
#ttx{position:absolute;left:0;top:0;width:100%;height:100%;z-index:40;background:#000;color:#fff;overflow:hidden;display:none}
#ttx.ac{display:block}
#ttx .fd{position:absolute;left:0;top:0;right:0;bottom:83px;overflow-y:auto;scroll-snap-type:y mandatory;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;scrollbar-width:none}
#ttx .fd::-webkit-scrollbar{display:none}
#ttx .sl{position:relative;width:100%;height:100%;scroll-snap-align:start;scroll-snap-stop:always;background:#000;overflow:hidden;contain:layout paint}
#ttx video{position:absolute;left:0;top:0;width:100%;height:100%;object-fit:cover;background:#000}
#ttx .gl{position:absolute;left:0;right:0;bottom:0;height:230px;background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.55));pointer-events:none}
#ttx .dur{position:absolute;left:50%;top:50%;width:80px;height:80px;margin:-40px 0 0 -40px;opacity:0;pointer-events:none;transition:opacity .12s}
#ttx .dur.g{opacity:.8}
#ttx .ust{position:absolute;left:0;right:0;top:62px;display:flex;justify-content:center;gap:20px;font-size:17px;font-weight:600;color:rgba(255,255,255,.65);text-shadow:0 1px 3px rgba(0,0,0,.5);pointer-events:none}
#ttx .ust b{color:#fff;border-bottom:2px solid #fff;padding-bottom:3px}
#ttx .ara{position:absolute;right:16px;top:62px;pointer-events:none}
#ttx .yan{position:absolute;right:10px;bottom:30px;width:56px;display:flex;flex-direction:column;align-items:center;gap:15px}
#ttx .yan button{display:flex;flex-direction:column;align-items:center;gap:3px;border:0;background:none;color:#fff;font-size:12px;font-weight:600;padding:0;text-shadow:0 1px 3px rgba(0,0,0,.5)}
#ttx .yan svg{width:36px;height:36px;filter:drop-shadow(0 1px 2px rgba(0,0,0,.4))}
#ttx .pf{position:relative;width:48px;height:48px;margin-bottom:6px}
#ttx .pf i{display:flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:50%;border:2px solid #fff;background:#3a3a3c;font-style:normal;font-size:20px;font-weight:700}
#ttx .pf u{position:absolute;left:14px;bottom:-9px;width:20px;height:20px;border-radius:50%;background:#fe2c55;text-decoration:none;display:flex;align-items:center;justify-content:center;font-size:16px;line-height:1}
#ttx .hrt svg{transition:transform .15s}
#ttx .hrt.on svg{fill:#fe2c55;stroke:#fe2c55;transform:scale(1.08)}
#ttx .hrt svg{fill:#fff;stroke:#fff}
#ttx .bil{position:absolute;left:12px;right:84px;bottom:22px;font-size:15px;line-height:1.35;text-shadow:0 1px 3px rgba(0,0,0,.6)}
#ttx .bil b{display:block;font-size:17px;margin-bottom:4px}
#ttx .bil .ms{margin-top:8px;font-size:14px}
#ttx .pr{position:absolute;left:0;bottom:0;height:2px;width:100%;background:#fff;transform:scaleX(0);transform-origin:left}
#ttx .pr0{position:absolute;left:0;bottom:0;height:2px;width:100%;background:rgba(255,255,255,.25)}
#ttx .tb{position:absolute;left:0;right:0;bottom:0;height:83px;background:#000;display:flex;justify-content:space-around;padding-top:8px}
#ttx .tb div{width:20%;display:flex;flex-direction:column;align-items:center;gap:3px;font-size:10px;font-weight:500;color:rgba(255,255,255,.6)}
#ttx .tb div.ak{color:#fff}
#ttx .tb svg{width:26px;height:26px}
#ttx .tb .ar{width:46px;height:30px;border-radius:9px;background:#fff;position:relative;box-shadow:-3px 0 0 #25f4ee,3px 0 0 #fe2c55;display:flex;align-items:center;justify-content:center;color:#000;font-size:26px;font-weight:300;line-height:1;margin-top:2px}
#ttx .pat{position:absolute;left:0;right:0;top:0;bottom:83px;background:rgba(0,0,0,.4);display:none;z-index:3}
#ttx .pat.ac{display:block}
#ttx .yp{position:absolute;left:0;right:0;bottom:0;height:62%;background:#fff;color:#161823;border-radius:14px 14px 0 0;transform:translateY(105%);transition:transform .22s ease-out;z-index:4;display:flex;flex-direction:column}
#ttx .yp.ac{transform:translateY(0);bottom:83px}
#ttx .yb{flex:none;height:46px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:600;position:relative}
#ttx .yb button{position:absolute;right:14px;top:12px;border:0;background:none;padding:0;color:#161823}
#ttx .yl{flex:1;overflow-y:auto;padding:4px 16px 8px}
#ttx .yr{display:flex;gap:12px;padding:10px 0}
#ttx .yr .av{flex:none;width:36px;height:36px;border-radius:50%;background:#d1d1d6;color:#fff;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:700}
#ttx .yr .g{flex:1;min-width:0;font-size:14px;line-height:1.35;word-wrap:break-word}
#ttx .yr .g small{display:block;font-size:12px;color:#8a8b91;font-weight:600}
#ttx .yr .z{font-size:12px;color:#8a8b91;margin-top:3px}
#ttx .yr .h{flex:none;display:flex;flex-direction:column;align-items:center;gap:1px;font-size:11px;color:#8a8b91;padding-top:6px}
#ttx .yr .h svg{width:18px;height:18px;fill:none;stroke:#8a8b91}
#ttx .yr .h.on svg{fill:#fe2c55;stroke:#fe2c55}
#ttx .yr .h.on{color:#fe2c55}
#ttx .yg{flex:none;display:flex;align-items:center;gap:10px;padding:8px 14px 12px;border-top:.5px solid #e3e3e4}
#ttx .yg input{flex:1;min-width:0;height:38px;border-radius:19px;border:0;background:#f1f1f2;padding:0 14px;font-size:15px;font-family:inherit;color:#161823;outline:0}
#ttx .yg span{font-size:15px;font-weight:700;color:#c8c8cb}
#ttx .yg.dolu span{color:#fe2c55}
`;
    document.head.appendChild(st);

    const faz = document.getElementById("phone");
    const el = document.createElement("div");
    el.id = "ttx";
    faz.appendChild(el);

    const G = function (y, ek) { return "<svg viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'" + (ek || "") + ">" + y + "</svg>"; };
    const KALP = "<path d='M12 20.8s-8.4-5-9.6-10.3C1.6 7 3.8 4.2 6.9 4.2c1.9 0 3.5 1 5.1 2.9 1.6-1.9 3.2-2.9 5.1-2.9 3.1 0 5.3 2.8 4.5 6.3-1.2 5.3-9.6 10.3-9.6 10.3z'/>";
    const IC = {
        yorum: G("<path d='M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.1A8.5 8.5 0 1 1 21 12z'/><path d='M8 11.5h.01M12 11.5h.01M16 11.5h.01' stroke-width='2.6'/>"),
        kayit: G("<path d='M6 3.5h12v17l-6-4.5-6 4.5z'/>"),
        paylas: G("<path d='M21 4L3 11l7 2.5L12.5 21z'/><path d='M10 13.5L21 4'/>"),
        ara: G("<circle cx='11' cy='11' r='7'/><path d='M20 20l-4-4'/>"),
        oyna: "<svg viewBox='0 0 24 24' fill='#fff'><path d='M7 4l13 8-13 8z'/></svg>",
        ev: G("<path d='M3.5 11l8.5-7 8.5 7v9h-5.5v-6h-6v6H3.5z'/>"),
        kisi: G("<circle cx='9' cy='8' r='3.2'/><circle cx='17' cy='9' r='2.6'/><path d='M3 19a6 6 0 0 1 12 0M15 15.2a5 5 0 0 1 6 4.2'/>"),
        kutu: G("<path d='M4 5h16v11H9l-5 4z'/>"),
        prof: G("<circle cx='12' cy='8' r='3.8'/><path d='M4.5 20a7.5 7.5 0 0 1 15 0'/>")
    };
    const KC = "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round'>" + KALP + "</svg>";

    function fmt(n) {
        if (n >= 1e6) return (n / 1e6).toFixed(1).replace(".", ",").replace(",0", "") + "M";
        if (n >= 1e3) return (n / 1e3).toFixed(1).replace(".", ",").replace(",0", "") + "B";
        return String(n);
    }
    function yc(v) { return v.c + v.y.length; }
    function ys(v) { return v.b + (v.begendi ? 1 : 0); }

    el.innerHTML = "<div class='ust'><span>Takip Edilenler</span><b>Sana Özel</b></div><div class='ara'>" + IC.ara + "</div>" +
        "<div class='fd'>" + VIDEOLAR.map(function (v, i) {
            return "<div class='sl' data-i='" + i + "'><video src='" + v.src + "' loop playsinline webkit-playsinline preload='auto' disablepictureinpicture></video><div class='gl'></div>" +
                "<div class='dur'>" + IC.oyna + "</div>" +
                "<div class='yan'><div class='pf'><i>" + kacis(v.k[0].toUpperCase()) + "</i><u>+</u></div>" +
                "<button class='hrt' data-tt='kalp:" + i + "'>" + IC.kayit.replace("<path d='M6 3.5h12v17l-6-4.5-6 4.5z'/>", KALP) + "<span>" + fmt(ys(v)) + "</span></button>" +
                "<button data-tt='yorum:" + i + "'>" + IC.yorum + "<span class='ycs'>" + fmt(yc(v)) + "</span></button>" +
                "<button>" + IC.kayit + "<span>" + fmt(v.p) + "</span></button>" +
                "<button>" + IC.paylas + "<span>" + fmt(v.s) + "</span></button></div>" +
                "<div class='bil'><b>@" + kacis(v.k) + "</b>" + kacis(v.a) + "<div class='ms'>♫ " + kacis(v.ses) + "</div></div>" +
                "<div class='pr0'></div><div class='pr'></div></div>";
        }).join("") + "</div>" +
        "<div class='pat' data-tt='kapat'></div>" +
        "<div class='yp'><div class='yb'><span class='yn'></span><button data-tt='kapat'><svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round'><path d='M6 6l12 12M18 6L6 18'/></svg></button></div>" +
        "<div class='yl'></div><div class='yg'><input type='text' placeholder='Yorum ekle...' autocomplete='off' enterkeyhint='send'><span data-tt='gonder'>Gönder</span></div></div>" +
        "<div class='tb'><div class='ak'>" + IC.ev + "Ana Sayfa</div><div>" + IC.kisi + "Arkadaşlar</div><div><span class='ar'>+</span></div><div>" + IC.kutu + "Gelen kutusu</div><div>" + IC.prof + "Profil</div></div>";

    const fd = el.querySelector(".fd"), yp = el.querySelector(".yp"), pat = el.querySelector(".pat"), yl = el.querySelector(".yl"), yn = el.querySelector(".yn");
    const yg = el.querySelector(".yg"), inp = yg.querySelector("input");
    const slides = [].slice.call(el.querySelectorAll(".sl"));
    const vids = slides.map(function (s) { return s.querySelector("video"); });
    const bars = slides.map(function (s) { return s.querySelector(".pr"); });
    let acik = false, aktif = 0, yv = 0, sesBekle = false, sonTik = 0, oncePause = false, bas = null, raf = 0;

    function oynat(i) {
        const v = vids[i];
        v.muted = false;
        const p = v.play();
        if (p && p.catch) p.catch(function () { v.muted = true; sesBekle = true; v.play().catch(function () { }); });
    }
    function etkinle(i) {
        aktif = i;
        vids.forEach(function (v, j) { if (j !== i) { v.pause(); } });
        vids[i].currentTime = 0;
        oynat(i);
    }
    function dongu() {
        const v = vids[aktif];
        if (v && v.duration) bars[aktif].style.transform = "scaleX(" + (v.currentTime / v.duration) + ")";
        raf = acik ? requestAnimationFrame(dongu) : 0;
    }
    function hesapla() { return Math.max(0, Math.min(vids.length - 1, Math.round(fd.scrollTop / fd.clientHeight))); }
    let zt = 0;
    fd.addEventListener("scroll", function () {
        clearTimeout(zt);
        zt = setTimeout(function () { const i = hesapla(); if (acik && i !== aktif) etkinle(i); }, 90);
    }, { passive: true });

    function ac() {
        acik = true; el.classList.add("ac");
        const i = hesapla(); etkinle(i);
        if (!raf) raf = requestAnimationFrame(dongu);
    }
    function kapat() {
        acik = false; el.classList.remove("ac");
        vids.forEach(function (v) { v.pause(); });
        yorumKapat();
    }

    function begen(i, deger) {
        const v = VIDEOLAR[i];
        v.begendi = deger;
        const b = slides[i].querySelector(".hrt");
        b.classList.toggle("on", deger);
        b.querySelector("span").textContent = fmt(ys(v));
    }
    function yorumListe() {
        const v = VIDEOLAR[yv];
        yn.textContent = fmt(yc(v)) + " yorum";
        yl.innerHTML = v.y.map(function (c, ci) {
            return "<div class='yr'><span class='av'>" + kacis(c.k[0].toUpperCase()) + "</span><div class='g'><small>" + kacis(c.k) + "</small>" + kacis(c.t) + "<div class='z'>" + kacis(c.z) + "</div></div>" +
                "<div class='h" + (c.begendi ? " on" : "") + "' data-tt='ckalp:" + ci + "'>" + KC + "<span>" + ((c.l || 0) + (c.begendi ? 1 : 0)) + "</span></div></div>";
        }).join("") || "<div style='text-align:center;color:#8a8b91;padding:40px 0;font-size:14px'>Henüz yorum yok. İlk yorumu sen yap!</div>";
    }
    function yorumAc(i) {
        yv = i; yorumListe();
        pat.classList.add("ac"); yp.classList.add("ac");
    }
    function yorumKapat() { pat.classList.remove("ac"); yp.classList.remove("ac"); inp.blur(); }
    function yorumGonder() {
        const t = inp.value.trim();
        if (!t) return;
        const v = VIDEOLAR[yv];
        v.y.unshift({ k: BEN, t: t, l: 0, z: "Şimdi" });
        inp.value = ""; yg.classList.remove("dolu");
        yorumListe(); yl.scrollTop = 0;
        slides[yv].querySelector(".ycs").textContent = fmt(yc(v));
    }
    inp.addEventListener("input", function () { yg.classList.toggle("dolu", inp.value.trim().length > 0); });
    inp.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); yorumGonder(); } });

    el.addEventListener("click", function (e) {
        if (sesBekle) { sesBekle = false; vids[aktif].muted = false; }
        const t = e.target.closest("[data-tt]");
        if (t) {
            const p = t.getAttribute("data-tt").split(":");
            if (p[0] === "kalp") begen(+p[1], !VIDEOLAR[+p[1]].begendi);
            else if (p[0] === "yorum") yorumAc(+p[1]);
            else if (p[0] === "kapat") yorumKapat();
            else if (p[0] === "gonder") yorumGonder();
            else if (p[0] === "ckalp") {
                const c = VIDEOLAR[yv].y[+p[1]];
                c.begendi = !c.begendi;
                t.classList.toggle("on", c.begendi);
                t.querySelector("span").textContent = (c.l || 0) + (c.begendi ? 1 : 0);
            }
            return;
        }
        const sl = e.target.closest(".sl");
        if (!sl || e.target.closest(".yan")) return;
        const i = +sl.getAttribute("data-i"), v = vids[i], now = Date.now();
        const gos = sl.querySelector(".dur");
        if (now - sonTik < 300) {
            // çift dokunma: beğen (durdur/oynat geri alınır)
            if (oncePause) { v.pause(); gos.classList.add("g"); } else { oynat(i); gos.classList.remove("g"); }
            if (!VIDEOLAR[i].begendi) begen(i, true);
            sonTik = 0; return;
        }
        sonTik = now; oncePause = v.paused;
        if (v.paused) { oynat(i); gos.classList.remove("g"); } else { v.pause(); gos.classList.add("g"); }
    });

    // çıkış: alttan yukarı kaydır (çizgiye basmakla çıkmaz)
    const faz2 = document.getElementById("phone");
    let czY = null, czSon = 0;
    el.querySelector(".tb").style.touchAction = "none";
    document.querySelector(".cizgi").style.touchAction = "none";
    document.querySelector(".cizgi").addEventListener("click", function (e) { if (acik) { e.stopImmediatePropagation(); e.preventDefault(); } }, true);
    window.addEventListener("pointerdown", function (e) {
        if (!acik) return;
        const r = faz2.getBoundingClientRect();
        czY = e.clientY > r.bottom - r.height * 0.16 ? e.clientY : null;
        czSon = e.clientY;
    }, true);
    window.addEventListener("pointermove", function (e) { if (czY !== null) czSon = e.clientY; }, true);
    function czBitir(e) {
        if (acik && czY !== null && czY - (e.clientY || czSon) > 35) kapat();
        czY = null;
    }
    window.addEventListener("pointerup", czBitir, true);
    window.addEventListener("pointercancel", czBitir, true);
    window.addEventListener("popstate", function () { if (acik) kapat(); });

    const _uygAc = uygAc;
    uygAc = function (k) {
        if (k === "tiktok") { ac(); return; }
        return _uygAc(k);
    };
})();