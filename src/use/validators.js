export function useValidators() {
  return {
    required: (val) =>
      (val && val.length > 0) || "Это поле не должно быть пустым!",
    minLength: (num) => (val) => val.length > num || "Пароль слишком короткий!",
  };
}
