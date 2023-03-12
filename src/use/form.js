import { reactive } from "vue";
import { useField } from "./field";

export function useForm(init = {}) {
  const form = reactive({});

  Object.entries(init).forEach(([key, value]) => (form[key] = useField(value)));

  return form;
}
