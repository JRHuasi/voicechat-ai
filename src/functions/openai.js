/* 
	const url = 'https://api.groq.com/openai/v1/chat/completions';
	const headers = {
		Authorization: 'Bearer ' + import.meta.env.VITE_GROQ_API_KEY,
		'Content-Type': 'application/json'
	};

	// model: 'mixtral-8x7b-32768'
	const data = {
		messages: [{ role: 'user', content: prompt }],
		model: 'llama3-8b-8192'
	};

	const system = {
		role: 'system',
		content: 'Respuestas breves, resume en un párrafo. Responde en francés'
	};

	const options = {
		method: 'POST',
		headers: headers,
		body: JSON.stringify(data) + ',' + JSON.stringify(system)
	};

	const response = await fetch(url, options);

	*/
