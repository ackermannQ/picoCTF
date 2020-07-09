Let's go to the following link :

https://2019shell1.picoctf.com/problem/28717/

It's a very simple website, with two tabs. The first one is kindda useless while the second give information about the languages used for the website.
HTML
CSS
JS (JavaScript)

Before jumping into more evolved vulnerabilities as cross-site scripting or CSRF sometimes related to JS, we can't miss the hudge bannier asking for inspection.

Right Click > Inspector.
In the source we get :
<-- Html is neat. Anyways have 1/3 of the flag: picoCTF{tru3_d3 -->

Because it's written as a HTML comment we can't see that directly on the page, but it's actually visible in the source and it's one third of our flag

You can get from the source two other scripts designed by this developper : mycss.css and myjs.js.
In the css we get : /* You need CSS to make pretty pages. Here's part 2/3 of the flag: t3ct1ve_0r_ju5t */
In the JS : /* Javascript sure is neat. Anyways part 3/3 of the flag: _lucky?2717d7be} */


picoCTF{tru3_d3t3ct1ve_0r_ju5t_lucky?2717d7be}