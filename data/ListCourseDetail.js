import React from 'react'
export const courses = [
  {
    id: 1,
    title: 'Joint-based Facial Rigging in Maya',
    imageUrl: "https://i.ytimg.com/vi/35227V8rxmE/maxresdefault.jpg",
    author: 'Tim Caliaway',
    level: 'Advanced',
    release: 'May 20, 2013',
    duration: '3.4h',
    rate: 5,
    summary: 'In this maya tutorial, we will learn about...',
    contents: [
      {
        topic: 1,
        title: 'Introduction and Project Overview',
        duration: '0:54',
        lessons: [
          {
            title: 'Introduction and project Overviews',
            video: '',
            duration: '0:54',
          },
        ],
      },
      {
        topic: 2,
        title: 'Joint-Based Facial Rigging in Maya',
        duration: '3:25:20',
        lessons: [
          {
            title: 'Creating the Nurbs Curves',
            video: '',
            duration: '11:25',
          },
          {
            title: 'Creating Locators and Learning Offset Joints',
            video: '',
            duration: '12:53',
          },
          {
            title: 'Continue to Learn About Offset Joints',
            video: '',
            duration: '10:52',
          },
        ],
      },
    ],
    transcript: 'This is a transcript for this course',
  },
  {
    id: 2,
    title: 'Introduction to Channels in NUKE',
    imageUrl: "https://i.ytimg.com/vi/IpayuEobyNI/maxresdefault.jpg",
    author: 'Chris Glick',
    level: 'Beginner',
    release: 'Oct 01, 2009',
    duration: '0.9h',
    rate: 0,
    summary:
      "In this series of lessons, we'll learn how to use the Channel system of NUKE. Channels are how NUKE stores image information.",
    contents: [
      {
        topic: 1,
        title: 'Introduction and Project Overview',
        duration: '1:20',
        lessons: [
          {
            title: 'Introduction and project Overviews',
            video: '',
            duration: '1:20',
          },
        ],
      },
      {
        topic: 2,
        title: 'Introduction to Channels in NUKE',
        duration: '55:04',
        lessons: [
          {
            title: 'Overview of how the RRG Channels Work',
            video: '',
            duration: '6:49',
          },
          {
            title: 'Alpha Channel and Coppying Channels',
            video: '',
            duration: '9:11',
          },
          {
            title: 'Adding and Viewing New Channels',
            video: '',
            duration: '7:14',
          },
        ],
      },
    ],
  },
];

export const CoursesContext = React.createContext(courses);
