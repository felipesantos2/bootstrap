$('#form-contato').submit(function () {
    
    // alert('Clicou no enviar');

    
    var nome = $('#nome');
    var erros = $('.alert');
    var campo = $('#campo-erro');


    
    erros.addClass('d-none');

    if (nome.val() == '') {
        erros.removeClass('d-none');
        campo.html('nome!');  // campo não preenchido
    return false;

    };

    return false;

})