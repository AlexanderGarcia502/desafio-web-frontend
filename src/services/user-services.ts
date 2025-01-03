import axios from "axios";

interface IUserServicesProps {
  login: (email: string, password: string) => void;
}

export class UserServices implements IUserServicesProps {
  async login(correo_electronico: string, password: string) {
    try {
      const { data } = await axios.post(
        "http://localhost:7000/api/user/login",
        {
          correo_electronico,
          password,
        }
      );
      return data.data;
    } catch (error: any) {
      console.error("Error fetching login:", error.response.data.message);
      throw new Error(error.response.data.message);
    }
  }
}
