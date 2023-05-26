import { shoesRepository } from "../../database/repositories/shoes.repository";

async function getAllShoesService(query?: any) {
  try {
    const { lt, gt } = query;

    const filter =
      lt && gt
        ? { price: { $lt: parseFloat(lt), $gt: parseFloat(gt) } }
        : lt
        ? { price: { $lt: parseFloat(lt) } }
        : gt
        ? { price: { $gt: parseFloat(gt) } }
        : null;

    const shoes = filter
      ? await shoesRepository.getAll(filter)
      : await shoesRepository.getAll();

    return {
      message: "Ok.",
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

export default getAllShoesService;
