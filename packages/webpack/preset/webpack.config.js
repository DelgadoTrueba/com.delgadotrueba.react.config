export default function getDefaultConfig(
  env = {},
  argv = {}
) {
  return {
    entry: "./src/index.ts",
    output: {
      filename: "bundle.js",
      path: `${process.cwd()}/dist`,
    },
    module: {
      rules: [],
    },
    plugins: [],
    mode: argv.mode || "development",
  };
}
