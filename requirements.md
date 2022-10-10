# Super Vacation Planner

## What is the vision of this product?

 - We are looking to replace the need for multiple websites for trip planning. Become the one-stop-shop for all vacation logistics. All while saving the user money by finding them cheap flights. Saving money and time!

## What pain point does this project solve?

- I have to go to multiple website all to plan out a single trip. This is antithetical to relaxing, which is what I hope to get out of a vacation in the first place. You can also be assured that our website will present you with the cheapest flgiht avaiable for this trip.

## Why should we care about your product?

- Vacations are important, everyone needs a break, including YOU. Your vacation should start as soon as you need it to, even during the planning phase. And everyone likes to save money!

## Scope:

### IN:

- Provide user with cheap flights based on an input location and month
- Display a map of searched location
- Save user search data to be accessed at a later time

### OUT:

- This app will not ever be a mobile application, web only
- Flight plans only, no other transportation

## MVP

Website made react bootstrap and tailwind that displays a map based on user search and finds flight info based on a range of dates. Presents user with cheapest option. Ability to save trip info.

## Stretch Goals

Display extra map data- events, movies, businesses
Cost calc & trip cost compare
Random trip, by dates only
Random trip, Budget
Number of guests?
Ads?
Make it pretty.

## Functionality Req

- A user can log in to their account to ssave searches
- A user can search a location and date to recieve info about the location and flights to that location
- A user can save these search results in a database and return to them later

## Data Flow

User enters search queries -> origin, destination, month -> server uses this data to query apis -> server sends this data back to frontend to be displayed -> user saves this data on their profile if they want to

## Nonfuntional Requirements

- Website is intuitive and easy to use. Simple and obivous search prompts, one button results saving.
- User logs in using Auth0 so they can save their search results.
