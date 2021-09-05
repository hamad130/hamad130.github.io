import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import ServiceCard from "./ServiceCard";
export default function (props) {
  // const getRandomColor=()=> {
  //   var letters = '0123456789ABCDEF';
  //   var color = '#';
  //   for (var i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // }
  return (
    <section id="services">
      <div style={{ background: "#ebeeee" }} sect>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          style={{ padding: "100px" }}
          spacing={10}
        >
          <Grid item xs={12} md={4}>
            <ServiceCard
              title="E-commerce Development"
              subtitle="Thinking about setting up a business of your own? We can bring your dream to life! Make your products ready to sell!"
              img="web.jpeg"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ServiceCard
              title="Content Writing"
              subtitle="Want to have alluring content to retain your readers hooked on your website? We compose every piece to the degree of perfection!"
              img="writing.jpeg"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ServiceCard
              title="Media Production "
              subtitle="Become a Certified Security Specialist. Cut down anything you need."
              img="media.jpeg"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ServiceCard
              title="Graphics Designing"
              subtitle="Other designers whining at your every tweak of aim? With us, it will be your preference to make at every point."
              img="photo.jpeg"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ServiceCard
              title="SEO"
              subtitle="With our keywords and exploration, you can get your website in the peak findings of any search engine you like."
              img="seo.jpeg"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ServiceCard
              title="Digital Marketing"
              subtitle="SMM can promote development, insight & attention. Do you want to catch up with targeted audiences & encourage changeovers?"
              img="marketing.jpeg"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ServiceCard
              title="Ethical Hacking"
              subtitle="Want to integrate with images and sounds to make us feel emotionally connected? Control stuff such as camera footage, dialogue, sound effects, graphics, and special effects to produce a final film or video product."
              img="hacking.jpeg"
            />
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
