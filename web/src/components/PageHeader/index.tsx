import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg'
import './style.css';

interface PageHeaderProps {
    title: string;
    description?: string;
    backLink?: string;
    topleftcontent?: any
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to={props.backLink ? props.backLink : "/"}>
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <div className="topleft-content">
                    {props.topleftcontent}
                </div>
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                {props.description && <p>{props.description}</p>}
                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;