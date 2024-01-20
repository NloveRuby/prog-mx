// Multiline Strings:

    // Template literals allow you to create multiline strings without the need for escape characters like \n.

    const message = `This is a
multiline string.`;

// String Interpolation:

// Template literals support string interpolation, which allows you to embed expressions or variables directly within the string using ${}.
// Example:

const name = 'John';
const greeting = `Hello, ${name}!`;

/*Expression Evaluation:

    Expressions within ${} in template literals are evaluated and their values are inserted into the resulting string.
    Example:*/ 

    const a = 5;
    const b = 10;
    const sum = `The sum of ${a} and ${b} is ${a + b}.`;
// Template Literals:
// Template literals are enclosed in backticks (``) instead of single or double quotes
const fullName = "John Doe";
console.log(`Hello, ${fullName}!`); // Outputs: Hello, John
// Tagged Templates:
function tag(templateLiteral) {
    console.log("Tag function called");
    return templateLiteral;
    }
    tag`Hello, ${"World"}!`; // Outputs: Tag function called Hello, World.


/*Tagged Templates (Advanced):

    Template literals can be "tagged" with a function that processes the template and returns a modified string.
    The tag function is called with an array of string literals and the evaluated expressions as arguments*/ 

    function highlight(strings, ...values) {
        let result = '';
        strings.forEach((string, i) => {
          result += string;
          if (values[i]) {
            result += `<strong>${values[i]}</strong>`;
          }
        });
        return result;
      }
      
      const name2 = 'John';
      const age = 25;
      const message2 = highlight`Hello, my name is ${name2} and I am ${age} years old.`;
      
/**/ 
/**/ 
/**/ 