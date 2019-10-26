import React, { Component } from 'react'

// Third's components
import {
    Card
} from 'reactstrap'
import { NotificationManager } from 'react-notifications'

// Redux
import { connect } from 'react-redux';
import {
    obtenerDatosMesaActa,
 } from 'Actions';

const notFoundImage = 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';

class Movie extends Component {

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
        this.props.obtenerDatosMesaActa(image);
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

    getClass(key) {
        if (key % 2 == 0)
            return "row background-griss"
        return "row"
    }

    render() {
        const { movie, className, acta } = this.props
        const { isFull, imageNotFound } = this.state
        return (
            <div className={"p-0 " + className} >
                <Card className={"card-container m-5"} >
                    <img src={imageNotFound ? notFoundImage : 'https://computo.oep.org.bo/resul/imgActa/' + movie + '1.jpg?cache=' + new Date().getTime()}
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
                    <h1 className="col-12 pt-10 pb-20">Detalle de la mesa: {acta && acta.numMesa}</h1>
                    {acta && acta.resul.map((item, key) => (
                        <div className={this.getClass(key)} key={key}>
                            <div className="label col-6 col-md-6 pt-5 right">{item.sigla}</div>
                            <div className="col-6 col-md-6">
                                {item.votos}
                            </div>
                        </div>
                    ))}

                    <img src={imageNotFound ? notFoundImage : 'https://computo.oep.org.bo/resul/imgActa/' + movie + '1.jpg?cache=' + new Date().getTime()}
                        alt={movie}
                        className="img-fluid d-block"
                        onError={this.onImageLoadError} />
                </div>}
            </div>
        )
    }

}


const mapStateToProps = ({ moviesApp }) => {
    const { acta } = moviesApp;
    return { acta };
 }
 
 export default connect(mapStateToProps, {
    obtenerDatosMesaActa,
 })(Movie);