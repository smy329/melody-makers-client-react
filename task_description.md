## :writing_hand: **Main Requirements**

4. **Registration & Login System:**

   **Login Page:**
   When a user clicks on the login button, they will be redirected to the login page having the following:

   - Email
   - Password **(This field can hide/unhide the password by clicking on an icon)**
   - A link that will redirect to the registration page
   - Keep at least one social login

   <br/>

   **Registration Page:**
   The Registration page will have the Email/Password form having the following fields:

   - Name
   - Email
   - Password
   - Confirm Password
   - Photo URL
   - (optional) Gender
   - (optional) Phone Number
   - (optional) Address

   <br/>

5. **Homepage:**

   - **Extra Section -** Add one relevant sections. Make it attractive :heart_eyes:. Try to use animation effects.

6. **Instructors Page:**
   Display all the instructors. Each Instructor will be:

   - (optional) `See Classes` button to show classes by this Instructor. This will take you to a new link

7. **Payment: (Student Dashboard)**

   - Create a payment history page for students. It will show the payment made by that student. Make sure to sort the payment history descending. The newest payment will be at the top

<br/>

10. **Instructor Dashboard:**
    <br/>
    **_It will be private & only an instructor can access this route._**

    - **Feedback:**
      - There will be no feedback if the Class is in pending or approved status.
      - If the Class is in the denied state by the admin, at that time, an admin can write feedback

11. Use **relevant icons** in your **dashboard menus**, animations on your website.\. You have to use **anyone** of the animation libraries below:
    - [Framer-motion](https://www.framer.com/motion/)
    - [React-awesome-reveal](https://react-awesome-reveal.morello.dev/)
    - [React-spring](https://www.react-spring.dev/)
    - [React-anime](https://github.com/juliangarnier/anime)

## :writing_hand: **Bonus Task:**

2. Create a readme for the client-side and write about your project.

   - Website name or logo or both
   - Minimum 5 points of your website features
   - Used packages/ technology name
   - Live site link

3. Implementing a dark/light theme toggle for the home page. It's optional to implement the theme toggle for the entire website\.

4. Make the home page responsive. If possible, Make your entire website responsive\. (It is ok if the table is not responsive\.)

## :writing_hand: **Optional Task:**

1. (Highly Recommended) Add extra features you have learned so far, or you can explore new things. This will help you in the future to differentiate your project from others.

2. You can explore the below packages & try to make your website more attractive:

   - [React-simple-typewriter](https://www.npmjs.com/package/react-simple-typewriter)
   - [React-joyride](https://www.npmjs.com/package/react-joyride)
   - [React-card-flip](https://www.npmjs.com/package/react-card-flip)
   - [React-image-zoom](https://www.npmjs.com/package/react-image-zoom)

3. Explore [Tanstack query mutations](https://tanstack.com/query/latest/docs/react/guides/mutations)

4. If you want, you can add an intro video button in each Class information; clicking on this button will open a modal that will play the video\.

5. Add a button on the Instructor called see classes. After clicking on an instructor's **See Classes** button, a student can see all the Classes taken by that Instructor. Only classes **approved by the admin**\ will be displayed here. If any classes of the Instructor are in the **pending/ denied** status in the Instructor's dashboard, then they will not be shown here\. **See point 12(3)**\.

6. **Following Feature** A student will see all instructors he/she is following after clicking the **Follow button** on the **Instructors page**. To implement this feature, you must add a follow button on the instructors page. Also, after clicking on the **Follow button**, show an **Unfollow button**.On clicking the **Unfollow button**, a student can unfollow an instructor, and the Instructor will disappear from the following page. Make sure to make the **Follow button active** on the **Instructors Page** again.

7. (optional) **Profile page will be private:**

   On clicking the user profile picture, the user will be redirected to the Profile page, where they will see all the information:

   - Name
   - Image
   - Email
   - Phone Number
   - Address
   - Role **(Instructor/ Student/Admin)**
   - Gender
   - Update button

     **Update Action:** a user can update their information **except role and email**on clicking the Update button.

8. - (optional) **Updated button Action:** An instructor can update a Class information. You can show the form either in a modal or in another route. The **update button** will be **disabled** if the status is approved.
     <br/>

9. - **Manage Students:** On the Manage Classes, there will be a button called show students. Clicking on that link will take an admin to a route where the admin will see students for a particular class. An admin will be able to kick out a student from a class.

<hr/>
<br/>

## :pushpin: **What to submit:**

- Your client-side code GitHub repository
- Your server-side code GitHub repository
- Your live website link
- Admin email and password.
