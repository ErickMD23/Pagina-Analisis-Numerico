// Función para mostrar/ocultar el menú lateral
function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Función para mostrar/ocultar el submenú
function toggleSubMenu() {
    const submenu = document.querySelector(".submenu");
    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
}

// Función para cerrar el menú lateral
function closeMenu() {
    const menu = document.getElementById("sideMenu");
    menu.style.display = "none";
}

// Función para redirigir a la página del tema seleccionado
function navigateTo(page) {
    window.location.href = page;
}