'use strict';


let listEl = document.querySelector('[data-list]');
let tmpl = document.querySelector('[data-tmpl]').innerHTML;


window.addEventListener('load', sendRequest)

function sendRequest(){
	let url = './data/employees.json';

	fetch(url)
		.then( result => result.json() )
		.then( showData );	

	
}

function showData(params) {
	listEl.innerHTML = '';
	params.forEach(element => {
		if (element.inoffice == false) {
			listEl.innerHTML += tmpl
				.replace(/{{class}}/gi, "out")
				.replace(/{{name}}/gi, element.name)
				;
		}else{
			listEl.innerHTML += tmpl
				.replace(/{{class}}/gi, "in")
				.replace(/{{name}}/gi, element.name)
				;
		}
	});//for
}
