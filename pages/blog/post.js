import {useEffect, useState} from 'react';

import {withRouter} from 'next/router';

import Layout from '../../comps/Layout';

export default withRouter((props) => {
    const {query} = props.router;
    const [blog, setBlog] = useState(false);

    const [blogs, setBlogs] = useState([
        {id: 1, title: 'title 1', body: 'body 2'},
        {id: 2, title: 'title 2', body: 'body 2'},
        {id: 3, title: 'title 3', body: 'body 3'},
        {id: 4, title: 'title 4', body: 'body 4'},
        {id: 5, title: 'title 5', body: 'body 5'},
        {id: 6, title: 'title 6', body: 'body 6'}
    ]);

    useEffect(() => {
        console.log(`make api call to... ${query.id}`);
        const blog = blogs.find((item) => {
            return item.id == query.id;
        });

        setTimeout(() => {
            setBlog(blog);
        }, 1500);

        return () => {

        }
    }, []);
    
    return (
        <Layout>
            {blog ? (
                <div>
                    <h4> {blog.title} </h4>
                    <p> {blog.body} </p>
                </div>
            ) : (
                <div> loading data ... </div>
            )}
        </Layout>
    )
});