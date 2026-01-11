import sharp from 'sharp'
import { mkdir } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')
const iconsDir = join(publicDir, 'icons')

// PWA icon sizes per best practices 2026
const sizes = [
  // Standard PWA icons
  { size: 192, name: 'icon-192.png' },
  { size: 512, name: 'icon-512.png' },
  // Apple Touch Icons
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 167, name: 'apple-touch-icon-167.png' }, // iPad Pro
  { size: 152, name: 'apple-touch-icon-152.png' }, // iPad
  // Maskable icons (with padding for safe zone)
  { size: 192, name: 'icon-192-maskable.png', maskable: true },
  { size: 512, name: 'icon-512-maskable.png', maskable: true },
  // Favicon sizes
  { size: 32, name: 'favicon-32.png' },
  { size: 16, name: 'favicon-16.png' },
]

async function generateIcons() {
  // Create icons directory
  await mkdir(iconsDir, { recursive: true })

  const svgPath = join(publicDir, 'icon.svg')

  for (const { size, name, maskable } of sizes) {
    const outputPath = join(iconsDir, name)

    if (maskable) {
      // Maskable icons need 10% padding (safe zone)
      const padding = Math.round(size * 0.1)
      const innerSize = size - padding * 2

      await sharp(svgPath)
        .resize(innerSize, innerSize)
        .extend({
          top: padding,
          bottom: padding,
          left: padding,
          right: padding,
          background: '#222222',
        })
        .png()
        .toFile(outputPath)
    } else {
      await sharp(svgPath).resize(size, size).png().toFile(outputPath)
    }

    console.log(`Generated ${name} (${size}x${size})`)
  }

  // Also copy apple-touch-icon to root for fallback
  await sharp(join(iconsDir, 'apple-touch-icon.png'))
    .toFile(join(publicDir, 'apple-touch-icon.png'))
  console.log('Copied apple-touch-icon.png to public root')

  console.log('\nAll icons generated successfully!')
}

generateIcons().catch(console.error)
