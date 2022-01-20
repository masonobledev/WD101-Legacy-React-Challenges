import React, { Component } from 'react';

class DogIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photos: [],
            isLoaded: false
        };
    }

    componentDidMount() {
        const apiUrl = 'https://dog.ceo/api/breeds/image/random';
        fetch(apiUrl)
        .then(res => res.json())
        .then(({ dogPhotos }) => { 
            this.setState({
                isLoaded: true,
                photos: dogPhotos,
            })
        });
    }

    render() {
        return (
            <div>
                <h1>My Component has mounted, Check the browser 'console'</h1>
                {
                    this.photos.length === 0
                    ? 'Loading dog pics...'
                    : this.state.photos.map((photo) => (
                        <figure key={photo.id}>
                        <img src={this.photo.avatar} />
                        {{photo.avatar}}
                        <figcaption>
                        {photo.name}
                        </figcaption>
                        </figure>
                        ))
                }
            </div>
        );
    }
};

export default DogIndex;