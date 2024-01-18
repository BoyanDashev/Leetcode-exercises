// Given two strings ransomNote and magazine, return true if 
// ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.


    //i have to compare it so that ransom not will be a the string that doesnt not need to be manipulated, 
    //the other one needs to be compare if part of it can ggo inside.
    
    var canConstruct = function (ransomNote, magazine) {
      for (const char of magazine) {
        ransomNote = ransomNote.replace(char, "");
      }

      if (!ransomNote) return true;
      else return false;
    };
    //magazine.length >= ransomNote.length
    //Hashmap method check if an element is more the one time in the 
 



//  Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:
canConstruct('aaaa')
// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true