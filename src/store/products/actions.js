// import userApi from "../../api/user";
import { GetProducts } from "src/queries/queries";

export function FETCH_PRODUCTS({ commit },products) {
  try {
    console.log(products)
    commit("UPDATE_PRODUCTS",products);
  } catch (error) {
    throw error;
  }
}
