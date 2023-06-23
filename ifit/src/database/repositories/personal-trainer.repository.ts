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
    return await PersonalTrainer.findById(id);
  }

  async update(id: string, payload: IPersonalTrainerUpdate) {
    return await PersonalTrainer.findByIdAndUpdate(id, payload, {
      new: true,
    });
  }

  async delete(id: string) {
    return await PersonalTrainer.findByIdAndUpdate(
      id,
      { isActive: false },
      {
        new: true,
      }
    );
  }
}

export const personalTrainerRepository = new PersonalTrainerRepository();
