Debounce is used when we want to call a function only when there is a specific amount of delay between two events. This is helpful as it stops unnecessary call to heavy functions, creating a better user experience.

A debounce function may starve i.e. the function may never be called if two events don't adhere to that delay.

Debounce is generally used in the search bar. With each keyStroke an event is fired and thus the function is called. This can be lead to a bad user experience if the function make API calls or does expensive calculations.
