export function useValidators() {
  return {
    required: (val) =>
      (val && val.length > 0) || "Это поле не должно быть пустым!",
    minLength: (num) => (val) => val.length > num || "Пароль слишком короткий!",
    minValue: (num) => (val) => val > num || `Введите значение больше ${num}`,
    isNumber: (val) => !isNaN(val) || "Введите число!",
  };
}
