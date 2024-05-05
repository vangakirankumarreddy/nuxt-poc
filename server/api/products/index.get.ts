export default defineEventHandler(async (event) => {
    try {
        const url = new URL(event.node.req.originalUrl, 'http://localhost'); 
        const search = url.searchParams.get('search') || ''; // Get the value of the 'search' parameter from the URL
        console.log('search', search);

        const response = await fetch("https://60b0c06a1f26610017fff217.mockapi.io/api/users/products");
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        let data = await response.json();

        // Sort the data based on the search query
        if (search) {
            // Sorting logic based on the search query
            data = data.filter((product:any) =>
                product.name.toLowerCase().includes(search.toLowerCase())
            );
            console.log('Sorted products Server Response Apps', data?.length);
        }

        // Here you can add more sorting logic if needed

        console.log('Calling products Server Response Apps', data?.length);
        return {
            data,
            status: 200 // HTTP status code
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            error: error.message,
            status: 500 // Internal Server Error
        };
    }
});
