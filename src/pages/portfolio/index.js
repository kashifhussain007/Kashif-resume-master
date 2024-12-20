import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { dataportfolio, meta } from '../../content_option';
import './style.css';

export const slugify = (str) => {
  str = str.replace(/^\s+|\s+$/g, '');
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
  const to = 'aaaaeeeeiiiioooouuuunc------';
  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
};

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className='Portfolio-header'>
        <Helmet>
          <meta charSet='utf-8' />
          <title> Portfolio | {meta.title} </title>
          <meta name='description' content={meta.description} />
        </Helmet>
        <Row className='mb-5 mt-3'>
          <Col lg='8'>
            <h1 className='display-4 mb-4'> Portfolio </h1>
            <hr className='t_border my-4 ml-0 text-left' />
          </Col>
        </Row>
        <div className='space-y-4'>
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className='po_item'>
                <div className='flex flex-col w-1/2'>
                  <h3 className='font-bold text-3xl mt-4 mx-auto'>{data.title}</h3>
                  <p className='text-base px-6 my-3 text-center desktop'>{data.description}</p>
                  <p className='text-base px-2 my-3 text-center mobile'>{data.description}</p>
                  <img
                    src={data.img}
                    alt={data.title}
                    className='rounded-lg object-container w-full mb-3 mobile'
                  />
                  <div className='flex flex-col justify-start items-start w-full'>
                    <Row className='my-2 mx-1'>
                      {data.tech_stacks?.map((technology, i) => {
                        return (
                          <p
                            key={i + 1}
                            className='bg-transparent border border-black dark:border-white m-2 text-sm rounded-full py-2 px-4'
                          >
                            {technology}
                          </p>
                        );
                      })}
                    </Row>
                  </div>
                </div>
                <img
                  src={data.img}
                  alt={data.title}
                  className='rounded-lg object-container w-1/2 desktop'
                />
                <div className='content'>
                  <a href={`/case-study/${slugify(data.title)}`} target='_blank' rel='noreferrer'>
                    view case study
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
