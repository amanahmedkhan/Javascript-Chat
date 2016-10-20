// javascript Chat
function sendMessage(){
	var sendTo = document.getElementsByClassName("sendTo")[0];
	var message = document.getElementsByClassName("message")[0];
	for(i=0; i<= members.length-1; i++){
		if(members[i].name == sendTo.value){
			console.log("true-sendTo");
			if(members[i].message == undefined){
				members[i].message = [message.value]
			}else{
				members[i].message.push(message.value)
			}
			console.log(members);
		}
	};
}

function getMemberByID(memberId){
	for(i=0; i<= members.length-1; i++){
		if(members[i].id == memberId){
			return console.log(members[i]);
		}
	}
}