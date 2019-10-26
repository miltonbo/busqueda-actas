import React, { Component } from 'react'

// Third's components
import {
    Card
} from 'reactstrap'
import { NotificationManager } from 'react-notifications'


const notFoundImage = 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';

export default class Movie extends Component {

    state = {
        imageNotFound: false,
        isFull: false
    }

    onImageLoadError = () => {
        this.setState({
            imageNotFound: true
        })
    }

    onClickImage(image) {
        this.setState({
            image,
            isFull: true
        })
    }

    componentDidMount() {
        window.addEventListener('keydown', this.onKeyPressed);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    componentDidCatch(error, info) {
        NotificationManager.error('Something went wrong.', 'Error')
    }

    onKeyPressed = (event) => {
        if (event.key === 'Escape') {
            this.setState({ image: null, isFull: false })
        }
    }

    render() {
        const { movie, className } = this.props
        const { isFull, imageNotFound } = this.state
        return (
            <div className={"p-0 " + className} >
                <Card className={"card-container m-5"} >
                    <img src={imageNotFound ? notFoundImage : 'https://computo.oep.org.bo/resul/imgActa/' + movie + '1.jpg'}
                        alt={movie}
                        className="img-fluid d-block"
                        onError={this.onImageLoadError}
                        onClick={() => this.onClickImage(movie)}  />

                    <div className="pt-30 pb-10 pl-20 pr-20" onClick={() => this.onClickImage(movie)} >
                        <h4 className="text-center">{movie}</h4>
                    </div>
                </Card>

                {isFull &&
                <div
                    className="fullscreen"
                >
                    <img src={imageNotFound ? notFoundImage : 'https://computo.oep.org.bo/resul/imgActa/' + movie + '1.jpg'}
                        alt={movie}
                        className="img-fluid d-block"
                        onError={this.onImageLoadError} />
                </div>}
            </div>
        )
    }

}