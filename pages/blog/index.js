import {useState} from 'react';
import Layout from '../../comps/Layout';
import Link from 'next/link';

export default () => {
    const [blogs, setBlogs] = useState([
        {id: 1, title: 'title 1', body: 'body 2'},
        {id: 2, title: 'title 2', body: 'body 2'},
        {id: 3, title: 'title 3', body: 'body 3'},
        {id: 4, title: 'title 4', body: 'body 4'},
        {id: 5, title: 'title 5', body: 'body 5'},
        {id: 6, title: 'title 6', body: 'body 6'}
    ]);

    return (
        <Layout>
            <div>
            <h1>My Blog</h1>
            <p> welcome to blog </p>
                <ul>
                    {blogs.length > 0 ? blogs.map((item, index) => {
                        return (
                            <li key={index}> 
                                <Link href={`/blog/post?id=${item.id}`}> 
                                    <a> {item.title} </a> 
                                </Link>
                            </li>
                        )
                    }) : ''}
                </ul>
            </div>
        </Layout>
    )
}