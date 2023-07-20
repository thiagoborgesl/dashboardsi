$(window).on('load', function() {
    var timeout = null;
    $('#password').on('keyup', function() {
        
        clearTimeout(timeout);

        // Limpar as mensagens
        $("#message").text("");
        $("#message2").text("");
        $("#message3").text("");
        $("#crack-time").text("");
        $("#passwordStrengthBar").hide();
        

        // Se o campo de senha estiver vazio, limpe as mensagens
        if ($("#password").val().length == 0) {
            $("#message").text("");
            $("#crack-time").text("");
            $(".lds-ellipsis").hide();
            $("#passwordStrengthBar").hide(); // Ocultar loading
            $("#message-container").css("background", "rgba(1,1,1,0)");
            $("#message-container").css("box-shadow", "none");
        } else {
            $("#message-container").css("background", "rgba(1,1,1,0)");
            $("#message-container").css("box-shadow", "none");
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
                            /*passwordStrength = "péssima";
                            strengthPercentage = "0%";
                            strengthColor = "red";
                            break;  */
                        case 1:
                            passwordStrength = "ruim";
                            strengthPercentage = "25%";
                            strengthColor = "red";
                            break;
                        case 2:
                            passwordStrength = "média";
                            strengthPercentage = "50%";
                            strengthColor = "orange";
                            break;
                        case 3:
                            passwordStrength = "boa";
                            strengthPercentage = "75%";
                            strengthColor = "yellowgreen";
                            break;
                        case 4:
                            passwordStrength = "ótima";
                            strengthPercentage = "100%";
                            strengthColor = "limegreen";
                            break;
                    }

                    switch(result.score) {
                        case 1:
                            $("#bar-segment-1").removeClass('empty average good excellent').addClass('bad');
                            $("#bar-segment-2, #bar-segment-3, #bar-segment-4").removeClass('bad average good excellent').addClass('empty');
                            break;
                        case 2:
                            $("#bar-segment-1, #bar-segment-2").removeClass('empty bad good excellent').addClass('average');
                            $("#bar-segment-3, #bar-segment-4").removeClass('bad average good excellent').addClass('empty');
                            break;
                        case 3:
                            $("#bar-segment-1, #bar-segment-2, #bar-segment-3").removeClass('empty bad average excellent').addClass('good');
                            $("#bar-segment-4").removeClass('bad average good excellent').addClass('empty');
                            break;
                        case 4:
                            $("#bar-segment-1, #bar-segment-2, #bar-segment-3, #bar-segment-4").removeClass('empty bad average good').addClass('excellent');
                            break;
                        default: // case 0 and anything else
                        $("#bar-segment-1").removeClass('empty average good excellent').addClass('bad');
                        $("#bar-segment-2, #bar-segment-3, #bar-segment-4").removeClass('bad average good excellent').addClass('empty');
                            break;
                    }


                    $("#passwordStrengthBar .progress").css("background-color", strengthColor);
                    $("#passwordStrengthBar .progress").css("width", strengthPercentage);
                    $("#passwordStrengthBar").show();
                    $("#message-container").show();
                    $("#passwordStrengthBar").val(result.score);

                    let passwordTip = dicasDeSenha[passwordStrength.toLowerCase()][Math.floor(Math.random() * dicasDeSenha[passwordStrength.toLowerCase()].length)];
                    $("#message3").text("Dica de segurança: " + passwordTip);
                    $("#message2").html("Você definiu uma senha <b>" + passwordStrength.toUpperCase() + "</b>. Clique <a id=\"generate-password-link\" href=\"#\" style=\"color:black\">aqui</a> para criar uma senha perfeita.");
                    $("#crack-time").text("Estimativa de tempo para decifrar sua senha: " + translateTimeEstimate(result.crack_times_display.online_no_throttling_10_per_second));
                    console.log(result.crack_times_display.offline_slow_hashing_1e4_per_second)
                    $("#message-container").css("background", "white");
                    $("#message-container").css("box-shadow", "0px 0px 10px 5px " + strengthColor);
                    
                    $(".lds-ellipsis").hide(); // Ocultar loading após receber a resposta
                });

        }, 1000);
        }
    });
});