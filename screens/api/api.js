var API_URL = "https://itjobfinder.herokuapp.com";
exports.LOGIN_URL = `${API_URL}/users/login`;
exports.REGISTER_URL = `${API_URL}/users/register`;
exports.GET_ALL_JOB_URL = `${API_URL}/jobs/`;
exports.GET_ALL_COMPANY_URL = `${API_URL}/company/`;
exports.SEARCH_JOB_URL = `${API_URL}/jobs/search_job`;
exports.CREATE_JOB_URL = `${API_URL}/jobs/create_job`;
exports.CREATE_COMPANY_URL = `${API_URL}/company/create_company`;
exports.GET_USER_PROFILE = id => `${API_URL}/users/${id}`;
