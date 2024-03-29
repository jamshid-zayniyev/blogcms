import { Author, Categories, PostWidget, PostDetail, CommentsForm, Comments } from '@/components'
import { getPostDetails } from '@/services'
import React from 'react'

const PostDetails = ({post}) => {
  console.log(post);
  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='col-span-1 lg:col-span-4'>
            <div className='relative lg:sticky top-8'>
              <PostWidget slug={post.slug} categories={post.categories.map(category =>category.slug)}/>
              <Categories/>
            </div>
          </div>
          <div className='col-span-1 lg:col-span-8'>
            <PostDetail post={post}/>
            <Author author={post.author}/>
            <CommentsForm slug={post.slug}/>
            <Comments slug={post.slug}/>
          </div>
        </div>
    </div>
  )
}

export default PostDetails


export async function getStaticProps({params}){
  const data = await getPostDetails(params.slug)

  return {
    props: {
      post: data
    }
  }
}