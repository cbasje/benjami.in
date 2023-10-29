---
title: "Kompano"
description: "Redesigning the Kompano control app"
excerpt: "For the course 'Project Usability and User eXperience Assessment in Design' (UXAD), a redesign was made for the Kompano app by Priva.
This Kompano app is used to control the Kompano robot. The robot cuts the leaves of tomato plants in greenhouses. Operators use the Kompano robot app to start the robot and fix any problems that might occur. An operator controls multiple Kompanos with the app daily."
headerImage:
    url: "/images/kompano.webp"
    caption: "The operator can use the app in the greenhouse while keeping a safe distance"
    alt: "A hand holding a phone with the Kompano control app. The background shows a greenhouse with a Kompano robot in it."
hue: 0
categories:
    - "en/prototyping"
    - "en/ux"
company:
    title: "Priva"
    url: "https://www.priva.com/"
publishedAt: 2022-06-30
seo:
    metaTitle: "Kompano"
    isArticle: true
---

The project was divided into two main phases. The first phase was all about looking at the current product and context. The app made by Priva was primarily for testing purposes and hadn't evolved over time with the increasing amount of functions added.

![A hand holding a phone with the old Kompano control app. The background shows a greenhouse with a Kompano robot in it.](/images/kompano-1.png)
_The old app did not show the most important information well enough and the controls were confusing._

The main user of the Kompano app was determined to be the existing team supervisors in greenhouses. They have many tasks such as coordinating their team, deleafing, pruning. To keep the greenhouse efficient, it’s important that the app works efficiently for them as well.

![The attributes of the main user of the Kompano control app with an image of a typical greenhouse worker in the background. It tells you the main user is 20-25 years old, has Dutch or Polish nationality, has a high school degree and is responsible and experienced.](/images/kompano-2.png)
_The attributes of the main user of the Kompano control app._

The four main use cases of the app are:

-   Connecting to a Kompano robot and starting deleafing
-   Reporting an issue
-   Doing maintenance
-   Charging the Kompano robot

To assess the main problem points of the current app, it was analysed in terms of interaction and build-up. Then, these four main use cases were tested with potential users in greenhouses on their workload and general usability. Based on these findings of this research, a problem statement and design goal were formed.

## Problem statement

> “The complicated task workflow of the app makes participants easily get lost in the app. To achieve tasks, many steps need to be taken and it is not clear to participants where they are in the workflow. Besides that, a lack of feedback after steps in multiple situations is confusing and frustrating. Also, bad visualisations of buttons and icons make it unclear to see the difference. Also, the app is not made to control multiple Kompanos during the day. All of this causes a high workload for the user and would make it difficult for them to control multiple Kompanos and carry out other duties. This leads to inefficiency and lower profit margins.”

## Design goal

> “By decreasing the workload, we want to create a more efficient app. We want our design to have a straightforward and consistent workflow. The workflow should contain a minimal amount of steps for each task to make it easy to work with the app. participants should feel guided by the app by getting clear feedback for their actions. Also, visualisations should be informative and clear. The operator should feel in control when processing information about the Kompano robot and the app should give an understandable overview of all Kompanos that an operator has to work with.”

---

## Redesign

The next step was to create a concept redesign. The original app had a complicated workflow where participants got lost easily. Therefore, a change in the page structure of the app was needed. By changing where things are in the app, the minimum amount of steps to execute tasks can be reduced. Additionally, colours, icons, labels and data visualisation was considered since it plays an important role to create visualisations that are informative, clear and make the user feel in control.

One way to give users more control was by creating a clear colour system for notifications to instantly recognise the current status of a Kompano. Also, one insight from the research was that handling errors that you cannot solve on your own took a lot of time and made the operators and greenhouse company out of control. This was solved by creating a chat bot with Priva Support to quickly receive feedback and to be able to see history of previous conversations.

This redesign was again tested with potential users in greenhouses on the same main use cases. In general, the conclusion can be drawn that the redesign is an improvement of the original app. The workload for participants decreased and they seemed more confident because of better feedback given by the app. Participants understood tasks easily and didn’t bump into severe problems.

---

## My role(s)

From the start of the course, the team was focused on task division to work most efficiently. Each team member would receive their own tasks and there was a team meeting every week to discuss their work and work together for some parts. For example, each team member made their own concept of the redesign to compare and combine features/new ideas into the final redesign concept. Features from my concept are the colour system for notifications and the chat bot to handle errors with Priva Support.

During the user tests, my main task was to handle documentation of audio and video recording and provide transcripts afterwards since part of the team did not speak English. Additionally, I performed one user test myself using our written script due to illness of the usual moderator.

My main task however, was to create a prototype to use in the user testing sessions. The designs were first made in Figma where all team members could collaborate and we then decided to import the prototype into Framer to achieve a more realistic version of the prototype since Framer allows you to add normal React code to prototypes but keeps the visual interface similar to Figma. This enabled, for example, the ability to update the state of a Kompano which would then be updated everywhere. Also, it could be connected to a laptop on the side where I could set certain values for the user tests for the participants to work with, such as a particular error notification or low battery statuses. The participant could also chat with the laptop in real time and receive messages from the team.

[View the prototype](https://framer.com/embed/Kompano-Final-Redesign--8yThemIu0F84D6qE7DBa/EtmYk_avt?highlights=0)

<!-- FIXME: Prototype Framer https://framer.com/embed/Kompano-Final-Redesign--8yThemIu0F84D6qE7DBa/EtmYk_avt?highlights=0 -->
