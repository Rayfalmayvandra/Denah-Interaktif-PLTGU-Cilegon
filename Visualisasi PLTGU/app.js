/// ============================================================
// PLTGU Cilegon — Building Data
// Ref: N3-01105 Engineering Drawings / Google Maps Satellite
// ============================================================

const buildingData = {
    // ===== POWER GENERATION =====
    "gt": {
        number: "01",
        name: "Gas Turbine Building",
        description: "Bangunan utama yang menampung dua unit Gas Turbin (GT-1 & GT-2). Gas turbin menghasilkan listrik dengan membakar gas alam bertekanan tinggi. Gas buang dari proses ini (bersuhu ±500°C) dialirkan ke HRSG untuk dimanfaatkan kembali, meningkatkan efisiensi keseluruhan sistem Combined Cycle."
    },
    "hrsg1": {
        number: "02",
        name: "HRSG Unit 1",
        description: "Heat Recovery Steam Generator Unit 1 — memanfaatkan gas buang panas dari Gas Turbin 1 untuk menghasilkan uap bertekanan tinggi. Uap ini kemudian digunakan untuk menggerakkan Steam Turbin, sehingga menghasilkan listrik tambahan tanpa bahan bakar ekstra."
    },
    "hrsg2": {
        number: "03",
        name: "HRSG Unit 2",
        description: "Heat Recovery Steam Generator Unit 2 — unit kedua yang bekerja paralel dengan HRSG-1 untuk mengoptimalkan produksi uap dari gas buang Gas Turbin 2. Dilengkapi dengan economizer, evaporator, dan superheater multi-tekanan."
    },
    "st": {
        number: "04",
        name: "Steam Turbine Building",
        description: "Bangunan turbin uap yang menghasilkan listrik tambahan dari uap bertekanan tinggi yang diproduksi oleh HRSG. Merupakan komponen 'Combined Cycle' yang meningkatkan efisiensi total pembangkit dari ~35% (siklus tunggal) menjadi ~55% (siklus gabungan)."
    },
    "stack": {
        number: "05",
        name: "Cerobong Utama (Main Stack)",
        description: "Cerobong asap setinggi ±60 meter untuk membuang gas hasil pembakaran ke atmosfer setelah melewati HRSG. Dilengkapi dengan sistem CEMS (Continuous Emission Monitoring System) untuk memantau emisi NOx, SOx, dan partikulat secara real-time."
    },
    "auxboiler": {
        number: "06",
        name: "Auxiliary Boiler",
        description: "Boiler bantu yang menyediakan uap saat proses start-up atau ketika HRSG tidak beroperasi. Digunakan untuk pemanasan awal sistem, seal steam turbin uap, dan menjaga tekanan steam header pada kondisi standby."
    },

    // ===== ELECTRICAL SYSTEM =====
    "b2": {
        number: "07",
        name: "Switch Yard",
        shortDesc: "Gardu induk tegangan tinggi 150kV yang menyalurkan listrik ke jaringan transmisi PLN.",
        description: "Gardu induk tegangan tinggi 150kV (GIS — Gas Insulated Switchgear) yang menyalurkan listrik yang dihasilkan ke jaringan transmisi PLN. Dilengkapi dengan circuit breaker, disconnector, bus bar, current transformer, dan sistem proteksi relay."
    },
    "transformer": {
        number: "08",
        name: "Main Power Transformer",
        description: "Transformator daya utama yang menaikkan tegangan output generator (biasanya 11–20 kV) ke tegangan transmisi 150kV untuk disalurkan melalui switchyard ke jaringan PLN. Kapasitas disesuaikan dengan output total PLTGU."
    },

    // ===== CONTROL & ADMIN =====
    "control": {
        number: "09",
        name: "Control Room",
        description: "Ruang kendali utama PLTGU yang beroperasi 24/7. Dilengkapi dengan sistem DCS (Distributed Control System) Mark VI/VIe untuk memantau dan mengendalikan seluruh parameter operasi pembangkit secara real-time — termasuk turbin, HRSG, generator, dan sistem auxiliary."
    },
    "admin": {
        number: "10",
        name: "Common Building / Gedung Admin",
        description: "Gedung administrasi multi-lantai berisi kantor manajemen, ruang komunikasi, perpustakaan, document room, ruang rapat (Meeting Room A & B), ruang makan (mess), dapur, musala, dan toilet. (Sesuai drawing N3-01105 Sheet 06 R-3)"
    },
    "meeting": {
        number: "11",
        name: "Ruang Rapat / Annex Building",
        description: "Bangunan tambahan yang berisi ruang rapat, ruang pelatihan, dan fasilitas pendukung kegiatan operasional dan administratif PLTGU."
    },

    // ===== FUEL SYSTEM =====
    "tank1": {
        number: "12",
        name: "Fuel Oil Storage Tank 1",
        description: "Tangki penyimpanan bahan bakar minyak (HSD — High Speed Diesel) kapasitas besar sebagai cadangan bahan bakar. Dilengkapi sistem pemanas (heating coil), level indicator, temperature gauge, dan sistem keamanan termasuk dike wall penampung tumpahan."
    },
    "tank2": {
        number: "13",
        name: "Fuel Oil Storage Tank 2",
        description: "Tangki penyimpanan bahan bakar minyak kedua yang bekerja paralel dengan Tank 1. Memastikan ketersediaan bahan bakar cadangan yang cukup untuk operasi kontinyu saat pasokan gas alam terganggu (fuel switching)."
    },
    "tank3": {
        number: "14",
        name: "Fuel Oil Storage Tank 3",
        description: "Tangki penyimpanan bahan bakar minyak ketiga. Ketiga tangki ini bersama-sama menyimpan cadangan bahan bakar yang cukup untuk mengoperasikan PLTGU selama beberapa hari dalam mode dual-fuel."
    },
    "fuelgas": {
        number: "15",
        name: "Fuel Gas Receiving Station",
        description: "Stasiun penerimaan gas bumi dari jaringan pipa PGN (Perusahaan Gas Negara). Dilengkapi dengan sistem metering (pengukuran aliran), pressure regulation (pengaturan tekanan), gas filtering, gas chromatograph, dan safety shut-off valve."
    },
    "fuelpump": {
        number: "16",
        name: "Fuel Oil Pump House",
        description: "Rumah pompa bahan bakar minyak yang memompa HSD dari tangki penyimpanan ke gas turbin melalui sistem perpipaan bertekanan. Berisi forwarding pump, booster pump, dan sistem filtration."
    },
    "b1": {
        number: "17",
        name: "Distillate Oil Tank",
        shortDesc: "Fasilitas penyimpanan besar yang dari atas terlihat berbentuk bundar. Tangki ini berfungsi krusial untuk menampung bahan bakar cadangan, yang biasanya berupa minyak diesel atau High-Speed Diesel (HSD).",
        description: "Tangki penyimpanan Distillate Oil (minyak sulingan) berkapasitas lebih kecil yang digunakan sebagai bahan bakar cadangan harian (day tank) atau untuk proses start-up gas turbin sebelum dialihkan ke gas alam.",
        image: "Screenshot 2026-07-06 153448.png"
    },

    // ===== WATER & COOLING SYSTEM =====
    "wtp": {
        number: "18",
        name: "Water Treatment Plant",
        description: "Instalasi pengolahan air yang memproduksi air demineralisasi untuk HRSG dan sistem pendingin. Proses meliputi: raw water intake → clarifier → sand filter → activated carbon filter → reverse osmosis (RO) → mixed bed ion exchange → demin water storage."
    },
    "cwph": {
        number: "19",
        name: "Cooling Water Pump House",
        description: "Rumah pompa air pendingin (Circulating Water Pump House) yang menyuplai air laut atau air pendingin untuk kondensor turbin uap. Berisi pompa sirkulasi berkapasitas besar dan sistem screening/filtering untuk mencegah debris masuk ke kondensor."
    },
    "dwtank": {
        number: "20",
        name: "Demineralized Water Tank",
        description: "Tangki penyimpanan air demineralisasi (demin water) berkapasitas besar. Air ini telah dimurnikan dari mineral, ion, dan kontaminan melalui proses WTP, siap digunakan sebagai air umpan (feedwater) untuk HRSG."
    },
    "chemical": {
        number: "21",
        name: "Chemical Storage & Dosing",
        description: "Gudang penyimpanan dan sistem dosing bahan kimia yang digunakan dalam proses water treatment — termasuk HCl (asam klorida), NaOH (natrium hidroksida), anti-scaling agent, oxygen scavenger, dan bahan kimia pengondisian air lainnya."
    },
    "wastewater": {
        number: "22",
        name: "Waste Water Treatment Plant",
        description: "Instalasi pengolahan air limbah (WWTP) yang menangani seluruh air buangan dari proses pembangkit — termasuk blowdown HRSG, reject water dari RO, dan air limbah domestik. Air diolah sebelum dibuang ke lingkungan sesuai standar Baku Mutu."
    },

    // ===== SUPPORT & SAFETY =====
    "workshop": {
        number: "23",
        name: "Workshop & Maintenance",
        description: "Bengkel pemeliharaan untuk perbaikan dan perawatan peralatan pembangkit. Dilengkapi dengan peralatan kerja berat, mesin bubut, las, crane, dan ruang penyimpanan suku cadang (spare parts) untuk kegiatan maintenance rutin dan overhaul."
    },
    "warehouse": {
        number: "24",
        name: "Warehouse / Gudang",
        description: "Gudang utama untuk penyimpanan material, suku cadang, peralatan K3, dan consumable yang dibutuhkan untuk operasi dan pemeliharaan pembangkit. Dilengkapi sistem inventory management."
    },
    "firewater": {
        number: "25",
        name: "Fire Water Tank & Pump House",
        description: "Tangki air dan rumah pompa sistem pemadam kebakaran (fire fighting system). Menjangkau seluruh area pembangkit melalui jaringan hydrant, sprinkler system, foam system, dan deluge system. Pompa jockey menjaga tekanan jaringan 24/7."
    },
    "genset": {
        number: "26",
        name: "Emergency Diesel Generator",
        description: "Generator diesel darurat (Black Start Diesel Generator) yang menyediakan daya listrik saat seluruh suplai dari jaringan dan generator utama tidak tersedia. Memungkinkan PLTGU melakukan black start — proses menghidupkan pembangkit dari kondisi mati total."
    },
    "compressor": {
        number: "27",
        name: "Compressed Air System",
        description: "Sistem udara bertekanan (instrument air & service air) yang menyuplai udara kering dan bersih untuk mengoperasikan valve pneumatik, actuator, dan peralatan instrumen di seluruh area pembangkit. Dilengkapi air dryer dan receiver tank."
    },
    "engineering": {
        number: "28",
        name: "Gedung Enjiniring / Praliamar",
        description: "Gedung teknik yang digunakan untuk kegiatan engineering, perencanaan proyek, dan koordinasi teknis. Berfungsi sebagai pusat kegiatan enjiniring untuk pengembangan dan pemeliharaan fasilitas PLTGU."
    },

    // ===== ACCESS =====
    "gate": {
        number: "29",
        name: "Pos Keamanan / Gate House",
        description: "Pos jaga keamanan di pintu masuk utama PLTGU Cilegon. Berfungsi mengontrol akses masuk-keluar kendaraan dan personel, mencatat log kunjungan, serta memastikan seluruh tamu menggunakan APD (Alat Pelindung Diri) sesuai prosedur K3."
    },
    "parking": {
        number: "30",
        name: "Area Parkir",
        description: "Area parkir kendaraan untuk karyawan, tamu, dan kendaraan operasional PLTGU Cilegon. Terletak dekat dengan Common Building dan pintu masuk utama untuk kemudahan akses."
    },
    "b3": {
        number: "31",
        name: "Area Pos Jaga",
        description: "Area pos jaga keamanan tambahan di fasilitas PLTGU."
    },
    "b4": {
        number: "32",
        name: "Fire Truck Station",
        description: "Stasiun pemadam kebakaran (Fire Truck Station) untuk penanganan darurat dan siaga kebakaran di area PLTGU."
    },
    "b5": {
        number: "33",
        name: "Unit Pelayanan Kesehatan Kerja (UPPK)",
        description: "Unit Pelayanan Kesehatan Kerja (UPPK) yang menyediakan fasilitas medis dan penanganan kesehatan bagi para pekerja dan staf."
    },
    "b6": {
        number: "34",
        name: "Stasiun Gas",
        description: "Stasiun penerimaan dan pengaturan pasokan gas (Stasiun Gas)."
    },
    "b7": {
        number: "35",
        name: "Rumah Bibit",
        description: "Rumah Bibit (Greenhouse / Nursery) untuk pembibitan tanaman di area PLTGU."
    },
    "b8": {
        number: "36",
        name: "Gedung Admin",
        description: "Gedung Admin (Administrative Building) sebagai pusat kegiatan administrasi dan perkantoran."
    },
    "b9": {
        number: "37",
        name: "Safety Center",
        description: "Safety Center sebagai pusat kendali dan pemantauan K3 (Keselamatan dan Kesehatan Kerja)."
    },
    "b10": {
        number: "38",
        name: "Masjid",
        description: "Masjid untuk fasilitas ibadah karyawan dan tamu di lingkungan PLTGU."
    },
    "b11": {
        number: "39",
        name: "Area Pos Gate",
        description: "Area Pos Gate untuk pemeriksaan akses masuk dan pengamanan fasilitas."
    },
    "b12": {
        number: "40",
        name: "Area Traffo",
        description: "Area Transformator (Traffo) yang berfungsi menaikkan tegangan untuk ditransmisikan atau menurunkan tegangan untuk pemakaian sendiri."
    },
    "b13": {
        number: "41",
        name: "Area Raw Water Tank",
        description: "Area tangki penampungan air mentah (Raw Water Tank) sebelum diproses lebih lanjut oleh unit pengolahan air."
    },
    "b14": {
        number: "42",
        name: "Area Desalination A & B",
        description: "Area fasilitas desalinasi unit A & B yang mengolah air laut menjadi air tawar untuk kebutuhan pembangkit."
    },
    "b15": {
        number: "43",
        name: "Gardu Induk",
        description: "Fasilitas Gardu Induk untuk mendistribusikan aliran listrik yang dihasilkan ke jaringan transmisi PLN."
    },
    "b16": {
        number: "44",
        name: "Area Make Up Watertank",
        description: "Area tangki Make Up Water yang menampung air pengisi tambahan untuk menjaga siklus air dan uap di dalam pembangkit."
    }
};


// ============================================================
// APPLICATION LOGIC
// ============================================================

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

    const buildings = document.querySelectorAll('.building-polygon');
    const modalOverlay = document.getElementById('infoModal');
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
        
        // Use shortDesc if available, otherwise truncate description
        let desc = data.shortDesc || data.description;
        if (!data.shortDesc && desc.length > 150) {
            desc = desc.substring(0, 150) + "...";
        }
        popoverDesc.textContent = desc;

        if (data.image) {
            popoverImage.src = data.image;
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

        modalNumber.textContent = '#' + data.number;
        modalName.textContent = data.name;
        modalDescription.textContent = data.description;

        modalOverlay.classList.add('active');
        modalOverlay.setAttribute('aria-hidden', 'false');
        setTimeout(() => closeModalBtn.focus(), 100);
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

    // Cari Cepat Expanding Logic
    const cariCepatWrapper = document.getElementById('cariCepatWrapper');
    const btnCariCepat = document.getElementById('btnCariCepat');
    const buildingList = document.getElementById('buildingList');

    if (cariCepatWrapper && btnCariCepat && buildingList) {
        
        // 1. Populate data
        const sortedBuildings = Object.entries(buildingData).sort((a, b) => {
            return parseInt(a[1].number) - parseInt(b[1].number);
        });

        sortedBuildings.forEach(([id, data]) => {
            const li = document.createElement('li');
            li.className = 'building-item';
            li.innerHTML = `
                <div class="building-item-number">${data.number}</div>
                <div class="building-item-name">${data.name}</div>
            `;
            
            li.addEventListener('click', (e) => {
                e.stopPropagation();
                cariCepatWrapper.classList.remove('expanded');
                openModal(id);
            });
            
            buildingList.appendChild(li);
        });

        // 2. Toggle Expansi
        btnCariCepat.addEventListener('click', (e) => {
            e.stopPropagation();
            cariCepatWrapper.classList.toggle('expanded');
        });

        // 3. Tutup saat klik di luar
        document.addEventListener('click', (e) => {
            if (!cariCepatWrapper.contains(e.target)) {
                cariCepatWrapper.classList.remove('expanded');
            }
        });
    }
});
