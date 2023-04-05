# 30Days-ofNode

<strong><strong>Day 3 of #30DaysOfNode: Intro to Modules and CRUD Operations in </strong></strong>

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

![bjuu](https://user-images.githubusercontent.com/47923142/230116272-5324e51d-00f0-49cb-b903-3bc287e3d081.jpg)


