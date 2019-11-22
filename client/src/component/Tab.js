import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
// https://github.com/reactjs/react-tabs/blob/master/README.md

// Note that component cannot be named Tab cuz it's reserved for Tab
export default class Tabx extends React.Component {

  render () {

    return (
      
      <>
        <Tabs>
          <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title2</Tab>
          </TabList>
        </Tabs>
        <TabPanel>
          <h2>something</h2>
        </TabPanel>
        <TabPanel>
          <h2>another thing</h2>
        </TabPanel>
      </>

    )
  }
}