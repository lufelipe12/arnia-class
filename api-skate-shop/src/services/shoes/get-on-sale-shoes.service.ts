import { shoesRepository } from "../../database/repositories/shoes.repository";

export async function getOnSaleShoesService() {
  try {
    const onSaleShoes = await shoesRepository.getOnSale();

    return {
      message: "Here are on sale shoes.",
      data: onSaleShoes,
      statusCode: 200,
    };
  } catch (error) {
    return {
      message: "Error not defined.",
      data: null,
      statusCode: 500,
    };
  }
}
