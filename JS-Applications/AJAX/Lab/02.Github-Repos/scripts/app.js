function loadRepos() {
	const username = document.getElementById('username').value;
	const url = `https://api.github.com/users/${username}/repos`;

	fetch(url)
		.then((responce) => {
			if (responce.status == 404) {
				throw new Error('User not found!');
			}
			responce.json()
		})
		.then((data) => {
			const ulEl = document.getElementById('repos');
			ulEl.innerHTML = '';
			data.forEach(x => {
				console.log(x.full_name, x.html_url);
				const liEl = document.createElement('li');
				const link = document.createElement('a')
				link.href = x.html_url;
				const name = document.createTextNode(x.full_name);
				link.appendChild(name);
				liEl.appendChild(link);
				ulEl.appendChild(liEl);
			});
		})
		.catch(err => {
			console.log('Promise rejected');
			console.log(err);
		})

	console.log('Promise fulfilled!');
}


// async function asyncRepos() {
// 	const username = document.getElementById('username').value;
// 	const url = `https://api.github.com/users/${username}/repos`;

// 	const responce = await fetch(url);
// 	console.log(responce);

// 	const data = await responce.json();

// 	console.log('Promise fulfilled!');
// 	console.log(data);



// }