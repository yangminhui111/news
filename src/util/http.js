// import axios from 'axios'
// axios.defaults.baseURL="http://localhost:5000"
// axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     store.dispatch({
//       type:'change_loading',
//       payload:true
//     })
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

// // Add a response interceptor
// axios.interceptors.response.use(function (response) {
//     store.dispatch({
//       type:'change_loading',
//       payload:false
//     })
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   }, function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   });