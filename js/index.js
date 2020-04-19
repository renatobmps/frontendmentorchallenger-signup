let $ = document.querySelector.bind(document)
let $a = document.querySelectorAll.bind(document)

$a(".campos").forEach(campo => {
    campo.addEventListener("blur", () => {
        console.log(campo.type)
        if(campo.type == "email"){
            console.log("É email")
            if(!validacaoEmail(campo)){
                console.log("Email fora do padrão")
                campo.parentElement.classList.add("com-erro")
            }else{
                console.log("Email no padrão")
                campo.parentElement.classList.remove("com-erro")
            }
        }else{
            console.log("Não é email")
            if(campo.value == 0){
                console.log("Campo vazio")
                campo.parentElement.classList.add("com-erro")
            }else{
                console.log("Campo preenchido")
                campo.parentElement.classList.remove("com-erro")
            }
        }
    })
});

$("form").addEventListener("submit", e => {
    e.preventDefault()
    if(validaVazio($a(".campos")[0])){
        if(validaVazio($a(".campos")[1])){
            if(validacaoEmail($a(".campos")[2])){
                if(validaVazio($a(".campos")[3])){
                    alert(`Submit!
                    
                    Name: ${$a(".campos")[0].value}
                    Last Name: ${$a(".campos")[1].value}
                    Email: ${$a(".campos")[2].value}
                    Password: ${$a(".campos")[3].value}`)
                    $a(".campos").forEach(campo => {
                        campo.value = ""
                    });
                    $a(".campos")[0].focus()
                }else{
                    $("#campo-password").classList.add("com-erro")
                    $a(".campos")[3].focus()
                }
            }else{
                $("#campo-email").classList.add("com-erro")
                $a(".campos")[2].focus()
            }
        }else{
            $("#campo-last-name").classList.add("com-erro")
            $a(".campos")[1].focus()
        }
    }else{
        $("#campo-first-name").classList.add("com-erro")
        $a(".campos")[0].focus()
    }
})

function validaVazio(campo) {
    if(campo.value == 0){
        return false
    }else{
        return true
    }
}

function validacaoEmail(field, e) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    
    if ((usuario.length >=1) &&
    (dominio.length >=3) && 
    (usuario.search("@")==-1) && 
    (dominio.search("@")==-1) &&
    (usuario.search(" ")==-1) && 
    (dominio.search(" ")==-1) &&
    (dominio.search(".")!=-1) &&      
    (dominio.indexOf(".") >=1)&& 
    (dominio.lastIndexOf(".") < dominio.length - 1)
    ){
        return true
    }else{
        return false
    }
}