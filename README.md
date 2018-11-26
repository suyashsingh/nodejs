# nodejs
NodeJS Codes

Modules are simalar to libraries in javascript.
require() method is used to include modules in your nodejs code.


Files:
--------
There are the following methods for creating files using the file system module:
1. fs.appendFile() 
    This method will append data to an existing file. If the file is not available
    it will be created.

2. fs.open()
    This method will create a new file is file is not present. Also you have a second
    arguement that specifies the mode for opening file: eg "w"

3. fs.writeFile()
    This method will create a file for writing if it is not exisitant else the file will
    be opened and all the content that is in the file will be *REPLACED* with the new content.
    The fs.appendFile() method on the other hand will be just adding contents to the existing
    file if it exists.

4. fs.unlink()
    This method is used to delete a file.

5. fs.rename()
    This method is used to rename a file.




nodejs packages
--------
NPM is the package manager for nodejs.
* Modules: are js libraries

* Package in nodejs: will contain all the file that you need 
    for module.

* Downloading a package:
    npm install name-of-package
    say for example `upper-case`

    When you download a package using npm it will create a folder called `node_modules` 
    in the current directory where you are working.

    Now once you have installed the package you will need to include the package in your nodejs project.
    You will have to use the same `require()` method that was used earlier.