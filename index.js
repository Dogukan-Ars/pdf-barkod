// const express = require('express');

// const app = express();
// app.use(express.json());
// app.listen(3000, () => console.log('server running on port 3000'));

// const PDFDocument = require('pdfkit');
// const fs = require('fs');
// const bwipjs = require('bwip-js'); // Barkod üretmek için bwip-js kullanıyoruz

// // Barkodun görünmesini istediğiniz metni burada değiştirin
// const barkodSayi = '123456789';

// // Dikdörtgenin boyutları ve pozisyonu
// const dikdortgenX = 20; // X koordinatı
// const dikdortgenY = 20; // Y koordinatı
// const dikdortgenGenislik = 575.28; // A4 genişliği
// const dikdortgenYukseklik = 20; // 5 cm yükseklik

// // Yeni bir PDF belgesi oluştur
// const doc = new PDFDocument();
// const stream = fs.createWriteStream('barkod.pdf');

// // Dikdörtgeni çiz
// doc.pipe(stream);
// doc.rect(dikdortgenX, dikdortgenY, dikdortgenGenislik, dikdortgenYukseklik).fillAndStroke('black');

// // İçi boş yazı
// const iceriBosYazi = 'IORA.io PRODUCTION CARD';

// // İçi boş yazıyı ekleyin
// doc
//   .font('Helvetica')
//   .fontSize(18)
//   .fillColor('white')
//   .text(iceriBosYazi, dikdortgenX + 20, dikdortgenY + 10, {
//     width: dikdortgenGenislik - 40,
//     height: dikdortgenYukseklik - 40,
//     align: 'center',
//     valign: 'center',
//   });

// // Alt başlıkların dikdörtgeninin boyutları ve pozisyonu
// const subTitleRectX = 20; // X koordinatı
// const subTitleRectY = 60; // Y koordinatı
// const subTitleRectGenislik = 175.28; // A4 genişliği
// const subTitleRectYukseklik = 20; // 5 cm yükseklik

// // Dikdörtgeni çiz
// doc.rect(subTitleRectX, subTitleRectY, subTitleRectGenislik, subTitleRectYukseklik).fillAndStroke('gray');

// // İçi boş yazı
// const iciDoluYazi = 'OPERATOR';

// // İçi boş yazıyı ekleyin
// doc
//   .font('Helvetica')
//   .fontSize(18)
//   .fillColor('black')
//   .text(iciDoluYazi, subTitleRectX + 20, subTitleRectY + 10, {
//     width: subTitleRectGenislik - 40,
//     height: subTitleRectYukseklik - 40,
//     align: 'center',
//     valign: 'center',
//   });

// // Barkod verisini çizmek için yardımcı bir işlev
// function drawBarcode(barcodeData, x, y, width, height) {
//   // Barkodu PNG formatında üret
//   return new Promise((resolve, reject) => {
//     bwipjs.toBuffer(
//       {
//         bcid: 'code128', // Barkod tipi
//         text: barcodeData, // Barkod verisi
//         scale: 2, // Ölçek faktörü
//         width: width, // Genişlik
//         height: height, // Yükseklik
//         includetext: true, // Metin dahil edilsin mi?
//       },
//       (err, png) => {
//         if (err) {
//           reject(err);
//         } else {
//           doc.image(png, x, y, { width: width, height: height });
//           resolve();
//         }
//       }
//     );
//   });
// }

// // Barkodu çiz
// const barkodX = 100;
// const barkodY = 100;
// const barkodGenislik = 350;
// const barkodYukseklik = 20;

// drawBarcode(barkodSayi, barkodX, barkodY, barkodGenislik, barkodYukseklik)
//   .then(() => {
//     // PDF belgesini kaydet ve işlemi sonlandır
//     doc.end();
//     console.log('PDF oluşturuldu: barkod.pdf');
//   })
//   .catch((err) => {
//     console.error('Barkod oluşturma hatası:', err);
//   });


// const PDFDocument = require('pdfkit');
// const fs = require('fs');

// // Yeni bir PDF belgesi oluştur
// const doc = new PDFDocument();
// doc.pipe(fs.createWriteStream('ana_baslik.pdf'));

// // Sayfa boyutunu ayarla (varsayılan A4)
// const sayfaGenislik = 595.28; // A4 genişliği
// const sayfaYukseklik = 841.89; // A4 yüksekliği

// // Dikdörtgeni çiz (ana başlık)
// const dikdortgenY = 40; // Sayfanın üstünden 40 mm uzaklık
// const dikdortgenGenislik = sayfaGenislik - 40; // Sayfanın solundan ve sağından 20 mm uzaklıkta
// const dikdortgenX = dikdortgenGenislik ; // Sayfanın solundan 25 mm uzaklık
// const dikdortgenYukseklik = 20;

// doc.rect(dikdortgenX, dikdortgenY, dikdortgenGenislik, dikdortgenYukseklik)
//    .fill('black'); // Dikdörtgenin iç dolgusu siyah

// // Ana başlığı ekleyin
// const anaBaslik = 'IORA.io PRODUCTION CARD';
// const metinGenislik = doc.widthOfString(anaBaslik); // Başlığın genişliğini ölç
// const metinX = (dikdortgenGenislik / 2 - metinGenislik) / 2;
// const metinY = (dikdortgenY + dikdortgenYukseklik / 2) - doc.currentLineHeight() / 2;

// doc
//   .font('Helvetica')
//   .fillColor('white')
//   .fontSize(18)
//   .text(anaBaslik, metinX, metinY, { align: 'center' });

// // PDF belgesini kaydet ve işlemi sonlandır
// doc.end();

// console.log('PDF oluşturuldu: ana_baslik.pdf');


const PDFDocument = require('pdfkit');
const fs = require('fs');
const bwipjs = require('bwip-js'); // Barkod üretmek için bwip-js kullanıyoruz

// PDF dosyası oluştur
const doc = new PDFDocument();
doc.pipe(fs.createWriteStream('dikdortgenler.pdf'));

// Sayfa boyutunu ayarla (varsayılan A4)
// const sayfaGenislik = 595.28; // A4 genişliği
// const sayfaYukseklik = 841.89; // A4 yüksekliği

// Ana başlığın bulunduğu dikdörtgen
doc.rect(28, 40, 555.28, 15)
   .fillAndStroke("black");

// Ana başlık konumu ve özellikleri
const anaBaslik = 'PRODUCTION CARD';
doc.widthOfString(anaBaslik)
const anaBaslikX = 25;
const anaBaslikY = 43;

doc
  .font('Helvetica')
  .fillColor('white')
  .fontSize(12)
  .text(anaBaslik, anaBaslikX, anaBaslikY, { align: 'center' });

async function main() {
  // Barkodun görünmesini istediğiniz metni burada değiştirin
  // const barkodSayi = ' ';
  const barkodlar = [
    { barkodSayi: ' ', x: 28, y: 145, width: 220, height: 18 },
    { barkodSayi: ' ', x: 268, y: 145, width: 100, height: 18 },
    // Daha fazla barkod ekleyebilirsiniz
  ];

  // Barkodları çizmek için bir döngü
  for (const barkod of barkodlar) {
    await drawBarcode(barkod.barkodSayi, barkod.x, barkod.y, barkod.width, barkod.height);
  }

  doc.end()
}

main().catch((err) => {
  console.error('Hata:', err);
});

// Barkod verisini çizmek için yardımcı bir işlev
async function drawBarcode(barcodeData, x, y, width, height) {
// Barkodu PNG formatında üret
return new Promise((resolve, reject) => {
  bwipjs.toBuffer(
    {
      bcid: 'code128', // Barkod tipi
      text: barcodeData, // Barkod verisi
      scale: 2, // Ölçek faktörü
      width: width, // Genişlik
      height: height, // Yükseklik
      includetext: true, // Metin dahil edilsin mi?
    },
    (err, png) => {
      if (err) {
        reject(err);
      } else {
        doc.image(png, x, y, { width: width, height: height });
        resolve();
      }
    }
  );
});
}

// // Barkodu çiz
// const barkodX = 28;
// const barkodY = 145;
// const barkodGenislik = 220;
// const barkodYukseklik = 18;

// drawBarcode(barkodSayi, barkodX, barkodY, barkodGenislik, barkodYukseklik)
// .then(() => {
//   // PDF belgesini kaydet ve işlemi sonlandır
//   doc.end();
// })
// .catch((err) => {
//   console.error('Barkod oluşturma hatasi:', err);
// });

// Fonksiyon: Dikdörtgeni ve içerisindeki yazıyı oluştur
function createSubtitleAndRect(doc, x, y, genislik, yukseklik, subtitle) {
  doc.lineWidth(1)
  doc.lineJoin('miter')
  .rect(x, y, genislik, yukseklik).fillAndStroke('gray', 'black');
  doc
    .font('Helvetica-Bold')
    .fontSize(12)
    .fillColor('black')
    .text(subtitle, x + 20, y + yukseklik / 4, {
      width: genislik - 40,
      height: yukseklik - 40,
      align: 'center',
      valign: 'center',
    });
}

// Alt başlıkları ve dikdörtgenleri yerleştir
const altBasliklar = [
  { x: 28, y: 65, genislik: 180, yukseklik: 15, icerik: 'OPERATOR' },
  { x: 228, y: 65, genislik: 260, yukseklik: 15, icerik: 'DATE-HOUR' },
  { x: 28, y: 115, genislik: 220, yukseklik: 15, icerik: 'PRODUCT ID' },
  { x: 268, y: 115, genislik: 100, yukseklik: 15, icerik: 'PCB ID' },
  { x: 388, y: 115, genislik: 100, yukseklik: 15, icerik: 'PP ID' },
];

for (const altBaslik of altBasliklar) {
  createSubtitleAndRect(doc, altBaslik.x, altBaslik.y, altBaslik.genislik, altBaslik.yukseklik, altBaslik.icerik);
}
  
// Fonksiyon: Kutucuk oluşturmak için
function createBox(doc, x, y, content, bgColor, textColor, isBold, boxWidth = 20, textWidth = 20) {
  doc.lineWidth(1);
  doc.rect(x, y, boxWidth, 15).fillAndStroke(bgColor, 'black');

  doc
    .font(isBold ? 'Helvetica-Bold' : 'Helvetica')
    .fontSize(12)
    .fillColor(textColor)
    .text(content, x, y + 3, {
      width: textWidth,
      height: 15,
      align: 'center',
      valign: 'center',
    });
}

// Kullanım örneği:
function createSubtitle(doc, startX, startY, space, icerikler) {
  for (let i = 0; i < icerikler.length; i++) {
    const { content, bgColor, textColor, isBold, boxWidth, textWidth } = icerikler[i];
    createBox(doc, startX + i * space, startY, content, bgColor, textColor, isBold, boxWidth, textWidth);
  }
}

// Alt başlıkların içerikleri
const operator = [
  { content: '1', bgColor: 'white', textColor: 'black' },
  { content: '1', bgColor: 'white', textColor: 'black' },
  { content: '1', bgColor: 'white', textColor: 'black' },
  { content: '1', bgColor: 'white', textColor: 'black' },
  { content: '-', bgColor: 'gray', textColor: 'black' },
  { content: 'A', bgColor: 'white', textColor: 'black' },
  { content: 'A', bgColor: 'white', textColor: 'black' },
  { content: ' ', bgColor: 'white', textColor: 'black' },
  { content: ' ', bgColor: 'white', textColor: 'black' },
];

const datehour = [
  { content: '2', bgColor: 'white', textColor: 'black' },
  { content: '0', bgColor: 'white', textColor: 'black' },
  { content: '2', bgColor: 'white', textColor: 'black' },
  { content: '4', bgColor: 'white', textColor: 'black' },
  { content: '-', bgColor: 'gray', textColor: 'black' },
  { content: '0', bgColor: 'white', textColor: 'black' },
  { content: '1', bgColor: 'white', textColor: 'black' },
  { content: '-', bgColor: 'gray', textColor: 'black' },
  { content: '1', bgColor: 'white', textColor: 'black' },
  { content: '0', bgColor: 'white', textColor: 'black' },
  { content: 'H', bgColor: 'gray', textColor: 'black' },
  { content: '2', bgColor: 'white', textColor: 'black' },
  { content: '3', bgColor: 'white', textColor: 'black' },
];

const productId = [
  { content: '1', bgColor: 'white', textColor: 'black' },
  { content: '1', bgColor: 'white', textColor: 'black' },
  { content: '1', bgColor: 'white', textColor: 'black' },
  { content: '.', bgColor: 'gray', textColor: 'black' },
  { content: '1', bgColor: 'white', textColor: 'black' },
  { content: '1', bgColor: 'white', textColor: 'black' },
  { content: '1', bgColor: 'white', textColor: 'black' },
  { content: '.', bgColor: 'gray', textColor: 'black' },
  { content: '1', bgColor: 'white', textColor: 'black' },
  { content: '1', bgColor: 'white', textColor: 'black' },
  { content: '1', bgColor: 'white', textColor: 'black' },
];

const pcbId = [
  { content: '1', bgColor: 'white', textColor: 'black' },
  { content: '1', bgColor: 'white', textColor: 'black' },
  { content: '1', bgColor: 'white', textColor: 'black' },
  { content: '1', bgColor: 'white', textColor: 'black' },
  { content: '1', bgColor: 'white', textColor: 'black' },
];

const ppId = [
  { content: 'A', bgColor: 'white', textColor: 'black' },
  { content: 'A', bgColor: 'white', textColor: 'black' },
  { content: '1', bgColor: 'white', textColor: 'black' },
  { content: '1', bgColor: 'white', textColor: 'black' },
  { content: '1', bgColor: 'white', textColor: 'black' },
];
const ppIdAlt = [
  { content: 'A', bgColor: 'gray', textColor: 'black', isBold: true },
  { content: 'A', bgColor: 'white', textColor: 'black' },
  { content: 'A', bgColor: 'white', textColor: 'black' },
  { content: 'A', bgColor: 'gray', textColor: 'black', isBold: true },
  { content: '1', bgColor: 'white', textColor: 'black' },
];

const name = [
  { content: 'A', bgColor: 'gray', textColor: 'black', isBold: true },
  { content: 'CONCENTRATOR CARD', bgColor: 'white', textColor: 'black', boxWidth: 200, textWidth: 200 },
];

const config = [
  { content: 'A', bgColor: 'gray', textColor: 'black', isBold: true },
  { content: '1', bgColor: 'white', textColor: 'black', },
  { content: '1', bgColor: 'white', textColor: 'black', },
  { content: '1', bgColor: 'white', textColor: 'black', },
  { content: '1', bgColor: 'white', textColor: 'black', },
  { content: '1', bgColor: 'white', textColor: 'black', },
  { content: '1', bgColor: 'white', textColor: 'black', },
  { content: '1', bgColor: 'white', textColor: 'black', },
  { content: '1', bgColor: 'white', textColor: 'black', },
];

const opStartX = 28; // Başlangıç X koordinatı
const opStartY = 80; // Başlangıç Y koordinatı
const opSpace = 20; // Kutucuklar arasındaki mesafe

const datehourStartX = 228; // Başlangıç X koordinatı
const datehourStartY = 80; // Başlangıç Y koordinatı
const datehourSpace = 20; // Kutucuklar arasındaki mesafe

const pIdStartX = 28; // Başlangıç X koordinatı
const pIdStartY = 130; // Başlangıç Y koordinatı
const pIdSpace = 20; // Kutucuklar arasındaki mesafe

const pcbIdStartX = 268; // Başlangıç X koordinatı
const pcbIdStartY = 130; // Başlangıç Y koordinatı
const pcbIdSpace = 20; // Kutucuklar arasındaki mesafe

const ppIdStartX = 388; // Başlangıç X koordinatı
const ppIdStartY = 130; // Başlangıç Y koordinatı
const ppIdSpace = 20; // Kutucuklar arasındaki mesafe

const ppIdAltStartX = 388; // Başlangıç X koordinatı
const ppIdAltStartY = 145; // Başlangıç Y koordinatı
const ppIdAltSpace = 20; // Kutucuklar arasındaki mesafe

const nameStartX = 28; // Başlangıç X koordinatı
const nameStartY = 175; // Başlangıç Y koordinatı
const nameSpace = 20; // Kutucuklar arasındaki mesafe

const cfgStartX = 268; // Başlangıç X koordinatı
const cfgStartY = 175; // Başlangıç Y koordinatı
const cfgSpace = 20; // Kutucuklar arasındaki mesafe

// Alt başlıkları ve içerikleri oluştur
createSubtitle(doc, opStartX, opStartY, opSpace, operator);
createSubtitle(doc, datehourStartX, datehourStartY, datehourSpace, datehour);
createSubtitle(doc, pIdStartX, pIdStartY, pIdSpace, productId);
createSubtitle(doc, pcbIdStartX, pcbIdStartY, pcbIdSpace, pcbId);
createSubtitle(doc, ppIdStartX, ppIdStartY, ppIdSpace, ppId);
createSubtitle(doc, ppIdAltStartX, ppIdAltStartY, ppIdAltSpace, ppIdAlt);
createSubtitle(doc, nameStartX, nameStartY, nameSpace, name);
createSubtitle(doc, cfgStartX, cfgStartY, cfgSpace, config);

  




// ********IKINCI KISIM**********


// Sayfa ortasındaki 2. Ana başlığın bulunduğu dikdörtgen
doc.rect(28, 350, 555.28, 15)
.fillAndStroke("black");

// Ana başlık konumu ve özellikleri
const ortaAnaBaslik = 'TEST PROCEDURES AND VALUES';
doc.widthOfString(ortaAnaBaslik)
const ortaAnaBaslikX = 25;
const ortaAnaBaslikY = 353;

doc
.font('Helvetica')
.fillColor('white')
.fontSize(12)
.text(ortaAnaBaslik, ortaAnaBaslikX, ortaAnaBaslikY, { align: 'center' });
