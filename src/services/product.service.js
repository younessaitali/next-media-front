import ApiService from "@/services/api.service";

const UserService = {
    getProducts: async function(payload = {}) {
        try {
            const response = await ApiService.get("/product", payload);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
};

export default UserService;
