/* ===== INSTAGRAM: profiller, gönderiler, yorumlar, hikâyeler (thv = taehyung) ===== */
(function () {
    /* ---------- BURAYI DÜZENLE ---------- */
    // klasörler: insta/tae, insta/jk, insta/jimin, insta/nj, insta/yoonchae
    const KLASOR = { thv: "insta/tae/", mnijgguk: "insta/jk/", parkjimim: "insta/jimin/", nnnamjoonnn: "insta/nj/", yoonchipchip: "insta/yoonchae/" };
    // profil fotoğrafı: önce insta/<klasör>/pp.* aranır, yoksa whatsapp fotoğrafı kullanılır
    const PP = { thv: "whatsapp/taehyung.jpeg", mnijgguk: "whatsapp/jeongguk.jpeg", parkjimim: "whatsapp/jimin.jpeg", nnnamjoonnn: "whatsapp/namjoon.jpeg", yoonchipchip: "whatsapp/yoonchip.jpeg" };

    const KISI = {
        thv: {
            ad: "taehyung", bio: "", takipci: 1594, takip: 143, istek: 62,
            hikaye: [
                { g: "insta/tae/st1.jpeg", a: "hayatta bir şey bile başaramasaydık biz", z: "3 sa", var: true },
                { g: "insta/tae/st2.jpeg", a: "", z: "1 sa", var: false }
            ],
            ozel: [],
            posts: [
                { a: "⚠️", b: 912, z: "2 saat önce", y: [] },
                { a: "üniden sonra birbirimizi instadan çıkarırız da görüşmeyiz sanıyodum çıkaramadan yakaladılar beni", b: 847, z: "9 saat önce", y: [] },
                {
                    a: "gyme yalnız gitmeme yasağı yedim", b: 968, z: "1 gün önce", y: [
                        {
                            k: "mnijgguk", t: "insanları kandırma", l: 3, z: "20 sa", y: [
                                { k: "thv", m: "mnijgguk", t: "korkutucu gözüküyosun", l: 2, z: "19 sa" },
                                { k: "mnijgguk", m: "thv", t: "😠😠", l: 1, z: "18 sa" }
                            ]
                        }
                    ]
                },
                {
                    a: "aşkım", b: 889, z: "3 gün önce", y: [
                        { k: "yoonchipchip", t: "umarım jeongguk üşümemiştir orda", l: 3, z: "2 g", y: [] },
                        { k: "parkjimim", t: "umarım jeongguk korkmamıştır o yükseklikten", l: 4, z: "2 g", y: [] }
                    ]
                },
                { a: "only our love", b: 931, z: "5 gün önce", y: [] },
                {
                    a: "utanıyo diye sürekli fotosunu atamıyorum ama sevgilimi çok seviyorum", b: 874, z: "12 Kasım", y: [
                        { k: "mnijgguk", t: "utanmıyorum !!!!!!!!!ben de seni seviyorum:(", l: 4, z: "1 hf", y: [] },
                        { k: "yoonchipchip", t: "bi de sürekli atsan napıcaktık aman aman", l: 2, z: "1 hf", y: [] }
                    ]
                },
                {
                    a: "hyejin teyzenin kapısını sadece hyejin teyzenin geçebilceği boyutta yapmışlar bu kadın resmen biri", b: 995, z: "6 Kasım", y: [
                        { k: "parkjimim", t: "bu kadın kim ya", l: 5, z: "2 hf", y: [] },
                        { k: "yoonchipchip", t: "ırak şu falın peşini artık", l: 3, z: "2 hf", y: [] }
                    ]
                },
                {
                    a: "namjoonu hyejin teyzeye götürdüm oğlu da ordaydı namjoon yine de deva bulamadı", b: 826, z: "30 Ekim", y: [
                        { k: "mnijgguk", t: "taehyung çok ayıp", l: 2, z: "3 hf", y: [] },
                        { k: "nnnamjoonnn", t: "bahtımız kör talihimiz kara başımızdan dert eksik olmuyo şükür", l: 6, z: "3 hf", y: [] }
                    ]
                },
                {
                    a: "🤍", b: 903, z: "21 Ekim", y: [
                        { k: "mnijgguk", t: "🧑🏻‍❤️‍🧑🏻", l: 3, z: "4 hf", y: [] }
                    ]
                },
                { a: "⭕️", b: 858, z: "12 Ekim", y: [] },
                {
                    a: "instama post çıkarmaya çalışıyo çok aşığım", b: 944, z: "3 Ekim", y: [
                        {
                            k: "parkjimim", t: "boğazında kalsın", l: 4, z: "7 hf", y: [
                                { k: "thv", m: "parkjimim", t: "dualarımız bu yönde", l: 2, z: "7 hf" }
                            ]
                        }
                    ]
                },
                {
                    a: "photo by sevgilim jeongguk", b: 817, z: "24 Eylül", y: [
                        {
                            k: "mnijgguk", t: "beni güldürcen diye düzgün durmuyosun ki", l: 3, z: "9 hf", y: [
                                { k: "thv", m: "mnijgguk", t: "postun altındaki son iki kelimeyi tekrar oku", l: 5, z: "9 hf" }
                            ]
                        }
                    ]
                },
                { a: "bi aydır istifa etmiyo diye pasta kestik👏🏻👏🏻👏🏻💗💗", b: 979, z: "9 Eylül", y: [] },
                { a: "harbiden zor meslek", b: 861, z: "1 Ağustos", y: [] }
            ]
        },
        mnijgguk: {
            ad: "jeongguk", bio: "", takipci: 2480, takip: 311,
            // güncel hikâyeler (story1.mp4 video, story2.png fotoğraf) sırayla
            hikaye: [
                { g: "insta/jk/story1.mp4", v: true, a: "", z: "3 sa", var: true, sabit: true },
                { g: "insta/jk/story2.png", a: "", z: "1 sa", var: true, sabit: true }
            ],
            // öne çıkarılanlar: baz = dosya adı başı (st1, st2... / stt1, stt2...), n = kaç fotoğraf, yaz = açıklamalar {foto numarası: "yazı"}
            ozel: [
                { ad: "bam 🐾", baz: "st", n: 8, yaz: {} },
                { ad: "🧑🏻‍🔧🩵", baz: "stt", n: 7, yaz: { 1: "en iyi model", 2: "yarısı nakit yarısı karttan", 4: "date night ⭐️🧡", 7: "arkasını kendi göremiyo diye ben de göremiyorum sanıyo" } }
            ],
            posts: []
        },
        parkjimim: {
            ad: "jimin", bio: "", takipci: 987, takip: 402, hikaye: [], ozel: [],
            posts: [
                {
                    a: "☺️", b: 512, z: "20 Kasım", y: [
                        {
                            k: "thv", t: "yakıyosun kardesim benim saclar yeni mi", l: 2, z: "22 sa", y: [
                                { k: "parkjimim", m: "thv", t: "üç aydır böyle taehyung", l: 1, z: "21 sa" },
                                { k: "thv", m: "parkjimim", t: "yakıyosun", l: 1, z: "20 sa" }
                            ]
                        }
                    ]
                },
                { a: "date 💛", b: 431, z: "11 Kasım", y: [] },
                {
                    a: "23 oldum", b: 689, z: "27 Ekim", y: [
                        {
                            k: "thv", t: "sayıları ters yazmışsın", l: 3, z: "3 hf", y: [
                                { k: "parkjimim", m: "thv", t: "sana ne", l: 2, z: "3 hf" }
                            ]
                        },
                        {
                            k: "mnijgguk", t: "İYİ Kİ DOĞDUN DEMİŞ MİYDİM", l: 4, z: "3 hf", y: [
                                { k: "parkjimim", m: "mnijgguk", t: "DEMİŞTİN BONCUĞUM BİTNAEM", l: 3, z: "3 hf" }
                            ]
                        }
                    ]
                },
                {
                    a: "keşke ben kaçırsaydım bunu", b: 377, z: "15 Ekim", y: [
                        { k: "thv", t: "😜😜😜😜", l: 2, z: "5 hf", y: [] }
                    ]
                },
                { a: "🌊", b: 455, z: "2 Ağustos", y: [] }
            ]
        },
        nnnamjoonnn: {
            ad: "namjoon", bio: "", takipci: 1422, takip: 380, hikaye: [], ozel: [],
            posts: [
                {
                    a: "bazen hayatta sizi sadece doğa anlayıp kucaklıyo🍂", b: 624, z: "18 Kasım", y: [
                        { k: "thv", t: "biz seni nasıl kucaklayalım kardesim benim☺️🍂", l: 3, z: "3 g", y: [] }
                    ]
                },
                {
                    a: "hyejin teyzenin kardeşiyle eşi de ordaydı", b: 713, z: "30 Ekim", y: [
                        { k: "thv", t: "kadın sülalesini topladı yine basaramadın namjoon lan", l: 4, z: "3 hf", y: [] }
                    ]
                },
                { a: "bi de bunu deniyoruz", b: 548, z: "20 Ekim", y: [] },
                {
                    a: "lets go", b: 691, z: "8 Ekim", y: [
                        { k: "thv", t: "ha gayret kirvem bi hippilerimiz eksikti", l: 2, z: "6 hf", y: [] }
                    ]
                },
                {
                    a: "🌈", b: 587, z: "10 Eylül", y: [
                        { k: "mnijgguk", t: "🥰🌈", l: 3, z: "10 hf", y: [] }
                    ]
                }
            ]
        },
        yoonchipchip: {
            ad: "yoonchae", bio: "", takipci: 654, takip: 512, hikaye: [], ozel: [],
            posts: [
                {
                    a: "abimi bekliyorum yine", b: 214, z: "17 Kasım", y: [
                        {
                            k: "thv", t: "yan koltukta attın postu", l: 2, z: "4 g", y: [
                                { k: "yoonchipchip", m: "thv", t: "ya bi susssss", l: 1, z: "4 g" }
                            ]
                        }
                    ]
                },
                { a: "", b: 187, z: "29 Ekim", y: [] },
                {
                    a: "🌠", b: 263, z: "14 Ekim", y: [
                        {
                            k: "thv", t: "ne zaman gittin buraya", l: 2, z: "5 hf", y: [
                                { k: "yoonchipchip", m: "thv", t: "senle küsken", l: 2, z: "5 hf" },
                                { k: "thv", m: "yoonchipchip", t: "hatırlamıyorum öyle bi şey", l: 3, z: "5 hf" },
                                { k: "yoonchipchip", m: "thv", t: "yaşlılık", l: 4, z: "5 hf" }
                            ]
                        },
                        {
                            k: "mnijgguk", t: "çokkkkk güzel gözüküyosunn🥺", l: 5, z: "5 hf", y: [
                                { k: "yoonchipchip", m: "mnijgguk", t: "EN SEVDİĞİM İNSAN", l: 4, z: "5 hf" }
                            ]
                        }
                    ]
                }
            ]
        }
    };
    const BEN = "thv";

    /* ---------- dosya adlarını / uzantıları kendisi bulur ---------- */
    const EXT = ["jpeg", "jpg", "png", "JPG", "JPEG", "PNG", "webp"];
    function bul(baz, ok, yok) {
        (function d(k) {
            if (k >= EXT.length) { if (yok) yok(); return; }
            const y = baz + "." + EXT[k], im = new Image();
            im.onload = function () { ok(y, im); };
            im.onerror = function () { d(k + 1); };
            im.src = y;
        })(0);
    }
    Object.keys(KISI).forEach(function (k) {
        bul(KLASOR[k] + "pp", function (y) { PP[k] = y; if (k === BEN) IG_BEN.avatar = y; IG_DM.forEach(function (d) { if (d.kullanici === k) d.avatar = y; }); });
        KISI[k].posts.forEach(function (p, i) {
            p.g = KLASOR[k] + "post" + (i + 1) + ".jpeg";
            bul(KLASOR[k] + "post" + (i + 1), function (y, im) { p.g = y; p.r = im.naturalWidth / im.naturalHeight; });
        });
        KISI[k].hikaye.forEach(function (s, i) {
            if (s.sabit) return;
            if (s.var === undefined) s.var = false;
            bul(KLASOR[k] + "st" + (i + 1), function (y) { s.g = y; s.var = true; }, function () { s.var = false; });
        });
        KISI[k].ozel.forEach(function (o) {
            o.fotolar = [];
            for (let j = 1; j <= o.n; j++) o.fotolar.push({ g: KLASOR[k] + o.baz + j + ".jpeg", a: (o.yaz || {})[j] || "" });
            o.kapak = o.fotolar[0].g;
            o.fotolar.forEach(function (f, j) { bul(KLASOR[k] + o.baz + (j + 1), function (y) { f.g = y; if (j === 0) o.kapak = y; }); });
        });
    });
    IG_BEN.kullanici = BEN; IG_BEN.avatar = PP[BEN];
    IG_DM.forEach(function (d) { if (d.kullanici === "jeongguk") { d.kullanici = "mnijgguk"; d.avatar = PP.mnijgguk; } });

    /* ---------- görünüm ---------- */
    const st = document.createElement("style");
    st.textContent = `
.igx-ust{flex:none;display:flex;align-items:center;justify-content:space-between;padding:54px 16px 8px}
.igx-un{display:flex;align-items:center;gap:6px;font-size:22px;font-weight:700}
.igx-ui{display:flex;gap:22px;align-items:center}
.igx-geri{display:flex;align-items:center;gap:8px;font-size:20px;font-weight:700}
.igx-bas{flex:1;text-align:center;font-size:16px;font-weight:700;line-height:1.15}
.igx-bas small{display:block;font-size:12px;font-weight:400;color:#a8a8a8}
.igx-bilgi{display:flex;align-items:center;gap:20px;padding:8px 16px 6px}
.igx-pp{flex:none;border-radius:50%;cursor:pointer}
.igx-pp.halka{padding:3px;background:linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)}
.igx-pp.halka.gri{background:#363636}
.igx-pp.halka>span{display:block;padding:3px;border-radius:50%;background:#000}
.igx-say{flex:1;display:flex;justify-content:space-around;text-align:center}
.igx-say b{display:block;font-size:17px;font-weight:700}
.igx-say small{font-size:13.5px}
.igx-ad{padding:4px 16px 0;font-size:14px;font-weight:700}
.igx-bio{padding:2px 16px 0;font-size:14px;line-height:1.35;white-space:pre-line}
.igx-btn{display:flex;gap:6px;padding:12px 16px 10px}
.igx-btn button{flex:1;height:34px;border-radius:9px;background:#363636;font-size:14px;font-weight:600;text-align:center;color:#f5f5f5}
.igx-btn button.mavi{background:#0095f6;color:#fff}
.igx-btn button.dar{flex:none;width:38px;display:flex;align-items:center;justify-content:center}
.igx-ozs{display:flex;gap:14px;padding:6px 16px 12px;overflow-x:auto;scrollbar-width:none}
.igx-ozs::-webkit-scrollbar{display:none}
.igx-oz{flex:none;width:68px;text-align:center;font-size:12px;cursor:pointer}
.igx-oz>span{display:flex;align-items:center;justify-content:center;width:64px;height:64px;margin:0 auto 5px;border-radius:50%;border:3.5px solid #363636;background-size:cover;background-position:center;background-color:#1c1c1e;color:#f5f5f5}
.igx-oz small{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.igx-psek{display:flex;border-top:.5px solid #262626}
.igx-psek span{flex:1;display:flex;justify-content:center;padding:11px 0;color:#8e8e93}
.igx-psek span.ak{color:#f5f5f5;box-shadow:inset 0 -1.5px 0 #f5f5f5}
.igx-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2px}
.igx-g{aspect-ratio:3/4;background-size:cover;background-position:center;background-color:#1c1c1e;cursor:pointer}
.igx-p{position:relative}
.igx-pu{display:flex;align-items:center;gap:10px;padding:10px 12px}
.igx-pu b{flex:1;font-size:14px}
.igx-img{position:relative;width:100%;background-size:cover;background-position:center;background-color:#1c1c1e;overflow:hidden}
.igx-burst{position:absolute;left:50%;top:50%;width:90px;height:90px;margin:-45px 0 0 -45px;pointer-events:none;animation:igxb .8s ease-out forwards}
@keyframes igxb{0%{transform:scale(.4);opacity:0}25%{transform:scale(1.1);opacity:1}60%{transform:scale(.95);opacity:1}100%{transform:scale(1.05);opacity:0}}
.igx-ik{display:flex;align-items:center;gap:16px;padding:10px 12px 6px}
.igx-ik .sag{margin-left:auto}
.igx-ik button,.igx-ik span.b{display:flex;cursor:pointer}
.igx-kalp svg{fill:none;stroke:#f5f5f5;transition:transform .15s}
.igx-kalp.on svg{fill:#ff3040;stroke:#ff3040;animation:igxk .3s}
@keyframes igxk{50%{transform:scale(1.25)}}
.igx-yz{padding:0 12px;font-size:14px;line-height:1.4}
.igx-yz.gri{color:#a8a8a8;margin-top:2px;cursor:pointer}
.igx-yek{display:flex;align-items:center;gap:8px;padding:6px 12px 0;font-size:14px;color:#a8a8a8;cursor:pointer}
.igx-z{padding:6px 12px 18px;font-size:12px;color:#a8a8a8}
.igx-c{display:flex;gap:12px;padding:8px 16px}
.igx-cg{flex:1;min-width:0;font-size:14px;line-height:1.35;word-wrap:break-word}
.igx-cg small{color:#a8a8a8;font-size:12px;margin-left:6px}
.igx-cg b{cursor:pointer}
.igx-ca{margin-top:5px;font-size:12px;color:#a8a8a8;font-weight:600}
.igx-ca span{cursor:pointer}
.igx-yan{padding-left:48px}
.igx-ch{flex:none;display:flex;flex-direction:column;align-items:center;gap:2px;font-size:11px;color:#a8a8a8;padding-top:2px}
.igx-ch .igx-kalp svg{stroke:#a8a8a8}
.igx-ch .igx-kalp.on svg{stroke:#ff3040}
.igx-ment{color:#70b5ff}
.igx-ayr{height:.5px;background:#262626;margin:6px 0 4px}
.igx-emo{flex:none;display:flex;justify-content:space-around;padding:8px 12px 2px;font-size:24px;border-top:.5px solid #262626}
.igx-emo span{cursor:pointer}
.igx-yb{flex:none;display:none;align-items:center;justify-content:space-between;padding:7px 16px;background:#1c1c1e;font-size:13px;color:#a8a8a8}
.igx-yb.ac{display:flex}
.igx-giris{flex:none;display:flex;align-items:center;gap:10px;padding:8px 12px 30px}
.igx-giris input{flex:1;min-width:0;height:44px;border-radius:22px;border:.5px solid #363636;background:none;padding:0 16px;color:#f5f5f5;font-size:16px;font-family:inherit;outline:0;caret-color:#0095f6}
.igx-giris input::placeholder{color:#8e8e93}
.igx-pls{display:none;color:#0095f6;font-weight:600;font-size:15px;cursor:pointer}
.igx-giris.dolu .igx-pls{display:block}
.igx-st{display:flex;align-items:center;gap:12px;padding:12px 16px}
.igx-st b{display:block;font-size:14px}
.igx-st small{color:#a8a8a8;font-size:13px}
.igx-st .yb{flex:none;width:50px;height:50px;border-radius:50%;background:#262626;display:flex;align-items:center;justify-content:center;color:#f5f5f5}
.igx-hk{position:absolute;left:0;top:0;width:100%;height:100%;z-index:30;background:#000;color:#fff;overflow:hidden}
.igx-hk .arka{position:absolute;inset:-30px;background-size:cover;background-position:center;filter:blur(28px) brightness(.55)}
.igx-hk .on{position:absolute;left:0;top:0;width:100%;height:100%;background-size:contain;background-position:center;background-repeat:no-repeat}
.igx-hk .vid{pointer-events:none;position:absolute;left:0;top:0;width:100%;height:100%;object-fit:contain;background:#000;display:none}
.igx-hk .gol{pointer-events:none;position:absolute;left:0;right:0;top:0;height:150px;background:linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,0))}
.igx-pg{z-index:5;position:absolute;top:50px;left:8px;right:8px;display:flex;gap:4px}
.igx-pg i{flex:1;height:2.5px;background:rgba(255,255,255,.35);border-radius:2px;overflow:hidden}
.igx-pg i b{display:block;height:100%;width:0;background:#fff}
.igx-hh{z-index:6;position:absolute;top:64px;left:12px;right:12px;display:flex;align-items:center;gap:10px;font-size:14px}
.igx-hh b{font-weight:700}
.igx-hh small{color:rgba(255,255,255,.7);font-size:13px}
.igx-hh .sg{margin-left:auto;display:flex;gap:18px}
.igx-tz{position:absolute;top:110px;bottom:100px;cursor:pointer}
.igx-tz.sol{left:0;width:35%}
.igx-tz.sag{right:0;width:65%}
.igx-hc{position:absolute;left:0;right:0;bottom:104px;display:flex;justify-content:center;padding:0 22px;pointer-events:none}
.igx-hc span{background:rgba(0,0,0,.58);padding:8px 14px;border-radius:14px;font-size:16px;line-height:1.3;text-align:center}
.igx-tp{position:absolute;left:12px;bottom:104px;display:none;align-items:center;gap:10px;background:rgba(0,0,0,.6);padding:8px 14px 8px 8px;border-radius:26px;font-size:14px}
.igx-tp span b{display:block;font-size:13px}
.igx-tp span small{display:block;font-size:11.5px;color:rgba(255,255,255,.75)}
.igx-tp i{font-style:normal;font-size:24px;margin-left:6px}
.igx-hr{position:absolute;left:0;right:0;bottom:0;padding:10px 12px 30px;display:flex;align-items:center;gap:14px}
.igx-hr input{flex:1;min-width:0;height:44px;border-radius:22px;border:1px solid rgba(255,255,255,.55);background:rgba(0,0,0,.25);color:#fff;padding:0 18px;font-size:16px;font-family:inherit;outline:0;caret-color:#fff}
.igx-hr input::placeholder{color:rgba(255,255,255,.8)}
.igx-hr .igx-kalp svg{stroke:#fff}
.igx-hr .igx-kalp.on svg{stroke:#ff3040;fill:#ff3040}
`;
    document.head.appendChild(st);

    const E = kacis;
    const SVG = {
        kalp: "<path d='M12 20.8s-8.4-5-9.6-10.3C1.6 7 3.8 4.2 6.9 4.2c1.9 0 3.5 1 5.1 2.9 1.6-1.9 3.2-2.9 5.1-2.9 3.1 0 5.3 2.8 4.5 6.3-1.2 5.3-9.6 10.3-9.6 10.3z'/>",
        kapat: "<path d='M6 6l12 12M18 6L6 18'/>",
        kisiekle: "<circle cx='9' cy='8' r='3.6'/><path d='M2.5 20a6.5 6.5 0 0 1 13 0M18 8v6M15 11h6'/>"
    };
    function ic(p, b, k) { return svgIc(p, b, k || 1.9); }
    function kalpSvg(b) { return "<svg width='" + b + "' height='" + b + "' viewBox='0 0 24 24' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round'>" + SVG.kalp + "</svg>"; }
    function av(k, b) { return "<span class='ig-av' style=\"width:" + b + "px;height:" + b + "px;" + arkaplan(PP[k]) + "\"></span>"; }
    function say(n) { return Number(n).toLocaleString("tr-TR"); }
    function kisiVarMi(k) { return !!KISI[k]; }
    function yorumSayi(p) { return p.y.reduce(function (t, c) { return t + 1 + (c.y ? c.y.length : 0); }, 0); }
    function gorunenHik(K) { return K.hikaye.filter(function (s) { return s.var; }); }

    /* ---------- ekran yığını ---------- */
    let ek = [], kok = 0, yanit = null, hk = null;

    function ustGeri(baslik, sag) {
        return "<div class='igx-ust'><button class='igx-geri' data-igx='geri'>" + ic(P.geri, 28, 2.2) + (baslik || "") + "</button>" + (sag || "<span></span>") + "</div>";
    }

    function profilEkrani(k, koku) {
        const K = KISI[k], ben = k === BEN;
        const hik = gorunenHik(K);
        const gor = K.goruldu ? " gri" : "";
        const ust = koku
            ? "<div class='igx-ust'><span class='igx-un'>" + E(k) + ic(IGP.asagi, 18, 2.4) + "</span><div class='igx-ui'>" + ic(P.arti, 26) + ic(IGP.menu, 26) + "</div></div>"
            : ustGeri(E(k), "<span>" + ic(P.nokta, 24, 2.4) + "</span>");
        const pp = hik.length
            ? "<div class='igx-pp halka" + gor + "' data-igx='hk:" + k + "'><span>" + av(k, 80) + "</span></div>"
            : "<div class='igx-pp'>" + av(k, 86) + "</div>";
        const butonlar = ben
            ? "<button>Profili düzenle</button><button>Profili paylaş</button><button class='dar'>" + ic(SVG.kisiekle, 20) + "</button>"
            : "<button>Takip ediliyor</button><button>Mesaj</button><button class='dar'>" + ic(SVG.kisiekle, 20) + "</button>";
        const ozel = K.ozel.map(function (o, i) {
            return "<div class='igx-oz' data-igx='oz:" + k + ":" + i + "'><span style=\"" + arkaplan(o.kapak) + "\"></span><small>" + E(o.ad) + "</small></div>";
        }).join("") + (ben ? "<div class='igx-oz'><span>" + ic(P.arti, 26, 1.6) + "</span><small>Yeni</small></div>" : "");
        const grid = K.posts.length
            ? "<div class='igx-grid'>" + K.posts.map(function (p, j) {
                return "<div class='igx-g' data-igx='gonderi:" + k + ":" + j + "' style=\"background-image:url('" + p.g + "')\"></div>";
            }).join("") + "</div>"
            : "<div class='x-bos'>Henüz gönderi yok</div>";
        return "<div class='x-sayfa ig'>" + ust + "<div class='x-govde'>" +
            "<div class='igx-bilgi'>" + pp +
            "<div class='igx-say'><div><b>" + K.posts.length + "</b><small>gönderi</small></div><div><b>" + say(K.takipci) + "</b><small>takipçi</small></div><div><b>" + say(K.takip) + "</b><small>takip</small></div></div></div>" +
            "<div class='igx-ad'>" + E(K.ad) + "</div>" + (K.bio ? "<div class='igx-bio'>" + E(K.bio) + "</div>" : "") +
            "<div class='igx-btn'>" + butonlar + "</div>" +
            (ozel ? "<div class='igx-ozs'>" + ozel + "</div>" : "") +
            "<div class='igx-psek'><span class='ak'>" + ic(IGP.grid, 24) + "</span><span>" + ic(IGP.reels, 24) + "</span><span>" + ic(P.kisi, 24) + "</span></div>" +
            grid + "</div>" + igBar() + "</div>";
    }

    function postHtml(k, j) {
        const p = KISI[k].posts[j], n = yorumSayi(p);
        return "<div class='igx-p' id='igp-" + k + "-" + j + "'>" +
            "<div class='igx-pu'>" + av(k, 32) + "<b data-igx='profil:" + k + "'>" + E(k) + "</b>" + ic(P.nokta, 22, 2.4) + "</div>" +
            "<div class='igx-img' data-igx='cift:" + k + ":" + j + "' style=\"aspect-ratio:" + (p.r || 0.8) + ";background-image:url('" + p.g + "')\"></div>" +
            "<div class='igx-ik'><button class='igx-kalp" + (p.begendi ? " on" : "") + "' data-igx='kalp:" + k + ":" + j + "'>" + kalpSvg(27) + "</button>" +
            "<button data-igx='yorum:" + k + ":" + j + "'>" + ic(P.yorum, 26) + "</button><button>" + ic(IGP.gonder, 26) + "</button>" +
            "<span class='b sag'>" + ic(P.isaret, 26) + "</span></div>" +
            "<div class='igx-yz'><b class='igx-sy'>" + say(p.b + (p.begendi ? 1 : 0)) + " beğenme</b></div>" +
            (p.a ? "<div class='igx-yz'><b>" + E(k) + "</b> " + E(p.a) + "</div>" : "") +
            (n ? "<div class='igx-yz gri' data-igx='yorum:" + k + ":" + j + "'>" + n + " yorumun tümünü gör</div>" : "") +
            (p.y[0] ? "<div class='igx-yz' data-igx='yorum:" + k + ":" + j + "' style='cursor:pointer'><b>" + E(p.y[0].k) + "</b> " + E(p.y[0].t) + "</div>" : "") +
            "<div class='igx-yek' data-igx='yorum:" + k + ":" + j + "'>" + av(BEN, 24) + "Yorum ekle...</div>" +
            "<div class='igx-z'>" + E(p.z) + "</div></div>";
    }

    function gonderiEkrani(t) {
        const K = KISI[t.k];
        return "<div class='x-sayfa ig'><div class='igx-ust'><button class='igx-geri' data-igx='geri'>" + ic(P.geri, 28, 2.2) + "</button>" +
            "<div class='igx-bas'><small>" + E(t.k) + "</small>Gönderiler</div><span style='width:28px'></span></div>" +
            "<div class='x-govde'>" + K.posts.map(function (p, j) { return postHtml(t.k, j); }).join("") + "</div>" + igBar() + "</div>";
    }

    function yorumSatir(k, c, ci, ri) {
        const yan = ri >= 0;
        return "<div class='igx-c" + (yan ? " igx-yan" : "") + "'>" + "<span data-igx='profil:" + c.k + "'>" + av(c.k, yan ? 26 : 36) + "</span>" +
            "<div class='igx-cg'><div><b data-igx='profil:" + c.k + "'>" + E(c.k) + "</b><small>" + E(c.z) + "</small></div>" +
            "<div>" + (c.m ? "<span class='igx-ment'>@" + E(c.m) + "</span> " : "") + E(c.t) + "</div>" +
            "<div class='igx-ca'><span data-igx='yanitla:" + ci + ":" + c.k + "'>Yanıtla</span></div></div>" +
            "<div class='igx-ch'><button class='igx-kalp" + (c.begendi ? " on" : "") + "' data-igx='ckalp:" + ci + ":" + ri + "'>" + kalpSvg(16) + "</button><span class='igx-cl'>" + ((c.l || 0) + (c.begendi ? 1 : 0) || "") + "</span></div></div>";
    }

    function yorumEkrani(t) {
        const k = t.k, p = KISI[k].posts[t.j];
        const liste = p.y.map(function (c, ci) {
            return yorumSatir(k, c, ci, -1) + (c.y || []).map(function (r, ri) { return yorumSatir(k, r, ci, ri); }).join("");
        }).join("");
        const emo = ["❤️", "🙌", "🔥", "👏", "😢", "😍", "😮", "😂"];
        return "<div class='x-sayfa ig'><div class='igx-ust' style='padding-bottom:10px'><button class='igx-geri' data-igx='geri'>" + ic(P.geri, 28, 2.2) + "</button>" +
            "<div class='igx-bas' style='margin-right:28px'>Yorumlar</div>" + ic(IGP.gonder, 24) + "</div>" +
            "<div class='x-govde'>" +
            (p.a ? "<div class='igx-c'><span data-igx='profil:" + k + "'>" + av(k, 36) + "</span><div class='igx-cg'><div><b data-igx='profil:" + k + "'>" + E(k) + "</b><small>" + E(p.z) + "</small></div><div>" + E(p.a) + "</div></div></div><div class='igx-ayr'></div>" : "") + liste + "<div style='height:12px'></div></div>" +
            "<div class='igx-yb' id='igx-yb'><span id='igx-ybt'></span><button data-igx='yanitiptal'>" + ic(SVG.kapat, 16, 2.2) + "</button></div>" +
            "<div class='igx-emo'>" + emo.map(function (e) { return "<span data-igx='emoji:" + e + "'>" + e + "</span>"; }).join("") + "</div>" +
            "<div class='igx-giris'>" + av(BEN, 38) + "<input id='igx-in' type='text' placeholder='" + E(k) + " için yorum ekle...' autocomplete='off' autocorrect='off' enterkeyhint='send'>" +
            "<span class='igx-pls' data-igx='paylas'>Paylaş</span></div></div>";
    }

    function etkinlikEkrani() {
        const n = KISI[BEN].istek;
        return "<div class='x-sayfa ig'>" + ustGeri("", "<span></span>").replace("<span></span></div>", "<span class='igx-bas' style='margin-right:80px'>Etkinlik</span></div>") +
            "<div class='x-govde'><div class='igx-st'><span class='yb'>" + ic(SVG.kisiekle, 24) + "</span><div><b>Takip istekleri</b><small>" + n + " bekleyen istek</small></div></div></div></div>";
    }

    function ekranCiz(t) {
        if (t.tur === "profil") return profilEkrani(t.k, false);
        if (t.tur === "gonderi") return gonderiEkrani(t);
        if (t.tur === "yorum") return yorumEkrani(t);
        return etkinlikEkrani();
    }

    const _igCiz = igCiz;
    igCiz = function () {
        const t = ek[ek.length - 1];
        if (t) return ekranCiz(t);
        if (igSohbet !== null) return _igCiz();
        if (igSekme === "profil") return profilEkrani(BEN, true);
        return _igCiz();
    };
    const _xAcI = xAc;
    xAc = function (k) { if (k === "instagram") { ek = []; kok = 0; yanit = null; hkKapat(true); } return _xAcI(k); };

    function git(e) {
        const t = ek[ek.length - 1];
        if (t) t.sc = xKay(); else kok = xKay();
        ek.push(e);
        yanit = null;
        xCiz(0);
        if (e.tur === "gonderi") {
            const g = XIC.querySelector(".x-govde"), el = XIC.querySelector("#igp-" + e.k + "-" + e.j);
            if (g && el) g.scrollTop = el.offsetTop;
        }
    }
    function geri() {
        ek.pop(); yanit = null;
        const t = ek[ek.length - 1];
        xCiz(t ? t.sc : kok);
    }

    /* ---------- beğeni (ekran yenilenmeden) ---------- */
    function postBegen(k, j, deger) {
        const p = KISI[k].posts[j];
        p.begendi = deger;
        XIC.querySelectorAll("#igp-" + k + "-" + j + " .igx-kalp").forEach(function (b) { b.classList.toggle("on", deger); });
        XIC.querySelectorAll("#igp-" + k + "-" + j + " .igx-sy").forEach(function (s) { s.textContent = say(p.b + (deger ? 1 : 0)) + " beğenme"; });
    }
    let sonTik = { t: 0, k: "" };

    /* ---------- ANA SAYFA: hikâyeler + takip ettiklerinin gönderileri ---------- */
    const TAKIP = ["mnijgguk", "parkjimim", "nnnamjoonnn", "yoonchipchip"];   // gönderileri ana sayfaya düşecek kişiler
    function anaEkrani() {
        const ust = "<div class='ig-ust'><span class='ig-logo'>Instagram</span><div class='ig-ikonlar-ust'>" + ic(P.kalp, 26) + "</div></div>";
        const kisiler = [BEN].concat(TAKIP.filter(function (k) { return gorunenHik(KISI[k]).length; }));
        const hik = "<div class='ig-hik'>" + kisiler.map(function (k) {
            const var_ = gorunenHik(KISI[k]).length > 0, gri = !var_ || KISI[k].goruldu;
            return "<div class='ig-h'" + (var_ ? " data-igx='hk:" + k + "'" : "") + "><span class='ig-halka" + (gri ? " gri" : "") + "'><span>" + av(k, 57) + "</span></span>" + (k === BEN ? "Hikâyen" : E(k)) + "</div>";
        }).join("") + "</div>";
        const liste = [];
        let en = 0;
        TAKIP.forEach(function (k) { en = Math.max(en, KISI[k].posts.length); });
        for (let j = 0; j < en; j++) TAKIP.forEach(function (k) { if (KISI[k].posts[j]) liste.push(postHtml(k, j)); });
        return "<div class='x-sayfa ig'>" + ust + "<div class='x-govde'>" + hik +
            (liste.length ? liste.join("") : "<div class='x-bos'>Takip ettiklerinin gönderileri burada görünür</div>") + "</div>" + igBar() + "</div>";
    }
    const _sohbetP = igSohbetEkrani;
    igSohbetEkrani = function (i) {
        const d = document.createElement("div");
        d.innerHTML = _sohbetP(i);
        const k = IG_DM[i].kullanici, ust = d.querySelector(".ig-so-ust");
        if (ust && KISI[k]) ust.querySelectorAll(":scope > span, :scope > div").forEach(function (e) { if (!e.classList.contains("ig-so-sag")) e.setAttribute("data-igx", "profil:" + k); });
        return d.innerHTML;
    };
    const _igCiz2 = igCiz;
    igCiz = function () {
        if (igSohbet === null && !ek.length && igSekme === "ana") return anaEkrani();
        return _igCiz2();
    };

    /* ---------- hikâye / öne çıkarılan görüntüleyici ---------- */
    function hkAc(items, i, k, tur, ad) {
        hkKapat(true);
        const el = document.createElement("div");
        el.className = "igx-hk";
        el.innerHTML = "<div class='arka'></div><div class='on'></div><video class='vid' playsinline></video><div class='gol'></div>" +
            "<div class='igx-pg'>" + items.map(function () { return "<i><b></b></i>"; }).join("") + "</div>" +
            "<div class='igx-hh'><span data-igx='hk:profil:" + k + "' style='display:flex;align-items:center;gap:10px;cursor:pointer'>" + av(k, 34) + "<b>" + E(k) + "</b></span><small class='zm'></small><span class='sg'>" + ic(P.nokta, 22, 2.4) + "<button data-igx='hk:kapat'>" + ic(SVG.kapat, 26, 2) + "</button></span></div>" +
            "<div class='igx-tz sol' data-igx='hk:sol'></div><div class='igx-tz sag' data-igx='hk:sag'></div>" +
            "<div class='igx-hc'><span></span></div><div class='igx-tp'></div>" +
            "<div class='igx-hr'><input type='text' placeholder='Mesaj gönder...' autocomplete='off' enterkeyhint='send'><button class='igx-kalp' data-igx='hk:kalp'>" + kalpSvg(28) + "</button><span>" + ic(IGP.gonder, 26) + "</span></div>";
        XAPP.appendChild(el);
        hk = { items: items, i: i, k: k, tur: tur, ad: ad || "", t: 0, el: el, tm: null };
        el.querySelector("input").addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); e.target.blur(); } });
        hkGoster();
        hk.tm = setInterval(hkTik, 50);
    }
    function hkGoster() {
        const s = hk.items[hk.i], el = hk.el;
        const vid = el.querySelector(".vid");
        if (s.v) {
            el.querySelector(".arka").style.backgroundImage = "none";
            el.querySelector(".on").style.backgroundImage = "none";
            vid.style.display = "block";
            vid.onerror = function () { hkIleri(); };
            vid.src = s.g;
            vid.currentTime = 0;
            vid.muted = false;
            const o = vid.play();
            if (o && o.catch) o.catch(function () { vid.muted = true; vid.play().catch(function () { }); });
        } else {
            vid.pause();
            vid.removeAttribute("src");
            vid.style.display = "none";
            el.querySelector(".arka").style.backgroundImage = "url('" + s.g + "')";
            el.querySelector(".on").style.backgroundImage = "url('" + s.g + "')";
        }
        el.querySelector(".zm").textContent = s.z || "";
        const c = el.querySelector(".igx-hc");
        c.style.display = s.a ? "flex" : "none";
        c.firstChild.textContent = s.a || "";
        const tp = el.querySelector(".igx-tp");
        tp.style.display = s.tepki ? "flex" : "none";
        tp.innerHTML = s.tepki ? av(s.tepki.k, 30) + "<span><b>" + E(s.tepki.k) + "</b><small>hikâyene tepki verdi</small></span><i>" + s.tepki.e + "</i>" : "";
        el.querySelectorAll(".igx-pg i b").forEach(function (b, n) { b.style.width = n < hk.i ? "100%" : "0"; });
        el.querySelector(".igx-hr .igx-kalp").classList.toggle("on", !!s.begendi);
        hk.t = 0;
    }
    function hkTik() {
        if (!hk) return;
        if (!XAPP.classList.contains("acik") || xUyg !== "instagram") return hkKapat(true);
        const odak = document.activeElement === hk.el.querySelector("input");
        const s = hk.items[hk.i], vid = hk.el.querySelector(".vid"), b = hk.el.querySelectorAll(".igx-pg i b")[hk.i];
        if (s.v) {
            if (odak) { vid.pause(); return; }
            if (vid.paused && !vid.ended) vid.play().catch(function () { });
            if (vid.duration) {
                if (b) b.style.width = Math.min(100, vid.currentTime / vid.duration * 100) + "%";
                if (vid.ended || vid.currentTime >= vid.duration - 0.1) hkIleri();
            }
            return;
        }
        if (odak) return;
        hk.t += 50;
        if (b) b.style.width = Math.min(100, hk.t / 50) + "%";
        if (hk.t >= 5000) hkIleri();
    }
    function hkIleri() { if (hk.i < hk.items.length - 1) { hk.i++; hkGoster(); } else hkKapat(); }
    function hkGeri() { if (hk.i > 0) hk.i--; hkGoster(); }
    function hkKapat(sessiz) {
        if (!hk) return;
        clearInterval(hk.tm);
        if (hk.tur === "st" && KISI[hk.k]) KISI[hk.k].goruldu = true;
        const v = hk.el.querySelector(".vid");
        if (v) { v.onerror = null; v.muted = true; v.pause(); v.removeAttribute("src"); v.load(); }
        hk.el.remove();
        hk = null;
        if (!sessiz && xUyg === "instagram") xCiz(xKay());
    }

    /* ---------- tıklamalar ---------- */
    XAPP.addEventListener("click", function (e) {
        if (xUyg !== "instagram") return;
        const sk = e.target.closest("[data-x]");
        if (sk && sk.dataset.x.indexOf("ig:") === 0 && !e.target.closest(".igx-hk")) { ek = []; yanit = null; }
    }, true);

    XAPP.addEventListener("click", function (e) {
        if (xUyg !== "instagram") return;
        if (!ek.length && igSekme === "ana" && igSohbet === null && e.target.closest(".ig-ikonlar-ust")) { git({ tur: "etkinlik" }); return; }
        const el = e.target.closest("[data-igx]");
        if (!el) return;
        const p = el.dataset.igx.split(":");
        const top = ek[ek.length - 1];
        switch (p[0]) {
            case "geri": geri(); break;
            case "profil": if (kisiVarMi(p[1]) && !(top && top.tur === "profil" && top.k === p[1])) git({ tur: "profil", k: p[1] }); break;
            case "gonderi": git({ tur: "gonderi", k: p[1], j: +p[2] }); break;
            case "yorum": git({ tur: "yorum", k: p[1], j: +p[2] }); break;
            case "kalp": postBegen(p[1], +p[2], !KISI[p[1]].posts[+p[2]].begendi); break;
            case "cift": {
                const now = Date.now(), key = p[1] + p[2];
                if (now - sonTik.t < 340 && sonTik.k === key) {
                    postBegen(p[1], +p[2], true);
                    const b = document.createElement("span");
                    b.className = "igx-burst";
                    b.innerHTML = "<svg width='90' height='90' viewBox='0 0 24 24' fill='#fff'>" + SVG.kalp + "</svg>";
                    el.appendChild(b);
                    setTimeout(function () { b.remove(); }, 850);
                    sonTik = { t: 0, k: "" };
                } else sonTik = { t: now, k: key };
                break;
            }
            case "ckalp": {
                const c = +p[1] >= 0 && +p[2] >= 0 ? KISI[top.k].posts[top.j].y[+p[1]].y[+p[2]] : KISI[top.k].posts[top.j].y[+p[1]];
                c.begendi = !c.begendi;
                el.classList.toggle("on", c.begendi);
                const sp = el.parentNode.querySelector(".igx-cl");
                if (sp) sp.textContent = ((c.l || 0) + (c.begendi ? 1 : 0)) || "";
                break;
            }
            case "yanitla": {
                yanit = { ci: +p[1], k: p[2] };
                const inp = XIC.querySelector("#igx-in");
                if (inp) { inp.value = "@" + p[2] + " "; inp.focus(); XIC.querySelector(".igx-giris").classList.add("dolu"); }
                const yb = XIC.querySelector("#igx-yb");
                if (yb) { yb.classList.add("ac"); XIC.querySelector("#igx-ybt").textContent = p[2] + " adlı kişiye yanıt veriyorsun"; }
                break;
            }
            case "yanitiptal": {
                yanit = null;
                const yb = XIC.querySelector("#igx-yb"); if (yb) yb.classList.remove("ac");
                const inp = XIC.querySelector("#igx-in"); if (inp) { inp.value = ""; XIC.querySelector(".igx-giris").classList.remove("dolu"); }
                break;
            }
            case "emoji": {
                const inp = XIC.querySelector("#igx-in");
                if (inp) { inp.value += p[1]; XIC.querySelector(".igx-giris").classList.add("dolu"); inp.focus(); }
                break;
            }
            case "paylas": yorumGonder(); break;
            case "hk": {
                if (p[1] === "profil") {
                    if (top && top.tur === "profil" && top.k === p[2]) hkKapat();
                    else { hkKapat(true); git({ tur: "profil", k: p[2] }); }
                }
                else if (p[1] === "kapat") hkKapat();
                else if (p[1] === "sag") hkIleri();
                else if (p[1] === "sol") hkGeri();
                else if (p[1] === "kalp" && hk) { const s = hk.items[hk.i]; s.begendi = !s.begendi; el.classList.toggle("on", !!s.begendi); }
                else if (KISI[p[1]]) { const h = gorunenHik(KISI[p[1]]); if (h.length) hkAc(h, 0, p[1], "st"); }
                break;
            }
            case "oz": {
                const o = KISI[p[1]].ozel[+p[2]];
                hkAc(o.fotolar.map(function (f) { return { g: f.g, a: f.a, z: o.z || "" }; }), 0, p[1], "oz", o.ad);
                break;
            }
        }
    });

    function yorumGonder() {
        const top = ek[ek.length - 1], inp = XIC.querySelector("#igx-in");
        if (!top || top.tur !== "yorum" || !inp) return;
        const metin = inp.value.trim();
        if (!metin) return;
        const p = KISI[top.k].posts[top.j];
        if (yanit) {
            const c = p.y[yanit.ci];
            c.y = c.y || [];
            const m = new RegExp("^@" + yanit.k + "\\s*");
            c.y.push({ k: BEN, m: yanit.k, t: metin.replace(m, ""), l: 0, z: "Şimdi" });
        } else {
            p.y.unshift({ k: BEN, t: metin, l: 0, z: "Şimdi", y: [] });
        }
        yanit = null;
        xCiz(0);
    }

    XAPP.addEventListener("input", function (e) {
        if (xUyg === "instagram" && e.target.id === "igx-in") {
            XIC.querySelector(".igx-giris").classList.toggle("dolu", e.target.value.trim().length > 0);
        }
    });
    XAPP.addEventListener("keydown", function (e) {
        if (xUyg === "instagram" && e.target.id === "igx-in" && e.key === "Enter") { e.preventDefault(); yorumGonder(); }
    });
})();


/* ===== INSTAGRAM DM: Namjoon hikâyene 🔥 ile tepki verdi ===== */
(function () {
    const KULLANICI = "nnnamjoonnn";           // DM'deki kullanıcı adı
    const SAAT = "Bugün 15:12";                // mesajın üstünde görünen zaman
    const ZAMAN = "1 sa";                      // DM listesinde görünen zaman
    const TEPKI = "🔥";

    let d = IG_DM.find(function (x) { return x.kullanici === KULLANICI; });
    if (!d) {
        d = { kullanici: KULLANICI, avatar: "whatsapp/namjoon.jpeg", zaman: ZAMAN, yeni: true, durum: "Şu an aktif", mesajlar: [] };
        IG_DM.unshift(d);
    }
    d.mesajlar.push(["saat", SAAT]);
    d.mesajlar.push(["them", "Hikâyene tepki verdi " + TEPKI]);

    // profil fotoğrafı ve hikâye görseli: uzantıyı kendisi bulur
    let stG = "insta/tae/st2.jpeg";
    function bul(baz, ok) {
        ["jpeg", "jpg", "png", "JPG", "JPEG", "PNG", "webp"].reduceRight(function (sonra, e) {
            return function () { const im = new Image(); im.onload = function () { ok(baz + "." + e); }; im.onerror = sonra; im.src = baz + "." + e; };
        }, function () { })();
    }
    bul("insta/nj/pp", function (y) { d.avatar = y; });
    bul("insta/tae/st2", function (y) { stG = y; });

    const st = document.createElement("style");
    st.textContent = `
.igx-sr{align-self:flex-start;margin:6px 0 2px;display:flex;flex-direction:column;gap:6px}
.igx-sr-et{font-size:12px;color:#a8a8a8}
.igx-sr-k{position:relative;width:104px;height:184px;border-radius:16px;background-size:cover;background-position:center;background-color:#1c1c1e;box-shadow:inset 0 0 0 100px rgba(0,0,0,.35)}
.igx-sr-k span{position:absolute;right:-14px;bottom:-14px;font-size:38px;line-height:1}
`;
    document.head.appendChild(st);

    const _s = igSohbetEkrani;
    igSohbetEkrani = function (i) {
        return _s(i).replace(/<div class='ig-b them'>Hikâyene tepki verdi (.*?)<\/div>/g, function (_, e) {
            return "<div class='igx-sr'><div class='igx-sr-et'>Hikâyene tepki verdi</div><div class='igx-sr-k' style=\"background-image:url('" + stG + "')\"><span>" + e + "</span></div></div>";
        });
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