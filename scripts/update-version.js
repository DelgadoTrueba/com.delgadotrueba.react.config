// node scripts/update-version.js

const fs = require("fs");
const path = require("path");

const packageJsonFileName = 'package.json'
const packageJsonPath = path.join(__dirname, `../${packageJsonFileName}`);
const changelogPath = path.resolve(__dirname, "../CHANGELOG.md");
const packagesDir = path.resolve(__dirname, "../packages");


const packageData = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
const currentVersion = packageData.version;

const updatePatchVersion = () => {
  const [major, minor, patch] = currentVersion.split(".");
  const newPatch = (parseInt(patch, 10) + 1).toString();
  const newVersion = `${major}.${minor}.${newPatch}`;

  packageData.version = newVersion;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageData, null, 2));

  return newVersion;
};

function updateVersionInChangelog(newVersion) {
  try {
    const fileContent = fs.readFileSync(changelogPath, "utf8");
    const lines = fileContent.split("\n");
    const index = lines.findIndex((line) => line.substring("# Changelog"));

    if (index === -1) {
      throw new Error("No se encontró el objeto `# Changelog` en el código.");
    }

    const newEntry = `\n### Release version <version ${newVersion}>`;
    lines.splice(index + 1, 0, newEntry);

    const updatedContent = lines.join("\n");
    fs.writeFileSync(changelogPath, updatedContent, "utf8");
  } catch (error) {
    console.error(`Error al insertar texto en ${changelogPath}:`, error);
  }
}

function updatePackagesVersions(newVersion) {

  function findAllPackageJsons(startDir) {
    let results = [];

    const entries = fs.readdirSync(startDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(startDir, entry.name);

      if (entry.isDirectory()) {
        results = results.concat(findAllPackageJsons(fullPath));
      } else if (entry.isFile() && entry.name === packageJsonFileName) {
        results.push(fullPath);
      }
    }

    return results;
  }

  const packageJsonPaths = findAllPackageJsons(packagesDir);

  packageJsonPaths.forEach((pkgPath) => {
    const pkgData = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
    pkgData.version = newVersion;
    fs.writeFileSync(pkgPath, JSON.stringify(pkgData, null, 2));
    console.log(`Versión actualizada en ${pkgPath}`);
  });
}

// Ejecución
const newVersion = updatePatchVersion();
updateVersionInChangelog(newVersion);
updatePackagesVersions(newVersion);

console.log(`Versión ${newVersion} actualizada correctamente`);
