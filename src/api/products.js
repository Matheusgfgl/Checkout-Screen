import api from '@/config/axios/index';

export default {
   fetchProducts(){
    return api({
      method: 'GET',
      url: '/products',
    });
  }
};