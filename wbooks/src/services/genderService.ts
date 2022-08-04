import api from '@config/api';

const genderService = () => api.get('?gender=female');

const getByGenres = async () => {
  await genderService().then(response => console.log(response.data.results));
};

export default getByGenres;
