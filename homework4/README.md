Homework #4 Loustau-Dondero
===========================

Problem 1
---------
Acknowledgments:
http://web.archive.org/web/20090320002214/http://www.ecn.purdue.edu/ParaMount/papers/rubin87goto.pdf

Rubin presents us with a rather interesting problem, one particularly hard to solve in languages that do not allow restarts or targeted loop exits.It is only under these circumstances that using a goto statement to break out of an inner loop should be tolerated. 

Nevertheless, this does not mean that using goto statements is a good idea. In 1963, Peter Naur wrote an article (Source: http://portal.acm.org/citation.cfm?id=113602) where he pointed out that many of the gotos in people’s Algol 60 code were actually for loops in disguise or *ifs* with a compound body in disguise.(Source bellow) His basic argument is that if a piece of code is doing something which the language has a built-in syntax for, then it will be easier for a reader to understand the code if it uses that built-in syntax. For example, upon seeing a *for* loop with a compound body, a reader will immediately know that the code is a loop, what code is in the loop, and what the start and end conditions for the loop are. If the same code is written using gotos, then the reader must figure this all out.

One way to solve this problem in C is with flags:

    int i, j, has_a_non_zero_item, first_zero_row = -1;
    for (i = 0, has_a_non_zero_item = 0; i < n; i++) { 
      for (j = 0; j < n; j++) {
        if (a[i][j]) {
          has_a_non_zero_item = 1;
          break;
        }
      }
      if (!has_a_non_zero_item) { 
       first_zero_row = i;
        break;
      }
    }

Just as Peter Naur stated, this is in fact very hard to read, let alone comprehend. In fact, this solution is not even viable if the integer was too large, given that C uses modular arithmetic and if the integer ends up being bigger than the max int, it would render this solution useless.

Fortunately, contemporary languages such as Java provide us  with the ability to name loops and therefore state which loop to break from or continue to -thus being able to leave the outer loop from an inner loop. The code below illustrates this:

    int firstZeroRow(int[][] a) {
      row: for (int i = 0 ; i < n; i++) {
        column: for (int j = 0; j < n; j++) {
          if (a[i][j] != 0) continue row;
        }
        return i;
      }
      return -1;
    }

In addition to this, several modern languages contain a return statement, therefore allowing the user to use a function to solve the problem as follows:
[CODE]

Even in languages that do not allow labeled loops there are other statements that produce similar results. In Ruby, for instance, we can use a catch statement:

    catch (:nonzero) do
      a.each_with_index do |row, i|
        row.each do |x|
          throw :nonzero if x != 0
        end
        return i
      end
    end

Several scripting languages allow functions as first-class values which enable the use of lists directly -such is the case of JavaScript and Python.

In fact, a solution to Rubin's problem can be produced in one line in Python through the use of the function "next" on generators. The generator creates index, row pairs for each row, if they are all zeros:

    next((i for i,row in enumerate(a) if all(x == 0 for x in row)), -1)

It can therefore be concluded that the use of goto statements is a bad programming practice and can be avoided through the use of high-level programming constructs offered by modern languages, such as labeled loops, return statements, catch statements and next functions on generators. On the other hand, if a goto statement is used, the code will most likely end up as unreadable spaghetti code.


Problem 2
---------
Acknowledgments:
regex101.com

a) Python

    import re
    p = re.compile(ur'^"[^\x00-\x0F\x80-\xA0]+"$', re.MULTILINE)
    test_str = u"g1\nb2\ncdadadedfaebadjaapjdinpanian!c\niadjioajaiojaaA\n80\nA0\ncadaladjal\nldjlajalc\ncaldjaldajlc\n\n\"ajdakljadlkjadlk\"jjlk\"\n\n[^\x00-\x0F\x80-\xA0]+"
    re.findall(p, test_str)

Javascript

    var re = /^"[^\x00-\x0F\x80-\xA0]+"$/gm; 
    var str = 'g1\nb2\ncdadadedfaebadjaapjdinpanian!c\niadjioajaiojaaA\n80\nA0\ncadaladjal\nldjlajalc\ncaldjaldajlc\'\nread\nred\nreal\n \n \n\n"ajdakljadlkjadlk\"jjlk"\n\n[^\x00-\x0F\x80-\xA0]+';
    str = str.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
    var m;
     
    while ((m = re.exec(str)) != null) {
        if (m.index === re.lastIndex) {
            re.lastIndex++;
        }
    }

b) Python

    import re
    p = re.compile(ur'^\*[^\*]*\*$')
    test_str = u"*ba*"
     
    re.search(p, test_str)

Javascript

    var re = /^\*[^\*]*\*$/; 
    var str = '*ba*';
    var m;
     
    while ((m = re.exec(str)) != null) {
        if (m.index === re.lastIndex) {
            re.lastIndex++;
        }
    }

c)
http://stackoverflow.com/questions/13340717/json-numbers-regular-expression

Python

    import re
    p = re.compile(ur'-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?', re.MULTILINE)
    test_str = u"g1\nb2\ncdadadedfaebadjaapjdinpanian!c\niadjioajaiojaaA\n80\nA0\ncadaladjal\nldjlajalc\ncaldjaldajlc'\nread\nred\nreal\n \n \n\n\"ajdakljadlkjadlk\"jjlk\"\n\n[^\x00-\x0F\x80-\xA0]+"
     
    re.findall(p, test_str)

Javascript

    var re = /-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/gm; 
    var str = 'g1\nb2\ncdadadedfaebadjaapjdinpanian!c\niadjioajaiojaaA\n80\nA0\ncadaladjal\nldjlajalc\ncaldjaldajlc\'\nread\nred\nreal\n \n \n\n"ajdakljadlkjadlk\"jjlk"\n\n[^\x00-\x0F\x80-\xA0]+';
    var m;
     
    while ((m = re.exec(str)) != null) {
        if (m.index === re.lastIndex) {
            re.lastIndex++;
        }
    }

d)
Python

    import re
    p = re.compile(ur'^((?!read|red|real|\s).)+', re.MULTILINE)
    test_str = u"g1\nb2\ncdadadedfaebadjaapjdinpanian!c\niadjioajaiojaaA\n80\nA0\ncadaladjal\nldjlajalc\ncaldjaldajlc'\nread\nred\nreal\n \n \n\n\"ajdakljadlkjadlk\"jjlk\"\n\n[^\x00-\x0F\x80-\xA0]+"
     
    re.findall(p, test_str)

Javascript

    var re = /^((?!read|red|real|\s).)+/gm; 
    var str = 'g1\nb2\ncdadadedfaebadjaapjdinpanian!c\niadjioajaiojaaA\n80\nA0\ncadaladjal\nldjlajalc\ncaldjaldajlc\'\nread\nred\nreal\n \n \n\n"ajdakljadlkjadlk\"jjlk"\n\n[^\x00-\x0F\x80-\xA0]+';
    var m;
     
    while ((m = re.exec(str)) != null) {
        if (m.index === re.lastIndex) {
            re.lastIndex++;
        }
    }

3) 

 Go

    func arrayMin(a []int, min int) int {
      if (len(a) === 0) {
        return min
      } else {
        if (a[0] < min) {
          min = a[0]
        }
      }
      return arrayMin(a[1:], min)
    }


  Python
    def listMin(x,min=None,checked=0):
      if checked==len(x):
        return min
      elif checked==0:
        min=x[0]
      elif x[checked]<min:
        min=x[checked]
      listMin(x,min,checked+1)

  Javascript
  http://stackoverflow.com/questions/8522400/infinity-vs-number-positive-infinity
    var arrayMin = function (arr) {
      var f = function (arr, min) {
      return arr.length === 0 ? min : f(a.slice(1), min < a[0] ? min : a[0])
      }
    return f(arr, Infinity);
    }

  C

    int arrrayMin(int a[], int n) {
      if (n == 1)
          return a[0];
      n--;
      return arrayMin(a + (a[0] > a[n]), n);
    }

4) 
double *a[n]; // array of n pointers to doubles
double (*b)[n]; // pointer to array of n doubles
double (*c[n])(); // array of n pointers to functions taking unspecified number of arguments returning doubles
double (*d())[n]; // function taking unspecified number of arguments and returning pointer to array of n doubles

Go
var a [n]*float64
var b *[n]float64
var c [n]*func()float64
func d func()*[n]float64

Rust
let a: [*mut f64, ..n];          
let b: *mut [f64, ..n];          
let c: [fn() -> f64, ..n];        
fn d() -> *mut [f64, ..n];

5) If I were a compiler, I would not be happy at all. In fact, I would be quite sad, upset and disappointed at the human being that wrote the code snippet aforementioned. Because of his mistake I would go into an infite loop and have to wait for an external event to terminate the loop. However, if I were smart enough and could recognize dependencies in the code I would just refuse to compile it, thus avoiding getting into the silly loop.  

6) 
7.4 The pass statement
https://docs.python.org/3/reference/simple_stmts.html

    def g(): print("left")
    def h(): print("right")
    def f(x, y): pass
    f(g(), h())

7)
In most language implementations, the activation records for different instances of foo will occupy the same space in the stack. Local variable i is never initialized (that's why the program is erroneous), but if the stack space has not been used for anything else in the meantime it may "inherit" a value from the previous instance of the routine. If the stack is created from space filled by zeros by the operating system, and if the space occupied by foo's activation record is not used for anything else before the first time foo is called, then i will start with the value zero in the first iteration of the loop.

8)
With dynamic scoping, the current binding for a name is the one most recently enocuntered during execution. 

If the program uses shallow binding, it will output 10203040. This is becaue the calls to setX and printX in foo, use the local x, which takes the values 1, 2, 3, and 4 successively and the calls to print_x from the body of the script use the global x which is always 0.

If the program, on the other hand, uses deep binding, it will output 10x20044. This is because the direct calls refer to the local x. The only relevant scenario when shallow and deep binind differ is when a subroutine is called through a reference. SetX and printX, in this program, refer to a variable x. When they are passed, x referred to the global x. In the case of deep binding, the parameters S and P will be such that they will refer to the global x.

9) Early versions of Fortran (such as Fortran IV) used call by reference, but also passed constants by reference,  allowing them (constants) to change their values.

In early versions of Fortran, when a variable is passed as a actual argument to  a procedure, and the procedure modifies the corresponding dummy argument, the variable itself gets modified. In other words, changing the value of a dummy argument inside  a procedure changes the actual/formal variable (corresponding entity used in the CALL statement) that invoked it. This is exactly what happened to the constant 2 in the code provided.

As pointed out by this example, the main disadvante of passign by reference is that one may accidentally change an argument one didn't mean to. If modification of constants is possible, it defeats the original purpose of a programming safety measure, and turns constants into a programming trap.

10) a) 1,2,3,4
    b) 2,2,2,4
    c) 2,2,3,4
    d) 2,2,3,3

  value — Argument value is copied to the parameter; changes to parameter are not reflected in argument.
  value/result — Argument value copied in; parameter value copied out at end of callee.
  reference — An implementation of aliasing through passing the address of the argument.
  name — Parameter is more or less a macro, taking on the source code text of the argument.