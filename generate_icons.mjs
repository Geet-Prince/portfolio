import sharp from 'sharp';
import fs from 'fs';

const svgBuffer = fs.readFileSync('./public/favicon-dark.svg');

async function generateIcons() {
  try {
    // Generate required PNG sizes with new exact filenames
    await sharp(svgBuffer).resize(16, 16).png().toFile('./public/favicon-16x16.png');
    await sharp(svgBuffer).resize(32, 32).png().toFile('./public/favicon-32x32.png');
    await sharp(svgBuffer).resize(180, 180).png().toFile('./public/apple-touch-icon.png');
    await sharp(svgBuffer).resize(192, 192).png().toFile('./public/android-chrome-192x192.png');
    await sharp(svgBuffer).resize(512, 512).png().toFile('./public/android-chrome-512x512.png');
    
    // Legacy favicon.ico mapping to the 32x32 variant
    fs.copyFileSync('./public/favicon-32x32.png', './public/favicon.ico');
    
    console.log("All icons successfully generated!");
  } catch (error) {
    console.error("Error generating icons:", error);
  }
}

generateIcons();
