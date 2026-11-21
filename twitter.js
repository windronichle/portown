/* ===== TWITTER: @taemirci hesabı, tweetler, görünüm ===== */
(function () {
    /* ---------- BURAYI DÜZENLE ---------- */
    const KLASOR = "twitter/";          // resimlerin klasörü: pp, header, foto1, foto2, foto3
    const AD = "tae";                   // görünen ad
    const ETIKET = "@taemirci";         // kullanıcı adı
    const BIO = "affedersiniz ni daha oynatır mısınız nolur gözlüğümü takmamışım";   // biyografi
    const TAKIP = 88, TAKIPCI = 263;    // takip edilen / takipçi sayısı
    const KATILIM = "Mart 2021 tarihinde katıldı";

    // m: tweet yazısı | sa: kaç saat önce atıldı (ondalık olabilir: 26.4 = 1 gün 2 saat 24 dk önce)
    // f: resim dosya adı (KLASOR içinde, uzantısız) | b: beğeni | rt: yeniden gönderi | y: yanıt sayısı
    // liste yukarıdan aşağıya: en yeni en üstte, saatler artarak gitmeli
    const TWEETLER_LISTE = [
        { m: "keşke yapışsa bana yapışık olsak bir bütün adeta", sa: 3.2, f: "foto1" },
        { m: "sevgilim tatlılık yapıp insan içinde telefona doğru sırıttırıyo diye kaza yapıp gelen müşteriye odaklanamadık adam bacağını tutup yürürken biz😁", sa: 8.7 },
        { m: "sevgilim isterse 7/24 yazarım her gün hazırlanır buluşurum tüm aboneliklerimin şifresini veririm fotolarını telefon kabıma cüzdanıma alnıma koyarım tüm pplerimi onunla yaparım ismini kolye takarım bioma kilit koyarım bize görünen sevdalı derler yok bi de görünmeseydik", sa: 26.4 },
        { m: "kendime daily reminder olaraktan", sa: 30.1, f: "foto3" },
        { m: "kaptan ben star parçam olarak tatlı dilimi kullanıyorum sevgilim memnun", sa: 50.6 },
        { m: "barıştık", sa: 52.3 },
        { m: "aegyolu konuşursa barışırız sanıyo", sa: 56.8 },
        { m: "jeongguk arabada ayrılık şarkısına eşlik etti diye bi buçuk saattir omuzlarım düşük oturuyorum", sa: 74.5 },
        { m: "aile babası olmakk... kendi yemeğimden önce oğlumun mamasını aldım o yesin ben doymuş kadar olurum", sa: 77.2 },
        { m: "2021 tesla müzesi ziyaretçi defterine herkes hislerini paylaşmıştı ben bro i got ur tattoo yazıp imzamı çakmıştım geçiciydi ama olsun", sa: 98.9 },
        { m: "nick wilde judye benim sürüm sensin dediğinde ben ordaydım ruhen fiilen ve feelen", sa: 108.4 },
        { m: "arabanın balatalarının düzenli olarak ağzına sıçan müşteriye ağzına sıçıyon dememek için bu arıza senin araçta kronik ya yalanı sıkıyoz mecbur", sa: 122.3 },
        { m: "mahallede yolu daraltan iki arabayı kaldırıp ittik diye habere çıkmışız yalnız benim sevgilim var", sa: 146.7 },
        { m: "üçlü pizza menüsü söyledim tek başıma yicem sevgilim yanımda değil diye lokmamda boğulmayı umarak yicem", sa: 150.4 },
        { m: "SEVGİLİM🤍", sa: 170.1 },
        { m: "kalabalık aile ortamında manitaya bakıp göz kırpmak gibi ufak tefek romantiklikler", sa: 172.8 },
        { m: "hayatta kimseye öyle çok büyük bi iyiliğim de dokunmadı ki bunu hak edicek naptık", sa: 194.5, f: "foto2" },
        { m: "mühendislik biter zaten dil de var iyi bi şirkete girip 5-6 sene sürünüp iyi yerlere gelirim diyodum mühendislik bitti oto tamirci oldum", sa: 200.2 },
        { m: "date dönüşü sahil yürüyüşünden bi de köfteciye akanzi", sa: 215.6 }
    ];

    /* ---------- veriyi yerleştir ---------- */
    const AYLAR = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];
    // listedeki kısa zaman: 1 saatten az "12dk", 1 günden az "5sa", daha eskisi "18 Kas"
    function zamanYaz(dk) {
        if (dk < 60) return Math.max(1, Math.round(dk)) + "dk";
        if (dk < 1440) return Math.floor(dk / 60) + "sa";
        const d = new Date(Date.now() - dk * 60000);
        return d.getDate() + " " + AYLAR[d.getMonth()];
    }
    // tweete basınca görünen tam tarih
    function tarihYaz(dk) {
        const d = new Date(Date.now() - dk * 60000);
        const s = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
        return s + " · " + d.getDate() + " " + AYLAR[d.getMonth()] + " " + d.getFullYear();
    }
    const U = TW_KULLANICI.ben;
    U.ad = AD; U.etiket = ETIKET; U.bio = BIO; U.takip = TAKIP; U.takipci = TAKIPCI; U.katilim = KATILIM;
    U.avatar = KLASOR + "pp.jpeg"; U.banner = KLASOR + "header.jpeg";

    TWEETLER.length = 0;
    TWEETLER_LISTE.forEach(function (t, i) {
        const dk = t.sa * 60;
        TWEETLER.push({
            id: i + 1, k: "ben", zaman: zamanYaz(dk), tarih: tarihYaz(dk), metin: t.m,
            resim: t.f ? KLASOR + t.f + ".jpeg" : "", f: t.f || "", r: 0,
            rt: t.rt || 0, begeni: t.b || 0, yorum: t.y || 0, goruntulenme: "", yorumlar: []
        });
    });

    // dosya uzantısını kendisi bulur (jpeg, jpg, png ...)
    function bul(baz, ok) {
        ["jpeg", "jpg", "png", "JPG", "JPEG", "PNG", "webp"].reduceRight(function (sonra, e) {
            return function () { const im = new Image(); im.onload = function () { ok(baz + "." + e, im); }; im.onerror = sonra; im.src = baz + "." + e; };
        }, function () { })();
    }
    bul(KLASOR + "pp", function (y) { U.avatar = y; });
    bul(KLASOR + "header", function (y) { U.banner = y; });
    TWEETLER.forEach(function (t) {
        if (!t.f) return;
        bul(KLASOR + t.f, function (y, im) {
            t.resim = y;
            t.r = Math.max(0.8, Math.min(1.91, im.naturalWidth / im.naturalHeight));
        });
    });

    /* ---------- görünüm (gerçek Twitter gibi) ---------- */
    const st = document.createElement("style");
    st.textContent = `
#phone .tw, #phone .tw *{font-family:"Roboto",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif !important}
#phone .tw .tw-ust{padding:54px 18px 10px}
#phone .tw .twx-ik{display:flex;align-items:center;gap:26px;color:#e7e9ea}
#phone .tw .tw-ust button{color:#e7e9ea;display:flex;align-items:center}
#phone .tw .tw-sat{gap:9px;padding:11px 28px 10px 11px;border-bottom:.5px solid #2f3336}
#phone .tw .tw-sat .tw-av{width:52px;height:52px}
#phone .tw .tw-ad{gap:5px;align-items:baseline;flex-wrap:nowrap}
#phone .tw .tw-ad b{font-size:15.5px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:150px}
#phone .tw .tw-ad span{font-size:15px;color:#71767b;white-space:nowrap}
#phone .tw .tw-m{font-size:15.5px;line-height:1.28;margin-top:1px;color:#e7e9ea}
#phone .tw .tw-r{aspect-ratio:1.62;border-radius:14px;margin-top:9px;border:.5px solid #2f3336;background-size:cover !important;background-position:center !important}
#phone .tw .tw-ey{justify-content:space-between;margin-top:11px;padding-right:0;color:#71767b;font-size:13px}
#phone .tw .tw-ey span{min-width:0;gap:5px}
#phone .tw .tw-ey i{font-style:normal}
#phone .tw .tw-ey svg{width:18px;height:18px;stroke-width:1.7}
#phone .tw .tw-alt .x-sek.ak svg{stroke-width:2.6}
#phone .tw .tw-fab{right:16px;bottom:104px;width:56px;height:56px}
`;
    document.head.appendChild(st);

    const HAM = "<path d='M3 6h18M3 12h18M3 18h18'/>";
    const TAKV = "<rect x='4' y='4.5' width='16' height='16.5' rx='2.5'/><path d='M4 10h16M9 2.5v3.5M15 2.5v3.5'/>";
    const AYAR = "<path d='M3 7h8M16 7h5M3 17h5M13 17h8'/><circle cx='13.5' cy='7' r='2.5'/><circle cx='10.5' cy='17' r='2.5'/>";

    /* alt satır: yorum / yeniden gönder / beğeni / görüntülenme / paylaş (sayı 0 ise yazılmaz) */
    twEylem = function (t) {
        function n(v) { return v ? "<i>" + v + "</i>" : ""; }
        return "<div class='tw-ey'><span>" + svgIc(P.yorum, 18) + n(twYorumSayi(t)) + "</span><span>" + svgIc(P.rt, 18) + n(t.rt) + "</span><span>" + svgIc(P.kalp, 18) + n(t.begeni) +
            "</span><span>" + svgIc(P.gor, 18) + n(t.goruntulenme) + "</span><span>" + svgIc(P.paylas, 18) + "</span></div>";
    };

    // resmin kendi oranı
    const _satir = twSatir;
    twSatir = function (t) {
        let h = _satir(t);
        if (t.resim && t.r) h = h.replace("<div class='tw-r' style=\"", "<div class='tw-r' style=\"aspect-ratio:" + t.r + ";");
        return h;
    };
    const _detay = twDetay;
    twDetay = function (id) {
        const t = TWEETLER.find(function (x) { return x.id === id; });
        let h = _detay(id);
        if (t && t.resim && t.r) h = h.replace("<div class='tw-r' style=\"", "<div class='tw-r' style=\"aspect-ratio:" + t.r + ";");
        return h;
    };

    /* ana sayfa: üst çubuk + mavi + butonu */
    const _ciz = twCiz;
    twCiz = function () {
        let h = _ciz();
        h = h.replace(/<div class='tw-ust'><button data-x='tw:drawer'>[\s\S]*?<span style='width:34px'><\/span><\/div><div class='tw-sek'><button class='ak'>Sana özel<\/button><button>Takip ediliyor<\/button><\/div>/,
            "<div class='tw-ust'><button data-x='tw:drawer'>" + svgIc(HAM, 28, 2.4) + "</button><span class='twx-ik'>" + svgIc(TAKV, 27, 2) + svgIc(AYAR, 27, 2) + "</span></div>");
        h = h.replace(svgIc(P.tur, 26, 2), svgIc(P.arti, 30, 2.4));
        return h;
    };
})();


/* ===== TWITTER: tweetleri favlama (kalbe basınca kırmızı olur, sayı artar) ===== */
(function () {
    const st = document.createElement("style");
    st.textContent = `
#phone .tw .twx-k{cursor:pointer;transition:color .15s}
#phone .tw .twx-k.on{color:#f91880}
#phone .tw .twx-k.on svg{fill:#f91880;stroke:#f91880;animation:twxp .32s}
@keyframes twxp{0%{transform:scale(.7)}50%{transform:scale(1.35)}100%{transform:scale(1)}}
`;
    document.head.appendChild(st);

    // alt satırdaki kalp artık tıklanabilir
    const _ey = twEylem;
    twEylem = function (t) {
        return _ey(t).replace("<span>" + svgIc(P.kalp, 18), "<span class='twx-k" + (t.fav ? " on" : "") + "' data-twk='" + t.id + "'>" + svgIc(P.kalp, 18));
    };

    XAPP.addEventListener("click", function (e) {
        const k = e.target.closest("[data-twk]");
        if (!k || xUyg !== "twitter") return;
        e.stopPropagation();                 // tweet detayını açmasın
        const t = TWEETLER.find(function (x) { return x.id === +k.getAttribute("data-twk"); });
        if (!t) return;
        t.fav = !t.fav;
        t.begeni = Math.max(0, (t.begeni || 0) + (t.fav ? 1 : -1));
        XIC.querySelectorAll("[data-twk='" + t.id + "']").forEach(function (el) {
            el.classList.toggle("on", t.fav);
            const eski = el.querySelector("i");
            if (eski) eski.remove();
            if (t.begeni) el.insertAdjacentHTML("beforeend", "<i>" + t.begeni + "</i>");
        });
        // tweet detay sayfasındaki "Beğeni" sayısı
        XIC.querySelectorAll(".tw-ist span").forEach(function (s) {
            if (/Beğeni/.test(s.textContent)) { const b = s.querySelector("b"); if (b) b.textContent = t.begeni; }
        });
    }, true);
})();


/* ===== TWITTER: tweete yanıt yazma (sayfa yenilenince sıfırlanır) ===== */
(function () {
    const st = document.createElement("style");
    st.textContent = `
#phone .tw .tw-yb input{flex:1;min-width:0;height:38px;border-radius:19px;border:0;background:#16181c;color:#e7e9ea;padding:0 14px;font-size:16px;font-family:inherit;outline:0;caret-color:#1d9bf0}
#phone .tw .tw-yb input::placeholder{color:#71767b}
#phone .tw .tw-yb .twx-gon{font-size:15px;font-weight:700;color:#1d9bf0;opacity:.45;cursor:pointer}
#phone .tw .tw-yb.dolu .twx-gon{opacity:1}
`;
    document.head.appendChild(st);

    // "Yanıtını gönder" çubuğu yazı kutusu olsun
    const _d = twDetay;
    twDetay = function (id) {
        return _d(id).replace(/<div class='tw-yb'>([\s\S]*?)Yanıtını gönder<\/div>/,
            "<div class='tw-yb'>$1<input id='twx-in' type='text' placeholder='Yanıtını gönder' autocomplete='off' autocorrect='off' enterkeyhint='send'><span class='twx-gon'>Yanıtla</span></div>");
    };

    function gonder() {
        const inp = XIC.querySelector("#twx-in"), ust = twYigin[twYigin.length - 1];
        if (!inp || !ust || ust.t !== "tweet") return;
        const metin = inp.value.trim();
        if (!metin) return;
        const t = TWEETLER.find(function (x) { return x.id === ust.id; });
        if (!t) return;
        t.yorumlar = t.yorumlar || [];
        t.yorumlar.push({ k: "ben", zaman: "şimdi", metin: metin });
        t.yorum = (t.yorum !== undefined ? t.yorum : 0) + 1;
        xCiz(0);
        const g = XIC.querySelector(".x-govde");
        if (g) g.scrollTop = g.scrollHeight;
    }

    XAPP.addEventListener("click", function (e) {
        if (xUyg === "twitter" && e.target.closest(".twx-gon")) gonder();
    });
    XAPP.addEventListener("keydown", function (e) {
        if (xUyg === "twitter" && e.target.id === "twx-in" && e.key === "Enter") { e.preventDefault(); gonder(); }
    });
    XAPP.addEventListener("input", function (e) {
        if (xUyg === "twitter" && e.target.id === "twx-in") e.target.parentNode.classList.toggle("dolu", e.target.value.trim().length > 0);
    });
})();