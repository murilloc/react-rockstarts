import React from "react";
import css from './picture.module.css';

export default function Picture({imageSource, description, title}){

    return (
        <div>
            <img className={css.picture} src={imageSource} alt={description} title={title}/>
        </div>
    )
}
