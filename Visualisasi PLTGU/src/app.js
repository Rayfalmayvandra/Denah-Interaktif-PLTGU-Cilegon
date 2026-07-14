/// ============================================================
// PLTGU Cilegon — Building Data
// Ref: N3-01105 Engineering Drawings / Google Maps Satellite
// ============================================================

export const buildingData = {
    "b1": {
        number: "b1",
        name: "Distillate Oil Tank",
        zona: "B",
        dimensi: "± 5.320 m² (diameter ±82 m)",
        shortDesc: "Fasilitas penyimpanan besar yang dari atas terlihat berbentuk bundar. Tangki ini berfungsi krusial untuk menampung bahan bakar cadangan, yang biasanya berupa minyak diesel atau High-Speed Diesel (HSD).",
        description: "Tangki penyimpanan Distillate Oil (minyak sulingan) berkapasitas lebih kecil yang digunakan sebagai bahan bakar cadangan harian (day tank) atau untuk proses start-up gas turbin sebelum dialihkan ke gas alam.",
        fungsi: [
            "Menyimpan bahan bakar cadangan High-Speed Diesel (HSD)",
            "Menyediakan bahan bakar saat start-up gas turbin",
            "Cadangan operasi saat pasokan gas alam terganggu"
        ]
    },
    "b2": {
        number: "b2",
        name: "Switch Yard",
        zona: "A",
        dimensi: "± 1.447 m²",
        shortDesc: "Gardu induk tegangan tinggi 150kV yang menyalurkan listrik ke jaringan transmisi PLN.",
        description: "Gardu induk tegangan tinggi 150kV (GIS — Gas Insulated Switchgear) yang menyalurkan listrik yang dihasilkan ke jaringan transmisi PLN. Dilengkapi dengan circuit breaker, disconnector, bus bar, current transformer, dan sistem proteksi relay.",
        fungsi: [
            "Menyalurkan daya listrik ke jaringan transmisi PLN 150kV",
            "Proteksi sistem tenaga menggunakan relay pengaman",
            "Menghubungkan generator PLTGU ke jaringan eksternal"
        ]
    },
    "b3": {
        number: "b3",
        name: "Area Pos Jaga",
        zona: "D",
        dimensi: "± 171 m²",
        description: "Area pos jaga keamanan tambahan di fasilitas PLTGU.",
        fungsi: [
            "Pemantauan keamanan area PLTGU",
            "Kontrol akses keluar-masuk kendaraan dan personel",
            "Koordinasi keamanan dengan pos gate utama"
        ]
    },
    "b4": {
        number: "b4",
        name: "Fire Truck Station",
        zona: "D",
        dimensi: "± 171 m²",
        description: "Stasiun pemadam kebakaran (Fire Truck Station) untuk penanganan darurat dan siaga kebakaran di area PLTGU.",
        fungsi: [
            "Penyimpanan armada truk pemadam kebakaran",
            "Siaga 24 jam untuk penanganan darurat kebakaran",
            "Pusat koordinasi respons darurat kebakaran PLTGU"
        ]
    },
    "b5": {
        number: "b5",
        name: "Unit Pelayanan Kesehatan Kerja (UPPK)",
        zona: "D",
        dimensi: "± 111 m²",
        description: "Unit Pelayanan Kesehatan Kerja (UPPK) yang menyediakan fasilitas medis dan penanganan kesehatan bagi para pekerja dan staf.",
        fungsi: [
            "Pelayanan kesehatan dasar bagi karyawan PLTGU",
            "Penanganan pertolongan pertama kecelakaan kerja",
            "Pemantauan kesehatan dan program K3 karyawan"
        ]
    },
    "b6": {
        number: "b6",
        name: "Stasiun Gas",
        zona: "B",
        dimensi: "± 124 m²",
        description: "Stasiun penerimaan dan pengaturan pasokan gas (Stasiun Gas).",
        fungsi: [
            "Penerimaan dan regulasi tekanan gas bumi dari jaringan PGN",
            "Pengukuran debit dan kualitas gas masuk",
            "Sistem keamanan dan shut-off valve otomatis"
        ]
    },
    "b7": {
        number: "b7",
        name: "Rumah Bibit",
        zona: "D",
        dimensi: "± 145 m²",
        description: "Rumah Bibit (Greenhouse / Nursery) untuk pembibitan tanaman di area PLTGU.",
        fungsi: [
            "Pembibitan dan perawatan tanaman penghijauan",
            "Penyediaan bibit untuk program penghijauan PLTGU",
            "Pemeliharaan vegetasi kawasan industri"
        ]
    },
    "b8": {
        number: "b8",
        name: "Gedung Admin",
        zona: "D",
        dimensi: "± 718 m²",
        description: "Gedung Admin (Administrative Building) sebagai pusat kegiatan administrasi dan perkantoran.",
        fungsi: [
            "Pusat administrasi dan manajemen operasional PLTGU",
            "Ruang kerja staf dan pejabat perusahaan",
            "Ruang rapat, dokumen, dan komunikasi"
        ]
    },
    "b9": {
        number: "b9",
        name: "Safety Center",
        zona: "D",
        dimensi: "± 189 m²",
        description: "Safety Center sebagai pusat kendali dan pemantauan K3 (Keselamatan dan Kesehatan Kerja).",
        fungsi: [
            "Pusat koordinasi program K3 seluruh PLTGU",
            "Penyimpanan alat pelindung diri (APD) dan peralatan keselamatan",
            "Pelatihan dan sosialisasi prosedur K3"
        ]
    },
    "b10": {
        number: "b10",
        name: "Masjid",
        zona: "D",
        dimensi: "± 245 m²",
        description: "Masjid untuk fasilitas ibadah karyawan dan tamu di lingkungan PLTGU.",
        fungsi: [
            "Fasilitas ibadah sholat bagi karyawan Muslim",
            "Kegiatan kerohanian dan keagamaan karyawan",
            "Tempat ibadah untuk tamu dan mitra PLTGU"
        ]
    },
    "b11": {
        number: "b11",
        name: "Area Pos Gate",
        zona: "D",
        dimensi: "± 119 m²",
        description: "Area Pos Gate untuk pemeriksaan akses masuk dan pengamanan fasilitas.",
        fungsi: [
            "Pemeriksaan identitas dan akses masuk personel",
            "Pencatatan keluar-masuk kendaraan dan tamu",
            "Pengamanan gerbang utama fasilitas PLTGU"
        ]
    },
    "b12": {
        number: "b12",
        name: "Area Traffo",
        zona: "A",
        dimensi: "± 2.145 m²",
        description: "Area Transformator (Traffo) yang berfungsi menaikkan tegangan untuk ditransmisikan atau menurunkan tegangan untuk pemakaian sendiri.",
        fungsi: [
            "Menaikkan tegangan output generator ke 150kV",
            "Menurunkan tegangan untuk kebutuhan auxiliary PLTGU",
            "Distribusi tenaga listrik ke seluruh area fasilitas"
        ]
    },
    "b13": {
        number: "b13",
        name: "Area Raw Water Tank",
        zona: "C",
        dimensi: "± 468 m²",
        description: "Area tangki penampungan air mentah (Raw Water Tank) sebelum diproses lebih lanjut oleh unit pengolahan air.",
        fungsi: [
            "Penampungan air mentah dari sumber air baku",
            "Buffer stok air sebelum masuk unit pengolahan",
            "Menjamin ketersediaan air proses secara berkelanjutan"
        ]
    },
    "b14": {
        number: "b14",
        name: "Area Desalination A & B",
        zona: "C",
        dimensi: "± 1.693 m²",
        description: "Area fasilitas desalinasi unit A & B yang mengolah air laut menjadi air tawar untuk kebutuhan pembangkit.",
        fungsi: [
            "Mengolah air laut menjadi air tawar melalui teknologi reverse osmosis",
            "Menyediakan air proses berkualitas tinggi untuk HRSG dan cooling",
            "Mengurangi ketergantungan terhadap pasokan air tawar eksternal"
        ]
    },
    "b15": {
        number: "b15",
        name: "Gardu Induk",
        zona: "A",
        dimensi: "± 340 m²",
        description: "Fasilitas Gardu Induk untuk mendistribusikan aliran listrik yang dihasilkan ke jaringan transmisi PLN.",
        fungsi: [
            "Distribusi dan pengaturan aliran daya listrik 150kV",
            "Pengamanan sistem tenaga melalui proteksi relay",
            "Switching dan isolasi jaringan transmisi"
        ]
    },
    "b16": {
        number: "b16",
        name: "Area Make Up Watertank",
        zona: "C",
        dimensi: "± 973 m²",
        description: "Area tangki Make Up Water yang menampung air pengisi tambahan untuk menjaga siklus air dan uap di dalam pembangkit.",
        fungsi: [
            "Penyimpanan air pengisi (make-up water) untuk siklus uap HRSG",
            "Menjaga keseimbangan volume air dalam sistem siklus tertutup",
            "Cadangan air demin untuk operasi darurat"
        ]
    },
    "b17": {
        number: "b17",
        name: "Traffo Cadangan",
        zona: "C",
        dimensi: "± 150 m²",
        description: "Area Transformator (Traffo) Cadangan.",
        fungsi: [
            "Transformator cadangan untuk keandalan pasokan listrik",
            "Backup saat transformator utama dalam perbaikan",
            "Memastikan kontinuitas operasi sistem kelistrikan"
        ]
    },
    "b18": {
        number: "b18",
        name: "Fire Pump Station",
        zona: "C",
        dimensi: "± 297 m²",
        description: "Fire Pump Station untuk sistem pemadam kebakaran.",
        fungsi: [
            "Memompa air bertekanan untuk sistem hydrant dan sprinkler",
            "Menjamin pasokan air pemadam kebakaran di seluruh area",
            "Operasi otomatis saat deteksi kebakaran terdeteksi"
        ]
    },
    "b19": {
        number: "b19",
        name: "Area Water Intake",
        zona: "C",
        dimensi: "± 720 m²",
        description: "Area Water Intake untuk pengambilan air baku.",
        fungsi: [
            "Pengambilan air laut/sungai sebagai sumber air baku",
            "Penyaringan awal (screening) material besar dari air",
            "Pompa transfer air ke unit pengolahan selanjutnya"
        ]
    },
    "b20": {
        number: "b20",
        name: "Area HRSG",
        zona: "A",
        dimensi: "± 3.360 m²",
        description: "Area Heat Recovery Steam Generator (HRSG) — memanfaatkan gas buang panas dari Gas Turbin untuk menghasilkan uap bertekanan tinggi yang menggerakkan Steam Turbin, menghasilkan listrik tambahan tanpa bahan bakar ekstra.",
        fungsi: [
            "Mengkonversi panas gas buang turbin gas menjadi uap bertekanan",
            "Menghasilkan uap untuk menggerakkan steam turbin",
            "Meningkatkan efisiensi keseluruhan sistem Combined Cycle"
        ]
    },
    "b21": {
        number: "b21",
        name: "Condensate Water Tank",
        zona: "A",
        dimensi: "± 2.900 m²",
        description: "Tangki air kondensat (Condensate Water Tank) — menampung uap yang telah dikondensasikan kembali menjadi air setelah melewati steam turbin, untuk kemudian disirkulasikan kembali ke HRSG.",
        fungsi: [
            "Menampung air kondensat dari kondenser steam turbin",
            "Mendistribusikan air kondensat kembali ke HRSG",
            "Menjaga keseimbangan siklus air-uap pembangkit"
        ]
    },
    "b22": {
        number: "b22",
        name: "Area Bangunan K3 Kecil",
        zona: "C",
        dimensi: "± 205 m²",
        description: "Area fasilitas Bangunan K3 Kecil.",
        fungsi: [
            "Penyimpanan peralatan K3 dan APD di area setempat",
            "Pos pemantauan keselamatan kerja lapangan",
            "Fasilitas P3K di area operasi"
        ]
    },
    "b23": {
        number: "b23",
        name: "Area Clorination Plant",
        zona: "C",
        dimensi: "± 1.840 m²",
        description: "Fasilitas Chlorination Plant — melakukan proses klorinasi pada air baku untuk mencegah pertumbuhan biota laut (bio-fouling) pada sistem pendingin.",
        fungsi: [
            "Injeksi klorin pada air pendingin untuk mencegah bio-fouling",
            "Perlindungan pipa kondenser dari pertumbuhan kerang dan ganggang",
            "Pengolahan air laut sebelum digunakan sebagai media pendingin"
        ]
    },
    "b24": {
        number: "b24",
        name: "Area Solar Panel",
        zona: "B",
        dimensi: "± 250 m²",
        description: "Area panel surya (Solar Panel) untuk pasokan energi bersih.",
        fungsi: [
            "Pembangkitan listrik dari energi surya",
            "Memasok kebutuhan listrik fasilitas penunjang",
            "Kontribusi terhadap target energi terbarukan perusahaan"
        ]
    },
    "b25": {
        number: "b25",
        name: "Area Gudang Penyimpan Pelumas",
        zona: "C",
        dimensi: "± 1.870 m²",
        description: "Fasilitas gudang penyimpanan pelumas (lubricant storage).",
        fungsi: [
            "Penyimpanan oli pelumas untuk turbin gas dan steam turbin",
            "Manajemen stok minyak pelumas operasional",
            "Pengelolaan dan pembuangan limbah oli bekas"
        ]
    },
    "b26": {
        number: "b26",
        name: "Area Air Limbah WWTP",
        zona: "C",
        dimensi: "± 1.000 m²",
        description: "Fasilitas pengolahan air limbah (Waste Water Treatment Plant) — mengolah air limbah dari berbagai proses PLTGU sebelum dibuang ke lingkungan.",
        fungsi: [
            "Pengolahan air limbah proses sebelum dibuang ke lingkungan",
            "Menetralisir kandungan kimia berbahaya dalam air limbah",
            "Memenuhi baku mutu lingkungan sesuai regulasi KLHK"
        ]
    },
    "b27": {
        number: "b27",
        name: "Area Air Limbah Desalinasi",
        zona: "C",
        dimensi: "± 3.500 m²",
        description: "Fasilitas pengolahan limbah dari proses desalinasi (brine discharge area).",
        fungsi: [
            "Pengolahan dan pembuangan air garam hasil desalinasi",
            "Pengenceran brine water sebelum dibuang ke laut",
            "Pemantauan dampak lingkungan pembuangan brine"
        ]
    },
    "b28": {
        number: "b28",
        name: "Area Pertamina / Gas Metering Station",
        zona: "B",
        dimensi: "± 1.770 m²",
        description: "Stasiun pengukuran gas (Gas Metering Station) dan area fasilitas Pertamina untuk penerimaan bahan bakar minyak.",
        fungsi: [
            "Pengukuran volume gas bumi yang diterima dari PGN/Pertamina",
            "Stasiun regulasi tekanan gas untuk distribusi ke turbin",
            "Penerimaan dan pemeriksaan kualitas bahan bakar"
        ]
    },
    "b29": {
        number: "b29",
        name: "Gudang & Workshop",
        zona: "C",
        dimensi: "± 648 m²",
        description: "Area Gudang dan Workshop untuk penyimpanan suku cadang dan kegiatan pemeliharaan.",
        fungsi: [
            "Penyimpanan suku cadang (spare parts) mesin dan peralatan",
            "Kegiatan perbaikan dan pemeliharaan peralatan",
            "Fabrikasi dan modifikasi komponen mekanik"
        ]
    },
    "b30": {
        number: "b30",
        name: "Gas Station",
        zona: "C",
        dimensi: "± 770 m²",
        description: "Gas Station — stasiun pengisian bahan bakar untuk kendaraan operasional PLTGU.",
        fungsi: [
            "Pengisian bahan bakar kendaraan operasional",
            "Penyimpanan BBM untuk kendaraan dinas",
            "Pengelolaan distribusi BBM internal"
        ]
    },
    "b31": {
        number: "b31",
        name: "Station Gas Compressor",
        zona: "C",
        dimensi: "± 614 m²",
        description: "Fasilitas kompresor gas (Station Gas Compressor) untuk meningkatkan tekanan gas sebelum masuk ke ruang bakar turbin gas.",
        fungsi: [
            "Kompresi gas bumi ke tekanan operasi turbin gas",
            "Memastikan tekanan gas yang cukup untuk injeksi ke combustor",
            "Pengaturan laju aliran gas ke masing-masing unit turbin"
        ]
    },
    "b32": {
        number: "b32",
        name: "Area Gasena",
        zona: "C",
        dimensi: "± 1.235 m²",
        description: "Area Gasena — fasilitas pengelolaan gas industri dan nitrogen untuk kebutuhan operasional PLTGU.",
        fungsi: [
            "Penyimpanan dan distribusi gas nitrogen untuk purging",
            "Penyediaan gas industri untuk kebutuhan operasional dan pemeliharaan",
            "Fasilitas pengelolaan gas bertekanan"
        ]
    },
    "b33": {
        number: "b33",
        name: "Area Titik Pembuangan (Outfall)",
        zona: "D",
        dimensi: "± 800 m²",
        description: "Area Titik Pembuangan (Outfall) — titik akhir pembuangan air dari sistem pendingin dan proses pengolahan air limbah ke laut.",
        fungsi: [
            "Titik pembuangan air pendingin ke laut",
            "Pemantauan suhu dan kualitas air buangan",
            "Pengenceran dan dispersi air buangan ke lingkungan laut"
        ]
    },
    "b34": {
        number: "b34",
        name: "Gedung Enjinering",
        zona: "D",
        dimensi: "± 180 m²",
        description: "Gedung Enjinering sebagai pusat kegiatan teknis, perencanaan, dan engineering support.",
        fungsi: [
            "Ruang kerja tim engineering dan technical support",
            "Penyimpanan dokumen teknis, P&ID, dan drawing",
            "Perencanaan dan koordinasi proyek pemeliharaan"
        ]
    },
    "b35": {
        number: "b35",
        name: "Gedung K3",
        zona: "D",
        dimensi: "± 156 m²",
        description: "Gedung K3 sebagai pusat kegiatan Keselamatan dan Kesehatan Kerja.",
        fungsi: [
            "Pusat administrasi program K3 PLTGU",
            "Ruang pelatihan dan simulasi keselamatan",
            "Penyimpanan dan pengelolaan dokumen K3"
        ]
    },
    "b36": {
        number: "b36",
        name: "Area Olahraga",
        zona: "D",
        dimensi: "± 235 m²",
        description: "Area Olahraga untuk fasilitas kebugaran dan rekreasi karyawan.",
        fungsi: [
            "Fasilitas olahraga dan rekreasi karyawan",
            "Program kesehatan dan kebugaran staf",
            "Kegiatan sosial dan team building"
        ]
    },
    "b37": {
        number: "b37",
        name: "Gedung Parkir",
        zona: "D",
        dimensi: "± 311 m²",
        description: "Gedung Parkir untuk kendaraan karyawan dan tamu PLTGU.",
        fungsi: [
            "Area parkir kendaraan karyawan dan tamu",
            "Pengelolaan akses dan keamanan kendaraan",
            "Fasilitas penunjang mobilitas di area PLTGU"
        ]
    },
    "b38": {
        number: "b38",
        name: "Area Fire Water Tank",
        zona: "A",
        dimensi: "± 600 m²",
        shortDesc: "Area penyimpanan cadangan air pemadam kebakaran dan pasokan air darurat PLTGU.",
        description: "Area Fire Water Tank merupakan fasilitas penyimpanan air berkapasitas besar yang khusus didedikasikan untuk sistem pemadam kebakaran (hydrant & fire fighting system) di seluruh area PLTGU Cilegon guna menjamin keselamatan kerja dan perlindungan aset.",
        fungsi: [
            "Menyimpan cadangan air khusus untuk sistem pemadam kebakaran (Fire Fighting)",
            "Menyuplai jaringan pipa hydrant di seluruh area operasional PLTGU",
            "Menjamin pasokan air darurat saat terjadi insiden atau kebakaran"
        ]
    }
};


// ============================================================
// APPLICATION LOGIC
// ============================================================

const allImageFiles = import.meta.glob('../public/buildings/**/*.{jpg,jpeg,png,webp}');
const allImagePaths = Object.keys(allImageFiles);

document.addEventListener("DOMContentLoaded", () => {

    // ===== DIGITAL CLOCK (WIB — Cilegon, Banten) =====
    const clockTimeEl = document.getElementById('clockTime');
    if (clockTimeEl) {
        function updateClock() {
            const now = new Date();
            const options = {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
                timeZone: 'Asia/Jakarta'
            };
            clockTimeEl.textContent = now.toLocaleTimeString('id-ID', options);
        }
        updateClock();
        setInterval(updateClock, 1000);
    }

    // ===== MAP VIEW TOGGLE (Satelit ↔ Vektor) =====
    const mapViewToggle = document.getElementById('mapViewToggle');
    if (mapViewToggle) {
        const btnSatelit = document.getElementById('btnSatelit');
        const btnVektor = document.getElementById('btnVektor');
        const baseMapSatelit = document.getElementById('baseMapSatelit');
        const baseMapVektor = document.getElementById('baseMapVektor');
        const overlaySatelit = document.getElementById('mapOverlaySatelit');
        const overlayVektor = document.getElementById('mapOverlayVektor');

        let mapSwitchTimeout = null;

        function switchMapView(view) {
            if (mapSwitchTimeout) clearTimeout(mapSwitchTimeout);

            if (view === 'satelit') {
                btnSatelit.classList.add('active');
                btnVektor.classList.remove('active');
                // Base map
                baseMapSatelit.style.display = '';
                baseMapSatelit.offsetHeight; // reflow
                baseMapSatelit.classList.add('active');
                baseMapVektor.classList.remove('active');
                mapSwitchTimeout = setTimeout(() => {
                    if (!baseMapVektor.classList.contains('active')) {
                        baseMapVektor.style.display = 'none';
                    }
                }, 400);
                // SVG overlay
                if (overlaySatelit) overlaySatelit.style.display = '';
                if (overlayVektor) overlayVektor.style.display = 'none';
            } else {
                btnVektor.classList.add('active');
                btnSatelit.classList.remove('active');
                // Base map
                baseMapVektor.style.display = '';
                baseMapVektor.offsetHeight; // reflow
                baseMapVektor.classList.add('active');
                baseMapSatelit.classList.remove('active');
                mapSwitchTimeout = setTimeout(() => {
                    if (!baseMapSatelit.classList.contains('active')) {
                        baseMapSatelit.style.display = 'none';
                    }
                }, 400);
                // SVG overlay
                if (overlaySatelit) overlaySatelit.style.display = 'none';
                if (overlayVektor) overlayVektor.style.display = '';
            }
        }

        btnSatelit.addEventListener('click', () => switchMapView('satelit'));
        btnVektor.addEventListener('click', () => switchMapView('vektor'));
    }

    const buildings = document.querySelectorAll('.building-polygon');
    const modalOverlay = document.getElementById('infoModal');

    // Guard: Hanya jalankan logic interaktif jika berada di index.html
    if (!modalOverlay) return;
    const closeModalBtn = document.getElementById('closeModal');
    const tooltip = document.getElementById('tooltip');

    // Popover elements
    const popoverCard = document.getElementById('popoverCard');
    const popoverTitle = document.getElementById('popoverTitle');
    const popoverDesc = document.getElementById('popoverDesc');
    const popoverImage = document.getElementById('popoverImage');
    const popoverClose = document.getElementById('popoverClose');
    const btnDetail = document.getElementById('btnDetail');

    let currentBuildingId = null;

    // Modal content elements
    const modalNumber = document.getElementById('modalNumber');
    const modalName = document.getElementById('modalName');
    const modalDescription = document.getElementById('modalDescription');

    // Attach events to each interactive building
    buildings.forEach(building => {
        // Click → open popover card
        building.addEventListener('click', function (e) {
            e.stopPropagation();
            const buildingId = this.getAttribute('data-building-id');
            openPopover(buildingId, e.clientX, e.clientY);
            tooltip.classList.remove('visible');
        });

        // Hover → show tooltip
        building.addEventListener('mouseenter', function () {
            const data = buildingData[this.getAttribute('data-building-id')];
            if (data) {
                tooltip.textContent = data.name;
                tooltip.classList.add('visible');
            }
        });

        building.addEventListener('mousemove', function (e) {
            tooltip.style.left = (e.clientX + 16) + 'px';
            tooltip.style.top = (e.clientY - 12) + 'px';
        });

        building.addEventListener('mouseleave', function () {
            tooltip.classList.remove('visible');
        });

        // Keyboard accessibility (Enter/Space)
        building.setAttribute('tabindex', '0');
        building.setAttribute('role', 'button');
        building.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                // If opened via keyboard, position popover in center of screen
                openPopover(this.getAttribute('data-building-id'), window.innerWidth / 2, window.innerHeight / 2);
            }
        });
    });

    // Open Popover logic
    function openPopover(buildingId, x, y) {
        const data = buildingData[buildingId];
        if (!data) return;

        currentBuildingId = buildingId;
        popoverTitle.textContent = data.name;

        // Nyalakan (highlight) polygon bangunan yang dipilih di peta
        document.querySelectorAll('.building-polygon.active').forEach(el => el.classList.remove('active'));
        document.querySelectorAll(`.building-polygon[data-building-id="${buildingId}"]`).forEach(el => el.classList.add('active'));

        // Use shortDesc if available, otherwise truncate description
        let desc = data.shortDesc || data.description;
        if (!data.shortDesc && desc.length > 150) {
            desc = desc.substring(0, 150) + "...";
        }
        popoverDesc.textContent = desc;

        // Auto-load thumbnail dari allImagePaths matching folderName atau buildingId
        const folderName = buildingId + '(' + data.name.replace(/[\/\\:*?"<>|]/g, '-') + ')';
        const folderPathMatcher = `../public/buildings/${folderName}/`;
        const folderPathMatcherFallback = `../public/buildings/${buildingId}/`;

        let thumbPath = allImagePaths.find(path => {
            const lowerPath = path.toLowerCase();
            const isInsideFolder = path.startsWith(folderPathMatcher) || path.startsWith(folderPathMatcherFallback);
            const isThumb = lowerPath.endsWith('/thumb.jpg') || 
                            lowerPath.endsWith('/thumb.jpeg') || 
                            lowerPath.endsWith('/thumb.png') || 
                            lowerPath.endsWith('/thumb.webp');
            return isInsideFolder && isThumb;
        });

        // Fallback: jika tidak ada file thumb.*, gunakan gambar pertama di folder tersebut
        if (!thumbPath) {
            const folderImages = allImagePaths.filter(path => {
                return path.startsWith(folderPathMatcher) || path.startsWith(folderPathMatcherFallback);
            }).sort();
            if (folderImages.length > 0) {
                thumbPath = folderImages[0];
            }
        }

        if (thumbPath) {
            popoverImage.src = thumbPath.replace('../public', '');
            popoverImage.style.display = 'block';
        } else {
            popoverImage.style.display = 'none';
        }

        popoverCard.classList.add('visible');

        // Position logic (prevent overflowing screen)
        const popWidth = 320;
        const popHeight = popoverCard.offsetHeight || 350; // estimate if not rendered

        let posX = x + 15;
        let posY = y + 15;

        if (posX + popWidth > window.innerWidth) posX = window.innerWidth - popWidth - 15;
        if (posY + popHeight > window.innerHeight) posY = y - popHeight - 15;

        popoverCard.style.left = posX + 'px';
        popoverCard.style.top = posY + 'px';
    }

    function closePopover() {
        popoverCard.classList.remove('visible');
        document.querySelectorAll('.building-polygon.active').forEach(el => el.classList.remove('active'));
    }

    // Detail button clicks inside popover
    btnDetail.addEventListener('click', () => {
        closePopover();
        if (currentBuildingId) openModal(currentBuildingId);
    });

    // Close popover when clicking close button or outside
    popoverClose.addEventListener('click', closePopover);
    document.addEventListener('click', (e) => {
        if (!popoverCard.contains(e.target) && !e.target.closest('.building-polygon')) {
            closePopover();
        }
    });

    // Open modal with building data
    function openModal(buildingId) {
        const data = buildingData[buildingId];
        if (!data) return;

        const numVal = data.number || buildingId;
        document.getElementById('modalNumber').textContent = (numVal.startsWith('b') || numVal.startsWith('B') || numVal.startsWith('#')) ? numVal : '#' + numVal;
        document.getElementById('modalName').textContent = data.name;
        document.getElementById('modalDescription').textContent = data.description;
        document.getElementById('modalDimensi').textContent = data.dimensi || '-';

        // Zona badge (header + meta-row)
        const zonaEl = document.getElementById('modalZona');
        const zonaDetailEl = document.getElementById('modalZonaDetail');
        const zonaVal = data.zona || '-';
        [zonaEl, zonaDetailEl].forEach(el => {
            if (el) {
                el.textContent = 'Zona ' + zonaVal;
                el.className = 'zona-badge zona-' + zonaVal.toLowerCase();
            }
        });
        // Fungsi list
        const fungsiEl = document.getElementById('modalFungsi');
        fungsiEl.innerHTML = '';
        if (data.fungsi && data.fungsi.length > 0) {
            data.fungsi.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                fungsiEl.appendChild(li);
            });
            document.getElementById('modalFungsiSection').style.display = '';
        } else {
            document.getElementById('modalFungsiSection').style.display = 'none';
        }

        // Gallery — auto-detect photos from /buildings/<id>/ and sub-folders (floors)
        const galleryContent = document.getElementById('galleryContent');
        const gallerySection = document.getElementById('modalGallery');
        galleryContent.innerHTML = '';

        const folderName = buildingId + '(' + data.name.replace(/[\/\\:*?"<>|]/g, '-') + ')';
        const folderPathMatcher = `../public/buildings/${folderName}/`;
        const folderPathMatcherFallback = `../public/buildings/${buildingId}/`;

        // Categorize photos into root photos and floor-grouped photos
        const rootPhotos = [];
        const floorPhotos = {}; // key = floor name, value = array of photo objects

        allImagePaths.forEach(path => {
            if (path.startsWith(folderPathMatcher) || path.startsWith(folderPathMatcherFallback)) {
                const lowerPath = path.toLowerCase();
                if (lowerPath.endsWith('/thumb.jpg') || 
                    lowerPath.endsWith('/thumb.jpeg') || 
                    lowerPath.endsWith('/thumb.png') || 
                    lowerPath.endsWith('/thumb.webp')) {
                    return;
                }
                
                const url = path.replace('../public', '');
                const fileName = path.split('/').pop();
                const match = fileName.match(/\((.*?)\)/);
                const title = match ? match[1] : '';

                // Determine which folder the file lives in
                const relativePath = path.startsWith(folderPathMatcher) 
                    ? path.substring(folderPathMatcher.length) 
                    : path.substring(folderPathMatcherFallback.length);
                
                const pathParts = relativePath.split('/');
                
                if (pathParts.length > 1) {
                    // File is in a sub-folder (floor)
                    const floorName = pathParts[0]; // e.g., "Lt 1", "Lt 2", "Lt Dasar"
                    if (!floorPhotos[floorName]) floorPhotos[floorName] = [];
                    floorPhotos[floorName].push({ url, title, fileName, originalPath: path });
                } else {
                    // File is in root folder
                    rootPhotos.push({ url, title, fileName, originalPath: path });
                }
            }
        });

        // Sort photos by numeric prefix in filename
        const sortPhotos = (arr) => arr.sort((a, b) => {
            const numA = parseInt(a.fileName) || 999;
            const numB = parseInt(b.fileName) || 999;
            return numA - numB;
        });

        sortPhotos(rootPhotos);
        Object.values(floorPhotos).forEach(sortPhotos);

        // Sort floor names naturally
        const floorNames = Object.keys(floorPhotos).sort((a, b) => {
            // Put "Lt Dasar" first, then "Lt 1", "Lt 2", etc.
            if (a.toLowerCase().includes('dasar')) return -1;
            if (b.toLowerCase().includes('dasar')) return 1;
            const numA = parseInt(a.replace(/\D/g, '')) || 0;
            const numB = parseInt(b.replace(/\D/g, '')) || 0;
            return numA - numB;
        });

        const hasFloors = floorNames.length > 0;
        const allSections = [];

        // Prepare sections
        if (rootPhotos.length > 0) {
            allSections.push({
                title: hasFloors ? '🏢 Eksterior Bangunan' : null,
                photos: rootPhotos
            });
        }

        floorNames.forEach(floorName => {
            allSections.push({
                title: `🏠 ${floorName}`,
                photos: floorPhotos[floorName]
            });
        });

        if (allSections.length === 0) {
            gallerySection.style.display = 'none';
        } else {
            gallerySection.style.display = '';
            
            allSections.forEach((section, sectionIdx) => {
                const sectionEl = document.createElement('div');
                sectionEl.className = 'gallery-floor-section';

                // Floor title
                if (section.title) {
                    const titleEl = document.createElement('div');
                    titleEl.className = 'gallery-floor-title';
                    titleEl.textContent = section.title;
                    sectionEl.appendChild(titleEl);
                }

                // Gallery wrapper with arrows
                const wrapper = document.createElement('div');
                wrapper.className = 'gallery-wrapper';

                const prevBtn = document.createElement('button');
                prevBtn.className = 'gallery-arrow gallery-arrow--prev';
                prevBtn.innerHTML = '&#8249;';
                prevBtn.setAttribute('aria-label', 'Foto sebelumnya');

                const nextBtn = document.createElement('button');
                nextBtn.className = 'gallery-arrow gallery-arrow--next';
                nextBtn.innerHTML = '&#8250;';
                nextBtn.setAttribute('aria-label', 'Foto berikutnya');

                const slider = document.createElement('div');
                slider.className = 'gallery-slider';

                // Counter badge
                const counter = document.createElement('div');
                counter.className = 'gallery-counter';
                slider.appendChild(counter);

                // Track (horizontal flex container)
                const track = document.createElement('div');
                track.className = 'gallery-track';

                section.photos.forEach((photo, i) => {
                    const slide = document.createElement('div');
                    slide.className = 'gallery-slide';

                    const img = document.createElement('img');
                    img.src = photo.url;
                    img.alt = photo.title || `Foto ${data.name} ${i + 1}`;
                    img.addEventListener('click', () => openLightbox(photo.url, photo.title || img.alt));
                    slide.appendChild(img);

                    if (photo.title) {
                        const caption = document.createElement('div');
                        caption.className = 'gallery-caption';
                        caption.textContent = photo.title;
                        slide.appendChild(caption);
                    }

                    track.appendChild(slide);
                });

                slider.appendChild(track);
                wrapper.appendChild(prevBtn);
                wrapper.appendChild(slider);
                wrapper.appendChild(nextBtn);
                sectionEl.appendChild(wrapper);

                // Dot navigation
                const nav = document.createElement('div');
                nav.className = 'gallery-nav';

                let currentIdx = 0;
                const totalPhotos = section.photos.length;

                function updateSlider() {
                    track.style.transform = `translateX(-${currentIdx * 100}%)`;
                    counter.textContent = `${currentIdx + 1} / ${totalPhotos}`;
                    prevBtn.disabled = currentIdx === 0;
                    nextBtn.disabled = currentIdx === totalPhotos - 1;

                    nav.querySelectorAll('.gallery-dot').forEach((dot, i) => {
                        dot.classList.toggle('active', i === currentIdx);
                    });
                }

                section.photos.forEach((photo, i) => {
                    const dot = document.createElement('button');
                    dot.className = 'gallery-dot' + (i === 0 ? ' active' : '');
                    dot.setAttribute('aria-label', photo.title || `Foto ${i + 1}`);
                    dot.addEventListener('click', () => {
                        currentIdx = i;
                        updateSlider();
                    });
                    nav.appendChild(dot);
                });

                sectionEl.appendChild(nav);

                // Arrow events
                prevBtn.addEventListener('click', () => {
                    if (currentIdx > 0) {
                        currentIdx--;
                        updateSlider();
                    }
                });

                nextBtn.addEventListener('click', () => {
                    if (currentIdx < totalPhotos - 1) {
                        currentIdx++;
                        updateSlider();
                    }
                });

                // Show/hide arrows
                if (totalPhotos <= 1) {
                    prevBtn.style.display = 'none';
                    nextBtn.style.display = 'none';
                    nav.style.display = 'none';
                    counter.style.display = 'none';
                }

                // Initialize
                updateSlider();

                galleryContent.appendChild(sectionEl);
            });
        }

        modalOverlay.classList.add('active');
        modalOverlay.setAttribute('aria-hidden', 'false');
        setTimeout(() => document.getElementById('closeModal').focus(), 100);
    }

    // Close modal
    function closeModal() {
        modalOverlay.classList.remove('active');
        modalOverlay.setAttribute('aria-hidden', 'true');
    }

    closeModalBtn.addEventListener('click', closeModal);

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) closeModal();
    });

    // ===== LIGHTBOX =====
    const lightboxOverlay = document.getElementById('lightboxOverlay');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');

    function openLightbox(src, caption) {
        lightboxImage.src = src;
        lightboxCaption.textContent = caption || '';
        lightboxOverlay.classList.add('active');
    }

    function closeLightbox() {
        lightboxOverlay.classList.remove('active');
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxOverlay.addEventListener('click', (e) => {
        if (e.target === lightboxOverlay) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightboxOverlay.classList.contains('active')) closeLightbox();
    });

    // Daftar Bangunan (always visible panel inside SVG)
    const cariCepatWrapper = document.getElementById('cariCepatWrapper');
    const buildingList = document.getElementById('buildingList');

    if (cariCepatWrapper && buildingList) {

        // 1. Populate data
        const sortedBuildings = Object.entries(buildingData).sort((a, b) => {
            const numA = parseInt(a[0].replace(/[^0-9]/g, '')) || 0;
            const numB = parseInt(b[0].replace(/[^0-9]/g, '')) || 0;
            return numA - numB;
        });

        sortedBuildings.forEach(([id, data]) => {
            const li = document.createElement('li');
            li.className = 'building-item';
            li.innerHTML = `
                <div class="building-item-number">${data.number || id}</div>
                <div class="building-item-name">${data.name}</div>
            `;

            li.addEventListener('click', (e) => {
                e.stopPropagation();

                // Cari elemen polygon bangunan yang sedang aktif/terlihat di layar (Satelit atau Vektor)
                const polys = document.querySelectorAll(`.building-polygon[data-building-id="${id}"]`);
                let targetRect = null;
                for (let i = 0; i < polys.length; i++) {
                    const rect = polys[i].getBoundingClientRect();
                    if (rect && rect.width > 0 && rect.height > 0) {
                        targetRect = rect;
                        break;
                    }
                }

                if (targetRect) {
                    const x = targetRect.left + targetRect.width / 2;
                    const y = targetRect.top + targetRect.height / 2;
                    openPopover(id, x, y);
                } else {
                    openPopover(id, window.innerWidth / 2, window.innerHeight / 2);
                }
            });

            buildingList.appendChild(li);
        });
    }

    // ===== SIDE NAVBAR DRAWER LOGIC =====
    const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
    const sideNavbar = document.getElementById('sideNavbar');
    const sideNavbarClose = document.getElementById('sideNavbarClose');
    const sideNavbarBackdrop = document.getElementById('sideNavbarBackdrop');

    function openSidebar() {
        if (sideNavbar && sideNavbarBackdrop) {
            sideNavbar.classList.add('active');
            sideNavbarBackdrop.classList.add('active');
            sideNavbar.setAttribute('aria-hidden', 'false');
        }
    }

    function closeSidebar() {
        if (sideNavbar && sideNavbarBackdrop) {
            sideNavbar.classList.remove('active');
            sideNavbarBackdrop.classList.remove('active');
            sideNavbar.setAttribute('aria-hidden', 'true');
        }
    }

    if (sidebarToggleBtn) {
        sidebarToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (sideNavbar && sideNavbar.classList.contains('active')) {
                closeSidebar();
            } else {
                openSidebar();
            }
        });
    }

    if (sideNavbarClose) sideNavbarClose.addEventListener('click', closeSidebar);
    if (sideNavbarBackdrop) sideNavbarBackdrop.addEventListener('click', closeSidebar);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sideNavbar && sideNavbar.classList.contains('active')) {
            closeSidebar();
        }
    });

    // ===== SIDEBAR PORTAL LINKS & ACTIONS =====
    const btnNavDenah = document.getElementById('btnNavDenah');
    const btnNavReoc = document.getElementById('btnNavReoc');
    const btnNavSolar = document.getElementById('btnNavSolar');
    const btnNavPronia = document.getElementById('btnNavPronia');

    if (btnNavDenah) {
        btnNavDenah.addEventListener('click', (e) => {
            e.preventDefault();
            closeSidebar();
        });
    }

    // Handler untuk link portal external yang siap diisi URL dari user
    const externalNavBtns = [btnNavReoc, btnNavSolar, btnNavPronia];
    externalNavBtns.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', (e) => {
                const targetUrl = btn.getAttribute('href');
                if (!targetUrl || targetUrl === '#' || targetUrl === '') {
                    e.preventDefault();
                    const titleText = btn.querySelector('.web-nav-title') ? btn.querySelector('.web-nav-title').textContent.trim() : 'Website';
                    alert('Tautan menuju ' + titleText + ' akan segera dipasang/disinkronkan.');
                } else {
                    closeSidebar();
                }
            });
        }
    });
});
