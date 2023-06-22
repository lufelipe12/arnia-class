import { IPersonalTrainer } from "../../interfaces/ipersonal-trainer.interface";
import PersonalTrainer from "../entities/personal-trainer.entity";

class PersonalTrainerRepository {
  async create(payload: IPersonalTrainer) {
    return await PersonalTrainer.create(payload);
  }

  async find() {
    return await PersonalTrainer.find();
  }

  async findById(id: string) {
    return await PersonalTrainer.findById(id);
  }

  async update(id: string, payload: IPersonalTrainer) {
    return await PersonalTrainer.findOneAndUpdate({ id }, payload, {
      new: true,
    });
  }

  async delete(id: string) {
    return await PersonalTrainer.deleteOne({ id });
  }
}

export const personalTrainerRepository = new PersonalTrainerRepository();
