$('#form-contato').submit(function () {
    
    // alert('Clicou no enviar');

    
    var nome = $('#nome');
    var email = $('#email');
    var mensagem = $('#mensagem');
    var erros = $('.alert');
    var campo = $('#campo-erro');


    // escondendo a mensagem de erro
    erros.addClass('d-none');
    $('.is-invalid').removeClass('is-invalid');


    // Valida o campo Nome
    if (nome.val() == '') {
        erros.removeClass('d-none');
        campo.html('nome!');  // campo não preenchido
        nome.focus();
        nome.addClass('is-invalid'); 
    return false;

    };

    // Valida o Campo E-mail
    if (email.val() == '') {
        erros.removeClass('d-none');
        campo.html('E-mail!');  // campo não preenchido
        nome.focus();
        nome.addClass('is-invalid'); 
    return false;

    };
    
    // Valida o campo Mensagem
    if (mensagem.val() == '') {
        erros.removeClass('d-none');
        campo.html('Mensagem!');  // campo não preenchido
        nome.focus();
        nome.addClass('is-invalid'); 
    return false;

    };

    // Se chegar aqui os dados podem se enviados
    return true;

})