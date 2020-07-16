# The numbers

## Category

Cryptography

## Question

The numbers (link)... what do they mean?


## Hint

The flag is in the format PICOCTF{}

## Solution
Well, with the { } it seems that the letters have been replaced with their position in the alphabet

alphabet = "abcdefghijklmnopqrstuvwxyz"
letters = [16, 9, 3, 15, 3, 20, 6, 20, 8, 5, 14, 21, 13, 2, 5, 18, 19, 13, 1, 19, 15, 14]

for k in letters:
	print(alphabet[k-1])


Giving the folloving flag :

picoctfthenumbersmason


--> picoCTF{thenumbersmason}

But it doesn't work. Going to the hint, we have PICOCTF written, meaning that everything is uppercase :
PICOCTF{THENUMBERSMASON}
