$(document).ready(function() {
    console.log('Documento carregado.');  // Verifica se o documento está pronto
    $(document).on('click', '#generate-password-link', function(event) {
        event.preventDefault();
        console.log('Clique detectado.');  // Verifica se o evento de clique está sendo detectado
        var newWindow = window.open("", "", "width=400,height=200");
        var password = generatePassword(15);
        console.log('Senha gerada: ' + password);  // Exibe a senha gerada
        newWindow.document.write(`
            <html>
            <head>
                <style>
                    body {
                        font-family: 'Trebuchet MS', Arial, sans-serif;
                        color: #00427d;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        height: 100vh;
                        margin: 0;
                        background: linear-gradient(to top right, rgba(0,105,174,1), rgba(0,191,223,1));
                    }
                    input[type=password], input[type=text] {
                        padding: 10px;
                        font-size: 2em;
                        width: 100%;
                        border: none; /* remove as bordas */
                        border-bottom: 1px solid rgb(255,255,255); /* adiciona a linha de baixo */
                        border-radius: 0; /* remove as bordas arredondadas */
                        background-color: transparent; /* torna o fundo transparente */
                        transition: all 0.3s ease; /* adiciona transição para todas as propriedades */
                        outline: none;
                        color: white;
                    }
                    
                    input[type=password]:hover, input[type=text]:hover {
                        border-bottom-color: #0070ba;
                    }
                    
                    input[type=password]:focus, input[type=text]:focus {
                        border-color: #00a2ff;
                        border-radius: 4px; /* adiciona as bordas arredondadas ao focar */
                        background-color: rgba(255, 255, 255, 0.7); /* torna o fundo branco ao focar */
                        box-shadow: 0 0 5px rgba(0, 162, 255, 0.5);
                        color: black;
                    }
                    p {
                        font-size: 20px;
                        color: white;
                    }
                    button {
                        padding: 10px 20px;
                        font-size: 20px;
                        color: white;
                        background-color: #007bff;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                    }
                    button:hover {
                        background-color: #0056b3;
                    }
                </style>
            </head>
            <body>
                <p>Nova senha: <input id='password' value='${password}' readonly /></p>
                <button onclick="copyPasswordToClipboard()">Copiar senha</button>
                <script>
                    function copyPasswordToClipboard() {
                        var copyText = document.getElementById("password");
                        copyText.select();
                        document.execCommand("copy");
                    }
                </script>
            </body>
            </html>`);
    });

    function generatePassword(length) {
        const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const symbols = "!@#$%^&*(){}[]<>,.?/~`-=_+";
    
        let password = "";
        const types = [alphabets, numbers, symbols];
        const values = new Uint32Array(length * 2); // Nós precisamos de 2 números aleatórios para cada caractere na senha
        window.crypto.getRandomValues(values);
        for(let i=0; i<length; i++) {
            let charSet = types[values[i * 2] % types.length]; // Escolhe um conjunto de caracteres aleatoriamente
            password += charSet[values[i * 2 + 1] % charSet.length]; // Escolhe um caractere aleatório do conjunto de caracteres
        }
        return password;
    }
});
