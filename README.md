# DemoVXR
Q1. API endpoints thought exercise
The following image is from Facebook. It’s the notifications dropdown in the top right corner. This feature updates users on the activity of posts they’ve made, activities of friends, likes for their photos, friends requests, & etc. Design the response.json object you’d like to receive from the backend API in order to build this functionality. Please be as thorough as possible.

HINT:
What do you believe we want to happen when a user clicks on the name Thomas’ post which he shared(from Enzo Clapper)?


data = {
    idPost, // id for posting
    idAction, // id of action of user  (share, post, ...)
    status, // status via post
    idPoster, // if action is share, idPoster will show posting of another -> get info posting 
}

when user click on notification of current user
