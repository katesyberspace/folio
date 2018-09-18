import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Web from './Web'
import Drone from './Drone'

class Projects extends React.Component {

  render() {
    return (
      <div className="projects-grid">
        <Tabs>
          <TabList>
            <Tab>web</Tab>
            <Tab>drone</Tab>

          </TabList>

          <TabPanel>
            <Web/>
          </TabPanel>

          <TabPanel>
            <Drone />
          </TabPanel>

        </Tabs>
      </div>
    )
  }
}


export default Projects