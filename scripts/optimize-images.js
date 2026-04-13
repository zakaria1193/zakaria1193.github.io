const sharp = require('sharp');
const path = require('path');

const INPUT = path.join(__dirname, '../public/photo.jpg');
const MAX_WIDTH = 1200;

async function main() {
  // Compressed JPEG
  await sharp(INPUT)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: 80, progressive: true })
    .toFile(INPUT + '.tmp');

  const fs = require('fs');
  fs.renameSync(INPUT + '.tmp', INPUT);
  console.log('photo.jpg compressed');

  // WebP version
  await sharp(INPUT)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(path.join(__dirname, '../public/photo.webp'));
  console.log('photo.webp generated');
}

main().catch((err) => { console.error(err); process.exit(1); });
