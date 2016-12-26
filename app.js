var i,
members = [
	{
		id: 1,
		name: "Zain",
		dis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
		age: "26"
	},
	{
		id: 2,
		name: "Aman",
		dis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
		age: "10"
	},
	{
		id: 3,
		name: "Rizwan",
		dis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
		age: "20"
	}
],
mainMenu = document.getElementsByClassName("main-menu")[0];

for(i=0; i<= members.length-1; i++){
	// Define status
	if(members[i].age < 26){
		members[i].status = "Young";
	} else {
		members[i].status = "Elder";
	}

	// Define activity
	if(members[i].name == "Zain"){
		members[i].ativity = ["Gym", "Dancing",];
	}
	if(members[i].name == "Aman"){
		members[i].ativity = ["Gaming", "Cycling"];
	}
	if(members[i].name == "Rizwan"){
		members[i].ativity = ["Gaming", "Gym"];
	}

	// Main Menu
	var menuList = document.createElement("li");
	var menuListClick = document.createElement("a");
	menuListClick.setAttribute('href', '?id=' + members[i].id);
	mainMenu.insertBefore(menuList, mainMenu.lastChild).innerHTML;
	menuList.insertBefore(menuListClick, menuList.lastChild).innerHTML = members[i].name;

	// Member Detail
	//document.getElementsByClassName("memberDetail")[0];
	var container = document.getElementsByClassName("members-container")[0];
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
};
console.log(members);
var memberId = window.location.search.replace("?id=",'');
getMemberByID(memberId);
//getMemberByName('Aman');