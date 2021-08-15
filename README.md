# Jonas-Js-2

## sec 18 L. 282 Loading a Recipe from API

open new project in directory

    npm init -y
    remove main property from package.json(to avoid later error)

setup scripts

    "start": "parcel index.html"
    "build": "parcel build index.html"

install parcel as dev dependancy

    npm i parcel@next -D
    npm i
    npm start

project api documentation

    https://forkify-api.herokuapp.com/v2

        get recipe url:
            https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886
        we use this to make a fetch in controller.js

        try with a different id
            5ed6604691c37cdc054bd0c0

adding parcel files to .getignore along with dist files will prevent filesize github issues later.

## 283. Rendering the Recipe

?????? ERROR: ET http://forkify-api.herokuapp.com/images/PizzaMonkeyBread67f8.jpg net::ERR_BLOCKED_BY_RESPONSE.NotSameOriginAfterDefaultedToSameOriginByCoep

\***\*\*\*\*** : <img src="${recipeData.imageURL}" alt="${recipeData.title}" class="recipe__img" crossorigin/> instead of: <img src="${recipeData.imageURL}" alt="${recipeData.title}" class="recipe__img"/>

\***\*\*\*\*** issues importing icons

        // import icons from '../img/icons.svg'; // Parcel 1
        // import icons from 'url:../../img/icons.svg'; // Parcel 2
        import icons from 'url:../img/icons.svg'; // working version

install polyfillers

        polyfilling async await
            npm i regenerator-runtime

        polyfiling everything else
            npm i core-js

        import at top of controller file

## 284. Listening For load and hashchange Events

some stuff kind of works

## 285 the MVC Architecture

    MODEL:
        buisness logic
        state
        http library

    CONTROLLER:
        application logic
        bridge between model and views(which don't know about one another)
        handles UI events and dispatches tasks to model and view

    VIEW:
        presentation logic

## 286 Refactoring for MVC

create files

        in src/js touch model.js
        in js mkdir views
            in it touch recipeVies.js

        import model into controllers:
            import * as model from '../model.js';

        ???????? nothing rendering right
        ****** accidentally passed date instead of data into render fn in recipeViews

## 287. Helpers and Configuration

        in js dir touch config.js
            for all the constants and variables used throuought the files

we cut the url out of models and give assign it to a variable in the config file that we export, and then import the variable in modules to be used in where the url was

        in views touch helpers.js
            actually move helpers.js to js dir

## 288. Event Handlers in MVC: Publisher-Subscriber Pattern

## 289. Implementing Error and Success Messages

## 290. Implementing Search Results - pt 1

            ????????????? stuck with no recipes rendering
            ************ the problem was the auto-corrected line 14 on helpers.js was:

    const res = await Promise.race(([fetchPro, timeout(TIMEOUT_SEC))]);

            but should have been :

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);

in views touch searchView.js

            ??????? search wasent rendering anything to console
            ********  typo in search view :
                #parent
            should have been
                #parentEl

## 291. Implementing Search Results - pt 2

            in views dir touch resultsView.js View.js

        *******i was getting an error because i added extends to resultsView without addidng View after it ( need to brush up on my classes )

## 292. Implementing Pagination - Part 1

            the easy part

## 293. Implementing Pagination - Part 2

            in views touch paginationView.js

            ?????stuck at 27:34
            **** mispelled handler in props of addHandlerClick in paginationViews
            ???? now its logging 'Pag Controller' instead of the number
            **** wrong console.log in the controller

            ******     this._clear;
                    should have been this:
                            this._clear();
                                in View.js

            ????? undefined shows up where a pagination button should be when there is only one page.

            he reccomends analizing the code at this point before moving on

## 294. Project Planning II

## 295. Updating Recipe Servings

## 296. Developing a DOM Updating Algorithm

we need to develope an alogrythem that only renders the dom in places that have changed

## 297. Implementing Bookmarks - Part 1

## 298. Implementing Bookmarks - Part 2

we want the recipe to show up in the bookmarked panel

            in views touch bookmarksView.js

            in views touch previewView.js

            recap at 14:01

            ?????? looks like data is undefined in previewView.js
            ****  in the previewView template I had :
                data
            instead of :
                _data
                    -thus the data undefined message I was getting
