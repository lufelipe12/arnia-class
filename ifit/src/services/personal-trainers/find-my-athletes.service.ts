import { athletesRepository } from "../../database/repositories/athletes.repository";
import { IPaginationQuery } from "../../interfaces/ipagination-query.interface";

export async function findMyAthletesService(
  personalTrainerId: string,
  query: IPaginationQuery
) {
  try {
    const myAthletes = await athletesRepository.findByPersonalId(
      personalTrainerId
    );

    const page = parseInt(query.page) || 1;
    const pageSize = parseInt(query.pageSize) || 5;

    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    const myAthletesPaginated = myAthletes.slice(startIndex, endIndex);

    const data = {
      currentPage: page,
      totalPages: Math.ceil(myAthletes.length / pageSize),
      athletes: myAthletesPaginated,
    };

    return {
      statusCode: 200,
      message: "Your athletes.",
      data,
    };
  } catch (error: any) {
    console.log(error);

    return {
      statusCode: error.message ? 400 : 500,
      message: error.message || "Internal server error.",
      data: null,
    };
  }
}
