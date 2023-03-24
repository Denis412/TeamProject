export function useValidators() {
  return {
    required: (val) =>
      (val && val.length > 0) || "Это поле не должно быть пустым!",
    minLength: (num) => (val) => val.length > num || "Пароль слишком короткий!",
    minValue: (num) => (val) => val > num || `Введите значение больше ${num}`,
    isNumber: (val) => !isNaN(val) || "Введите число!",
  };
}

export function textValidator(){
  return{
    text:(val)=>
      (val && val.length > 0) || 'Пожалуйста напишите что-нибудь',
  };
}
export function selectValidator(){
  return{
    select:(val)=>
      (val && val.length > 0) || 'Пожалуйста выберите категорию',
  };
}
export function priceValidator(){
  return{
    price:(val)=>
    (val !== null && val !== '') || 'Пожалуйста введите цену',
    minPrice:(val)=>
    (val >= 0) || 'Пожалуйста введите реальную цену'
  };
}
