import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
// import Typewriter from 'typewriter-effect';
import { introdata, meta } from '../../content_option';
import './style.css';

export const Home = () => {
  return (
    <HelmetProvider>
      <section id='home' className='home'>
        <Helmet>
          <meta charSet='utf-8' />
          <title> {meta.title}</title>
          <meta name='description' content={meta.description} />
        </Helmet>
        <div className='intro_sec d-lg-flex align-items-center desktop'>
          <div className='text order-2 order-lg-2 h-100 d-lg-flex justify-content-center'>
            <div className='align-self-center '>
              <div className='intro mx-auto'>
                <h1 className='mb-2 font-bold text-4xl'>{introdata.title}</h1>
                <p className='mb-4 font-normal text-base'>{introdata.subTitle}</p>
                <h2 className='fluidz-48 font-semibold text-2xl my-4'>{introdata.highlight}</h2>
                <p className='text-base'>{introdata.description}</p>
                <div className='flex flex-col items-start justify-start space-y-3 mb-5 mt-4 desktop'>
                  {introdata.technologies.map((technologyCard, tcIdx) => (
                    <div
                      key={tcIdx + 1}
                      className='flex items-start justify-start flex-wrap space-x-3'
                    >
                      {technologyCard.map((technology, tidx) => (
                        <p
                          key={tidx + 1}
                          className='bg-transparent border border-black dark:border-white rounded-full py-2 px-4'
                        >
                          {technology}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
                <div className='intro_btn-action pb-3'>
                  <Link to='/about' className='text_2'>
                    <div id='button_p' className='ac_btn btn '>
                      About Me
                      <div className='ring one'></div>
                      <div className='ring two'></div>
                      <div className='ring three'></div>
                    </div>
                  </Link>
                  <Link to='/portfolio'>
                    <div id='button_h' className='ac_btn btn '>
                      My Portfolio
                      <div className='ring one'></div>
                      <div className='ring two'></div>
                      <div className='ring three'></div>
                    </div>
                  </Link>
                  <Link to='/contact'>
                    <div id='button_h' className='ac_btn btn'>
                      Contact Me
                      <div className='ring one'></div>
                      <div className='ring two'></div>
                      <div className='ring three'></div>
                    </div>
                  </Link>
                </div>

                <div className='intro_btn-action pb-5'>
                  <Link
                    to='https://www.fiverr.com/farooq716'
                    target='_blank'
                    className='text_2 my-2 mx-0'
                  >
                    <div id='button_h' className='ac_btn btn'>
                      Fiverr
                      <div className='ring one'></div>
                      <div className='ring two'></div>
                      <div className='ring three'></div>
                    </div>
                  </Link>
                  <Link
                    to='https://www.upwork.com/freelancers/~019e7d3cd427d440a1?mp_source=share'
                    target='_blank'
                    className='text_2 my-2 mx-0'
                  >
                    <div id='button_h' className='ac_btn btn'>
                      Upwork
                      <div className='ring one'></div>
                      <div className='ring two'></div>
                      <div className='ring three'></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='h_bg-image flex justify-center order-1 order-lg-1'>
            <img
              src={introdata.your_img_url}
              alt='Kashif Hussain'
              height={325}
              width={325}
              className='rounded-full'
            />
          </div>
        </div>
        {/* Mobile */}
        <div className='intro_sec d-lg-flex flex-col align-items-center mobile'>
          <div className='h_bg-image flex justify-center order-1 order-lg-1'>
            <img
              src={introdata.your_img_url}
              alt='Kashif Hussain'
              width='auto'
              className='rounded-full h-[250px]'
            />
          </div>
          <div className='text order-2 order-lg-2 h-100 d-lg-flex justify-content-center'>
            <div className='align-self-center '>
              <div className='intro mx-auto'>
                <h1 className='mb-2 font-bold text-4xl'>{introdata.title}</h1>
                <p className='mb-4 font-normal text-base'>{introdata.subTitle}</p>
                <h2 className='fluidz-48 font-semibold text-2xl my-4'>{introdata.highlight}</h2>
                <p className='text-base'>{introdata.description}</p>
                <div className='flex flex-col items-start justify-start space-y-3 mb-5 mt-4'>
                  {introdata.mobile_technologies.map((technologyCard, tcIdx) => (
                    <div
                      key={tcIdx + 1}
                      className='flex items-start justify-start flex-wrap space-x-3'
                    >
                      {technologyCard.map((technology, tidx) => (
                        <p
                          key={tidx + 1}
                          className='bg-transparent border border-black dark:border-white rounded-full py-2 px-4'
                        >
                          {technology}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>

                <div className='flex flex-wrap space-x-2 intro_btn-action'>
                  <Link to='/about' className='text_2 my-2 mx-0'>
                    <div id='button_p' className='ac_btn btn '>
                      About Me
                      <div className='ring one'></div>
                      <div className='ring two'></div>
                      <div className='ring three'></div>
                    </div>
                  </Link>
                  <Link to='/portfolio' className='text_2 my-2 mx-0'>
                    <div id='button_h' className='ac_btn btn '>
                      My Portfolio
                      <div className='ring one'></div>
                      <div className='ring two'></div>
                      <div className='ring three'></div>
                    </div>
                  </Link>
                  <Link to='/contact' className='text_2 my-2 mx-0'>
                    <div id='button_h' className='ac_btn btn'>
                      Contact Me
                      <div className='ring one'></div>
                      <div className='ring two'></div>
                      <div className='ring three'></div>
                    </div>
                  </Link>
                  <Link
                    to='#'
                    target='_blank'
                    className='text_2 my-2 mx-0'
                  >
                    <div id='button_h' className='ac_btn btn'>
                      Fiverr
                      <div className='ring one'></div>
                      <div className='ring two'></div>
                      <div className='ring three'></div>
                    </div>
                  </Link>

                  <Link
                    to='https://www.upwork.com/freelancers/~019e7d3cd427d440a1?mp_source=share'
                    target='_blank'
                    className='text_2 my-2 mx-0'
                  >
                    <div id='button_h' className='ac_btn btn'>
                      Upwork
                      <div className='ring one'></div>
                      <div className='ring two'></div>
                      <div className='ring three'></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
