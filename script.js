//your JS code here. If required.
const container=document.querySelector(".container");

for(let i=0;i<800;i++){
	const square=document.createElement('div');
	square.className='square';
	container.appendChild(square);
}