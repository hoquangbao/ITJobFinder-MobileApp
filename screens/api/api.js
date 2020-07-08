var API_URL = "https://itjobfinder.herokuapp.com";
exports.LOGIN_URL = `${API_URL}/users/login`;
exports.REGISTER_URL = `${API_URL}/users/register`;
exports.GET_ALL_JOB_URL = `${API_URL}/jobs/`;
exports.SEARCH_JOB_URL = `${API_URL}/jobs/search_job`;
exports.GET_USER_PROFILE = id => `${API_URL}/users/${id}`;
