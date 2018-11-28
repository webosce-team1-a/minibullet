import React from 'react';
import pushmon from './pushmon.png';

import Layout, {Cell} from '@enact/ui/Layout';

const Home = () => (
      <Layout orientation="vertical" align="center">
            <Cell shirink align="center">
                  <div>
                  <img src={pushmon} center width="80%"></img> 
                  </div>
                  <div>
                        <p style={{position: 'center'}}>HI. I'm Pushmon!</p> 
                        <p style={{position: 'center'}}>You can exchange files, text with not only your devices but also friends.</p> 
                  </div>
            </Cell>
      </Layout>
);

export default Home;
