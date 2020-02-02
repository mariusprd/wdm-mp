var tds = document.querySelectorAll("td");
var contor = 0;

function compTurn() {
	var random = Math.floor(Math.random() * 9);
	if (p[random].textContent === '') {
		p[random].textContent = '0';
	} else {
		compTurn();
	} 
}

function whoWon() {
	var verif = 0
	if (p[0].textContent == p[1].textContent && p[0].textContent == p[2].textContent) {
		if (p[0].textContent == 'x') {
				console.log('Ai castigat');
				verif++;
				w();
				contor = 9;
				p[0].style.color = 'green';
				p[1].style.color = 'green';
				p[2].style.color = 'green';
			} else if (p[0].textContent == '0') {
				console.log('Nu credeam ca e posibil sa pierzi. Esti fucking weak.');
				verif++;
				l();
				contor = 9;
				p[0].style.color = 'red';
				p[1].style.color = 'red';
				p[2].style.color = 'red';
			}
	}

	if (p[3].textContent == p[4].textContent && p[3].textContent == p[5].textContent) {
		if (p[3].textContent == 'x') {
				console.log('Ai castigat');
				verif++;
				w();
				contor = 9;
				p[3].style.color = 'green';
				p[4].style.color = 'green';
				p[5].style.color = 'green';
			} else if (p[3].textContent == '0') {
				console.log('Nu credeam ca e posibil sa pierzi. Esti fucking weak.');
				verif++;
				l();
				contor = 9;
				p[3].style.color = 'red';
				p[4].style.color = 'red';
				p[5].style.color = 'red';
			}
	}

	if (p[6].textContent == p[7].textContent && p[6].textContent == p[8].textContent) {
		if (p[6].textContent == 'x') {
				console.log('Ai castigat');
				verif++;
				w();
				contor = 9;
				p[6].style.color = 'green';
				p[7].style.color = 'green';
				p[8].style.color = 'green';
			} else if (p[6].textContent == '0') {
				console.log('Nu credeam ca e posibil sa pierzi. Esti fucking weak.');
				verif++;
				l();
				contor = 9;
				p[6].style.color = 'red';
				p[7].style.color = 'red';
				p[8].style.color = 'red';
			}
	}

	if (p[0].textContent == p[3].textContent && p[0].textContent == p[6].textContent) {
		if (p[0].textContent == 'x') {
				console.log('Ai castigat');
				verif++;
				w();
				contor = 9;
				p[0].style.color = 'green';
				p[3].style.color = 'green';
				p[6].style.color = 'green';
			} else if (p[0].textContent == '0') {
				console.log('Nu credeam ca e posibil sa pierzi. Esti fucking weak.');
				verif++;
				l();
				contor = 9;
				p[0].style.color = 'red';
				p[3].style.color = 'red';
				p[6].style.color = 'red';
			}
	}

	if (p[1].textContent == p[4].textContent && p[1].textContent == p[7].textContent) {
		if (p[1].textContent == 'x') {
				console.log('Ai castigat');
				verif++;
				w();
				contor = 9;
				p[4].style.color = 'green';
				p[1].style.color = 'green';
				p[7].style.color = 'green';
			} else if (p[1].textContent == '0') {
				console.log('Nu credeam ca e posibil sa pierzi. Esti fucking weak.');
				verif++;
				l();
				contor = 9;
				p[4].style.color = 'red';
				p[1].style.color = 'red';
				p[7].style.color = 'red';
			}
	}

	if (p[2].textContent == p[5].textContent && p[2].textContent == p[8].textContent) {
		if (p[2].textContent == 'x') {
				console.log('Ai castigat');
				verif++;
				w();
				contor = 9;
				p[5].style.color = 'green';
				p[8].style.color = 'green';
				p[2].style.color = 'green';
			} else if (p[2].textContent == '0') {
				console.log('Nu credeam ca e posibil sa pierzi. Esti fucking weak.');
				verif++;
				l();
				contor = 9;
				p[5].style.color = 'red';
				p[8].style.color = 'red';
				p[2].style.color = 'red';
			}
	}

	if (p[0].textContent == p[4].textContent && p[0].textContent == p[8].textContent) {
		if (p[0].textContent == 'x') {
				console.log('Ai castigat');
				verif++;
				w();
				contor = 9;
				p[0].style.color = 'green';
				p[4].style.color = 'green';
				p[8].style.color = 'green';
			} else if (p[0].textContent == '0') {
				console.log('Nu credeam ca e posibil sa pierzi. Esti fucking weak.');
				verif++;
				l();
				contor = 9;
				p[0].style.color = 'red';
				p[4].style.color = 'red';
				p[8].style.color = 'red';
			}
	}

	if (p[2].textContent == p[4].textContent && p[2].textContent == p[6].textContent) {
		if (p[2].textContent == 'x') {
				console.log('Ai castigat');
				verif++;
				w();
				contor = 9;
				p[4].style.color = 'green';
				p[6].style.color = 'green';
				p[2].style.color = 'green';
			} else if (p[2].textContent == '0') {
				console.log('Nu credeam ca e posibil sa pierzi. Esti fucking weak.');
				verif++;
				l();
				contor = 9;
				p[4].style.color = 'red';
				p[6].style.color = 'red';
				p[2].style.color = 'red';
			}
	}

	if (verif == 0 && contor == 9) {
		console.log('egal.Clasic');
		e();
		p[0].style.color = 'yellow';
		p[1].style.color = 'yellow';
		p[2].style.color = 'yellow';
		p[3].style.color = 'yellow';
		p[4].style.color = 'yellow';
		p[5].style.color = 'yellow';
		p[6].style.color = 'yellow';
		p[7].style.color = 'yellow';
		p[8].style.color = 'yellow';
	} else if(verif == 0) {
		console.log('Mai sunt mutari');
	}
}

titl = document.getElementById('titlu');
titl.textContent = 'Bun venit la x si 0 de caini';

function w() {
	titl.textContent = 'Saaaaaaaarpiliiiiiii Haideeeeeeee';
}

function e() {
	titl.textContent = 'Aiurea asa egal';
}

function l() {
	titl.textContent = 'Doamne cum sa pierzi...esti fucking weak';
}

var p = [];
p[0] = document.getElementById('c00');
p[1] = document.getElementById('c01');
p[2] = document.getElementById('c02');
p[3] = document.getElementById('c10');
p[4] = document.getElementById('c11');
p[5] = document.getElementById('c12');
p[6] = document.getElementById('c20');
p[7] = document.getElementById('c21');
p[8] = document.getElementById('c22');

document.getElementById('playAgain').addEventListener("click", function () {
	for (var i = 0; i < tds.length; ++i) {
		p[i].textContent = "";
		contor = 0;
		p[0].style.color = 'black';
		p[1].style.color = 'black';
		p[2].style.color = 'black';
		p[3].style.color = 'black';
		p[4].style.color = 'black';
		p[5].style.color = 'black';
		p[6].style.color = 'black';
		p[7].style.color = 'black';
		p[8].style.color = 'black';
		titl.textContent = 'Bun venit la x si 0 de caini';
	}
});

for (var i = 0; i < 9; i++) {
	p[i].addEventListener("click", function () {
		if (this.textContent == '' && contor !== 9) {
			this.textContent = 'x';
			contor++;
			whoWon();
			if (contor !== 9) {
				compTurn();
				contor++;
				whoWon();
			}
		}
	})
}
