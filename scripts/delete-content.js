// node scrypts/delete-content.js src/assets/fonts

const { readdir, rm, stat } = require("fs/promises");
const { join, resolve } = require("path");

async function deleteDirectory(directory) {
  const dirPath = resolve(directory);

  try {
    const items = await readdir(dirPath);

    await Promise.all(
      items.map(async (item) => {
        const itemPath = join(dirPath, item);
        const itemStat = await stat(itemPath);
        await rm(itemPath, {
          recursive: itemStat.isDirectory(),
          force: true,
        });
      })
    );

    console.log(`Contenido de ${dirPath} eliminado correctamente.`);
  } catch (error) {
    console.error("Error al eliminar el contenido:", error);
  }
}

// Argumento desde CLI
const [, , targetDir] = process.argv;

if (!targetDir) {
  console.error("Por favor, proporciona el directorio a limpiar.");
  console.error("Ejemplo: node scripts/clean-directory.js dist/assets");
  process.exit(1);
}

deleteDirectory(targetDir);
