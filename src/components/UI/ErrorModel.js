import React from 'react'
import Button from './Button'
import Card from './Card'
import styles from './ErrorModel.module.css'

const ErrorModel = (props) => {
    return (
        <div>
            <div className={styles.backdrop} onClick={props.onConfirm}>
        <Card className={styles.model}>
            <header className={styles.header} ><h2 className={styles.h2}>{props.title}</h2></header>
            <div className={styles.content}>
                <p >{props.message}</p>
            </div>
            <footer className={styles.actions}><Button onClick={props.onConfirm}> Okay </Button></footer>
        </Card>
        </div>
        </div>
    )
}

export default ErrorModel
