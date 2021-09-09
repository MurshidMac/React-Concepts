import React from 'react'
import ReactDOM from 'react-dom';
import Button from './Button'
import Card from './Card'
import styles from './ErrorModel.module.css'


const BackdropRoot = props => {
    return (<div className={styles.backdrop} onClick={props.onConfirm}/>)
}

const ModelRoot = props => {
    return (<Card className={styles.model}>
            <header className={styles.header} ><h2 className={styles.h2}>{props.title}</h2></header>
            <div className={styles.content}>
                <p >{props.message}</p>
            </div>
            <footer className={styles.actions}><Button onClick={props.onConfirm}> Okay </Button></footer>
        </Card>)
}

const ErrorModel = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<ModelRoot title={props.title} message={props.message} onConfirm={props.onConfirm} />, document.getElementById('model-root'))}
            {ReactDOM.createPortal(<BackdropRoot onConfirm={props.onConfirm}/>, document.getElementById('backdrop-root'))}
        </React.Fragment>
    )
}

export default ErrorModel
