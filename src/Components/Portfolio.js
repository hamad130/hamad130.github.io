import { Grid } from '@material-ui/core';
import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <section id='team'>
      <div style={{background:'white'}}>
      <div id="team" className="text-center">
        <div className="container" >
          <div className="section-title">
            <h2>Meet the Team</h2>
            <p>
              The brains behind our company.
            </p>
          </div>
          <div id="row">
            <Grid container direction="row"
  justify="space-around" >            {this.props.data
              ? this.props.data.map((d, i) => (
                  
                    <Grid item xs={12} md={3}>
                   
                      <img src={d.img} alt="..." className="team-img" />
                      <div className="caption">
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
                      </div>
                  
                    </Grid>
                ))
              : "loading"}
              </Grid>

          </div>
        </div>
      </div>
      </div>
      </section>
    );
  }
}


export default Portfolio;
