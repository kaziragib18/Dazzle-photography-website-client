import React from 'react';
import { Container, Grid } from '@mui/material';
import blog1 from '../../images/Blog/b1.jpg'
import blog2 from '../../images/Blog/b2.jpg'
import blog3 from '../../images/Blog/b3.jpg'
import './Blog.css';

const Blog = () => {
  return (
    <div style={{ backgroundColor: "black" }} className='news-article'>
      <Container>
        <div className='news-article-titles'>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <div className="ourworks-title ba">
                <h3 className="google-font text-warning">Our Blogs</h3>
                <h1 className="text-size fw-bold">BLOGS & ARTICLE</h1>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className='title-btn'>
                <button disabled>All Blogs</button>
              </div>
            </Grid>
          </Grid>
        </div>

        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <div className='left-article-box b'>
              <div className='left-article-box-img image-box'>
                <img className='gallery' src={blog1} alt="" />
              </div>
              <div className='left-article-box-text pt-1'>
                <h1>10 Tips For Planning A Wedding On A Budget</h1> <br />
                <small>Dec 22, 2021</small>
                <p>Plenty of people dream of having the most beautiful, elaborate wedding their budget will allow. But what if you’re trying to plan your wedding on a budget? Don’t worry—you can still make your wedding day truly special without spending thousands of dollars or stressing yourself out too much about planning every last detail! Here are ten tips for planning your wedding on a budget that will save you time and money without sacrificing quality or making it seem like you didn’t put any effort into it at all. The best way to stick to your budget is by staying organized. You can do that by building a spreadsheet or...</p>
                <button disabled>read more</button>
              </div>

            </div>
          </Grid>

          <Grid item xs={12} md={5}>
            <div className='left-article-box a'>
              <div className='left-article-box-img a image-box'>
                <img className='gallery' src={blog2} alt="" />
              </div>
              <div className='left-article-box-text a pt-2'>
                <h1>How To Make Your Photographer Feel Appreciated</h1> <br />
                <small>Nov 12, 2021</small>
                <p>Before, during, and after your wedding, your photographer will do everything in their power to ensure that you feel comfortable and confident...</p>
                <button disabled>read more</button>
              </div>

            </div>
            <div className='left-article-box'>
              <div className='left-article-box-img a image-box'>
                <img className='gallery' src={blog3} alt="" />
              </div>
              <div className='left-article-box-text a pt-2'>
                <h1>Maximizing The Value Of Your Photographer</h1> <br />
                <small>Oct 12, 2021</small>
                <p>As a veteran wedding photographer, one of my main jobs is to tell your story through images.  Usually, this involves a day-of flow that includes...</p>
                <button disabled>read more</button>
              </div>

            </div>
          </Grid>

        </Grid>
      </Container>
    </div>
  );
};

export default Blog;