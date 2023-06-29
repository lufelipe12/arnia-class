import { athletesRepository } from "../../database/repositories/athletes.repository";
import { ITokenPayload } from "../../interfaces/itoken-payload.interface";
import { findAthleteByIdService } from "./find-athlete-by-id.service";

export async function deleteAthleteService(id: string, user: ITokenPayload) {
  try {
    const responseFromService = await findAthleteByIdService(id);

    if (!responseFromService.data) {
      return responseFromService;
    }

    const personalIdToCompare = user.personalTrainerId;

    const personalIdFromData = (
      responseFromService.data?.personalTrainerId as any
    )._id.toString();

    if (personalIdToCompare !== personalIdFromData) {
      return {
        statusCode: 401,
        message: "You cant delete this athlete.",
        data: null,
      };
    }

    const athleteDeleted = await athletesRepository.delete(id);

    return {
      statusCode: 200,
      message: "Athlete deleted.",
      data: athleteDeleted,
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
