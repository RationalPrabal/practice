import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { Box } from '@chakra-ui/react'
import Profile from '../components/Profile'
import ProjectCard from '../components/ProjectCard'
import React from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home({data1}) {
 
  return (
    <Box display={"flex"}>
    <Profile data={data1}/>
 
      
    </Box>
  )
}

export async function getStaticProps(){
  let response1=await axios.get("https://api.github.com/users/RationalPrabal")
 
  return {
      props:{
        data1: response1.data,
      
      }
    }
}




