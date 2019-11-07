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

run test using (if you face Module not found error) :

python -m unittest discover -v <test files path: test\main\python> -v

```
python -m unittest discover -v test\main\python -v
```


## The most commonly used TestCase class methods

The TestCase class provides several assert methods to check for and report failures. The following table lists the most commonly used methods

assertEqual(a, b)

a == b

assertNotEqual(a, b)

a != b

assertTrue(x)

bool(x) is True

assertFalse(x)

bool(x) is False

assertIs(a, b)

a is b

2.7

assertIsNot(a, b)

a is not b

2.7

assertIsNone(x)

x is None

2.7

assertIsNotNone(x)

x is not None

2.7

assertIn(a, b)

a in b

2.7

assertNotIn(a, b)

a not in b

2.7

assertIsInstance(a, b)

isinstance(a, b)

2.7

assertNotIsInstance(a, b)

not isinstance(a, b)

2.7

### Sources : 

https://docs.python.org/2/library/unittest.html#classes-and-functions

https://docs.python.org/2/library/unittest.html#organizing-test-code

https://cgoldberg.github.io/python-unittest-tutorial/

