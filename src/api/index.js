import axios from "@/axios"
var api = {
    searchHotWords(params) {
        return axios.get('/api/meituan/header/searchHotWords.json',params);
    },
    getSearchList () {
        return axios.get('/api/meituan/header/search.json');
    },
    getMenuList () {
        return axios.get('/api/meituan/index/nav.json');
    },
    getResultProducts() {
        return axios.get('/api/meituan/index/resultsByKeywords.json');
    },
    getProductsList() {
        return axios.get('/api/meituan/list/goodsList.json');
    },
    getHotCity() {
        return axios.get('/api/meituan/city/hot.json');
    },
    getrecentList() {
        return axios.get('/api/meituan/city/recents.json');
    },
    getProvinceList() {
        return axios.get('/api/meituan/city/province.json');
    },
    getcurlocation() {
        return axios.get('/api/meituan/city/getPosition.json');
    },
    geileibiao() {
        return axios.get('/api/meituan/city/cityList.json');
    },
    login(params){
        return axios.get('/api/meituan/login', params);
    },
    register(params){
        return axios.get('/api/meituan/register',params);
    }
}
export default api