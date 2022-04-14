export const get = async({params}) => {
    console.log(params);
    const id = params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}?_embed=posts`);
    return {
        status: 200,
        body: await res.json()
    };
};