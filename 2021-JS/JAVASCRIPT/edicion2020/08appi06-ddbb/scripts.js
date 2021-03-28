const c = console.log;
const form = document.getElementById('form');
const indexedDB = window.indexedDB;
const tasks = document.getElementById('tasks');

if (indexedDB && form) {
	let db;
	const response = indexedDB.open('TaskList', 1);
	response.onsuccess = () => {
		db = response.result;
		c('OPEN', db);
		readTask();
	};
	response.onupgradeneeded = (e) => {
		db = e.target.result;
		c('CREATE', db);
		const objeto1 = db.createObjectStore('tasks', {
			keyPath: 'titleId',
		});
	};
	response.onerror = (error) => c('ERROR', error);

	const addTask = (data) => {
		const transaction = db.transaction(['tasks'], 'readwrite');
		const objectStore = transaction.objectStore('tasks');
		const req = objectStore.add(data);
		readTask(); //carga tiempo real
	};
	const getKeyTask = (key) => {
		const transaction = db.transaction(['tasks']);
		const objectStore = transaction.objectStore('tasks');
		const req = objectStore.get(key);
		readTask();
		req.onsuccess = (e) => {
			// c(e.target.result);
			form.task.value = e.target.result.titleId;
			form.priority.value = e.target.result.level;
		};
	};
	const readTask = () => {
		const transaction = db.transaction(['tasks']);
		const objectStore = transaction.objectStore('tasks');
		const req = objectStore.openCursor();
		const frangment = document.createDocumentFragment();
		req.onsuccess = (e) => {
			// c(e.target.result.value);
			const cursor = e.target.result;
			if (cursor) {
				const taskTitle = document.createElement('P');
				taskTitle.textContent = cursor.value.titleId;
				frangment.appendChild(taskTitle);

				const taskLevel = document.createElement('P');
				taskLevel.textContent = cursor.value.level;
				frangment.appendChild(taskLevel);

				const btnUpdate = document.createElement('BUTTON');
				btnUpdate.textContent = 'Actualizar';
				btnUpdate.dataset.action = 'update';
				btnUpdate.dataset.key = cursor.key;
				frangment.appendChild(btnUpdate);

				const btnDelete = document.createElement('BUTTON');
				btnDelete.textContent = 'Eliminar';
				btnDelete.dataset.action = 'delete';
				//esto te agrega el action y el data-key
				btnDelete.dataset.key = cursor.key;
				frangment.appendChild(btnDelete);

				cursor.continue();
			} else {
				tasks.textContent = '';
				tasks.appendChild(frangment);
			}
		};
	};

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const objeto = {
			titleId: e.target.task.value,
			level: e.target.priority.value,
		};
		addTask(objeto);
		c(objeto);
	});
	tasks.addEventListener('click', (e) => {
		e.preventDefault();
		// e.target.dataset.key
		getKeyTask(e.target.dataset.key);
	});
}
