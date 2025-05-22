console.log("hola");
async function deferRender() {
  console.log("deferRender");
}
deferRender().then(() => {
  import("./bootstrap");
});
