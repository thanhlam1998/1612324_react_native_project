import React from 'react';
export const paths = [
    {
        id: 1,
        imageUrl: "https://pluralsight2.imgix.net/paths/images/angular-denver-2019-639c79599c.png",
        name: "Angular Denver 2019",
        description: "Angular Denver is the coolest Angular conference east of the Continental Divide! Angular developers come from all over to spend two days learning, connecting, and having fun. With around 50 different topics, including authentication, facades, observables, accessibility, and inclusivity in development, there is something for everyone to level-up their developing skills.",
        courses: [1,2,3,4]
    },
    {
        id: 2,
        imageUrl: "https://pluralsight2.imgix.net/paths/images/big-data-london-e90c24577d.png",
        name: "Big Data LDN 2019",
        description: "Big Data LDN (London) is a free to attend conference and exhibition, hosting leading data and analytics experts who are ready to equip you with the tools you need to deliver your most effective data-driven strategy. Discuss your business requirements with 130 leading technology vendors and consultants, hear from 150 expert speakers in 9 technical and business-led conference theaters, and network with thousands of fellow data experts.",
        courses: [8, 2, 3 , 4, 5, 7]
    },
    {
        id: 3,
        imageUrl: "https://pluralsight.imgix.net/author/lg/45977ff7-3054-4951-9dbe-467659a4d685.png",
        name: "BSides Huntsville 2020",
        description:"BSides Huntsville is the conference for those that work (or would like to work) in the trenches of cybersecurity. This is the opportunity for you to engage in fierce discussions about the next big ideas or the worst product you've ever seen in a friendly and informal setting.",
        courses: [1,2,3,4,10,12,13]
    },
    {
        id: 4,
        imageUrl: "https://pluralsight2.imgix.net/paths/images/bsides-jacksonville-9ef9a62175.png",
        name: "BSides Jacksonville 2019",
        description: "Security BSides Jax is an Information Security conference hosted in Jacksonville, FL each fall intended to provide low-cost, quality information to the InfoSec community.",
        courses: [6, 7, 8, 9, 10]
    },
    {
        id: 5,
        imageUrl: "https://pluralsight2.imgix.net/paths/images/fundamentals-of-it-operations-95797723fe.png",
        name: "Fundamentals of IT Operations",
        description: "This collection of courses provides newcomers with the first step they need to start a career in IT. After completing this path, learners should be prepared to begin an entry-level IT job, such as Help Desk Technician or Desktop Support Technician, that provides additional hands-on experience. With some experience, learners will be ready to move into more formal certification programs, such as Microsoft's MCSA collection of certification titles.\n\nThe target audience for this path is anyone who is interested in starting an entry-level job in IT. This career track is also suitable for those switching into the IT industry, and who are focused on the operations side of IT, rather than the software development side.",
        courses: [1,2,3,4, 10]
    },
    {
        id: 6,
        imageUrl: "https://pluralsight2.imgix.net/paths/images/aws-certified-devops-engineer-25d912e3da.png",
        name: "AWS Operations",
        description:"This path is a deep dive into different deployments on AWS and how to carry them out. You’ll learn about deployment applications and infrastructure. You’ll learn how to monitor and automate your deployments, and you’ll also learn how to use a technique called Blue - Green Deployment which is running two identical production environments.",
        courses: [1,2,3,4]
    },
    {
        id: 7,
        imageUrl: "https://pluralsight2.imgix.net/paths/images/group-policy-administration-ee0dacafe8.png",
        name: "Microsoft Azure Stack Planning and Operations",
        description: "Microsoft Azure Stack is an extension of Microsoft Azure Cloud Platform services to your on-premises implementations. This path will teach you the basics of planning for, setting up, and managing the operations of this hybrid integration.",
        courses: [1,2,3,4]
    },
    {   
        id: 8,
        imageUrl: "https://pluralsight2.imgix.net/paths/images/group-policy-administration-ee0dacafe8.png",
        name: "Microsoft ignite 2019: managing Cloud Operation",
        description: "There is more to managing and maintaining workloads in the cloud than deployment. Tailwind Trader's VM deployment has, up until this point, been on an ad hoc basis. Tailwind Traders recognizes that VMs that host IaaS workloads need to be maintained and kept in an orderly state. This includes ensuring that VMs have the most recent updates installed, VMs are backed up, and that application deployment to the VMs are tracked. Once the VMs are brought into a state of compliant order, guardrails need to be placed on the subscription to ensure that future VM deployments meet policy requirements and that costs don’t spiral out of control because someone accidentally deployed a resource intensive VM SKU. This path has advanced (level 300) content including the following technologies: Azure Policy, Azure Blueprints, Role Based Access Control, Subscription Management Virtual Machines, Virtual Machine Extensions, Configuration Management, Inventory and Change Tracking, Virtual Machine / Backup and Recovery, and Azure Active Directory.",
        courses: [1,2,3,4]
    },
    {
        id: 9,
        imageUrl: "https://pluralsight2.imgix.net/paths/images/scrum-dd0fe75978.png",
        name: "Introduction to Professional Scrum",
        description: "This skill path is based on the Professional Scrum Foundations Training learning objectives that were created and published by Scrum.org, and this skill provides the foundational knowledge needed to work with Scrum in a highly practical way.\n\nThis skill introduces the following topics within Scrum: Agility, Scrum, Empiricism, Scrum Values, Roles, Self-Organizing Teams, Events, Artifacts, Definition of \“Done\”, Product Backlog Management, Release Management and Practices, Scrum Anti-Patterns, Introduction to Scaling.",
        courses: [1,2,3,4]
    },
    {
        id: 10,
        imageUrl: "https://pluralsight2.imgix.net/paths/images/pmp-8e7e5cdb55.png",
        name: "Project Management Professional",
        description: "This path is based on the PMBOK® Guide - Sixth Edition. In this series, you’ll gain a comprehensive understanding of project management fundamentals, with a focus on the PMBOK® Guide’s ten key project management knowledge areas. These courses will help you prepare for the latest edition of the Project Management Professional (PMP)® exam. This path also fully covers the Certified Associate in Project Management (CAPM)® exam objectives.",
        courses: [1,2,3,4]
    },
    {
        id: 11,
        imageUrl: "https://pluralsight2.imgix.net/paths/images/pmp-8e7e5cdb55.png",
        name: "Program Management Professional",
        description: "As technology initiatives continue to grow larger and more complex than a single project can deliver, organizations now need the ability to manage a tightly coupled set of projects that work in concert to deliver the large-scale outcomes that organizations need. Throughout this path, you will learn how to identify the outcomes that will yield the most value to your organization and how to properly plan the program that is most likely to deliver those outcomes. You will also learn how to ensure your program’s successful execution, how to help your entire program team work together successfully, as well as how to respond when things don’t go as planned. Finally, you will learn how to ensure that the outcomes and benefits that your program delivers for your organization continue long after delivery. This learning path will help prepare you for the PMI® Program Management Professional (PgMP)® certification.",
        courses: [1,2,3,4]
    },
    {
        id: 12,
        imageUrl: "https://pluralsight2.imgix.net/paths/images/comptia-security-plus-5d8ab8e621.png",
        name: "CCSP (Certified Cloud Security Professional)",
        description: "This series provides the foundational knowledge needed for the technical skills and knowledge to design, manage and secure data, applications and infrastructure in the cloud using best practices, policies and procedures. This series can be used to prepare for the (ISC)²® CCSP® (Certified Cloud Security Professional) examination, with coverage of the CSSP certification exam domain refresh which took effect on August 1, 2019. Further details of the domain refresh and exam weighting by domain can be found here: https://www.isc2.org/Certifications/CCSP/Domain-Refresh-FAQ",
        courses: [1,2,3,4]
    },
]
export const pathContext = React.createContext();