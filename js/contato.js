function validados(){
  var nome = document.getElementById('nome').value
  var email = document.getElementById('email').value
  var telefone = document.getElementById('telefone').value
  var mensagem = document.getElementById('mensagem').value
  if(nome == '') {
    // mostrar erro
    erro1.innerHTML = "Preencha esse campo."
    // document.getElementById('nome').style.borderColor= "#e74c3c"
  }else{
    erro1.innerHTML = ""
  }}
  /*}else if (email == '') {
    // mostrar erro
    erro2.innerHTML = "Preencha esse campo."
  //  document.getElementById('erro1').style.color= "#e74c3c"
  //  document.getElementById('email').style.borderColor= "#e74c3c"
  }else if(telefone == ''){
  // mostrar erro
    erro3.innerHTML = "Preencha esse campo."
  //  document.getElementById('telefone').style.borderColor= "#e74c3c"

  } if(mensagem == ''){
    // mostrar erro
    erro4.innerHTML = "Preencha esse campo."
  //document.getElementById('mensagem').style.borderColor= "#e74c3c"
  }*/
function validados1(){
  var nome = document.getElementById('nome').value
  var email = document.getElementById('email').value
  var telefone = document.getElementById('telefone').value
  var mensagem = document.getElementById('mensagem').value
  if (email == '') {
    // mostrar erro
    erro2.innerHTML = "Preencha esse campo."
  }else{
    erro2.innerHTML = ""
  }
}
function validados2(){
  var nome = document.getElementById('nome').value
  var email = document.getElementById('email').value
  var telefone = document.getElementById('telefone').value
  var mensagem = document.getElementById('mensagem').value
  if(telefone == ''){
  // mostrar erro
    erro3.innerHTML = "Preencha esse campo."
  //  document.getElementById('telefone').style.borderColor= "#e74c3c"
  }else{
    erro3.innerHTML = ""
  }
}

function validados3(){
  var nome = document.getElementById('nome').value
  var email = document.getElementById('email').value
  var telefone = document.getElementById('telefone').value
  var mensagem = document.getElementById('mensagem').value
  if(mensagem == ''){
    // mostrar erro
    erro4.innerHTML = "Preencha esse campo."
  //document.getElementById('mensagem').style.borderColor= "#e74c3c"
  }else{
    erro4.innerHTML = ""
  }
}


res.addEventListener('click', validados)
res.addEventListener('click', validados1)
res.addEventListener('click', validados2)
res.addEventListener('click', validados3)

//} else if (telefone !== '') {
  // adicionar borda verde
//document.getElementById('telefone').style.borderColor= "#2ecc71" 

//}else if (email !== ''){
  // adicionar borda verde
//document.getElementById('email').style.borderColor= "#2ecc71"

 //}else if (nome !== ''){
  // adicionar borda verde
 // document.getElementById('nome').style.borderColor= "#2ecc71" 

 //} else if (mensagem !== ''){
  // adicionar borda verde
 // document.getElementById('mensagem').style.borderColor= "#2ecc71"
