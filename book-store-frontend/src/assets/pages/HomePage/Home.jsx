import React from 'react'
import Categories from "../../../components/Categories/Categories"
import Books from "../../../components/Books/Books"
import HeroSlider from "../../../components/slider/heroSlider"
import Authors from '../../../components/Authors/Authors'
import BlogSection from '../../../components/BlogSection/BlogSection'
import NewsLetter from '../../../components/NewsLetter/NewsLetter'
import ScrollReveal from "../../../components/global/ScrollReveal/ScrollReveal"

function Home() {
  return (
    <div>
      <HeroSlider></HeroSlider>

      <ScrollReveal>
        <Categories></Categories>
      </ScrollReveal>

      <ScrollReveal>
        <Books></Books>
      </ScrollReveal>

      <ScrollReveal>
        <Authors />
      </ScrollReveal>

      <ScrollReveal>
        <BlogSection></BlogSection>
      </ScrollReveal>

      <ScrollReveal>
        <NewsLetter></NewsLetter>
      </ScrollReveal>
    </div>
  )
}

export default Home