const regexEmail = /^[a-zA-Z0-9._%+-]{1,35}@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/
const regexPassword = /[a-zA-Z]/ && /[0-9]/;

export function validation({username, password}){
  let errors= {};

  if(!regexEmail.test(username)){
    errors.username = "El usuario debe ser un email";
  }else if(!username){
    errors.username = "Eln nombre de usuario no puede estar vacio";
  }else if(username.length > 35){
    errors.username = "El nombre de usuario no puede tener mas de 35 caracteres"
  }
  else if(!regexPassword.test(regexPassword)){
    errors.password = "Debe tener al menos un numero";
  }else if(password.length< 6 && password.length>10){
    errors.password = "La contraseña debe tener una longitud entre 6 y 10 caracteres"
  }
  return errors;
}