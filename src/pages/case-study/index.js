import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { dataportfolio, meta } from '../../content_option';
import { slugify } from '../portfolio';
import './style.css';

export const findProject = (title) => {
  const app = dataportfolio.filter((item) => slugify(item.title) === title)[0];
  return app;
};

export const CaseStudy = () => {
  const { pathname } = useLocation();
  const title = pathname.replace('/case-study/', '');
  const project = findProject(title);
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet='utf-8' />
          <title>
            Case Study - {title} | {meta.title}
          </title>
          <meta name='description' content={meta.description} />
        </Helmet>
        <Row className='my-3'>
          <Col lg='12'>
            <h1 className='display-4 mb-4'>
              {project.title} | {project.caseStudy.title}
            </h1>
            <hr className='t_border my-4 ml-0 text-left' />
          </Col>
        </Row>
        {/* Overview */}
        <div className='space-y-4'>
          <h2 className='font-bold text-4xl'>Overview:</h2>
          <p>{project.caseStudy.overview}</p>
        </div>
        {/* Platforms */}
        <div className='my-8'>
          <h2 className='font-bold text-4xl mb-4'>Platforms:</h2>
          {project.caseStudy.platform_links.map((tech, idex) => (
            <Row key={idex + 1} className='flex my-2'>
              <Col lg='4'>
                <h4 className='font-bold'>
                  {idex + 1}. {tech.name}
                </h4>
              </Col>
              <Col lg='8'>
                <a href={tech.link} target='_blank' rel='noreferrer'>
                  {tech.link}
                </a>
              </Col>
            </Row>
          ))}
        </div>
        {/* Technologies */}
        <div className='my-8'>
          <h2 className='font-bold text-4xl mb-4'>Technologies Utilized:</h2>
          {project.caseStudy.technologies.map((tech, idex) => (
            <Row key={idex + 1} className='flex my-2'>
              <Col lg='4'>
                <h4 className='font-bold'>
                  {idex + 1}. {tech.key}
                </h4>
              </Col>
              <Col lg='8'>
                <p>{tech.value}</p>
              </Col>
            </Row>
          ))}
        </div>
        {/* Platform Image */}
        <a href={project.link} target='_blank' rel='noreferrer'>
          <img
            src={project.img}
            alt={project.title}
            height='100%'
            width='100%'
            className='rounded-xl my-4 cursor-pointer'
          />
        </a>
        {/* Key Contributions */}
        <div className='my-12'>
          <h2 className='font-bold text-4xl my-8'>Key Contributions:</h2>
          {project.caseStudy.contributions.map((contribution, idex) => (
            <Col lg='12' key={idex + 1} className='my-4'>
              <h3 className='text-2xl font-bold'>
                {idex + 1}. {contribution.key}
              </h3>
              <div className='my-3 space-y-2'>
                {contribution.value.map((item) => (
                  <ul class='list-disc ml-4'>
                    <li>{item}</li>
                  </ul>
                ))}
              </div>
              {contribution.imageSrc && (
                <a href={contribution.link} target='_blank' rel='noreferrer'>
                  <img
                    src={contribution.imageSrc}
                    alt={contribution.key}
                    height='100%'
                    width='100%'
                    className='rounded-xl my-4 cursor-pointer'
                  />
                </a>
              )}
            </Col>
          ))}
        </div>

        {/* Results */}
        <div className='my-12'>
          <h2 className='font-bold text-4xl my-4'>Results Achieved:</h2>
          <ul class='list-disc ml-4 space-y-2'>
            {project.caseStudy.results.map((result, idex) => (
              <li key={idex + 1}>{result}</li>
            ))}
          </ul>
        </div>

        {/* Conclusion */}
        <div className='my-12'>
          <h2 className='font-bold text-4xl my-4'>Conclusion:</h2>
          <p>{project.caseStudy.conclusion}</p>
        </div>

        <br />
      </Container>
    </HelmetProvider>
  );
};
