// node scrypts/sync-content.js src/assets/fonts public/css/fonts

const { cp, readdir } = require('fs/promises');
const { resolve, join } = require('path');

async function syncContent(source, destination) {
  const sourceDir = resolve(source); // Carpeta de origen (assets)
  const destDir = resolve(destination); // Carpeta de destino (dist)

  try {
    const items = await readdir(sourceDir);

    await Promise.all(
      items.map(async (item) => {
        const itemSourcePath = join(sourceDir, item);
        const itemDestPath = join(destDir, item);
        await cp(itemSourcePath, itemDestPath, {
          recursive: true,
          force: true,
        });
      }),
    );

    console.log(`Contenido de ${sourceDir} copiado correctamente a ${destDir}`);
  } catch (error) {
    console.error('Error al copiar los assets:', error);
  }
}

const [, , source, destination] = process.argv;

if (!source || !destination) {
  console.error('Por favor, proporciona la carpeta de origen y de destino.');
  console.error('Ejemplo: node sync-content.js assets dist');
  process.exit(1);
}

syncContent(source, destination);
