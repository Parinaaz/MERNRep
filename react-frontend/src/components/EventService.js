import axios from 'axios'

class EventService{
	sendData(data)
	{
		axios.post('http://localhost:4200/events/add/post',
			{item: data}).then(function(response){
			console.log(response);

		}).catch(function(error){
			console.log(error);


		});

	}


}

export default EventService;