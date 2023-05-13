import React from 'react';
import './style.css';
import { GrServers } from 'react-icons/gr';

function Aws() {
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    borderBottom: '1px solid yellow',
  };



  return (
    <div className="App">
      <main>
        <section className="connect">
          <h1>
            <GrServers /> Amazon Web Servers
          </h1>
          <ul>
            <li>
              Download the AWS CLI from the official website (https://aws.amazon.com/cli/) and follow the installation instructions for your operating system.
            </li>
            <li>
              Use the AWS Management Console to launch an EC2 instance (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html).
            </li>
            <li>
              Use the AWS SDK for your programming language to interact with AWS services (https://aws.amazon.com/tools/).
            </li>
            <li>
              Use AWS CloudFormation to create and manage AWS resources in a declarative way (https://aws.amazon.com/cloudformation/).
            </li>
            <li>
              Use AWS Elastic Beanstalk to deploy and manage applications in the AWS Cloud (https://aws.amazon.com/elasticbeanstalk/).
            </li>

          </ul>
        </section>
      </main>
    </div>
  );
}

export default Aws;
