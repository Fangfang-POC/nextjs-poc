export type Post = {
    id: string,
    name: string,
    body: string,
}

export async function getPosts(): Promise<Array<Post>> {
    return Promise.resolve([{
        id: '1',
        name: 'hello',
        body: 'how are you?'
    }, {
        id: '2',
        name: 'post2',
        body: 'this is the second post',
    }]);
}