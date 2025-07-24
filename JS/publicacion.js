const btnEvento = document.getElementById('btn-evento');
const btnMerch = document.getElementById('btn-merch');
const formEvento = document.getElementById('form-evento');
const formMerch = document.getElementById('form-merch');
const formTitle = document.getElementById('form-title');

//Mostrar Formularios

btnEvento.addEventListener('click', () => {
    formEvento.style.display = 'block';
    formMerch.style.display = 'none';
    formTitle.textContent = 'Publicar Evento'
});

btnMerch.addEventListener('click', () => {
    formMerch.style.display = 'block';
    formEvento.style.display = 'none';
    formTitle.textContent = 'Publicar Merchandising'
});

//Cuando el usuario apreta el formulario

formEvento.addEventListener('submit', (e) => {
    e.preventDefault();
    eventoPublicado();
    formEvento.reset();
    formEvento.style.display = 'none';
    formTitle.textContent = 'Completa todos los campos'
})

formMerch.addEventListener('submit', (e) => {
    e.preventDefault();
    merchPublicado();
    formMerch.reset();
    formMerch.style.display = 'none';
    formTitle.textContent = 'Completa todos los campos'
})

//Alertas exitosas

function eventoPublicado() {
    Swal.fire({
        title: "Evento publicado con exito",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
    });
};

function merchPublicado() {
    Swal.fire({
        title: "Merchandising publicado con exito",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
    });
};

//Alertas rechazo

function rechazoPublicacion() {
    Swal.fire({
        title: "Porfavor completa todos los campos",
        icon: "Opps...",
        timer: 1500,
        showConfirmButton: false
    });
};

//Preview imagen


document.addEventListener('DOMContentLoaded', () => {
    // Evento
    const inputEvento = document.getElementById('evento-imagen');
    const previewEvento = document.getElementById('img-preview-container');

    inputEvento.addEventListener('change', () => {
        previewEvento.innerHTML = ''; // limpio preview

        const files = Array.from(inputEvento.files);

        // Límite de imágenes
        const maxFiles = 6;
        if (files.length > maxFiles) {
            Swal.fire({
                title: `Solo podés subir hasta ${maxFiles} imágenes.`,
                icon: "warning",
                timer: 1500,
                showConfirmButton: false
            });
            inputEvento.value = ''; // borro selección
            previewEvento.classList.remove('with-border'); // sin borde porque no hay imágenes
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

            merchInput.value = ''; // Borrar selección
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
