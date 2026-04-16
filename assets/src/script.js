// 1 - saudacao
// 2 - valida campos nulos form
// 3 - limpar campos form
// 4 - mostra galeria
// 5 - 

document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector("#saudacao")) {
        let saudacaoDoc = document.querySelector("#saudacao");
    
        let data     = new Date;
        let horario  = data.getHours();
        let semana   = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
        let dia      = data.getDay();
        let mes      = data.getMonth() + 1;
        let ano      = data.getFullYear();
    
        if (horario >= 0 && horario < 12) {
            saudacao = "Bom dia";
        } else if (horario >= 12 && horario < 18) {
            saudacao = "Boa tarde"
        } else if (horario >= 18 && horario < 24) {
            saudacao = "Boa noite"
        }
    
        let mensagem = saudacao + "! Hoje é " + semana[dia] + ", " + dia + "/" + mes + "/" + ano + ".";
    
        saudacaoDoc.innerText = mensagem;
    }

    if (document.querySelector("#formulario")) { 
        let formulario = document.querySelector("#formulario");
        let btnReset   = document.querySelector("#btnReset");

        formulario.onsubmit = function() {
            let checkboxesChecadas = document.querySelectorAll('input[name="questao2"]:checked');

            if (formulario.nomeUsuario.value == "") { 
                alert ("Campo nome não foi preenchido.");
                return false;
            } else if (formulario.emailUsuario.value == "") { 
                alert ("Campo e-mail não foi preenchido.");
                return false;
            } else if (formulario.questao1.value == "") { 
                alert ("Questão 1 não foi respondida.");
                return false; 
            } else if (checkboxesChecadas.length === 0) {
                alert ("Questão 2 não foi respondida.");
                return false; 
            } else if (formulario.questao3.value == "") {
                alert ("Questão 3 não foi respondida.");
                return false; 
            } else if (formulario.questao4.value == "") {
                alert ("Questão 4 não foi respondida.");
                return false; 
            } else { 
                alert ("Sucesso!");
                return true;
            } 
        };

        btnReset.onclick = function() {
            formulario.nomeUsuario.value  = "";
            formulario.emailUsuario.value = "";
            document.querySelectorAll('input[name="questao1"]').forEach(el => el.checked = false);
            document.querySelectorAll('input[name="questao2"]').forEach(el => el.checked = false);
            formulario.questao3.value     = "";
            formulario.questao4.value     = "";
        }
    }

    if (document.querySelector("#mostrarGaleria")) {
        let checkboxGaleria = document.querySelector("#mostrarGaleria");

        checkboxGaleria.onclick = function() {
            if (checkboxGaleria.checked == true) {
                document.querySelector("#sectionGaleria").classList.add('d-flex');
                document.querySelector("#sectionGaleria").classList.remove('d-none');
            } else {
                document.querySelector("#sectionGaleria").classList.remove('d-flex');
                document.querySelector("#sectionGaleria").classList.add('d-none');
            }
        }
    }

    if (document.querySelector("#titulosMaiusculos")) {
        let checkboxTitulos = document.querySelector("#titulosMaiusculos");
        let todosTitulos    = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

        checkboxTitulos.onclick = function() {
            todosTitulos.forEach(function(titulo) {
                if (checkboxTitulos.checked == true) {
                    titulo.innerText = titulo.innerText.toUpperCase();
                } else {
                    titulo.innerText = titulo.innerText.charAt(0).toUpperCase() + titulo.innerText.slice(1).toLowerCase();
                }
            });
        }
    }
});