# 30Days-ofNode

<strong><strong>A)Day 3 of #30DaysOfNode: Intro to Modules and CRUD Operations in fs </strong></strong>

Today, I learned the concept of Modules in NodeJS and do some hands-on in the fs core module system by Creating, Reading, Updating, Deleting, and Renaming the file.



<strong>1)What are Modules?</strong>
-->In Node.js, modules refer to reusable code units that can be used in different parts of a program. They help to organize code into smaller, more manageable pieces, making it easier to maintain and debug applications.



<strong>2)Types of the module</strong>
-->There are two types of modules; Core and Local.

Core modules: These are built-in modules that come bundled with Node.js and can be used without any additional installation. Examples of core modules include fs, HTTP, path, and os.



<strong>3)CRUD Operations using the fs module</strong>
-->It is performed in both ways; synchronously as well as asynchronously.


a) First, I create the file named "index.js" to perform CRUD. It goes like this:

i)Creating the folder named tmp.
ii)Create a file in it named bio.txt and insert data into it.
iii)Add more data into the file at the end of the existing data.
iv)Read the data without getting the buffer data at first.
v)Rename the file name to mybio.txt.
vi)Delete both the file and the folder.


b)Second, for Asynchronous:
i) I created a file named "new.js" and perform writeFile, appendFile and readFile operations by importing the file system module; var fs=require('fs');
[SAME AS ABOVE].



<br>
<br>  


***<strong><strong>B)Day 4 of #30DaysOfNode: Synchronous vs Asynchronous in Node, Asynchronous CRUD operation using fs Module, Concept of OS Module.</strong></strong>***


Hey Folks,
***Today I gotta know the basic differences between Synchronous and Asynchronous in Node. Here is what I knew :

--->Async is multi-thread, which means operations or programs can run in parallel. Sync is single-thread, so only one operation or program will run at a time.

--->Async is non-blocking, which means it will send multiple requests to a server. Sync is blocking — it will only send the server one request at a time and will wait for that request to be answered by the server.

--->Async increases throughput because multiple operations can run at the same time. Sync is slower and more methodical.



***Did Basics Asynchronous CRUD Operation using file system Modules:
--->Create a folder named "tmp". //Used mkdir command

--->Create file names "bio.txt" inside "tmp" folder. //Used writeFile command

--->Append the data.
//Used appendFile command

--->Read the data without getting the buffer data at first. //Used readFile command to read and "utf-8" to prevent buffering of data

--->Rename the file "bio.txt" into "mybio.txt". //Used rename command

--->Delete the folder and the file;"tmp" as well as "mybio.txt". // used rmdir command to delete the folder and unlink command to delete the file



***Used OS Module to get the OS info:
--->The OS module is a built-in core module and provides developers with functions to retrieve information about the computer and its operating system and help in interaction.

--->Here are some of the commonly used methods and properties in 'os' module:

1)os.arch(): Returns the CPU architecture of the operating system.

2)os.cpus(): Returns an array of objects containing information about each logical CPU core on the system.

3)os.freemem(): Returns the amount of free system memory in bytes.

4)os.homedir(): Returns the home directory of the current user.

5)os.hostname(): Returns the hostname of the operating system.




![bjuu](https://user-images.githubusercontent.com/47923142/230118406-c3a757c7-e79a-43ac-be8e-7b5fc9da9483.jpg)

</br>
</br>
