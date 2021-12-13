const endpoint = 'http://localhost:3030/jsonstore/advanced/dropdown';
const data = {
    async get() {
        const respose = await fetch(endpoint);
        if (respose.ok) {
            const data = await respose.json();
            return data;
        } else {
            const err = await respose.json();
            return alert(err.message);
        }
    },

    async post(data) {

        const respose = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (respose.ok) {
            const result = await respose.json();
            return result;
        } else {
            const err = await respose.json();
            return alert(err.message);
        }
    }
}

export default data;