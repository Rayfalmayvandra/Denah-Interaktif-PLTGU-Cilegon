// ============================================================
// Entry point untuk mapper.html (SVG Polygon Mapper Tool)
// Mengimpor buildingData dari app.js agar mapper bisa
// menampilkan nama bangunan yang sudah ada.
// ============================================================

import { buildingData } from './app.js';

// Expose buildingData ke window agar kode inline mapper.html bisa mengaksesnya
window.buildingData = buildingData;
