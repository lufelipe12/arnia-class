import { IPersonalTrainerUpdate } from "../../interfaces/ipersonal-trainer-update.interface";
import { IPersonalTrainer } from "../../interfaces/ipersonal-trainer.interface";
import PersonalTrainer from "../entities/personal-trainer.entity";

class PersonalTrainerRepository {
  async create(payload: IPersonalTrainer) {
    return await PersonalTrainer.create(payload);
  }

  async find(filter?: any) {
    return await PersonalTrainer.find({ ...filter, isActive: true });
  }

  async findById(id: string) {
    return await PersonalTrainer.findOne({ _id: id, isActive: true }).exec();
  }

  async findByEmail(email: string) {
    return await PersonalTrainer.findOne({ email, isActive: true }).select(
      "+password"
    );
  }

  async update(id: string, payload: IPersonalTrainerUpdate) {
    return await PersonalTrainer.findOneAndUpdate(
      { _id: id, isActive: true },
      payload,
      {
        new: true,
      }
    ).exec();
  }

  async delete(id: string) {
    return await PersonalTrainer.findOneAndUpdate(
      { _id: id, isActive: true },
      { isActive: false },
      {
        new: true,
      }
    ).exec();
  }
}

export const personalTrainerRepository = new PersonalTrainerRepository();
