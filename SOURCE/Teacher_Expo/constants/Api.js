import axios from 'axios'

// singleton  network client
function createAxios() {
    // AsyncStorage.setItem("token", '2323226DADAD') //full
    var axiosInstant = axios.create();
    axiosInstant.defaults.baseURL = "http://winds.hopto.org:8463/";
    axiosInstant.defaults.timeout = 20000;
    axiosInstant.defaults.headers = { 'Content-Type': 'application/json' }

    axiosInstant.interceptors.request.use(
        async (config) => {
            config.headers.token = await AsyncStorage.getItem('token');
            console.log("Token: ", config.headers.token)
            return config;
        },
        error => Promise.reject(error)
    );

    axiosInstant.interceptors.response.use(response => {
        console.log('Response:', response.data)
        if (response.data && response.data.code == 403) {


            setTimeout(() => {
                Alert.alert("Thông báo", I18n.t("relogin"))
            }, 100);

            AsyncStorage.setItem("token", "", () => {
                NavigationUtil.navigate("Auth")
            })
        } else if (response.data && response.data.status != 1) {
            setTimeout(() => {
                Alert.alert("Thông báo", response.data.message)
            }, 100);


        }
        return response
    })
    return axiosInstant
}

export const getAxios = createAxios()

/* Support function */
function handleResult(api) {
    return api.then(res => {
        if (res.data.status != 1) {
            console.log("Status != 1\n")
            return Promise.reject(new Error("Co loi xay ra"))
        }
        console.log("RequestSuccess\n")
        return Promise.resolve(res.data)
    })
}

// Application api request
export const requestLogin = (payload) => {
    return handleResult(getAxios.post(
        "api/Service/LoginApp", {
            "value": payload.value,
            "type": payload.type
        }
    ))
}
