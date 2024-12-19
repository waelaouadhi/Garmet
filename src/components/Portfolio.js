import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

// Import images from the src/images folder
import alimImage from '../images/alim.jpeg';
import compelecImage from '../images/compelec.jpeg';
import stmImage from '../images/stm.jpg';

const Portfolio = () => {
    const [openPopup, setOpenPopup] = useState(false);
    const [popupImage, setPopupImage] = useState('');
    const [popupTitle, setPopupTitle] = useState('');
    const [popupDescription, setPopupDescription] = useState('');

    const handleOpenPopup = (image, title, description) => {
        setPopupImage(image);
        setPopupTitle(title);
        setPopupDescription(description);
        setOpenPopup(true);
    };

    return (
        <>
            <div className="my-4 py-4" id="portfolio">
                <h2 className="my-2 text-center text-3xl text-garmetGreen uppercase font-bold">Products</h2>
                <div className="flex justify-center">
                    <div className="w-24 border-b-4 border-garmetYellow mb-8"></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-center items-center">
                        {/* Card 1 */}
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
                            <a href="#">
                                <img className="rounded-t-lg" src={alimImage} alt="Business Management System" />
                            </a>
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                                    Alimentations Sans Interruption (ASI)
                                </h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Nous distribuons des ASI haute performance des marques Socomec et AEC, en monophasé ou triphasé, allant de 6 kVA à 300 kVA. Elles assurent une protection fiable contre les coupures de courant. Nos ASI garantissent la continuité d’alimentation pour vos installations critiques.
                                </p>
                                <button
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={() =>
                                        handleOpenPopup(
                                            alimImage,
                                            'Business Management System',
                                            'All data is stored in the cloud and as such it is easily accessible from all devices and from any location.'
                                        )
                                    }
                                >
                                    Learn More
                                    <svg
                                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
                            <a href="#">
                                <img className="rounded-t-lg" src={compelecImage} alt="Marketing Automation" />
                            </a>
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                                    Composants électroniques et modules de puissance
                                </h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Nous proposons une large gamme de composants électroniques et de modules de puissance pour divers systèmes industriels. Nos produits garantissent la performance et la fiabilité de vos équipements électroniques.
                                </p>
                                <button
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={() =>
                                        handleOpenPopup(
                                            compelecImage,
                                            'Marketing Automation',
                                            'Streamline your marketing efforts with automated workflows and analytics.'
                                        )
                                    }
                                >
                                    Learn More
                                    <svg
                                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
                            <a href="#">
                                <img className="rounded-t-lg" src={stmImage} alt="E-Commerce Platform" />
                            </a>
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                                    Automates programmables industriels (API) et modules associés
                                </h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Nous proposons des automates programmables industriels (API) et leurs modules associés pour l’automatisation de vos processus industriels. Nos solutions couvrent tous les besoins, des systèmes simples aux configurations complexes, pour optimiser vos processus de production.
                                </p>
                                <button
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={() =>
                                        handleOpenPopup(
                                            stmImage,
                                            'E-Commerce Platform',
                                            'Expand your business with a scalable online store.'
                                        )
                                    }
                                >
                                    Learn More
                                    <svg
                                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popup for Image */}
            <Popup open={openPopup} closeOnDocumentClick onClose={() => setOpenPopup(false)}>
                <div
                    className="p-5 bg-cover bg-center rounded-lg shadow-lg max-w-md mx-auto"
                    style={{ backgroundImage: `url(${popupImage})`, minHeight: '400px' }}
                >
                    <div className="bg-black bg-opacity-60 text-white p-5 rounded-lg">
                        <h2 className="text-2xl font-bold text-center mb-4">{popupTitle}</h2>
                        <p>{popupDescription}</p>
                    </div>
                </div>
            </Popup>
        </>
    );
};

export default Portfolio;