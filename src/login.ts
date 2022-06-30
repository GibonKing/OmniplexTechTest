(document.querySelector('#loginForm') as HTMLFormElement).onSubmit = function (form: HTMLFormElement, event: Event){
	event.preventDefault();
	if(chrome.storage.sync.get(['name']) == null){
		const formData = new FormData(form);
		const name = formData.get('name') as string;
		const password = formData.get('password') as string;
		
		if(password == "password"){
			saveDetails(name);
			chrome.storage.sync.get(['name'], function(result){
				console.log('Name is currently: ' + result.name);
			});
		}
		else{
			alert("Wrong password");
		}
	}else{
	
	}
	return false;
}

function saveDetails(name: string){
	chrome.storage.sync.set({'name': name}, function(){
		console.log('Name has been set to: ' + name);
	});
}