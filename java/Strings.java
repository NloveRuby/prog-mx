public class Strings {
    // 1. Write a Java program to find the length of a string.
    static int len(String str) {
        return str.length();
    }

    // 2. Write a Java program to concatenate two given strings.
    static String concat(String s1, String s2) {
        return s1 + s2;
    }

    // 3. Write a Java program to check if two strings are equal or not
    static boolean isEqual(String s1, String s2) {
        return s1.equals(s2);
    }

    public static void main(String[] args) {
        String myname = "Nsr";
        String[] splitArray = myname.split("");
        for (String s : splitArray) {
            System.out.println(s);
        }
        System.out.println("Length of the string: " + len(myname));
        String yourname = "Alice";
        System.out.println("Concatenated string: " + concat(myname, yourname));
        if (isEqual(myname, yourname))
            System.out.println("Both strings are equal");
        else
            System.out.println("Strings are not equal");
    }
}
