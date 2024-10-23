'use client'

import Layout from "../components/AllPageLayout/Layout"
import './tb.scss'
import img1 from '../../public/blog-images/2024/IMG-20240513-WA0136.jpg'
import Image from "next/image"
import Link from 'next/link';

const page = () => {
  return (
    <Layout heading="Travel Blogs" subheading="Tales from My Journeys">
      <div>
        <Singlecard/>
      </div>
    </Layout>
  )
}


const Singlecard = () => {
  return (
    <div className="big_card_main_container">
      <div className="left">
        <h2 className="heading">
          A Lifetime Adventure
        </h2>
        <p className="desc">
          A scenic motorcycle trip to Bettada Rangaswami Betta, filled with off-road challenges, breathtaking views, and unexpected adventures, from riding through lush landscapes to braving a sudden downpour in the forest.
        </p>
        <Link className="link" href='/travel-blogs/a-lifetime-adventure'>See More -{`>`}</Link>
      </div>
      <div className="right">
        <Link
          href='/travel-blogs/a-lifetime-adventure'
        >
          <Image
            src={img1}
            style={{width : '100%', height : 'auto'}}
            width={'1000'}
            height={'700'}
            alt="Morning"
          />
        </Link>
      </div>
    </div>
  )
}

export default page