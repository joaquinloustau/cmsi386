Homework #3 Loustau-Dondero
===========================

Problem 1
---------
                 %=
               /    \
             ||      ^
            /  \    / \
           >=   y  7   &
          /  \         /\
         >=   *       6  p
        / \   /\
       =   m  ! ~
      / \     | |
     a   3    & 6
              |
              4
Problem 2
---------
     function f() {
        return
            {x:5}
     }
One might expect this script to return the object {x:5}. However, this script actually returns undefined as JavaScript inserts a semicolon after a return followed by a new line. Python behaves the same way, terminating the statement if return is followed by a new line.

     var b = 8
     var a = b + b
     (4+5).toString(16)
One might expect this script to return '9' as a result of the third line, having initialized **b** to 8  in the first line and **a** to 16 in the second line. However, this script actually result in a TypeError since **b** is not a function. Python would end the declaration of **a** after the second **b**, thus initializing it to 16.

     var place = "mundo"
     ["Hola", "Ciao"]p.forEach(function (command) {
        alert(command + ", " + place)
     })
One might expect this script to alert 'Hola mundo' and 'Ciao mundo'. However the variable place does not get fully initiliazed in the first line because of the missing semicolon so JavaScript tries to evaluate "mundo"["Hola","Ciao"] which evaluates to undefined. Therefore it is not possible to call the method forEach of undefined and this results in a TypeError. Just like in the previous example, Python ends the initialization of place after "mundo". 

     var sayHello = function () {
        alert("Hello")
     }
     (function() {
        alert("Goodbye")
     }())
One might expect the script to alert "Goodbye" as it seems  sayHello is just initliazed with the result of an alert function alerting "Hello."  This script actually initializes sayHello with an alert function alerting "Hello" and to which an argument is passed. This arguments alerts "Goodbye" and then produces undefined. The original function call is then made and "Hello" is returned. Python's syntax does not permit to produce an equivalent script. 

Problem 3
---------
    int f(int n) {
        int x = 0;
        int y ;
        if (n % 2 == 0) {
            x = 1;
            return 1;
        } else {
            y = f(n + 1);
            return x + y;
        }
    }

Problem 4
---------
This program prints 1122 if the language uses static scoping and 1121 if it uses dynamic scoping. With static scoping, the second execution of setX assigns 2 to the global x, so the last time printX is called, it outputs 2. On the other hand, when dynamic scoping is employed, the secon time setX is called it changes the local x to 2, but not altering the global x.

Problem 5
---------
We do need a special symbol for unary negation in order to avoid using parentheses. If we didn't have a special symbol (such as ~), the operator '-' would have a variable arity (variadic operator). It would allow one operand for unary negation and two operands for substraction, and parenthesis would thus be needed.

Postfix: b ~ 4 a \*c \* sqrt + 2 a * /
Prefix: / + ~ b sqrt * * 4 a c * 2 a

Problem 6
---------

    var a = 1;b = 1;c = 1;d = 1;
    function f(x){
      c = 3;
      return x;
    }
    console.log(a - f(b) - c * d);

This JavaScript script would output -3 to the console if f(b) is evaluated  before c\*d and -1 if c\*d is evaluated before f(b).

Problem 7
---------
        
    int* interleave(int x[], size_t sizex, int y[], size_t sizey) {
        int* result = new int[sizex + sizey];
        int n = sizex > sizey ? sizex : sizey;
        for (int i = 0, j = 0; j < n; j++) {
            if (j < sizex) {
                result[i++] = x[j];
            } 
            if (j < sizey) {
                result[i++] = y[j];
            }
        }
        return result;
    }


Problem 8
---------
    template<class T>
    vector<T> interleave(vector<T> x, vector<T> y) {
      vector<T> result = {};
      int sizex = x.size();
      int sizey = y.size();
      int n = max(sizex, sizey);
      for (int i = 0; i < n; i++) {
        if (i < sizex) {
            result.push_back(x[i]);
        }
        if (i < sizey) {
            result.push_back(y[i]);
        }
      }
      return result;
    }

Problem 9
---------
a) **same_fringe** is not efficient at all when the trees differ in their first few leaves because the method produces the whole fringe for each tree and then compares them. Therefore, even if two trees differ in the first node, the method would still compute the list of all ordered nodes for the whole tree (and for each tree).

b)

    from itertools import izip_longest
    def same_fring(tree1, tree2):
    def efficient_fring(tree):
        if not tree.children:
            yield tree.data
        else:
            for child in tree.children:
                for node in efficient_fringe(child):
                    yield node
    for node1, node2 in izip_longest(efficient_fringe(tree1), efficient_fringe(tree2)):
        if node1.data != node2.data:
            return False
    return True
    #https://docs.python.org/2/library/itertools.html
            

c) 

    function sameFringe (tree1,tree2) {
        function* efficientFringe (tree) {
            if (!tree.children) {
                yield tree.data;
            } else {
                for (child of tree.children) {
                    yield *efficientFringe(child)
                }
            }
        }
        var i1 = efficientFringe(tree1);
        var i2 = efficientFringe(tree2);
        var n1 = i1.next();
        var n2 = i2.next();
        while (!n1.done && !n2.done) {
            if (n1.data != n2.data) {
                return false;
            }
            n1=i1.next();
            n2=i2.next();
        }
        return n1.done && n2.done;
    }
Problem 10
-----------
This is incorrect because every argument of the function is evaluated before the call. The conditional operator evaluates an expression, returning one value if that expression evaluates to true, and a different one if the expression evaluates as false. It does not evaluate both sides. 
A macro would help because before the program is compiled, the C++ preprocessor expands the macro. In other words, in this case the macro is turned into a conditional expression before the code gets compiled and run.


        #define if_then_else (x,y,z) (x ? y : z)

