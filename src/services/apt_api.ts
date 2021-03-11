import axios from 'axios';
require('dotenv').config();
const URL:string = process.env.REACT_APP_URL!;

class AppointmentApi {
    async getAppointmentList() {
        return await axios.get(URL)
        .then(async res => {
          const result = await res.data;
          const apts = result.map((item: object, i: number) => {
            return item;
          });
          return apts;
        })
        .catch(error => {
          throw new Error(error)
        });
    };
    async deleteAppointment(id: number) {
        return await axios.delete(URL+`/${id}`).then(async res => res)
        .catch(error => {
            throw new Error(error)
        });
    }; 
}

export default AppointmentApi;