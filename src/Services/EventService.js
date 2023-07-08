import axios from "axios";

const apiClients = axios.create({
	baseURL: 'https://my-json-server.typicode.com/sidyadav2211/Marathon_Events',
        withCredentials:false,
    headers:{
        Accept:'application/json',
        "Content-Type" : 'application/json'
    }
    
});

export default {
    getEventList() {
        return apiClients.get('/events')
    },
    getEvent(id){
        return apiClients.get(`/events/${id}`)
    }
}