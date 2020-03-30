import React from 'react';

const UI = () => {

    const headerText = 'The Evil Rabbit Jumped over the Fence';
    const paragraph = 'Our mission is to make cloud computing accessible to everyone. We build products for developers and designers. And those who aspire to become one.'

    return (
        <div className='container my-3'>
            <div className="card card-body mb-2">
                <p className="m-0">Headers</p>
                <hr/>
                <h1>{headerText}</h1>
                <h2>{headerText}</h2>
                <h3>{headerText}</h3>
                <h4>{headerText}</h4>
                <h5>{headerText}</h5>
                <h6>{headerText}</h6>
            </div>

            <div className="card card-body mb-2">
                <p className="m-0">Paragraph</p>
                <hr/>
                <p>{paragraph}</p>
                <p><strong>{paragraph}</strong></p>
                <small>{paragraph}</small>
                <hr/>
                <ul>
                    <li>Static websites and static generators (React, Vue, Angular, etc)</li>
                    <li>Code that renders HTML on the server-side</li>
                    <li>API endpoints that query databases or web APIs and return dynamic data</li>
                </ul>
            </div>

            <div className="card mb-2">
                <div className="card-body">
                    <p className="m-0">Buttons</p>
                    <hr/>
                    <button class="btn btn-default mr-1">Default</button>
                    <button class="btn btn-primary mr-1">Primary</button>
                    <button class="btn btn-secondary mr-1">Secondary</button>
                    <button class="btn btn-success mr-1">Success</button>
                    <button class="btn btn-danger mr-1">Danger</button>
                    <button class="btn btn-warning mr-1">Warning</button>
                    <button class="btn btn-info mr-1">Info</button>
                </div>
            </div>



        </div>
    )
}

export default UI;