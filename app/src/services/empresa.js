import api from '../plugins/axios';

const EmpresaService = {
  getAll: async () => {
    try {
      const response = await api.get('/empresas');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar empresas:', error.message);
      throw error; // Lança o erro novamente para ser tratado onde a função for chamada
    }
  }
};

export default EmpresaService;
