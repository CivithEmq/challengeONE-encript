const areatexto = document.querySelector(".areatexto")
const mensajefinal = document.querySelector(".mensajefinal")
const munheco = document.querySelector(".munheco")
const mensajeencriptado = document.querySelector(".mensajeencriptado")
const btnCopiar = document.querySelector(".boton-copiar")

// La letra "e" es convertida a "enter"
// La letra "i" es convertida a "imes"
// La letra "a" es convertida a "ai"
// La letra "o" es convertida a "ober"
// La letra "u" es convertida a "ufat"
// El espacio " " es convertido a "ilil"

function btnEncriptar(){
    const textoEncriptado = encriptar(areatexto.value)
    mensajefinal.value = textoEncriptado
    areatexto.value = ''
    ocultar(mensajefinal.value.length)
}

function encriptar(stringEncriptada){
    let matrizCodigo = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat'],[' ','ilil']]

    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i<matrizCodigo.length;i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(areatexto.value)
    mensajefinal.value = textoDesencriptado
    areatexto.value = ''
    ocultar(mensajefinal.value.length)
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat'],[' ','ilil']]

    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i=0;i<matrizCodigo.length;i++)
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    return stringDesencriptada
}

function ocultar(largo){
   if(largo != 0){
      munheco.style.display = 'none'
      mensajeencriptado.style.display = 'none'
      mensajefinal.style.display = 'flex';
      btnCopiar.style.display = 'block';
   }
   else{  
      munheco.style.display = 'flex';
      mensajeencriptado.style.display = 'flex';
      mensajefinal.style.display = 'none';
      copiar.style.display = 'none';
   }
}

function Copiar(){
   let contenido = mensajefinal.value;
   navigator.clipboard.writeText(contenido)
}

