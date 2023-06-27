import { IAthlete } from "../../interfaces/iathlete.interface";
import Athlete from "../entities/athlete.entity";

class AthletesRepository {
  async create(payload: IAthlete) {
    return await Athlete.create(payload);
  }

  async find() {
    return await Athlete.find({ isActive: true });
  }

  async findById(id: string) {
    return await Athlete.findOne({
      _id: id,
      isActive: true,
    })
      .populate("personaltrainer")
      .exec();
  }

  async update(id: string, payload: any) {
    return await Athlete.findOneAndUpdate(
      {
        _id: id,
        isActive: true,
      },
      payload,
      { new: true }
    ).exec();
  }

  async delete(id: string) {
    return await Athlete.findOneAndUpdate(
      {
        _id: id,
        isActive: true,
      },
      { isActive: false },
      { new: true }
    ).exec();
  }
}

export const athletesRepository = new AthletesRepository();
