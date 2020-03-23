# Steps to follow to upload files to GIT_HUB

## Readme file - How to write .md files 
https://github.com/tchapi/markdown-cheatsheet/blob/master/README.md

## To checkout a branch on your name to your local system
git checkout -b <your_name___topic_name = branch_name>

# example:
git checkout -b suvarna_css_advanced

## To check status of the files (whether they have been added to the repository/checked in/committed etc..)
git status

## To add files to the repository
git add <file_name>

# example:
git add index.html

## To commit files at the repository
git commit -m "<comment about what / why you added the file / what changes you made to the file / why you made the changes>"

# example:
git commit -m "Added index.html"


## Command to push the files to GIT
git push origin <branch_name>

# example:
git push origin suvarna_bootstrap


For Flask project,

## Commands to start a Flask project starting from the Virtual environment setup
```Python code
pip install pipenv

mkdir <project_src_dir>
cd <project_src_dir>

(then run... the following..)
pipenv install flask
pipenv install requests
```
## To activate environment
pipenv shell

## To check the Python version
python

## Run the executable
import sys
sys.executable
## The executable results in showing the virtual environment path

import requests     # Just to check if the requests package was installed properly The code runs without showing any error.
exit()              # To exit out of Python

## To de-activate environment
exit


# To Activate
pipenv run Python

pip install -r Requirements.txt

pip lock -r             # Shows list of all dependencies and these would be saved to Requirements.txt file

pip install pytest --dev     # By suffixing --dev, the package('pytest' for example) would get installed only to the local environment 
                               (for developer/development sake) and would not be packaged (Would not be included while packaging).
                               These packages are listed under [dev-packages] list in Pipfile
                               
                               
[Example - Just for testing functionality]
pipenv uninstall requests          # This would uninstall the package(requests) and remove the package name from the list of installed                                        [packages] in Pipfile.


# To re-create virtual environment
    # To change something (some version of python for example), change the version number in Pipfile and run the following (3.6 is the changed version number)
    
pipenv --python 3.6 

pipenv run python                 # Shows the new (changed) version of python running


# To remove virtual environment

pipenv --rm


pipenv install                      # Installs all the packages listed in the Pipfile


pipenv --venv                       # Would output the path to the virtual environment


pipenv check                        # Checks if any of the packages have any issues, it shows and it would show if there are any newer 
                                      versions in which the issues were resolved...etc..
                                      
                                      
pipenv graph                        # Shows what packages are dependent on what other packages in the installed packages.


pipenv lock                         # Once you are sure everything is alright (using pipenv check), you can run this code.


code .

# Create .env file in your project to save all environment variables
          Example any <secret key>. This file would be the first file that would be executed (or call it Loaded) when 'pipenv run python' gets executed.
          This .env file need not be checked in / uploaded to GIT as it may contain some unsharable information like DB connection info or some password or serial-key...etc...
          



```
We should see the Source folder and 2 files :: Pipfile and Pipfile.lock

Under src folder create your App.py or by any python file name of your choice 

Happy coding

******************************


Refer to this page for more info :

https://www.digitalocean.com/community/tutorials/how-to-use-git-a-reference-guide


