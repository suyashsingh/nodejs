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


nodejs events
--------

* Events can be used for firing some function when something happens. For example
you can bind an event such that when ever some one tries to open a file you
put up and alert window, etc.

* nodejs has a built in event module. Using this module you can:
        - create
        - listen
        - fire 
        your events.

* Objects in nodejs can fire events. eg. the readStream object fires events when 
opening or closing a file.

* Using the events module you can create, fire adn listen for your own events. You will have to used to require() method for
including the module.

* Also all event properties and methods are an instance of the
`EventEmitter` object. So for acessing the event related methods and properties you will need to create an `EventEmitter` object.

File Upload / Formidable Module
--------

Formidable is a very good module for uploading files to the server. 
You will need to download the module using npm. 
Then you will have to require that module in your nodejs code,
and you are good to go.

What is done in this example is that a form is created so
that the user can selet the file that he has to upload.

Now when the file reaches the server it is first stored in a
`temporary folder`. You can change the location of the file
from the temporary location to the location of you choice
by passing a callback function as the third argumenmt of the
parse() function.

MySql
--------

1. Try connecting to the database.(make sure that the database service is running)

2. Creating a Database - use the `CREATE DATABASE` statement to create database.

3. Creating a Table in a database - use the `CREATE TABLE` statment and also mention the
    name of the database where you want to create the table.

    You should also create provide the primary key for the record. This will make the record unique.
    You can define of the columns as  `INT AUTO_INCREMENT PRIMARY KEY`. It will start with 1 and keep
    on increasing as you add more entries to the table.

    If the table is already exsists then you will have to alter the table for adding new column (Which will be your primary key) - `ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY`.

4. Inserting data into the table - use the `INSERT INTO` statement.

    You can either insert single record or multiple records at a time.

    For adding multiple records, you will have to make an array containing the values and
    insert a `?` in the sql query(It will be replaced by the value array).

    *RESULT object*: When you fire a query you will get a result object back. The result object will
    contain information about how the query affected the table.
    
    The result object looks like:

        {
            fieldCount: 0,
            affectedRows: 14,
            insertId: 0,
            serverStatus: 2,
            warningCount: 0,
            message: '\'Records:14  Duplicated: 0  Warnings: 0',
            protocol41: true,
            changedRows: 0
        } 

    For example:
    
    - If you insert multiple columns in to the table you can get the number of rows that were added by checking the `affectedRows` column of the records object.

    - Get the id of the row that you have inserted using `insertId` field. 
    
    > *This will work only for single record operations*


5. Selecting data from the table i.e. Quering the data that is in the table - use the `SELECT`      statement.

    - Selecting all columns: `SELECT * FROM table_name`

    - Selecting column name: `SELECT column_1, column_2 from table _name`


Upon execution of the `SELECT`statement, you will get a:

    1. `result` object &
    2. `fields` object  

as result of the query.

The result object will be an array of objects, with each object denoting a row that was the outcome of your query.

Fields object is an array containg information about each field in the result.

You can also use the `where` statement as a filter to the `select` statment. You can use wild cards, ? placeholder, etc.

*The queries should be escaped using the mysql.escape() method to prevent SQL injection.*

    