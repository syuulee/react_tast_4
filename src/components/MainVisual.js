import React from 'react';
import Information from './Information';

const MainVisual = () => {
    return (
        <>
            <section className='main_visual'>
                <div className='bg'>
                    <figure>
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                '/assets/img/mainvisual.jpg'
                            }
                            alt=''
                        />
                    </figure>
                </div>
                <Information />
            </section>
        </>
    );
};

export default MainVisual;
