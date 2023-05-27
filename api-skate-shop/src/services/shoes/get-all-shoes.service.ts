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

    const page = parseInt(query.page) || 1;
    const pageSize = parseInt(query.pageSize) || 5;

    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    const shoesPaginated = shoes.slice(startIndex, endIndex);

    return {
      message: "Ok.",
      currentPage: page,
      totalPages: Math.ceil(shoes.length / pageSize),
      statusCode: 200,
      data: shoesPaginated,
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
