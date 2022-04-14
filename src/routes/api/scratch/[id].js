export const get = async({params}) => {
    console.log(params);

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}?_expand=user`);
    return {
        status: 200,
        body: await res.json()
    };
};