
/* Get Elements */ 

function showPassword () {
    const eye = document.getElementById('eye');
    const eyeSlash = document.getElementById('eye-slash');
    const fieldPassword = document.getElementById('field-password');

/* Se o eyeslash estiver none e o olho ativo, o password será visualizado como texto */    

    if (eye.style.display === 'none') {
        eye.style.display ='block';
        eyeSlash.style.display = 'none';
        fieldPassword.type = 'text';

/* Se o olho estiver ativo, o password será visualizado escondido */
        
    } else {
        eye.style.display ='none';
        eyeSlash.style.display = 'block';
        fieldPassword.type = 'password';
    }
};

/* O preventDefault previne o comportamento default da página de recarregar ao enviar dados */

document.getElementById ('btn-login').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Logado com Sucesso!');
})

