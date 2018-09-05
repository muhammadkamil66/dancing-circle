function initialize(){
	let circleContainer = document.querySelector("#circle-container");
	for (let i=0; i<20; i++){
		circleContainer.innerHTML += `<div id="div-${i}" class="circle"></div>`;
		changeCircle(i);
		setInterval(function(){changeCircle(i)},1000);

		


	}

}

function changeCircle(index){

		const top = Math.random() * 100;
		const left = Math.random() * 100;
		const height = Math.random() * 100;
		const width = Math.random() * 100;
		const divX = document.querySelector(`#div-${index}`);
		divX.style.top = `${top}%`
		divX.style.left = `${left}%`
		divX.style.height =`${height}px`;
		divX.style.width =`${height}px`;
		divX.innerHTML = Math.floor(height);
		divX.style["font-size"] = `${height/3}px`;
		divX.style["border-width"] = `${height/50}px`;

		const r = parseInt(Math.random()* 256);
		const g = parseInt(Math.random()* 256);
		const b = parseInt(Math.random()* 256);
		divX.style["border-color"]=`rgb(${r},${g},${b})`;
		divX.style["color"]=`rgb(${r},${g},${b})`;

}