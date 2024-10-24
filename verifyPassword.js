const bcrypt = require('bcryptjs');

// Reemplaza estos valores con tu hash y la contraseña real
const hashFromDatabase = '<$2a$10$3dPeQeJakEOgUhy.UUFEGOHGUUcaVb/QmQaQUiwWIBgvuBufoc4Pm>';
const plainPassword = 'password123'; // La contraseña que deseas verificar

// Comparar la contraseña con el hash
bcrypt.compare(plainPassword, hashFromDatabase, (err, isMatch) => {
  if (err) {
    console.error('Error al comparar:', err);
    return;
  }

  if (isMatch) {
    console.log('¡Contraseña correcta!');
  } else {
    console.log('Contraseña incorrecta.');
  }
});
