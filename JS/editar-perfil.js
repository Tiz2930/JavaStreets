document.querySelector('.guardar-btn').addEventListener('click', () => {
    alert('✅ Perfil actualizado con éxito (simulado)');
  });
  
    const guardarBtn = document.querySelector('.guardar-btn');
  
    if (guardarBtn) {
      guardarBtn.addEventListener('click', async () => {
        const nombre = document.getElementById('nombre').value;
        const presentacion = document.getElementById('presentacion').value;
        const genero = document.getElementById('genero').value;
  
        const usuarioId = '64f1234567890abc12345678'; // ⚠️ Reemplazá por el ID real del usuario
  
        try {
          const res = await fetch(`http://localhost:3000/usuario/${usuarioId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre, presentacion, genero })
          });
  
          if (res.ok) {
            alert('✅ Perfil actualizado con éxito');
          } else {
            alert('❌ Error al guardar');
          }
        } catch (error) {
          console.error(error);
          alert('❌ Error de conexión');
        }
      });
    }
  
  