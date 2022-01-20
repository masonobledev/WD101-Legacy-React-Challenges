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
        })
    }
}