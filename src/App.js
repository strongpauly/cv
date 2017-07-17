import React, { Component } from 'react';
import './App.css';
import {PageHeader, Grid, Row, Col, Label, Panel, Image} from 'react-bootstrap';
import Center from 'react-center';
import resume from './data/resume';
import Work from './Work';
import Education from './Education';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <PageHeader>{resume.basics.name} <small>{resume.basics.label}</small></PageHeader>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Panel header="About">
              <Center>
                <Image src={resume.basics.picture} circle />
              </Center>
              <div style={{marginTop:8}}>{resume.basics.summary}</div>
            </Panel>
          </Col>
          <Col md={8}>
            <Panel header="Skills">
              <ul className="skills-list list-inline">
                {resume.skills.map( skill => {
                  return skill.keywords.map(keyword => <li key={keyword}><Label bsStyle="primary">{keyword}</Label></li>);
                })}
              </ul>
            </Panel>
            <Panel header="Work">
              {
                resume.work.map( (work, index) => {
                  return <Work key={index} work={work}/>;
                })
              }
            </Panel>
            <Panel header="Education">
              {
                resume.education.map( (item, index) => {
                  return <Education key={index} education={item} />;
                })
              }
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
