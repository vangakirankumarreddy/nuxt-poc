// server/users.ts
export default defineEventHandler(async (event) => {
    try {
        const id = event.context.params.id
        const response = await fetch(`https://60b0c06a1f26610017fff217.mockapi.io/api/users/apps/${id}`);

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log('Calling app ID Server Response Apps', id);
        return {
            data,
            status: 200 // HTTP status code
        };
    } catch (error) {
        console.log('error')
        return {
            error: error.message,
            status: 500 // Internal Server Error
        };
    }
});
