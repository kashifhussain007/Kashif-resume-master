import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {
  dataabout,
  meta,
  services,
  skills,
  worktimeline,
} from '../../content_option';
import './style.css';

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-3 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div className='flex flex-col space-y-4'>
              {dataabout.aboutme.map((about, index) => (
                <p key={index}>{about}</p>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc mt-3">{data.description}</p>
                  <p className="service_desc mt-3">{data.bulletTitle}</p>
                  <div className='flex flex-col space-y-2'>
                    {data.bullets.map((pointer, idx) => (
                      <p className="service_desc mt-3" key={idx}>{pointer}</p>
                    ))}
                    </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            <Row className=" sec_sp">
              {skills.map((data, i) => {
                return (
                  <div
                    key={i + 1}
                    className="flex items-start justify-start flex-wrap"
                  >
                    <p className="bg-transparent border border-black dark:border-white m-2 rounded-full py-2 px-4">
                      {data.name}
                    </p>
                  </div>
                );
              })}
            </Row>
            {/* <h3 className="progress-title">{data.name}</h3> */}
            {/* <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div> */}
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td style={{ minWidth: 140 }}>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
