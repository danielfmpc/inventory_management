import api from "./api";

class StatusServices {
  async getAllStatus() {
    try {      
      const response = await api.get('status');
      return response.data;
    } catch (err) {
      console.log(err.message);
    }
  }
}

export default StatusServices;