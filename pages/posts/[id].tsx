import React from 'react';
import { useRouter } from 'next/router';

export default function Post() {
    const id = useRouter().query.id;
    console.log(id);
    return <div>Detail page: {id}</div>
}