import React from 'react'
import type { NextPage } from 'next'

import aboutList from 'public/data/about.json'

import { Layout, Skill } from 'components'

const Home: NextPage = () => (
  <div id="wrap">
    <Layout>
      <section className="section">
        <h1 className="srOnly">About</h1>
        <p>
          Hi. I’m Woohyeon, a frontend developer based in Seoul, Korea and yes,
          I love designing and building digital products. For the past 3+ years,
          I've done working in startups and collaborated with talented people to
          create digital products for both business and consumer use.
          <br />
          I’m a fast learner, prefer to keep learning and continue challenging
          myself. I like to develop expertise in several areas throughout my
          life and career. I currently have a full-time commitment to
          Planetarium as a frontend developer of GameFi team. Outside of my
          commitments I make online programming courses and run a youtube
          channel called Kimbug. Feel free to get in touch by any means of
          communication.
        </p>

        <ul>
          {Object.entries(aboutList).map(([skill, details]) => (
            <Skill key={`about-${skill}`} skill={skill} details={details} />
          ))}
        </ul>
      </section>
    </Layout>
  </div>
)

export default Home
