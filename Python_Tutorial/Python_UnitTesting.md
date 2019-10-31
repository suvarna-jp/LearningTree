# Python Unit Testing

The unittest test framework is python’s xUnit style framework.
It is a standard module that you already have if you’ve got python version 2.1 or greater.

The standard workflow is:
1. You define your own class derived from unittest.TestCase.
2. Then you fill it with functions that start with ‘test_’.
3. You run the tests by placing unittest.main() in your file, usually at the bottom.


### unittest example

math_sample.py :

```
def multiply(a, b):
    """
    >>> multiply(4, 3)
    12
    >>> multiply('a', 3)
    'aaa'
    """
    return a * b

```


test_um_unittest.py :

```
import unittest
from math_sample import multiply
 
class TestMathMultipy(unittest.TestCase):
 
    def setUp(self):
        pass
 
    def test_numbers_3_4(self):
        self.assertEqual( multiply(3,4), 12)
 
    def test_strings_a_3(self):
        self.assertEqual( multiply('a',3), 'aaa')
 
if __name__ == '__main__':
    unittest.main()

```