
const regexEmail = `(^(?=[^@]{3,8}@)([\w.-][a-zA-Z0-9_]@(?=.{4,12}.[^.]$)[\w-][a-zA-Z0-9].[a-zA-Z][a-zA-Z][a-zA-Z])$)`
const regexPassword = ;

export default function validation(userData){
  let errors= {};

  if(!regexEmail.test(userData.username)){
    errors.username = "El usuario debe ser un email";
  }else if(!userData.username){
    errors.username = "Eln nombre de usuario no puede estar vacio";
  }else if(userData.username.length > 35){
    errors.username = "El nombre de usuario no puede tener mas de 35 caracteres"
  }
  else if(!regexPassword.test(userData.regexPassword)){
    errors.password = "Debe tener al menos un numero";
  }else if(userData.password.length< 6 && userData.password.length>10){
    errors.password = "La contraseña debe tener una longitud entre 6 y 10 caracteres"
  }
  return errors;
}