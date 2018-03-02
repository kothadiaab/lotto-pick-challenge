# Problem Statement

Winning Ticket!

Your favorite uncle, Morty, is crazy about the lottery and even crazier about how he picks his “lucky” numbers. And even though his “never fail” strategy has yet to succeed, Uncle Morty doesn't let that get him down.

Every week he searches through the Sunday newspaper to find a string of digits that might be potential lottery picks. But this week the newspaper has moved to a new electronic format, and instead of a comfortable pile of papers, Uncle Morty receives a text file with the stories.

Help your Uncle find his lotto picks. Given a large series of number strings, return each that might be suitable for a lottery ticket pick. Note that a valid lottery ticket must have 7 unique numbers between 1 and 59, digits must be used in order, and every digit must be used exactly once.

For example, given the following strings:

[ "569815571556", “4938532894754”, “1234567”, “472844278465445”]

Your function should return:

4938532894754 -> 49 38 53 28 9 47 54
1234567 -> 1 2 3 4 5 6 7

## About UberConference and Dialpad Application

UberConference: Neat, clean and subtle conference interface. Highlight was "hold" music. Best teleconference music I have heard EVER! It’s hilarious.

Dialpad: Wonderfull app. Clean and user friendly. Easy to navigate and understand. faced difficulty in changing the assigned phone. Accidentally entered the wrong area code and it generated the number quickly. Would like to know if there is any way to update it.

## Methodology and efficiency of solution

Accept the series of input numbers and iterate through it to find the valid lotto picks. Traverse each character of the individual string and push it to the resulting array.

Update inputSeries to test different strings

Used iterative functions to make it efficient and use of Set allows iteration through elements in insertion order. It also gives constant time look up for existence of element which is very useful.

### Prerequisites

Install Node https://nodejs.org/en/download/

```
node -v
```

### Run Application

```
node find-lotto-picks.js
```
