const btnEvento = document.getElementById('btn-evento');
const btnMerch = document.getElementById('btn-merch');
const formEvento = document.getElementById('form-evento');
const formMerch = document.getElementById('form-merch');
const formTitle = document.getElementById('form-title');

// Mostrar Formularios
btnEvento.addEventListener('click', () => {
    formEvento.style.display = 'block';
    formMerch.style.display = 'none';
    formTitle.textContent = 'Publicar Evento';
});

btnMerch.addEventListener('click', () => {
    formMerch.style.display = 'block';
    formEvento.style.display = 'none';
    formTitle.textContent = 'Publicar Merchandising';
});

// Validar formularios antes de enviar
formEvento.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validarFormulario(formEvento)) {
        eventoPublicado();
        formEvento.reset();
        formEvento.style.display = 'none';
        formTitle.textContent = 'Completa todos los campos';
    } else {
        rechazoPublicacion();
    }
});

formMerch.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validarFormulario(formMerch)) {
        merchPublicado();
        formMerch.reset();
        formMerch.style.display = 'none';
        formTitle.textContent = 'Completa todos los campos';
    } else {
        rechazoPublicacion();
    }
});

// Validar que todos los campos estén completos
function validarFormulario(formulario) {
    const inputs = formulario.querySelectorAll('input, textarea, select');
    for (let input of inputs) {
        if (input.type !== "file" && input.offsetParent !== null && !input.value.trim()) {
            return false;
        }
        if (input.type === "file" && input.required && input.files.length === 0) {
            return false;
        }
    }
    return true;
}

// Alertas exitosas
function eventoPublicado() {
    Swal.fire({
        title: "Evento publicado con éxito",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
    });
};

function merchPublicado() {
    Swal.fire({
        title: "Merchandising publicado con éxito",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
    });
};

// Alerta de rechazo
function rechazoPublicacion() {
    Swal.fire({
        title: "Por favor completá todos los campos",
        icon: "warning",
        timer: 1500,
        showConfirmButton: false
    });
};

// Preview de imágenes
document.addEventListener('DOMContentLoaded', () => {
    // Evento
    const inputEvento = document.getElementById('evento-imagen');
    const previewEvento = document.getElementById('img-preview-container');

    inputEvento.addEventListener('change', () => {
        previewEvento.innerHTML = '';

        const files = Array.from(inputEvento.files);
        const maxFiles = 6;

        if (files.length > maxFiles) {
            Swal.fire({
                title: `Solo podés subir hasta ${maxFiles} imágenes.`,
                icon: "warning",
                timer: 1500,
                showConfirmButton: false
            });
            inputEvento.value = '';
            previewEvento.classList.remove('with-border');
            return;
        }

        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = () => {
                const img = document.createElement('img');
                img.src = reader.result;
                img.classList.add('img-preview');
                previewEvento.appendChild(img);
            };
            reader.readAsDataURL(file);
        });
    });

    // Merch
    const merchInput = document.getElementById('merch-imagen');
    const merchPreview = document.getElementById('merch-preview-container');

    merchInput.addEventListener('change', () => {
        merchPreview.innerHTML = '';
        const files = Array.from(merchInput.files);
        const maxFiles = 6;

        if (files.length > maxFiles) {
            Swal.fire({
                title: `Solo podés subir hasta ${maxFiles} imágenes.`,
                icon: "warning",
                timer: 1500,
                showConfirmButton: false
            });

            merchInput.value = '';
            return;
        }

        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = () => {
                const img = document.createElement('img');
                img.src = reader.result;
                img.classList.add('img-preview');
                merchPreview.appendChild(img);
            };
            reader.readAsDataURL(file);
        });
    });
});