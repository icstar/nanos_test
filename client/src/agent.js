import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://10.10.10.116:7777/api';

const encode = encodeURIComponent;
const responseBody = res => res.body;

let token = null;
const tokenPlugin = req => {
  if (token) {
    req.set('authorization', `Token ${token}`);
  }
}

const requests = {
  del: url =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: url =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};

const Auth = {
  current: () =>
    requests.get('/user'),
  login: (email, password) =>
    requests.post('/users/login', { user: { email, password } }),
  register: (username, email, password) =>
    requests.post('/users', { user: { username, email, password } }),
  save: user =>
    requests.put('/user', { user })
};

const Tags = {
  getAll: () => requests.get('/tags')
};

const Lists = {
  all: () =>
    requests.get("/lists"),
  getAd: (id) => 
    requests.get(`/lists/${id}`)

};

const Comments = {
  create: (slug, comment) =>
    requests.post(`/articles/${slug}/comments`, { comment }),
  delete: (slug, commentId) =>
    requests.del(`/articles/${slug}/comments/${commentId}`),
  forArticle: slug =>
    requests.get(`/articles/${slug}/comments`)
};

const Profile = {
  follow: username =>
    requests.post(`/profiles/${username}/follow`),
  get: username =>
    requests.get(`/profiles/${username}`),
  unfollow: username =>
    requests.del(`/profiles/${username}/follow`)
};
const Admin = {
  getAdvertise: () => requests.get('/admin/advertise'),
  delAdvertise: ad_id => requests.post('/admin/delAdvertise', {ad_id}),
  addAdvertise: ad => requests.post('/admin/addAdvertise', {ad}),
  updateAdvertise: ad => requests.post('/admin/updateAdvertise', {ad}),
  delEquipment: equip_id => requests.post('/admin/delEquipment', {equip_id}),
  addEquipment: equip => requests.post('/admin/addEquipment', {equip}),
  updateEquipment: equip => requests.post('/admin/updateEquipment', {equip}),
  equip: () => requests.get('/admin/equipment')
};

export default {
  Lists,
  Auth,
  Comments,
  Profile,
  Tags,
  Admin,
  setToken: _token => { token = _token; }
};
