import { shoesRepository } from "../../database/repositories/shoes.repository";

export async function getShoesById(id: string) {
  try {
    const shoes = await shoesRepository.getById(id);

    if (!shoes) {
      return {
        message: `Shoes with this id: ${id} not found.`,
        data: null,
        statusCode: 404,
      };
    }

    return {
      message: "Shoes found.",
      data: shoes,
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
