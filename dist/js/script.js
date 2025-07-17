(() => {
  const form = document.querySelector("#contactForm");
  const successMsg = document.querySelector("#form-success");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add("was-validated");
    } else {
      // Mostrar mensaje de éxito
      successMsg.classList.remove("d-none");
      successMsg.classList.add("show");

      // Ocultar mensaje después de 5 segundos
      setTimeout(() => {
        successMsg.classList.remove("show");
        successMsg.classList.add("d-none");
      }, 5000);

      // Espera antes de resetear para no vaciar campos antes de mostrar validación
      setTimeout(() => {
        form.reset();
        form.classList.remove("was-validated");
      }, 100);
    }
  });
})();
