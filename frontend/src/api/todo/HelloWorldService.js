import axios from 'axios'

class HelloWorldService {

    executeHelloWorldService() {
        //console.log('executed service')
        return axios.get('http://13.52.245.147:8080/hello-world');
    }

    executeHelloWorldBeanService() {
        //console.log('executed service')
        return axios.get('http://13.52.245.147:8080/hello-world-bean');
    }

    executeHelloWorldPathVariableService(name) {

        return axios.get(`http://13.52.245.147:8080/hello-world/path-variable/${name}`

        );
    }

}

export default new HelloWorldService()