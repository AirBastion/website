# Product specs

## Things to know

We use Bulma as the css framework.

There are 6 slides + 1 long page. The order is all horizontal pages go first and then we have the long page as the final one.

From now on:

Slide 1 – Presentation component - nicknamed FirstSlide in `./src/components/Ico/FirstSlide`
Slide 2 – Graph component - nicknamed SecondSlide in `./src/components/Ico/SecondSlide`
Slide 3 – Docs component - nicknamed ThirdSlide in `./src/components/Ico/ThirdSlide`
Slide 4 – Circular component - nicknamed FourthSlide in `./src/components/Ico/FourthSlide`
Slide 5 – Timeline component - nicknamed FifthSlide in `./src/components/Ico/FifthSlide`
Slide 6 – Archives component - nicknamed SixthSlide in `./src/components/Ico/SixthSlide`
Slide 7 – Fullpage component - nicknamed SeventhSlide in `./src/components/Ico/SeventhSlide` (this is the long page).

We will be prioritizing speed over optimization and order in this project. The more that gets done the better, we can deal with messiness. If you can make something reusable, do it but if it will take you twice the amount of time that just coding it again, just copy it again.

There is a need to change the background. So every time you come in a different background will get assigned to you at random. There is an initial coding of that feature but it’s not working as of now. Will supply the different backgrounds myself and you can see the ones we have already in `./public/js/backgrounds/`

## Priority order:

1. Carousel (this is expected to be done in max. 1 full working day)
2. Finishing Slide 1-4
3.
4. Main component should be fullscreen with exact size of the screen no matter the resolution. On scroll, the footer should uncover.

For the design of the 7th Slide we will be following this design and then will change to have our logo and other artwork.
https://www.dropbox.com/sh/jt7d3yuiule9y89/AAD3WTWyU0YzwNbnBIIUbtRwa?dl=0

### Component 6

This component is quite an easy one. There is block which occupies 3/4ths of the page. It's located on the left side and contains links to reference or old material.

Each link in this array of links needs to have a calendar date displayed on the right and a calendar icon from font8 or similar positioned on the right.
