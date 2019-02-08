import React from 'react'


const UserShow = () => {
  const user = {
    username: 'joshdoya',
    firstName: 'Joshua',
    lastName: 'King',
    gender: 'Male',
    bio: 'Beef doner ham hock, buffalo pork chop corned beef boudin burgdoggen shankle pork belly tri-tip. Jerky strip steak frankfurter pancetta doner, pig t-bone flank.',
    continent: {
      name: 'Europe'
    },
    posts: [{
        text: 'I love this view of the city',
        city: 'Barcelona'
      },{
        text: 'I can\'t wait to get back to this city',
        city: 'Rome'
      },{
        text: 'I have lived here for about a year and I love it',
        city: 'London'
      }
    ]
  }

  return(
    <h1> User Page </h1>
  )
}


export default UserShow
