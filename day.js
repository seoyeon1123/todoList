const types = document.querySelectorAll(".type");

types.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    types.forEach((cb) => {
      if (cb !== this) {
        cb.checked = false;
      }
    });
  });
});
