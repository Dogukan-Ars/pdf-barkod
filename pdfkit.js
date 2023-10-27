const PDFDocument = require('pdfkit');
const fs = require('fs');

// Yeni bir PDF belgesi oluştur
const doc = new PDFDocument();
doc.pipe(fs.createWriteStream('barkod.pdf'));
