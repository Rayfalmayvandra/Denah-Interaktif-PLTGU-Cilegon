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
        shortDesc: "Pos pemantauan keamanan 24 jam yang menjaga perimeter area PLTGU dan berkoordinasi langsung dengan pos gate utama.",
        description: "Area Pos Jaga merupakan pos keamanan tambahan yang ditempatkan secara strategis di titik-titik kritis perimeter PLTGU Cilegon. Petugas keamanan yang bertugas di pos ini menjalankan patroli rutin, memantau CCTV area sekitar, dan melakukan verifikasi identitas bagi siapa pun yang memasuki zona terbatas. Pos ini juga dilengkapi alat komunikasi radio yang terhubung langsung ke pusat kendali keamanan (Security Control Center) untuk respons cepat terhadap insiden.",
        fungsi: [
            "Pemantauan keamanan area PLTGU secara real-time melalui CCTV dan patroli",
            "Kontrol akses keluar-masuk kendaraan dan personel di zona terbatas",
            "Koordinasi keamanan dengan pos gate utama dan pusat kendali keamanan"
        ]
    },
    "b4": {
        number: "b4",
        name: "Fire Truck Station",
        zona: "D",
        dimensi: "± 171 m²",
        shortDesc: "Stasiun penyimpanan armada truk pemadam kebakaran yang bersiaga 24 jam untuk penanganan darurat di seluruh area PLTGU.",
        description: "Fire Truck Station adalah markas kendaraan pemadam kebakaran PLTGU Cilegon yang disiagakan 24 jam sehari, 7 hari seminggu. Stasiun ini menampung truk pemadam kebakaran lengkap dengan tangki air, foam concentrate, selang bertekanan tinggi, dan peralatan rescue. Tim pemadam yang terlatih khusus untuk kebakaran fasilitas industri energi bersiaga di sini, siap merespons dalam hitungan menit terhadap potensi kebakaran — terutama di area tangki bahan bakar, turbin, dan transformer yang memiliki risiko tinggi.",
        fungsi: [
            "Penyimpanan dan pemeliharaan armada truk pemadam kebakaran",
            "Siaga 24/7 untuk penanganan darurat kebakaran dan insiden di seluruh area PLTGU",
            "Pusat koordinasi respons darurat dengan tim Fire & Safety PLTGU"
        ]
    },
    "b5": {
        number: "b5",
        name: "Unit Pelayanan Kesehatan Kerja (UPPK)",
        zona: "D",
        dimensi: "± 111 m²",
        shortDesc: "Klinik kesehatan kerja yang menyediakan layanan medis, pertolongan pertama, dan program pemantauan kesehatan bagi seluruh karyawan PLTGU.",
        description: "Unit Pelayanan Kesehatan Kerja (UPPK) adalah fasilitas medis internal PLTGU Cilegon yang melayani kebutuhan kesehatan seluruh personel — mulai dari pemeriksaan kesehatan rutin (medical check-up) hingga penanganan darurat kecelakaan kerja. Klinik ini dilengkapi peralatan P3K standar industri, obat-obatan dasar, serta ruang perawatan sementara. UPPK juga menjalankan program kesehatan kerja preventif seperti pemantauan paparan kebisingan, debu, dan bahan kimia bagi pekerja di area operasional berisiko tinggi, sesuai regulasi K3 Kementerian Ketenagakerjaan.",
        fungsi: [
            "Pelayanan kesehatan dasar dan medical check-up rutin bagi karyawan",
            "Penanganan pertolongan pertama (P3K) pada kecelakaan kerja",
            "Program pemantauan kesehatan kerja dan pencegahan penyakit akibat kerja (PAK)"
        ]
    },
    "b6": {
        number: "b6",
        name: "Stasiun Gas",
        zona: "B",
        dimensi: "± 124 m²",
        shortDesc: "Stasiun penerimaan dan regulasi gas bumi yang mengontrol tekanan serta kualitas pasokan gas sebelum dialirkan ke turbin.",
        description: "Stasiun Gas merupakan titik penerimaan awal pasokan gas bumi dari jaringan pipa Perusahaan Gas Negara (PGN) sebelum didistribusikan ke unit-unit turbin gas PLTGU Cilegon. Di sini, gas bumi melewati serangkaian proses penting: filtrasi untuk menghilangkan partikel dan kontaminan, regulasi tekanan dari tekanan transmisi tinggi ke tekanan operasi turbin, serta pengukuran debit dan komposisi gas menggunakan chromatograph dan flow meter. Stasiun ini juga dilengkapi dengan emergency shut-off valve (ESDV) yang akan menutup aliran gas secara otomatis apabila terdeteksi anomali tekanan atau kebocoran.",
        fungsi: [
            "Penerimaan dan filtrasi gas bumi dari jaringan PGN",
            "Regulasi tekanan gas dari tekanan transmisi ke tekanan operasi turbin",
            "Pengukuran debit, kualitas, dan komposisi gas secara real-time",
            "Sistem keamanan dengan emergency shut-off valve (ESDV) otomatis"
        ]
    },
    "b7": {
        number: "b7",
        name: "Rumah Bibit",
        zona: "D",
        dimensi: "± 145 m²",
        shortDesc: "Fasilitas nursery yang mengelola pembibitan dan perawatan tanaman untuk mendukung program penghijauan kawasan PLTGU.",
        description: "Rumah Bibit (Greenhouse/Nursery) PLTGU Cilegon merupakan bukti komitmen perusahaan terhadap kelestarian lingkungan di kawasan industri. Fasilitas ini mengelola pembibitan berbagai jenis tanaman — mulai dari pohon peneduh, tanaman hias, hingga tanaman penyerap polutan — yang ditanam di sepanjang area terbuka dan perimeter PLTGU. Program penghijauan ini bukan hanya estetika, melainkan berperan penting dalam menyerap emisi CO₂, meredam kebisingan operasional, serta menjaga ekosistem lokal agar tetap lestari sesuai AMDAL (Analisis Mengenai Dampak Lingkungan).",
        fungsi: [
            "Pembibitan dan perawatan tanaman untuk program penghijauan PLTGU",
            "Penyediaan bibit tanaman penyerap polutan dan pohon peneduh",
            "Pemeliharaan vegetasi kawasan industri sesuai komitmen AMDAL"
        ]
    },
    "b8": {
        number: "b8",
        name: "Gedung Admin",
        zona: "D",
        dimensi: "± 718 m²",
        shortDesc: "Pusat kegiatan administrasi, manajemen, dan perkantoran yang menjadi 'otak' operasional non-teknis PLTGU Cilegon.",
        description: "Gedung Admin (Administrative Building) adalah pusat operasional non-teknis PLTGU Cilegon yang menaungi seluruh kegiatan administrasi, manajemen SDM, keuangan, logistik, dan hubungan eksternal. Gedung berlantai ini dilengkapi dengan ruang kerja staf, ruang rapat, ruang pimpinan, serta pusat dokumentasi dan arsip. Semua koordinasi strategis — mulai dari perencanaan overhaul, pengadaan suku cadang, pelaporan kinerja unit pembangkit, hingga koordinasi dengan PLN Pusat dan mitra kerja — dikelola dari gedung ini.",
        fungsi: [
            "Pusat administrasi, manajemen SDM, keuangan, dan logistik PLTGU",
            "Ruang kerja staf, pejabat, serta ruang rapat koordinasi",
            "Pengelolaan dokumen, arsip, dan pelaporan kinerja unit pembangkit"
        ]
    },
    "b9": {
        number: "b9",
        name: "Safety Center",
        zona: "D",
        dimensi: "± 189 m²",
        shortDesc: "Pusat kendali K3 (Keselamatan dan Kesehatan Kerja) yang mengoordinasikan seluruh program keselamatan di PLTGU.",
        description: "Safety Center adalah pusat komando Keselamatan dan Kesehatan Kerja (K3) PLTGU Cilegon. Dari sini, seluruh program keselamatan dikendalikan — termasuk penerbitan izin kerja (work permit), pemantauan kepatuhan penggunaan APD (Alat Pelindung Diri), investigasi insiden, serta pelatihan dan simulasi keadaan darurat (fire drill, emergency evacuation). Safety Center juga menyimpan inventaris lengkap APD dan peralatan keselamatan seperti SCBA (Self-Contained Breathing Apparatus), detektor gas portabel, fire blanket, dan perangkat rescue. Semua pekerja — baik karyawan internal maupun kontraktor — wajib melapor ke Safety Center sebelum memasuki area kerja berisiko tinggi.",
        fungsi: [
            "Pusat koordinasi dan penerbitan izin kerja (work permit) untuk seluruh area PLTGU",
            "Penyimpanan dan distribusi APD serta peralatan keselamatan darurat",
            "Penyelenggaraan pelatihan K3, fire drill, dan simulasi evakuasi darurat"
        ]
    },
    "b10": {
        number: "b10",
        name: "Masjid",
        zona: "D",
        dimensi: "± 245 m²",
        shortDesc: "Fasilitas ibadah yang nyaman dan representatif bagi seluruh karyawan Muslim dan tamu di lingkungan PLTGU Cilegon.",
        description: "Masjid PLTGU Cilegon merupakan fasilitas ibadah yang dibangun untuk memenuhi kebutuhan spiritual para karyawan dan tamu. Dengan kapasitas yang memadai, masjid ini mampu menampung jamaah sholat wajib 5 waktu maupun sholat Jumat. Selain sebagai tempat ibadah, masjid ini juga menjadi pusat kegiatan keagamaan seperti pengajian rutin, peringatan hari besar Islam, dan kegiatan sosial keagamaan lainnya. Keberadaan masjid di kawasan industri mencerminkan budaya kerja yang menyeimbangkan antara produktivitas dan spiritualitas.",
        fungsi: [
            "Fasilitas ibadah sholat 5 waktu dan sholat Jumat bagi karyawan Muslim",
            "Pusat kegiatan kerohanian: pengajian rutin dan peringatan hari besar Islam",
            "Tempat ibadah yang juga terbuka bagi tamu dan mitra kerja PLTGU"
        ]
    },
    "b11": {
        number: "b11",
        name: "Area Pos Gate",
        zona: "D",
        dimensi: "± 119 m²",
        shortDesc: "Gerbang utama PLTGU yang menjadi titik kontrol akses masuk-keluar seluruh personel, kendaraan, dan material.",
        description: "Area Pos Gate merupakan gerbang utama fasilitas PLTGU Cilegon yang menjadi lini pertama sistem keamanan. Setiap orang dan kendaraan yang memasuki atau meninggalkan kawasan PLTGU wajib melewati pemeriksaan identitas di pos ini. Petugas keamanan memverifikasi kartu identitas karyawan, surat izin masuk tamu/kontraktor, serta memeriksa muatan kendaraan pengangkut material. Pos Gate juga dilengkapi palang otomatis, kamera CCTV, dan sistem pencatatan digital yang merekam seluruh aktivitas keluar-masuk sebagai bagian dari audit trail keamanan fasilitas vital.",
        fungsi: [
            "Pemeriksaan identitas dan verifikasi akses masuk personel dan tamu",
            "Pencatatan dan monitoring keluar-masuk kendaraan dan material",
            "Pengamanan gerbang utama dengan CCTV, palang otomatis, dan log digital"
        ]
    },
    "b12": {
        number: "b12",
        name: "Area Traffo",
        zona: "A",
        dimensi: "± 2.145 m²",
        shortDesc: "Area transformator utama yang menaikkan tegangan listrik dari generator ke 150kV untuk disalurkan ke jaringan transmisi PLN.",
        description: "Area Transformator (Traffo) adalah jantung sistem penyaluran tenaga listrik PLTGU Cilegon. Di area seluas lebih dari 2.000 m² ini terdapat unit-unit transformator utama (Main Power Transformer) yang bertugas menaikkan tegangan output generator — dari tegangan menengah (sekitar 11-20 kV) ke tegangan transmisi tinggi 150 kV — agar listrik dapat disalurkan efisien ke jaringan PLN melalui Switch Yard. Selain itu, terdapat pula Station Service Transformer yang menurunkan tegangan untuk kebutuhan pemakaian sendiri (auxiliary power) fasilitas PLTGU. Area ini dilengkapi sistem pendingin oli transformator, fire protection khusus, serta bunding (tanggul penahan) untuk menampung kebocoran minyak transformator.",
        fungsi: [
            "Menaikkan tegangan output generator ke 150kV melalui Main Power Transformer",
            "Menurunkan tegangan untuk kebutuhan auxiliary power seluruh fasilitas PLTGU",
            "Distribusi tenaga listrik ke seluruh area dengan sistem proteksi dan pendinginan"
        ]
    },
    "b13": {
        number: "b13",
        name: "Area Raw Water Tank",
        zona: "C",
        dimensi: "± 468 m²",
        shortDesc: "Tangki penampungan air mentah yang menjadi buffer stok sebelum air diproses lebih lanjut oleh unit desalinasi dan pengolahan air.",
        description: "Area Raw Water Tank merupakan fasilitas penampungan air mentah (raw water) yang berfungsi sebagai buffer antara sumber air baku dan unit pengolahan air PLTGU Cilegon. Air mentah yang diterima dari sumber air baku (air laut melalui Water Intake atau air tawar dari PDAM) ditampung sementara di tangki ini sebelum dialirkan ke unit Desalination Plant atau unit demineralisasi untuk diolah menjadi air proses berkualitas tinggi. Tangki ini memastikan pasokan air tetap tersedia secara kontinu meskipun terjadi fluktuasi debit atau gangguan pada sumber air baku.",
        fungsi: [
            "Penampungan sementara air mentah dari sumber air baku (laut/PDAM)",
            "Buffer stok air untuk menjamin kontinuitas pasokan ke unit pengolahan",
            "Pemerataan debit air masuk sebelum proses desalinasi dan demineralisasi"
        ]
    },
    "b14": {
        number: "b14",
        name: "Area Desalination A & B",
        zona: "C",
        dimensi: "± 1.693 m²",
        shortDesc: "Fasilitas desalinasi ganda (unit A & B) yang mengolah air laut menjadi air tawar murni untuk kebutuhan siklus uap pembangkit.",
        description: "Area Desalination A & B adalah fasilitas pengolahan air berteknologi tinggi yang mengubah air laut menjadi air tawar berkualitas tinggi melalui proses Reverse Osmosis (RO). PLTGU Cilegon memiliki dua unit desalinasi (A dan B) yang beroperasi secara paralel untuk memenuhi kebutuhan air demineralisasi yang sangat besar — terutama untuk siklus air-uap di HRSG (Heat Recovery Steam Generator) dan sistem pendinginan. Air hasil desalinasi ini memiliki tingkat kemurnian tinggi (Total Dissolved Solids sangat rendah) sehingga aman digunakan dalam boiler bertekanan tinggi tanpa risiko pembentukan kerak atau korosi.",
        fungsi: [
            "Mengolah air laut menjadi air tawar murni melalui teknologi Reverse Osmosis (RO)",
            "Menyediakan air demineralisasi berkualitas tinggi untuk siklus uap HRSG",
            "Operasi ganda (unit A & B) untuk menjamin keandalan pasokan air proses"
        ]
    },
    "b15": {
        number: "b15",
        name: "Gardu Induk",
        zona: "A",
        dimensi: "± 340 m²",
        shortDesc: "Fasilitas gardu induk bertegangan tinggi yang menjadi titik interkoneksi antara PLTGU Cilegon dan jaringan transmisi PLN.",
        description: "Gardu Induk PLTGU Cilegon merupakan fasilitas kelistrikan tegangan tinggi yang menjadi titik interkoneksi antara pembangkit dan jaringan transmisi PLN 150 kV. Di sini terdapat peralatan switching (pemutus tenaga / circuit breaker), bus bar, disconnecting switch, current & voltage transformer, serta sistem proteksi relay digital yang memonitor seluruh parameter kelistrikan secara real-time. Gardu induk ini memastikan bahwa daya listrik yang dihasilkan PLTGU dapat disalurkan secara aman, stabil, dan terkontrol ke jaringan eksternal — sekaligus mampu mengisolasi unit pembangkit dari jaringan apabila terjadi gangguan (fault).",
        fungsi: [
            "Titik interkoneksi dan penyaluran daya listrik 150kV ke jaringan transmisi PLN",
            "Pengamanan sistem tenaga melalui proteksi relay digital dan circuit breaker",
            "Switching, sinkronisasi, dan isolasi jaringan transmisi saat terjadi gangguan"
        ]
    },
    "b16": {
        number: "b16",
        name: "Area Make Up Watertank",
        zona: "C",
        dimensi: "± 973 m²",
        shortDesc: "Tangki penyimpanan air pengisi tambahan (make-up water) yang menjaga keseimbangan volume air dalam siklus uap HRSG.",
        description: "Area Make Up Water Tank menampung cadangan air demineralisasi (demin water) yang siap digunakan sebagai air pengisi tambahan (make-up water) dalam siklus air-uap tertutup PLTGU. Dalam operasi normal, siklus uap mengalami kehilangan air secara alami melalui blow-down boiler, kebocoran kecil pada seal, dan penguapan. Make-up water tank menyediakan pasokan pengganti untuk menjaga level air di HRSG dan deaerator tetap optimal. Kualitas air di tangki ini dijaga sangat ketat — dengan konduktivitas sangat rendah dan pH terkontrol — agar tidak merusak tube boiler yang beroperasi pada tekanan dan suhu tinggi.",
        fungsi: [
            "Penyimpanan air demineralisasi berkualitas tinggi untuk siklus uap HRSG",
            "Penggantian volume air yang hilang akibat blow-down, kebocoran, dan penguapan",
            "Cadangan air demin untuk situasi darurat dan proses start-up pembangkit"
        ]
    },
    "b17": {
        number: "b17",
        name: "Traffo Cadangan",
        zona: "C",
        dimensi: "± 150 m²",
        shortDesc: "Transformator cadangan yang siap menggantikan transformator utama saat terjadi kerusakan, menjamin keandalan sistem kelistrikan PLTGU.",
        description: "Traffo Cadangan (Spare Transformer) merupakan unit transformator siap pakai yang disimpan sebagai backup apabila salah satu transformator utama mengalami kerusakan atau memerlukan pemeliharaan besar (overhaul). Kerusakan transformator utama berpotensi menghentikan operasi unit pembangkit secara total selama berminggu-minggu karena waktu pengadaan transformator baru sangat lama. Dengan adanya Traffo Cadangan, downtime dapat diminimalkan karena unit ini dapat langsung dipasang menggantikan transformator bermasalah — sebuah strategi yang lazim di pembangkit listrik berdaya besar untuk menjaga keandalan pasokan listrik ke jaringan PLN.",
        fungsi: [
            "Cadangan siap pasang saat transformator utama mengalami kerusakan atau overhaul",
            "Meminimalkan downtime dan menjaga keandalan pasokan listrik ke jaringan PLN",
            "Memastikan kontinuitas operasi sistem kelistrikan PLTGU tanpa gangguan berkepanjangan"
        ]
    },
    "b18": {
        number: "b18",
        name: "Fire Pump Station",
        zona: "C",
        dimensi: "± 297 m²",
        shortDesc: "Stasiun pompa pemadam kebakaran yang memompa air bertekanan tinggi ke seluruh jaringan hydrant dan sprinkler PLTGU.",
        description: "Fire Pump Station adalah jantung dari sistem proteksi kebakaran (Fire Fighting System) PLTGU Cilegon. Stasiun ini menampung pompa-pompa bertekanan tinggi — termasuk Electric Fire Pump, Diesel Fire Pump (yang dapat beroperasi saat listrik padam), dan Jockey Pump (untuk menjaga tekanan konstan di jaringan pipa) — yang memompa air dari Fire Water Tank ke seluruh jaringan pipa hydrant, sprinkler, dan water spray di area pembangkit. Sistem ini dirancang berdasarkan standar NFPA (National Fire Protection Association) dan diuji secara berkala untuk memastikan kesiapan 100% saat dibutuhkan.",
        fungsi: [
            "Memompa air bertekanan tinggi ke sistem hydrant dan sprinkler di seluruh area PLTGU",
            "Operasi otomatis (Diesel Fire Pump) saat listrik padam untuk menjamin kesiapan",
            "Jockey Pump untuk menjaga tekanan konstan di jaringan pipa pemadam kebakaran"
        ]
    },
    "b19": {
        number: "b19",
        name: "Area Water Intake",
        zona: "C",
        dimensi: "± 720 m²",
        shortDesc: "Fasilitas pengambilan air baku dari laut yang dilengkapi sistem screening dan pompa transfer untuk memasok kebutuhan air seluruh PLTGU.",
        description: "Area Water Intake merupakan titik pengambilan air baku dari laut yang menjadi sumber utama pasokan air untuk seluruh proses di PLTGU Cilegon. Fasilitas ini dilengkapi dengan travelling screen (penyaring otomatis) untuk menahan sampah, rumput laut, ubur-ubur, dan organisme laut lainnya agar tidak masuk ke sistem perpipaan. Pompa transfer berkapasitas besar mengalirkan air baku ke unit Chlorination Plant (untuk mencegah bio-fouling) dan selanjutnya ke Desalination Plant untuk diolah menjadi air tawar. Desain Water Intake memperhitungkan pasang-surut laut, gelombang, serta perlindungan terhadap korosi air laut.",
        fungsi: [
            "Pengambilan air laut sebagai sumber air baku utama PLTGU",
            "Penyaringan awal (travelling screen) untuk menahan debris dan biota laut",
            "Pompa transfer air baku ke unit klorinasi dan desalinasi"
        ]
    },
    "b20": {
        number: "b20",
        name: "Area HRSG",
        zona: "A",
        dimensi: "± 3.360 m²",
        shortDesc: "Jantung sistem Combined Cycle — memanfaatkan gas buang panas turbin gas untuk menghasilkan uap bertekanan tinggi yang menggerakkan steam turbin.",
        description: "Area Heat Recovery Steam Generator (HRSG) adalah komponen kunci yang membuat PLTGU menjadi pembangkit 'Combined Cycle' — yaitu siklus gabungan gas dan uap. HRSG menangkap panas dari gas buang turbin gas yang bersuhu sekitar 500-600°C (yang normalnya terbuang percuma di PLTG biasa) dan menggunakannya untuk memanaskan air menjadi uap bertekanan tinggi. Uap ini kemudian menggerakkan Steam Turbin untuk menghasilkan listrik tambahan — tanpa membakar bahan bakar ekstra. Dengan HRSG, efisiensi keseluruhan PLTGU meningkat drastis dari sekitar 35% (siklus tunggal gas) menjadi 50-60% (siklus gabungan). Area HRSG Cilegon juga mencakup Control Room sebagai pusat pengendalian operasi seluruh unit pembangkit.",
        fungsi: [
            "Mengkonversi panas gas buang turbin gas (~500-600°C) menjadi uap bertekanan tinggi",
            "Menghasilkan uap untuk menggerakkan steam turbin — listrik tambahan tanpa bahan bakar ekstra",
            "Meningkatkan efisiensi keseluruhan sistem Combined Cycle dari ~35% menjadi ~50-60%"
        ]
    },
    "b21": {
        number: "b21",
        name: "Condensate Water Tank",
        zona: "A",
        dimensi: "± 2.900 m²",
        shortDesc: "Tangki besar yang menampung air kondensat hasil pendinginan uap setelah melewati steam turbin, untuk disirkulasikan kembali ke HRSG.",
        description: "Condensate Water Tank merupakan tangki penampungan air kondensat — yaitu uap yang telah dikondensasikan (diubah kembali menjadi air cair) setelah menggerakkan steam turbin dan melewati kondenser. Air kondensat ini masih memiliki kualitas yang sangat baik (hampir murni) sehingga sangat berharga untuk disirkulasikan kembali ke HRSG melalui sistem Condensate Extraction Pump (CEP) dan deaerator. Tangki ini berperan vital dalam menjaga keseimbangan siklus air-uap tertutup pembangkit — memastikan pasokan air untuk boiler selalu tersedia dan meminimalkan kebutuhan make-up water.",
        fungsi: [
            "Menampung air kondensat berkualitas tinggi dari kondenser steam turbin",
            "Menyirkulasikan air kondensat kembali ke HRSG melalui CEP dan deaerator",
            "Menjaga keseimbangan dan efisiensi siklus air-uap tertutup pembangkit"
        ]
    },
    "b22": {
        number: "b22",
        name: "Area Bangunan K3 Kecil",
        zona: "C",
        dimensi: "± 205 m²",
        shortDesc: "Pos keselamatan lapangan yang menyediakan APD, peralatan P3K, dan titik evakuasi darurat di area operasi teknis PLTGU.",
        description: "Area Bangunan K3 Kecil merupakan pos keselamatan satelit yang ditempatkan di dekat zona operasi teknis PLTGU Cilegon. Berbeda dengan Safety Center utama yang berfungsi sebagai pusat komando K3, bangunan K3 kecil ini lebih bersifat operasional lapangan — menyediakan akses cepat ke APD cadangan (helm, sarung tangan, kacamata, earplug), kotak P3K, fire extinguisher portabel, serta berfungsi sebagai titik kumpul (assembly point) saat simulasi evakuasi darurat. Keberadaan pos ini memastikan bahwa peralatan keselamatan selalu dalam jangkauan bagi pekerja di area yang jauh dari gedung K3 utama.",
        fungsi: [
            "Penyediaan APD cadangan dan peralatan P3K di dekat area kerja lapangan",
            "Pos pemantauan keselamatan kerja operasional dan titik kumpul evakuasi",
            "Penyimpanan fire extinguisher portabel dan peralatan tanggap darurat"
        ]
    },
    "b23": {
        number: "b23",
        name: "Area Clorination Plant",
        zona: "C",
        dimensi: "± 1.840 m²",
        shortDesc: "Fasilitas injeksi klorin yang mencegah pertumbuhan biota laut (bio-fouling) pada pipa kondenser dan sistem pendingin PLTGU.",
        description: "Chlorination Plant merupakan fasilitas vital yang melindungi sistem pendinginan PLTGU dari ancaman bio-fouling — yaitu pertumbuhan organisme laut seperti kerang (barnacle), ganggang, dan teritip di dalam pipa kondenser dan saluran air pendingin. Tanpa klorinasi, organisme ini akan menyumbat pipa, mengurangi efisiensi perpindahan panas di kondenser, dan akhirnya menurunkan daya output pembangkit. Fasilitas ini memproduksi dan menginjeksikan larutan sodium hypochlorite (NaOCl) ke air laut yang masuk melalui Water Intake. Dosis klorin dikontrol secara presisi agar efektif membunuh biota laut namun tetap memenuhi baku mutu lingkungan saat air buangan dikembalikan ke laut.",
        fungsi: [
            "Produksi dan injeksi sodium hypochlorite (NaOCl) ke air pendingin laut",
            "Pencegahan bio-fouling (kerang, ganggang) pada pipa kondenser dan cooling system",
            "Kontrol dosis klorin agar tetap memenuhi baku mutu lingkungan"
        ]
    },
    "b24": {
        number: "b24",
        name: "Area Solar Panel",
        zona: "B",
        dimensi: "± 250 m²",
        shortDesc: "Instalasi panel surya yang memanfaatkan energi matahari untuk memasok sebagian kebutuhan listrik fasilitas penunjang PLTGU.",
        description: "Area Solar Panel adalah instalasi pembangkit listrik tenaga surya (PLTS) di lingkungan PLTGU Cilegon yang merepresentasikan komitmen perusahaan terhadap diversifikasi energi dan transisi energi bersih. Panel-panel fotovoltaik (PV) yang terpasang mengkonversi cahaya matahari secara langsung menjadi energi listrik untuk memasok sebagian kebutuhan listrik fasilitas penunjang — seperti penerangan area, gedung administrasi, dan sistem monitoring. Meskipun kapasitasnya kecil dibandingkan output utama PLTGU, keberadaan PLTS ini mencerminkan keseriusan dalam implementasi program Environmental, Social, and Governance (ESG) serta kontribusi terhadap target bauran energi terbarukan nasional.",
        fungsi: [
            "Pembangkitan listrik bersih dari energi surya melalui panel fotovoltaik (PV)",
            "Memasok kebutuhan listrik fasilitas penunjang (penerangan, gedung, monitoring)",
            "Kontribusi terhadap target energi terbarukan dan program ESG perusahaan"
        ]
    },
    "b25": {
        number: "b25",
        name: "Area Gudang Penyimpan Pelumas",
        zona: "C",
        dimensi: "± 1.870 m²",
        shortDesc: "Gudang penyimpanan oli pelumas berkapasitas besar untuk turbin gas, steam turbin, generator, dan seluruh peralatan berputar PLTGU.",
        description: "Area Gudang Penyimpan Pelumas (Lubricant Storage) adalah fasilitas logistik yang menampung seluruh jenis minyak pelumas yang dibutuhkan operasional PLTGU Cilegon. Turbin gas, steam turbin, generator, dan ratusan peralatan berputar (rotating equipment) lainnya memerlukan pelumasan yang tepat dan berkualitas tinggi untuk meminimalkan gesekan, meredam panas, dan mencegah keausan bearing. Gudang ini menyimpan berbagai grade oli — mulai dari turbine oil, hydraulic oil, gear oil, hingga grease — dalam drum dan tangki curah dengan sistem manajemen stok terkomputerisasi. Area ini juga mengelola oli bekas (used oil) untuk didaur ulang atau dibuang sesuai regulasi limbah B3.",
        fungsi: [
            "Penyimpanan berbagai grade oli pelumas untuk turbin, generator, dan rotating equipment",
            "Manajemen stok oli pelumas dengan sistem inventori terkomputerisasi",
            "Pengelolaan dan pembuangan limbah oli bekas sesuai regulasi B3"
        ]
    },
    "b26": {
        number: "b26",
        name: "Area Air Limbah WWTP",
        zona: "C",
        dimensi: "± 1.000 m²",
        shortDesc: "Unit pengolahan air limbah (WWTP) yang memproses seluruh air buangan PLTGU agar memenuhi baku mutu lingkungan sebelum dibuang.",
        description: "Waste Water Treatment Plant (WWTP) adalah fasilitas pengolahan air limbah yang memproses seluruh air buangan dari berbagai sumber di PLTGU Cilegon — termasuk limbah blow-down boiler, regenerasi resin demineralizer, pencucian peralatan, limbah laboratorium, dan limbah domestik. Proses pengolahan meliputi netralisasi pH, koagulasi-flokulasi, sedimentasi, filtrasi, dan desinfeksi. Air hasil olahan (effluent) dipantau secara real-time melalui parameter pH, TSS (Total Suspended Solids), COD, BOD, dan logam berat menggunakan online analyzer. Effluent hanya boleh dibuang ke lingkungan apabila telah memenuhi baku mutu sesuai Peraturan Menteri Lingkungan Hidup dan Kehutanan (KLHK).",
        fungsi: [
            "Pengolahan air limbah proses (blow-down, regenerasi resin, pencucian) sebelum dibuang",
            "Netralisasi kandungan kimia berbahaya melalui proses koagulasi, filtrasi, dan desinfeksi",
            "Pemantauan kualitas effluent secara real-time untuk memenuhi baku mutu KLHK"
        ]
    },
    "b27": {
        number: "b27",
        name: "Area Air Limbah Desalinasi",
        zona: "C",
        dimensi: "± 3.500 m²",
        shortDesc: "Area pengolahan dan pembuangan brine — air garam pekat sisa proses desalinasi — dengan kontrol dampak lingkungan ketat.",
        description: "Area Air Limbah Desalinasi merupakan fasilitas penanganan brine (air garam pekat) yang merupakan produk sampingan dari proses Reverse Osmosis di Desalination Plant. Brine memiliki konsentrasi garam yang jauh lebih tinggi daripada air laut normal dan mengandung sisa bahan kimia proses (anti-scalant, anti-fouling), sehingga tidak boleh langsung dibuang ke laut tanpa penanganan. Di area ini, brine diencerkan (dilution) dengan air laut hingga konsentrasinya mendekati kondisi alamiah, kemudian disalurkan ke titik pembuangan (outfall) yang dirancang untuk dispersi optimal. Pemantauan berkala terhadap salinitas, suhu, dan ekosistem laut di sekitar outfall dilakukan untuk memastikan tidak ada dampak negatif terhadap biota laut.",
        fungsi: [
            "Penanganan dan pengenceran brine (air garam pekat) dari proses desalinasi RO",
            "Penyaluran brine ke outfall dengan sistem dispersi untuk meminimalkan dampak lingkungan",
            "Pemantauan berkala terhadap salinitas, suhu, dan ekosistem laut sekitar"
        ]
    },
    "b28": {
        number: "b28",
        name: "Area Pertamina / Gas Metering Station",
        zona: "B",
        dimensi: "± 1.770 m²",
        shortDesc: "Stasiun pengukuran gas bumi (custody transfer metering) dan area penerimaan bahan bakar minyak dari Pertamina.",
        description: "Area Pertamina / Gas Metering Station merupakan fasilitas yang memiliki dua fungsi penting. Pertama, sebagai Gas Metering Station (stasiun pengukuran gas) yang melakukan custody transfer metering — yaitu pengukuran volume gas bumi yang diterima dari PGN/Pertamina dengan akurasi tinggi untuk keperluan perhitungan pembayaran dan verifikasi kontrak pasokan gas. Peralatan metering meliputi ultrasonic flow meter, gas chromatograph (untuk analisis komposisi gas), serta pressure dan temperature transmitter. Kedua, area ini juga berfungsi sebagai titik penerimaan bahan bakar minyak (HSD) dari Pertamina melalui fasilitas unloading untuk mengisi Distillate Oil Tank sebagai bahan bakar cadangan.",
        fungsi: [
            "Custody transfer metering: pengukuran volume gas bumi untuk verifikasi kontrak dan pembayaran",
            "Analisis komposisi dan kualitas gas bumi menggunakan gas chromatograph",
            "Penerimaan dan pemeriksaan kualitas bahan bakar HSD dari Pertamina"
        ]
    },
    "b29": {
        number: "b29",
        name: "Gudang & Workshop",
        zona: "C",
        dimensi: "± 648 m²",
        shortDesc: "Pusat penyimpanan suku cadang dan bengkel pemeliharaan untuk perbaikan, fabrikasi, dan modifikasi peralatan mekanik PLTGU.",
        description: "Gudang & Workshop adalah fasilitas terpadu yang menggabungkan fungsi logistik dan bengkel teknis. Bagian gudang menyimpan ribuan item suku cadang (spare parts) — mulai dari bearing, gasket, valve, instrumen, hingga komponen turbin — yang dikategorikan dan dikelola menggunakan sistem manajemen material terkomputerisasi (CMMS). Bagian workshop dilengkapi mesin bubut, milling, gerinda, las (welding), dan peralatan pengujian non-destructive testing (NDT) untuk perbaikan, fabrikasi, dan modifikasi komponen mekanik secara in-house. Keberadaan workshop ini menghemat waktu dan biaya dibandingkan harus mengirim komponen ke bengkel eksternal.",
        fungsi: [
            "Penyimpanan dan manajemen ribuan item suku cadang menggunakan sistem CMMS",
            "Bengkel perbaikan, fabrikasi, dan modifikasi komponen mekanik in-house",
            "Pengujian non-destructive testing (NDT) dan pengelasan (welding) spesialis"
        ]
    },
    "b30": {
        number: "b30",
        name: "Gas Station",
        zona: "C",
        dimensi: "± 770 m²",
        shortDesc: "SPBU internal untuk pengisian bahan bakar kendaraan operasional dan dinas yang beroperasi di lingkungan PLTGU.",
        description: "Gas Station adalah stasiun pengisian bahan bakar (SPBU internal) khusus untuk kendaraan operasional yang beroperasi di lingkungan PLTGU Cilegon. Kendaraan-kendaraan seperti truk pengangkut, crane mobile, forklift, mobil patroli keamanan, dan kendaraan dinas mengisi bahan bakar di sini. Fasilitas ini dilengkapi tangki penyimpanan BBM bawah tanah, dispenser otomatis dengan flow meter terakreditasi, serta sistem pencatatan konsumsi BBM per kendaraan untuk keperluan audit dan efisiensi biaya operasional. Area ini juga memenuhi standar keselamatan SPBU — termasuk grounding, fire extinguisher, dan larangan merokok.",
        fungsi: [
            "Pengisian BBM untuk kendaraan operasional, crane, forklift, dan kendaraan dinas",
            "Penyimpanan BBM dalam tangki bawah tanah dengan sistem keamanan standar SPBU",
            "Pencatatan dan monitoring konsumsi BBM per kendaraan untuk efisiensi operasional"
        ]
    },
    "b31": {
        number: "b31",
        name: "Station Gas Compressor",
        zona: "C",
        dimensi: "± 614 m²",
        shortDesc: "Fasilitas kompresor yang meningkatkan tekanan gas bumi hingga mencapai tekanan operasi yang dibutuhkan turbin gas.",
        description: "Station Gas Compressor merupakan fasilitas yang menampung kompresor-kompresor berkapasitas besar untuk menaikkan tekanan gas bumi dari tekanan jaringan pipa distribusi ke tekanan yang dibutuhkan oleh combustor turbin gas (biasanya berkisar 20-30 bar). Gas bumi yang diterima dari Gas Metering Station seringkali belum mencapai tekanan yang cukup untuk injeksi langsung ke ruang bakar turbin, sehingga diperlukan kompresi tambahan. Stasiun ini menggunakan kompresor tipe centrifugal atau reciprocating yang dilengkapi sistem pendinginan (intercooler/aftercooler), separator, dan kontrol otomatis untuk menjaga tekanan output tetap stabil sesuai kebutuhan masing-masing unit turbin gas.",
        fungsi: [
            "Kompresi gas bumi dari tekanan distribusi ke tekanan operasi turbin gas (~20-30 bar)",
            "Pendinginan gas terkompresi menggunakan intercooler/aftercooler",
            "Pengaturan dan stabilisasi tekanan gas ke masing-masing unit turbin secara otomatis"
        ]
    },
    "b32": {
        number: "b32",
        name: "Area Gasena",
        zona: "C",
        dimensi: "± 1.235 m²",
        shortDesc: "Fasilitas penyimpanan dan distribusi gas industri (nitrogen, udara instrumen) untuk mendukung operasional dan pemeliharaan PLTGU.",
        description: "Area Gasena merupakan fasilitas pengelolaan gas-gas industri yang esensial bagi operasional PLTGU Cilegon. Gas nitrogen (N₂) merupakan kebutuhan utama — digunakan untuk proses purging (pembersihan) pipa-pipa gas bumi dan bahan bakar sebelum commissioning atau setelah shutdown, blanketing tangki, serta sebagai gas inert untuk mencegah ledakan pada area yang mengandung gas mudah terbakar. Selain nitrogen, area ini juga mengelola pasokan udara instrumen (instrument air) bertekanan yang telah dikeringkan dan difiltrasi untuk mengoperasikan seluruh katup pneumatik dan instrumen kontrol di pembangkit. Fasilitas penyimpanan berupa tabung gas bertekanan tinggi (cylinder) dan tangki curah.",
        fungsi: [
            "Penyimpanan dan distribusi gas nitrogen (N₂) untuk purging, blanketing, dan inerting",
            "Penyediaan udara instrumen bertekanan untuk katup pneumatik dan instrumen kontrol",
            "Pengelolaan gas industri bertekanan tinggi untuk kebutuhan operasional dan pemeliharaan"
        ]
    },
    "b33": {
        number: "b33",
        name: "Area Titik Pembuangan (Outfall)",
        zona: "D",
        dimensi: "± 800 m²",
        shortDesc: "Titik akhir pembuangan air dari sistem pendingin dan WWTP ke laut, dirancang untuk dispersi optimal dengan dampak lingkungan minimal.",
        description: "Area Titik Pembuangan (Outfall) merupakan struktur infrastruktur di tepi laut yang menjadi titik akhir pembuangan air dari seluruh sistem PLTGU Cilegon — termasuk air pendingin kondenser yang telah digunakan, effluent dari WWTP, dan brine dari unit desalinasi. Outfall dirancang secara khusus dengan sistem diffuser bawah laut yang menyebarkan (mendispersi) air buangan secara merata ke badan air penerima, sehingga perbedaan suhu dan konsentrasi kimia dengan air laut sekitar dapat diminimalkan. Program pemantauan lingkungan berkala dilakukan di sekitar outfall — mengukur suhu, salinitas, kualitas air, dan kesehatan ekosistem laut — untuk memastikan kepatuhan terhadap izin pembuangan dan baku mutu lingkungan.",
        fungsi: [
            "Titik pembuangan air pendingin, effluent WWTP, dan brine ke laut melalui diffuser",
            "Dispersi optimal air buangan untuk meminimalkan dampak suhu dan kimia terhadap laut",
            "Pemantauan berkala kualitas air dan ekosistem laut di sekitar outfall"
        ]
    },
    "b34": {
        number: "b34",
        name: "Gedung Enjinering",
        zona: "D",
        dimensi: "± 180 m²",
        shortDesc: "Pusat kegiatan teknis dan engineering support yang mengelola perencanaan pemeliharaan, dokumen teknis, dan proyek engineering PLTGU.",
        description: "Gedung Enjinering merupakan markas tim engineering PLTGU Cilegon yang bertanggung jawab atas seluruh aspek teknis pembangkit. Tim ini mengelola dokumen-dokumen teknis krusial — P&ID (Piping and Instrumentation Diagram), wiring diagram, engineering drawing, datasheet peralatan, manual operasi dan pemeliharaan — serta merencanakan jadwal pemeliharaan preventif, predictive, dan overhaul. Dari gedung ini pula dikoordinasikan proyek-proyek modifikasi dan perbaikan besar (retrofit), analisis kegagalan peralatan (root cause failure analysis), serta evaluasi kinerja unit pembangkit menggunakan data performance test.",
        fungsi: [
            "Pusat pengelolaan dokumen teknis: P&ID, drawing, datasheet, dan manual O&M",
            "Perencanaan jadwal pemeliharaan preventif, predictive, dan overhaul unit pembangkit",
            "Koordinasi proyek engineering, analisis kegagalan (RCFA), dan evaluasi kinerja"
        ]
    },
    "b35": {
        number: "b35",
        name: "Gedung K3",
        zona: "D",
        dimensi: "± 156 m²",
        shortDesc: "Gedung pusat administrasi program K3 yang mengelola kebijakan keselamatan, pelatihan, dan dokumentasi K3 seluruh PLTGU.",
        description: "Gedung K3 merupakan pusat administrasi program Keselamatan dan Kesehatan Kerja (K3) yang mengelola seluruh aspek kebijakan, prosedur, dan dokumentasi K3 PLTGU Cilegon. Di sini disusun Standard Operating Procedure (SOP) keselamatan, Job Safety Analysis (JSA), HIRA (Hazard Identification and Risk Assessment), serta pengelolaan statistik kecelakaan kerja (lost time injury, near miss, dll). Gedung ini juga dilengkapi ruang pelatihan untuk program induksi K3 bagi karyawan baru dan kontraktor, simulasi pertolongan pertama, serta pelatihan penggunaan APAR (Alat Pemadam Api Ringan) dan alat pelindung diri (APD).",
        fungsi: [
            "Pusat penyusunan SOP, JSA, dan HIRA untuk seluruh aktivitas PLTGU",
            "Ruang pelatihan dan simulasi K3: induksi, P3K, penggunaan APAR dan APD",
            "Pengelolaan statistik keselamatan dan dokumentasi audit K3"
        ]
    },
    "b36": {
        number: "b36",
        name: "Area Olahraga",
        zona: "D",
        dimensi: "± 235 m²",
        shortDesc: "Fasilitas olahraga dan rekreasi karyawan untuk mendukung program kesehatan, kebugaran, dan kebersamaan di lingkungan PLTGU.",
        description: "Area Olahraga merupakan fasilitas rekreasi dan kebugaran yang disediakan bagi seluruh karyawan PLTGU Cilegon. Area ini mencakup lapangan olahraga serbaguna yang dapat digunakan untuk berbagai aktivitas fisik — mulai dari bola voli, badminton, hingga senam pagi bersama. Keberadaan fasilitas olahraga di lingkungan kerja bukan sekadar pelengkap, melainkan bagian integral dari program kesehatan kerja yang bertujuan menjaga kebugaran fisik dan mental karyawan — terutama bagi mereka yang bekerja dalam shift rotasi 24 jam. Area ini juga sering digunakan untuk kegiatan team building dan acara sosial perusahaan.",
        fungsi: [
            "Fasilitas olahraga serbaguna: voli, badminton, senam, dan aktivitas fisik lainnya",
            "Program kesehatan dan kebugaran untuk karyawan shift 24 jam",
            "Sarana kegiatan team building, kompetisi olahraga, dan acara sosial perusahaan"
        ]
    },
    "b37": {
        number: "b37",
        name: "Gedung Parkir",
        zona: "D",
        dimensi: "± 311 m²",
        shortDesc: "Area parkir terlindung untuk kendaraan karyawan dan tamu yang dilengkapi sistem keamanan dan pengelolaan akses.",
        description: "Gedung Parkir menyediakan area parkir yang aman dan terlindung untuk kendaraan pribadi karyawan, kendaraan dinas, serta kendaraan tamu yang berkunjung ke PLTGU Cilegon. Fasilitas ini dilengkapi dengan kamera CCTV, pencahayaan yang memadai, serta sistem pengelolaan akses yang terintegrasi dengan Pos Gate. Kapasitas parkir didesain untuk mengakomodasi jumlah karyawan shift terbesar, termasuk area khusus untuk kendaraan roda dua dan roda empat. Lokasi gedung parkir yang berada di zona D (area penunjang) memastikan kendaraan pribadi tidak perlu memasuki area operasional sensitif.",
        fungsi: [
            "Area parkir aman dan terlindung untuk kendaraan karyawan, dinas, dan tamu",
            "Sistem keamanan terintegrasi: CCTV, pencahayaan, dan akses terkontrol",
            "Pemisahan zona parkir dari area operasional untuk keamanan fasilitas"
        ]
    },
    "b38": {
        number: "b38",
        name: "Area Fire Water Tank",
        zona: "A",
        dimensi: "± 600 m²",
        shortDesc: "Tangki cadangan air berkapasitas besar yang khusus didedikasikan untuk sistem pemadam kebakaran di seluruh area PLTGU.",
        description: "Area Fire Water Tank merupakan fasilitas penyimpanan air berkapasitas besar yang khusus didedikasikan untuk sistem pemadam kebakaran (Fire Fighting System) di seluruh area PLTGU Cilegon. Tangki ini menyimpan volume air yang dihitung berdasarkan skenario kebakaran terburuk — cukup untuk memadamkan kebakaran terbesar yang mungkin terjadi (misalnya kebakaran tangki bahan bakar) selama durasi tertentu sebelum bantuan eksternal tiba. Air di tangki ini dijaga kualitas dan levelnya secara konstan melalui sistem make-up otomatis, dan tidak boleh digunakan untuk keperluan selain pemadam kebakaran. Fire Pump Station memompa air dari tangki ini ke seluruh jaringan hydrant, sprinkler, dan water spray di area PLTGU.",
        fungsi: [
            "Menyimpan cadangan air eksklusif untuk sistem pemadam kebakaran (Fire Fighting)",
            "Menyuplai jaringan pipa hydrant, sprinkler, dan water spray di seluruh area PLTGU",
            "Menjamin ketersediaan air darurat dengan kapasitas sesuai skenario kebakaran terburuk"
        ]
    },
    "b39": {
        number: "b39",
        name: "Area BSM",
        zona: "A",
        dimensi: "-",
        shortDesc: "Bangunan Sarana Mekanik — pusat peralatan bantu mekanik yang mendukung operasional turbin, generator, dan siklus uap PLTGU.",
        description: "Area BSM (Bangunan Sarana Mekanik) merupakan fasilitas yang menampung berbagai peralatan bantu (auxiliary equipment) mekanik yang krusial untuk menjaga operasional turbin gas, steam turbin, dan generator PLTGU Cilegon. Tanpa sistem-sistem pendukung yang dikelola dari BSM ini, unit pembangkit utama tidak dapat beroperasi secara optimal maupun aman. Peralatan yang umumnya dikelola dari BSM meliputi: sistem pelumasan (lube oil system) untuk bearing turbin dan generator, sistem hidrolik untuk aktuator katup kontrol besar, pompa-pompa pendukung (feed water pump, condensate extraction pump), serta kompresor udara instrumen. BSM juga berfungsi sebagai area pemantauan dan pemeliharaan peralatan mekanik pendukung yang terpusat.",
        fungsi: [
            "Menampung dan mengelola peralatan bantu mekanik: lube oil system, sistem hidrolik, pompa",
            "Mendukung operasional turbin gas, steam turbin, dan generator secara kontinu",
            "Pusat pemeliharaan terpusat untuk seluruh auxiliary mechanical equipment PLTGU"
        ]
    },
    "b40": {
        number: "b40",
        name: "Laboratory",
        zona: "B",
        dimensi: "-",
        shortDesc: "Laboratorium analisis kimia dan fisika yang memantau kualitas air, bahan bakar, pelumas, dan emisi untuk menjaga performa PLTGU.",
        description: "Laboratory PLTGU Cilegon adalah fasilitas pengujian dan analisis ilmiah yang memainkan peran vital dalam menjaga kinerja dan keandalan pembangkit. Tim analis laboratorium secara rutin menguji kualitas air di setiap tahap siklus — air baku, air desalinasi, air demin, air boiler feed, kondensat, hingga effluent WWTP — untuk memastikan parameter seperti pH, konduktivitas, dissolved oxygen, silica, dan hardness berada dalam batas aman. Laboratorium juga menganalisis kualitas bahan bakar gas dan HSD (nilai kalor, kandungan sulfur, densitas), memantau kondisi oli pelumas turbin (analisis tribologi), serta mengukur emisi gas buang (NOx, SOx, CO, partikulat) untuk kepatuhan lingkungan. Hasil analisis laboratorium menjadi dasar pengambilan keputusan operasional — seperti penyesuaian dosis bahan kimia water treatment atau penggantian oli pelumas.",
        fungsi: [
            "Pengujian rutin kualitas air di seluruh tahap siklus: feed water, kondensat, effluent",
            "Analisis kualitas bahan bakar (gas & HSD) dan kondisi oli pelumas (tribologi)",
            "Pemantauan emisi gas buang (NOx, SOx, CO) untuk kepatuhan lingkungan"
        ]
    },
    "b41": {
        number: "b41",
        name: "Water Injection Pump",
        zona: "B",
        dimensi: "-",
        shortDesc: "Pompa bertekanan tinggi yang menginjeksikan air demineralisasi ke combustor turbin gas untuk menekan emisi NOx dan meningkatkan daya.",
        description: "Water Injection Pump adalah pompa bertekanan tinggi yang merupakan bagian integral dari sistem pengendalian emisi nitrogen oksida (NOx) pada turbin gas PLTGU Cilegon. Pompa ini menginjeksikan air demineralisasi berkualitas tinggi langsung ke ruang bakar (combustor) turbin gas saat beroperasi. Injeksi air menurunkan suhu puncak nyala api (peak flame temperature) di dalam combustor — yang merupakan penyebab utama pembentukan thermal NOx. Selain mengurangi emisi, injeksi air juga meningkatkan massa aliran gas melalui turbin, sehingga menambah daya output pembangkit (power augmentation). Sistem ini dilengkapi flow control valve presisi tinggi, filter air ultra-halus untuk melindungi nozzle injeksi, serta interlocking otomatis dengan sistem kontrol turbin untuk menjaga rasio air-bahan bakar tetap aman.",
        fungsi: [
            "Injeksi air demineralisasi ke combustor turbin gas untuk menekan emisi NOx",
            "Power augmentation — meningkatkan daya output turbin melalui peningkatan massa aliran",
            "Kontrol presisi rasio air-bahan bakar dengan flow control valve dan interlock otomatis"
        ]
    },
    "b42": {
        number: "b42",
        name: "Fuel Oil Unloading Pump Area",
        zona: "B",
        dimensi: "-",
        shortDesc: "Area pompa pembongkaran bahan bakar minyak (HSD) dari truk tangki ke tangki penyimpanan PLTGU.",
        description: "Fuel Oil Unloading Pump Area merupakan fasilitas yang menangani proses pembongkaran (unloading) bahan bakar minyak — biasanya High-Speed Diesel (HSD) — dari truk tangki atau kapal tanker ke tangki penyimpanan (Distillate Oil Tank dan Fuel Oil Receiving Tank) PLTGU Cilegon. Area ini dilengkapi dengan pompa transfer berkapasitas besar, flexible hose connection untuk menghubungkan truk tangki, strainer/filter untuk menyaring kontaminan, serta flow meter untuk mengukur volume penerimaan secara akurat. Proses unloading dilakukan dengan prosedur keselamatan ketat — termasuk grounding/bonding kendaraan untuk mencegah percikan api statis, penutupan area (barricading), dan penyiagaan fire extinguisher portabel serta foam system.",
        fungsi: [
            "Pembongkaran (unloading) HSD dari truk tangki ke tangki penyimpanan PLTGU",
            "Pengukuran volume penerimaan bahan bakar secara akurat menggunakan flow meter",
            "Prosedur keselamatan ketat: grounding, barricading, dan penyiagaan fire suppression"
        ]
    },
    "b43": {
        number: "b43",
        name: "Fuel Oil Receiving Tank",
        zona: "B",
        dimensi: "-",
        shortDesc: "Tangki penerima awal bahan bakar HSD yang berfungsi sebagai buffer sebelum disalurkan ke tangki utama atau langsung ke sistem bahan bakar turbin.",
        description: "Fuel Oil Receiving Tank adalah tangki penerima awal (buffer tank) yang menampung bahan bakar High-Speed Diesel (HSD) setelah dibongkar dari truk tangki melalui Fuel Oil Unloading Pump. Tangki ini berfungsi sebagai perantara sebelum HSD disalurkan ke tangki penyimpanan utama (Distillate Oil Tank) atau langsung ke HSD Treatment Plant untuk proses pemurnian lebih lanjut. Selama berada di Receiving Tank, bahan bakar dibiarkan 'settle' (mengendap) agar air dan partikel berat terpisah secara gravitasi ke dasar tangki dan dapat di-drain. Tangki dilengkapi level indicator, temperature gauge, dan high-level alarm untuk mencegah overflow, serta dikelilingi bunding (tanggul penahan tumpahan) sebagai secondary containment.",
        fungsi: [
            "Penampungan sementara HSD setelah pembongkaran sebelum disalurkan ke tangki utama",
            "Proses settling (pengendapan) untuk memisahkan air dan partikel dari bahan bakar",
            "Dilengkapi bunding (secondary containment), level indicator, dan high-level alarm"
        ]
    },
    "b44": {
        number: "b44",
        name: "HSD Treatment Plant",
        zona: "B",
        dimensi: "-",
        shortDesc: "Fasilitas pemurnian bahan bakar HSD melalui filtrasi, separasi, dan pengeringan agar memenuhi spesifikasi turbin gas.",
        description: "HSD Treatment Plant adalah fasilitas pemurnian bahan bakar High-Speed Diesel (HSD) yang memastikan kualitas bahan bakar memenuhi spesifikasi ketat turbin gas sebelum digunakan. Bahan bakar HSD yang diterima dari pemasok (Pertamina) dapat mengandung kontaminan seperti air, partikel padat, lumpur, dan senyawa sulfur berlebih. Treatment Plant memproses HSD melalui beberapa tahap: centrifugal separator (untuk memisahkan air dan partikel halus berdasarkan perbedaan densitas), filter bertingkat (coarse filter dan fine filter), serta heater untuk menurunkan viskositas agar bahan bakar mudah dipompa dan diatomisasi di combustor. Kualitas HSD setelah treatment dipantau melalui parameter seperti water content, viscosity, density, flash point, dan sulfur content. Bahan bakar yang telah memenuhi spesifikasi kemudian disimpan di Distillate Oil Tank, siap digunakan saat turbin gas beroperasi dengan bahan bakar cair.",
        fungsi: [
            "Pemurnian HSD melalui centrifugal separator, filtrasi bertingkat, dan pemanasan",
            "Penghilangan kontaminan: air, partikel padat, lumpur, dan senyawa sulfur berlebih",
            "Pemantauan kualitas bahan bakar: water content, viscosity, flash point, dan sulfur content"
        ]
    },
    "b45": {
        number: "b45",
        name: "Foam Spare Bottle Space",
        zona: "B",
        dimensi: "-",
        shortDesc: "Area penyimpanan tabung konsentrat foam cadangan untuk sistem pemadam kebakaran khusus area tangki bahan bakar.",
        description: "Foam Spare Bottle Space adalah area penyimpanan khusus yang menampung tabung-tabung konsentrat foam (busa pemadam) cadangan untuk sistem fire suppression di area tangki bahan bakar PLTGU Cilegon. Foam pemadam kebakaran berbeda dari air biasa — foam membentuk selimut busa yang menutupi permukaan cairan mudah terbakar (seperti HSD), menekan uap yang mudah terbakar, memutus pasokan oksigen, dan mendinginkan permukaan bahan bakar secara bersamaan. Jenis foam yang disimpan biasanya berupa AFFF (Aqueous Film-Forming Foam) atau AR-AFFF yang efektif untuk kebakaran kelas B (cairan mudah terbakar). Tabung cadangan ini sangat penting karena dalam skenario kebakaran besar di tangki bahan bakar, konsumsi foam concentrate sangat tinggi dan stok utama di bladder tank sistem bisa habis — sehingga diperlukan refill cepat dari cadangan.",
        fungsi: [
            "Penyimpanan tabung konsentrat foam cadangan (AFFF/AR-AFFF) untuk proteksi area bahan bakar",
            "Memastikan ketersediaan foam untuk refill cepat saat skenario kebakaran besar di tangki",
            "Bagian integral dari sistem Fire Fighting sesuai standar NFPA untuk area bahan bakar"
        ]
    },
    "b46": {
        number: "b46",
        name: "Oil Separator For Distillate Oil Tank Yard",
        zona: "B",
        dimensi: "-",
        shortDesc: "Fasilitas pemisah minyak-air di area tangki bahan bakar yang mencegah kontaminasi minyak ke saluran air dan lingkungan.",
        description: "Oil Separator For Distillate Oil Tank Yard adalah fasilitas pengolahan lingkungan yang memisahkan minyak dari air di area yard (halaman) tangki penyimpanan bahan bakar (Distillate Oil Tank). Di sekitar tangki bahan bakar, air hujan yang turun ke area bunding (tanggul penahan tumpahan) dapat terkontaminasi oleh tumpahan kecil minyak, kebocoran seal, atau residu bahan bakar. Air terkontaminasi ini tidak boleh langsung dibuang ke saluran drainase umum karena akan mencemari lingkungan. Oil separator bekerja berdasarkan prinsip perbedaan densitas — minyak yang lebih ringan mengapung di permukaan dan dipisahkan melalui skimmer atau weir plate, sementara air bersih dialirkan keluar melalui outlet bawah menuju WWTP untuk pengolahan lebih lanjut. Fasilitas ini merupakan persyaratan wajib dalam AMDAL dan regulasi lingkungan untuk area penyimpanan bahan bakar.",
        fungsi: [
            "Separasi minyak dari air hujan dan drainase di area bunding tangki bahan bakar",
            "Pencegahan kontaminasi minyak ke saluran drainase umum dan lingkungan sekitar",
            "Kepatuhan terhadap persyaratan AMDAL dan regulasi lingkungan untuk area bahan bakar"
        ]
    }
};


// ============================================================
// APPLICATION LOGIC
// ============================================================

const allImageFiles = import.meta.glob('../public/buildings/**/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}');
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
        const folderPathMatcher = `../public/buildings/${folderName}/`.toLowerCase();
        const folderPathMatcherFallback = `../public/buildings/${buildingId}/`.toLowerCase();

        let thumbPath = allImagePaths.find(path => {
            const normPath = path.replace(/\\/g, '/');
            const lowerPath = normPath.toLowerCase();
            const isInsideFolder = lowerPath.startsWith(folderPathMatcher) || lowerPath.startsWith(folderPathMatcherFallback);
            const isThumb = lowerPath.endsWith('/thumb.jpg') || 
                            lowerPath.endsWith('/thumb.jpeg') || 
                            lowerPath.endsWith('/thumb.png') || 
                            lowerPath.endsWith('/thumb.webp');
            return isInsideFolder && isThumb;
        });

        // Fallback: jika tidak ada file thumb.*, gunakan gambar pertama di folder tersebut
        if (!thumbPath) {
            const folderImages = allImagePaths.filter(path => {
                const normPath = path.replace(/\\/g, '/');
                const lowerPath = normPath.toLowerCase();
                return lowerPath.startsWith(folderPathMatcher) || lowerPath.startsWith(folderPathMatcherFallback);
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
        const folderPathMatcher = `../public/buildings/${folderName}/`.toLowerCase();
        const folderPathMatcherFallback = `../public/buildings/${buildingId}/`.toLowerCase();

        // Categorize photos into root photos and floor-grouped photos
        const rootPhotos = [];
        const floorPhotos = {}; // key = floor name, value = array of photo objects
        let thumbPhoto = null;

        allImagePaths.forEach(path => {
            const normPath = path.replace(/\\/g, '/');
            const lowerPath = normPath.toLowerCase();

            if (lowerPath.startsWith(folderPathMatcher) || lowerPath.startsWith(folderPathMatcherFallback)) {
                if (lowerPath.endsWith('/thumb.jpg') || 
                    lowerPath.endsWith('/thumb.jpeg') || 
                    lowerPath.endsWith('/thumb.png') || 
                    lowerPath.endsWith('/thumb.webp')) {
                    thumbPhoto = { url: normPath.replace('../public', ''), title: 'Foto Utama / Thumbnail', fileName: 'thumb', originalPath: path };
                    return;
                }
                
                const url = normPath.replace('../public', '');
                const fileName = normPath.split('/').pop();
                const match = fileName.match(/\((.*?)\)/);
                const title = match ? match[1] : '';

                // Determine which folder the file lives in
                const matcherLength = lowerPath.startsWith(folderPathMatcher) 
                    ? folderPathMatcher.length 
                    : folderPathMatcherFallback.length;
                
                const relativePath = normPath.substring(matcherLength);
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

        if (rootPhotos.length === 0 && Object.keys(floorPhotos).length === 0 && thumbPhoto) {
            rootPhotos.push(thumbPhoto);
        }

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

    // Daftar Bangunan (always visible panel inside SVG - Satelit & Vektor)
    const buildingLists = [
        document.getElementById('buildingList'),
        document.getElementById('buildingListVektor')
    ].filter(Boolean);

    if (buildingLists.length > 0) {
        // 1. Populate data
        const sortedBuildings = Object.entries(buildingData).sort((a, b) => {
            const numA = parseInt(a[0].replace(/[^0-9]/g, '')) || 0;
            const numB = parseInt(b[0].replace(/[^0-9]/g, '')) || 0;
            return numA - numB;
        });

        sortedBuildings.forEach(([id, data]) => {
            buildingLists.forEach(listEl => {
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

                listEl.appendChild(li);
            });
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
