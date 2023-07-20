$(window).on('load', function() {
    var timeout = null;
    $('#password').on('keyup', function() {
        
        clearTimeout(timeout);

        // Limpar as mensagens
        $("#message").text("");
        $("#message2").text("");
        $("#crack-time").text("");
        $("#passwordStrengthBar").hide();

        // Se o campo de senha estiver vazio, limpe as mensagens
        if ($("#password").val().length == 0) {
            $("#message").text("");
            $("#crack-time").text("");
            $(".lds-ellipsis").hide();
            $("#passwordStrengthBar").hide(); // Ocultar loading
        } else {
            $(".lds-ellipsis").show(); // Mostrar loading

            timeout = setTimeout(function () {
                var result = zxcvbn($("#password").val());

                $.post("/", $("#passwordForm").serialize())
                .done(function(data) {
                    $("#message").text(data.message);

                    var passwordStrength;
                    var strengthPercentage;
                    var strengthColor;

                    switch(result.score) {
                        case 0:
                            passwordStrength = "Pessimo";
                            strengthPercentage = "0%";
                            strengthColor = "red";
                            break;  
                        case 1:
                            passwordStrength = "Ruim";
                            strengthPercentage = "25%";
                            strengthColor = "red";
                            break;
                        case 2:
                            passwordStrength = "Médio";
                            strengthPercentage = "50%";
                            strengthColor = "orange";
                            break;
                        case 3:
                            passwordStrength = "Bom";
                            strengthPercentage = "75%";
                            strengthColor = "yellowgreen";
                            break;
                        case 4:
                            passwordStrength = "Ótimo";
                            strengthPercentage = "100%";
                            strengthColor = "limegreen";
                            break;
                    }

                    $("#passwordStrengthBar .progress").css("background-color", strengthColor);
                    $("#passwordStrengthBar .progress").css("width", strengthPercentage);
                    $("#passwordStrengthBar").show();
                    $("#passwordStrengthBar").val(result.score);

                    $("#message2").text("Força da senha: " + passwordStrength);
                    $("#crack-time").text("Tempo estimado para quebrar esta senha: " + translateTimeEstimate(result.crack_times_display.offline_slow_hashing_1e4_per_second));

                    $(".lds-ellipsis").hide(); // Ocultar loading após receber a resposta
                });

        }, 1000);
        }
    });
});