import React from 'react';

class DogIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            //isLoaded: false
        };
    }

    componentDidMount() {
        const apiUrl = 'https://dog.ceo/api/breeds/image/random';
        fetch(apiUrl)
        .then(res => res.json())
        .then(res => this.setState({posts:res}))
    };

    render() {
        return (
            <div>
            <h1 align='center'> Man's best friend </h1>
            {this.state.posts.map(post=><div>{post.id}.{post.title}</div>)}
            </div>
        );
    }
};

export default DogIndex;