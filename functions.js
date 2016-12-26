// javascript Chat
function sendMessage(){
	var sendTo = document.getElementsByClassName("sendTo")[0];
	var message = document.getElementsByClassName("message")[0];
	for(i=0; i<= members.length-1; i++){
		if(members[i].name == sendTo.value){
			//console.log("true-sendTo");
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
			//return console.log(members[i]);
			document.getElementsByClassName("members-container")[0].innerHTML = members[i];
			memberDetail = document.createElement("section");
			memberDetail.className = "memberDetail";
			//var section = document.createElement("section");
			var id = document.createElement("a");
			var age = document.createElement("small");
			var status = document.createElement("p");
			var heading = document.createElement("h2");
			var ativity = document.createElement("span");
			var dis = document.createElement("p");
			message = document.createElement("p");

			// memberDetail.innerHTML = members[i];
			memberDetail.insertBefore(id, memberDetail.lastChild).innerHTML = members[i].id;
			memberDetail.insertBefore(heading, memberDetail.lastChild).innerHTML = members[i].name;
			memberDetail.insertBefore(age, memberDetail.lastChild).innerHTML = members[i].age + " Age: <br>";
			memberDetail.insertBefore(ativity, memberDetail.lastChild).innerHTML = members[i].ativity;
			memberDetail.insertBefore(dis, memberDetail.lastChild).innerHTML = members[i].dis;
			memberDetail.insertBefore(message, memberDetail.lastChild).innerHTML = members[i].message;
			container.appendChild(memberDetail);
		}
	}
}

function getMemberByName(memberName){
	for(i=0; i<= members.length-1; i++){
		if(members[i].name == memberName){
			console.log(members[i]);
		}
	}
}