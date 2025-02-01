import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api1Slice=createApi({
    reducerPath:'api1',
    baseQuery:fetchBaseQuery({baseUrl:'https://fakestoreapi.com'}),
    endpoints:(builder)=>({
        getPosts:builder.query({
            query:()=>'/products'
        }),
        addPost:builder.mutation({
            query:(newPost)=>({
                url:'/posts',
                method:'post',
                body:newPost
            })
        })
    })
})

export const { useGetPostsQuery, useAddPostMutation } = api1Slice;