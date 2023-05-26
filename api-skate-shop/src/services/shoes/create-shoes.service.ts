import {
  IShoes,
  shoesRepository,
} from "../../database/repositories/shoes.repository";

async function createShoesService(payload: IShoes) {
  try {
    const newShoes = {
      ...payload,
      createdAt: new Date(),
    };

    await shoesRepository.create(newShoes);

    return {
      statusCode: 201,
      data: newShoes,
      message: "Shoes Created",
    };
  } catch (error) {
    return {
      statusCode: 500,
      data: null,
      message: "Error not defined.",
    };
  }
}

export default createShoesService;
