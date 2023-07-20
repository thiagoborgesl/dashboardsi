$(document).ready(function(){
    var isAnimating = false; // variável de bloqueio

    $("#password").on("input", function() {
        // Verificar após o evento keydown se o campo está vazio
        setTimeout(() => {
            // Caso o input não esteja vazio
            if($(this).val() !== '') {
                // Se já estamos animando, não faça nada
                if (isAnimating) return;
                isAnimating = true; // definir o bloqueio

                $("h2").slideUp(250, function() {
                    isAnimating = false; // remover o bloqueio
                });
                
                $("form").css("margin", "0px auto 0px auto");
            } else {
                // Se já estamos animando, não faça nada
                if (isAnimating) return;
                isAnimating = true; // definir o bloqueio

                $("h2").slideDown(250, function() {
                    isAnimating = false; // remover o bloqueio
                });
                $("form").css("margin", "50px auto 0px auto");
                $("#passwordStrengthBar").hide()
            }
        }, 1);
    });
});
