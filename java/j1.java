class j1{
    /**
     * @param args
     */
    public static void main(String[] args) {
        System.out.println("Hello nasr");
        System.out.println(2+3);
        // data types in java
        int a = 5;
        double b = 6.7;
        char c='A';
        boolean d=true;
        // type casting
        byte e=4;
        short f=98;
        int g=(int)(e +f);
        long h=909090L;
        float i=9.9F;
        double d2 = 12.44;
        System.out.println("The value of variable g is "+g);
        int age = 25;
        String name = "John Doe";
        boolean isStudent = true;

        System.out.println("Age: " + age);
        System.out.println("Name: " + name);
        System.out.println("Is Student: " + isStudent);
        // operators in java
        System.out.println("Addition : " + (a+b));
        System.out.println("Subtraction :"+(d2-i));
        System.out.println("Multiplication :"+ (a*c));
        System.out.println("Division : "+(h/i));
        System.out.println("Modulus : "+(h%i));
        // logical operators and bitwise operators
        boolean d3 = true;
        boolean i3 = false;

        System.out.println("Logical AND : " + (d3 && i3));
        System.out.println("Logical OR : " + (d3 || i3));
        System.out.println("Logical NOT : " + (!d3));
                
       
        String str="nasr";
        System.out.println(str.length());
        System.out.println(str.concat(" is my name"));
        System.out.println(str.substring(0,5));
        System.out.println(str.toUpperCase()+" "+str.toLowerCase
        ());
        System.out.println(Math.sqrt(49));
        System.out.println(Math.abs(-9));
        System.out.println(Math.max(2,9));
        System.out.println(Math.min(2,9));
        }


    }
