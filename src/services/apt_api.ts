import axios from "axios";
import { Appointment } from "../interfaces/Appointment";
import { SearchOptions } from "../interfaces/SearchOptions";
require("dotenv").config();
const URL: string = process.env.REACT_APP_URL!;

class AppointmentApi {
  async getAppointmentList(options: SearchOptions) {
    return await axios
      .get(
        URL +
          `?_sort=${options.sort}&_order=${options.order}${
            options.filter !== "" ? `&q=${options.filter}` : ""
          }`
      )
      .then(async (res) => {
        const result = await res.data;
        const apts = result.map((item: object, i: number) => {
          return item;
        });
        return apts;
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
  async deleteAppointment(id: string) {
    return await axios
      .delete(URL + `/${id}`)
      .then(async (res) => res)
      .catch((error) => {
        throw new Error(error);
      });
  }

  async createAppointment(appointment: Appointment) {
    return await axios
      .post(URL, appointment)
      .then(async (res) => res)
      .catch((error) => {
        throw new Error(error);
      });
  }
}

export default AppointmentApi;
