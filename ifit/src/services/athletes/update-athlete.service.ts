import mongoose from "mongoose";
import { IAthleteUpdate } from "../../interfaces/iathlete-update.interface";
import { ITokenPayload } from "../../interfaces/itoken-payload.interface";
import { findAthleteByIdService } from "./find-athlete-by-id.service";
import { athletesRepository } from "../../database/repositories/athletes.repository";

export async function updateAthleteService(
  user: ITokenPayload,
  payload: IAthleteUpdate,
  id: string
) {
  try {
    const { data } = await findAthleteByIdService(id);

    const personalIdToCompare = user.personalTrainerId;

    const personalIdFromData = (data?.personalTrainerId as any)._id.toString();

    if (personalIdToCompare !== personalIdFromData) {
      return {
        statusCode: 401,
        message: "You cant modify this athlete.",
        data: null,
      };
    }

    const athleteUpdated = await athletesRepository.update(id, payload);

    return {
      statusCode: 200,
      message: "Athlete updated.",
      data: athleteUpdated,
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
