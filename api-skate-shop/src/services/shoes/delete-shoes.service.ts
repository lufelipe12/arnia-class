import { shoesRepository } from "../../database/repositories/shoes.repository";

export async function deleteShoesService(id: string) {
  try {
    const shoes = await shoesRepository.getById(id);

    if (!shoes) {
      return {
        message: `Shoes with this id: ${id} not found.`,
        data: null,
        statusCode: 404,
      };
    }

    await shoesRepository.delete(id);

    return {
      message: "Shoes deleted successfully",
      data: shoes,
      statusCode: 200,
    };
  } catch (error) {
    return {
      message: "Error not defined",
      data: null,
      statusCode: 500,
    };
  }
}
