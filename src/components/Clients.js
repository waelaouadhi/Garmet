import React from 'react';
import kws from '../images/clients/cabval.avif';
import geps from '../images/clients/atct.png';
import protergia from '../images/clients/crj.png';
import newClient1 from '../images/clients/msgrp.png';
import newClient2 from '../images/clients/uib.png';
import newClient3 from '../images/clients/dinefer.png';
import newClient4 from '../images/clients/lrt.png';
import newClient5 from '../images/clients/ncr.png';
import newClient6 from '../images/clients/silec.png';
import newClient7 from '../images/clients/socomec.png';
import newClient8 from '../images/clients/steg.png';

const clientImage = {
  height: '10rem',
  width: 'auto',
  mixBlendMode: 'colorBurn',
};

const Clients = () => {
  const clients = [
    kws, geps, protergia, newClient1, newClient2, newClient3, newClient4, newClient5, newClient6, newClient7, newClient8,
  ];

  return (
    <div className="mt-8 bg-gray-100">
      <section data-aos="fade-up">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-garmetGreen uppercase font-bold">Nos Clients</h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-garmetYellow"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-garmetGreen">Quelques-uns de nos clients</h2>
        </div>

        <div className="p-16" data-aos="fade-in" data-aos-delay="600">
          <div className="relative overflow-hidden">
            {/* Horizontal Scrollable Container */}
            <div className="client-carousel">
              {clients.concat(clients).map((client, index) => (
                <div key={index} className="inline-block mx-6">
                  <img src={client} alt="client" style={clientImage} className="inline-block opacity-50 hover:opacity-100 transition-all ease-in-out" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;