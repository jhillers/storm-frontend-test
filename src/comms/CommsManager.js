const BASE_URL = 'http://localhost:4000/api/task';

export const fetchTasks = async () => {
    const response = await sendRequest();    
    return response;
}
export const sendRequest = async (method = 'GET', urlSuffix = '', body) => {
    try {
        const response = await fetch(BASE_URL + urlSuffix, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body) || undefined
        });
        if(!response.ok){
            throw(new Error('Error with response.'));
        }
        const json = response.json();
        return json;
    }
    catch (error) {
        console.error(error.message || 'error sending request', error)
    }
}
export const updateTask = async (id, taskData) => {
    const response = await sendRequest('PATCH', `/${id}`,taskData);
    return response;
}
export const addTask = async(taskData)=>{
    const response = await sendRequest('POST',undefined, taskData);
    return response;
}
export const deleteTask = async(id)=>{
    const response = await sendRequest('DELETE',`/${id}`);
    return response;
}