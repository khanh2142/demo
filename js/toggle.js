const openBtn = $("#toggle-button");
const sideBar = $("#sidebar");
const closeBtn = $("#close-button");

openBtn.on("click", (e) => {
  sideBar.toggle();
});

closeBtn.on("click", () => {
  sideBar.toggle(false);
});
