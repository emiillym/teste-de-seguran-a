document.addEventListener("DOMContentLoaded", function () {

    // ELEMENTOS

    const inicio = document.getElementById("inicio");
    const verificacao = document.getElementById("verificacao");
    const desafio = document.getElementById("desafio");
    const analise = document.getElementById("analise");
    const acesso = document.getElementById("acesso");
    const terminal = document.getElementById("terminal");

    const btnInicio = document.getElementById("btnInicio");
    const btnContinuar = document.getElementById("btnContinuar");
    const btnModulo = document.getElementById("btnModulo");
    const btnFinal = document.getElementById("btnFinal");

    const log1 = document.getElementById("log1");
    const log2 = document.getElementById("log2");
    const log3 = document.getElementById("log3");

    const progresso = document.getElementById("progresso");
    const mensagem = document.getElementById("mensagem");

    const progressoAnalise =
        document.getElementById("progressoAnalise");

    const textoAnalise =
        document.getElementById("textoAnalise");

    const terminalTexto =
        document.getElementById("terminalTexto");

    const cartao =
        document.getElementById("cartao");

    const resultadoTerminal =
        document.getElementById("resultadoTerminal");


    // TROCAR DE TELA

    function mostrarTela(tela) {

        const telas = [
            inicio,
            verificacao,
            desafio,
            analise,
            acesso
        ];

        telas.forEach(function (item) {

            if (item) {
                item.classList.remove("ativa");
            }

        });

        if (tela) {
            tela.classList.add("ativa");
        }
    }


    // INICIAR

    btnInicio.addEventListener("click", function () {

        mostrarTela(verificacao);

        log1.textContent =
            "[ WAIT ] Verificando conexão...";

        log2.textContent =
            "[ WAIT ] Analisando dispositivo...";

        log3.textContent =
            "[ WAIT ] Estabelecendo conexão segura...";

        progresso.style.width = "0%";

        btnContinuar.classList.add("escondido");


        setTimeout(function () {

            log1.textContent =
                "[ OK ] Conexão verificada";

            log1.classList.add("ok");

            progresso.style.width = "33%";

        }, 700);


        setTimeout(function () {

            log2.textContent =
                "[ OK ] Dispositivo analisado";

            log2.classList.add("ok");

            progresso.style.width = "66%";

        }, 1400);


        setTimeout(function () {

            log3.textContent =
                "[ OK ] Conexão segura estabelecida";

            log3.classList.add("ok");

            progresso.style.width = "100%";

            btnContinuar.classList.remove("escondido");

        }, 2100);

    });


    // IR PARA O DESAFIO

    btnContinuar.addEventListener("click", function () {

        mostrarTela(desafio);

        mensagem.textContent =
            "Aguardando resposta...";

    });


    // DESAFIO

    const opcoes =
        document.querySelectorAll(".opcoes button");


    opcoes.forEach(function (botao) {

        botao.addEventListener("click", function () {

            const correta =
                this.dataset.correta;


            if (correta !== "true") {

                mensagem.textContent =
                    "[ WARNING ] Procedimento de risco detectado.";

                return;
            }


            mensagem.textContent =
                "[ OK ] Verificação concluída. Prosseguindo...";


            opcoes.forEach(function (item) {

                item.disabled = true;

            });


            setTimeout(function () {

                iniciarAnalise();

            }, 1000);

        });

    });


    // ANÁLISE

    function iniciarAnalise() {

        mostrarTela(analise);

        progressoAnalise.style.width = "0%";

        textoAnalise.textContent =
            "Initializing...";


        const etapas = [

            "Initializing...",
            "Checking security patterns...",
            "Processing results...",
            "Validating access...",
            "Access authorized."

        ];


        let etapa = 0;


        const intervalo =
            setInterval(function () {

                etapa++;

                progressoAnalise.style.width =
                    (etapa * 20) + "%";

                textoAnalise.textContent =
                    etapas[etapa - 1];


                if (etapa >= etapas.length) {

                    clearInterval(intervalo);

                    setTimeout(function () {

                        mostrarTela(acesso);

                    }, 900);

                }

            }, 700);

    }


    // ABRIR TERMINAL

    btnModulo.addEventListener("click", function () {

        inicio.classList.remove("ativa");
        verificacao.classList.remove("ativa");
        desafio.classList.remove("ativa");
        analise.classList.remove("ativa");
        acesso.classList.remove("ativa");

        terminal.classList.add("ativa");

        iniciarTerminal();

    });


    // TERMINAL

    function iniciarTerminal() {

        terminalTexto.textContent = "";

        cartao.style.display = "none";

        resultadoTerminal.style.display = "none";

        btnFinal.style.display = "none";


        const linhas = [

            "┌──────────────────────────────────────────────────────────┐",

            "│              SECURE TERMINAL // MODULE 04              │",

            "└──────────────────────────────────────────────────────────┘",

            "",

            "root@system:~$ ./initialize_module --advanced",

            "[+] Loading security modules...",

            "[+] Loading encryption engine...",

            "[+] Loading analysis module...",

            "[+] Loading temporary workspace...",

            "[OK] All modules loaded.",

            "",

            "root@system:~$ system_check",

            "[SYSTEM] Checking environment...",

            "[SYSTEM] Checking connection...",

            "[SYSTEM] Checking encryption layer...",

            "[SYSTEM] Checking session token...",

            "[SYSTEM] Checking authorization...",

            "[OK] Environment verified.",

            "",

            "root@system:~$ scan --target simulated_card",

            "",

            "---------------------------------------------",

            " TARGET ANALYSIS",

            "---------------------------------------------",

            "STATUS       : DETECTED",

            "TYPE         : SIMULATED",

            "PROFILE      : TEST_CARD",

            "SECURITY     : ACTIVE",

            "ENCRYPTION   : ENABLED",

            "---------------------------------------------",

            "",

            "root@system:~$ analyze_card --deep",

            "[SCAN] Initializing analysis...",

            "[SCAN] Reading simulated structure...",

            "[SCAN] Mapping card layout...",

            "[SCAN] Checking security parameters...",

            "[SCAN] Generating temporary identifiers...",

            "[SCAN] Comparing simulated data...",

            "[OK] Analysis complete.",

            "",

            "root@system:~$ prepare_clone --simulation",

            "[+] Creating temporary profile...",

            "[+] Allocating virtual memory...",

            "[+] Preparing simulated card structure...",

            "[+] Preparing virtual chip...",

            "[+] Preparing simulated magnetic data...",

            "[+] Synchronizing profile...",

            "",

            "---------------------------------------------",

            " CLONING SIMULATION",

            "---------------------------------------------",

            "",

            "[CLONE] Preparing simulated environment...",

            "[CLONE] ███░░░░░░░░░░░░░░░ 08%",

            "[CLONE] █████░░░░░░░░░░░░░ 21%",

            "[CLONE] ███████░░░░░░░░░░░ 34%",

            "[CLONE] █████████░░░░░░░░░ 47%",

            "[CLONE] ███████████░░░░░░░ 59%",

            "[CLONE] █████████████░░░░░ 72%",

            "[CLONE] ███████████████░░░ 84%",

            "[CLONE] █████████████████░ 96%",

            "[CLONE] ███████████████████ 100%",

            "",

            "[CLONE] Duplicating simulated card structure...",

            "[CLONE] Generating virtual copy...",

            "[CLONE] Synchronizing virtual chip...",

            "[CLONE] Synchronizing simulated data...",

            "[CLONE] Rebuilding temporary profile...",

            "[CLONE] Applying simulated security parameters...",

            "[CLONE] Verifying generated profile...",

            "[OK] Simulated clone generated.",

            "",

            "root@system:~$ transaction --simulation",

            "[TRANSFER] Preparing fictional transaction...",

            "[TRANSFER] Validating simulation environment...",

            "[TRANSFER] Generating fictional transaction ID...",

            "[TRANSFER] Processing simulated transfer...",

            "[TRANSFER] ████████████████████ 100%",

            "[OK] Fictional transaction completed.",

            "",

            "root@system:~$ verify_clone",

            "[VERIFY] Checking structure...",

            "[VERIFY] Checking virtual chip...",

            "[VERIFY] Checking simulated identifiers...",

            "[VERIFY] Checking encryption...",

            "[VERIFY] Checking integrity...",

            "[VERIFY] 100% complete.",

            "",

            "---------------------------------------------",

            " FINAL PROCESS",

            "---------------------------------------------",

            "",

            "[PROCESS] Preparing output...",

            "[PROCESS] Generating simulation report...",

            "[PROCESS] Closing temporary connections...",

            "[PROCESS] Cleaning workspace...",

            "[PROCESS] Saving simulation state...",

            "[OK] Process finalized.",

            "",

            "root@system:~$ status",

            "",

            "STATUS       : COMPLETED",

            "MODULE       : CARD SIMULATION",

            "OPERATION    : FICTIONAL CLONING",

            "RESULT       : SUCCESS",

            "DATA SOURCE  : FICTIONAL",

            "",

            "root@system:~$ display-result",

            "> Preparing final report...",

            "> Simulation completed successfully.",

            "",

            "root@system:~$ exit",

            "> Closing secure terminal...",

            "> Session terminated."

        ];


        let indice = 0;


        function escreverLinha() {

            if (indice >= linhas.length) {

                mostrarResultado();

                return;
            }


            terminalTexto.textContent +=
                linhas[indice] + "\n";


            indice++;


            setTimeout(
                escreverLinha,
                90
            );

        }


        escreverLinha();

    }


    // RESULTADO

    function mostrarResultado() {

        setTimeout(function () {

            cartao.style.display = "block";


            // Número fictício

            const numero =
                cartao.querySelector(".numero");

            if (numero) {
                numero.textContent =
                    "67676767";
            }


            setTimeout(function () {

                resultadoTerminal.innerHTML =

                    "STATUS: COMPLETED<br>" +
                    "CARD: 67676767<br>" +
                    "OPERATION: FICTIONAL CLONING<br>" +
                    "<br>" +
                    "$100,000.00 TRANSFERRED SUCCESSFULLY<br>" +
                    "<br>" +
                    "TRANSACTION: SIMULATED<br>" +
                    "DATA SOURCE: FICTIONAL";


                resultadoTerminal.style.display =
                    "block";


                setTimeout(function () {

                    btnFinal.style.display =
                        "block";

                }, 1000);

            }, 1200);

        }, 700);

    }


    // ENCERRAR

    btnFinal.addEventListener("click", function () {

        location.reload();

    });

});
