import { shoesRepository } from "../../database/repositories/shoes.repository";

export async function updateShoesByIdService(id: string, payload: any) {
  try {
    const shoe = await shoesRepository.getById(id);

    if (!shoe) {
      return {
        message: "Shoe not found.",
        data: null,
        statusCode: 404,
      };
    }

    await shoesRepository.updateById(id, payload);

    const shoeUpdated = await shoesRepository.getById(id);

    return {
      message: "Shoe updated successfully",
      data: shoeUpdated,
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
