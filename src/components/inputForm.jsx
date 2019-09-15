import React from 'react';

class inputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: `Write something about this textbox`
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Something ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} data-netlify="true">
        <label>
          Essay: <br />
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default inputForm;

  // cloudmersiveReq(event) {
  //   const nlpAdjectives = 'https://api.cloudmersive.com/swagger/api/nlp/get/words/adjectives/';
  //   const SAMPLE = `Patrick Powell
  //   prp1277@gmail.com 402-415-9083 linkedin.com/in/prp1277
  //   A data-driven analyst with a passion for developing smart solutions for small businesses.
  //   Education
  //   Missouri State University		08/2011 – 05/2015
  //   Finance Major, Accounting Minor – 3.21 GPA
  //   Kappa Sigma Fraternity
  //   Assistant Treasurer, Grand Scribe, Alumni Relations, Webmaster, Marketing
  //   Employment
  //   Pay-LESS Office Products		06/2018 – Present
  //   Technology & Operations Consultant
  //   - Restructured inventory & supply chain systems by mining & cleaning data in existing databases
  //   - Provided actionable insights by writing SQL queries to consolidate tables & create relationships
  //   - Geocoded customer addresses & analyzed purchase histories to optimize daily truck routing
  //   - Worked with the company’s President to analyze picks per warehouse bin & reorganize product locations resulting in a 28% increase in picks per hour
  //   Reinhart FoodService			08/2017 – 02/2018
  //   Purchasing Assistant
  //   - Created daily, weekly & ad-hoc Excel reports to monitor inventory levels & project demand
  //   - Developed templates to automate ETL processes & provide solutions to inventory shrink to executive management
  //   - Led a multi-divisional group responsible for evaluating weekly Perfect Order performance & lowered product availability errors by 34%
  //   - Managed communications between vendors, sales reps & a centralized repurchasing team
  //   State Street Investment Servicing	02/2017 – 08/2017
  //   Client Operations Specialist – Consultant
  //   - Compiled client-facing reports using multiple sources to reconcile daily Net Asset Values with DST Vision & summarize daily fund fluctuations
  //   - Ensured regulatory compliancy of daily transactions exceeding $100M
  //   - Maintained documentation of TRS Swaps, ledger balances & journal entries
  //   Waddell & Reed Financial Services	02/2016 – 10/2016
  //   Customer Service Representative
  //   - Processed transactions & examined investment accounts in compliance with regulatory agencies
  //   - Researched Traditional, Roth, SEP & SIMPLE IRAs, TSAs, Qualified & 529 Plan account issues & followed up with the stakeholder via email or phone
  //   Key Bank Real Estate Capital		06/2015 – 08/2015
  //   Surveillance Analyst Internship
  //   - Recorded income, expenses & other issues, alerted managers of any significant changes
  //   - Corresponded with investors and rating agencies to provide information as requested
  //   - Monitored & evaluated the financial performance of income producing commercial properties
  //   `
  //   const xhr = new XMLHttpRequest();
  //   xhr.open("POST", nlpAdjectives + SAMPLE, true)
  //   xhr.onload = function () {
  //     console.log(xhr.responseText);
  //   };
  //   xhr.send();
  // }
