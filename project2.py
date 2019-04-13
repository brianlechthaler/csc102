#!/usr/bin/env python
# coding: utf-8

# ## SuperUltraHap(PY)Craps
# *Brian Lechthaler*
# *4-12-19*
# *CSC102 @ UAT*

# In[1]:


#Import numpy for mathematic functions
# (such as random number generation for dice rolls)
#NB: Install numpy with pip if you haven't already
import numpy as np


# In[2]:


#This confirms the user wants to play the game.
print("SuperUltraHap(PY)Craps\nBrian Lechthaler\nCSC102\n\n")
splash = input("[C] to continue.")
if(splash == "C"):
    print("Let's get it!")
else:
    print("Hit [CTRL] + [C] (^C) to quit.")


# In[ ]:


while True:
    #Roll two dice by generating a number between 1 and 6
    print("Rolling two dice...")
    diceX = np.random.randint(1,6)
    diceY = np.random.randint(1,6)
    #Print the values of those dies
    print("First die:\n", diceX)
    print("Second die:\n", diceY)
    #Do some simple math as per the rules of the game
    sumX = np.add(diceX, diceY)
    diffX = np.subtract(diceX, diceY)
    prodX = np.multiply(diceX, diceY)
    divX = np.divide(diceX, diceY)
    #Print out results
    print("First + Second:\n", sumX)
    print("First - Second:\n", diffX)
    print("First * Second:\n", prodX)
    print("First / Second:\n", divX)
    #Prompt if the user wants to keep rolling. Variable does nothing.
    keepGoing = input("[ANY_KEY] to continue.\n^C to quit.")
    #Let user know they won if winning conditions are met
    if(sumX == 7 or sumX == 11):
        print("Oh, CRAPS!\nGood game.")

