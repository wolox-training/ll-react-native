import api from '@config/api';

import reactotron from '../../ReactotronConfig';

const genderService = () => api.get('?gender=female');

const getGenres = async () => {
  await genderService().then(response => response.data);
};

export default getGenres;

reactotron.apisauce(getGenres());
api.addMonitor(reactotron.apisauce);

/* const getGenres = async () => {
  await api.get('?gender=female').then(response => {
    response.data;
  });
};

export default getGenres; */
